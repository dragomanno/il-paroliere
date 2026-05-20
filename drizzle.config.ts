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

// drizzle-kit migrate uses a direct TCP connection (not websocket).
// Must use the standard 'postgresql' driver here — NOT @neondatabase/serverless.
// The app runtime (src/lib/db/client.ts) continues to use @neondatabase/serverless.
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
