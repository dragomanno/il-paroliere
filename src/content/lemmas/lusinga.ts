// Il Paroliere — Lemma: lusinga
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lusinga: LemmaEntry = {
  lemma: "lusinga",
  slug: "lusinga",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Parola o gesto che accarezza l'amor proprio altrui, spesso con " +
    "l'intenzione — più o meno dichiarata — di ottenere qualcosa in cambio. " +
    "A differenza del complimento sincero, la lusinga è strumentale o almeno " +
    "sospettabile di esserlo: il suo potere sta proprio nell'essere difficile " +
    "da smascherare sul momento. In senso più ampio, indica anche un'attrattiva " +
    "o una tentazione capace di ammorbidire la resistenza.",

  shortDefinition:
    "Adulazione calcolata che fa sentire speciali — e di solito vuole qualcosa in cambio.",

  register: ["comune", "ironico"],
  domains: ["relazioni", "psicologia", "comunicazione"],

  etymology:
    "Dal provenzale losingier ('adulatore') o dall'antico francese losengier, " +
    "a sua volta dal latino laus/laudis ('lode') con suffisso dispregiativo. " +
    "L'etimologia porta già in sé la doppiezza: la lode che non è lode.",

  examples: [
    "Le sue lusinghe erano eleganti ma riconoscibili: chiunque lo conoscesse " +
    "sapeva cosa stava per chiedere.",
    "Non era immune alle lusinghe — nessuno lo è davvero quando vengono " +
    "dosate nel modo giusto.",
    "Rispose alle lusinghe con cortesia, senza però cambiare di un millimetro " +
    "la sua posizione.",
    "La lusinga del successo facile è una delle trappole più difficili da " +
    "riconoscere in tempo.",
  ],

  synonyms: [
    {
      term: "adulazione",
      register: "comune",
      context: "lode eccessiva e interessata — più esplicita e meno sottile della lusinga",
    },
    {
      term: "piaggeria",
      register: "comune",
      context: "adulazione servile e sistematica — più goffa della lusinga",
    },
    {
      term: "blandizia",
      register: "letterario",
      context: "parola o gesto che ammansisce — forma più arcaica e letteraria",
    },
    {
      term: "captatio benevolentiae",
      register: "tecnico",
      context: "in retorica: strategia per conquistare il favore dell'ascoltatore",
    },
  ],

  antonyms: [
    {
      term: "complimento",
      register: "comune",
      context: "elogio sincero senza secondo fine — l'opposto morale della lusinga",
    },
    {
      term: "critica",
      register: "comune",
      context: "valutazione negativa — opposto diretto per contenuto",
    },
  ],

  relatedWords: [
    "lusingare",
    "lusingato",
    "lusingiero",
    "adulazione",
    "blandizia",
    "piaggeria",
    "captatio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/lusinga/",
    wiktionary: "https://it.wiktionary.org/wiki/lusinga",
  },

  paroliereNote:
    "La lusinga funziona perché fa leva su qualcosa di reale: il bisogno di " +
    "essere visti, riconosciuti, apprezzati. Chi lusinga non inventa — calibra. " +
    "Trova il punto esatto in cui l'altro è più permeabile e ci lavora sopra. " +
    "È per questo che è difficile resistere: non è una bugia semplice, è una " +
    "verità selezionata con cura.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Lusinga — Il Paroliere",
    description:
      "Definizione originale di 'lusinga': adulazione calcolata che vuole qualcosa " +
      "in cambio. Differenza con il complimento sincero. Con esempi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
