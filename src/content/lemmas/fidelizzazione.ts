// Il Paroliere — Lemma: fidelizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fidelizzazione: LemmaEntry = {
  lemma: "fidelizzazione",
  slug: "fidelizzazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Processo con cui un'azienda costruisce nel tempo un rapporto stabile con i propri clienti, orientandoli verso una scelta ricorrente e consapevole. Va oltre la semplice fidelità d'acquisto: implica la costruzione di valore percepito, fiducia sostenuta e senso di appartenenza a una comunità di marca.",

  shortDefinition:
    "Strategia aziendale che trasforma un acquirente occasionale in cliente stabile attraverso fiducia, valore e appartenenza.",

  register: ["tecnico"],
  domains: ["marketing", "business"],

  etymology:
    "Derivato di fedeltà, con suffisso -izzazione; calco semantico del marketing anglosassone (customer loyalty).",

  examples: [],

  synonyms: [
      {
        term: "retention",
        register: "tecnico",
        context: "termine anglosassone equivalente, più diffuso nei contesti digital",
      },
      {
        term: "loyalty marketing",
        register: "tecnico",
        context: "insieme delle pratiche orientate alla fedeltà del cliente",
      },
    ],

  antonyms: [
      {
        term: "churn",
        register: "tecnico",
        context: "abbandono dei clienti — l'esito opposto della fidelizzazione",
      },
    ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/fidelizzazione",
  },

  paroliereNote:
    "La parola è costruita su fedeltà, che viene da fides — fiducia, fede. Ma nella pratica del marketing moderno la fidelizzazione raramente parla di fiducia: parla di punti, di programmi, di frizioni ridotte. C'è qualcosa di ironico nel fatto che il termine italiano abbia conservato la radice etica mentre il contenuto pratico l'ha quasi completamente svuotata.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Fidelizzazione — Il Paroliere",
    description:
      "Definizione originale di 'fidelizzazione': il processo di costruzione della fedeltà del cliente in marketing e business. Con sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
