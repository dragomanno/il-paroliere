-- Il Paroliere — Initial schema migration
-- Run with: DATABASE_URL_OWNER=<owner-url> npx drizzle-kit migrate
-- License: MIT

CREATE TABLE IF NOT EXISTS "lemmas" (
  "slug"              text PRIMARY KEY,
  "lemma"             text NOT NULL,
  "part_of_speech"    text NOT NULL,
  "gender"            text,
  "definition"        text NOT NULL,
  "short_definition"  text NOT NULL,
  "etymology"         text,
  "paroliere_note"    text NOT NULL,
  "register"          jsonb NOT NULL DEFAULT '[]',
  "domains"           jsonb NOT NULL DEFAULT '[]',
  "examples"          jsonb NOT NULL DEFAULT '[]',
  "related_words"     jsonb DEFAULT '[]',
  "synonyms"          jsonb DEFAULT '[]',
  "antonyms"          jsonb DEFAULT '[]',
  "source_links"      jsonb NOT NULL DEFAULT '{}',
  "editorial_status"  text NOT NULL DEFAULT 'draft',
  "indexable"         boolean NOT NULL DEFAULT false,
  "seo_title"         text NOT NULL,
  "seo_description"   text NOT NULL,
  "created_at"        timestamptz NOT NULL DEFAULT now(),
  "updated_at"        timestamptz NOT NULL DEFAULT now()
);

-- Indexes
CREATE UNIQUE INDEX IF NOT EXISTS "lemmas_slug_idx"            ON "lemmas" ("slug");
CREATE        INDEX IF NOT EXISTS "lemmas_lemma_idx"           ON "lemmas" ("lemma");
CREATE        INDEX IF NOT EXISTS "lemmas_editorial_status_idx" ON "lemmas" ("editorial_status");
CREATE        INDEX IF NOT EXISTS "lemmas_indexable_idx"       ON "lemmas" ("indexable");

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON "lemmas";
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON "lemmas"
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
