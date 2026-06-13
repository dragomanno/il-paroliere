// Il Paroliere — Lemma: intimità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const intimita: LemmaEntry = {
  lemma: "intimità",
  slug: "intimita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico", "letterario"],
  domains: ["psicologia", "sociologia", "letteratura", "filosofia"],

  definition:
    "Dimensione relazionale e interiore in cui ci si mostra senza difese, in cui la " +
    "distanza sociale si riduce fino a lasciar vedere ciò che normalmente si tiene " +
    "nascosto — le fragilità, i dubbi, il sé non performativo. L’intimità non è solo " +
    "fisica: è la condivisione di uno spazio mentale ed emotivo che si offre solo a " +
    "chi ha guadagnato la fiducia necessaria per entrarvi. Richiede vulnerabilità " +
    "reciproca ed è uno degli indicatori più solidi della qualità di una relazione.",

  shortDefinition:
    "Spazio relazionale in cui ci si mostra senza difese; richiede fiducia reciproca " +
    "e vulnerabilità, e non si riduce alla sola dimensione fisica.",

  etymology:
    "Dal latino intimitas, da intimus «il più interno, il più profondo», superlativo " +
    "di inter «tra, dentro». L’intimità è letteralmente «l’interno degli interni» — " +
    "il nucleo più riparato del sé che si apre a un altro.",

  examples: [
    "L’intimità vera non si costruisce in un incontro: si costruisce nel tempo, attraverso la scoperta ripetuta che l’altro custodisce ciò che gli abbiamo affidato.",
    "La confusione tra intimità e sessualità è comune ma riduttiva: due persone possono essere intime senza che ci sia nulla di fisico, e fisicamente vicine senza alcuna intimità.",
    "Nelle organizzazioni, uno stile di leadership che crea spazio per una certa intimità — per la condivisione delle difficoltà, non solo dei successi — ottiene più fiducia.",
    "La perdita di intimità in una relazione non è sempre un fallimento improvviso: spesso è un’erosione lenta, fatta di conversazioni che non avvengono più.",
  ],

  synonyms: [
    { term: "confidenza", register: "comune", note: "Più comportamentale: il condividere pensieri e segreti con qualcuno di fiducia." },
    { term: "vicinanza", register: "comune-psicologico", note: "Più generico: può indicare prossimità fisica o emotiva senza la profondità dell’intimità." },
  ],

  antonyms: [
    { term: "distanza emotiva", register: "psicologico", note: "Il mantenere una barriera che impedisce la condivisione del sé più interno." },
    { term: "freddezza", register: "comune", note: "L’assenza di calore e apertura nelle relazioni." },
  ],

  relatedWords: ["riserbo", "fiducia", "ritrosia", "pudicizia", "vergogna"],
  sourceLinks: {},

  paroliereNote:
    "L’intimità è ciò che distingue una relazione da una transazione. Non è esclusiva " +
    "delle relazioni romantiche: si può avere intimità con un amico, con un terapeuta, " +
    "persino con un libro. Ciò che la definisce non è il contenuto — quello che si " +
    "condivide — ma la qualità dell’ascolto: la certezza che ciò che diamo non verrà " +
    "usato contro di noi, non verrà banalizzato, non verrà dimenticato troppo in " +
    "fretta. In questo senso, l’intimità è una forma di fiducia estrema — la più " +
    "rischiosa e la più necessaria.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "intimità — lo spazio relazionale senza difese, tra psicologia e letteratura",
    description: "Che cos’è l’intimità: definizione psicologica, differenza da sessualità e vicinanza, e perché è l’indicatore più solido della qualità di una relazione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
