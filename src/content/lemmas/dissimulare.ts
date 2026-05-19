// Il Paroliere — Lemma: dissimulare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dissimulare: LemmaEntry = {
  lemma: "dissimulare",
  slug: "dissimulare",
  partOfSpeech: "verbo",

  definition:
    "Tenere nascosto ciò che si prova o si pensa, senza costruire una storia falsa: chi dissimula " +
    "trattiene il vero invece di inventarne un altro. È una scelta attiva — spesso silenziosa — che " +
    "richiede padronanza di sé. La distinzione rispetto alla menzogna è sottile ma precisa: il bugiardo " +
    "fabbrica, chi dissimula semplicemente non mostra.",

  shortDefinition:
    "Nascondere ciò che si è o si prova senza mentire: non si fabbrica il falso, si trattiene il vero.",

  register: ["comune", "letterario"],
  domains: ["comunicazione", "psicologia"],

  etymology:
    "Dal latino dissimulare, composto di dis- (negazione) e simulare (fingere, imitare). " +
    "Paradossalmente opposto a simulare: chi simula finge ciò che non è, chi dissimula nasconde ciò che è.",

  examples: [
    "Dissimulò il dolore con una tale naturalezza che nessuno si accorse di nulla.",
    "Non era nel suo stile dissimulare: preferiva il silenzio alla recita.",
    "Dissimulare non è mentire, ma richiede una costanza che alla lunga sfianca.",
    "I diplomatici imparano presto a dissimulare — è parte del mestiere, non dell'ipocrisia.",
  ],

  synonyms: [
    {
      term: "celare",
      register: "formale",
      context: "più letterario, implica nascondere con cura",
    },
    {
      term: "mascherare",
      register: "comune",
      context: "più visivo, suggerisce una copertura attiva",
    },
    {
      term: "tacere",
      register: "comune",
      context: "più passivo del dissimulare, senza la componente performativa",
    },
  ],

  antonyms: [
    {
      term: "mostrare",
      register: "comune",
      context: "rendere visibile ciò che si prova o si pensa",
    },
    {
      term: "rivelare",
      register: "comune",
      context: "portare alla luce ciò che era nascosto",
    },
  ],

  relatedWords: [
    "dissimulazione",
    "dissimulatore",
    "simulare",
    "celare",
    "reticenza",
    "mascherare",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/dissimulare/",
    wiktionary: "https://it.wiktionary.org/wiki/dissimulare",
  },

  paroliereNote:
    "Dissimulare e simulare sono etimologicamente gemelli — entrambi dalla stessa radice — " +
    "ma percorrono direzioni opposte: uno aggiunge, l'altro trattiene. " +
    "L'arte della dissimulazione ha una lunga storia nella trattatistica rinascimentale italiana: " +
    "Torquato Accetto le dedicò nel 1641 un intero saggio, Della dissimulazione onesta, " +
    "sostenendo che nascondere il vero a volte è una forma di rispetto, non di inganno.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Dissimulare — Il Paroliere",
    description:
      "Definizione originale di 'dissimulare': nascondere il vero senza inventare il falso. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
