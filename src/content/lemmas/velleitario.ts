// Il Paroliere — Lemma: velleitario
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const velleitario: LemmaEntry = {
  lemma: "velleitario",
  slug: "velleitario",
  partOfSpeech: "aggettivo",

  definition:
    "Di chi coltiva ambizioni o propositi che non reggono il confronto con le proprie capacità reali " +
    "o con l'impegno che sarebbero necessari per realizzarli. A differenza del sognatore — che può " +
    "anche arrivare a compimento — il velleitario si ferma all'intenzione: confonde il desiderio con " +
    "il progetto, e il progetto con l'atto.",

  shortDefinition:
    "Chi ha ambizioni sproporzionate alle proprie capacità o all'impegno reale: si ferma all'intenzione, scambiandola per azione.",

  register: ["comune", "ironico"],
  domains: ["psicologia", "comportamento"],

  etymology:
    "Da velleità, dal latino tardo velleitàs, derivato di velle (volere) nel senso di un volere " +
    "debole, non determinato. La velleità è un volere che non arriva a diventare decisione.",

  examples: [
    "Un progetto velleitario: belle intenzioni, nessun piano, zero esecuzione.",
    "Non era pigro — era velleitario, che è diverso: aveva mille idee e non ne portava a termine nessuna.",
    "La distinzione tra ambizioso e velleitario sta nell'esecuzione, non nell'intenzione.",
    "Definirlo velleitario era crudele ma preciso: voleva tutto e non voleva fare niente per ottenerlo.",
  ],

  synonyms: [
    {
      term: "megalomane",
      register: "comune",
      context: "ambizioni spropositate con connotazione di grandiosità patologica",
    },
    {
      term: "illuso",
      register: "comune",
      context: "chi crede in qualcosa che non corrisponde alla realtà, più generico",
    },
    {
      term: "sognatore",
      register: "comune",
      context: "chi ha grandi aspirazioni — ma a differenza del velleitario, può anche realizzarle",
    },
  ],

  antonyms: [
    {
      term: "pragmatico",
      register: "comune",
      context: "chi agisce in modo concreto e realista, opposto del velleitario",
    },
    {
      term: "determinato",
      register: "comune",
      context: "chi porta avanti i propri obiettivi con costanza e metodo",
    },
  ],

  relatedWords: [
    "velleità",
    "ambizione",
    "intenzione",
    "proposito",
    "procrastinare",
    "illusione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/velleitario/",
    wiktionary: "https://it.wiktionary.org/wiki/velleitario",
  },

  paroliereNote:
    "Velleitario è una diagnosi fatta con eleganza — non insulta, ma colpisce con precisione. " +
    "L'etimologia aiuta: velleità viene da velle, 'volere', nella forma più debole del volere, " +
    "quella che non diventa mai decisione. È il volere senza il fare — " +
    "e la distanza tra i due è esattamente dove vive il velleitario.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Velleitario — Il Paroliere",
    description:
      "Definizione originale di 'velleitario': chi si ferma all'intenzione, scambiandola per azione. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
