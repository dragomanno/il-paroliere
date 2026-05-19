// Il Paroliere — Lemma: affabile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const affabile: LemmaEntry = {
  lemma: "affabile",
  slug: "affabile",
  partOfSpeech: "aggettivo",

  definition:
    "Di persona che sa rivolgere agli altri una cordialità senza sforzo: aperta, non costruita, capace " +
    "di mettere a proprio agio chi si ha davanti senza nulla concedere all'adulazione. L'affabilità è " +
    "una qualità relazionale — non una tecnica di compiacenza — perché nasce da una disposizione genuina " +
    "all'incontro, non dal desiderio di piacere a tutti i costi.",

  shortDefinition:
    "Cordiale con gli altri in modo naturale e senza affettazione, con una facilità nell'accogliere che non ha nulla della compiacenza.",

  register: ["comune", "formale"],
  domains: ["carattere", "relazioni sociali"],

  etymology:
    "Dal latino affabilis, derivato di affari, 'parlare a qualcuno' — composto di ad- e fari (parlare). " +
    "L'affabile è letteralmente chi si lascia avvicinare, chi è accessibile alla parola.",

  examples: [
    "Era affabile con tutti, senza che questo sembrasse uno sforzo o un calcolo.",
    "La sua affabilità non era debolezza: sapeva anche essere diretto quando serviva.",
    "Un professionista affabile non è necessariamente meno rigoroso — spesso è il contrario.",
    "Si avvicinò con quell'affabilità naturale che metteva subito a proprio agio i nuovi arrivati.",
  ],

  synonyms: [
    {
      term: "cordiale",
      register: "comune",
      context: "calore nei rapporti, meno connotato della qualità relazionale profonda dell'affabile",
    },
    {
      term: "amabile",
      register: "comune",
      context: "degno di essere amato, con sfumatura più estetica",
    },
    {
      term: "gioviale",
      register: "comune",
      context: "allegro e socievole, più superficiale dell'affabile",
    },
  ],

  antonyms: [
    {
      term: "burbero",
      register: "comune",
      context: "scontroso nei modi, difficile da avvicinare",
    },
    {
      term: "scostante",
      register: "comune",
      context: "che allontana invece di accogliere",
    },
  ],

  relatedWords: [
    "affabilità",
    "affabilmente",
    "cordiale",
    "accessibile",
    "amabile",
    "socievolezza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/affabile/",
    wiktionary: "https://it.wiktionary.org/wiki/affabile",
  },

  paroliereNote:
    "L'etimologia di affabile — chi si lascia avvicinare, chi è accessibile alla parola — " +
    "dice già molto sulla qualità che descrive: non è un gesto attivo verso l'altro, " +
    "ma una disponibilità a essere raggiunti. È forse per questo che l'affabilità autentica " +
    "non si può simulare a lungo: richiede che la porta sia davvero aperta, non solo socchiusa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Affabile — Il Paroliere",
    description:
      "Definizione originale di 'affabile': cordiale in modo naturale, senza affettazione né compiacenza. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
