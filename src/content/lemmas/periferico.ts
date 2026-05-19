// Il Paroliere — Lemma: periferico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const periferico: LemmaEntry = {
  lemma: "periferico",
  slug: "periferico",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Che appartiene alla periferia o ne condivide la posizione: lontano dal " +
    "centro, ai margini di un tessuto urbano o di un sistema. In informatica, " +
    "indica un dispositivo collegato a un computer ma esterno alla sua unità " +
    "centrale — una stampante, un monitor, una periferica di input. In senso " +
    "figurato, descrive ciò che occupa una posizione secondaria, non determinante, " +
    "dentro un discorso o una struttura di potere.",

  shortDefinition:
    "Ai margini del centro: geografico, informatico o simbolico. Ciò che sta fuori dal nucleo, senza esserne assente.",

  register: ["comune", "tecnico"],
  domains: ["spazio", "urbanistica", "informatica", "politica"],

  etymology:
    "Dal latino tardo periphericus, a sua volta dal greco peripherikós, derivato " +
    "di peripheréia ('periferia'), composto di perí ('intorno') e phérein " +
    "('portare, spingere'). L'idea originaria è di ciò che ruota o si muove " +
    "attorno a un centro.",

  examples: [
    "Viveva in un quartiere periferico della città, lontano dal centro ma non " +
    "dal senso di appartenenza.",
    "Il mouse e la tastiera sono periferiche: fondamentali, eppure sempre esterne " +
    "alla CPU.",
    "Era un personaggio periferico nella storia — eppure, senza di lui, certi " +
    "eventi non sarebbero stati possibili.",
    "La questione sembrava periferica all'ordine del giorno, ma era quella che " +
    "stava davvero a cuore a tutti.",
  ],

  synonyms: [
    {
      term: "marginale",
      register: "comune",
      context: "ai margini — con più enfasi sulla secondarietà che sulla posizione fisica",
    },
    {
      term: "esterno",
      register: "comune",
      context: "fuori dal nucleo — più neutro, meno connotato",
    },
    {
      term: "decentrato",
      register: "tecnico",
      context: "lontano dal centro decisionale o fisico — spesso in contesto amministrativo",
    },
  ],

  antonyms: [
    {
      term: "centrale",
      register: "comune",
      context: "nel mezzo, nel nucleo — il polo opposto in ogni accezione",
    },
    {
      term: "principale",
      register: "comune",
      context: "di primo piano, determinante — opposto al senso figurato di periferico",
    },
  ],

  relatedWords: [
    "periferia",
    "periferica (s.f.)",
    "decentrato",
    "marginale",
    "centro",
    "hinterland",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/periferico/",
    wiktionary: "https://it.wiktionary.org/wiki/periferico",
  },

  paroliereNote:
    "Periferico porta con sé una storia politica e sociale che le altre accezioni " +
    "spesso coprono. Le periferie urbane italiane non sono solo zone lontane dal " +
    "centro: sono il luogo dove si misura la qualità reale di una città, dei suoi " +
    "servizi, della sua capacità di includere. Usare 'periferico' come sinonimo " +
    "di 'irrilevante' è un'abitudine linguistica che vale la pena mettere in " +
    "discussione: ciò che sta ai margini non è per questo meno importante.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Periferico — Il Paroliere",
    description:
      "Definizione originale di 'periferico': ai margini del centro, dal territorio " +
      "all'informatica al figurato. Con esempi, sinonimi ed etimologia greca.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
