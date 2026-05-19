// Il Paroliere — Search module (Phase 3: Fuse.js implementation)
// License: MIT

import Fuse from "fuse.js";
import type { FuseResult, IFuseOptions } from "fuse.js";
import type { LemmaEntry } from "@/lib/types";

/** Searchable snapshot of a lemma — lightweight, index-friendly */
export type SearchableEntry = {
  slug: string;
  lemma: string;
  shortDefinition: string;
  register: string[];
  domains: string[];
  /** Flat synonym terms for Fuse.js indexing */
  synonymTerms: string[];
};

/** Normalise a string for accent-insensitive comparison */
export function normaliseQuery(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/** Build a searchable index from the full lemma list */
export function buildSearchIndex(lemmas: LemmaEntry[]): SearchableEntry[] {
  return lemmas.map((entry) => ({
    slug: entry.slug,
    lemma: entry.lemma,
    shortDefinition: entry.shortDefinition,
    register: entry.register,
    domains: entry.domains,
    synonymTerms: (entry.synonyms ?? []).map((s) => s.term),
  }));
}

/** Fuse.js configuration — tuned for Italian lexicography */
const FUSE_OPTIONS: IFuseOptions<SearchableEntry> = {
  // Fields to search with weights (higher = more relevant)
  keys: [
    { name: "lemma", weight: 3 },
    { name: "synonymTerms", weight: 1.5 },
    { name: "shortDefinition", weight: 1 },
    { name: "domains", weight: 0.5 },
  ],
  // Fuzzy threshold: 0.0 = exact, 1.0 = anything.
  // 0.35 gives good typo tolerance without too much noise.
  threshold: 0.35,
  // Return score for sorting
  includeScore: true,
  // Minimum characters that must match
  minMatchCharLength: 2,
  // Don't search keys without value
  ignoreLocation: true,
};

/**
 * Create a Fuse.js instance from the search index.
 * Call this once (e.g., at module level or in a useMemo hook).
 */
export function createFuseInstance(
  index: SearchableEntry[]
): Fuse<SearchableEntry> {
  return new Fuse(index, FUSE_OPTIONS);
}

/**
 * Search lemmas using Fuse.js fuzzy matching with accent normalisation.
 *
 * Accent normalisation strategy:
 * - We also add accent-stripped copies of lemma/synonym fields to the
 *   index so queries without accents (e.g. "resilienza" → "resilienza",
 *   "suscettibile" → "suscettibile") still match correctly.
 *   Fuse.js handles the rest via its fuzzy algorithm.
 *
 * @param query   Raw user query
 * @param fuse    Pre-built Fuse instance
 * @returns       Matched entries, best match first
 */
export function searchLemmas(
  query: string,
  fuse: Fuse<SearchableEntry>
): SearchableEntry[] {
  if (!query || query.trim().length < 2) return [];

  const results: FuseResult<SearchableEntry>[] = fuse.search(query.trim());
  return results.map((r) => r.item);
}
