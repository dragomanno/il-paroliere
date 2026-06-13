/**
 * Il Paroliere — DB query helpers
 *
 * Phase 5: added searchLemmasFromDB() using tsvector FTS + pg_trgm fallback.
 *
 * License: MIT
 */

import { getDb } from "@/lib/db/client";
import { lemmas } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import type { LemmaEntry } from "@/lib/types";
import type { RelatedWordRecord } from "@/db/schema";

/**
 * Map a DB row to the LemmaEntry type used throughout the app.
 * Keeps the rest of the codebase unaware of the DB layer.
 */
function rowToLemmaEntry(row: typeof lemmas.$inferSelect): LemmaEntry {
  return {
    lemma: row.lemma,
    slug: row.slug,
    partOfSpeech: row.partOfSpeech,
    gender: row.gender ?? undefined,
    definition: row.definition,
    shortDefinition: row.shortDefinition,
    register: (row.register as string[]) ?? [],
    domains: (row.domains as string[]) ?? [],
    etymology: row.etymology ?? undefined,
    examples: (row.examples as string[]) ?? [],
    synonyms: (row.synonyms as LemmaEntry["synonyms"]) ?? [],
    antonyms: (row.antonyms as LemmaEntry["antonyms"]) ?? [],
    relatedWords: (row.relatedWords as RelatedWordRecord[]) ?? [],
    sourceLinks: (row.sourceLinks as LemmaEntry["sourceLinks"]) ?? {},
    paroliereNote: row.paroliereNote,
    editorialStatus: row.editorialStatus as LemmaEntry["editorialStatus"],
    indexable: row.indexable,
    seo: {
      title: row.seoTitle,
      description: row.seoDescription,
    },
    createdAt: row.createdAt?.toISOString(),
    updatedAt: row.updatedAt?.toISOString(),
  };
}

/** Get a single lemma by slug. Returns undefined if not found. */
export async function getLemmaFromDB(
  slug: string
): Promise<LemmaEntry | undefined> {
  const db = getDb();
  const rows = await db
    .select()
    .from(lemmas)
    .where(eq(lemmas.slug, slug))
    .limit(1);

  if (rows.length === 0) return undefined;
  return rowToLemmaEntry(rows[0]);
}

/** Get all slugs — used by generateStaticParams at build time. */
export async function getAllSlugsFromDB(): Promise<string[]> {
  const db = getDb();
  const rows = await db.select({ slug: lemmas.slug }).from(lemmas);
  return rows.map((r) => r.slug);
}

/** Get all published lemmas — used by search index and homepage chips. */
export async function getAllLemmasFromDB(): Promise<LemmaEntry[]> {
  const db = getDb();
  const rows = await db.select().from(lemmas);
  return rows.map(rowToLemmaEntry);
}

/**
 * Full-text search with tsvector + pg_trgm fallback.
 *
 * Strategy:
 *   1. Primary: tsvector match via plainto_tsquery('italian', query)
 *      — handles morphology, stopwords, prefix matching with :*
 *   2. Fallback/boost: trigram similarity on lemma column
 *      — catches typos and partial matches (e.g. "resilenz" → "resilienza")
 *
 * Results are ranked by ts_rank (tsvector relevance).
 * Maximum 8 results returned.
 *
 * The query is sanitised: empty strings return [].
 */
export async function searchLemmasFromDB(
  query: string,
  limit = 8
): Promise<LemmaEntry[]> {
  const q = query.trim();
  if (q.length < 2) return [];

  const db = getDb();

  // Sanitise for tsquery: remove special chars, add prefix wildcard on last token
  const sanitised = q.replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, " ").trim();
  // Build prefix query: each word gets :* for prefix matching
  const tsQueryStr = sanitised
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => `${w}:*`)
    .join(" & ");

  try {
    const rows = await db
      .select()
      .from(lemmas)
      .where(
        sql`
          (
            search_vector @@ to_tsquery('italian', ${tsQueryStr})
            OR similarity(lemma, ${q}) > 0.2
          )
        `
      )
      .orderBy(
        sql`
          ts_rank(search_vector, to_tsquery('italian', ${tsQueryStr})) DESC,
          similarity(lemma, ${q}) DESC
        `
      )
      .limit(limit);

    return rows.map(rowToLemmaEntry);
  } catch {
    // Fallback: simple ILIKE on lemma if FTS is unavailable
    const rows = await db
      .select()
      .from(lemmas)
      .where(sql`lemma ILIKE ${"%" + q + "%"}`)
      .limit(limit);
    return rows.map(rowToLemmaEntry);
  }
}
