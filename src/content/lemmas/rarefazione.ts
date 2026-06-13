// Il Paroliere — Lemma: rarefazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rarefazione: LemmaEntry = {
  lemma: "rarefazione",
  slug: "rarefazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "letterario"],
  domains: ["fisica", "estetica", "musica"],

  definition:
    "In fisica, diminuzione della densità di un gas o di una sostanza; in estetica, " +
    "riduzione degli elementi al minimo indispensabile per creare un effetto di spazio, " +
    "silenzio o essenzialità. La rarefazione estetica non è impoverimento ma selezione: " +
    "ogni elemento che rimane guadagna peso perché gli altri sono stati tolti.",

  shortDefinition:
    "Riduzione della densità — in fisica o in estetica; l’arte di ottenere effetto attraverso l’essenziale.",

  etymology:
    "Dal latino rarefacere “rendere raro, diradare”, composto da rarus “rado, scarso” " +
    "e facere “fare”. La stessa radice di “raro” e “rarità”.",

  examples: [
    "La rarefazione degli elementi in una composizione musicale minimalista non impoverisce l’ascolto: lo acuisce, perché ogni suono porta il peso di ciò che non c’è.",
    "Nelle fotografie di Hiroshi Sugimoto, la rarefazione è tecnica e filosofia insieme: lunghe esposizioni che dissolvono il dettaglio fino all’essenza.",
    "Una prosa rarefatta non è una prosa povera — è una prosa che ha già fatto il lavoro di eliminare tutto ciò che il lettore non aveva bisogno di leggere.",
    "Salendo in quota, la rarefazione dell’aria produce effetti precisi: meno ossigeno, meno resistenza, meno protezione dall’irraggiamento solare.",
  ],

  synonyms: [
    { term: "diradamento", register: "comune", note: "Più concreto: lo spaziarsi fisico degli elementi." },
    { term: "essenzializzazione", register: "tecnico-letterario", note: "Neologismo d’uso critico: il processo di riduzione all’essenziale." },
  ],

  antonyms: [
    { term: "densità", register: "tecnico-comune", note: "Il contrario fisico e metaforico: l’accumulo, la saturazione." },
    { term: "saturazione", register: "tecnico-comune", note: "Il punto oltre il quale non si può aggiungere — l’opposto dell’aria tra gli elementi." },
  ],

  relatedWords: ["leggerezza", "levità", "impalpabilità", "spazio", "respiro"],

  paroliereNote:
    "La rarefazione è uno degli strumenti più difficili da padroneggiare perché richiede " +
    "di resistere all’impulso di aggiungere. In architettura, musica, scrittura, fotografia: " +
    "togliere è più rischioso che aggiungere, perché espone ciò che rimane a una responsabilità " +
    "totale. Ogni elemento in una composizione rarefatta deve guadagnarsi il suo posto.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "rarefazione — significato in fisica, estetica e critica d’arte",
    description: "Rarefazione: dal fenomeno fisico alla categoria estetica del minimalismo, con esempi da musica, fotografia e letteratura.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
