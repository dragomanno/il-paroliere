/**
 * Il Paroliere — Fix script: ricalcola search_vector per i lemmi BATCH-005
 *
 * Il trigger Postgres non si è attivato durante l'upsert via neon-http.
 * Questo script esegue un UPDATE diretto per ri-populare search_vector
 * su tutti i lemmi che hanno search_vector = NULL.
 *
 * Safe to run multiple times.
 *
 * Usage:
 *   DATABASE_URL_OWNER=<url> npx tsx scripts/fix-search-vector.ts
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

const DATABASE_URL = process.env.DATABASE_URL_OWNER ?? process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("❌  DATABASE_URL_OWNER is not set.");
  process.exit(1);
}

const client = neon(DATABASE_URL);
const db = drizzle(client);

async function fixSearchVector() {
  console.log("🔧  Ricalcolo search_vector per lemmi con vettore NULL…");

  // Count NULL vectors before
  const countBefore = await db.execute(
    sql`SELECT COUNT(*) AS cnt FROM lemmas WHERE search_vector IS NULL`
  );
  console.log(`   Lemmi con search_vector NULL: ${(countBefore.rows[0] as any).cnt}`);

  // Update all NULL vectors using the same weights as the trigger
  const result = await db.execute(sql`
    UPDATE lemmas
    SET search_vector =
      setweight(to_tsvector('italian', coalesce(lemma, '')), 'A') ||
      setweight(to_tsvector('italian', coalesce(short_definition, '')), 'B') ||
      setweight(to_tsvector('italian', coalesce(definition, '')), 'C') ||
      setweight(to_tsvector('italian', coalesce(paroliere_note, '')), 'C')
    WHERE search_vector IS NULL
  `);

  // Count NULL vectors after
  const countAfter = await db.execute(
    sql`SELECT COUNT(*) AS cnt FROM lemmas WHERE search_vector IS NULL`
  );
  console.log(`   Lemmi con search_vector NULL dopo fix: ${(countAfter.rows[0] as any).cnt}`);
  console.log(`✅  Fix completato.`);
}

fixSearchVector().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
