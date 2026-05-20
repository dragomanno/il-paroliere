# Il Paroliere — Database Layer

## Architecture

Single Postgres table `lemmas` on **Netlify DB** (Neon serverless).
JSONB columns for nested structures (synonyms, antonyms, examples, sourceLinks).

## Stack

| Tool | Role |
|---|---|
| `@neondatabase/serverless` | Postgres driver (Node.js + Edge compatible) |
| `drizzle-orm` | Type-safe query builder |
| `drizzle-kit` | Schema migrations and codegen |

## Environment variables

| Variable | Used by | Value |
|---|---|---|
| `DATABASE_URL` | App in production | Read-only connection string |
| `DATABASE_URL_OWNER` | Migrations + seed script | Read/write connection string |

Both are set in **Netlify → Site → Environment variables**.

## Workflow

### First setup (run once)

```bash
# 1. Apply schema to DB
DATABASE_URL_OWNER=<owner-url> npm run db:migrate

# 2. Seed all lemmas from file registry
DATABASE_URL_OWNER=<owner-url> npm run db:seed
```

### After adding a new lemma file

The seed script uses upsert — safe to re-run:

```bash
DATABASE_URL_OWNER=<owner-url> npm run db:seed
```

### After changing the schema

```bash
# Generate new migration SQL
npm run db:generate

# Apply it
DATABASE_URL_OWNER=<owner-url> npm run db:migrate
```

## Phase 4 activation

The app currently reads lemmas from TypeScript files (`src/content/lemmas/`).
To switch to DB reads, update `src/content/lemmas/index.ts`:

```ts
// Replace file-based functions with DB queries:
export { getLemmaFromDB as getLemma, getAllSlugsFromDB as getAllSlugs, getAllLemmasFromDB as getAllLemmas }
  from "@/lib/db";
```

The DB query functions (`src/lib/db/queries.ts`) are signature-compatible
with the current file-based functions — no changes needed in pages.

## Files

```
src/db/
  schema.ts           — Drizzle table definition + TypeScript types
  migrations/
    0001_create_lemmas.sql — Initial schema
  README.md           — This file

src/lib/db/
  client.ts           — Neon client + Drizzle instance
  queries.ts          — getLemmaFromDB / getAllSlugsFromDB / getAllLemmasFromDB
  index.ts            — Barrel export

scripts/
  seed-db.ts          — Seeds all lemmas from file registry into DB

drizzle.config.ts     — Drizzle Kit configuration
```
