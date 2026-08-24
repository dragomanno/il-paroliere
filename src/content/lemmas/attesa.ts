// Il Paroliere — Lemma: attesa
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const attesa: LemmaEntry = {
  lemma: "attesa",
  slug: "attesa",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune"],
  domains: ["psicologia", "vita quotidiana", "tempo"],

  definition: "Stato di sospensione temporale che precede un evento, una risposta o un arrivo e ne fa sentire la distanza. Può essere neutra, ansiosa o fiduciosa: diversamente dalla → speranza, non implica da sé un esito positivo, ma soltanto il permanere davanti a ciò che deve ancora accadere.",

  shortDefinition: "Sospensione nel tempo davanti a un evento, un arrivo o una risposta non ancora avvenuti.",

  etymology: "Dal participio passato femminile di attendere, dal latino attendere, «rivolgere l’animo, prestare attenzione»; l’attesa unisce così tempo e attenzione rivolta a qualcosa.",

  examples: [
    "L’attesa del referto sembrò più lunga del viaggio fino all’ospedale.",
    "In attesa del treno, osservavano le luci accendersi una a una sul binario.",
    "L’attesa della risposta non era angoscia: era la calma di chi aveva fatto la propria parte."
  ],

  synonyms: [
    { term: "aspettativa", register: "comune", note: "Può indicare ciò che si prevede o ci si aspetta, anche senza vivere una sospensione concreta." },
    { term: "sospensione", register: "comune", note: "Mette in primo piano l’interruzione provvisoria del corso delle cose." },
    { term: "vigilia", register: "letterario", note: "Riguarda il momento immediatamente precedente a un evento sentito come importante." }
  ],

  antonyms: [
    { term: "immediatezza", register: "comune", note: "Esclude l’intervallo e il rinvio propri dell’attesa." },
    { term: "compimento", register: "formale", note: "Indica l’avvenire dell’evento atteso o il suo raggiungimento." }
  ],

  relatedWords: ["speranza", "desiderio", "aspirazione", "volontà", "slancio", "tensione", "frustrazione", "rassegnazione", "accettazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/attesa"
  },

  paroliereNote: "L’attesa non dice ancora come andrà: può custodire una → speranza, alimentare la → tensione o preparare una → accettazione. È un tempo vissuto, non un semplice spazio vuoto tra due momenti.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Attesa — definizione, sinonimi, uso | Il Paroliere",
    description: "Che cos’è l’attesa: definizione originale, sinonimi ed esempi d’uso. Scopri la differenza con speranza, aspettativa, tensione, frustrazione e sospensione."
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24"
};
