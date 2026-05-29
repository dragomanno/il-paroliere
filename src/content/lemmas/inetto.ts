// Il Paroliere — Lemma: inetto
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const inetto: LemmaEntry = {
  lemma: "inetto",
  slug: "inetto",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Chi manca delle capacità o dell'attitudine necessarie per svolgere un compito, " +
    "ricoprire un ruolo o affrontare una situazione. Non indica necessariamente " +
    "stupidità: l'inetto può essere intelligente, riflessivo, persino lucidissimo " +
    "riguardo alla propria condizione — e proprio per questo incapace di agire. In " +
    "letteratura, l'inetto è diventato una delle figure antropologiche più studiate " +
    "della modernità: l'individuo che conosce il mondo ma non riesce a parteciparvi.",

  shortDefinition:
    "Privo delle capacità richieste da un compito o ruolo; in letteratura, figura " +
    "dell'individuo che non riesce ad agire.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "società"],

  etymology:
    "Dal latino ineptus, composto di in- (negazione) e aptus (adatto, idoneo). Già in " +
    "latino aveva sfumatura critica: indicava ciò che è fuori luogo, inappropriato, " +
    "goffo.",

  synonyms: [
    { term: "incapace", register: "comune", context: "più neutro, riferito alla sola mancanza di capacità" },
    { term: "incompetente", register: "comune", context: "accentua la mancanza di competenza specifica in un dominio" },
    { term: "inadatto", register: "comune", context: "il non essere adatto a una funzione o contesto specifico" },
    { term: "mediocre", register: "comune", context: "insufficiente ma non radicalmente incapace — sfumatura meno drastica" }
  ],

  antonyms: [
    { term: "capace", register: "comune", context: "dotato degli strumenti per agire efficacemente" },
    { term: "abile", register: "comune", context: "competente e padrone dei propri mezzi" },
    { term: "adatto", register: "comune", context: "idoneo per un ruolo o una situazione specifica" }
  ],

  relatedWords: [
    "inettitudine",
    "incapacità",
    "inadeguatezza",
    "mediocrità",
    "svevo",
    "zeno cosini",
    "antieroismo"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/inetto"
  },

  paroliereNote:
    "La figura dell'inetto nella letteratura italiana ha un nome preciso: Zeno " +
    "Cosini, il protagonista de La coscienza di Zeno di Italo Svevo. Ma l'inetto " +
    "letterario non è un semplice perdente: è qualcuno che comprende tutto — le " +
    "proprie contraddizioni, i meccanismi sociali, la futilità delle risoluzioni — e " +
    "proprio per questo non riesce a cambiare. La sua inettitudine è un eccesso di " +
    "consapevolezza, non una sua mancanza. Rende il termine uno dei più carichi di " +
    "ironia tragica nella letteratura del Novecento.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Inetto — Il Paroliere",
    description:
      "Privo delle capacità richieste da un compito o ruolo; in letteratura, figura " +
      "dell'individuo che non riesce ad agire.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};