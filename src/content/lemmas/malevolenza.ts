// Il Paroliere — Lemma: MALEVOLENZA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malevolenza: LemmaEntry = {
  lemma: "malevolenza",
  slug: "malevolenza",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Disposizione ostile e deliberata verso qualcuno: non antipatia passeggera, non rabbia reattiva — " +
    "ma un orientamento stabile del volere contro. " +
    "Distinta dall'odio per la minore intensità viscerale, e dall'invidia perché non richiede " +
    "un oggetto specifico di confronto. " +
    "Registro formale, con radici nella tradizione etica classica.",
  shortDefinition:
    "Disposizione ostile e intenzionale verso qualcuno; più fredda dell'odio, più generica dell'invidia.",
  register: ["formale", "letterario"],
  domains: ["morale", "psicologia", "etica"],
  etymology:
    "Dal latino malevolentia, composto di male (male) e velle (volere): " +
    "letteralmente il voler male. " +
    "Opposto diretto di benevolenza. " +
    "Termine della tradizione etica e retorica classica, " +
    "già in Cicerone come categoria dell'inimicizia ragionata.",
  examples: [
    "Non era rabbia la sua — era malevolenza: quella disposizione fredda che non passa con il tempo.",
    "Alcune critiche nascono dal merito, altre dalla malevolenza — e di solito si capisce subito quale.",
    "La malevolenza non urla: osserva, aspetta, e quando può, agisce.",
  ],
  synonyms: [
    { term: "ostilità", register: "comune", context: "atteggiamento contrario, meno deliberato e profondo" },
    { term: "malignità", register: "comune-formale", context: "disposizione al male con sfumatura di piacere nel nuocere" },
    { term: "rancore", register: "comune", context: "ostilità radicata in un torto subito, più reattiva" },
    { term: "inimicizia", register: "formale", context: "stato di conflitto aperto tra due parti" },
  ],
  antonyms: [
    { term: "benevolenza", register: "formale", context: "disposizione favorevole e buona verso qualcuno" },
    { term: "bonomia", register: "comune", context: "bontà d'animo spontanea e benevola" },
  ],
  relatedWords: ["benevolenza", "ostilità", "rancore", "malignità", "inimicizia", "odio"],
  sourceLinks: {},
  paroliereNote:
    "La malevolenza è il contrario della benevolenza, ma non è semplicemente il suo negativo. " +
    "La benevolenza è attiva, generosa, si slancia verso gli altri. " +
    "La malevolenza è più paziente: non si slancia, si installa — " +
    "e aspetta il momento giusto per farsi sentire.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Malevolenza — Il Paroliere",
    description:
      "Definizione originale di 'malevolenza': disposizione ostile e intenzionale verso qualcuno, più fredda dell'odio e più generica dell'invidia.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
