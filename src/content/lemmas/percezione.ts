// Il Paroliere — Lemma: percezione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const percezione: LemmaEntry = {
  lemma: "percezione",
  slug: "percezione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "filosofia", "neuroscienze", "arte", "sociologia"],

  definition:
    "Processo attraverso cui un organismo organizza e interpreta gli stimoli provenienti dai sensi, trasformandoli in esperienze dotate di forma e significato, e non in semplice somma di dati. In psicologia e neuroscienze la percezione è l'incontro tra ciò che arriva dall'esterno e ciò che il cervello vi proietta sopra: aspettative, memorie, bias cognitivi, linguaggio; in filosofia indica il modo in cui il mondo ci appare, prima ancora di essere concetto, spesso con una ricchezza maggiore di quella che riusciamo a dire. Nel linguaggio quotidiano, “percezione” è anche l'immagine che abbiamo di qualcosa o qualcuno, spesso diversa dai fatti misurabili.",

  shortDefinition:
    "Modo in cui organizziamo e interpretiamo ciò che i sensi raccolgono, costruendo l'esperienza del mondo e l'immagine che ne ricaviamo.",

  etymology:
    "Dal latino perceptio, -onis, “atto del percepire, raccolta”, derivato da percipĕre “afferrare, comprendere”, da per- “attraverso” e capĕre “prendere”. In italiano il termine conserva il doppio registro: da un lato l'atto sensoriale e mentale del “cogliere”, dall'altro la percezione come impressione soggettiva, giuridica o sociale.",

  examples: [
    "La percezione del pericolo non dipende solo dai numeri, ma dalle storie con cui li interpretiamo.",
    "Due persone possono avere una percezione del tempo completamente diversa, pur vivendo la stessa attesa in sala d'aspetto.",
    "In arte contemporanea, molte installazioni lavorano sulla percezione dello spazio, costringendo il corpo a ripensare le proprie abitudini.",
    "Gli esperimenti mostrano quanto la nostra percezione dei colori sia influenzata dal contesto e dalle aspettative.",
    "La percezione pubblica della criminalità è spesso più alta dei dati reali, alimentata da cronaca selettiva e titoli allarmistici.",
  ],

  synonyms: [
    {
      term: "sensazione organizzata",
      register: "saggistico",
      note: "Sottolinea il passaggio dai dati grezzi alla forma.",
    },
    {
      term: "immagine mentale",
      register: "comune",
      note: "Più centrata sull'esito che sul processo.",
    },
    {
      term: "impressione",
      register: "comune",
      note: "Per l'uso quotidiano in cui percezione indica un sentire soggettivo.",
    },
  ],

  antonyms: [
    {
      term: "dato grezzo",
      register: "tecnico-divulgativo",
      note: "Ciò che precede l'interpretazione percettiva.",
    },
    {
      term: "cecità percettiva",
      register: "tecnico",
      note: "Incapacità di cogliere aspetti presenti nello stimolo o nella situazione.",
    },
  ],

  relatedWords: ["sensazione", "bias-cognitivo", "subliminale", "intuizione"],

  sourceLinks: {},

  paroliereNote:
    "La percezione è spesso presentata come una finestra sul mondo, ma assomiglia di più a una traduzione: seleziona, accentua, taglia. Dire “questa è solo una percezione” non significa svalutarla, bensì ricordare che tra ciò che accade e ciò che ci appare c'è il filtro di un corpo, di una storia, di un contesto sociale. Nella vita pubblica, giocare con la percezione è diventato un mestiere: cambiare luci, parole, inquadrature per spostare l'attenzione di pochi gradi. Il lemma invita a considerare non solo cosa vediamo, ma anche chi ha preparato la scena.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "percezione — come costruiamo ciò che vediamo",
    description:
      "Che cos'è la percezione tra sensi, cervello e contesto sociale, dal dato grezzo all'immagine mentale con cui abitiamo il mondo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
