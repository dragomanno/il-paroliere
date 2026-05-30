// Il Paroliere — Lemma: levante
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const levante: LemmaEntry = {
  lemma: "levante",
  slug: "levante",
  partOfSpeech: "sostantivo/aggettivo",
  gender: "maschile",

  definition:
    "Come sostantivo, indica il punto cardinale est — la direzione da cui sorge il " +
    "sole — e, per estensione geografica, le terre che si affacciano sul Mediterraneo " +
    "orientale (Siria, Libano, Israele, e un tempo l'intero Oriente prossimo). Come " +
    "aggettivo o sostantivo meteorologico, è il vento che spira da est, spesso umido " +
    "e caldo lungo le coste mediterranee. Come aggettivo, vale anche 'che si leva, " +
    "che sorge'.",

  shortDefinition:
    "Est, dove sorge il sole; le terre del Mediterraneo orientale; il vento che spira " +
    "da est.",

  register: ["comune", "letterario", "storico"],
  domains: ["geografia", "meteorologia", "storia"],

  etymology:
    "Dal participio presente del verbo levare — nel senso di alzarsi, sorgere. La " +
    "forma si fissa come orientamento cardinale nel Medioevo, quando i navigatori " +
    "usavano il sorgere del sole come riferimento principale. Il nome geografico " +
    "Levante si cristallizza nei commerci veneziani e genovesi del XIII–XV secolo.",

  examples: [
  ],

  synonyms: [
    { term: "oriente", register: "comune", context: "sinonimo del punto cardinale, registro più letterario" },
    { term: "est", register: "comune", context: "forma moderna e tecnica del punto cardinale" }
  ],

  antonyms: [
    { term: "ponente", register: "comune/letterario", context: "il punto cardinale ovest, dove il sole tramonta" },
    { term: "occidente", register: "comune", context: "l'ovest geografico e culturale" }
  ],

  relatedWords: [
    "meridiano-sostantivo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/levante"
  },

  paroliereNote:
    "Levante porta in sé una delle più antiche categorie spaziali della cultura " +
    "mediterranea: l'orientamento verso il sorgere del sole come bussola del mondo. " +
    "Nelle rotte commerciali medievali, andare al Levante significava avventurarsi " +
    "verso le spezie, la seta e l'ignoto. Il termine sopravvive nei nomi geografici — " +
    "Riviera di Levante — e in una letteratura che lo usa ancora come bussola " +
    "culturale prima che geografica.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Levante — Il Paroliere",
    description:
      "Levante: il punto est, le terre del Mediterraneo orientale, il vento da est. " +
      "Storia, geografia, meteorologia — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};