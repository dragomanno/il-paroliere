// Il Paroliere — Lemma: nembo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const nembo: LemmaEntry = {
  lemma: "nembo",
  slug: "nembo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Nube compatta e scura che porta pioggia o tempesta — la forma più densa e minacciosa del cielo. " +
    "In arte e in poesia indica il gruppo di nuvole luminose, spesso dorate o iridescenti, che avvolge " +
    "figure divine e angeliche come un alone atmosferico del sacro. Per estensione letteraria, qualsiasi " +
    "massa — di fumo, di folla, di pensieri — che si addensa con forza e oscura.",

  shortDefinition:
    "Nube tempestosa; in arte, l'alone luminoso che avvolge figure celesti; in senso figurato, massa che si addensa e incombe.",

  register: ["letterario", "tecnico"],
  domains: ["meteorologia", "arte", "atmosfera"],

  etymology:
    "Dal latino nimbus, 'nube temporalesca, aureola'. La stessa radice ha dato nimbo in italiano, " +
    "usato soprattutto per l'aureola sacra; nembo è la forma poetica e meteorologica.",

  examples: [
    "Un nembo all'orizzonte annunciava il temporale ancora lontano.",
    "Nei mosaici bizantini il nembo dorato circonda le figure divine come una seconda pelle di luce.",
    "Un nembo di fumo saliva dai camini del borgo, nell'aria ferma del mattino.",
    "Dante usò nembo per indicare la bufera infernale — una massa che non smette mai di muoversi.",
  ],

  synonyms: [
    {
      term: "nube",
      register: "comune",
      context: "termine generico, senza la connotazione temporalesca del nembo",
    },
    {
      term: "nimbo",
      register: "tecnico",
      context: "la stessa radice latina, usato soprattutto per l'aureola sacra in arte",
    },
    {
      term: "nuvolaglia",
      register: "comune",
      context: "insieme di nuvole, senza la qualità minacciosa del nembo",
    },
  ],

  antonyms: [
    {
      term: "sereno",
      register: "comune",
      context: "cielo privo di nuvole, opposto diretto del nembo meteorologico",
    },
    {
      term: "limpido",
      register: "comune",
      context: "aria chiara e trasparente",
    },
  ],

  relatedWords: [
    "nimbo",
    "nube",
    "temporale",
    "aureola",
    "cumulonembo",
    "tempesta",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/nembo/",
    wiktionary: "https://it.wiktionary.org/wiki/nembo",
  },

  paroliereNote:
    "Nembo ha una doppia vita poco nota: la stessa parola latina (nimbus) ha dato sia l'aureola " +
    "sacra che la nube temporalesca. In italiano i due sensi si sono separati — nimbo per il sacro, " +
    "nembo per la tempesta — ma in Dante convivono ancora nella stessa immagine: la bufera che non " +
    "smette, il nembo dell'Inferno V. Una parola che sa stare nella luce e nel buio.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Nembo — Il Paroliere",
    description:
      "Definizione originale di 'nembo': nube tempestosa; in arte, l'alone che avvolge figure celesti. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
