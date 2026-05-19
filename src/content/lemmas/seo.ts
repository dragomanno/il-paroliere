// Il Paroliere — Lemma: SEO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const seo: LemmaEntry = {
  lemma: "SEO",
  slug: "seo",
  partOfSpeech: "sostantivo",
  gender: "invariabile",

  definition:
    "Acronimo di Search Engine Optimization. Come disciplina (la SEO): campo " +
    "del marketing digitale dedicato a migliorare la visibilità organica di un " +
    "sito nei risultati di un motore di ricerca, agendo su struttura tecnica, " +
    "contenuto e autorità, senza ricorrere a inserzioni a pagamento. — Come " +
    "professionista (il/la SEO): chi esercita questa disciplina, leggendo " +
    "algoritmi, ottimizzando pagine e costruendo nel tempo la rilevanza di un " +
    "sito per chi lo cerca.",

  shortDefinition:
    "La disciplina che lavora sulla visibilità organica; il professionista che la pratica.",

  register: ["tecnico", "comune"],
  domains: ["SEO", "marketing digitale"],

  examples: [
    "La SEO non è una scorciatoia: è un lavoro continuativo che dà risultati nel tempo.",
    "Ha lavorato come SEO per dieci anni prima di aprire la sua agenzia.",
    "La SEO tecnica e la SEO editoriale richiedono competenze diverse ma devono procedere insieme.",
    "Un buon SEO non ottimizza solo per Google: ottimizza per le persone che usano Google.",
  ],

  synonyms: [
    {
      term: "ottimizzazione per i motori di ricerca",
      register: "tecnico",
      context: "traduzione letterale, usata in contesti formali o istituzionali",
    },
    {
      term: "search optimization",
      register: "tecnico",
      context: "variante abbreviata in inglese, comune nei contesti internazionali",
    },
  ],

  antonyms: [
    {
      term: "SEA",
      register: "tecnico",
      context: "Search Engine Advertising — visibilità a pagamento, opposta all'organica",
    },
  ],

  relatedWords: [
    "SEM",
    "SERP",
    "keyword",
    "ranking",
    "backlink",
    "algoritmo",
    "crawl budget",
    "indicizzazione",
    "posizionamento",
    "content marketing",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/SEO",
  },

  paroliereNote:
    "SEO ha la particolarità grammaticale di essere sia nome di una disciplina " +
    "che nome di una professione — e in italiano la distinzione si sente: «la " +
    "SEO» (femminile, la disciplina) e «il SEO» o «la SEO» (il professionista, " +
    "invariabile sul genere del referente). È forse l'unico termine tecnico " +
    "del marketing digitale che ha costruito un'identità professionale propria, " +
    "con comunità, certificazioni, conferenze e un dibattito permanente su " +
    "cosa significhi farlo bene.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "SEO — Il Paroliere",
    description:
      "Definizione originale di 'SEO': la disciplina della visibilità organica " +
      "e il professionista che la pratica. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
