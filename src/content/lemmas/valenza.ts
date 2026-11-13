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
    "Dal latino valentia (forza, vigore), da valere (valere, avere forza); in chimica, dal tedesco Valenz, termine introdotto nel 1868 da Hermann Wichelhaus.",

  examples: [
    "Il carbonio ha valenza quattro e per questo forma molecole molto varie.",
    "Quel gesto, apparentemente banale, aveva per lui una forte valenza simbolica.",
    "La stessa parola può assumere una valenza ironica o offensiva a seconda di chi la pronuncia.",
  ],

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
    "Valenza ha fatto un giro lungo. Nell'italiano antico e letterario voleva dire valore, coraggio, forza d'animo. Nel 1868 il chimico tedesco Hermann Wichelhaus portò in chimica il termine Valenz, dal latino valentia, per indicare la capacità di combinazione di un elemento. Da lì la parola è passata alla linguistica, per i legami che un verbo stabilisce con i suoi complementi, e poi al lessico comune, dove «valenza simbolica» o «valenza politica» dicono qualcosa di più preciso di «valore»: non solo quanto conta una cosa, ma quali legami è capace di stabilire.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Valenza — Il Paroliere",
    description:
      "Definizione originale di 'valenza': capacità combinatoria in chimica e peso relazionale nel linguaggio comune. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-11-13",
};
