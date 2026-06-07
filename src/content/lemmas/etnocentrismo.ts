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
    "non teme. " +
    "Claude Lévi-Strauss ha affrontato il problema in modo radicale nel saggio «Razza e storia» " +
    "(1952): ogni cultura tende a rigettare come barbaro ciò che è al di fuori di sé, ma questa " +
    "reazione — per quanto universale — non costituisce un fondamento per classificare le civiltà " +
    "su una scala evolutiva. Per Lévi-Strauss la diversità culturale non è un ostacolo da " +
    "superare né una gerarchia da stabilire: è la condizione stessa della creatività storica " +
    "dell'umanità. Le culture si sviluppano attraverso il contatto, la coalizione e lo scambio, " +
    "non nell'isolamento. L'etnocentrismo, in questa lettura, non è solo un errore morale: " +
    "è un errore epistemologico — impoverisce chi giudica prima ancora di danneggiare chi viene giudicato.",

  shortDefinition:
    "Tendenza a valutare le altre culture usando la propria come metro implicito; per Lévi-Strauss, un errore epistemologico che impoverisce chi lo commette.",

  register: ["tecnico", "comune"],
  domains: ["antropologia", "sociologia", "psicologia sociale", "filosofia"],

  etymology:
    "Composto del greco éthnos ('popolo', 'nazione') e del latino centrum ('centro'). " +
    "Il termine fu introdotto dal sociologo americano William Graham Sumner nel 1906 nell'opera " +
    "«Folkways» per descrivere la tendenza dei gruppi a porsi al centro del mondo.",

  examples: [
    "Lo storico riconobbe che il suo approccio era viziato da etnocentrismo: ogni civiltà non europea veniva misurata in base al modello romano.",
    "In «Razza e storia» Lévi-Strauss dimostra che il «primitivo» non è una fase evolutiva inferiore: è un'altra risposta, ugualmente complessa, alle stesse domande fondamentali.",
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
    "accoglienza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/etnocentrismo/",
    wiktionary: "https://it.wiktionary.org/wiki/etnocentrismo",
  },

  paroliereNote:
    "Lévi-Strauss scrisse «Razza e storia» su commissione dell'UNESCO, in un momento in cui " +
    "il mondo stava ancora cercando le parole per elaborare lo sterminio nazista. La sua risposta " +
    "non fu un elogio sentimentale della diversità: fu un'argomentazione rigorosa per cui " +
    "l'etnocentrismo è prima di tutto un danno per chi lo pratica. Chi giudica gli altri " +
    "a partire da un unico metro perde la capacità di comprendere — e quindi di imparare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Etnocentrismo — definizione e uso | Il Paroliere",
    description:
      "Etnocentrismo: tendenza a giudicare le altre culture usando la propria come metro. Con Lévi-Strauss, Sumner, esempi originali ed etimologia.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
