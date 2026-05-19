// Il Paroliere — Lemma: hreflang
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const hreflang: LemmaEntry = {
  lemma: "hreflang",
  slug: "hreflang",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Attributo HTML inserito nell'elemento <link> del markup di pagina, che " +
    "comunica ai motori di ricerca la lingua — e, dove necessario, la variante " +
    "geografica — di un URL e le sue versioni equivalenti in altre lingue o " +
    "mercati. Usato correttamente previene la sovrapposizione di contenuto " +
    "duplicato tra versioni linguistiche dello stesso sito e orienta il motore " +
    "verso la variante più pertinente per ciascun utente.",

  shortDefinition:
    "Attributo HTML che indica ai motori di ricerca la lingua e la variante geografica di una pagina e le sue versioni equivalenti.",

  register: ["tecnico"],
  domains: ["SEO", "internazionalizzazione"],

  examples: [
    "Senza hreflang, Google mostrava la versione italiana del sito anche agli utenti tedeschi.",
    "L'implementazione dell'hreflang richiede che ogni variante linguistica dichiari tutte le altre.",
    "Un errore nell'hreflang non blocca il sito, ma vanifica buona parte del lavoro di localizzazione.",
  ],

  relatedWords: [
    "internazionalizzazione",
    "localizzazione",
    "lingua alternativa",
    "SEO internazionale",
    "canonicalizzazione",
    "sitemap multilingua",
    "x-default",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/hreflang",
  },

  paroliereNote:
    "Hreflang è una delle istruzioni SEO più facili da sbagliare. Richiede " +
    "reciprocità: se la versione italiana dichiara la versione inglese, quella " +
    "inglese deve dichiarare quella italiana. Un'omissione in un punto rompe " +
    "l'intera catena. Non è intuitivo, ma una volta capito il meccanismo " +
    "funziona con precisione chirurgica.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Hreflang — Il Paroliere",
    description:
      "Definizione originale di 'hreflang': l'attributo HTML per la SEO internazionale " +
      "e la gestione delle versioni linguistiche. Con esempi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
