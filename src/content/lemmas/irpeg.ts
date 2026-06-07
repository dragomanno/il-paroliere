// Il Paroliere — Lemma: IRPEG
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const irpeg: LemmaEntry = {
  lemma: "IRPEG",
  slug: "irpeg",
  partOfSpeech: "sostantivo femminile (sigla)",

  definition:
    "Sigla di Imposta sul Reddito delle Persone Giuridiche: l'imposta diretta che " +
    "colpiva il reddito delle società di capitali e degli enti non commerciali in " +
    "Italia, in vigore dal 1° gennaio 1974 (riforma tributaria Visentini) fino al " +
    "31 dicembre 2003. Dal 1° gennaio 2004 è stata soppressa e sostituita dall'IRES " +
    "(Imposta sul Reddito delle Società), introdotta con il D.Lgs. 344/2003 " +
    "nell'ambito della riforma Tremonti. L'IRPEG aveva un'aliquota proporzionale " +
    "(non progressiva come l'→ IRPEF): il reddito delle società veniva tassato con " +
    "un'aliquota fissa, che negli ultimi anni di vigore era pari al 34%.",

  shortDefinition:
    "Imposta proporzionale sul reddito delle persone giuridiche (società, enti), in vigore in Italia dal 1974 al 2003, poi sostituita dall'IRES.",

  register: ["tecnico-fiscale", "storico"],
  domains: ["fisco", "diritto tributario", "economia"],

  etymology:
    "Acronimo di Imposta sul Reddito delle Persone Giuridiche. In vigore dal " +
    "1° gennaio 1974, abrogata dal 31 dicembre 2003 e sostituita dall'IRES con " +
    "il D.Lgs. 344/2003.",

  examples: [
    "Quando fu fondata la società, nel 1995, l'IRPEG era ancora l'imposta di riferimento per i redditi societari.",
    "La riforma del 2004 abolì l'IRPEG e introdusse l'IRES, riducendo anche l'aliquota dal 34% al 33%.",
  ],

  relatedWords: [
    "irpef",
    "ires",
    "IRAP",
    "deduzione-fiscale",
    "detrazione-fiscale",
    "persone giuridiche",
    "società di capitali",
    "aliquota proporzionale",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/IRPEG",
  },

  paroliereNote:
    "L'IRPEG è oggi una sigla storica, ma vale la pena tenerla nel lessico del " +
    "Paroliere perché chiunque lavori con documenti fiscali o societari anteriori " +
    "al 2004 — bilanci, contratti, contenziosi — la incontra con regolarità. È " +
    "anche un ottimo esempio di come le sigle fiscali italiane seguano una logica " +
    "di sistema coerente: IRPEF per le persone fisiche, IRPEG per le persone " +
    "giuridiche, IRES per le società tout court. Il passaggio terminologico riflette " +
    "anche un cambiamento concettuale: l'IRES è un'imposta moderna, armonizzata con " +
    "i sistemi europei; l'IRPEG era ancora figlia dell'impianto della riforma degli " +
    "anni Settanta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "IRPEG — cos'è, quando è stata abolita, differenza con IRPEF | Il Paroliere",
    description:
      "IRPEG: la vecchia imposta sulle persone giuridiche, sostituita dall'IRES nel 2004. Definizione, storia e confronto con IRPEF e IRES.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
