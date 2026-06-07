// Il Paroliere — Lemma: IRPEF
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const irpef: LemmaEntry = {
  lemma: "IRPEF",
  slug: "irpef",
  partOfSpeech: "sostantivo femminile (sigla)",

  definition:
    "Sigla di Imposta sul Reddito delle Persone Fisiche: la principale imposta " +
    "diretta del sistema tributario italiano, che colpisce il reddito complessivo " +
    "delle persone fisiche residenti in Italia. È un'imposta progressiva per " +
    "scaglioni: al crescere del reddito imponibile cresce anche l'aliquota applicata, " +
    "secondo il principio costituzionale della capacità contributiva (art. 53 della " +
    "Costituzione italiana). Viene applicata su redditi da lavoro dipendente, lavoro " +
    "autonomo, redditi fondiari, redditi di capitale e redditi diversi, con meccanismi " +
    "di deduzioni e detrazioni che riducono la base imponibile o l'imposta dovuta. " +
    "L'IRPEF fu istituita con il DPR 597/1973, nell'ambito della riforma tributaria " +
    "Visentini, ed è in vigore — con successive modifiche agli scaglioni e alle " +
    "aliquote — dal 1° gennaio 1974. Prima della riforma del 1973, le imposte dirette " +
    "in Italia erano articolate in modo molto più frammentato: tra le principali c'era " +
    "l'ILOR (Imposta Locale sui Redditi), che colpiva i redditi non da lavoro " +
    "dipendente e rimase in vigore parallelamente all'IRPEF fino alla sua abolizione " +
    "nel 1998, quando fu sostituita dall'IRAP (Imposta Regionale sulle Attività " +
    "Produttive). Vedi anche → IRPEG per la parallela imposta sulle persone giuridiche.",

  shortDefinition:
    "Imposta progressiva sul reddito delle persone fisiche, principale imposta diretta del sistema tributario italiano.",

  register: ["tecnico-fiscale", "burocratico", "comune"],
  domains: ["fisco", "diritto tributario", "economia", "società"],

  etymology:
    "Acronimo di Imposta sul Reddito delle Persone Fisiche. Introdotta con DPR 597 " +
    "del 29 settembre 1973, in vigore dal 1° gennaio 1974.",

  examples: [
    "Con il conguaglio di marzo ho scoperto di dover versare altri 800 euro di IRPEF: non avevo conteggiato bene le detrazioni.",
    "L'IRPEF è un'imposta progressiva: chi guadagna di più paga un'aliquota più alta sugli scaglioni superiori.",
    "Prima dell'IRPEF, l'ILOR colpiva i redditi di impresa e di capitale con logiche diverse e spesso sovrapposte.",
  ],

  synonyms: [
    {
      term: "imposta sul reddito",
      register: "comune",
      context: "denominazione generica",
    },
    {
      term: "tassazione diretta sul reddito",
      register: "tecnico-fiscale",
      context: "accezione descrittiva",
    },
  ],

  antonyms: [
    {
      term: "IVA",
      register: "tecnico-fiscale",
      context: "imposta indiretta sui consumi",
    },
  ],

  relatedWords: [
    "IRPEG",
    "deduzione fiscale",
    "detrazione fiscale",
    "defiscalizzazione",
    "IRAP",
    "IRES",
    "scaglioni",
    "aliquota",
    "imponibile",
    "CUD",
    "730",
    "Unico",
    "Agenzia delle Entrate",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/irpef/",
    wiktionary: "https://it.wiktionary.org/wiki/IRPEF",
  },

  paroliereNote:
    "L'IRPEF è forse la parola fiscale più pronunciata dagli italiani, spesso con un " +
    "misto di rassegnazione e irritazione. Pochi sanno, però, che il sistema delle " +
    "imposte dirette su cui si reggeva l'Italia prima del 1974 era molto più " +
    "frammentato: c'era l'imposta di ricchezza mobile, l'imposta sui fabbricati, " +
    "l'imposta agraria, l'ILOR. La riforma Visentini non semplificò solo le aliquote: " +
    "ridisegnò il patto fiscale tra cittadino e Stato. Il fatto che la progressività " +
    "dell'IRPEF sia ancora oggi fondata sull'articolo 53 della Costituzione — «tutti " +
    "sono tenuti a concorrere alle spese pubbliche in ragione della loro capacità " +
    "contributiva» — è un dettaglio che vale la pena ricordare ogni volta che si " +
    "discute di flat tax.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "IRPEF — cos'è, come funziona, storia | Il Paroliere",
    description:
      "Cosa significa IRPEF, da dove viene la sigla, quando fu introdotta e come si collega a ILOR e IRPEG. Definizione originale con storia fiscale italiana.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
