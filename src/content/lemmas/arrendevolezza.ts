// Il Paroliere — Lemma: arrendevolezza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const arrendevolezza: LemmaEntry = {
  lemma: "arrendevolezza",
  slug: "arrendevolezza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Disposizione a cedere al primo ostacolo, alla pressione altrui o al protrarsi " +
    "della difficoltà, interrompendo un proposito prima che sia stato davvero messo " +
    "alla prova. Non implica debolezza morale: può nascere da realismo, da stanchezza " +
    "o da un calcolo — ma quando diventa tratto stabile, segnala una difficoltà " +
    "strutturale nell'autoregolazione.",

  shortDefinition:
    "Tendenza a rinunciare a un proposito appena la resistenza si fa sentire.",

  register: ["comune"],
  domains: ["psicologia", "etica", "comportamento"],

  etymology:
    "Derivato di arrendevole, a sua volta da arrendersi (dal francese antico " +
    "se rendre, «consegnarsi», da rendere). Il suffisso -ezza forma sostantivi astratti " +
    "indicanti uno stato o una qualità stabile — come morbidezza, durezza, prontezza.",

  synonyms: [
    { term: "cedevolezza", register: "comune", context: "più fisico e neutro, meno carico di giudizio" },
    { term: "remissività", register: "letterario", context: "suggerisce acquiescenza verso un'autorità o una norma, spesso per abitudine" },
    { term: "arrendimento", register: "letterario", context: "l'atto del cedere più che la disposizione duratura; raro nel parlato contemporaneo" },
    { term: "acquiescenza", register: "formale", context: "accettazione passiva, spesso senza obiezione esplicita" }
  ],

  antonyms: [
    { term: "perseveranza", register: "comune", context: "mantenere il proposito nel tempo nonostante gli ostacoli" },
    { term: "tenacia", register: "comune", context: "resistenza attiva agli ostacoli, con enfasi sulla forza" },
    { term: "caparbietà", register: "colloquiale", context: "sfumatura quasi testarda, tenere il punto anche quando sarebbe utile cedere" }
  ],

  relatedWords: [
    "cedevolezza",
    "remissività",
    "acquiescenza",
    "resa",
    "perseveranza",
    "autoregolazione",
    "resilienza"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/arrendevolezza"
  },

  paroliereNote:
    "L'arrendevolezza ha una cattiva fama che non sempre merita. Nel pensiero " +
    "strategico — dalla diplomazia alla negoziazione, fino all'arte militare — " +
    "la capacità di cedere al momento giusto è una virtù, non un difetto. " +
    "Il problema sorge quando la resa diventa riflesso automatico: non una scelta " +
    "ma un'incapacità. È lì che l'arrendevolezza smette di essere flessibilità " +
    "e diventa limite — e che si distingue nettamente dalla perseveranza, che " +
    "non è cieco attaccamento al proposito, ma capacità di valutarlo e tenerlo " +
    "comunque.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Arrendevolezza — Il Paroliere",
    description:
      "Tendenza a rinunciare a un proposito appena la resistenza si fa sentire. " +
      "Definizione originale Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};
