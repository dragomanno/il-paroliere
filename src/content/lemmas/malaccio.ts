// Il Paroliere — Lemma: MALACCIO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malaccio: LemmaEntry = {
  lemma: "malaccio",
  slug: "malaccio",
  partOfSpeech: "aggettivo / sostantivo",
  gender: "maschile",
  definition:
    "Qualcosa che va storto, fatto male, di qualità scadente. " +
    "Formato da male più il suffisso peggiorativo -accio, porta un'enfasi espressiva " +
    "che il semplice male non ha. " +
    "Nell'uso popolare, specie toscano, può funzionare da esclamazione autonoma — " +
    "«che malaccio!» — come scarica di disappunto immediato.",
  shortDefinition:
    "Cosa o situazione di qualità scadente o andamento negativo; nell'uso toscano, esclamazione di disappunto.",
  register: ["colloquiale", "espressivo", "popolare"],
  domains: ["valutazione", "uso esclamativo"],
  etymology:
    "Composto di male (dal latino malus) con il suffisso peggiorativo -accio " +
    "(dal latino -aceus, con valore spregiativo nell'italiano popolare). " +
    "Lo stesso meccanismo di tempaccio, affaraccio, giornaccio: " +
    "il suffisso amplifica il giudizio negativo già contenuto nella base.",
  examples: [
    "«Che malaccio, oggi» — cinque parole che in Toscana dicono tutto sul tempo, sull'umore e sulla giornata.",
    "Era un lavoro malaccio, fatto in fretta e senza cura — si vedeva lontano un miglio.",
    "Non è andata proprio bene, anzi: è andata malaccio.",
  ],
  synonyms: [
    { term: "pessimo", register: "comune", context: "giudizio di qualità negativa, più formale" },
    { term: "scadente", register: "comune", context: "di qualità inferiore al minimo accettabile" },
    { term: "malamente", register: "colloquiale", context: "in modo cattivo o insoddisfacente" },
  ],
  antonyms: [
    { term: "benino", register: "colloquiale", context: "abbastanza bene, con sfumatura di soddisfazione moderata" },
    { term: "ottimo", register: "comune", context: "di qualità eccellente" },
  ],
  relatedWords: ["male", "malamente", "malconcio", "tempaccio", "affaraccio"],
  sourceLinks: {},
  paroliereNote:
    "Malaccio è una di quelle parole che esistono per dare sfogo. " +
    "Non analizza, non condanna: esprime. " +
    "Il suffisso -accio fa il lavoro pesante — trasforma una valutazione in un'emozione — " +
    "e per questo l'italiano popolare lo usa così volentieri.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Malaccio — Il Paroliere",
    description:
      "Definizione originale di 'malaccio': cosa o situazione di qualità scadente; esclamazione di disappunto nell'uso toscano e popolare.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
