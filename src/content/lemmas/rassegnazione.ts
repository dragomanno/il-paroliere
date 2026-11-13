// Il Paroliere — Lemma: rassegnazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rassegnazione: LemmaEntry = {
  lemma: "rassegnazione",
  slug: "rassegnazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico"],
  domains: ["psicologia", "relazioni", "vita quotidiana"],

  definition:
    "Atteggiamento di chi smette di opporsi a una situazione percepita come inevitabile, rinunciando in tutto o in parte a modificarla. Può portare una calma amara e una riduzione del conflitto, ma anche spegnere l'iniziativa quando il limite accettato non è davvero insuperabile.",

  shortDefinition:
    "Rinuncia a contrastare ciò che si ritiene inevitabile, spesso con una calma amara.",

  etymology:
    "Derivato di rassegnare, dal latino resignare, formato da re- e signare, «segnare». Il passaggio semantico conduce dall'atto di consegnare o rinunciare a quello di deporre la resistenza.",

  examples: [
    "Con rassegnazione ha richiuso la valigia: il treno era cancellato e non c'erano alternative per quella sera.",
    "La sua rassegnazione non era serenità; era la stanchezza di aver spiegato troppe volte la stessa cosa.",
    "In ufficio nessuno protestava più e quella rassegnazione collettiva era più eloquente delle lamentele di prima.",
  ],

  synonyms: [
    {
      term: "rinuncia",
      register: "comune",
      note: "Indica l'abbandono di un fine o di un bene, senza implicare sempre una disposizione emotiva durevole.",
    },
    {
      term: "remissione",
      register: "formale",
      note: "Può suggerire l'atto di cedere a una volontà o a un giudizio altrui; oggi è meno comune nel parlato.",
    },
    {
      term: "fatalismo",
      register: "comune",
      note: "Attribuisce gli eventi a un destino immodificabile ed è più ideologico o generalizzato della rassegnazione.",
    },
  ],

  antonyms: [
    {
      term: "determinazione",
      register: "comune",
      note: "Volontà di proseguire o incidere nonostante la difficoltà.",
    },
    {
      term: "resistenza",
      register: "comune",
      note: "Opposizione attiva a un vincolo, a un ordine o a una circostanza.",
    },
  ],

  relatedWords: [
    "frustrazione",
    "accettazione",
    "speranza",
    "attesa",
    "desiderio",
    "aspirazione",
    "dipendenza",
    "relazione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rassegnazione",
  },

  paroliereNote:
    "Nella sequenza che va da → frustrazione a → rassegnazione, il problema non è più soltanto l'ostacolo: è la rinuncia a immaginare una via d'uscita. Per questo non coincide con → accettazione, che può essere lucida e attiva; la rassegnazione tende piuttosto a ritirare energia dal possibile.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Rassegnazione — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Significato di rassegnazione: rinunciare a opporsi a ciò che appare inevitabile. Definizione originale, esempi e distinzione da accettazione e resa passiva.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
