// Il Paroliere — Lemma: lieve
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lieve: LemmaEntry = {
  lemma: "lieve",
  slug: "lieve",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Di peso, intensità o consistenza minima, appena percettibile — un tocco, un " +
    "suono, un dolore che si avvertono senza gravare. In senso figurato descrive " +
    "un tono, uno stile o un modo di affrontare le cose che alleggerisce senza " +
    "banalizzare, mantenendo profondità sotto una superficie delicata.",

  shortDefinition:
    "Di intensità minima, appena percettibile; in senso figurato, uno stile che alleggerisce senza banalizzare.",

  register: ["comune", "letterario"],
  domains: ["percezione", "estetica", "quotidiano"],

  etymology:
    "Dal latino levis, «leggero», la stessa radice di levità e levare. La forma " +
    "lieve conserva il dittongo dell'evoluzione fonetica popolare, a differenza " +
    "della forma dotta levità.",

  examples: [
    "Un lieve profumo di gelsomino entrava dalla finestra aperta.",
    "Parlava con un tono lieve anche delle cose più difficili, senza mai sminuirle.",
    "Il danno era lieve, curabile in pochi giorni di riposo.",
  ],

  synonyms: [
    {
      term: "leggero",
      register: "comune",
      context: "più generico e quotidiano, meno raffinato",
    },
    {
      term: "tenue",
      register: "letterario",
      context: "più adatto a luce, colore o suono che a peso fisico",
    },
    {
      term: "delicato",
      register: "comune",
      context: "enfatizza la cura più che la minima intensità",
    },
  ],

  antonyms: [
    {
      term: "grave",
      register: "comune",
      context: "pesante, serio — opposto sia fisico sia figurato",
    },
    {
      term: "intenso",
      register: "comune",
      context: "di forte percezione, l'opposto della minima intensità",
    },
  ],

  relatedWords: ["levità", "leggerezza", "gravità", "tenue", "delicato"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/lieve",
  },

  paroliereNote:
    "Lieve e levità condividono la stessa radice latina ma percorrono due strade " +
    "diverse: levità si è fatta parola dotta, quasi filosofica, mentre lieve è " +
    "rimasta nel corpo della lingua quotidiana, capace di descrivere un profumo, " +
    "un dolore, un tono di voce senza mai perdere in precisione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Lieve — Il Paroliere",
    description:
      "Definizione originale di 'lieve': di intensità minima, appena percettibile. " +
      "In senso figurato, uno stile che alleggerisce senza banalizzare. Con esempi ed etimologia.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
