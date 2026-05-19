// Il Paroliere — Lemma: flemma
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const flemma: LemmaEntry = {
  lemma: "flemma",
  slug: "flemma",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Disposizione interiore che rallenta senza fermare — chi ha flemma non ignora l'urgenza altrui, " +
    "semplicemente vive a un ritmo che non si lascia dettare dall'esterno. Non è pigrizia né indifferenza: " +
    "è una misura propria, spesso più utile del panico collettivo. Nell'umorismo antico era uno dei " +
    "quattro umori corporei, legato alla freddezza e alla lentezza fisiologica.",

  shortDefinition:
    "Calma strutturale che non si fa dettare il passo dall'urgenza altrui; nel lessico antico, uno dei quattro umori corporei.",

  register: ["comune"],
  domains: ["carattere", "comportamento"],

  etymology:
    "Dal greco phlegma, 'fiamma, infiammazione' — e poi, per paradosso, 'muco', uno degli umori " +
    "freddi del corpo secondo la medicina ippocratica. Il senso moderno di calma e lentezza deriva " +
    "dall'umore flemmatico, considerato freddo e umido.",

  examples: [
    "Gestì la crisi con una flemma che agli altri sembrò incomprensibile e a lui perfettamente naturale.",
    "Non era lentezza la sua: era flemma — la differenza stava nel fatto che sapeva benissimo cosa stava facendo.",
    "La flemma britannica è un cliché, ma come tutti i cliché ha un fondo di osservazione vera.",
    "Rispose con flemma a domande che avrebbero fatto perdere la pazienza a chiunque altro.",
  ],

  synonyms: [
    {
      term: "calma",
      register: "comune",
      context: "più generico, non implica la qualità strutturale della flemma",
    },
    {
      term: "sangue freddo",
      register: "comune",
      context: "calma in situazioni di pericolo, con sfumatura più eroica",
    },
    {
      term: "imperturbabilità",
      register: "formale",
      context: "impossibilità di essere turbati, più assoluta della flemma",
    },
  ],

  antonyms: [
    {
      term: "impulsività",
      register: "comune",
      context: "tendenza a reagire prima di elaborare",
    },
    {
      term: "frenesia",
      register: "comune",
      context: "agitazione accelerata, opposto diretto del ritmo flemmatico",
    },
  ],

  relatedWords: [
    "flemmatico",
    "flemmaticamente",
    "calma",
    "sangue freddo",
    "umori",
    "imperturbabilità",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/flemma/",
    wiktionary: "https://it.wiktionary.org/wiki/flemma",
  },

  paroliereNote:
    "L'etimologia di flemma è un piccolo paradosso: la parola greca originale significava fiamma, " +
    "infiammazione — poi, attraverso la medicina degli umori, è diventata il contrario. " +
    "Oggi descrive esattamente l'opposto del fuoco: una qualità fredda, lenta, impermeabile all'urgenza. " +
    "È uno di quei casi in cui la storia di una parola dice più della parola stessa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Flemma — Il Paroliere",
    description:
      "Definizione originale di 'flemma': calma strutturale che non si fa dettare il passo dall'esterno. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
