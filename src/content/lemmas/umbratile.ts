// Il Paroliere — Lemma: umbratile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const umbratile: LemmaEntry = {
  lemma: "umbratile",
  slug: "umbratile",
  partOfSpeech: "aggettivo",

  definition:
    "Di persona che si tiene lontana dalla luce pubblica, che abita il proprio ritiro come uno spazio " +
    "elettivo e non come una costrizione: l'umbratile non fugge il mondo per paura, ma per scelta di tono. " +
    "Detto anche di atmosfera, stile o prosa in cui si percepisce una qualità appartata, quasi trattenuta, " +
    "che preferisce la penombra all'esposizione.",

  shortDefinition:
    "Schivo per vocazione, non per timidezza: di chi — o di ciò che — sceglie l'ombra come forma di presenza.",

  register: ["letterario"],
  domains: ["letteratura", "carattere", "stile"],

  etymology:
    "Dal latino umbratilis, 'che vive all'ombra, ritirato', derivato di umbra (ombra). " +
    "In latino indicava anche ciò che appartiene alla vita privata e allo studio, contrapposto alla vita pubblica.",

  examples: [
    "Era uno scrittore umbratile: pubblicava poco, rilasciava interviste mai, scriveva sempre.",
    "La sua casa aveva qualcosa di umbratile — non buio, ma schermato, come se la luce entrasse solo su invito.",
    "Una prosa umbratile, densa di silenzi costruiti, dove ogni frase sembrava trattenere qualcosa.",
    "Non era timido: era umbratile. La differenza stava nel fatto che la scelta era sua.",
  ],

  synonyms: [
    {
      term: "schivo",
      register: "comune",
      context: "più usato nel parlato, meno letterario",
    },
    {
      term: "appartato",
      register: "comune",
      context: "descrive la posizione più che il carattere",
    },
    {
      term: "riservato",
      register: "comune",
      context: "neutro, senza la qualità elettiva dell'umbratile",
    },
  ],

  antonyms: [
    {
      term: "esuberante",
      register: "comune",
      context: "proiezione verso l'esterno, bisogno di visibilità",
    },
    {
      term: "mondano",
      register: "formale",
      context: "orientato alla vita sociale e alla presenza pubblica",
    },
  ],

  relatedWords: [
    "ombra",
    "ritiro",
    "schivo",
    "appartato",
    "solitario",
    "introversione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/umbratile/",
    wiktionary: "https://it.wiktionary.org/wiki/umbratile",
  },

  paroliereNote:
    "Umbratile è una parola che parla di sé stessa: raramente usata, vive nell'ombra del lessico " +
    "comune, tirata fuori solo da chi ama la precisione o la letteratura. " +
    "Usarla è già un gesto umbratile — una scelta di non ricorrere all'equivalente più visibile " +
    "e più consumato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Umbratile — Il Paroliere",
    description:
      "Definizione originale di 'umbratile': schivo per vocazione, chi sceglie l'ombra come forma di presenza. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
