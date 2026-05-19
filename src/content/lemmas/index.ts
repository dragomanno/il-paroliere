// Il Paroliere — Central lemma registry
// License: MIT

import type { LemmaEntry } from "@/lib/types";

// Phase 1 — seed lemmas
import { garbo } from "./garbo";
import { cura } from "./cura";
import { algoritmo } from "./algoritmo";

// Phase 2 — seed lemmas
import { resilienza } from "./resilienza";
import { pragmatismo } from "./pragmatismo";
import { mangiaufo } from "./mangiaufo";
import { accondiscendenza } from "./accondiscendenza";
import { suscettibile } from "./suscettibile";
import { aggregatore } from "./aggregatore";

/** All seed lemmas in display order (alphabetical within each phase) */
export const allLemmas: LemmaEntry[] = [
  accondiscendenza,
  aggregatore,
  algoritmo,
  cura,
  garbo,
  mangiaufo,
  pragmatismo,
  resilienza,
  suscettibile,
];

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
