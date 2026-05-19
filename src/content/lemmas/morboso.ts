// Il Paroliere — Lemma: morboso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const morboso: LemmaEntry = {
  lemma: "morboso",
  slug: "morboso",
  partOfSpeech: "aggettivo",

  definition:
    "Che appartiene alla sfera della malattia o ne porta il segno, nel " +
    "lessico medico. In senso comune, si dice di un'attrazione, un interesse " +
    "o un attaccamento che ha perso la misura: qualcosa che insiste, che " +
    "torna, che non si lascia governare dalla ragione. Non implica " +
    "necessariamente intenzione malvagia — descrive piuttosto una forza " +
    "che ha smesso di obbedire.",

  shortDefinition:
    "Che eccede la misura razionale: di attrazione, interesse o attaccamento che insiste e non si lascia governare.",

  register: ["comune"],
  domains: ["psicologia", "linguaggio"],

  examples: [
    "Aveva una curiosità morbosa per i dettagli più oscuri della storia.",
    "La relazione era diventata morbosa: nessuno dei due riusciva a uscirne, nessuno dei due era felice.",
    "In medicina, 'obesità morbosa' è un termine tecnico — nel parlato, morboso ha perso quasi del tutto quel significato.",
  ],

  synonyms: [
    {
      term: "ossessivo",
      register: "comune",
      context: "che torna insistentemente, che non lascia tregua",
    },
    {
      term: "patologico",
      register: "tecnico/comune",
      context: "fuori dalla norma, con connotazione medica più esplicita",
    },
  ],

  antonyms: [
    {
      term: "sano",
      register: "comune",
      context: "in equilibrio, proporzionato, governabile",
    },
  ],

  relatedWords: [
    "ossessione",
    "attrazione",
    "patologia",
    "malattia",
    "dipendenza",
    "smoderato",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/morboso",
  },

  paroliereNote:
    "Morboso viene da «morbo» — malattia — e ha mantenuto l'idea di qualcosa " +
    "che sfugge alla normalità fisiologica. In italiano contemporaneo si usa " +
    "quasi sempre in senso figurato, spesso con una sfumatura di giudizio " +
    "sospeso: morboso non è automaticamente negativo, descrive un'intensità " +
    "che ha superato il confine del governabile. Dove quel confine sia, " +
    "dipende da chi guarda.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Morboso — Il Paroliere",
    description:
      "Definizione originale di 'morboso': attrazione o interesse che eccede " +
      "la misura razionale. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
