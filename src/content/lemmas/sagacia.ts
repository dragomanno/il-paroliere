// Il Paroliere — Lemma: sagacia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sagacia: LemmaEntry = {
  lemma: "sagacia",
  slug: "sagacia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Prontezza di giudizio che unisce acutezza analitica e intuizione pratica: la capacità di leggere una situazione complessa prima che essa si dispieghi del tutto. Non è sinonimo di intelligenza astratta, ma di intelligenza orientata — quella che sa dove guardare, e quando.",

  shortDefinition:
    "Acutezza di giudizio che unisce ragionamento e intuizione pratica per cogliere ciò che sfugge a uno sguardo meno addestrato.",

  register: ["comune", "letterario"],
  domains: ["intelligenza", "carattere"],

  etymology:
    "Dal latino sagacitas, da sagax (perspicace, dal fiuto acuto), collegato a sagire (percepire acutamente).",

  examples: [],

  synonyms: [
      {
        term: "acume",
        register: "comune",
        context: "prontezza intellettuale — più focalizzato sull'analisi che sull'intuizione",
      },
      {
        term: "perspicacia",
        register: "comune",
        context: "capacità di vedere attraverso le apparenze",
      },
      {
        term: "avvedutezza",
        register: "comune",
        context: "prudenza unita a intelligenza pratica — più orientata all'azione",
      },
    ],

  antonyms: [
      {
        term: "ingenuità",
        register: "comune",
        context: "mancanza di esperienza che impedisce di leggere la situazione",
      },
      {
        term: "ottusità",
        register: "comune",
        context: "incapacità di cogliere ciò che è sottile o non esplicito",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sagacia/",
    wiktionary: "https://it.wiktionary.org/wiki/sagacia",
  },

  paroliereNote:
    "La radice latina sagax rimanda al fiuto — al cane da caccia che annusa la pista prima ancora che gli occhi vedano la preda. C'è qualcosa di animalesco, quasi fisico, nell'idea originale di sagacia: non il ragionamento puro, ma il senso che qualcosa è lì, anche prima di saperlo articolare. Questa sfumatura si è persa nell'italiano moderno, ma è ancora rintracciabile nel modo in cui usiamo la parola per chi capisce prima degli altri.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sagacia — Il Paroliere",
    description:
      "Definizione originale di 'sagacia': intelligenza orientata che unisce analisi e intuizione pratica. Con sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
