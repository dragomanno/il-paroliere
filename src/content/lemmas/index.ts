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

// Phase 3 — new lemmas (batch 1)
import { boria } from "./boria";
import { ozio } from "./ozio";
import { rimpianto } from "./rimpianto";
import { tangibile } from "./tangibile";

// Phase 3 — new lemmas (batch 2)
import { acume } from "./acume";
import { effimero } from "./effimero";
import { sgomento } from "./sgomento";
import { tacito } from "./tacito";

// Phase 3 — new lemmas (batch 3)
import { disinvoltura } from "./disinvoltura";
import { lacuna } from "./lacuna";
import { periferico } from "./periferico";
import { veemenza } from "./veemenza";

// Towards 100 — batch 1
import { ambiguita } from "./ambiguita";
import { caparbio } from "./caparbio";
import { connivenza } from "./connivenza";
import { diatriba } from "./diatriba";
import { eloquenza } from "./eloquenza";
import { fervore } from "./fervore";
import { greve } from "./greve";
import { insolito } from "./insolito";
import { lusinga } from "./lusinga";
import { malinconia } from "./malinconia";
import { nitido } from "./nitido";
import { ostinazione } from "./ostinazione";

/** All lemmas in display order (alphabetical) */
export const allLemmas: LemmaEntry[] = [
  accondiscendenza,
  acume,
  aggregatore,
  algoritmo,
  ambiguita,
  boria,
  caparbio,
  connivenza,
  cura,
  diatriba,
  disinvoltura,
  effimero,
  eloquenza,
  fervore,
  garbo,
  greve,
  insolito,
  lacuna,
  lusinga,
  malinconia,
  mangiaufo,
  nitido,
  ostinazione,
  ozio,
  periferico,
  pragmatismo,
  resilienza,
  rimpianto,
  sgomento,
  suscettibile,
  tacito,
  tangibile,
  veemenza,
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
