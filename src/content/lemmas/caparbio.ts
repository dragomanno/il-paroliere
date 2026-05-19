// Il Paroliere — Lemma: caparbio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const caparbio: LemmaEntry = {
  lemma: "caparbio",
  slug: "caparbio",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Chi mantiene la propria posizione con una determinazione che non si lascia " +
    "scalfire né da pressioni né da argomenti contrari. A differenza di testardo " +
    "— che suggerisce chiusura sterile — e di ostinato — più neutro nel giudizio " +
    "— caparbio porta con sé una sfumatura di rispetto: la durezza di testa che " +
    "alla fine porta da qualche parte.",

  shortDefinition:
    "Tenace fino all'ostinazione, ma con una sfumatura di ammirazione: la testa dura che sa dove vuole arrivare.",

  register: ["comune", "colloquiale"],
  domains: ["carattere", "comportamento"],

  etymology:
    "Di etimo incerto; attestato in italiano dal XIII secolo. Probabilmente " +
    "composto di capo e arbio, variante di arvio o albio, con riferimento " +
    "metaforico alla durezza della testa. Alcune ipotesi lo collegano al " +
    "longobardo haribald ('ardito in battaglia').",

  examples: [
    "Era caparbio come pochi: ogni no ricevuto diventava un motivo in più per " +
    "continuare.",
    "Quella caparbietà che da bambino sembrava un difetto era diventata la sua " +
    "qualità professionale più riconoscibile.",
    "Non era irragionevole — era caparbio: ascoltava tutto, poi faceva comunque " +
    "a modo suo.",
    "Ci vuole una certa dose di caparbietà per portare avanti un progetto che " +
    "nessuno crede possibile.",
  ],

  synonyms: [
    {
      term: "tenace",
      register: "comune",
      context: "persevera con forza — ma senza la nota di testardaggine di caparbio",
    },
    {
      term: "ostinato",
      register: "comune",
      context: "mantiene la posizione — più neutro, senza sfumatura ammirevole",
    },
    {
      term: "testardo",
      register: "comune",
      context: "non cede — con connotazione più negativa, chiusura irragionevole",
    },
    {
      term: "pertinace",
      register: "formale",
      context: "letterario — tenacia nel perseguire uno scopo, con sfumatura seria",
    },
  ],

  antonyms: [
    {
      term: "arrendevole",
      register: "comune",
      context: "cede facilmente alle pressioni altrui",
    },
    {
      term: "malleabile",
      register: "comune",
      context: "si adatta e cambia posizione senza resistenza",
    },
  ],

  relatedWords: [
    "caparbietà",
    "caparbiosamente",
    "ostinazione",
    "tenacia",
    "testardaggine",
    "determinazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/caparbio/",
    wiktionary: "https://it.wiktionary.org/wiki/caparbio",
  },

  paroliereNote:
    "Caparbio è uno di quei termini che cambiano segno a seconda di chi parla " +
    "e di chi ascolta. L'avversario lo usa come insulto; il sostenitore come " +
    "elogio. La stessa persona può essere descritta come caparbio o come testardo " +
    "per lo stesso comportamento — tutto dipende da quanto si è disposti ad " +
    "ammirare chi non cede. In italiano, è forse la parola che più di altre " +
    "porta in sé questa ambivalenza del giudizio sul carattere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Caparbio — Il Paroliere",
    description:
      "Definizione originale di 'caparbio': tenace fino all'ostinazione, con una " +
      "sfumatura di rispetto. Differenze con testardo e ostinato. Con esempi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
