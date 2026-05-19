// Il Paroliere — Lemma: acrimonia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const acrimonia: LemmaEntry = {
  lemma: "acrimonia",
  slug: "acrimonia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Asprezza nel tono o nelle parole che non nasce dall'impulso del momento " +
    "ma da qualcosa di più sedimentato — un risentimento che affiora lentamente, " +
    "corrosivo e persistente. A differenza dell'ira, che si consuma nello scoppio, " +
    "l'acrimonia resta: si insinua nel modo di parlare, nel timbro con cui si " +
    "risponde, nella distanza che si mantiene.",

  shortDefinition:
    "Risentimento sedimentato che affiora nel tono: non rabbia che esplode, ma asprezza che corrode.",

  register: ["comune", "letterario"],
  domains: ["carattere", "conflitto"],

  examples: [
    "Rispose con un'acrimonia che tradiva settimane di silenzio accumulato.",
    "Non era arrabbiato — era peggio: parlava con quell'acrimonia sottile di chi ha smesso di sperare.",
    "L'acrimonia nei suoi commenti era così costante da essere diventata parte del suo stile.",
  ],

  synonyms: [
    {
      term: "astio",
      register: "comune",
      context: "risentimento più diretto, meno sottile",
    },
    {
      term: "acredine",
      register: "letterario",
      context: "quasi sinonimo, con sfumatura più letteraria e arcaica",
    },
    {
      term: "amarezza",
      register: "comune",
      context: "più passivo, meno aggressivo dell'acrimonia",
    },
  ],

  antonyms: [
    {
      term: "mitezza",
      register: "comune",
      context: "dolcezza nel carattere e nel tono",
    },
    {
      term: "cordialità",
      register: "comune",
      context: "calore nel modo di relazionarsi",
    },
  ],

  relatedWords: [
    "acredine",
    "risentimento",
    "astio",
    "amarezza",
    "rancore",
    "asprezza",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/acrimonia",
  },

  paroliereNote:
    "Acrimonia e acredine sono quasi fratelli, ma acrimonia ha un respiro più " +
    "lungo: descrive non il momento di attrito, ma il sedimento di una relazione " +
    "che si è incrinata nel tempo. Chi parla con acrimonia non sta esplodendo — " +
    "sta mostrando quanto ha trattenuto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Acrimonia — Il Paroliere",
    description:
      "Definizione originale di 'acrimonia': risentimento sedimentato che affiora " +
      "nel tono e nelle parole. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
