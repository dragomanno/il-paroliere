// Il Paroliere — Lemma: disinvoltura
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const disinvoltura: LemmaEntry = {
  lemma: "disinvoltura",
  slug: "disinvoltura",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Naturalezza nel muoversi, parlare o agire senza rigidità né imbarazzo, come " +
    "se ogni situazione fosse già nota. Può indicare una qualità ammirevole — la " +
    "sicurezza di chi non ha bisogno di prepararsi — oppure una leggerezza ai " +
    "limiti dell'incuranza, quando diventa indifferenza alle conseguenze.",

  shortDefinition:
    "Naturalezza nell'agire senza imbarazzo; può essere sicurezza ammirevole o spregiudicatezza ai limiti del tatto.",

  register: ["comune", "colloquiale"],
  domains: ["comportamento", "carattere", "relazioni sociali"],

  etymology:
    "Dal francese désinvolture, a sua volta dall'italiano disinvolto, participio " +
    "di disinvolgere — 'togliere ciò che avvolge, liberare'. L'immagine originaria " +
    "è quella di chi si è liberato dalla rigidità e dai vincoli formali.",

  examples: [
    "Si muoveva tra gli sconosciuti con una disinvoltura che faceva sembrare " +
    "naturale ciò che per gli altri era uno sforzo.",
    "Quella disinvoltura con cui citava i dati sbagliati era quasi peggio " +
    "dell'errore stesso.",
    "Aveva imparato la disinvoltura della sala conferenze: non una finta " +
    "sicurezza, ma vera indifferenza allo sguardo altrui.",
    "Con la stessa disinvoltura con cui entrava, riusciva anche ad andarsene — " +
    "senza scene, senza spiegazioni.",
  ],

  synonyms: [
    {
      term: "naturalezza",
      register: "comune",
      context: "più neutro — assenza di artificio, senza la sfumatura di sicurezza sociale",
    },
    {
      term: "scioltezza",
      register: "comune",
      context: "fluidità nei movimenti o nel parlato — più fisico, meno psicologico",
    },
    {
      term: "disinvolto (agg.)",
      register: "comune",
      context: "forma aggettivale diretta — 'si comporta in modo disinvolto'",
    },
    {
      term: "spregiudicatezza",
      register: "comune",
      context: "quando la disinvoltura supera il limite del tatto — connotazione negativa",
    },
  ],

  antonyms: [
    {
      term: "imbarazzo",
      register: "comune",
      context: "disagio che si manifesta nel comportamento — l'opposto diretto",
    },
    {
      term: "rigidità",
      register: "comune",
      context: "incapacità di adattarsi con fluidità alle situazioni",
    },
    {
      term: "impaccio",
      register: "colloquiale",
      context: "goffaggine fisica o sociale",
    },
  ],

  relatedWords: [
    "disinvolto",
    "scioltezza",
    "naturalezza",
    "sicurezza",
    "spregiudicatezza",
    "agio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/disinvoltura/",
    wiktionary: "https://it.wiktionary.org/wiki/disinvoltura",
  },

  paroliereNote:
    "La disinvoltura vera — non quella recitata — è una delle qualità più rare " +
    "nelle situazioni ad alto carico sociale. Non si impara da un corso: viene " +
    "dall'esperienza, dal fallimento ripetuto, dalla progressiva indifferenza " +
    "allo sguardo esterno. Quando la si incontra davvero, si riconosce subito: " +
    "non c'è sforzo visibile, non c'è performance. C'è solo qualcuno che è " +
    "esattamente dove deve essere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Disinvoltura — Il Paroliere",
    description:
      "Definizione originale di 'disinvoltura': naturalezza nell'agire senza " +
      "imbarazzo, tra sicurezza e spregiudicatezza. Con esempi, sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
