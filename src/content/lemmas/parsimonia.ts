// Il Paroliere — Lemma: parsimonia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const parsimonia: LemmaEntry = {
  lemma: "parsimonia",
  slug: "parsimonia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Attitudine a usare risorse — denaro, tempo, parole, energia — nella misura " +
    "strettamente necessaria, senza sprechi né eccessi. Non coincide con l'avarizia, " +
    "dalla quale si distingue perché non esclude la generosità quando il contesto lo " +
    "richiede. In senso più ampio, la parsimonia può descrivere qualsiasi economia di " +
    "mezzi, compresa quella stilistica: scrivere con parsimonia significa scegliere " +
    "ogni parola con cura.",

  shortDefinition:
    "Uso misurato delle risorse, senza sprechi; distinta dall'avarizia perché non " +
    "esclude la generosità.",

  register: ["comune", "letterario"],
  domains: ["economia", "comportamento"],

  etymology:
    "Dal latino parsimonia, derivato di parcere (risparmiare, essere moderato). " +
    "Termine presente già in Plauto e Cicerone, con valore etico positivo nell'uso " +
    "classico.",

  synonyms: [
    { term: "frugalità", register: "comune", context: "riferita soprattutto al vitto e allo stile di vita, più concreta" },
    { term: "sobrietà", register: "comune", context: "accentua l'assenza di eccessi, anche nel comportamento e nel linguaggio" },
    { term: "economia", register: "comune", context: "più neutro, spesso riferito alla gestione pratica delle risorse" },
    { term: "moderazione", register: "comune", context: "più ampio, si applica a qualsiasi ambito comportamentale" }
  ],

  antonyms: [
    { term: "prodigalità", register: "comune", context: "uso eccessivo e disinvolto delle risorse" },
    { term: "spreco", register: "comune", context: "uso inutile o dannoso di risorse disponibili" },
    { term: "avarizia", register: "comune", context: "trattenere anche quando la generosità sarebbe dovuta — antonimo per eccesso nella direzione opposta" }
  ],

  relatedWords: [
    "frugalità",
    "sobrietà",
    "risparmio",
    "austerità",
    "temperanza",
    "essenzialità"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/parsimonia"
  },

  paroliereNote:
    "La parsimonia ha goduto di ottima stampa nella tradizione filosofica: gli stoici " +
    "la consideravano una forma di libertà, non di privazione. In epoca contemporanea " +
    "il termine viene applicato anche all'epistemologia — il principio del rasoio di " +
    "Occam si chiama talvolta 'principio di parsimonia': tra due spiegazioni " +
    "ugualmente valide, preferire la più semplice. Questo uso scientifico conferisce " +
    "alla parola una dignità intellettuale che va ben oltre il semplice risparmio.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Parsimonia — Il Paroliere",
    description:
      "Uso misurato delle risorse, senza sprechi; distinta dall'avarizia perché non " +
      "esclude la generosità.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};