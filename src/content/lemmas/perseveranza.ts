// Il Paroliere — Lemma: perseveranza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const perseveranza: LemmaEntry = {
  lemma: "perseveranza",
  slug: "perseveranza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Capacità di mantenere un proposito nel tempo senza cedere alle interruzioni, " +
    "alla stanchezza o al dubbio. Non è ostinazione cieca: comporta una valutazione " +
    "continua del fine, che resta riconosciuto come degno di essere perseguito anche " +
    "quando il percorso si fa lungo o incerto. In psicologia viene studiata come " +
    "tratto disposizionale legato alla resilienza e all'autoregolazione.",

  shortDefinition:
    "Continuare verso un fine anche quando il percorso si fa lungo, difficile o " +
    "incerto.",

  register: ["comune", "letterario"],
  domains: ["etica", "psicologia"],

  etymology:
    "Dal latino tardo perseverantia, derivato di perseverare (composto di per- + " +
    "severus: rimanere saldo). Il termine era già usato da Cicerone e dai Padri della " +
    "Chiesa con valore sia etico sia spirituale.",

  synonyms: [
    { term: "costanza", register: "comune", context: "più legata alla stabilità nel tempo che alla spinta verso un obiettivo" },
    { term: "tenacia", register: "comune", context: "enfatizza la resistenza all'ostacolo, più fisica e combattiva" },
    { term: "determinazione", register: "comune", context: "accentua la forza della scelta, meno il suo protrarsi" },
    { term: "caparbietà", register: "colloquiale", context: "sfumatura quasi ostinata, talvolta usata in modo ironico" }
  ],

  antonyms: [
    { term: "incostanza", register: "comune", context: "abbandono del proposito per cedimento o distrazione" },
    { term: "arrendevolezza", register: "comune", context: "disposizione a rinunciare al primo ostacolo" },
    { term: "volubilità", register: "comune", context: "cambiamento frequente di direzione, di umore o di intenzione" }
  ],

  relatedWords: [
    "resilienza",
    "costanza",
    "disciplina",
    "autoregolazione",
    "grit",
    "volontà",
    "perseverare"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/perseveranza"
  },

  paroliereNote:
    "In italiano la perseveranza ha una tradizione etica molto più lunga di quanto il " +
    "suo uso corrente lasci intuire: Dante la pone tra le virtù necessarie al " +
    "cammino, e la tradizione morale la distingue nettamente dall'ostinazione, che è " +
    "perseverare verso un fine sbagliato. Nella psicologia contemporanea il costrutto " +
    "anglosassone grit — introdotto da Angela Duckworth — ne ha rinnovato la " +
    "rilevanza scientifica, portando un termine antico nel lessico della ricerca " +
    "empirica sull'eccellenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Perseveranza — Il Paroliere",
    description:
      "Continuare verso un fine anche quando il percorso si fa lungo, difficile o " +
      "incerto. Definizione originale Il Paroliere.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};