// Il Paroliere — Lemma: boria
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const boria: LemmaEntry = {
  lemma: "boria",
  slug: "boria",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Senso gonfiato di sé che si indossa come un abito — spesso senza che ci sia " +
    "nulla, sotto, a giustificarlo. Chi ne è afflitto occupa più spazio del " +
    "necessario: parla, si muove, si presenta come se il proprio valore fosse un " +
    "dato acquisito dal mondo intero. La boria non è superbia silenziosa: ha " +
    "bisogno di pubblico.",

  shortDefinition:
    "Presunzione ostentata di chi si crede superiore senza troppi motivi — e vuole che si sappia.",

  register: ["comune", "ironico"],
  domains: ["carattere", "società", "comportamento"],

  etymology:
    "Di origine incerta; attestato in italiano dal XVI secolo. Probabilmente " +
    "collegato al greco bóreios, 'del nord, vento del nord', per via del " +
    "soffiare e del gonfiore — metafora di aria esibita. Altre ipotesi rimandano " +
    "al latino boria, 'vento impetuoso'.",

  examples: [
    "Entrava in sala con una boria tale che le conversazioni si interrompevano — " +
    "non per rispetto, ma per stupore.",
    "C'è una boria di provincia che è quasi più insopportabile di quella dei grandi " +
    "centri: non ha nemmeno un risultato a cui appoggiarsi.",
    "Parlava con la boria di chi ha sempre avuto ragione almeno una volta nella vita.",
    "Quella boria sottile — non arroganza aperta, solo una certezza di sé che non " +
    "chiedeva conferme — finiva per stancare.",
  ],

  synonyms: [
    {
      term: "presunzione",
      register: "comune",
      context: "simile, ma più neutro — manca la nota di ostentazione pubblica",
    },
    {
      term: "arroganza",
      register: "comune",
      context: "più aggressiva, implica disprezzo esplicito per gli altri",
    },
    {
      term: "superbia",
      register: "letterario",
      context: "peccato capitale — più grave e silenzioso della boria",
    },
    {
      term: "alterigia",
      register: "formale",
      context: "hauteur distaccata, senza la componente teatrale della boria",
    },
  ],

  antonyms: [
    {
      term: "umiltà",
      register: "comune",
      context: "consapevolezza dei propri limiti, assenza di ostentazione",
    },
    {
      term: "modestia",
      register: "comune",
      context: "misura nel presentare se stessi, opposta all'esibizione",
    },
  ],

  relatedWords: [
    "borioso",
    "boriosamente",
    "presunzione",
    "arroganza",
    "superbia",
    "vanità",
    "spocchia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/boria/",
    wiktionary: "https://it.wiktionary.org/wiki/boria",
  },

  paroliereNote:
    "La boria ha qualcosa di teatrale che la rende quasi comica — e questo è il " +
    "suo tratto più italiano. Non è la fredda superiorità nordica, non è il " +
    "disprezzo nobile: è una performance. Il borioso vuole essere guardato, " +
    "giudicato, riconosciuto. E in qualche modo, nel momento stesso in cui lo " +
    "riconosci, gli dai ciò che cercava. C'è una certa autoironia nel notare " +
    "quanto spesso anche chi detesta la boria sappia esibirla a sua volta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Boria — Il Paroliere",
    description:
      "Definizione originale di 'boria': presunzione ostentata di chi si crede " +
      "superiore senza motivo. Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
