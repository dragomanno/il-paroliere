// Il Paroliere — Lemma: cecchino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cecchino: LemmaEntry = {
  lemma: "cecchino",
  slug: "cecchino",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "In ambito militare, il tiratore scelto che colpisce bersagli a lunga distanza " +
    "con precisione estrema, spesso mimetizzato e isolato, operando con un fucile di " +
    "precisione. In politica parlamentare, il cecchino è il deputato o senatore che " +
    "vota contro il proprio partito o il governo di riferimento durante una votazione " +
    "a scrutinio segreto, nell'anonimato garantito dal voto.",

  shortDefinition:
    "Tiratore scelto di precisione; in politica, chi vota segretamente contro il " +
    "proprio partito o governo.",

  register: ["comune", "militare", "politico"],
  domains: ["militare", "politica", "giornalismo"],

  etymology:
    "Dall'adattamento italiano di Franz, nome di battaglia comune tra i soldati " +
    "austro-ungarici nella Prima Guerra Mondiale. I soldati italiani soprannominarono " +
    "i tiratori scelti nemici cecchini — per assonanza con il diminutivo di " +
    "Francesco/Franz — e il termine si generalizzò fino a indicare qualsiasi tiratore " +
    "scelto, poi estendendosi al lessico politico.",

  examples: [
  ],

  synonyms: [
    { term: "tiratore scelto", register: "militare", context: "la denominazione tecnica ufficiale nell'esercito" },
    { term: "sniper", register: "militare/colloquiale", context: "il prestito dall'inglese, molto usato nel linguaggio mediatico e nei videogiochi" },
    { term: "franchi tiratori", register: "politico", context: "la forma plurale usata nel lessico parlamentare italiano per i cecchini di voto" }
  ],

  relatedWords: [
    "caporetto"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/cecchino"
  },

  paroliereNote:
    "I cecchini parlamentari italiani sono un fenomeno istituzionale ricorrente, " +
    "favorito dallo scrutinio segreto ancora previsto per alcune votazioni alla " +
    "Camera. Hanno fatto cadere governi, affossato leggi e cambiato il corso della " +
    "storia politica repubblicana. Il termine trasla perfettamente dal contesto " +
    "militare a quello parlamentare: la distanza, la precisione, l'anonimato — gli " +
    "stessi elementi che definiscono il tiratore scelto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Cecchino — Il Paroliere",
    description:
      "Significato di cecchino: tiratore scelto in ambito militare; in politica, chi " +
      "vota segretamente contro il proprio partito.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};