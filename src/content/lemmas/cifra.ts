// Il Paroliere — Lemma: cifra
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cifra: LemmaEntry = {
  lemma: "cifra",
  slug: "cifra",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Simbolo grafico che rappresenta un numero all'interno di un sistema di notazione — uno, zero, sette: " +
    "elementi discreti con cui si compone ogni quantità. In senso figurato, la cifra di un artista è " +
    "qualcosa di più sottile di uno stile: è la traccia inconfondibile che resta anche quando la tecnica " +
    "cambia, il segno con cui una voce si riconosce tra mille.",

  shortDefinition:
    "Simbolo numerico; in senso figurato, il tratto distintivo e irriducibile che rende inconfondibile la voce di un artista.",

  register: ["comune", "letterario"],
  domains: ["matematica", "stile"],

  etymology:
    "Dall'arabo sifr, 'zero, vuoto', attraverso il latino medievale cifra. " +
    "Lo stesso percorso etimologico di zero — entrambe le parole vengono dalla matematica araba medievale.",

  examples: [
    "Tre cifre dopo la virgola: una precisione che non serviva a nulla, ma lo tranquillizzava.",
    "Quella malinconia trattenuta era la sua cifra — la riconoscevi in ogni romanzo, anche nei più lievi.",
    "Una cifra a sei zeri che non diceva ancora nulla sul valore reale della cosa.",
    "La cifra stilistica di Morandi non è nei soggetti — è in quello spazio tra le bottiglie.",
  ],

  synonyms: [
    {
      term: "numero",
      register: "comune",
      context: "la quantità rappresentata, non il simbolo come la cifra",
    },
    {
      term: "tratto",
      register: "comune",
      context: "nel senso figurato, caratteristica riconoscibile di uno stile",
    },
    {
      term: "impronta",
      register: "comune",
      context: "segno distintivo lasciato da qualcuno, meno preciso della cifra",
    },
  ],

  antonyms: [
    {
      term: "genericità",
      register: "comune",
      context: "assenza di tratti distintivi, opposto della cifra stilistica",
    },
    {
      term: "anonimato",
      register: "comune",
      context: "impossibilità di essere riconosciuti, opposto della cifra come firma",
    },
  ],

  relatedWords: [
    "cifrario",
    "cifrare",
    "numero",
    "stile",
    "impronta",
    "segno",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/cifra/",
    wiktionary: "https://it.wiktionary.org/wiki/cifra",
  },

  paroliereNote:
    "La doppia vita di cifra — numero e identità stilistica — non è casuale: entrambi i sensi " +
    "parlano di qualcosa di irriducibile, un'unità minima che non si può ulteriormente scomporre. " +
    "La cifra stilistica di un artista è esattamente questo: il livello sotto il quale non si va, " +
    "la cosa che rimane quando si toglie tutto il resto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Cifra — Il Paroliere",
    description:
      "Definizione originale di 'cifra': simbolo numerico e tratto distintivo inconfondibile di un artista. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
