// Il Paroliere — Lemma: salgemma
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const salgemma: LemmaEntry = {
  lemma: "salgemma",
  slug: "salgemma",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Sale di origine minerale estratto da giacimenti sotterranei formatisi per " +
    "evaporazione di antichi mari. A differenza del sale marino ottenuto per " +
    "evaporazione dell'acqua di mare, il salgemma si trova in cristalli compatti " +
    "nelle viscere della terra, spesso colorati di rosa, grigio o bianco. È tra le " +
    "più antiche merci del mondo: le vie del sale hanno strutturato commerci, città e " +
    "confini per millenni.",

  shortDefinition:
    "Sale estratto da giacimenti minerali sotterranei; una delle merci più antiche " +
    "della storia.",

  register: ["comune", "tecnico"],
  domains: ["geologia", "gastronomia", "storia"],

  etymology:
    "Composto di sale e gemma — nel senso latino di gemma come pietra preziosa, " +
    "cristallo. Il salgemma è dunque la 'gemma di sale', il sale che si trova già " +
    "cristallizzato nella roccia come un minerale nobile.",

  examples: [
  ],

  synonyms: [
    { term: "sale di roccia", register: "comune", context: "denominazione descrittiva più immediata" },
    { term: "alite", register: "tecnico/mineralogico", context: "nome mineralogico del cloruro di sodio cristallino" }
  ],

  antonyms: [
    { term: "sale marino", register: "comune", context: "ottenuto per evaporazione superficiale, non estratto" }
  ],

  relatedWords: [
    "curcuma",
    "peperoncino"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/salgemma"
  },

  paroliereNote:
    "Il salgemma rosa dell'Himalaya è diventato negli ultimi anni un oggetto di culto " +
    "gastronomico e wellness: si trova nelle cucine di design e sugli scaffali delle " +
    "erboristerie. È lo stesso minerale usato da millenni per conservare carni e " +
    "pesci, ma il packaging ha cambiato tutto. Una storia di marketing più che di " +
    "chimica.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Salgemma — Il Paroliere",
    description:
      "Salgemma: il sale estratto dalla roccia, una delle merci più antiche. Geologia, " +
      "gastronomia, storia — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};