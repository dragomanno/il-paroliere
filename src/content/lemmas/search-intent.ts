// Il Paroliere — Lemma: search intent
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const searchIntent: LemmaEntry = {
  lemma: "search intent",
  slug: "search-intent",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Lo scopo concreto che una persona ha quando scrive una ricerca: trovare un'informazione, raggiungere un sito preciso, comprare qualcosa, confrontare alternative. Riconoscerlo permette di capire quale tipo di pagina meriti di comparire per quella ricerca, perché due query simili possono nascondere bisogni molto diversi.",
  shortDefinition: "Lo scopo che sta dietro una ricerca online: informarsi, raggiungere un sito, acquistare o confrontare.",
  register: [
    "tecnico",
  ],
  domains: [
    "SEO",
    "marketing digitale",
  ],
  etymology: "Dall'inglese search «ricerca» e intent «intento, proposito», dal latino intentus, participio di intendere «tendere verso». La classificazione classica si deve ad Andrei Broder, che nel 2002 divise le ricerche sul Web in informative, di navigazione e transazionali.",
  examples: [
    "«Pici ricetta» e «pici Montepulciano» sembrano vicine, ma il search intent è diverso: la prima vuole istruzioni, la seconda un posto dove mangiarli.",
    "Se in prima pagina compaiono solo schede prodotto, il search intent è commerciale e una guida teorica difficilmente salirà.",
    "Abbiamo riscritto l'articolo partendo dal search intent, non dalla keyword.",
  ],
  synonyms: [
    {
      term: "intento di ricerca",
      register: "tecnico",
      context: "calco italiano ormai comune nei testi di settore",
      note: "Da preferire nei testi per non specialisti.",
    },
    {
      term: "user intent",
      register: "tecnico",
      context: "variante inglese",
      note: "Più ampia: riguarda le intenzioni dell'utente anche fuori dai motori di ricerca.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "keyword",
    "ranking",
    "seo",
    "topic-cluster",
    "semantica",
    "geo",
    "posizionamento",
    "vettore-semantico",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/intent",
  },
  paroliereNote: "Più che una novità tecnica, il search intent è la pragmatica applicata alle ricerche: conta ciò che chi scrive vuole ottenere, non solo ciò che scrive (→ semantica). Le tre categorie di Broder restano il punto di partenza, e l'uso professionale ne aggiunge una quarta, quella commerciale, di chi confronta prima di scegliere. Per Il Paroliere il caso è istruttivo: chi cerca «significato di» vuole una definizione, chi cerca «sinonimo di» una parola da usare subito.",
  seo: {
    title: "Search intent — significato e tipi di intento | Il Paroliere",
    description: "Che cos'è il search intent: lo scopo dietro una ricerca online. La classificazione di Broder, l'intento commerciale, l'equivalente italiano.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
