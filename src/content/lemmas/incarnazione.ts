// Il Paroliere — Lemma: incarnazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incarnazione: LemmaEntry = {
  lemma: "incarnazione",
  slug: "incarnazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Il farsi corpo, concreto e visibile, di ciò che prima esisteva solo come idea, " +
    "valore o principio. Con l'iniziale maiuscola indica nella teologia cristiana " +
    "il dogma del Verbo fatto carne; nell'uso comune designa la persona o la cosa " +
    "in cui un'idea trova la sua espressione più compiuta e riconoscibile.",

  shortDefinition:
    "Il farsi corpo di un'idea astratta; nella teologia cristiana, il dogma del Verbo fatto carne.",

  register: ["comune", "letterario", "tecnico"],
  domains: ["teologia", "filosofia", "arte"],

  etymology:
    "Dal latino tardo incarnatio, dal verbo incarnare. Termine cardine della " +
    "teologia cristiana dal IV secolo, poi estesosi al linguaggio filosofico e comune.",

  examples: [
    "Per i teologi medievali, l'Incarnazione risolveva il paradosso di un Dio insieme trascendente e presente.",
    "Quel palazzo era l'incarnazione perfetta dello stile razionalista degli anni Trenta.",
    "La chiamavano, non senza ironia, l'incarnazione della pazienza.",
  ],

  synonyms: [
    {
      term: "personificazione",
      register: "comune",
      context: "più diretto, spesso riferito a una singola qualità piuttosto che a un intero sistema di idee",
    },
    {
      term: "manifestazione",
      register: "tecnico",
      context: "più ampio, senza l'enfasi specifica sul corpo",
    },
  ],

  antonyms: [
    {
      term: "astrazione",
      register: "tecnico",
      context: "l'idea privata di ogni forma concreta, l'opposto concettuale dell'incarnazione",
    },
  ],

  relatedWords: ["incarnare", "personificazione", "carne", "corporeità"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/incarnazione",
  },

  paroliereNote:
    "Incarnazione, con la maiuscola, appartiene al vocabolario teologico più solenne; " +
    "in minuscolo scivola nel quotidiano senza perdere la sua struttura profonda — " +
    "dire che qualcuno è «l'incarnazione» della pazienza non è un'iperbole vuota, è " +
    "la stessa idea del farsi carne applicata a una virtù. Coppia semantica con " +
    "incarnare, di cui è l'esito compiuto piuttosto che il processo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Incarnazione — Il Paroliere",
    description:
      "Definizione originale di 'incarnazione': il farsi corpo di un'idea astratta. " +
      "Dal dogma teologico all'uso figurato corrente, con esempi ed etimologia.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
