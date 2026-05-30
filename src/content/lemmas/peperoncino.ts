// Il Paroliere — Lemma: peperoncino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const peperoncino: LemmaEntry = {
  lemma: "peperoncino",
  slug: "peperoncino",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Frutto piccante di alcune varietà di Capsicum, usato fresco, secco o in polvere " +
    "come spezia e condimento. In Italia è ingrediente identitario della cucina " +
    "calabrese e meridionale — la 'nduja, il soppressato, la pasta con l'aglio sono " +
    "impensabili senza di lui. La sostanza responsabile della piccantezza è la " +
    "capsaicina, che agisce sui recettori del calore e ha proprietà vasodilatatrici.",

  shortDefinition:
    "Frutto piccante del Capsicum; spezia identitaria della cucina meridionale " +
    "italiana, specie calabrese.",

  register: ["comune", "gastronomico"],
  domains: ["gastronomia", "botanica", "cultura"],

  etymology:
    "Diminutivo di peperone, a sua volta da pepe — dal latino piper, che designava " +
    "originariamente il pepe nero. Quando i frutti del Capsicum arrivarono " +
    "dall'America nel XVI secolo, i loro portatori li chiamarono 'pepe delle Indie', " +
    "per la piccantezza simile. Il diminutivo italiano ne segnala la forma più " +
    "piccola e intensa.",

  examples: [
  ],

  synonyms: [
    { term: "diavolicchio", register: "regionale", context: "soprannome affettuoso in area centro-meridionale" },
    { term: "chili", register: "comune/internazionale", context: "termine di origine nahuatl, usato nell'italiano contemporaneo" },
    { term: "diavolillo", register: "regionale", context: "variante campana e lucana" }
  ],

  relatedWords: [
    "curry",
    "curcuma",
    "salgemma"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/peperoncino"
  },

  paroliereNote:
    "In Calabria il peperoncino non è una spezia aggiunta: è un asse portante " +
    "dell'identità gastronomica e culturale. Diamante, in provincia di Cosenza, si " +
    "definisce 'capitale mondiale del peperoncino' e ne ha fatto un festival annuale. " +
    "La capsaicina, oltre a bruciare, libera endorfine — il che spiega almeno in " +
    "parte perché diventa dipendenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Peperoncino — Il Paroliere",
    description:
      "Peperoncino: il frutto piccante identitario della cucina calabrese. Botanica, " +
      "gastronomia, cultura — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};