// Il Paroliere — Lemma: passione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const passione: LemmaEntry = {
  lemma: "passione",
  slug: "passione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune"],
  domains: ["psicologia", "relazioni", "arte"],

  definition: "Coinvolgimento intenso che concentra desiderio, affetto o interesse su una persona, un’attività, un’idea. Può essere energia creativa e scelta coltivata, ma anche diventare esclusiva o dolorosa; in una relazione si distingue dal semplice → legame perché porta con sé maggiore ardore e partecipazione.",

  shortDefinition: "Coinvolgimento intenso e partecipe verso qualcuno, qualcosa o un’attività.",

  etymology: "Dal latino tardo passio, «sofferenza, patimento», da pati, «patire»; il significato moderno conserva la traccia di un sentire che coinvolge profondamente.",

  examples: [
    "Parla di fotografia con una passione che fa venire voglia di guardare meglio.",
    "Tra loro c’era passione, ma mancava il tempo per costruire fiducia.",
    "Ha trasformato la passione per il restauro in un lavoro paziente e preciso."
  ],

  synonyms: [
    { term: "ardore", register: "letterario", note: "Evidenzia il calore e l’intensità, spesso in ambito amoroso o civile." },
    { term: "trasporto", register: "comune", note: "Rimanda a un coinvolgimento emotivo che trascina verso qualcuno o qualcosa." },
    { term: "interesse", register: "comune", note: "È più misurato e non implica l’intensità affettiva della passione." }
  ],

  antonyms: [
    { term: "indifferenza", register: "comune", note: "Manca di partecipazione emotiva o di interesse vivo." },
    { term: "distacco", register: "comune", note: "Segnala una posizione emotivamente meno coinvolta, non necessariamente ostile." }
  ],

  relatedWords: ["desiderio", "aspirazione", "volontà", "slancio", "tensione", "frustrazione", "relazione", "legame", "dipendenza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/passione"
  },

  paroliereNote: "La passione dà calore a un interesse, ma non garantisce misura. Quando smette di lasciare spazio all’altro o al resto della vita, il confine con la → dipendenza merita attenzione; non sono però la stessa cosa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Passione — definizione, sinonimi, uso | Il Paroliere",
    description: "Che cos’è la passione: definizione originale, sinonimi ed esempi d’uso. Scopri le differenze con interesse, desiderio, legame, trasporto e dipendenza."
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24"
};
