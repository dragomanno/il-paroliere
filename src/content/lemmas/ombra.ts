// Il Paroliere — Lemma: ombra
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ombra: LemmaEntry = {
  lemma: "ombra",
  slug: "ombra",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "letterario", "tecnico"],
  domains: ["fisica", "estetica", "pittura", "psicologia", "letteratura"],

  definition:
    "Zona di oscurità prodotta dall’interposizione di un corpo opaco tra una fonte " +
    "luminosa e una superficie. In pittura e fotografia, l’ombra non è assenza di " +
    "informazione ma informazione di tipo diverso: rivela volume, profondità, texture. " +
    "In psicologia junghiana, l’Ombra è la parte inconscia della personalità che " +
    "contiene ciò che è stato represso o rifiutato. In letteratura, è quasi sempre " +
    "simbolo di morte, mistero, segreto.",

  shortDefinition:
    "Zona di oscurità proiettata dall’interposizione di un corpo alla luce; in pittura, elemento che rivela volume; in psicologia, il lato oscuro della personalità.",

  etymology:
    "Dal latino umbra “ombra, oscurità, fantasma”, di origine incerta. La stessa radice " +
    "di “ombrello”, “ombreggiare”, “penombra”. Umbra in latino indicava anche il " +
    "fantasma dei morti — l’ombra come presenza spettrale.",

  examples: [
    "Caravaggio usava l’ombra non come sfondo ma come soggetto: il chiaroscuro non illumina la scena, la costruisce dalla tensione tra luce e buio.",
    "L’ombra di un edificio in un progetto architettonico non è un effetto collaterale da gestire: è un dato progettuale che cambia la qualità degli spazi circostanti a seconda dell’ora e della stagione.",
    "Nel concetto junghiano di Ombra, integrare la propria oscurità non significa diventarla: significa riconoscerla abbastanza da non lasciarla agire di nascosto.",
    "C’è un’ombra in certi ritratti fotografici — non buio, ma una zona di non-risoluzione — che dice più del soggetto di qualunque area illuminata.",
  ],

  synonyms: [
    { term: "oscurità", register: "comune", note: "Più totale: assenza di luce senza la specificità della proiezione." },
    { term: "penombra", register: "comune-tecnico", note: "La zona di ombra parziale ai bordi dell’ombra totale; luce ridotta ma non assente." },
  ],

  antonyms: [
    { term: "luminosità", register: "tecnico-comune", note: "La quantità e qualità della luce — il contrario diretto dell’ombra." },
    { term: "luce", register: "comune", note: "La fonte e la condizione che l’ombra nega." },
  ],

  relatedWords: ["contrasto-estetico", "composizione", "luminosita", "diafano"],

  paroliereNote:
    "L’ombra è uno dei lemmi più ricchi del batch: ha una vita fisica precisa, una vita " +
    "pittorica tecnica, una vita psicologica profonda (Jung), una vita letteraria millenaria " +
    "(Dante, i morti nell’Ade). Ognuna di queste vite arricchisce le altre. Chi capisce " +
    "l’ombra junghiana legge meglio il chiaroscuro caravaggesco — e viceversa.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "ombra — significato in fisica, pittura, psicologia e letteratura",
    description: "Ombra: dalla proiezione fisica al chiaroscuro pittorico, dall’Ombra junghiana all’oscurità simbolica in letteratura. Un lemma con molte vite.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
