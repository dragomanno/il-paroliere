// Il Paroliere — Lemma: veniale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const veniale: LemmaEntry = {
  lemma: "veniale",
  slug: "veniale",
  partOfSpeech: "aggettivo",

  definition:
    "Di colpa, mancanza o errore che, per la sua lievità, non preclude il perdono e non produce " +
    "conseguenze irreparabili. In teologia cattolica si contrappone al peccato mortale: non recide " +
    "il legame con Dio, ma lo indebolisce. Nel linguaggio comune descrive qualsiasi trasgressione " +
    "minore, scusabile quasi per natura.",

  shortDefinition:
    "Di colpa lieve, perdonabile per definizione: non rompe nulla di essenziale, al più incrina.",

  register: ["comune", "tecnico"],
  domains: ["morale", "teologia", "diritto"],

  etymology:
    "Dal latino venialis, 'degno di perdono', derivato di venia, 'grazia, perdono'. " +
    "La stessa radice di venire (nel senso di condiscendere) e di avvenire.",

  examples: [
    "Un ritardo veniale in quel contesto non avrebbe cambiato nulla.",
    "Lo considerò un errore veniale e andò avanti senza pesarlo troppo.",
    "In teologia la distinzione tra peccato veniale e mortale ha conseguenze precise; nel parlato quotidiano si usa più liberamente.",
    "Dimenticarsene una volta era veniale; farlo sistematicamente era altro.",
  ],

  synonyms: [
    {
      term: "lieve",
      register: "comune",
      context: "descrive la gravità, non la perdonabilità",
    },
    {
      term: "perdonabile",
      register: "comune",
      context: "equivalente funzionale nel parlato corrente",
    },
    {
      term: "scusabile",
      register: "comune",
      context: "ammette attenuanti, tono più pragmatico",
    },
  ],

  antonyms: [
    {
      term: "mortale",
      register: "tecnico",
      context: "in teologia, il peccato che recide il legame con Dio",
    },
    {
      term: "grave",
      register: "comune",
      context: "con conseguenze che non si lasciano ignorare",
    },
  ],

  relatedWords: [
    "venia",
    "perdono",
    "peccato",
    "colpa",
    "scusa",
    "attenuante",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/veniale/",
    wiktionary: "https://it.wiktionary.org/wiki/veniale",
  },

  paroliereNote:
    "Veniale è una di quelle parole che porta con sé un intero sistema di valori senza " +
    "dichiararlo: implica che esista una gerarchia delle colpe, che alcune siano pesabili " +
    "e classificabili. Fuori dal contesto religioso conserva quella struttura implicita: " +
    "dire 'è veniale' è già un atto di giudizio, anche se leggero.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Veniale — Il Paroliere",
    description:
      "Definizione originale di 'veniale': di colpa lieve, perdonabile per definizione. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
