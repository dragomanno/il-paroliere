/**
 * Il Paroliere — Neon serverless DB client
 *
 * Uses @neondatabase/serverless which works in both Node.js and Edge runtimes.
 * DATABASE_URL is injected by Netlify from the connected Netlify DB (Neon).
 *
 * Usage:
 *   import { db } from "@/lib/db/client";
 *   const lemma = await db.select().from(lemmas).where(eq(lemmas.slug, "garbo"));
 *
 * License: MIT
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. " +
      "Add it in Netlify → Site → Environment variables."
  );
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { schema });
