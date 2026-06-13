// Il Paroliere — Lemma: psicopatia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const psicopatia: LemmaEntry = {
  lemma: "psicopatia",
  slug: "psicopatia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune (uso improprio frequente)"],
  domains: ["psicologia clinica", "psichiatria", "criminologia"],

  definition:
    "In psicologia clinica, disturbo della personalità caratterizzato da assenza di " +
    "empatia, insensibilità affettiva, manipolazione relazionale, impulsività e scarsa " +
    "capacità di provare rimorso o colpa — senza che ciò implichi necessariamente " +
    "comportamenti violenti o criminali. Nell'uso scientifico contemporaneo viene " +
    "classificata come una variante grave del disturbo antisociale di personalità (DSM-5), " +
    "valutata con strumenti specifici come la PCL-R di Hare. Nel linguaggio comune, " +
    "\u00abpsicopatico\u00bb è usato spesso in modo impreciso come sinonimo di \u00abfolle\u00bb, " +
    "\u00abviolento\u00bb o \u00abimprevedibile\u00bb, perdendo la specificità clinica del termine e " +
    "contribuendo allo stigma delle malattie mentali.",

  shortDefinition:
    "Disturbo della personalità caratterizzato da mancanza di empatia, manipolazione " +
    "e assenza di rimorso; nel linguaggio comune il termine è spesso usato in modo improprio.",

  etymology:
    "Dal greco psychḗ \u00abanima, mente\u00bb e páthos \u00absofferenza, affezione, malattia\u00bb. " +
    "Letteralmente: \u00abmalattia della mente\u00bb. Il termine entra nel lessico clinico nella " +
    "seconda metà dell'Ottocento; la sua storia diagnostica è travagliata, con " +
    "denominazioni variabili (follia morale, personalità sociopatica, disturbo antisociale) " +
    "che riflettono l'evoluzione dei paradigmi psichiatrici.",

  examples: [
    "La PCL-R di Robert Hare misura la psicopatia su una scala da 0 a 40: chi supera 30 è classificato psicopatico, ma la soglia non definisce un confine netto tra \u201cnormale\u201d e \u201cpatologico\u201d.",
    "Non tutta la psicopatia è criminale: ricerche recenti suggeriscono che tratti psicopatici moderati — fascino superficiale, assenza di paura, freddo calcolo — possano essere adattativi in certi ambienti professionali.",
    "Quando i giornali titolano \u201cera uno psicopatico\u201d dopo un atto violento, usano il termine per chiudere la spiegazione, non per aprirla: la psicopatia clinica richiede diagnosi, non etichette retroattive.",
    "La distinzione tra psicopatia e sociopatia è dibattuta: alcuni autori usano \u201csociopatia\u201d per forme modellate più dall'ambiente, \u201cpsicopatia\u201d per quelle con basi biologiche più marcate.",
  ],

  synonyms: [
    {
      term: "disturbo antisociale di personalità",
      register: "tecnico-diagnostico",
      note: "Categoria DSM-5 più ampia che include la psicopatia come forma grave.",
    },
    {
      term: "sociopatia",
      register: "tecnico (dibattuto)",
      note: "Termine alternativo, preferito da alcuni clinici per sottolineare il peso dei fattori ambientali.",
    },
  ],

  antonyms: [
    {
      term: "empatia",
      register: "psicologico",
      note: "La capacità che la psicopatia, nella sua definizione clinica, compromette o azzera.",
    },
  ],

  relatedWords: ["antisocialita", "alienista", "inconscio", "coscienza", "diffidenza"],

  sourceLinks: {},

  paroliereNote:
    "La psicopatia è uno dei termini più abusati del lessico contemporaneo — e uno dei " +
    "più fraintesi. Ogni volta che qualcuno viene definito \u00abpsicopatico\u00bb perché ha fatto " +
    "qualcosa di crudele o incomprensibile, il termine viene usato come punto di arrivo " +
    "invece che come inizio di una domanda. Clinicamente, la psicopatia non spiega la " +
    "violenza — descrive un profilo. E quel profilo esiste su uno spettro, non come " +
    "categoria binaria. Il vero problema non è chi \u00abè\u00bb psicopatico, ma quante strutture " +
    "sociali e organizzative premiano i tratti psicopatici senza chiamarli con il loro nome.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "psicopatia — disturbo della personalità tra clinica e abuso linguistico",
    description:
      "Che cos'è la psicopatia: definizione clinica, scala PCL-R, differenza da " +
      "sociopatia e distanza tra uso scientifico e uso popolare del termine.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
