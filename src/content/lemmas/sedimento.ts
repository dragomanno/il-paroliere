// Il Paroliere — Lemma: sedimento
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sedimento: LemmaEntry = {
  lemma: "sedimento",
  slug: "sedimento",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Materiale solido che si deposita sul fondo di un liquido per effetto della gravità, accumulandosi " +
    "in strati nel tempo — tipico della geologia, dell'idrologia e dell'analisi dei fondali. In senso " +
    "figurato, ciò che resta dopo che un'esperienza, un processo o il tempo stesso si sono posati: " +
    "non visibile in superficie, ma presente come base silenziosa di tutto quello che viene dopo.",

  shortDefinition:
    "Deposito solido sul fondo di un liquido; in senso figurato, ciò che resta in profondità dopo che il tempo o l'esperienza si sono posati.",

  register: ["comune", "letterario"],
  domains: ["geologia", "figurato"],

  etymology:
    "Dal latino sedimentum, derivato di sedere (depositarsi, posarsi). " +
    "La stessa radice di sedere, sede, residuo — tutte parole che portano l'idea di qualcosa che si ferma.",

  examples: [
    "Il sedimento sul fondo della bottiglia non compromette la qualità del vino — anzi.",
    "Anni di convivenza lasciano un sedimento che non si vede ma si sente in ogni conversazione.",
    "I sedimenti lacustri conservano la memoria climatica di millenni — ogni strato è un archivio.",
    "Quello che rimane di un'amicizia finita non è il dolore: è il sedimento, più silenzioso e più pesante.",
  ],

  synonyms: [
    {
      term: "deposito",
      register: "comune",
      context: "materiale accumulato, meno connotato della stratificazione temporale del sedimento",
    },
    {
      term: "residuo",
      register: "comune",
      context: "ciò che rimane dopo un processo, più generico",
    },
    {
      term: "strato",
      register: "tecnico",
      context: "singolo livello di deposizione, componente del sedimento",
    },
  ],

  antonyms: [
    {
      term: "superficie",
      register: "comune",
      context: "la parte visibile e immediata, opposta al sedimento che sta sotto",
    },
    {
      term: "sospensione",
      register: "tecnico",
      context: "particelle che non si sono ancora depositate, ancora in movimento nel liquido",
    },
  ],

  relatedWords: [
    "sedimentare",
    "sedimentazione",
    "strato",
    "deposito",
    "stratificazione",
    "fondale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sedimento/",
    wiktionary: "https://it.wiktionary.org/wiki/sedimento",
  },

  paroliereNote:
    "Il sedimento è una delle metafore più oneste per descrivere come funziona la memoria: " +
    "non un archivio ordinato, non un album di fotografie — ma un deposito lento, stratificato, " +
    "che si forma senza che nessuno lo decida. E come i sedimenti geologici, " +
    "quello che è andato in fondo regge tutto quello che viene sopra.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sedimento — Il Paroliere",
    description:
      "Definizione originale di 'sedimento': deposito solido; in senso figurato, ciò che resta in profondità dopo il tempo. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
