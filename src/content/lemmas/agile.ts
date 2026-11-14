// Il Paroliere — Lemma: agile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const agile: LemmaEntry = {
  lemma: "agile",
  slug: "agile",
  partOfSpeech: "aggettivo",
  gender: "maschile e femminile",
  definition: "Che si muove con facilità, prontezza e scioltezza, nel corpo o nella mente. In senso figurato, detto di organizzazioni, processi e procedure, capaci di adattarsi in fretta al cambiamento senza appesantirsi. In informatica e nel management, con la maiuscola o come sostantivo, indica la famiglia di metodi di sviluppo che procedono per cicli brevi, rilasci frequenti e collaborazione stretta con il cliente.",
  shortDefinition: "Che si muove con prontezza e scioltezza; detto di processi e organizzazioni, che si adatta in fretta al cambiamento.",
  register: [
    "comune",
    "tecnico",
  ],
  domains: [
    "lingua comune",
    "informatica",
    "management",
  ],
  etymology: "Dal latino agilis «che si muove facilmente», derivato di agere «muovere, spingere, fare». Il senso metodologico arriva dall'inglese agile: nel febbraio 2001, a Snowbird, nello Utah, diciassette sviluppatori firmarono il Manifesto for Agile Software Development, che metteva le persone e il software funzionante davanti alle procedure e alla documentazione. In italiano l'aggettivo è antico; il tecnicismo è un prestito di ritorno.",
  examples: [
    "Nonostante gli ottant'anni, sale le scale della torre più agile di noi.",
    "Il comune ha reso più agile la richiesta dei permessi: un modulo online invece di tre sportelli.",
    "Il team lavora in modalità agile: ogni due settimane mostra al cliente una parte del prodotto funzionante.",
  ],
  synonyms: [
    {
      term: "svelto",
      register: "comune",
      context: "nel movimento, con l'accento sulla velocità",
    },
    {
      term: "snello",
      register: "comune",
      context: "di procedure e organizzazioni",
    },
    {
      term: "flessibile",
      register: "comune",
      context: "capace di adattarsi",
      note: "Flessibile si piega, agile si muove: il primo subisce il cambiamento, il secondo lo anticipa.",
    },
    {
      term: "destro",
      register: "letterario",
      context: "abile nei movimenti",
    },
  ],
  antonyms: [
    {
      term: "goffo",
      register: "comune",
      context: "nel movimento",
    },
    {
      term: "macchinoso",
      register: "comune",
      context: "di procedure e sistemi",
    },
    {
      term: "a cascata",
      register: "tecnico",
      context: "nello sviluppo software, il modello sequenziale contrapposto ad Agile; in inglese waterfall",
    },
  ],
  relatedWords: [
    "sprint",
    "kanban",
    "lean",
    "deliverable",
    "milestone",
    "lavoro-agile",
    "goffaggine",
    "scalabilita",
    "elasticita",
    "Scrum",
    "flessibilità",
    "metodo a cascata",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/agile/",
    wiktionary: "https://it.wiktionary.org/wiki/agile",
  },
  paroliereNote: "Agile è una parola italiana antica, tornata indietro dall'inglese con un significato tecnico. Nel lessico del software indica un insieme di metodi, come Scrum e → kanban, accomunati dall'idea di lavorare per cicli brevi e correggere la rotta spesso. Attenzione a una sovrapposizione tutta italiana: il → lavoro agile della legge 81 del 2017 non coincide con i metodi Agile. Il primo riguarda dove e quando si lavora; i secondi, come si organizza lo sviluppo di un prodotto. Un team può essere Agile in ufficio, e un lavoratore agile può seguire procedure rigidissime da casa.",
  seo: {
    title: "Agile — significato comune e metodi Agile | Il Paroliere",
    description: "Che cosa significa agile: che si muove con prontezza; nei processi, che si adatta al cambiamento. Il Manifesto Agile del 2001 e la differenza con lavoro agile.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
