// Il Paroliere — Lemma: scrupolo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const scrupolo: LemmaEntry = {
  lemma: "scrupolo",
  slug: "scrupolo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Disagio interiore che nasce dal dubbio di aver agito — o di stare per agire — in modo moralmente sbagliato. " +
    "Chi ne è abitato si ferma, si interroga, misura il peso delle proprie azioni prima di procedere. " +
    "Può essere una qualità etica, la forma più silenziosa della coscienza, o diventare un freno che immobilizza.",

  shortDefinition:
    "Inquietudine morale che spinge a interrogarsi prima di agire; coscienza vigile, a volte ingombrante.",

  register: ["comune"],
  domains: ["morale", "psicologia", "comportamento"],

  etymology:
    "Dal latino scrupulus, diminutivo di scrupus, 'sasso appuntito' — il fastidio fisico " +
    "del sasso nel sandalo trasferito alla sfera morale come senso di disagio interiore.",

  examples: [
    "Aveva scrupoli che gli altri non capivano, e lui non sapeva come spiegarli.",
    "Agì senza scrupoli — non per cattiveria, ma per una sorta di certezza che lo rendeva impermeabile al dubbio.",
    "Lo scrupolo è un lusso che non tutti si possono permettere, diceva, e intendeva il contrario.",
    "Si fermò alla soglia: uno scrupolo vecchio come la sua coscienza.",
  ],

  synonyms: [
    {
      term: "coscienza",
      register: "comune",
      context: "il meccanismo interno di cui lo scrupolo è una manifestazione",
    },
    {
      term: "remora",
      register: "formale",
      context: "più letterario, indica il freno morale prima di agire",
    },
    {
      term: "dubbio morale",
      register: "comune",
      context: "descrizione diretta della condizione psicologica",
    },
  ],

  antonyms: [
    {
      term: "spregiudicatezza",
      register: "comune",
      context: "assenza di remore morali, agire senza freni etici",
    },
    {
      term: "cinismo",
      register: "comune",
      context: "disinteresse deliberato per le implicazioni morali delle proprie azioni",
    },
  ],

  relatedWords: [
    "scrupoloso",
    "scrupolosità",
    "coscienza",
    "remora",
    "esitazione",
    "dubbio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/scrupolo/",
    wiktionary: "https://it.wiktionary.org/wiki/scrupolo",
  },

  paroliereNote:
    "L'etimologia di scrupolo — quel sasso appuntito nel sandalo — è una delle più felici dell'italiano. " +
    "Rende perfettamente la natura fisica del disagio morale: non un'astrazione, ma qualcosa che si sente " +
    "ad ogni passo. Chi ha scrupoli cammina consapevolmente su un terreno scomodo, e non si toglie il sasso " +
    "finché non ha capito da dove viene.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Scrupolo — Il Paroliere",
    description:
      "Definizione originale di 'scrupolo': inquietudine morale, coscienza vigile a volte ingombrante. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
