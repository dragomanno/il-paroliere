// Il Paroliere — Lemma: impasse
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const impasse: LemmaEntry = {
  lemma: "impasse",
  slug: "impasse",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Condizione in cui ogni movimento è bloccato: avanzare è impossibile quanto tornare indietro. Prestito dal francese — dove impasse è il vicolo cieco — il termine si è insediato nell'italiano formale della diplomazia e della politica, ma descrive con uguale precisione qualsiasi situazione in cui le parti non trovano uscita. Femminile invariabile: le impasse.",

  shortDefinition:
    "Punto fermo da cui non si esce né avanzando né tornando indietro; in politica e diplomazia, il blocco in cui ogni strada è chiusa.",

  register: ["comune", "formale"],
  domains: ["logica", "situazioni"],

  etymology:
    "Dal francese impasse (vicolo cieco), da im- (non, variante di in-) + passer (passare).",

  examples: [],

  synonyms: [
      {
        term: "stallo",
        register: "comune",
        context: "blocco reciproco — spesso usato negli scacchi e in politica",
      },
      {
        term: "punto morto",
        register: "comune",
        context: "situazione in cui la trattativa o il processo non avanza",
      },
      {
        term: "vicolo cieco",
        register: "comune",
        context: "traduzione italiana del senso originale francese di impasse",
      },
    ],

  antonyms: [
      {
        term: "sblocco",
        register: "comune",
        context: "uscita dalla situazione bloccata",
      },
      {
        term: "svolta",
        register: "comune",
        context: "momento che modifica la direzione e riapre le possibilità",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/impasse/",
    wiktionary: "https://it.wiktionary.org/wiki/impasse",
  },

  paroliereNote:
    "In italiano si è scelto di tenere la parola francese invece di tradurla — e questa scelta dice qualcosa. Stallo o punto morto funzionano, ma impasse ha quella qualità di prestito che conferisce distanza: la situazione è così bloccata che anche la parola viene da altrove. In diplomatichese è quasi obbligatoria; nel parlato quotidiano ha ancora l'aria leggermente ricercata di chi ha imparato a chiamare le cose con il nome giusto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Impasse — Il Paroliere",
    description:
      "Definizione originale di 'impasse': la situazione bloccata da cui non si può avanzare né tornare indietro. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
