// Il Paroliere — Lemma: tokenizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tokenizzazione: LemmaEntry = {
  lemma: "tokenizzazione",
  slug: "tokenizzazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Operazione preliminare con cui un testo viene scomposto in unità discrete " +
    "dette token — parole, frammenti di parola o caratteri — prima di essere " +
    "elaborato da un modello linguistico o da un sistema di NLP. La granularità " +
    "del risultato dipende dall'algoritmo impiegato (BPE, WordPiece, " +
    "SentencePiece) e dalla lingua del testo: una scelta sbagliata a questo " +
    "livello si propaga, silenziosa, lungo l'intera catena di elaborazione.",

  shortDefinition:
    "Scomposizione di un testo in token prima dell'elaborazione da parte di un modello linguistico o di un sistema NLP.",

  register: ["tecnico"],
  domains: ["NLP", "intelligenza artificiale", "linguistica computazionale"],

  examples: [
    "La tokenizzazione dell'italiano è più complessa di quella dell'inglese per la ricchezza morfologica della lingua.",
    "Un tokenizzatore mal calibrato può spezzare le parole accentate in modo da perderne il significato.",
    "GPT-4 usa un tokenizzatore BPE con un vocabolario di circa 100.000 token.",
  ],

  synonyms: [
    {
      term: "tokenization",
      register: "tecnico",
      context: "termine inglese originale, comune anche nella letteratura italiana sull'AI",
    },
  ],

  relatedWords: [
    "token",
    "LLM",
    "BPE",
    "WordPiece",
    "SentencePiece",
    "NLP",
    "embedding",
    "preprocessing",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/tokenizzazione",
  },

  paroliereNote:
    "Tokenizzazione è un passaggio invisibile ma fondativo: nessun modello " +
    "linguistico vede il testo come lo vediamo noi. Vede sequenze di token, " +
    "e quelle sequenze dipendono da scelte fatte in fase di training. " +
    "È per questo che un modello addestrato prevalentemente sull'inglese " +
    "tende a tokenizzare l'italiano in modo più frammentato — e a costare " +
    "di più, in termini di token consumati, per la stessa quantità di testo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tokenizzazione — Il Paroliere",
    description:
      "Definizione originale di 'tokenizzazione': come i testi vengono scomposti " +
      "in token prima di essere elaborati dai modelli AI. Con esempi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
