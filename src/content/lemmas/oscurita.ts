// Il Paroliere — Lemma: oscurità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const oscurita: LemmaEntry = {
  lemma: "oscurità",
  slug: "oscurita",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Assenza di luce o condizione in cui la luce è insufficiente a permettere la visione. " +
    "In senso figurato è l'antitesi del bagliore: non solo mancanza fisica di chiarore, ma " +
    "condizione di non-conoscenza — l'oscurità della storia su cui non esistono documenti, " +
    "l'oscurità interiore in cui ci si perde senza trovare uscita. Porta dentro di sé tanto " +
    "il mistero quanto l'angoscia.",

  shortDefinition:
    "Assenza di luce; in senso figurato, condizione di non-conoscenza, mistero o angoscia interiore.",

  register: ["comune", "letterario"],
  domains: ["percezione", "figurato", "psicologia"],

  etymology:
    "Dal latino obscuritas, derivato di obscurus (buio, nascosto, poco chiaro). " +
    "Ob- (davanti a, contro) + un derivato di scurus, connesso a una radice indoeuropea " +
    "legata al coprire, nascondere. L'oscurità non è solo assenza: etimologicamente è " +
    "qualcosa che copre.",

  examples: [
    "L'oscurità della stanza era completa — non si vedeva nemmeno la mano davanti agli occhi.",
    "Quei decenni restano nell'oscurità: nessun documento, nessun testimone sopravvissuto.",
    "C'è un'oscurità nei suoi occhi quando parla di quel periodo — qualcosa che non vuole essere visto.",
  ],

  synonyms: [
    {
      term: "buio",
      register: "comune",
      context: "più concreto e fisico, meno carico letterariamente",
    },
    {
      term: "tenebra",
      register: "letterario",
      context: "oscurità totale e pesante, spesso con connotazione drammatica o religiosa",
    },
    {
      term: "opacità",
      register: "comune",
      context: "nel senso figurato, mancanza di trasparenza",
    },
  ],

  antonyms: [
    {
      term: "bagliore",
      register: "comune",
      context: "luce intensa e improvvisa, antitesi dell'oscurità",
    },
    {
      term: "luminosità",
      register: "comune",
      context: "presenza stabile di luce, opposto diretto",
    },
    {
      term: "chiarezza",
      register: "comune",
      context: "nel senso figurato, comprensione e trasparenza",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "lampo",
    "barlume",
    "fulgore",
    "guizzo",
    "luminosità",
    "penombra",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/oscurita/",
    wiktionary: "https://it.wiktionary.org/wiki/oscurit%C3%A0",
  },

  paroliereNote:
    "L'oscurità non è solo assenza di luce: è presenza di qualcosa che non si riesce a vedere. " +
    "Questa distinzione — che l'etimologia latina già suggerisce — rende il lemma molto più " +
    "ricco del semplice antitesi di bagliore. L'oscurità della storia, l'oscurità interiore, " +
    "l'oscurità di un testo difficile: in tutti questi usi, qualcosa c'è — solo che è " +
    "nascosto, coperto, sottratto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Oscurità — definizione e uso figurato | Il Paroliere",
    description:
      "Oscurità: assenza di luce e condizione di non-conoscenza. " +
      "Definizione originale, etimologia latina e senso figurato.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
