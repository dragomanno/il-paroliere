// Il Paroliere — Lemma: materico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const materico: LemmaEntry = {
  lemma: "materico",
  slug: "materico",
  partOfSpeech: "aggettivo",
  gender: "variabile (materico/materica)",

  definition:
    "Che dà rilievo alla materia stessa — alla sua consistenza, texture o peso " +
    "fisico — più che alla forma o al soggetto rappresentato. In arte descrive " +
    "opere in cui il colore o il materiale costruiscono spessore visibile e " +
    "tattile sulla superficie; per estensione, nel linguaggio comune, indica un " +
    "gusto o uno stile che privilegia la concretezza sensoriale.",

  shortDefinition:
    "Che valorizza la consistenza fisica della materia stessa, più che la forma; in arte, superficie densa e tattile.",

  register: ["tecnico", "comune"],
  domains: ["arte", "filosofia", "design"],

  etymology:
    "Derivato dell'aggettivo materiale, dal latino materia. Diffuso in ambito " +
    "artistico soprattutto a partire dall'informale materico del secondo Novecento " +
    "(Burri, Fautrier).",

  examples: [
    "Le tele di Burri restano l'esempio più citato di pittura materica: sacchi, catrame, ferro, non solo colore.",
    "Preferiva un arredamento materico, con legno grezzo e pietra a vista, alla lucentezza del design minimale.",
    "La texture materica della ceramica raku racconta il fuoco che l'ha attraversata.",
  ],

  synonyms: [
    {
      term: "tattile",
      register: "tecnico",
      context: "enfatizza la percezione al tocco più che la costruzione fisica dell'opera",
    },
    {
      term: "corposo",
      register: "comune",
      context: "più generico, applicabile anche a sapori o consistenze non artistiche",
    },
  ],

  antonyms: [
    {
      term: "lineare",
      register: "tecnico",
      context: "in arte, stile che privilegia il contorno e la forma sulla consistenza fisica",
    },
    {
      term: "immateriale",
      register: "letterario",
      context: "privo di corpo o consistenza fisica, l'opposto concettuale",
    },
  ],

  relatedWords: ["materia", "texture", "informale", "corposità", "tattile"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/materico",
  },

  paroliereNote:
    "Materico è una parola nata in bottega, tra pittori che avevano smesso di " +
    "fidarsi della forma pura e avevano iniziato a incollare sabbia, catrame, " +
    "ruggine sulla tela: descrive quel momento in cui l'opera smette di " +
    "rappresentare la materia e comincia a essere la materia.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Materico — Il Paroliere",
    description:
      "Definizione originale di 'materico': che dà rilievo alla consistenza fisica " +
      "della materia, in arte e nel linguaggio comune. Con esempi, etimologia e riferimento all'informale.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
