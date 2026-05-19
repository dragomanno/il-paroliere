// Il Paroliere — Lemma: crepuscolo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const crepuscolo: LemmaEntry = {
  lemma: "crepuscolo",
  slug: "crepuscolo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Fascia di luce tenue che separa il giorno dalla notte — al mattino, " +
    "prima che il sole sorga; alla sera, dopo che è tramontato. In senso " +
    "figurato indica la fase finale di qualcosa che ha avuto il suo tempo: " +
    "una civiltà, un'epoca, una carriera. In letteratura italiana, il " +
    "Crepuscolarismo di primo Novecento ne ha fatto il simbolo di una poesia " +
    "dimessa, sottovoce, lontana dai grandi toni.",

  shortDefinition:
    "La luce tra giorno e notte; in senso figurato, la fase che precede una fine. In letteratura, simbolo del Crepuscolarismo.",

  register: ["comune", "letterario"],
  domains: ["tempo", "poesia"],

  examples: [
    "Al crepuscolo le colline toscane prendono un colore che non dura più di venti minuti.",
    "Stava vivendo il crepuscolo di una carriera che aveva illuminato due generazioni.",
    "Gozzano e Corazzini fecero del crepuscolo non solo uno scenario, ma uno stato d'animo.",
  ],

  synonyms: [
    {
      term: "tramonto",
      register: "comune",
      context: "più specifico per la sera; anche in senso figurato di declino",
    },
    {
      term: "aurora",
      register: "letterario",
      context: "contrario per il mattino; simbolo di inizio",
    },
  ],

  antonyms: [
    {
      term: "alba",
      register: "comune",
      context: "il crepuscolo mattutino visto nella sua dimensione di inizio",
    },
    {
      term: "apice",
      register: "comune",
      context: "nel senso figurato di fine vs. culmine",
    },
  ],

  relatedWords: [
    "tramonto",
    "alba",
    "Crepuscolarismo",
    "penombra",
    "declino",
    "imbrunire",
    "crepuscolare",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/crepuscolo",
  },

  paroliereNote:
    "Crepuscolo è una di quelle parole che in italiano portano con sé tutta " +
    "una tradizione poetica. Il Crepuscolarismo — Gozzano, Corazzini, Moretti " +
    "— ha costruito un'estetica attorno a questa luce indecisa, né giorno né " +
    "notte, usando il crepuscolo come metafora di una generazione che non " +
    "credeva più nei grandi gesti. Difficile usare la parola in italiano senza " +
    "portarsi dietro almeno un'eco di quel mondo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Crepuscolo — Il Paroliere",
    description:
      "Definizione originale di 'crepuscolo': la luce tra giorno e notte e il simbolo " +
      "del declino. Con esempi, sinonimi e nota editoriale sul Crepuscolarismo.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
