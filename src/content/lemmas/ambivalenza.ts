// Il Paroliere — Lemma: ambivalenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ambivalenza: LemmaEntry = {
  lemma: "ambivalenza",
  slug: "ambivalenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Compresenza stabile di sentimenti o impulsi opposti verso la stessa persona, situazione o oggetto — condizione descritta dalla psicologia da Bleuler in poi e poi assorbita dal lessico comune. Non è indecisione: chi la vive non manca di una scelta, ma ne porta due simultanee e inconciliabili, senza che l'una annulli l'altra.",

  shortDefinition:
    "Coesistenza di sentimenti opposti verso lo stesso oggetto; non assenza di scelta, ma presenza di due scelte che non si risolvono.",

  register: ["comune", "psicologico"],
  domains: ["psicologia", "carattere"],

  etymology:
    "Dal latino ambi- (entrambi) + valentia (forza, valore); coniato da Eugen Bleuler nel 1910.",

  examples: [],

  synonyms: [
      {
        term: "contraddizione interiore",
        register: "comune",
        context: "formulazione più colloquiale dello stesso stato",
      },
      {
        term: "conflitto emotivo",
        register: "comune",
        context: "enfatizza la dimensione conflittuale più che la coesistenza",
      },
    ],

  antonyms: [
      {
        term: "univocità",
        register: "comune",
        context: "chiarezza di orientamento, sentimento senza controparte",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ambivalenza/",
    wiktionary: "https://it.wiktionary.org/wiki/ambivalenza",
  },

  paroliereNote:
    "Prima di Bleuler non c'era una parola per questo. Eppure la condizione era ovunque: nella tragedia greca, nella letteratura romantica, in ogni rapporto umano complesso. Bleuler la nominò per descrivere un sintomo schizofrenico, ma la parola è sopravvissuta al contesto clinico perché descriveva qualcosa di universale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ambivalenza — Il Paroliere",
    description:
      "Definizione originale di 'ambivalenza': coesistenza di sentimenti opposti verso lo stesso oggetto. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
