// Il Paroliere — Lemma: salute (brindisi)
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.
// NOTE: questo lemma tratta «salute» nella sua funzione di brindisi,
// non come stato fisico. Slug differenziato: salute-brindisi.

import type { LemmaEntry } from "@/lib/types";

export const saluteBrindisi: LemmaEntry = {
  lemma: "salute",
  slug: "salute-brindisi",
  partOfSpeech: "esclamazione",

  definition:
    "Esclamazione con cui si alza il bicchiere in segno di augurio, prima di bere insieme. " +
    "È il brindisi italiano per eccellenza — diretto, immediato, privo del rituale elaborato " +
    "di altre tradizioni — e porta dentro di sé la doppia natura di gesto conviviale e di " +
    "augurio sincero: si beve alla salute di qualcuno perché gli si vuole bene.",

  shortDefinition:
    "Esclamazione con cui si alza il bicchiere in segno di augurio; il brindisi italiano per eccellenza.",

  register: ["comune", "colloquiale"],
  domains: ["galateo", "convivialità", "cultura italiana"],

  etymology:
    "Dal latino salus, salutis (salute, benessere, salvezza). L'uso come brindisi è " +
    "l'augurio di buona salute all'interlocutore — un gesto linguistico che trasforma " +
    "un sostantivo astratto in formula rituale conviviale.",

  examples: [
    "Alzarono i bicchieri tutti insieme: «Salute!»",
    "«Salute» — disse, guardandola negli occhi, come se la parola portasse davvero qualcosa.",
    "In Italia non ci sono troppi rituali per brindare: basta un «salute» e si beve.",
  ],

  synonyms: [
    {
      term: "alla salute",
      register: "comune",
      context: "forma estesa, più calorosa e cerimoniale",
    },
    {
      term: "cin cin",
      register: "colloquiale",
      context: "brindisi onomatopeico informale, dal suono dei bicchieri che si toccano",
    },
    {
      term: "prosit",
      register: "formale",
      context: "dal latino prosit (che giovi), usato in contesti ufficiali o con ironia",
    },
  ],

  antonyms: [],

  relatedWords: [
    "alla salute",
    "brindisi",
    "na zdarovje",
    "skål",
    "Zum Wohl",
    "Cheers",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/salute/",
    wiktionary: "https://it.wiktionary.org/wiki/salute",
  },

  paroliereNote:
    "Questo lemma tratta «salute» esclusivamente nella sua funzione di brindisi — non lo stato " +
    "fisico. La semplicità del gesto italiano è la sua cifra: nessun contatto visivo obbligatorio " +
    "come nello skål scandinavo, nessuna formula elaborata. Un'unica parola che è insieme augurio " +
    "e rito. Chi brinda in italiano brinda alla cosa più fondamentale: stare bene.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Salute (brindisi) — definizione e uso | Il Paroliere",
    description:
      "Salute come brindisi italiano: esclamazione conviviale e augurio sincero. " +
      "Definizione originale, etimologia latina e confronto con altre tradizioni.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
