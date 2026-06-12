// Il Paroliere — Lemma: alla salute
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const allaSalute: LemmaEntry = {
  lemma: "alla salute",
  slug: "alla-salute",
  partOfSpeech: "locuzione esclamativa",

  definition:
    "Forma estesa del brindisi italiano, più cerimoniale e calorosa del semplice «Salute!» — " +
    "si usa quando c'è un motivo in più per bere, o quando si vuole marcare il momento. " +
    "Può assumere anche un tono ironico: «alla salute!» detto con rassegnazione è un modo " +
    "di accettare qualcosa di inevitabile alzando metaforicamente il bicchiere alla propria sorte.",

  shortDefinition:
    "Forma estesa e più calorosa del brindisi italiano; usata anche in senso ironico come rassegnata accettazione.",

  register: ["comune", "colloquiale"],
  domains: ["galateo", "convivialità", "cultura italiana"],

  etymology:
    "Locuzione preposizionale: alla (preposizione articolata) + salute (dal latino salus, " +
    "salutis). Il significato è «(bevo) per la salute (tua/vostra)» — un augurio implicito " +
    "trasformato in formula conviviale.",

  examples: [
    "«Alla salute!» disse il vecchio alzando il bicchiere verso il sole.",
    "Hanno aumentato ancora le tasse? Alla salute — disse, e versò il vino.",
    "«Alla salute di tutti voi» — con una formula così, anche un discorso banale diventa un momento.",
  ],

  synonyms: [
    {
      term: "salute",
      register: "comune",
      context: "forma breve, più immediata e informale",
    },
    {
      term: "prosit",
      register: "formale",
      context: "dal latino, usato in contesti ufficiali o con ironia",
    },
    {
      term: "cin cin",
      register: "colloquiale",
      context: "onomatopeico, informalissimo",
    },
  ],

  antonyms: [],

  relatedWords: [
    "salute",
    "brindisi",
    "na zdarovje",
    "skål",
    "Zum Wohl",
    "Cheers",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/salute",
  },

  paroliereNote:
    "La doppiezza festosa/ironica è il tratto più interessante di questa locuzione. «Alla salute!» " +
    "può essere il culmine di una celebrazione o la battuta finale di chi ha appena ricevuto " +
    "una cattiva notizia — e il contesto fa tutto. È uno di quei casi in cui la stessa formula " +
    "dice cose opposte con la stessa facilità, e quella flessibilità è la sua vera ricchezza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Alla salute — definizione e uso ironico | Il Paroliere",
    description:
      "Alla salute: brindisi italiano festoso e, per ironia, rassegnata accettazione. " +
      "Definizione originale, etimologia e doppio registro.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
