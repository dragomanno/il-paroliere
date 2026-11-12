// Il Paroliere — Lemma: bipolare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bipolare: LemmaEntry = {
  lemma: "bipolare",
  slug: "bipolare",
  partOfSpeech: "aggettivo",

  definition:
    "In psichiatria, descrive ciò che è relativo al disturbo bipolare: una condizione clinica riconosciuta dal DSM-5 e dall'ICD-11, caratterizzata dall'alternanza di episodi maniacali o ipomaniacali ed episodi depressivi, separati da fasi di stabilità relativa. Nel linguaggio comune il termine viene usato — spesso impropriamente — per indicare una persona dal carattere instabile o dagli umori imprevedibili: un uso che semplifica e distorce la realtà clinica.",

  shortDefinition:
    "Relativo al disturbo bipolare in senso clinico; nel parlato comune, usato (impropriamente) per chi ha umori molto variabili.",

  register: ["tecnico", "comune"],
  domains: ["psicologia", "psicoanalisi"],

  etymology:
    "Dal latino bi- (due) + polus (polo); in psichiatria, dalla nomenclatura di Karl Leonhard (1957).",

  examples: [
    "Il disturbo bipolare richiede una diagnosi specialistica e una terapia seguita nel tempo, non un'etichetta da conversazione.",
    "Dire che il tempo di marzo è bipolare è una battuta che a molti pazienti non fa ridere.",
    "Lo psichiatra ha spiegato alla famiglia la differenza tra un episodio ipomaniacale e un semplice periodo di euforia.",
  ],

  synonyms: [
      {
        term: "maniaco-depressivo",
        register: "tecnico",
        context: "denominazione clinica precedente, ora meno usata",
      },
    ],

  antonyms: [],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/bipolare/",
    wiktionary: "https://it.wiktionary.org/wiki/bipolare",
  },

  paroliereNote:
    "Poche parole tecniche hanno subito una distorsione così rapida nel passaggio al parlato comune. Quando qualcuno dice di una persona «è bipolare», quasi sempre intende qualcosa di vago — imprevedibile, lunatico, contraddittorio. Ma il disturbo bipolare è una condizione clinica precisa, con criteri diagnostici rigorosi, che può richiedere trattamento farmacologico a lungo termine. La differenza non è semantica: è la distanza tra un'etichetta e una vita.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Bipolare — Il Paroliere",
    description:
      "Definizione originale di 'bipolare': significato clinico e uso comune, con la distinzione tra disturbo psichiatrico e impiego colloquiale improprio.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-11-12",
};
