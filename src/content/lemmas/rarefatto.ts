// Il Paroliere — Lemma: rarefatto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rarefatto: LemmaEntry = {
  lemma: "rarefatto",
  slug: "rarefatto",
  partOfSpeech: "aggettivo",

  definition:
    "In fisica, detto di gas o fluido con densità o pressione molto bassa rispetto alle condizioni standard: l'aria rarefatta delle alte quote è la prima esperienza del termine. In senso stilistico e letterario, indica una prosa o uno stile che ha eliminato ogni parola di troppo, che respira nel silenzio tra le frasi — dove la sottrazione diventa scelta formale precisa, non impoverimento.",

  shortDefinition:
    "Di gas a bassa densità; in senso letterario, di stile o prosa che ha raggiunto l'essenziale per sottrazione consapevole.",

  register: ["comune", "letterario"],
  domains: ["fisica", "stile"],

  etymology:
    "Dal latino rarefactus, participio passato di rarefacere (rendere raro), da rarus + facere.",

  examples: [],

  synonyms: [
      {
        term: "diluito",
        register: "comune",
        context: "meno concentrato — spesso con sfumatura negativa",
      },
      {
        term: "essenziale",
        register: "comune",
        context: "ridotto al nucleo necessario, senza eccessi",
      },
      {
        term: "scarno",
        register: "comune",
        context: "privo di ornamenti, asciutto — più neutro di rarefatto",
      },
    ],

  antonyms: [
      {
        term: "denso",
        register: "comune",
        context: "concentrato, pieno — in senso fisico e stilistico",
      },
      {
        term: "ridondante",
        register: "comune",
        context: "che dice più del necessario",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/rarefatto/",
    wiktionary: "https://it.wiktionary.org/wiki/rarefatto",
  },

  paroliereNote:
    "Hemingway ha scritto della punta dell'iceberg: ciò che non c'è sostiene ciò che c'è. Calvino parlava di leggerezza. Beckett diceva: fail better. Tutti e tre descrivevano, tra le altre cose, una prosa rarefatta — dove la sottrazione non è povertà, ma precisione. L'aria delle alte quote non è meno aria: è più pura.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Rarefatto — Il Paroliere",
    description:
      "Definizione originale di 'rarefatto': in fisica, gas a bassa densità; in letteratura, stile che raggiunge l'essenziale per sottrazione. Con sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
