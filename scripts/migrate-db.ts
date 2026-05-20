/**
 * Il Paroliere — DB migration runner
 *
 * Uses the standard 'postgres' driver (TCP) instead of @neondatabase/serverless
 * (websocket-only). drizzle-kit's built-in migrate command doesn't work with
 * the serverless driver in CI environments.
 *
 * Usage:
 *   DATABASE_URL_OWNER=<owner-url> npx tsx scripts/migrate-db.ts
 *
 * License: MIT
 */

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import path from "path";

const DATABASE_URL = process.env.DATABASE_URL_OWNER ?? process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("❌  DATABASE_URL_OWNER (or DATABASE_URL) is not set.");
  process.exit(1);
}

async function runMigrations() {
  console.log("🔄  Running migrations…");

  const client = postgres(DATABASE_URL!, { max: 1 });
  const db = drizzle(client);

  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), "src/db/migrations"),
  });

  console.log("✅  Migrations complete.");
  await client.end();
}

runMigrations().catch((err) => {
  console.error("❌  Migration failed:", err);
  process.exit(1);
});
