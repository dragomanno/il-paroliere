// Il Paroliere — Lemma: ponderare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ponderare: LemmaEntry = {
  lemma: "ponderare",
  slug: "ponderare",
  partOfSpeech: "verbo",

  definition:
    "Esaminare una questione con misura e profondità, valutando argomenti, rischi e alternative prima di agire. Ponderare non è rimandare: è il tempo dato al pensiero perché arrivi da qualche parte. La riflessione, qui, è già una forma di azione.",

  shortDefinition:
    "Riflettere con misura su argomenti e conseguenze prima di decidere; non esitazione, ma pensiero che lavora.",

  register: ["comune"],
  domains: ["pensiero", "comportamento"],

  etymology:
    "Dal latino ponderare (pesare, valutare), da pondus (peso); stessa radice di ponderoso, preponderante.",

  examples: [],

  synonyms: [
      {
        term: "valutare",
        register: "comune",
        context: "più generico, può includere anche la fase esecutiva",
      },
      {
        term: "soppesare",
        register: "comune",
        context: "enfatizza la comparazione tra alternative — metafora della bilancia",
      },
      {
        term: "meditare",
        register: "comune",
        context: "riflessione più interiore e prolungata",
      },
    ],

  antonyms: [
      {
        term: "agire d'impulso",
        register: "comune",
        context: "passare all'azione prima di riflettere",
      },
      {
        term: "precipitarsi",
        register: "comune",
        context: "velocità che esclude la riflessione",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ponderare/",
    wiktionary: "https://it.wiktionary.org/wiki/ponderare",
  },

  paroliereNote:
    "La metafora è quella della bilancia: si ponderano argomenti come si pesano merci. Ma a differenza di pesare, ponderare implica che la misura non sia data — che il valore di ogni argomento dipenda da ciò a cui viene confrontato. È per questo che ponderare bene richiede non solo attenzione, ma una scala di valori già costruita.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ponderare — Il Paroliere",
    description:
      "Definizione originale di 'ponderare': riflettere con profondità prima di agire, non rimandare ma pensare. Con sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
