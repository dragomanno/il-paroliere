// Il Paroliere — Lemma: elasticità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const elasticita: LemmaEntry = {
  lemma: "elasticità",
  slug: "elasticita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["fisica", "anatomia", "economia", "psicologia"],

  definition:
    "Proprietà di un corpo di deformarsi sotto l’applicazione di una forza e di riprendere " +
    "la forma originaria alla cessazione della forza stessa. In fisica, è una proprietà " +
    "quantificabile; in biologia, è una qualità dei tessuti connettivi, della pelle, dei " +
    "polmoni. In senso figurato, è la capacità di adattarsi alle circostanze senza perdere " +
    "la propria identità — e di ritornare a sé dopo la pressione.",

  shortDefinition:
    "Capacità di cedere sotto pressione e di riprendere la forma originaria; adattabilità senza perdita di identità.",

  etymology:
    "Dal latino moderno elasticus, dal greco elastos “duttile, battuto”, da elaunein " +
    "“spingere, battere”. L’elastico originariamente era ciò che si lasciava spingere e " +
    "tornava indietro.",

  examples: [
    "L’elasticità della pelle giovane non è solo estetica: è una proprietà del collagene che permette al tessuto di seguire i movimenti senza lacerazioni.",
    "In economia, l’elasticità della domanda misura quanto una variazione del prezzo influenza la quantità domandata: un bene con domanda inelastica viene acquistato indipendentemente dal prezzo.",
    "L’elasticità mentale — la capacità di cambiare prospettiva e poi ritornare — è diversa dalla flessibilità: quest’ultima accetta tutto, la prima mantiene un punto di riferimento.",
    "I polmoni funzionano grazie all’elasticità del tessuto polmonare: inspirano espandendosi, espirano contraendosi elasticamente senza sforzo muscolare attivo.",
  ],

  synonyms: [
    { term: "flessibilità", register: "comune", note: "Più ampio e meno tecnico: la capacità di adattarsi, senza l’implicazione del ritorno alla forma originaria." },
    { term: "resilienza", register: "comune-psicologico", note: "Enfatizza il ritorno dopo la pressione; elasticità è più fisico, resilienza più psicologico." },
  ],

  antonyms: [
    { term: "rigidità", register: "tecnico-comune", note: "Incapacità di deformarsi — o di adattarsi." },
    { term: "fragilità", register: "comune", note: "Si rompe sotto la pressione invece di cedere e tornare." },
  ],

  relatedWords: ["tonicita", "atrofia", "flosco", "proporzione"],

  paroliereNote:
    "L’elasticità è più sofisticata della flessibilità: non è solo piegarsi, è piegarsi e " +
    "tornare. Un materiale flessibile può non essere elastico (plastilina: si piega ma " +
    "non torna). La distinzione vale anche in psicologia — la persona elastica mantiene " +
    "una forma, non si ridefinisce ogni volta che viene pressata. C’è una coerenza " +
    "nell’elasticità che la flessibilità pura non richiede.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "elasticità — significato in fisica, biologia, economia e psicologia",
    description: "Elasticità: dalla proprietà fisica dei materiali alla capacità psicologica di ritornare a sé dopo la pressione. Tutti i significati.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
