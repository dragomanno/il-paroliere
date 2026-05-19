// Il Paroliere — Lemma: canonicalizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const canonicalizzazione: LemmaEntry = {
  lemma: "canonicalizzazione",
  slug: "canonicalizzazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Operazione con cui si indica a un motore di ricerca quale URL debba " +
    "essere trattato come versione ufficiale di una pagina, quando contenuti " +
    "identici o molto simili sono raggiungibili da più indirizzi. Si implementa " +
    "tramite l'attributo rel=canonical nel markup HTML o tramite HTTP header. " +
    "In assenza di canonicalizzazione, il valore SEO rischia di frammentarsi " +
    "tra varianti della stessa pagina, indebolendone il posizionamento complessivo.",

  shortDefinition:
    "Indicare al motore di ricerca quale URL è la versione ufficiale di una pagina, evitando che contenuti duplicati ne disperdano il valore SEO.",

  register: ["tecnico"],
  domains: ["SEO", "architettura web"],

  examples: [
    "Senza canonicalizzazione, le versioni HTTP e HTTPS della stessa pagina si cannibalizzavano a vicenda.",
    "Il tag rel=canonical è la forma più comune di canonicalizzazione, ma non è l'unica.",
    "Una canonicalizzazione sbagliata può consolidare il valore SEO sull'URL sbagliato.",
  ],

  synonyms: [
    {
      term: "canonicalization",
      register: "tecnico",
      context: "termine inglese originale, usato frequentemente anche in italiano",
    },
  ],

  relatedWords: [
    "rel=canonical",
    "URL canonico",
    "contenuto duplicato",
    "hreflang",
    "redirect 301",
    "consolidamento",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/canonicalizzazione",
  },

  paroliereNote:
    "Canonicalizzazione è la parola tecnica per un problema antico: quando " +
    "la stessa cosa si può raggiungere da strade diverse, qualcuno deve decidere " +
    "qual è quella principale. Sul web quella decisione ha conseguenze dirette " +
    "sul posizionamento. Google tende a rispettarla, ma non è obbligato — " +
    "trattarla come suggerimento, non come comando, è la chiave per usarla bene.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Canonicalizzazione — Il Paroliere",
    description:
      "Definizione originale di 'canonicalizzazione': come si indica l'URL ufficiale " +
      "di una pagina ai motori di ricerca. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
