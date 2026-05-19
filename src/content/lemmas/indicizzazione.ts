// Il Paroliere — Lemma: indicizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const indicizzazione: LemmaEntry = {
  lemma: "indicizzazione",
  slug: "indicizzazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Processo con cui un motore di ricerca acquisisce una pagina web nel " +
    "proprio indice, rendendola eleggibile a comparire nei risultati organici. " +
    "Non avviene in modo automatico: presuppone che la pagina sia stata " +
    "scansionata (crawling), elaborata (rendering) e giudicata idonea " +
    "all'inclusione. Una pagina non indicizzata esiste sul web, ma rimane " +
    "invisibile a qualsiasi ricerca.",

  shortDefinition:
    "L'ingresso di una pagina nell'indice di un motore di ricerca: condizione necessaria per comparire nei risultati organici.",

  register: ["tecnico"],
  domains: ["SEO", "motori di ricerca"],

  examples: [
    "La pagina era online da settimane, ma l'indicizzazione non era ancora avvenuta.",
    "Un tag noindex inserito per errore aveva bloccato l'indicizzazione dell'intera sezione blog.",
    "La velocità di indicizzazione dipende dall'autorità del dominio e dalla frequenza di scansione.",
  ],

  synonyms: [
    {
      term: "indicizzamento",
      register: "tecnico",
      context: "forma alternativa, meno diffusa nei testi specializzati italiani",
    },
  ],

  relatedWords: [
    "crawling",
    "rendering",
    "indice",
    "Google Search Console",
    "noindex",
    "sitemap",
    "crawl budget",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/indicizzazione",
  },

  paroliereNote:
    "Indicizzazione è il momento in cui una pagina smette di essere un file " +
    "su un server e diventa parte della memoria del web. Prima non esiste, " +
    "per chi cerca. Dopo, inizia a competere. La soglia è invisibile agli " +
    "occhi, ma decisiva per chiunque lavori con i contenuti digitali.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Indicizzazione — Il Paroliere",
    description:
      "Definizione originale di 'indicizzazione': l'ingresso di una pagina nell'indice " +
      "di Google. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
