// Il Paroliere — Lemma: esecrabile
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const esecrabile: LemmaEntry = {
  lemma: "esecrabile",
  slug: "esecrabile",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Che merita condanna totale e sdegno profondo, per la gravità morale di ciò che " +
    "rappresenta o di ciò che ha compiuto. È un aggettivo di tono elevato, usato " +
    "quando riprovevole o deprecabile non bastano: porta con sé una condanna che non " +
    "ammette attenuanti. Nel linguaggio retorico e giornalistico è spesso usato per " +
    "amplificare il giudizio negativo su un atto o un comportamento ritenuto " +
    "intollerabile.",

  shortDefinition:
    "Degno di totale condanna e sdegno — più forte di riprovevole, usato quando non " +
    "ci sono attenuanti.",

  register: ["letterario", "comune"],
  domains: ["etica", "diritto", "linguaggio"],

  etymology:
    "Dal latino execrabilis, derivato di execrari (maledire, implorare la rovina di " +
    "qualcuno) — composto di ex- (fuori, intensivo) e sacrare (consacrare). " +
    "L'execratio romana era una maledizione solenne, una formula rituale di " +
    "esclusione dalla comunità.",

  synonyms: [
    { term: "abominevole", register: "comune/letterario", context: "uguale intensità morale, con sfumatura di disgusto fisico" },
    { term: "riprovevole", register: "comune", context: "tono più moderato, usato per condanne meno assolute" },
    { term: "nefando", register: "letterario/arcaico", context: "di registro molto elevato, quasi esclusivamente letterario" },
    { term: "infame", register: "comune", context: "forte e diretto, con connotazione di disonore pubblico" }
  ],

  antonyms: [
    { term: "lodevole", register: "comune", context: "antonimo diretto sul piano del giudizio morale" },
    { term: "ammirevole", register: "comune", context: "degno di approvazione ed elogio" },
    { term: "encomiabile", register: "comune/letterario", context: "meriting formal praise — tono elevato" }
  ],

  relatedWords: [
    "esecrazione",
    "abominare",
    "riprovevole",
    "infame",
    "condannare",
    "deprecabile",
    "nefando"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/esecrabile"
  },

  paroliereNote:
    "Esecrabile è uno di quegli aggettivi che la retorica ha consumato un po': nelle " +
    "cronache giornalistiche appare così spesso — 'gesto esecrabile', 'crimine " +
    "esecrabile' — da aver perso parte della sua forza originaria. Eppure la sua " +
    "radice latina — la maledizione rituale, l'esclusione solenne dalla comunità — " +
    "porta un peso semantico che nessun sinonimo rende con la stessa precisione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Esecrabile — Il Paroliere",
    description:
      "Degno di totale condanna e sdegno — più forte di riprovevole, usato quando non " +
      "ci sono attenuanti.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};