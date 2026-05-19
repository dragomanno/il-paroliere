// Il Paroliere — Lemma: sfilacciato
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sfilacciato: LemmaEntry = {
  lemma: "sfilacciato",
  slug: "sfilacciato",
  partOfSpeech: "aggettivo",

  definition:
    "Di tessuto o materiale le cui fibre si sono separate ai bordi, consumate fino a perdere coesione. " +
    "In senso figurato, descrive ciò che ha perso compattezza senza rompersi del tutto — un racconto, " +
    "un'argomentazione, un legame che si disperde per logoramento progressivo, non per frattura netta.",

  shortDefinition:
    "Che si sfalda ai bordi, logoro nelle fibre; in senso figurato, privo di coesione per deterioramento graduale.",

  register: ["comune", "letterario"],
  domains: ["oggetti", "linguaggio figurato", "tessile"],

  etymology:
    "Participio passato di sfilacciare, derivato di filaccio, 'filo di scarto, fibra consumata'. " +
    "La radice è filo, dal latino filum.",

  examples: [
    "La giacca aveva i polsini sfilacciati, e lui non se ne era mai accorto o non gli importava.",
    "Il discorso divenne sfilacciato verso la fine: le idee si separavano senza trovare un centro.",
    "Un'amicizia sfilacciata non è rotta — è peggio: è presente e assente allo stesso tempo.",
    "Rimase qualcosa di sfilacciato tra loro dopo quella conversazione, un filo tirato troppo.",
  ],

  synonyms: [
    {
      term: "logoro",
      register: "comune",
      context: "più generico, non implica necessariamente la separazione delle fibre",
    },
    {
      term: "sfrangiato",
      register: "comune",
      context: "specifico per bordi con frange libere, meno metaforico",
    },
    {
      term: "lacero",
      register: "comune",
      context: "implica rottura, non logoramento graduale",
    },
  ],

  antonyms: [
    {
      term: "compatto",
      register: "comune",
      context: "solido, con fibre o elementi ben tenuti insieme",
    },
    {
      term: "integro",
      register: "formale",
      context: "privo di deterioramento, ancora nella sua forma originale",
    },
  ],

  relatedWords: [
    "sfilacciare",
    "filaccio",
    "logorio",
    "sfrangiato",
    "lacero",
    "consunto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sfilacciato/",
    wiktionary: "https://it.wiktionary.org/wiki/sfilacciare",
  },

  paroliereNote:
    "Sfilacciato funziona bene in italiano perché il senso letterale e quello figurato convivono " +
    "senza che uno sovrasti l'altro. Dire 'un'amicizia sfilacciata' richiama immediatamente " +
    "l'immagine del tessuto, ma non la carica di peso simbolico eccessivo. È una metafora onesta: " +
    "descrive il deterioramento senza drammatizzarlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sfilacciato — Il Paroliere",
    description:
      "Definizione originale di 'sfilacciato': logoro nelle fibre, privo di coesione per deterioramento graduale. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
