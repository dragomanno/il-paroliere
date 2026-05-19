// Il Paroliere — Lemma: eloquenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const eloquenza: LemmaEntry = {
  lemma: "eloquenza",
  slug: "eloquenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Facoltà di esprimersi con chiarezza, forza persuasiva e misura: chi la " +
    "possiede sa scegliere le parole giuste, costruire il ritmo del discorso e " +
    "condurre l'altro senza forzatura. Nella retorica classica era disciplina " +
    "articolata — inventio, dispositio, elocutio — ma nel senso comune resta " +
    "una qualità riconoscibile: non abbondanza di parole, piuttosto la loro " +
    "esattezza.",

  shortDefinition:
    "Arte di esprimersi con precisione e forza persuasiva; non è verbosità, ma scelta giusta delle parole e del ritmo.",

  register: ["comune", "letterario"],
  domains: ["retorica", "comunicazione", "carattere"],

  etymology:
    "Dal latino eloquentia, derivato di eloqui ('parlare con forza, esprimersi'), " +
    "composto di ex- ('fuori') e loqui ('parlare'). L'immagine originaria è del " +
    "discorso che esce verso l'esterno con forza e direzione.",

  examples: [
    "La sua eloquenza non era fatta di parole difficili — era fatta di pause " +
    "al momento giusto.",
    "In aula riusciva a convincere senza alzare la voce: quell'eloquenza " +
    "tranquilla era più efficace di qualsiasi enfasi.",
    "L'eloquenza dei numeri è spesso più persuasiva di qualsiasi discorso.",
    "Aveva imparato che l'eloquenza non è verbosità: le migliori argomentazioni " +
    "sono spesso le più brevi.",
  ],

  synonyms: [
    {
      term: "oratoria",
      register: "letterario",
      context: "arte del discorso pubblico — più formale e codificata dell'eloquenza",
    },
    {
      term: "faconda",
      register: "letterario",
      context: "facilità di parola — con enfasi sulla fluidità più che sulla precisione",
    },
    {
      term: "persuasione",
      register: "comune",
      context: "capacità di convincere — l'obiettivo dell'eloquenza, non il mezzo",
    },
  ],

  antonyms: [
    {
      term: "mutismo",
      register: "comune",
      context: "incapacità o rifiuto di esprimersi",
    },
    {
      term: "verbosità",
      register: "comune",
      context: "abbondanza di parole senza efficacia — il falso sinonimo da evitare",
    },
    {
      term: "goffaggine espressiva",
      register: "comune",
      context: "incapacità di trovare le parole adatte nel momento giusto",
    },
  ],

  relatedWords: [
    "eloquente",
    "eloquentemente",
    "oratoria",
    "retorica",
    "persuasione",
    "parola",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/eloquenza/",
    wiktionary: "https://it.wiktionary.org/wiki/eloquenza",
  },

  paroliereNote:
    "La retorica classica ha costruito intorno all'eloquenza un sistema " +
    "elaboratissimo — ma il suo nucleo è sempre stato semplice: dire la cosa " +
    "giusta, nel modo giusto, al momento giusto. Quello che oggi chiamiamo " +
    "comunicazione efficace i latini lo chiamavano eloquentia, e ci avevano " +
    "dedicato secoli di riflessione. Vale la pena ricordarselo quando si è " +
    "tentati di pensare che il problema sia solo trovare le parole.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Eloquenza — Il Paroliere",
    description:
      "Definizione originale di 'eloquenza': non verbosità, ma esattezza delle " +
      "parole e del ritmo. Dalla retorica classica all'uso comune. Con esempi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
