// Il Paroliere — Lemma: fervore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fervore: LemmaEntry = {
  lemma: "fervore",
  slug: "fervore",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Intensità di sentimento o di impegno che supera la misura ordinaria e si " +
    "manifesta come calore quasi fisico: nel fare, nel credere, nell'aderire a " +
    "una causa. In ambito religioso indica uno stato di devozione accesa, in cui " +
    "la preghiera o il rito diventano esperienza vissuta prima che dovere formale.",

  shortDefinition:
    "Intensità ardente di sentimento o devozione, con un calore che va oltre la misura e diventa tratto del carattere.",

  register: ["comune", "letterario"],
  domains: ["emozione", "religione", "carattere"],

  etymology:
    "Dal latino fervor, derivato di fervere ('bollire, ardere'). La metafora " +
    "originaria è del calore fisico che sale — la stessa radice di 'fervido', " +
    "'effervescente', 'fervente'. Attestato in italiano dal XIII secolo.",

  examples: [
    "Lavorava con un fervore che rendeva contagioso anche il compito più " +
    "tedioso.",
    "Il fervore dei primi mesi si era affievolito, ma la convinzione era " +
    "rimasta intatta.",
    "Pregava con fervore genuino, non con la recitazione meccanica di chi " +
    "compie un rito per abitudine.",
    "C'è un fervore ideologico che non ammette dubbi — e proprio per questo " +
    "finisce per consumarsi.",
  ],

  synonyms: [
    {
      term: "ardore",
      register: "letterario",
      context: "calore emotivo intenso — sfumatura più poetica del fervore",
    },
    {
      term: "entusiasmo",
      register: "comune",
      context: "energia positiva verso un obiettivo — più leggero del fervore",
    },
    {
      term: "passione",
      register: "comune",
      context: "sentimento forte e duraturo — il fervore è la sua forma più accesa",
    },
    {
      term: "devozione",
      register: "comune",
      context: "nel senso religioso: dedizione profonda a una fede o a una causa",
    },
  ],

  antonyms: [
    {
      term: "tiepidezza",
      register: "comune",
      context: "impegno scarso, adesione senza calore — l'opposto diretto del fervore",
    },
    {
      term: "indifferenza",
      register: "comune",
      context: "assenza di coinvolgimento emotivo",
    },
    {
      term: "apatia",
      register: "comune",
      context: "mancanza di risposta emotiva o motivazionale",
    },
  ],

  relatedWords: [
    "fervente",
    "fervido",
    "ferventemente",
    "ardore",
    "entusiasmo",
    "devozione",
    "effervescenza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/fervore/",
    wiktionary: "https://it.wiktionary.org/wiki/fervore",
  },

  paroliereNote:
    "Fervore è una delle parole che meglio rendono l'idea di un calore interiore " +
    "che si fa visibile — non solo entusiasmo, ma qualcosa di più fisico, quasi " +
    "febbrile. Nella tradizione cristiana era una delle qualità dell'anima in " +
    "preghiera; nella modernità laica si è trasferito sul lavoro, sull'ideologia, " +
    "sulla militanza. In entrambi i casi porta con sé un rischio: il fervore non " +
    "temperato dalla ragione tende a bruciare ciò che tocca.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Fervore — Il Paroliere",
    description:
      "Definizione originale di 'fervore': intensità ardente di sentimento o " +
      "devozione. Dal latino fervere, bollire. Con esempi, sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
