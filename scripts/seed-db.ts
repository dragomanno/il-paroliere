/**
 * Il Paroliere — DB seed script
 *
 * Reads all lemmas from the file-based registry and inserts them into
 * the Netlify DB (Neon Postgres) using the owner connection.
 *
 * Usage:
 *   DATABASE_URL_OWNER=<owner-url> npx tsx scripts/seed-db.ts
 *
 * Safe to run multiple times — uses ON CONFLICT DO UPDATE (upsert).
 *
 * License: MIT
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import * as schema from "../src/db/schema";
import { allLemmas } from "../src/content/lemmas/index";
import type { LemmaEntry } from "../src/lib/types";

const DATABASE_URL = process.env.DATABASE_URL_OWNER ?? process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("❌  DATABASE_URL_OWNER (or DATABASE_URL) is not set.");
  process.exit(1);
}

const client = neon(DATABASE_URL);
const db = drizzle(client, { schema });

function lemmaToRow(entry: LemmaEntry): schema.NewLemmaRow {
  return {
    slug:             entry.slug,
    lemma:            entry.lemma,
    partOfSpeech:     entry.partOfSpeech,
    gender:           entry.gender ?? null,
    definition:       entry.definition,
    shortDefinition:  entry.shortDefinition,
    etymology:        entry.etymology ?? null,
    paroliereNote:    entry.paroliereNote,
    register:         entry.register,
    domains:          entry.domains,
    examples:         entry.examples,
    relatedWords:     entry.relatedWords ?? [],
    synonyms:         (entry.synonyms ?? []) as schema.SynonymRecord[],
    antonyms:         (entry.antonyms ?? []) as schema.SynonymRecord[],
    sourceLinks:      entry.sourceLinks as schema.SourceLinksRecord,
    editorialStatus:  entry.editorialStatus,
    indexable:        entry.indexable,
    seoTitle:         entry.seo.title,
    seoDescription:   entry.seo.description,
    createdAt:        entry.createdAt ? new Date(entry.createdAt) : new Date(),
    updatedAt:        entry.updatedAt ? new Date(entry.updatedAt) : new Date(),
  };
}

async function seed() {
  console.log(`🌱  Seeding ${allLemmas.length} lemmas into Netlify DB…`);

  let inserted = 0;
  let updated  = 0;
  let errors   = 0;

  for (const entry of allLemmas) {
    try {
      const row = lemmaToRow(entry);

      await db
        .insert(schema.lemmas)
        .values(row)
        .onConflictDoUpdate({
          target: schema.lemmas.slug,
          set: {
            lemma:           row.lemma,
            partOfSpeech:    row.partOfSpeech,
            gender:          row.gender,
            definition:      row.definition,
            shortDefinition: row.shortDefinition,
            etymology:       row.etymology,
            paroliereNote:   row.paroliereNote,
            register:        sql`${JSON.stringify(row.register)}::jsonb`,
            domains:         sql`${JSON.stringify(row.domains)}::jsonb`,
            examples:        sql`${JSON.stringify(row.examples)}::jsonb`,
            relatedWords:    sql`${JSON.stringify(row.relatedWords)}::jsonb`,
            synonyms:        sql`${JSON.stringify(row.synonyms)}::jsonb`,
            antonyms:        sql`${JSON.stringify(row.antonyms)}::jsonb`,
            sourceLinks:     sql`${JSON.stringify(row.sourceLinks)}::jsonb`,
            editorialStatus: row.editorialStatus,
            indexable:       row.indexable,
            seoTitle:        row.seoTitle,
            seoDescription:  row.seoDescription,
            updatedAt:       new Date(),
          },
        });

      // Small delay to avoid overwhelming the serverless connection
      await new Promise((r) => setTimeout(r, 30));

      process.stdout.write(`  ✓ ${entry.slug}\n`);
      inserted++;
    } catch (err) {
      console.error(`  ✗ ${entry.slug}:`, err);
      errors++;
    }
  }

  console.log("\n─────────────────────────────────");
  console.log(`✅  Done: ${inserted} upserted, ${errors} errors`);

  if (errors > 0) {
    console.warn("⚠️   Some lemmas failed to seed. Check the errors above.");
    process.exit(1);
  }
}

seed().catch((err) => {
  console.error("Fatal seed error:", err);
  process.exit(1);
});
