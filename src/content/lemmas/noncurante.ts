// Il Paroliere — Lemma: noncurante
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const noncurante: LemmaEntry = {
  lemma: "noncurante",
  slug: "noncurante",
  partOfSpeech: "aggettivo",

  definition:
    "Chi mostra distacco verso ciò che accade o verso le conseguenze delle " +
    "proprie azioni — non necessariamente per assenza di intelligenza, spesso " +
    "per scelta. La noncuranza può essere una posa studiata, un modo di " +
    "esibire indifferenza; oppure un tratto autentico di carattere, difficile " +
    "da distinguere dall'esterno.",

  shortDefinition:
    "Chi esibisce o coltiva indifferenza verso ciò che accade intorno a sé; tra posa studiata e carattere autentico.",

  register: ["comune", "letterario"],
  domains: ["carattere"],

  examples: [
    "Era noncurante del giudizio altrui con la disinvoltura di chi ci ha lavorato anni.",
    "La noncuranza con cui trattava i dettagli era il suo modo di dire che i dettagli non lo riguardavano.",
    "Sembrava noncurante, ma notava tutto.",
  ],

  synonyms: [
    {
      term: "indifferente",
      register: "comune",
      context: "più diretto, senza la sfumatura di distacco voluto",
    },
    {
      term: "apatico",
      register: "comune",
      context: "privo di stimoli, più passivo della noncuranza",
    },
    {
      term: "disinvolto",
      register: "comune",
      context: "a proprio agio, non turbato — senza la connotazione negativa",
    },
  ],

  antonyms: [
    {
      term: "premuroso",
      register: "comune",
      context: "attento alle esigenze altrui e alle conseguenze delle azioni",
    },
    {
      term: "scrupoloso",
      register: "comune",
      context: "attento ai dettagli e alle implicazioni",
    },
  ],

  relatedWords: [
    "noncuranza",
    "indifferenza",
    "distacco",
    "apatia",
    "flemma",
    "disinvoltura",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/noncurante",
  },

  paroliereNote:
    "Noncurante è uno di quei aggettivi che dice molto su chi lo usa e su chi " +
    "lo riceve. Chi viene descritto come noncurante può viversi come libero — " +
    "non condizionato dalle aspettative. Chi guarda può leggerlo come " +
    "irresponsabilità o come eleganza. La parola non decide: osserva.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Noncurante — Il Paroliere",
    description:
      "Definizione originale di 'noncurante': tra posa di indifferenza e tratto " +
      "autentico di carattere. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
