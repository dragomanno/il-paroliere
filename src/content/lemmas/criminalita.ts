// Il Paroliere — Lemma: CRIMINALITÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const criminalita: LemmaEntry = {
  lemma: "criminalità",
  slug: "criminalita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Insieme dei comportamenti che violano le norme penali vigenti in una società; " +
    "per estensione, il fenomeno complessivo della delinquenza misurato attraverso " +
    "tassi e statistiche: criminalità organizzata (strutturata in associazioni stabili), " +
    "criminalità diffusa (episodica e capillare), criminalità di Stato (perpetrata da " +
    "apparati istituzionali). Il termine indica sia il complesso degli atti criminali " +
    "sia la condizione sociale che li produce.",
  shortDefinition: "Insieme dei comportamenti che violano le norme penali; il fenomeno della delinquenza in una società.",
  register: ["formale", "tecnico-giuridico"],
  domains: ["diritto penale", "sociologia"],
  etymology:
    "Dal latino medievale *criminalitas*, derivato di *criminalis* (relativo al crimine), " +
    "a sua volta da *crimen* (accusa, reato). Attestato in italiano dal XVI secolo.",
  examples: [
    "Il rapporto annuale del Ministero dell'Interno fotografa l'andamento della criminalità " +
    "nelle grandi aree metropolitane.",
    "La criminalità organizzata sfrutta le zone di confine per il traffico di merci illecite.",
    "Combattere la criminalità diffusa richiede politiche sociali integrate, non solo repressione.",
  ],
  synonyms: [
    { term: "delinquenza", register: "formale", context: "uso sociologico e giuridico generale" },
    { term: "illegalità", register: "neutro", context: "con enfasi sul carattere di violazione normativa" },
    { term: "malvivenza", register: "colloquiale", context: "riferito spesso al crimine di strada" },
  ],
  antonyms: [
    { term: "legalità", register: "formale", context: "rispetto delle norme giuridiche vigenti" },
    { term: "rispetto delle norme", register: "neutro", context: "condotta conforme all'ordinamento" },
  ],
  relatedWords: ["delinquenza", "recidiva", "reato", "diritto", "norma", "violenza"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/criminalit%C3%A0",
    treccani: "https://www.treccani.it/vocabolario/criminalita/",
  },
  paroliereNote:
    "Il termine oscilla tra uso descrittivo-statistico (tasso di criminalità) e uso " +
    "fenomenologico-sociologico (la criminalità come prodotto di disuguaglianze strutturali). " +
    "In criminologia si distingue la criminalità predatoria da quella organizzata e da quella " +
    "dei colletti bianchi (white-collar crime), distinzione che il lemma non deve appiattire.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "CRIMINALITÀ — definizione | Il Paroliere",
    description:
      "Definizione di criminalità: insieme dei comportamenti che violano le norme penali. " +
      "Etimologia, esempi, sinonimi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
