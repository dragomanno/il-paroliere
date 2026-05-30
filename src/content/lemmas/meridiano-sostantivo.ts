// Il Paroliere — Lemma: meridiano
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const meridiano_sostantivo: LemmaEntry = {
  lemma: "meridiano",
  slug: "meridiano-sostantivo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Semicerchio immaginario che congiunge i due poli terrestri passando per un dato " +
    "punto della superficie: ogni meridiano è perpendicolare all'equatore e individua " +
    "una specifica longitudine. Il meridiano di Greenwich, adottato nel 1884 come " +
    "riferimento internazionale, definisce lo zero da cui si misurano tutte le " +
    "longitudini del globo.",

  shortDefinition:
    "Linea immaginaria che congiunge i poli terrestri; definisce la longitudine di un " +
    "punto sulla Terra.",

  register: ["tecnico", "comune"],
  domains: ["astronomia", "geografia", "cartografia"],

  etymology:
    "Dal latino meridianus (sc. circulus), il cerchio del mezzogiorno — perché il " +
    "sole attraversa il meridiano locale esattamente a metà giornata. Sostantivazione " +
    "dell'aggettivo attestata già nel latino medievale cartografico.",

  examples: [
  ],

  synonyms: [
    { term: "longitudine", register: "tecnico", context: "la misura angolare che il meridiano definisce" },
    { term: "linea mediana", register: "tecnico", context: "descrizione funzionale non tecnica" }
  ],

  antonyms: [
    { term: "parallelo", register: "tecnico", context: "linea orizzontale, perpendicular ai meridiani" }
  ],

  relatedWords: [
    "meridiano-aggettivo",
    "levante"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/meridiano"
  },

  paroliereNote:
    "Il meridiano di Greenwich è una delle convenzioni più potenti della modernità: " +
    "una linea che non esiste fisicamente, ma organizza l'intero sistema dei fusi " +
    "orari, della navigazione satellitare e della cartografia digitale. È un accordo " +
    "umano diventato infrastruttura planetaria.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Meridiano (sostantivo) — Il Paroliere",
    description:
      "Meridiano: la linea immaginaria che congiunge i poli e definisce la longitudine. " +
      "Geografia e cartografia — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};