// Il Paroliere — Lemma: demistificare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const demistificare: LemmaEntry = {
  lemma: "demistificare",
  slug: "demistificare",
  partOfSpeech: "verbo",

  definition:
    "Smontare l'alone di sacralità o di leggenda che avvolge una persona, " +
    "un'idea o un'istituzione per guardarne la sostanza senza ingombri. Non " +
    "è un gesto iconoclasta: è un'operazione critica che restituisce misura " +
    "— necessaria quando il mito ha preso il posto del ragionamento.",

  shortDefinition:
    "Riportare un'idea o una figura alla sua misura reale, togliendo l'alone di mito o di sacralità che la circonda.",

  register: ["comune", "critico"],
  domains: ["pensiero", "retorica"],

  examples: [
    "Il libro non attaccava il fondatore: si limitava a demistificarlo, con fatti e documenti.",
    "Demistificare non significa sminuire: significa vedere senza il filtro della riverenza.",
    "Certi miti resistono proprio perché nessuno vuole demistificarli — il disincanto è scomodo.",
  ],

  synonyms: [
    {
      term: "smitizzare",
      register: "comune",
      context: "quasi sinonimo, leggermente più informale",
    },
    {
      term: "disincantare",
      register: "comune",
      context: "con sfumatura di perdita dell'illusione, non solo di critica",
    },
  ],

  antonyms: [
    {
      term: "mitizzare",
      register: "comune",
      context: "costruire o alimentare un mito intorno a qualcosa",
    },
    {
      term: "idealizzare",
      register: "comune",
      context: "vedere qualcosa come migliore di ciò che è",
    },
  ],

  relatedWords: [
    "mito",
    "smitizzare",
    "disincanto",
    "critica",
    "ideologia",
    "leggenda",
    "retorica",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/demistificare",
  },

  paroliereNote:
    "Demistificare è uno dei verbi preferiti dal pensiero critico del Novecento " +
    "— da Roland Barthes a Karl Popper, ognuno a modo suo ha costruito un " +
    "metodo per togliere il velo. Ma la parola ha una trappola: chi demistifica " +
    "spesso non si accorge di stare costruendo un contro-mito altrettanto " +
    "ingombrante. Il gesto critico è potente solo se si applica anche a se stesso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Demistificare — Il Paroliere",
    description:
      "Definizione originale di 'demistificare': smontare il mito per guardare " +
      "la sostanza. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
