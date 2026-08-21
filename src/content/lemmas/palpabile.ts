// Il Paroliere — Lemma: palpabile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const palpabile: LemmaEntry = {
  lemma: "palpabile",
  slug: "palpabile",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Che si può percepire con il tatto, toccandolo o sfiorandolo direttamente. " +
    "Per estensione descrive anche uno stato emotivo o una tensione così intensa " +
    "da sembrare presente nell'aria, quasi materiale: una paura, un imbarazzo, " +
    "un silenzio che si «sentono» prima ancora di essere nominati.",

  shortDefinition:
    "Percepibile al tatto; per estensione, un'emozione o una tensione così intensa da sembrare materiale.",

  register: ["comune", "letterario"],
  domains: ["percezione", "corporeità", "emozioni"],

  etymology:
    "Dal latino palpabilis, derivato di palpare, «toccare leggermente, accarezzare». " +
    "La stessa radice di palpare ed impalpabile.",

  examples: [
    "La superficie ruvida della corteccia era palpabile anche a occhi chiusi.",
    "Entrando in sala, la tensione era palpabile: nessuno osava parlare.",
    "Il sollievo, quando arrivò la notizia, fu quasi palpabile — si vedeva nelle spalle di tutti.",
  ],

  synonyms: [
    {
      term: "tangibile",
      register: "comune",
      context: "più orientato alla verifica concreta che alla sensazione tattile diretta",
    },
    {
      term: "percettibile",
      register: "tecnico",
      context: "più neutro, senza la sfumatura fisica del tatto",
    },
    {
      term: "concreto",
      register: "comune",
      context: "meno legato al gesto del toccare, più alla materialità in generale",
    },
  ],

  antonyms: [
    {
      term: "impalpabile",
      register: "letterario",
      context: "che non si lascia cogliere dal tatto, per finezza o immaterialità",
    },
    {
      term: "intangibile",
      register: "comune",
      context: "che non può essere toccato, spesso in senso astratto o giuridico",
    },
  ],

  relatedWords: ["tangibile", "impalpabile", "impalpabilità", "percezione", "tattile", "concreto"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/palpabile",
  },

  paroliereNote:
    "Palpabile è tra le parole più oneste per descrivere ciò che sfugge alle prove " +
    "ma non ai sensi: una tensione palpabile non ha numeri né documenti, eppure chi " +
    "la vive non ha dubbi. Va distinto da tangibile: il tangibile si verifica, il " +
    "palpabile si sente addosso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Palpabile — Il Paroliere",
    description:
      "Definizione originale di 'palpabile': percepibile al tatto, e per estensione " +
      "un'emozione così intensa da sembrare materiale. Con esempi ed etimologia da palpare.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
