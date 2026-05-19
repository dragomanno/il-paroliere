// Il Paroliere — Lemma: tangibile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tangibile: LemmaEntry = {
  lemma: "tangibile",
  slug: "tangibile",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Ciò che può essere percepito attraverso i sensi o verificato con evidenza " +
    "diretta; reale, concreto, non ipotetico. In filosofia indica ciò che " +
    "appartiene al mondo sensibile, contrapposto all'astratto o all'ideale. " +
    "Nel linguaggio comune qualifica risultati, prove o differenze che non " +
    "lasciano spazio al dubbio.",

  shortDefinition:
    "Percepibile, concreto, verificabile: di ciò che esiste nel mondo sensibile o si misura con evidenza diretta.",

  register: ["comune", "tecnico"],
  domains: ["epistemologia", "percezione", "quotidiano"],

  etymology:
    "Dal latino tardo tangibilis, derivato di tangere, 'toccare'. Entrato " +
    "nell'uso italiano attraverso il latino medievale e il francese tangible.",

  examples: [
    "Dopo mesi di lavoro, i risultati tangibili erano ancora pochi — ma almeno " +
    "c'erano.",
    "Aveva bisogno di qualcosa di tangibile, non di promesse: un documento, " +
    "una data, un numero.",
    "In filosofia empirista, la conoscenza valida è quella fondata su dati " +
    "tangibili, non su intuizioni.",
    "La differenza tra i due approcci era tangibile: bastava leggere i numeri.",
  ],

  synonyms: [
    {
      term: "concreto",
      register: "comune",
      context: "più enfatico sulla materialità e sull'opposto di vago",
    },
    {
      term: "reale",
      register: "comune",
      context: "esistente, non immaginato — ma meno legato alla percezione diretta",
    },
    {
      term: "palpabile",
      register: "comune",
      context: "simile, con sfumatura sensoriale più marcata",
    },
    {
      term: "sensibile",
      register: "tecnico",
      context: "nel senso filosofico: percepibile dai sensi",
    },
  ],

  antonyms: [
    {
      term: "astratto",
      register: "comune",
      context: "che non ha forma fisica o percezione diretta",
    },
    {
      term: "intangibile",
      register: "comune",
      context: "che non può essere toccato o misurato — anche in senso figurato",
    },
    {
      term: "ipotetico",
      register: "comune",
      context: "supposto, non ancora verificato",
    },
  ],

  relatedWords: [
    "tangibilità",
    "concretezza",
    "palpabile",
    "sensibile",
    "reale",
    "materiale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/tangibile/",
    wiktionary: "https://it.wiktionary.org/wiki/tangibile",
  },

  paroliereNote:
    "Tangibile è una parola che nel quotidiano ha perso quasi tutta la sua " +
    "fisicità: si parla di 'risultati tangibili' o 'benefici tangibili' senza " +
    "pensare al toccare. Eppure il corpo è ancora lì, nell'etimologia. Quando " +
    "qualcosa è davvero tangibile — non solo misurabile in un foglio Excel, ma " +
    "presente, sotto mano, reale — la parola recupera tutto il suo peso. Vale " +
    "la pena usarla con questa consapevolezza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tangibile — Il Paroliere",
    description:
      "Definizione originale di 'tangibile': percepibile, concreto, verificabile. " +
      "Con esempi, sinonimi, accezione filosofica ed etimologia dal latino tangere.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
