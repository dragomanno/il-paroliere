// Il Paroliere — Lemma: reticenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const reticenza: LemmaEntry = {
  lemma: "reticenza",
  slug: "reticenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Omissione deliberata di ciò che si sa o si pensa: non menzogna, ma discorso che si ferma prima di " +
    "dire tutto. In retorica classica corrisponde all'aposiopesi — la frase interrotta che lascia intendere " +
    "più di quanto enuncia. Nel parlato comune indica una riservatezza attiva, diversa dal silenzio: " +
    "la reticenza sceglie le parole, ma ne trattiene altre.",

  shortDefinition:
    "Omissione deliberata che parla senza rivelare tutto: né silenzio né menzogna, ma discorso calcolato.",

  register: ["comune", "tecnico"],
  domains: ["comunicazione", "retorica", "psicologia"],

  etymology:
    "Dal latino reticentia, derivato di reticere, 'tacere, non dire'. " +
    "Composto di re- (rafforzativo) e tacere. Attestato in italiano dal Cinquecento.",

  examples: [
    "Rispose con una reticenza che valeva più di una risposta diretta.",
    "La sua reticenza sui dettagli finanziari aveva iniziato a insospettire i soci.",
    "Non era timidezza la sua, era reticenza: sapeva tutto e sceglieva cosa dire.",
    "In retorica la reticenza è una figura: il non-detto che definisce il detto.",
  ],

  synonyms: [
    {
      term: "riservatezza",
      register: "comune",
      context: "più neutro, non implica necessariamente omissione strategica",
    },
    {
      term: "omissione",
      register: "formale",
      context: "termine più tecnico, usato anche in senso giuridico",
    },
    {
      term: "silenzio",
      register: "comune",
      context: "assenza totale, non scelta selettiva come la reticenza",
    },
  ],

  antonyms: [
    {
      term: "franchezza",
      register: "comune",
      context: "dire tutto senza calcolo né omissione",
    },
    {
      term: "trasparenza",
      register: "comune",
      context: "assenza di filtri tra pensiero e parola",
    },
  ],

  relatedWords: [
    "reticente",
    "aposiopesi",
    "omissione",
    "riserbo",
    "silenzio",
    "sottinteso",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/reticenza/",
    wiktionary: "https://it.wiktionary.org/wiki/reticenza",
  },

  paroliereNote:
    "La reticenza è una forma di potere linguistico sottovalutata. Chi tace tutto è assente; " +
    "chi mente è altrove; ma chi è reticente è sempre presente — solo che ha scelto dove fermarsi. " +
    "È forse per questo che la reticenza crea più ansia della menzogna: lascia l'interlocutore " +
    "a lavorare su ciò che non è stato detto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Reticenza — Il Paroliere",
    description:
      "Definizione originale di 'reticenza': omissione deliberata, né silenzio né menzogna. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
