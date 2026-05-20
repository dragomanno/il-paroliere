/**
 * Il Paroliere — Neon serverless DB client
 *
 * Uses @neondatabase/serverless which works in both Node.js and Edge runtimes.
 * DATABASE_URL is injected by Netlify from the connected Netlify DB (Neon).
 *
 * The module-level guard has been removed to allow Next.js build-time
 * execution (e.g. sitemap.ts) in environments without a DB connection
 * (deploy previews, CI without DB vars). Queries will throw at call time
 * if DATABASE_URL is missing — callers should handle this gracefully.
 *
 * License: MIT
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

const url = process.env.DATABASE_URL ?? "";

const sql = neon(url);

export const db = drizzle(sql, { schema });
