// Il Paroliere — Lemma: abbagliare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const abbagliare: LemmaEntry = {
  lemma: "abbagliare",
  slug: "abbagliare",
  partOfSpeech: "verbo transitivo",

  definition:
    "Colpire la vista con una luce così intensa da togliere per un momento la capacità di " +
    "distinguere — come il sole che entra d'improvviso in una stanza buia. Per estensione, " +
    "sedurre o disorientare con qualcosa di eccessivo: una bellezza che abbaglia non si vede " +
    "davvero, si subisce.",

  shortDefinition:
    "Colpire la vista con luce così intensa da impedirla; per estensione, sedurre o disorientare con qualcosa di eccessivo.",

  register: ["comune", "letterario"],
  domains: ["percezione", "figurato"],

  etymology:
    "Da ab- (rafforzativo) e un derivato di bàglio o bagliore, a sua volta probabile connessione " +
    "con il latino badius (rossastro, lucente). Il prefisso intensifica l'azione: non illuminare, " +
    "ma sopraffare con la luce.",

  examples: [
    "Il sole all'uscita dal tunnel ci abbagliò per qualche secondo, abbastanza da perdere l'orientamento.",
    "Abbagliò tutti con quella presentazione — peccato che il prodotto non reggesse al confronto.",
    "Certi sorrisi abbagliano proprio perché non lasciano il tempo di guardare bene.",
  ],

  synonyms: [
    {
      term: "accecare",
      register: "comune",
      context: "privare la vista, con effetto più permanente o drammatico",
    },
    {
      term: "affascinare",
      register: "comune",
      context: "nel senso figurato, con meno connotazione di disorientamento",
    },
    {
      term: "stregare",
      register: "colloquiale",
      context: "sedurre completamente, con sfumatura irrazionale",
    },
  ],

  antonyms: [
    {
      term: "illuminare",
      register: "comune",
      context: "portare luce in modo che favorisce la visione, non la ostacola",
    },
    {
      term: "schiarire",
      register: "comune",
      context: "rendere più chiaro, leggibile, comprensibile",
    },
  ],

  relatedWords: [
    "bagliore",
    "lampo",
    "fulgore",
    "guizzo",
    "luminosità",
    "barlume",
    "oscurità",
    "penombra",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/abbagliare/",
    wiktionary: "https://it.wiktionary.org/wiki/abbagliare",
  },

  paroliereNote:
    "Abbagliare è uno di quei verbi che porta dentro di sé una morale implicita: chi abbaglia " +
    "toglie la vista, non la dà. La doppiezza tra il fenomeno fisico (la luce troppo intensa) e " +
    "quello relazionale (la seduzione che disorienta) è raramente così precisa in un'unica parola. " +
    "Vale la pena chiedersi: quante volte ci siamo fatti abbagliare da qualcosa che a guardarla con " +
    "calma non era poi così luminosa?",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Abbagliare — definizione ed etimologia | Il Paroliere",
    description:
      "Abbagliare: colpire la vista con luce eccessiva, sedurre o disorientare. " +
      "Definizione originale, etimologia e uso figurato.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
