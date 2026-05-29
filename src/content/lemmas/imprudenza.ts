// Il Paroliere — Lemma: imprudenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const imprudenza: LemmaEntry = {
  lemma: "imprudenza",
  slug: "imprudenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Mancanza di prudenza nel valutare rischi e conseguenze delle proprie azioni; " +
    "comportamento che espone sé o altri a un pericolo che avrebbe potuto essere " +
    "evitato con maggiore attenzione. In ambito giuridico è uno dei criteri di " +
    "attribuzione della colpa: agisce con imprudenza chi non adotta le cautele che la " +
    "situazione richiederebbe, pur non avendo intenzione di causare danno.",

  shortDefinition:
    "Mancanza di cautela nel valutare rischi e conseguenze — in diritto, criterio di " +
    "colpa senza intenzione di danno.",

  register: ["comune", "tecnico"],
  domains: ["diritto", "psicologia", "comportamento"],

  etymology:
    "Dal latino imprudentia, composto di im- (negazione) e prudentia (saggezza " +
    "pratica, capacità di prevedere). Prudentia a sua volta da providere: vedere " +
    "prima, prevedere.",

  synonyms: [
    { term: "incautezza", register: "comune", context: "con accento sulla mancanza di precauzione pratica" },
    { term: "temerità", register: "comune/letterario", context: "sfumatura più marcata: superamento deliberato del limite" },
    { term: "avventatezza", register: "comune", context: "agire senza riflettere, con precipitazione" },
    { term: "leggerezza", register: "comune", context: "tono più mite, spesso usato per attenuare il giudizio" }
  ],

  antonyms: [
    { term: "prudenza", register: "comune", context: "antonimo diretto e morfologico" },
    { term: "cautela", register: "comune", context: "attenzione concreta al rischio" },
    { term: "accortezza", register: "comune", context: "capacità di prevedere e prevenire" }
  ],

  relatedWords: [
    "imprudente",
    "imprudentemente",
    "negligenza",
    "colpa",
    "rischio",
    "temerità",
    "avventatezza"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/imprudenza"
  },

  paroliereNote:
    "In diritto penale e civile, imprudenza si distingue da negligenza e imperizia: " +
    "tre criteri di colpa con sfumature precise. L'imprudenza riguarda chi agisce " +
    "senza la dovuta cautela; la negligenza chi non agisce quando avrebbe dovuto; " +
    "l'imperizia chi agisce senza la competenza necessaria. Confonderli nella " +
    "scrittura giuridica è un errore tecnico; confonderli nel parlato comune è quasi " +
    "inevitabile.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Imprudenza — Il Paroliere",
    description:
      "Mancanza di cautela nel valutare rischi e conseguenze — in diritto, criterio di " +
      "colpa senza intenzione di danno.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};