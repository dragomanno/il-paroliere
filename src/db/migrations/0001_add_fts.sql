-- Il Paroliere — Migration 0001: Full-Text Search
-- Phase 5: pg_trgm + tsvector for Italian FTS on lemmas table
--
-- What this migration does:
--   1. Enable pg_trgm extension (trigram fuzzy matching)
--   2. Add search_vector tsvector column
--   3. Populate search_vector for all existing rows
--   4. Create GIN index on search_vector (fast FTS queries)
--   5. Create GIN trigram index on lemma column (fuzzy slug/lemma match)
--   6. Create trigger to auto-update search_vector on INSERT/UPDATE

-- 1. Extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- 2. Add search_vector column
ALTER TABLE lemmas
  ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- 3. Populate for existing rows
-- Weight A = lemma (highest), B = short_definition, C = definition + paroliere_note
UPDATE lemmas
SET search_vector =
  setweight(to_tsvector('italian', coalesce(lemma, '')), 'A') ||
  setweight(to_tsvector('italian', coalesce(short_definition, '')), 'B') ||
  setweight(to_tsvector('italian', coalesce(definition, '')), 'C') ||
  setweight(to_tsvector('italian', coalesce(paroliere_note, '')), 'C');

-- 4. GIN index on tsvector
CREATE INDEX IF NOT EXISTS lemmas_search_vector_idx
  ON lemmas USING GIN (search_vector);

-- 5. GIN trigram index on lemma for fuzzy matching
CREATE INDEX IF NOT EXISTS lemmas_lemma_trgm_idx
  ON lemmas USING GIN (lemma gin_trgm_ops);

-- 6. Trigger function to keep search_vector in sync
CREATE OR REPLACE FUNCTION lemmas_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('italian', coalesce(NEW.lemma, '')), 'A') ||
    setweight(to_tsvector('italian', coalesce(NEW.short_definition, '')), 'B') ||
    setweight(to_tsvector('italian', coalesce(NEW.definition, '')), 'C') ||
    setweight(to_tsvector('italian', coalesce(NEW.paroliere_note, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS lemmas_search_vector_trigger ON lemmas;
CREATE TRIGGER lemmas_search_vector_trigger
  BEFORE INSERT OR UPDATE ON lemmas
  FOR EACH ROW EXECUTE FUNCTION lemmas_search_vector_update();
