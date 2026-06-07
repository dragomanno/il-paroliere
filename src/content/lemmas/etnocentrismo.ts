// Il Paroliere — Lemma: etnocentrismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const etnocentrismo: LemmaEntry = {
  lemma: "etnocentrismo",
  slug: "etnocentrismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Tendenza a interpretare le altre culture usando come metro di giudizio i valori, le norme e " +
    "i comportamenti della propria. Non è necessariamente ostile — spesso opera in modo inconsapevole " +
    "— ma produce una gerarchia implicita in cui il proprio gruppo funge da punto zero del confronto. " +
    "In antropologia è distinto dalla xenofobia per l'assenza di paura: l'etnocentrismo giudica, " +
    "non teme.",

  shortDefinition:
    "Tendenza a valutare le altre culture usando la propria come metro di giudizio implicito.",

  register: ["tecnico", "comune"],
  domains: ["antropologia", "sociologia", "psicologia sociale"],

  etymology:
    "Composto del greco éthnos ('popolo', 'nazione') e del latino centrum ('centro'). " +
    "Il termine fu introdotto dal sociologo americano William Graham Sumner nel 1906 nell'opera " +
    "«Folkways» per descrivere la tendenza dei gruppi a porsi al centro del mondo.",

  examples: [
    "Lo storico riconobbe che il suo approccio era viziato da etnocentrismo: ogni civiltà non europea veniva misurata in base al modello romano.",
    "L'etnocentrismo non è solo coloniale: anche il confronto tra regioni italiane può produrre giudizi etnocentrici sottili.",
    "Distinguere etnocentrismo da relativismo culturale è uno degli esercizi fondamentali della formazione antropologica.",
  ],

  synonyms: [
    {
      term: "provincialismo culturale",
      register: "comune",
      context: "uso figurato e meno tecnico, indica chiusura verso il diverso",
    },
    {
      term: "eurocentrismo",
      register: "tecnico",
      context: "forma specifica di etnocentrismo con la cultura europea come punto di riferimento",
    },
  ],

  antonyms: [
    {
      term: "relativismo culturale",
      register: "tecnico",
      context: "approccio che valuta ogni cultura secondo i propri parametri interni",
    },
    {
      term: "interculturalità",
      register: "comune",
      context: "apertura e confronto tra culture senza gerarchia implicita",
    },
  ],

  relatedWords: [
    "xenofobia",
    "xenofobo",
    "razzismo",
    "pregiudizio",
    "alterità",
    "migrazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/etnocentrismo/",
    wiktionary: "https://it.wiktionary.org/wiki/etnocentrismo",
  },

  paroliereNote:
    "Sumner inventò il termine per descrivere qualcosa di universale: ogni gruppo umano tende a " +
    "vedersi come normale e gli altri come deviazioni. La difficoltà non è riconoscerlo negli altri — " +
    "è riconoscerlo in se stessi. L'etnocentrismo più insidioso non urla: sussurra.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Etnocentrismo — definizione e uso | Il Paroliere",
    description:
      "Etnocentrismo: tendenza a giudicare le altre culture usando la propria come metro. Definizione originale con esempi, etimologia e nota editoriale.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
