// Il Paroliere — Lemma: persuasione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const persuasione: LemmaEntry = {
  lemma: "persuasione",
  slug: "persuasione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "tecnico"],
  domains: ["psicologia", "retorica", "sociologia", "comunicazione"],

  definition:
    "Il processo con cui si induce qualcuno a modificare un'opinione, un atteggiamento " +
    "o un comportamento facendo leva su argomenti, emozioni o meccanismi cognitivi, " +
    "senza ricorrere a costrizione fisica o minaccia. È l'elemento che distingue la " +
    "persuasione dalla → coercizione: chi persuade lascia sempre, almeno formalmente, " +
    "la libertà di non essere convinto. Aristotele la fondò su tre leve — ethos " +
    "(credibilità di chi parla), pathos (coinvolgimento emotivo) e logos (argomento " +
    "razionale) — che restano lo scheletro di ogni analisi retorica successiva. La " +
    "psicologia sociale contemporanea ne ha aggiunto una quarta dimensione, quella dei " +
    "bias cognitivi: la persuasione funziona spesso non perché l'argomento sia il " +
    "migliore, ma perché sfrutta scorciatoie mentali (autorità, riprova sociale, " +
    "scarsità) che l'ascoltatore applica in automatico.",

  shortDefinition:
    "Indurre a cambiare opinione o comportamento tramite argomenti, emozioni o leve " +
    "cognitive, lasciando formalmente libera la scelta di non farsi convincere.",

  etymology:
    "Dal latino persuasio, -onis, derivato da persuadere, composto di per- (a fondo, " +
    "completamente) + suadere («consigliare, raccomandare», la stessa radice di " +
    "'suadente' e 'dissuadere'). Il prefisso per- indica l'intensità del processo: non " +
    "un semplice consiglio, ma un consiglio che arriva a segno e produce un cambiamento " +
    "effettivo.",

  examples: [
    "La campagna di persuasione puntava tutto sull'ethos: prima di parlare del prodotto, " +
      "costruiva la credibilità di chi lo raccomandava.",
    "Non fu un ordine, fu un lavoro di persuasione durato settimane, fatto di piccoli " +
      "argomenti ripetuti finché la resistenza non cedette da sola.",
    "In aula il difensore sapeva che la persuasione della giuria passava più per la " +
      "narrazione dei fatti che per i cavilli tecnici.",
    "Distinguere la persuasione legittima dalla → manipolazione psicologica è spesso una " +
      "questione di trasparenza: chi persuade onestamente non nasconde le proprie intenzioni.",
  ],

  synonyms: [
    {
      term: "convincimento",
      register: "formale",
      context: "più centrato sull'esito (l'essere convinti) che sul processo",
    },
    {
      term: "suggestione",
      register: "comune",
      context: "persuasione più debole e indiretta, spesso non del tutto consapevole",
    },
    {
      term: "influenza",
      register: "comune",
      context: "termine più ampio, non necessariamente intenzionale né argomentativo",
    },
  ],

  antonyms: [
    {
      term: "coercizione",
      register: "giuridico",
      context: "impone con la forza, non lascia scelta reale — l'opposto strutturale della persuasione",
    },
    {
      term: "indifferenza",
      register: "comune",
      context: "assenza di ogni tentativo di far cambiare idea",
    },
  ],

  relatedWords: [
    "persuadere",
    "persuasivo",
    "retorica",
    "manipolazione",
    "propaganda",
    "dialettica",
    "consenso",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/persuasione",
  },

  paroliereNote:
    "Il confine tra persuasione e → manipolazione non è nel risultato — in entrambi i " +
    "casi qualcuno cambia idea — ma nel metodo e nella trasparenza. Chi persuade offre " +
    "ragioni che l'altro può esaminare, accettare o respingere: l'argomento resta " +
    "verificabile anche dopo, e l'interlocutore può sempre tornare indietro con gli " +
    "stessi strumenti con cui è stato convinto. Chi manipola, invece, sfrutta canali che " +
    "l'altro non può facilmente ispezionare — leve emotive nascoste, informazioni " +
    "distorte, pressione psicologica camuffata da dialogo. È per questo che la " +
    "→ retorica classica, pur avendo pessima fama presso il senso comune, distingueva " +
    "con cura l'arte di persuadere onestamente dalla sofistica: la prima costruisce " +
    "cittadini capaci di giudizio, la seconda li rende strumenti nelle mani di chi parla " +
    "meglio.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Persuasione — definizione, retorica ed etica del convincere | Il Paroliere",
    description:
      "Che cos'è la persuasione: definizione originale, differenza da manipolazione e " +
      "coercizione, le leve di ethos pathos logos, con esempi ed etimologia.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
