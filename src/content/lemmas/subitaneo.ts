// Il Paroliere — Lemma: subitaneo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const subitaneo: LemmaEntry = {
  lemma: "subitaneo",
  slug: "subitaneo",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Che avviene all'improvviso, senza preavviso e senza preparazione; detto di " +
    "eventi, sensazioni, reazioni o cambiamenti che si producono con una rapidità " +
    "tale da non lasciare spazio all'attesa. È un termine di registro leggermente " +
    "elevato rispetto a improvviso, con cui si sovrappone quasi completamente, ma che " +
    "conserva una sfumatura di brevità e intensità oltre che di imprevedibilità.",

  shortDefinition:
    "Che accade all'improvviso, senza preavviso — variante letteraria di improvviso, " +
    "con accento su rapidità e intensità.",

  register: ["letterario", "comune"],
  domains: ["filosofia", "psicologia", "letteratura"],

  etymology:
    "Dal latino subitus (improvviso, inatteso), participio passato di subire nel " +
    "senso arcaico di venire dal basso, sopraggiungere all'improvviso. Il suffisso " +
    "-aneo forma aggettivi che indicano appartenenza o caratteristica stabile.",

  synonyms: [
    { term: "improvviso", register: "comune", context: "equivalente neutro e di uso quotidiano" },
    { term: "repentino", register: "comune/letterario", context: "enfatizza la rapidità del cambiamento più che la sorpresa" },
    { term: "istantaneo", register: "comune/tecnico", context: "accentua la dimensione temporale, quasi zero durata" },
    { term: "fulmineo", register: "comune", context: "con sfumatura di intensità violenta o definitiva" }
  ],

  antonyms: [
    { term: "graduale", register: "comune", context: "antonimo per progressività" },
    { term: "prevedibile", register: "comune", context: "antonimo per imprevedibilità" },
    { term: "lento", register: "comune", context: "antonimo per velocità" }
  ],

  relatedWords: [
    "improvviso",
    "repentino",
    "istantaneo",
    "inatteso",
    "fulmineo",
    "brusco",
    "imprevisto"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/subitaneo"
  },

  paroliereNote:
    "Subitaneo è uno di quei sinonimi colti di improvviso che sopravvivono in poesia " +
    "e in prosa letteraria senza mai essere davvero entrati nel parlato. Ha una " +
    "musicalità che improvviso non possiede — le quattro sillabe distese, la cadenza " +
    "sdrucciola — e questo lo rende prezioso in certi contesti ritmici. Nella lingua " +
    "quotidiana, però, suona ricercato: un segnale di registro che va usato " +
    "consapevolmente.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Subitaneo — Il Paroliere",
    description:
      "Che accade all'improvviso, senza preavviso — variante letteraria di improvviso, " +
      "con accento su rapidità e intensità.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};