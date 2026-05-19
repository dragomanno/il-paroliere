// Il Paroliere — Lemma: frastagliato
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const frastagliato: LemmaEntry = {
  lemma: "frastagliato",
  slug: "frastagliato",
  partOfSpeech: "aggettivo",

  definition:
    "Che presenta un profilo irregolare, segnato da tagli, rientranze e sporgenze che ne interrompono la continuità. Si dice di coste, foglie, superfici naturali; per estensione, di percorsi biografici, narrazioni o traiettorie segnate da discontinuità, svolte impreviste, complessità che resistono a ogni linearità.",

  shortDefinition:
    "Dal profilo irregolare e interrotto; detto di coste e foglie, ma anche di vite e racconti che non procedono in linea retta.",

  register: ["comune", "letterario"],
  domains: ["forma", "paesaggio"],

  etymology:
    "Da frastagliare, frequentativo di tagliare; prefisso fra- con valore intensivo o dispersivo.",

  examples: [],

  synonyms: [
      {
        term: "dentellato",
        register: "comune",
        context: "irregolarità a denti, più preciso sul tipo di taglio",
      },
      {
        term: "irregolare",
        register: "comune",
        context: "termine più generico, meno evocativo",
      },
      {
        term: "accidentato",
        register: "comune",
        context: "con ostacoli e dislivelli, spesso riferito a terreni",
      },
    ],

  antonyms: [
      {
        term: "lineare",
        register: "comune",
        context: "che procede senza deviazioni o interruzioni",
      },
      {
        term: "uniforme",
        register: "comune",
        context: "senza variazioni di profilo",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/frastagliato/",
    wiktionary: "https://it.wiktionary.org/wiki/frastagliato",
  },

  paroliereNote:
    "È una parola che sembra frastagliata anche nella forma: la doppia consonante, la lunghezza, il ritmo sconnesso. Funziona bene in entrambe le sue accezioni perché porta con sé la sensazione di ciò che descrive — quell'irregolarità che non si lascia ridurre a un profilo ordinato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Frastagliato — Il Paroliere",
    description:
      "Definizione originale di 'frastagliato': profilo irregolare, in senso fisico e figurato. Con sinonimi, contrari ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
