// Il Paroliere — Lemma: crawl budget
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const crawlBudget: LemmaEntry = {
  lemma: "crawl budget",
  slug: "crawl-budget",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Quantità di pagine che un motore di ricerca è disposto a scansionare " +
    "su un sito in un determinato arco di tempo. Dipende da due fattori: la " +
    "capacità di crawling — ovvero quanto il server regge le richieste del bot " +
    "— e la domanda di crawling, cioè quanto il motore ritiene quel sito degno " +
    "di attenzione continua. Un crawl budget ridotto può lasciare pagine non " +
    "scansionate e, di conseguenza, non indicizzate.",

  shortDefinition:
    "Numero di pagine che Googlebot è disposto a scansionare su un sito in un dato periodo, determinato da capacità server e rilevanza percepita.",

  register: ["tecnico"],
  domains: ["SEO", "crawling"],

  examples: [
    "Con migliaia di pagine generate dinamicamente, il sito stava bruciando il crawl budget su URL privi di valore.",
    "Ridurre le pagine duplicate e velocizzare il server fu sufficiente ad ampliare il crawl budget.",
    "Monitorare il crawl budget nel GSC è il primo passo per capire perché alcune pagine non vengono indicizzate.",
  ],

  synonyms: [
    {
      term: "budget di scansione",
      register: "tecnico",
      context: "traduzione letterale, poco usata nei contesti professionali italiani",
    },
  ],

  relatedWords: [
    "crawling",
    "Googlebot",
    "indicizzazione",
    "scansione",
    "robots.txt",
    "sitemap",
    "render budget",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/crawl_budget",
  },

  paroliereNote:
    "Crawl budget è uno di quei concetti SEO che sembrano tecnici fino a quando " +
    "non capisci la metafora sottostante: un motore di ricerca ha risorse limitate " +
    "e decide dove investirle. Un sito ben curato viene visitato più spesso; uno " +
    "disordinato viene visitato di rado, o quasi per niente. Non è arbitrio: è " +
    "selezione naturale degli algoritmi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Crawl budget — Il Paroliere",
    description:
      "Definizione originale di 'crawl budget': quante pagine un motore di ricerca " +
      "è disposto a scansionare su un sito. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
