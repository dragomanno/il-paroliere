// Il Paroliere — Lemma: saturazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const saturazione: LemmaEntry = {
  lemma: "saturazione",
  slug: "saturazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In senso chimico-fisico, la condizione di un sistema che ha raggiunto la " +
    "massima capacità di contenere o assorbire una sostanza in determinate " +
    "condizioni: una soluzione satura è quella in cui il solvente non può sciogliere " +
    "ulteriore soluto; un'aria satura di umidità è quella in cui la percentuale di " +
    "vapore acqueo ha raggiunto il 100% di umidità relativa, condizione che precede " +
    "la precipitazione. Un caso particolarmente rilevante riguarda la concentrazione " +
    "di gas in ambienti chiusi o poco aerati: quando un gas — anidride carbonica " +
    "(CO₂), metano (CH₄), monossido di carbonio (CO) — raggiunge una concentrazione " +
    "tale da superare certi valori soglia, si producono effetti che vanno dal disagio " +
    "fisiologico all'asfissia, fino al rischio di esplosione. Il metano e il gas " +
    "propano/butano hanno un limite inferiore di esplosività (LIE): se la " +
    "concentrazione nell'aria supera quella soglia (per il metano circa il 5% in " +
    "volume), qualsiasi scintilla può innescare un'esplosione deflagrante. In senso " +
    "figurato e psicologico, indica lo stato di chi ha esaurito la propria soglia " +
    "di tolleranza verso una situazione, una persona o un contesto ripetuto fino " +
    "all'esaurimento: «sono saturo», «ho raggiunto la saturazione». Come il solvente " +
    "che non riesce più a sciogliere nulla, la persona satura non riesce più ad " +
    "assorbire ulteriori stimoli o pressioni.",

  shortDefinition:
    "Condizione di massimo riempimento di un sistema chimico o fisico; in senso figurato, lo stato di chi ha esaurito la propria soglia di tolleranza.",

  register: ["tecnico-scientifico", "comune", "figurato"],
  domains: ["chimica", "fisica", "meteorologia", "psicologia", "società"],

  etymology:
    "Dal latino saturatio, -onis, derivato di saturare («riempire fino all'eccesso»), " +
    "da satur («pieno, sazio»). Stesso campo semantico di sazio, saziare, insaziabile.",

  examples: [
    "L'umidità relativa al 100% indica la saturazione dell'aria: l'acqua non può più evaporare e tende a condensare.",
    "La saturazione del mercato degli smartphone ha rallentato le vendite: tutti ce l'hanno già.",
    "Dopo tre ore di riunione, aveva raggiunto la saturazione: non riusciva più ad ascoltare nulla.",
    "La cantina non era areata da mesi: la fermentazione del vino aveva saturato l'aria di CO₂ fino a rendere pericoloso l'accesso senza maschera.",
    "I vigili del fuoco intervennero prima che la concentrazione di gas raggiungesse il limite di saturazione esplosiva: un'altra mezz'ora e la scintilla dell'interruttore avrebbe fatto saltare il palazzo.",
  ],

  synonyms: [
    {
      term: "riempimento totale",
      register: "tecnico-scientifico",
      context: "senso fisico-chimico",
    },
    {
      term: "punto di saturazione",
      register: "tecnico-scientifico",
      context: "soglia critica",
    },
    {
      term: "esaurimento",
      register: "comune",
      context: "senso psicologico",
    },
    {
      term: "insofferenza",
      register: "comune",
      context: "senso psicologico figurato",
    },
  ],

  antonyms: [
    {
      term: "assorbimento",
      register: "tecnico-scientifico",
      context: "capacità residua",
    },
    {
      term: "freschezza",
      register: "comune",
      context: "senso figurato contrario",
    },
  ],

  relatedWords: [
    "polarizzazione",
    "soluzione",
    "umidità relativa",
    "punto di rugiada",
    "mercato saturo",
    "burnout",
    "limite inferiore di esplosività",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/saturazione/",
    wiktionary: "https://it.wiktionary.org/wiki/saturazione",
  },

  paroliereNote:
    "Saturazione è una di quelle parole che funzionano bene sia nel laboratorio sia " +
    "nella cucina. L'immagine fisica — il solvente che non può più sciogliere nulla " +
    "— trasferita al piano psicologico diventa immediatamente comprensibile: quando " +
    "siamo \"saturi\" di qualcosa, non riusciamo più ad \"assorbire\" quello stimolo. " +
    "L'italiano ha questa parola; l'inglese usa fed up, che letteralmente significa " +
    "\"nutriti fino in fondo\". Tutte le espressioni giocano sull'immagine del " +
    "contenitore pieno. Segnaliamo anche l'uso in marketing: un mercato saturo è " +
    "un mercato in cui tutta la domanda potenziale è già servita e non c'è spazio " +
    "per nuovi attori — un concetto fondamentale per chi lavora in business " +
    "development o nella pianificazione di prodotto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Saturazione — definizione scientifica e figurata | Il Paroliere",
    description:
      "Saturazione in chimica, meteorologia e nella vita quotidiana. Dal solvente saturo all'«essere saturi» di qualcosa. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
