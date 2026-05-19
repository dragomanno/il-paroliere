// Il Paroliere — Lemma: posizionamento
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const posizionamento: LemmaEntry = {
  lemma: "posizionamento",
  slug: "posizionamento",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "In SEO, la posizione che una pagina web occupa nei risultati organici " +
    "di un motore di ricerca per una determinata query — espressa come ranking " +
    "e continuamente soggetta a variazioni degli algoritmi. In marketing " +
    "strategico, la percezione che un brand o prodotto occupa nella mente del " +
    "consumatore rispetto ai concorrenti: uno spazio cognitivo costruito nel " +
    "tempo, non dichiarato.",

  shortDefinition:
    "Posto conquistato: in SEO, il ranking organico di una pagina; in marketing, il luogo mentale di un brand rispetto ai concorrenti.",

  register: ["tecnico", "comune"],
  domains: ["SEO", "marketing"],

  examples: [
    "Il posizionamento sulla prima pagina di Google per questa keyword era l'obiettivo da mesi.",
    "Il posizionamento del brand non si costruisce con uno slogan: si costruisce con ogni punto di contatto.",
    "Dopo l'aggiornamento dell'algoritmo, il posizionamento di molte pagine è cambiato in modo significativo.",
  ],

  synonyms: [
    {
      term: "ranking",
      register: "tecnico",
      context: "usato quasi sempre in italiano senza traduzione nei contesti SEO",
    },
    {
      term: "collocazione",
      register: "comune",
      context: "termine generico, privo di connotazione tecnica specifica",
    },
  ],

  antonyms: [
    {
      term: "invisibilità organica",
      register: "tecnico",
      context: "assenza di posizionamento rilevante nelle SERP",
    },
  ],

  relatedWords: [
    "ranking",
    "SERP",
    "query",
    "keyword",
    "brand positioning",
    "visibilità organica",
    "algoritmo",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/posizionamento",
  },

  paroliereNote:
    "Posizionamento è una di quelle parole che vivono una doppia vita: tecnica " +
    "nel gergo SEO, strategica nel linguaggio del marketing. In entrambi i casi " +
    "porta con sé un'idea fondamentale: il posto non si occupa per decreto, si " +
    "conquista. E si perde altrettanto facilmente, se non viene difeso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Posizionamento — Il Paroliere",
    description:
      "Definizione originale di 'posizionamento': ranking SEO organico e percezione " +
      "strategica del brand. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
