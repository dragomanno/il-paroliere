// Il Paroliere — Lemma: trasparenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const trasparenza: LemmaEntry = {
  lemma: "trasparenza",
  slug: "trasparenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Qualità di ciò che non nasconde: né la luce, che attraversa certi materiali senza ostacoli, né le intenzioni, che in una persona o in un'istituzione trasparente non restano opache a chi guarda. Nel senso oggi più vivo, è l'assenza di secondi fini, la disponibilità a rendere visibili i propri processi — un valore che si chiede con crescente frequenza a chi esercita potere o responsabilità pubblica.",

  shortDefinition:
    "Assenza di secondi fini e disponibilità a rendere visibili le proprie intenzioni; in senso fisico, proprietà di ciò che lascia passare la luce.",

  register: ["comune"],
  domains: ["etica", "comunicazione"],

  etymology:
    "Dal latino medievale transparentia, da transparere (mostrarsi attraverso), da trans- + parere (apparire, mostrarsi).",

  examples: [],

  synonyms: [
      {
        term: "chiarezza",
        register: "comune",
        context: "assenza di ambiguità — più cognitivo che etico",
      },
      {
        term: "lealtà",
        register: "comune",
        context: "fedeltà alle proprie intenzioni dichiarate",
      },
      {
        term: "onestà",
        register: "comune",
        context: "corrispondenza tra ciò che si dice e ciò che si fa",
      },
    ],

  antonyms: [
      {
        term: "opacità",
        register: "comune",
        context: "proprietà di ciò che non lascia vedere — fisica o figurata",
      },
      {
        term: "doppiezza",
        register: "comune",
        context: "discrepanza deliberata tra intenzione dichiarata e reale",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/trasparenza/",
    wiktionary: "https://it.wiktionary.org/wiki/trasparenza",
  },

  paroliereNote:
    "Trasparenza è diventata una parola politica. La si richiede alle istituzioni, alle aziende, ai politici. Ma la metafora fisica dice qualcosa di interessante: il vetro trasparente non nasconde nulla, ma separa comunque. Essere trasparenti non significa non avere confini — significa che chi guarda può vedere quello che c'è dall'altra parte.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Trasparenza — Il Paroliere",
    description:
      "Definizione originale di 'trasparenza': assenza di secondi fini e visibilità delle intenzioni, in senso fisico ed etico. Con sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
