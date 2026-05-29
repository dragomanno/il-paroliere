// Il Paroliere — Lemma: efficacia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const efficacia: LemmaEntry = {
  lemma: "efficacia",
  slug: "efficacia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Capacità di produrre l'effetto desiderato o di raggiungere l'obiettivo " +
    "prefissato, indipendentemente dalle risorse impiegate. In medicina indica la " +
    "capacità di un trattamento di produrre i risultati attesi in condizioni ideali " +
    "(a differenza dell'effectiveness, che misura i risultati nel mondo reale); in " +
    "diritto, la forza vincolante di un atto o di una norma. Si distingue " +
    "dall'efficienza: l'efficacia misura se si raggiunge il risultato, non come.",

  shortDefinition:
    "Capacità di raggiungere l'obiettivo desiderato — misura del risultato, " +
    "indipendentemente dalle risorse usate.",

  register: ["comune", "tecnico"],
  domains: ["medicina", "diritto", "comunicazione"],

  etymology:
    "Dal latino efficacia, derivato di efficax (che produce effetto, energico), a sua " +
    "volta da efficere (compiere, produrre). La parola è attestata in latino classico " +
    "con il significato di forza produttiva, capacità di incidere.",

  synonyms: [
    { term: "effettività", register: "tecnico", context: "in diritto e farmacologia, sinonimo tecnico preciso" },
    { term: "potenza", register: "comune/tecnico", context: "in senso lato: capacità di produrre un effetto" },
    { term: "incisività", register: "comune", context: "in comunicazione e retorica, la qualità di chi colpisce nel segno" }
  ],

  antonyms: [
    { term: "inefficacia", register: "comune/tecnico", context: "antonimo morfologico diretto" },
    { term: "inutilità", register: "comune", context: "assenza di effetto utile" },
    { term: "impotenza", register: "comune", context: "incapacità strutturale di produrre effetto" }
  ],

  relatedWords: [
    "efficienza",
    "effetto",
    "risultato",
    "performance",
    "rendimento",
    "incisività",
    "potenza"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/efficacia"
  },

  paroliereNote:
    "In farmacologia si usa efficacy per indicare i risultati in trial controllato, " +
    "ed effectiveness per i risultati nel mondo reale: la distinzione non esiste in " +
    "italiano con la stessa nettezza, e questo crea spesso ambiguità nella " +
    "divulgazione scientifica. Efficacia copre entrambi i significati, e questo può " +
    "essere tanto una ricchezza quanto una fonte di confusione.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Efficacia — Il Paroliere",
    description:
      "Capacità di raggiungere l'obiettivo desiderato — misura del risultato, " +
      "indipendentemente dalle risorse usate.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};