// Il Paroliere — Lemma: ozio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ozio: LemmaEntry = {
  lemma: "ozio",
  slug: "ozio",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Condizione di chi non è impegnato in alcuna attività produttiva — parola che " +
    "porta in sé una doppia valenza difficile da ignorare. Nel senso comune tende " +
    "verso la pigrizia, il tempo sprecato, l'assenza di scopo; nella tradizione " +
    "umanistica latina, l'otium era invece il tempo sottratto al negotium per " +
    "dedicarsi alla riflessione, alla lettura, all'amicizia con se stessi.",

  shortDefinition:
    "Assenza di occupazione: colpa o privilegio secondo la prospettiva — il latino otium ne custodisce il senso più nobile.",

  register: ["comune", "letterario"],
  domains: ["filosofia", "vita quotidiana", "tempo"],

  etymology:
    "Dal latino otium, 'tempo libero, riposo, pace'. Contrapposto al negotium " +
    "(affare, occupazione). In età classica aveva valore positivo; la connotazione " +
    "negativa si è consolidata nel tempo con l'affermazione dell'etica del lavoro.",

  examples: [
    "Dopo mesi di lavoro ininterrotto, quell'ozio forzato non riusciva a goderselo: " +
    "il cervello continuava a cercare qualcosa da fare.",
    "L'ozio, per gli antichi romani, era il tempo in cui si diventava migliori — " +
    "non quello in cui ci si perdeva.",
    "C'è un ozio creativo che non somiglia alla pigrizia: è il silenzio prima " +
    "dell'idea.",
    "«L'ozio è il padre dei vizi» — ma anche, a volte, di alcune delle idee " +
    "migliori.",
  ],

  synonyms: [
    {
      term: "pigrizia",
      register: "comune",
      context: "inclinazione a evitare lo sforzo — connotazione più negativa",
    },
    {
      term: "riposo",
      register: "comune",
      context: "pausa dall'attività, senza il giudizio morale dell'ozio",
    },
    {
      term: "inoperosità",
      register: "formale",
      context: "assenza di produzione, termine più neutro e burocratico",
    },
    {
      term: "otium",
      register: "letterario",
      context: "il prestito latino, usato quando si vuole evocare la valenza positiva",
    },
  ],

  antonyms: [
    {
      term: "lavoro",
      register: "comune",
      context: "attività produttiva — il negotium latino",
    },
    {
      term: "operosità",
      register: "comune",
      context: "inclinazione attiva al fare, opposta all'ozio in senso negativo",
    },
    {
      term: "impegno",
      register: "comune",
      context: "dedizione a un compito o a una causa",
    },
  ],

  relatedWords: [
    "ozioso",
    "pigrizia",
    "riposo",
    "otium",
    "negotium",
    "contemplazione",
    "noia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ozio/",
    wiktionary: "https://it.wiktionary.org/wiki/ozio",
  },

  paroliereNote:
    "Ozio è una parola che ha cambiato faccia. I latini avrebbero faticato a " +
    "capire perché la usiamo quasi sempre come insulto o scusa. Per Cicerone, " +
    "per Orazio, per Seneca, il tempo dell'otium era il tempo della scrittura, " +
    "del pensiero, della conversazione intelligente — il tempo in cui si era " +
    "davvero se stessi. Forse vale la pena recuperare almeno una parte di quella " +
    "dignità, soprattutto in un'epoca che trasforma anche il riposo in " +
    "produttività.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ozio — Il Paroliere",
    description:
      "Definizione originale di 'ozio': assenza di occupazione tra colpa e privilegio. " +
      "Con esempi, sinonimi, la distinzione otium/negotium ed etimologia latina.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
