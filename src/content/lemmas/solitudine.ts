// Il Paroliere — Lemma: solitudine
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const solitudine: LemmaEntry = {
  lemma: "solitudine",
  slug: "solitudine",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Condizione di chi si trova solo, fisicamente o interiormente, senza che questo " +
    "implichi per forza sofferenza: la solitudine può essere scelta, cercata, abitata " +
    "con cura. In filosofia indica lo spazio riservato all'individuo fuori dalla " +
    "presenza degli altri, talvolta necessario per l'autoconoscenza; in letteratura è " +
    "uno dei temi portanti della lirica romantica e moderna, da Leopardi a Rilke.",

  shortDefinition:
    "Condizione di chi è solo, fisica o interiore, scelta o subita — spazio dell'io " +
    "tra ritiro e autoconoscenza.",

  register: ["comune", "letterario", "filosofico"],
  domains: ["psicologia", "filosofia", "letteratura"],

  etymology:
    "Dal latino solitudo, derivato di solus (solo). Il termine entra nell'italiano " +
    "letterario già nel Duecento e conserva intatta la radice semantica dell'essere " +
    "unico, senza compagnia.",

  synonyms: [
    { term: "isolamento", register: "comune", context: "marca più l'assenza forzata che la scelta" },
    { term: "ritiro", register: "letterario", context: "sfumatura volontaria e riflessiva" },
    { term: "raccoglimento", register: "letterario", context: "con accento sull'interiorità, più che sull'assenza fisica" },
    { term: "eremitaggio", register: "letterario", context: "solitudine radicale con implicazione religiosa o ascetica" }
  ],

  antonyms: [
    { term: "compagnia", register: "comune", context: "antonimo relazionale diretto" },
    { term: "socialità", register: "comune", context: "dimensione collettiva della vita" },
    { term: "comunità", register: "comune/tecnico", context: "antonimo sociologico, con implicazione di appartenenza" }
  ],

  relatedWords: [
    "silenzio",
    "ritiro",
    "contemplazione",
    "nostalgia",
    "introversione",
    "eremo",
    "meditazione"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/solitudine"
  },

  paroliereNote:
    "La solitudine è uno di quei lemmi che la lingua tratta con ambivalenza: la " +
    "stessa parola può descrivere un peso insopportabile o un privilegio cercato. Il " +
    "Novecento filosofico — da Heidegger a Hannah Arendt — ha insistito sul suo " +
    "valore come condizione di pensiero autentico. Nella lingua quotidiana, invece, " +
    "tende a scivolare verso la connotazione negativa, perdendo la distinzione " +
    "cruciale tra solitudine voluta e isolamento imposto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Solitudine — Il Paroliere",
    description:
      "Condizione di chi è solo, fisica o interiore, scelta o subita — spazio dell'io " +
      "tra ritiro e autoconoscenza.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};