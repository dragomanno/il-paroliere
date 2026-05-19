// Il Paroliere — Lemma: abitudine
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const abitudine: LemmaEntry = {
  lemma: "abitudine",
  slug: "abitudine",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Comportamento o sequenza d'azione che, ripetuta nel tempo, perde progressivamente il carattere di scelta consapevole e si consolida come schema autonomo. L'abitudine alleggerisce il carico cognitivo del quotidiano, ma può trasformarsi in inerzia: non ciò che si preferisce, ma ciò a cui ci si è abbandonati senza più deliberare.",

  shortDefinition:
    "Azione ripetuta fino a diventare automatica: risorsa cognitiva o inerzia silenziosa, a seconda di quanto si continua a sceglierla.",

  register: ["comune"],
  domains: ["comportamento", "psicologia"],

  etymology:
    "Dal latino habitudinem, da habere (avere, tenersi in un certo stato).",

  examples: [],

  synonyms: [
      {
        term: "consuetudine",
        register: "comune",
        context: "abitudine consolidata nel tempo, spesso condivisa socialmente",
      },
      {
        term: "costume",
        register: "comune",
        context: "abitudine collettiva o individuale radicata",
      },
      {
        term: "uso",
        register: "comune",
        context: "pratica ricorrente, più neutro",
      },
    ],

  antonyms: [
      {
        term: "novità",
        register: "comune",
        context: "ciò che si sceglie consapevolmente per la prima volta",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/abitudine/",
    wiktionary: "https://it.wiktionary.org/wiki/abitudine",
  },

  paroliereNote:
    "Il paradosso dell'abitudine è che nasce sempre da una scelta, poi si dimentica di esserlo stata. William James la considerava il volano della società; la psicologia cognitiva moderna la descrive come un risparmio di risorse attentive. Ma il risparmio ha un costo: smetti di chiederti se quella cosa vale ancora la pena.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Abitudine — Il Paroliere",
    description:
      "Definizione originale di 'abitudine': l'azione ripetuta che perde il carattere di scelta. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
