// Il Paroliere — Lemma: ambaradam
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ambaradam: LemmaEntry = {
  lemma: "ambaradam",
  slug: "ambaradam",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Situazione confusa, caotica, difficile da dipanare; insieme di cose o persone " +
    "disorganizzate che producono rumore e disordine. In senso figurato, indica anche " +
    "un'operazione complicata, un meccanismo oscuro o un intrigo difficile da capire. " +
    "È una parola dal sapore popolare, usata con ironia o frustrazione quando le cose " +
    "si accumulano senza ordine apparente.",

  shortDefinition:
    "Confusione, caos, disordine indistricabile — parola popolare dal sapore ironico " +
    "usata quando le cose si accumulano senza ordine.",

  register: ["popolare", "colloquiale"],
  domains: ["società", "linguaggio"],

  etymology:
    "Etimologia incerta e discussa. Le ipotesi principali sono due, nessuna " +
    "definitivamente accertata: la prima la ricollega all'arabo al-barādam (folla " +
    "disordinata, tumulto), diffuso attraverso i contatti coloniali nordafricani; la " +
    "seconda la avvicina al swahili mbaramu (confusione, disordine), attraverso i " +
    "traffici commerciali dell'Africa orientale. Alcuni studiosi propongono invece " +
    "un'origine onomatopeica italiana, costruita sul suono del rumore e del baccano. " +
    "L'incertezza etimologica è parte integrante della storia di questa parola.",

  synonyms: [
    { term: "caos", register: "comune", context: "più astratto e neutro, senza il colore popolare di ambaradam" },
    { term: "baraonda", register: "colloquiale", context: "disordine rumoroso, tono simile ma più diffuso" },
    { term: "trambusto", register: "comune", context: "confusione movimentata, con implicazione di agitazione fisica" },
    { term: "casino", register: "colloquiale", context: "il più diretto e informale, copre lo stesso campo semantico" }
  ],

  antonyms: [
    { term: "ordine", register: "comune", context: "antonimo diretto" },
    { term: "chiarezza", register: "comune", context: "antonimo del senso figurato di intrigo oscuro" }
  ],

  relatedWords: [
    "baraonda",
    "caos",
    "trambusto",
    "confusione",
    "disordine",
    "baccano",
    "pasticcio"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/ambaradam"
  },

  paroliereNote:
    "Ambaradam è uno di quei lemmi che la lexicografia fatica a trattare con onestà, " +
    "perché l'etimologia non è risolta e probabilmente non lo sarà. Le ipotesi araba " +
    "e swahili sono entrambe plausibili e prive di prova definitiva; c'è chi sostiene " +
    "un'origine puramente italiana per via onomatopeica. Questa opacità non " +
    "diminuisce il valore della parola — anzi, la rende più interessante: un termine " +
    "vivo, espressivo, irriducibile a una sola storia.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Ambaradam — Il Paroliere",
    description:
      "Confusione, caos, disordine indistricabile — parola popolare dal sapore ironico " +
      "usata quando le cose si accumulano senza ordine.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};