-- Il Paroliere — Migration 0002: keep the editorial updated_at
--
-- The set_updated_at trigger from 0000 rewrote updated_at to now() on every
-- UPDATE. Because the seed upserts every lemma on every deploy, all rows ended
-- up with the deploy timestamp, which leaked into the sitemap <lastmod> and
-- into the «Ultimo aggiornamento» line on lemma pages.
--
-- updated_at is now owned by the seed, which copies the editorial updatedAt
-- from the lemma files (src/content/lemmas/*.ts). Drop the trigger and its
-- function. The search_vector trigger from 0001 is unaffected.

DROP TRIGGER IF EXISTS set_updated_at ON "lemmas";
DROP FUNCTION IF EXISTS update_updated_at();
