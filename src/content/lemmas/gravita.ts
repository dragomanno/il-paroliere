// Il Paroliere — Lemma: gravità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const gravita: LemmaEntry = {
  lemma: "gravità",
  slug: "gravita",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "La forza che attrae i corpi verso il centro della Terra o di un altro corpo " +
    "massivo, responsabile del peso e della caduta; in senso figurato, il peso " +
    "morale o le conseguenze serie di una situazione, un errore o una decisione. " +
    "Nell'uso comune la parola misura quanto una cosa vada presa sul serio, non " +
    "quanto pesi fisicamente.",

  shortDefinition:
    "Forza che attrae i corpi verso la Terra; in senso figurato, il peso e la serietà di una situazione.",

  register: ["comune", "tecnico"],
  domains: ["fisica", "etica", "quotidiano"],

  etymology:
    "Dal latino gravitas, derivato di gravis, «pesante». La stessa radice di " +
    "grave, aggravare, gravare.",

  examples: [
    "Senza la gravità terrestre, un oggetto lasciato libero non cade: fluttua.",
    "Solo dopo qualche giorno si rese conto della gravità di quello che aveva detto.",
    "Il medico spiegò con gravità che la situazione richiedeva un intervento immediato.",
  ],

  synonyms: [
    {
      term: "peso",
      register: "comune",
      context: "più generico, sia fisico sia figurato",
    },
    {
      term: "serietà",
      register: "comune",
      context: "solo per il senso figurato, meno legato all'idea di conseguenza",
    },
    {
      term: "severità",
      register: "tecnico",
      context: "in ambito medico o giuridico, per indicare l'entità di un problema",
    },
  ],

  antonyms: [
    {
      term: "levità",
      register: "letterario",
      context: "assenza di peso, sia fisico sia figurato — l'opposto esatto in entrambi i sensi",
    },
    {
      term: "leggerezza",
      register: "comune",
      context: "più quotidiano, meno filosofico di levità",
    },
  ],

  relatedWords: ["levità", "lieve", "peso", "serietà", "grave", "caduta"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/gravit%C3%A0",
  },

  paroliereNote:
    "Gravità è una delle poche parole italiane in cui fisica ed etica condividono " +
    "davvero la stessa radice, non solo per coincidenza figurata: ciò che è grave, " +
    "in entrambi i sensi, tira verso il basso e richiede uno sforzo per essere " +
    "sollevato. È l'esatto opposto di levità, che nella voce già pubblicata su Il " +
    "Paroliere la cita come suo antonimo primario — qui la relazione è ricambiata.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Gravità — Il Paroliere",
    description:
      "Definizione originale di 'gravità': la forza che attrae i corpi verso la " +
      "Terra, e in senso figurato il peso morale di una situazione. Con esempi e link a levità.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
