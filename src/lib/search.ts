// Il Paroliere — Search module (Phase 1 stub)
// License: MIT
//
// This module is intentionally minimal in Phase 1.
// Its architecture is designed to support a full Fuse.js-style fuzzy search
// in Phase 3, with tolerance for typos and missing accents.
//
// Future searchable fields:
//   - lemma            (exact + fuzzy)
//   - shortDefinition  (keyword)
//   - definition       (full-text)
//   - synonyms[].term  (fuzzy)
//   - relatedWords     (fuzzy)
//   - domains          (filter)
//
// Future capabilities:
//   - Accent-normalised search (e.g. "caffe" matches "caffè")
//   - Diacritic-insensitive matching
//   - Typo tolerance (Levenshtein distance / Fuse.js threshold)
//   - Priority: exact lemma > partial lemma > definition keyword > synonym
//   - Result format: lemma + shortDefinition + register[] + domains[]

import type { LemmaEntry } from "@/lib/types";

/** Normalise a string for accent-insensitive comparison */
export function normaliseQuery(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .trim();
}

/** Searchable snapshot of a lemma (lightweight, index-friendly) */
export type SearchableEntry = {
  slug: string;
  lemma: string;
  shortDefinition: string;
  register: string[];
  domains: string[];
  /** Pre-normalised concatenated text for fast matching */
  _searchText: string;
};

/** Build a searchable index from the full lemma list */
export function buildSearchIndex(lemmas: LemmaEntry[]): SearchableEntry[] {
  return lemmas.map((entry) => {
    const synonymTerms = (entry.synonyms ?? []).map((s) => s.term).join(" ");
    const related = (entry.relatedWords ?? []).join(" ");

    const _searchText = normaliseQuery(
      [
        entry.lemma,
        entry.shortDefinition,
        entry.definition,
        synonymTerms,
        related,
        entry.domains.join(" "),
      ].join(" ")
    );

    return {
      slug: entry.slug,
      lemma: entry.lemma,
      shortDefinition: entry.shortDefinition,
      register: entry.register,
      domains: entry.domains,
      _searchText,
    };
  });
}

/**
 * Phase 1 simple search — naive substring match on pre-built index.
 * Replace with Fuse.js in Phase 3 without changing the function signature.
 *
 * @param query   Raw user query
 * @param index   Pre-built search index (from buildSearchIndex)
 * @returns       Matched entries, ranked by relevance (exact first)
 */
export function searchLemmas(
  query: string,
  index: SearchableEntry[]
): SearchableEntry[] {
  if (!query || query.trim().length < 2) return [];

  const normalised = normaliseQuery(query);

  const exact: SearchableEntry[] = [];
  const partial: SearchableEntry[] = [];

  for (const entry of index) {
    const normLemma = normaliseQuery(entry.lemma);
    if (normLemma === normalised) {
      exact.push(entry);
    } else if (entry._searchText.includes(normalised)) {
      partial.push(entry);
    }
  }

  return [...exact, ...partial];
}
