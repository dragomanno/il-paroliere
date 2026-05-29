// Il Paroliere — Lemma: malleabile
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malleabile: LemmaEntry = {
  lemma: "malleabile",
  slug: "malleabile",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "In fisica dei materiali, si dice di un materiale che può essere deformato per " +
    "pressione o percussione — steso in lamine o foglie — senza rompersi: l'oro è il " +
    "metallo più malleabile conosciuto. Per estensione, in senso figurato, descrive " +
    "una persona, una struttura o un'idea capace di adattarsi a situazioni nuove " +
    "senza perdere la propria coerenza di fondo — ma con il rischio, quando la " +
    "duttilità diventa eccessiva, di segnalare assenza di carattere.",

  shortDefinition:
    "Che si può modellare senza rompersi; per estensione, capace di adattarsi senza " +
    "perdere la propria sostanza.",

  register: ["comune", "tecnico"],
  domains: ["fisica", "psicologia"],

  etymology:
    "Dal latino medievale malleabilis, derivato di malleus (martello). La metallurgia " +
    "è il contesto originario: malleabile è ciò che regge i colpi del martello senza " +
    "cedere.",

  synonyms: [
    { term: "duttile", register: "tecnico", context: "in metallurgia si riferisce alla deformazione per trazione, non per percussione — sfumatura tecnica importante" },
    { term: "flessibile", register: "comune", context: "più generico, enfatizza la capacità di piegarsi senza rompersi" },
    { term: "plasmabile", register: "comune", context: "accentua la possibilità di essere dato a una forma, spesso in senso educativo o psicologico" },
    { term: "adattabile", register: "comune", context: "più neutro, riferito soprattutto a comportamenti e strutture organizzative" }
  ],

  antonyms: [
    { term: "rigido", register: "comune", context: "non cede alla pressione; in senso figurato, non si adatta" },
    { term: "fragile", register: "comune", context: "cede alla pressione ma si rompe, senza recupero" },
    { term: "inflessibile", register: "comune", context: "in senso caratteriale, non disposto a modificare posizioni o comportamenti" }
  ],

  relatedWords: [
    "duttile",
    "flessibile",
    "resiliente",
    "plasmabile",
    "adattabile",
    "cedevole",
    "temprato"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/malleabile"
  },

  paroliereNote:
    "La distinzione tecnica tra malleabile e duttile è una di quelle che la lingua " +
    "comune ha smesso di fare: in metallurgia la malleabilità riguarda la " +
    "deformazione per compressione o percussione, la duttilità quella per trazione. " +
    "L'oro eccelle nella prima, il rame nella seconda. Nella lingua di tutti i giorni " +
    "i due aggettivi si usano spesso come sinonimi — e capire perché non lo siano del " +
    "tutto dice qualcosa di interessante su come il sapere tecnico si trasformi, e a " +
    "volte si perda, nel passaggio alla lingua comune.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Malleabile — Il Paroliere",
    description:
      "Che si può modellare senza rompersi; per estensione, capace di adattarsi senza " +
      "perdere la propria sostanza.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};