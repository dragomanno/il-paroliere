// Il Paroliere — Lemma: sgomento
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sgomento: LemmaEntry = {
  lemma: "sgomento",
  slug: "sgomento",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Turbamento improvviso e profondo che coglie di fronte a qualcosa di inatteso, " +
    "incomprensibile o terribile — qualcosa che non si era immaginato potesse " +
    "esistere o accadere. A differenza della paura, lo sgomento ha una componente " +
    "di stupore che paralizza prima ancora di spaventare: il mondo rivela una " +
    "dimensione che la mente non aveva previsto.",

  shortDefinition:
    "Paura mista a stupore disorientante, che coglie davanti a ciò che non si credeva possibile.",

  register: ["comune", "letterario"],
  domains: ["emozione", "psicologia"],

  etymology:
    "Dal verbo sgomenare, derivato del longobardo *gaumjan o dal gotico *gaumjan, " +
    "'badare, prestare attenzione' — con prefisso s- intensivo. L'evoluzione " +
    "semantica ha spostato il senso verso il turbamento e la perdita di orientamento.",

  examples: [
    "Guardò i dati con sgomento: non era un errore, erano quelli giusti.",
    "Lo sgomento dei sopravvissuti non era solo paura — era l'impossibilità di " +
    "mettere in parole ciò che avevano visto.",
    "Provò un momento di sgomento puro quando si accorse che nessuno sembrava " +
    "preoccupato.",
    "La notizia la lasciò sgomenta: non era preparata a quella possibilità.",
  ],

  synonyms: [
    {
      term: "sbigottimento",
      register: "comune",
      context: "simile, ma con più enfasi sullo stupore e meno sulla paura",
    },
    {
      term: "costernazione",
      register: "formale",
      context: "turbamento profondo, spesso collettivo — più solenne di sgomento",
    },
    {
      term: "terrore",
      register: "comune",
      context: "paura intensa — senza la componente di stupore tipica dello sgomento",
    },
    {
      term: "smarrimento",
      register: "comune",
      context: "disorientamento — più legato alla perdita che alla sorpresa",
    },
  ],

  antonyms: [
    {
      term: "compostezza",
      register: "comune",
      context: "controllo di sé di fronte a situazioni difficili",
    },
    {
      term: "imperturbabilità",
      register: "formale",
      context: "capacità di non essere scossi da nulla",
    },
  ],

  relatedWords: [
    "sgomenare",
    "sgomento (agg.)",
    "sbigottimento",
    "stupore",
    "terrore",
    "paura",
    "disorientamento",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sgomento/",
    wiktionary: "https://it.wiktionary.org/wiki/sgomento",
  },

  paroliereNote:
    "Lo sgomento è una delle emozioni più difficili da reggere — non perché " +
    "faccia male come il dolore, ma perché richiede di ridisegnare la mappa del " +
    "mondo. Chi prova sgomento ha appena scoperto che qualcosa era possibile e " +
    "non lo sapeva. In letteratura è spesso il momento che cambia tutto: prima " +
    "dello sgomento c'è una realtà, dopo c'è un'altra. Per questo la parola ha " +
    "una densità che va oltre il semplice spavento.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sgomento — Il Paroliere",
    description:
      "Definizione originale di 'sgomento': paura mista a stupore disorientante " +
      "davanti all'inatteso. Con esempi, sinonimi, differenza con paura ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
