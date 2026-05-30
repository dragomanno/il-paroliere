// Il Paroliere — Lemma: pervicacia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pervicacia: LemmaEntry = {
  lemma: "pervicacia",
  slug: "pervicacia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Tenacia che resiste al limite dell'irragionevolezza: la pervicacia non cede di " +
    "fronte alla smentita, alla sconfitta o al buon senso altrui. A differenza della " +
    "perseveranza, che è orientata verso un fine condiviso, la pervicacia si chiude " +
    "in sé stessa e trasforma la costanza in cocciutaggine strutturale.",

  shortDefinition:
    "Ostinazione che non cede alla ragione; tenacia portata oltre il limite del " +
    "senso.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "etica"],

  etymology:
    "Dal latino pervicacia, derivato di pervicax — composto di per- (con valore " +
    "intensivo) e vincere: chi è pervicace vince su tutto, anche sulla ragione. Il " +
    "suffisso -ax indica una disposizione stabile, non un atto isolato.",

  examples: [
  ],

  synonyms: [
    { term: "ostinazione", register: "comune", context: "più neutro, non implica necessariamente irragionevolezza" },
    { term: "caparbietà", register: "comune", context: "connotazione spesso positiva, enfatizza la resistenza" },
    { term: "testardaggine", register: "colloquiale", context: "registro più basso, marcatamente critico" }
  ],

  antonyms: [
    { term: "cedevolezza", register: "comune", context: "la disposizione opposta, a volte eccessiva" },
    { term: "duttilità", register: "comune", context: "capacità di adattarsi senza irrigidirsi" },
    { term: "flessibilità", register: "comune", context: "antonimo del senso psicologico-comportamentale" }
  ],

  relatedWords: [
    "perseveranza",
    "ostinazione"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/pervicacia"
  },

  paroliereNote:
    "La pervicacia si distingue dalla perseveranza per il rapporto con l'esterno: chi " +
    "persevera ascolta e aggiusta; chi è pervicace chiude le finestre. Non è un " +
    "difetto assoluto — in certi contesti storici e creativi, quella testardaggine " +
    "cieca ha prodotto capolavori. Ma il confine con l'autolesionismo è sottile.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Pervicacia — Il Paroliere",
    description:
      "Pervicacia: ostinazione che resiste alla ragione. Definizione originale, " +
      "etimologia, sinonimi e nota culturale — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};