/**
 * Il Paroliere — internal lemma link helpers
 *
 * Pure functions shared by the lemma page to resolve synonyms, antonyms and
 * related words to published entries and to choose the label to display.
 *
 * License: MIT
 */

/** Minimal projection of a published lemma, enough to build a link. */
export type LinkTarget = {
  slug: string;
  lemma: string;
  partOfSpeech: string;
  domains: string[];
};

/**
 * Normalises a display term to a URL slug.
 * Mirrors the slug convention used in LemmaEntry:
 *   - lowercase
 *   - spaces → hyphens
 *   - special/accented chars stripped to ASCII equivalent
 *     (Italian accents: à→a, è→e, é→e, ì→i, ò→o, ù→u)
 *     (Nordic chars: å→a, ä→a, ö→o, ø→o)
 *
 * Examples:
 *   "GenX"              → "genx"
 *   "Generazione Alpha" → "generazione-alpha"
 *   "e-commerce"        → "e-commerce"
 *   "skål"              → "skal"
 *   "slealtà"           → "slealta"
 */
export function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/[àáâã]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõ]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[åä]/g, "a")
    .replace(/[öø]/g, "o")
    .replace(/\s+/g, "-");
}

/** First word of a part-of-speech string ("sostantivo maschile" → "sostantivo"). */
function posHead(partOfSpeech: string): string {
  return partOfSpeech.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
}

/**
 * Chooses the label for a link to a published entry.
 *
 * - The label is the target's lemma, so slug-form terms such as
 *   "scalabilita" or "e-e-a-t" render as "scalabilità" and "E-E-A-T".
 * - When the target is a homograph of the current page (same lemma,
 *   different slug), a qualifier is appended in parentheses: the head of the
 *   target's part of speech if it differs from the current page's, otherwise
 *   the target's first domain. Example: "Alfiere (Palio di Siena)".
 */
export function linkLabel(target: LinkTarget, current: LinkTarget): string {
  const isHomograph =
    target.slug !== current.slug &&
    target.lemma.toLocaleLowerCase("it") === current.lemma.toLocaleLowerCase("it");
  if (!isHomograph) return target.lemma;

  const targetPos = posHead(target.partOfSpeech);
  const qualifier =
    targetPos && targetPos !== posHead(current.partOfSpeech)
      ? targetPos
      : target.domains[0];
  return qualifier ? `${target.lemma} (${qualifier})` : target.lemma;
}
