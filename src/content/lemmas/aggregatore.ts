// Il Paroliere — Lemma: aggregatore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const aggregatore: LemmaEntry = {
  lemma: "aggregatore",
  slug: "aggregatore",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Strumento, piattaforma o servizio che raccoglie e organizza in un unico punto " +
    "contenuti, dati o informazioni provenienti da fonti diverse, senza necessariamente " +
    "produrne di propri. Sul web, gli aggregatori di notizie raccolgono titoli e " +
    "anteprime da più testate; gli aggregatori di prezzi confrontano offerte di " +
    "diversi venditori; gli aggregatori di feed riuniscono flussi RSS da più siti. " +
    "In senso più ampio, indica qualsiasi soggetto — persona, organizzazione, " +
    "tecnologia — che svolge la funzione di raccogliere e rendere accessibili " +
    "elementi altrimenti dispersi.",

  shortDefinition:
    "Strumento o servizio che raccoglie contenuti da fonti diverse in un unico punto.",

  register: ["tecnico", "comune"],
  domains: ["informatica", "editoria digitale", "web", "media"],

  etymology:
    "Dal latino aggregare, 'riunire in gregge, raccogliere insieme' " +
    "(composto di ad- e grex, gregis, 'gregge, gruppo'). " +
    "Il suffisso -tore indica l'agente che compie l'azione. " +
    "L'uso digitale si afferma in italiano nei primi anni Duemila, " +
    "con la diffusione dei feed RSS e dei primi servizi di news aggregation.",

  examples: [
    "Un aggregatore di notizie ben costruito non sostituisce le fonti: " +
    "le rende più accessibili senza eliminare la necessità di leggerle davvero.",
    "Il paradosso degli aggregatori è che vivono del lavoro editoriale altrui " +
    "e ne erodono il modello economico.",
    "Il Paroliere è, in un certo senso, un aggregatore di senso: " +
    "raccoglie accezioni, usi e sfumature che normalmente restano dispersi.",
    "Anche il cervello umano funziona come un aggregatore: " +
    "sintetizza segnali eterogenei in percezioni unitarie.",
  ],

  synonyms: [
    {
      term: "raccoglitore",
      register: "comune",
      context: "più generico, non specificamente digitale",
    },
    {
      term: "feed reader",
      register: "tecnico",
      context: "strumento specifico per aggregare flussi RSS/Atom",
    },
    {
      term: "hub",
      register: "tecnico",
      context:
        "punto centrale di raccolta e distribuzione, con enfasi sulla funzione " +
        "di snodo piuttosto che di selezione",
    },
    {
      term: "comparatore",
      register: "comune",
      context:
        "aggregatore specializzato nel confronto di offerte commerciali " +
        "(prezzi, tariffe, prodotti)",
    },
  ],

  antonyms: [
    {
      term: "produttore",
      register: "comune",
      context: "chi genera contenuti originali invece di raccogliere quelli altrui",
    },
    {
      term: "creatore",
      register: "comune",
      context: "con enfasi sul processo creativo e sull'originalità",
    },
  ],

  relatedWords: [
    "aggregazione",
    "feed",
    "RSS",
    "curazione",
    "scraping",
    "metasearch",
    "piattaforma",
    "curation",
    "sindacazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/aggregatore/",
    wiktionary: "https://it.wiktionary.org/wiki/aggregatore",
  },

  paroliereNote:
    "Aggregatore è una parola che definisce anche Il Paroliere stesso — " +
    "con una differenza essenziale: un aggregatore classico raccoglie senza trasformare, " +
    "mentre Il Paroliere raccoglie per reinterpretare. " +
    "Le fonti esterne (Treccani, Wiktionary, ItalWordNet) sono punti di partenza, " +
    "non contenuti da redistribuire. Questa distinzione non è solo legale: " +
    "è la differenza tra un indice e un dizionario, tra una lista e un testo. " +
    "Il valore editoriale nasce nel momento in cui l'aggregazione diventa selezione, " +
    "la selezione diventa commento, e il commento diventa voce propria.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Aggregatore — Il Paroliere",
    description:
      "Definizione originale di 'aggregatore': strumento che raccoglie contenuti " +
      "da fonti diverse. Con etimologia, esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
