// Il Paroliere — Lemma: banalità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const banalita: LemmaEntry = {
  lemma: "banalità",
  slug: "banalita",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Condizione di chi o di ciò che non ha nulla di nuovo da offrire: già " +
    "sentito, già pensato, già detto. Una banalità è anche l'affermazione o " +
    "l'idea che incarna questa condizione — quella cosa che si dice quando non " +
    "si ha niente da dire. Il termine porta con sé una nota di delusione " +
    "silenziosa: ci si aspettava qualcosa di più e si è trovato il già noto.",

  shortDefinition:
    "Assenza di originalità in un'idea o in un'affermazione; ciò che è scontato al punto da deludere per eccesso di familiarità.",

  register: ["comune"],
  domains: ["pensiero", "linguaggio"],

  examples: [
    "Aveva parlato per dieci minuti senza dire nulla che non fosse una banalità.",
    "La banalità non è solo questione di idee: può essere anche di forma, di tono, di scelta delle parole.",
    "A volte le banalità sopravvivono perché funzionano — ma questo non le rende meno banali.",
  ],

  synonyms: [
    {
      term: "luogo comune",
      register: "comune",
      context: "affermazione stereotipata condivisa senza riflessione",
    },
    {
      term: "ovvietà",
      register: "comune",
      context: "qualcosa di così evidente da non valere la pena di dirlo",
    },
    {
      term: "cliché",
      register: "comune",
      context: "formula logora per uso eccessivo",
    },
  ],

  antonyms: [
    {
      term: "originalità",
      register: "comune",
      context: "capacità di offrire qualcosa di non ancora detto o pensato",
    },
  ],

  relatedWords: [
    "banale",
    "scontato",
    "luogo comune",
    "cliché",
    "trito",
    "ovvietà",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/banalit%C3%A0",
  },

  paroliereNote:
    "La banalità ha una storia strana: in origine «banale» significava ciò che " +
    "appartiene a tutti, comune nel senso feudale del bene collettivo. Poi ha " +
    "perso il valore positivo e ha tenuto solo l'idea di ciò che è talmente " +
    "condiviso da non valere più nulla. Hannah Arendt ne ha fatto un concetto " +
    "filosofico — la banalità del male — che ha ribaltato ancora una volta il " +
    "significato. Una parola che vale la pena non usare troppo in fretta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Banalità — Il Paroliere",
    description:
      "Definizione originale di 'banalità': assenza di originalità, il già detto. " +
      "Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
