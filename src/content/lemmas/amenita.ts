// Il Paroliere — Lemma: amenità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const amenita: LemmaEntry = {
  lemma: "amenità",
  slug: "amenita",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In senso letterario, la piacevolezza di un luogo, di un ambiente o di una " +
    "conversazione: un'amenità del paesaggio è qualcosa che lo rende gradevole, degno " +
    "di essere goduto. Nel registro ironico — e nell'uso contemporaneo più diffuso — " +
    "il termine si ribalta completamente: le amenità che qualcuno pronuncia sono " +
    "affermazioni sciocche, commenti fuori luogo o banalità dette con aria di " +
    "profondità. I due significati convivono, e il contesto è l'unico arbitro.",

  shortDefinition:
    "Piacevolezza di un luogo o di una conversazione; al plurale, spesso ironico per " +
    "sciocchezze dette con aria di serietà.",

  register: ["comune", "letterario", "ironico"],
  domains: ["società", "retorica"],

  etymology:
    "Dal latino amoenitas, derivato di amoenus (piacevole, gradevole). Il senso " +
    "ironico è uno sviluppo moderno, probabilmente per antifrasi: le amenità che " +
    "qualcuno dice non hanno nulla di amenus.",

  synonyms: [
    { term: "piacevolezza", register: "comune", context: "sinonimo del senso letterario, senza sfumatura ironica" },
    { term: "grazia", register: "letterario", context: "più elegante, si applica a luoghi e stili con un senso di compiutezza" },
    { term: "sciocchezza", register: "comune", context: "sinonimo del senso ironico, senza il doppio registro" },
    { term: "stupidaggine", register: "colloquiale", context: "registro più basso del senso ironico, esplicito nel giudizio" }
  ],

  antonyms: [
    { term: "asprezza", register: "comune", context: "mancanza di piacevolezza, durezza del paesaggio o del tono" },
    { term: "serietà", register: "comune", context: "antonimo del senso ironico: ciò che le amenità fingono di essere" }
  ],

  relatedWords: [
    "ameno",
    "piacevolezza",
    "banalità",
    "frivolezza",
    "battuta",
    "ironia",
    "luogo comune"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/amenit%C3%A0"
  },

  paroliereNote:
    "Amenità è una di quelle parole italiane che hanno costruito, nei secoli, un " +
    "doppio binario semantico così ampio da risultare quasi opposte a se stesse. " +
    "Usarla nel senso letterario oggi richiede attenzione: chi non conosce la " +
    "sfumatura ironica potrebbe fraintendere. E chi la usa sempre e solo in senso " +
    "ironico si priva di una parola bella per descrivere un paesaggio che fa venir " +
    "voglia di fermarsi. Vale la pena tenerle entrambe in vita.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Amenità — Il Paroliere",
    description:
      "Piacevolezza di un luogo o conversazione; al plurale, spesso ironico per " +
      "sciocchezze dette con aria di serietà.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};