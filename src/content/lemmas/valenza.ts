// Il Paroliere — Lemma: valenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const valenza: LemmaEntry = {
  lemma: "valenza",
  slug: "valenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In chimica, misura della capacità combinatoria di un atomo: il numero di legami che può stabilire con altri atomi in una molecola. Per estensione, nel linguaggio comune e nelle scienze umane, il peso specifico o la portata relazionale di un elemento all'interno di un sistema: una parola, un gesto, un'immagine possono avere valenza positiva, negativa, simbolica — a seconda del contesto che li accoglie.",

  shortDefinition:
    "Capacità combinatoria di un atomo in chimica; in senso esteso, il peso o la portata di qualcosa nel contesto che lo determina.",

  register: ["tecnico", "comune"],
  domains: ["chimica", "linguaggio"],

  etymology:
    "Dal latino valentia (forza, vigore), da valere (valere, avere forza); in chimica, calco del tedesco Valenz (1868, August Kekulé).",

  examples: [],

  synonyms: [
      {
        term: "valore",
        register: "comune",
        context: "più generico, senza la sfumatura relazionale di valenza",
      },
      {
        term: "portata",
        register: "comune",
        context: "estensione delle conseguenze o degli effetti di qualcosa",
      },
    ],

  antonyms: [],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/valenza/",
    wiktionary: "https://it.wiktionary.org/wiki/valenza",
  },

  paroliereNote:
    "Valenza è una di quelle parole che la chimica ha preso dal lessico comune — forza, capacità di relazione — e ha reso tecnica, poi il lessico comune ha ripreso il termine dalla chimica e lo usa per dire qualcosa di più preciso di 'valore'. È un doppio prestito che ha arricchito entrambe le direzioni.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Valenza — Il Paroliere",
    description:
      "Definizione originale di 'valenza': capacità combinatoria in chimica e peso relazionale nel linguaggio comune. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
