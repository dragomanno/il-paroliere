// Il Paroliere — Lemma: appartenenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const appartenenza: LemmaEntry = {
  lemma: "appartenenza",
  slug: "appartenenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Il legame che unisce una persona a un gruppo, un luogo o una tradizione, al " +
    "punto da farne sentire parte costitutiva della propria identità. Non richiede " +
    "necessariamente un'adesione formale o dichiarata: si può appartenere a una " +
    "comunità per nascita, per scelta o per semplice riconoscimento reciproco, e " +
    "l'intensità del legame può restare del tutto interiore.",

  shortDefinition:
    "Il legame che fa sentire una persona parte costitutiva di un gruppo, un luogo o una tradizione.",

  register: ["comune", "tecnico"],
  domains: ["sociologia", "psicologia", "identità"],

  etymology:
    "Derivato del verbo appartenere, dal latino tardo ad pertinere, «essere " +
    "pertinente, riguardare». Il senso di legame identitario è uno sviluppo " +
    "relativamente recente, affermatosi pienamente nel Novecento sociologico.",

  examples: [
    "Il senso di appartenenza a quella squadra andava oltre il tifo: era un'eredità di famiglia.",
    "Molti emigrati vivono un'appartenenza doppia, divisa tra il paese d'origine e quello d'arrivo.",
    "L'appartenenza a un gruppo non implica l'accordo su tutto ciò che il gruppo rappresenta.",
  ],

  synonyms: [
    {
      term: "identificazione",
      register: "tecnico",
      context: "più orientato al processo psicologico che al legame sociale duraturo",
    },
    {
      term: "radicamento",
      register: "letterario",
      context: "enfatizza la stabilità e la profondità del legame, spesso con un luogo",
    },
  ],

  antonyms: [
    {
      term: "estraneità",
      register: "comune",
      context: "la condizione di chi non si sente parte di un gruppo o contesto",
    },
    {
      term: "sradicamento",
      register: "letterario",
      context: "la perdita, spesso dolorosa, di un legame di appartenenza preesistente",
    },
  ],

  relatedWords: ["identità", "comunità", "radici", "inclusione", "tribù"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/appartenenza",
  },

  paroliereNote:
    "L'appartenenza si distingue dall'identità perché guarda fuori più che dentro: " +
    "l'identità risponde a «chi sono», l'appartenenza a «di chi sono parte». Le due " +
    "cose si intrecciano quasi sempre, ma è possibile un'identità solida senza una " +
    "chiara appartenenza — e viceversa, un'appartenenza dichiarata che non riflette " +
    "davvero l'identità di chi la esibisce.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Appartenenza — Il Paroliere",
    description:
      "Definizione originale di 'appartenenza': il legame che fa sentire una persona " +
      "parte di un gruppo, un luogo o una tradizione. Con esempi, etimologia e distinzione da identità.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
