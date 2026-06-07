// Il Paroliere — Lemma: alterità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const alterita: LemmaEntry = {
  lemma: "alterità",
  slug: "alterita",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "La condizione di essere altro, diverso, estraneo rispetto a un punto di riferimento. " +
    "In filosofia indica la differenza dell'altro in quanto tale — ciò che resiste alla riduzione " +
    "all'identico. In antropologia e sociologia il termine descrive il rapporto tra un gruppo e " +
    "chi è percepito come esterno: l'alterità non è una proprietà dell'altro, ma una costruzione " +
    "relazionale che dice qualcosa di entrambi.",

  shortDefinition:
    "La condizione di essere diverso rispetto a un punto di riferimento; in filosofia, ciò che resiste a essere ridotto all'identico.",

  register: ["tecnico", "letterario"],
  domains: ["filosofia", "antropologia", "sociologia", "letteratura"],

  etymology:
    "Dal latino alteritas, derivato di alter ('l'altro dei due'). " +
    "Il termine entra nel lessico filosofico moderno attraverso la traduzione di autori come " +
    "Hegel e Lévinas, dove l'alterità dell'altro diventa questione etica fondamentale.",

  examples: [
    "Lévinas ha fatto dell'alterità il concetto centrale della sua etica: l'altro non è un problema da risolvere, è un appello a cui rispondere.",
    "Nel racconto coloniale, l'alterità dei popoli conquistati veniva costruita per giustificare la conquista: l'altro era irrazionale, primitivo, bisognoso di guida.",
    "Viaggiare non garantisce di incontrare l'alterità: si può girare il mondo rimanendo impermeabili al diverso.",
  ],

  synonyms: [
    {
      term: "diversità",
      register: "comune",
      context: "più generico, spesso usato in chiave positiva senza la profondità filosofica del termine",
    },
    {
      term: "estraneità",
      register: "comune",
      context: "enfatizza la distanza percepita, non la costruzione relazionale",
    },
  ],

  antonyms: [
    {
      term: "identità",
      register: "comune",
      context: "il polo opposto: ciò che si riconosce come proprio, uguale a sé",
    },
    {
      term: "familiarità",
      register: "comune",
      context: "la condizione di ciò che è già noto, assimilato, non più estraneo",
    },
  ],

  relatedWords: [
    "xenofobia",
    "xenofobo",
    "etnocentrismo",
    "razzismo",
    "pregiudizio",
    "migrazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/alterita/",
    wiktionary: "https://it.wiktionary.org/wiki/alterit%C3%A0",
  },

  paroliereNote:
    "L'alterità è forse la parola di questo cluster semantico che porta il maggior peso filosofico. " +
    "Non è solo 'il diverso': è la domanda su cosa significa incontrare qualcuno che non si lascia " +
    "ridurre a ciò che già conosci. La xenofobia è una risposta a questa domanda — " +
    "non l'unica, e non la migliore.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Alterità — definizione e uso | Il Paroliere",
    description:
      "Alterità: la condizione di essere altro, diverso. In filosofia, ciò che resiste alla riduzione all'identico. Definizione con esempi ed etimologia.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
