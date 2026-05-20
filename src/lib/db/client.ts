/**
 * Il Paroliere — Neon serverless DB client (lazy init)
 *
 * Uses @neondatabase/serverless which works in both Node.js and Edge runtimes.
 * DATABASE_URL is injected by Netlify from the connected Netlify DB (Neon).
 *
 * The client is initialised lazily (on first use) so that Next.js can import
 * this module at build time without DATABASE_URL — e.g. deploy previews or CI
 * environments without DB access. Queries will throw at call time if the env
 * var is missing; callers should handle this gracefully.
 *
 * License: MIT
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

let _db: NeonHttpDatabase<typeof schema> | null = null;

/**
 * Returns the Drizzle DB instance, initialising it on first call.
 * Throws if DATABASE_URL is not set at call time.
 */
export function getDb(): NeonHttpDatabase<typeof schema> {
  if (!_db) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error(
        "DATABASE_URL is not set. Add it in Netlify → Site → Environment variables."
      );
    }
    _db = drizzle(neon(url), { schema });
  }
  return _db;
}
