/**
 * Il Paroliere — Drizzle Kit configuration
 *
 * Run migrations:
 *   DATABASE_URL_OWNER=<owner-url> npx drizzle-kit migrate
 *
 * Generate SQL from schema changes:
 *   npx drizzle-kit generate
 *
 * License: MIT
 */

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL_OWNER ?? process.env.DATABASE_URL ?? "",
  },
  verbose: true,
  strict: true,
});
