// Il Paroliere — Lemma: token
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const token: LemmaEntry = {
  lemma: "token",
  slug: "token",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Unità minima in cui un testo viene scomposto prima di essere elaborato " +
    "da un modello linguistico. Non corrisponde necessariamente a una parola " +
    "intera: può essere una radice, un affisso, un segno di punteggiatura o " +
    "un singolo carattere, a seconda del tokenizzatore impiegato. I limiti di " +
    "contesto degli LLM si misurano in token, non in parole.",

  shortDefinition:
    "Unità minima di testo che un modello linguistico elabora: può essere una parola, una sua parte o un simbolo.",

  register: ["tecnico"],
  domains: ["NLP", "intelligenza artificiale", "linguistica computazionale"],

  examples: [
    "La parola «insolito» viene tokenizzata in modo diverso a seconda del modello: a volte è un token, a volte due.",
    "Un LLM con contesto da 128.000 token può elaborare circa 90.000 parole in una sola sessione.",
    "Ridurre il numero di token in un prompt è il modo più diretto per abbassare i costi di un'API.",
  ],

  synonyms: [
    {
      term: "unità lessicale",
      register: "tecnico",
      context: "termine della linguistica computazionale classica",
    },
  ],

  relatedWords: [
    "tokenizzazione",
    "LLM",
    "context window",
    "embedding",
    "NLP",
    "BPE",
    "WordPiece",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/token",
  },

  paroliereNote:
    "Token è la parola che ha cambiato il modo in cui pensiamo al testo " +
    "nell'era dell'AI. Non è una parola, non è una sillaba: è qualcosa di " +
    "più granulare e arbitrario, definito dall'algoritmo, non dalla grammatica. " +
    "Capire cosa sia un token aiuta a capire perché i modelli linguistici " +
    "funzionano bene in certi contesti e male in altri.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Token — Il Paroliere",
    description:
      "Definizione originale di 'token' in NLP: l'unità minima elaborata dai modelli " +
      "linguistici. Con esempi, sinonimi e nota editoriale. Non criptovalute.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
