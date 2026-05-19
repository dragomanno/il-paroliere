// Il Paroliere — Lemma: laconico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const laconico: LemmaEntry = {
  lemma: "laconico",
  slug: "laconico",
  partOfSpeech: "aggettivo",

  definition:
    "Chi è laconico parla o scrive con il minimo necessario, senza ridondanza " +
    "e senza sforzo apparente: ogni parola conta perché le altre sono state " +
    "tolte. Il termine viene dai Lacedemoni — gli Spartani — celebri per la " +
    "brevità tagliente dei loro discorsi; nella tradizione letteraria, il " +
    "laconico non è chi non ha nulla da dire, ma chi ha scelto di dire meno " +
    "per dire meglio.",

  shortDefinition:
    "Essenziale fino all'osso nella parola o nella scrittura — per scelta di stile, non per mancanza.",

  register: ["comune", "letterario"],
  domains: ["comunicazione", "stile"],

  examples: [
    "La sua risposta fu laconica: «No». Nient'altro.",
    "Uno stile laconico non è necessariamente freddo: può essere una forma di rispetto per chi legge.",
    "I dispacci militari spartani erano celebri per essere laconici — anche quando annunciavano sconfitte.",
  ],

  synonyms: [
    {
      term: "conciso",
      register: "comune",
      context: "sintetico, senza parole superflue",
    },
    {
      term: "asciutto",
      register: "comune",
      context: "privo di ornamenti e ridondanze stilistiche",
    },
    {
      term: "essenziale",
      register: "comune",
      context: "ridotto al nucleo, senza aggiunte",
    },
  ],

  antonyms: [
    {
      term: "prolisso",
      register: "comune",
      context: "che usa molte più parole del necessario",
    },
    {
      term: "ridondante",
      register: "comune",
      context: "che ripete e aggiunge senza necessità",
    },
  ],

  relatedWords: [
    "brevità",
    "concisione",
    "sintesi",
    "Sparta",
    "Lacedemoni",
    "economia del linguaggio",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/laconico",
  },

  paroliereNote:
    "Laconico è una di quelle parole che portano con sé la propria etimologia " +
    "in modo trasparente. I Lacedemoni erano noti per rispondere in modo tagliente " +
    "e breve — la risposta spartana per eccellenza è quella di Filippo II di " +
    "Macedonia che minacciò: «Se entro in Laconia, vi distruggerò». Gli Spartani " +
    "risposero con una sola parola: «Se». Non è solo brevità: è potere della sintesi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Laconico — Il Paroliere",
    description:
      "Definizione originale di 'laconico': essenziale per scelta, non per " +
      "mancanza. Con l'etimologia spartana, esempi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
