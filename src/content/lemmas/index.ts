// Il Paroliere — Central lemma registry
// License: MIT

import type { LemmaEntry } from "@/lib/types";
import { garbo } from "./garbo";
import { cura } from "./cura";
import { algoritmo } from "./algoritmo";

/** All seed lemmas in display order */
export const allLemmas: LemmaEntry[] = [garbo, cura, algoritmo];

/** Lookup map: slug → LemmaEntry */
export const lemmaBySlug: Record<string, LemmaEntry> = Object.fromEntries(
  allLemmas.map((entry) => [entry.slug, entry])
);

/** Get a single lemma by slug, or undefined if not found */
export function getLemma(slug: string): LemmaEntry | undefined {
  return lemmaBySlug[slug];
}

/** Get all slugs (useful for generateStaticParams) */
export function getAllSlugs(): string[] {
  return allLemmas.map((e) => e.slug);
}
