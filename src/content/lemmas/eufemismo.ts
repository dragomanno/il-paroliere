// Il Paroliere — Lemma: eufemismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const eufemismo: LemmaEntry = {
  lemma: "eufemismo",
  slug: "eufemismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Procedimento retorico con cui una parola o un'espressione sgradita, tabù o eccessivamente diretta viene sostituita da una formulazione più morbida o indiretta. L'eufemismo opera su registro, contesto e intenzione: può nascere da cortesia genuina o da una precisa volontà di attenuare, occultare, manipolare.",

  shortDefinition:
    "Sostituzione di un'espressione diretta o tabù con una formulazione più morbida — gesto di cortesia o strumento di manipolazione linguistica.",

  register: ["comune"],
  domains: ["linguaggio", "retorica"],

  etymology:
    "Dal greco euphēmismós, da eu- (bene) + phēmi (parlare): letteralmente «parlare bene».",

  examples: [],

  synonyms: [
      {
        term: "perifrasi attenuativa",
        register: "tecnico",
        context: "formulazione che aggira il termine diretto attraverso una circonlocuzione",
      },
      {
        term: "litote",
        register: "tecnico",
        context: "attenuazione per negazione del contrario — forma contigua ma distinta",
      },
    ],

  antonyms: [
      {
        term: "disfemismo",
        register: "tecnico",
        context: "sostituzione intenzionalmente ruvida o offensiva",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/eufemismo/",
    wiktionary: "https://it.wiktionary.org/wiki/eufemismo",
  },

  paroliereNote:
    "George Orwell dedica pagine memorabili all'eufemismo politico: «pacificazione» per bombardamento, «trasferimento di popolazione» per deportazione. Ma l'eufemismo non è sempre disonesto — dire «è mancato» invece di «è morto» può essere un gesto di rispetto genuino. La questione non è la parola: è chi la sceglie, per chi, e con quale intenzione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Eufemismo — Il Paroliere",
    description:
      "Definizione originale di 'eufemismo': il meccanismo retorico che addolcisce ciò che è tabù o scomodo. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
