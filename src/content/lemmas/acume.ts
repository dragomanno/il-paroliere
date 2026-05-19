// Il Paroliere — Lemma: acume
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const acume: LemmaEntry = {
  lemma: "acume",
  slug: "acume",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Capacità di cogliere con precisione e rapidità ciò che sfugge a uno sguardo " +
    "ordinario: le connessioni non evidenti, le conseguenze che altri non vedono " +
    "ancora, il punto esatto dove una questione si apre o si chiude. Non è " +
    "intelligenza generica — è il taglio affilato del giudizio.",

  shortDefinition:
    "Prontezza di giudizio che coglie connessioni nascoste e anticipa ciò che altri non vedono ancora.",

  register: ["comune", "formale"],
  domains: ["intelletto", "carattere", "giudizio"],

  etymology:
    "Dal latino acumen, derivato di acuere, 'rendere acuto, affilare'. La stessa " +
    "radice di 'acuto', 'acuire', 'acutezza'. La metafora originaria è quella " +
    "della punta affilata che penetra dove gli strumenti smussati non arrivano.",

  examples: [
    "Con quell'acume che la distingueva, aveva individuato il problema prima " +
    "ancora che si manifestasse.",
    "Non era il più esperto della sala, ma aveva un acume pratico che valeva " +
    "dieci anni di esperienza.",
    "L'acume del suo giudizio era riconoscibile anche nelle piccole cose: " +
    "sapeva sempre dove guardare.",
    "Ci vuole acume per leggere i dati giusti nel momento giusto — non basta " +
    "avere accesso alle informazioni.",
  ],

  synonyms: [
    {
      term: "perspicacia",
      register: "formale",
      context: "simile, con più enfasi sulla capacità di vedere attraverso le apparenze",
    },
    {
      term: "sagacia",
      register: "formale",
      context: "giudizio acuto con componente pratica — più orientato all'azione",
    },
    {
      term: "intuito",
      register: "comune",
      context: "capacità di capire senza ragionamento esplicito — meno analitico dell'acume",
    },
    {
      term: "intelligenza",
      register: "comune",
      context: "termine più ampio e generico — l'acume è una sua forma specifica",
    },
  ],

  antonyms: [
    {
      term: "ottusità",
      register: "comune",
      context: "incapacità di cogliere sfumature o connessioni non evidenti",
    },
    {
      term: "superficialità",
      register: "comune",
      context: "tendenza a fermarsi alla superficie, senza approfondire",
    },
  ],

  relatedWords: [
    "acuto",
    "acuire",
    "perspicacia",
    "sagacia",
    "intuito",
    "giudizio",
    "intelligenza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/acume/",
    wiktionary: "https://it.wiktionary.org/wiki/acume",
  },

  paroliereNote:
    "L'acume non è una virtù silenziosa: quando c'è, si vede. Non perché chi " +
    "lo possiede lo esibisca, ma perché il suo effetto è visibile — nella " +
    "domanda giusta posta al momento giusto, nel dettaglio notato da tutti " +
    "tranne uno, nel silenzio prima della risposta esatta. È una delle qualità " +
    "intellettuali più difficili da insegnare e più immediate da riconoscere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Acume — Il Paroliere",
    description:
      "Definizione originale di 'acume': il taglio affilato del giudizio, " +
      "capacità di cogliere ciò che sfugge agli altri. Con esempi, sinonimi ed etimologia latina.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
