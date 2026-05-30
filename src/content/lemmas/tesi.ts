// Il Paroliere — Lemma: tesi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tesi: LemmaEntry = {
  lemma: "tesi",
  slug: "tesi",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In dialettica, il primo momento del movimento logico hegeliano: l'affermazione " +
    "originaria che la contraddizione (antitesi) mette in crisi per poi risolversi in " +
    "una sintesi superiore. In ambito accademico indica l'elaborato di ricerca con " +
    "cui uno studente dimostra la capacità di sviluppare un argomento autonomo e " +
    "documentato. Nell'uso comune vale semplicemente per una posizione sostenuta con " +
    "argomenti.",

  shortDefinition:
    "Affermazione argomentata; in dialettica, il primo momento del trittico " +
    "tesi-antitesi-sintesi; in accademia, l'elaborato finale.",

  register: ["tecnico", "comune"],
  domains: ["filosofia", "retorica", "accademia"],

  etymology:
    "Dal greco thésis — posizione, ciò che viene posto — derivato di tithénai, porre, " +
    "collocare. Il termine entra nel lessico filosofico latino e poi nelle lingue " +
    "romanze attraverso la logica scolastica medievale.",

  examples: [
  ],

  synonyms: [
    { term: "proposizione", register: "tecnico", context: "nel lessico logico-filosofico formale" },
    { term: "affermazione", register: "comune", context: "più neutro, senza implicazione dialettica" },
    { term: "posizione", register: "comune", context: "enfatizza l'aspetto di scelta e schieramento" }
  ],

  antonyms: [
    { term: "antitesi", register: "tecnico", context: "la negazione determinata della tesi" },
    { term: "confutazione", register: "tecnico", context: "l'atto di dimostrare la falsità della tesi" }
  ],

  relatedWords: [
    "antitesi",
    "sintesi",
    "compendio"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/tesi"
  },

  paroliereNote:
    "La tesi di laurea è diventata negli anni un rito di passaggio culturale oltre " +
    "che accademico: cinque anni di studio compresso in duecento pagine, discusse " +
    "davanti a una commissione in un momento che in Italia è ancora cerimonia " +
    "familiare. Difendere una tesi vuol dire anche imparare a stare su una posizione " +
    "sotto pressione — forse l'abilità più sottovalutata dell'intero percorso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tesi — Il Paroliere",
    description:
      "Tesi: posizione argomentata, momento dialettico, elaborato accademico. " +
      "Filosofia, retorica — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};