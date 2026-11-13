// Il Paroliere — Lemma: calco (linguistico)
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const calco: LemmaEntry = {
  lemma: "calco",
  slug: "calco",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["linguistica", "linguaggio"],

  definition:
    "Nel senso linguistico — distinto dal senso comune di calco come riproduzione grafica o impronta materiale — procedimento di formazione lessicale che consiste nel coniare una parola nuova traducendo, elemento per elemento, la struttura di un termine di un'altra lingua, invece di importarne semplicemente la forma come avviene nel prestito. Il tipo più noto è il calco strutturale, o di traduzione: l'italiano 'grattacielo' è un calco dell'inglese *skyscraper* (da *sky* «cielo» e *scraper* «che gratta»), così come 'fine settimana' è un calco alternativo di 'weekend' e 'a lungo termine' ricalca l'inglese *long-term*. Esiste anche il calco semantico puro, in cui una parola già esistente nella lingua ricevente acquisisce un significato nuovo per influsso di un termine straniero foneticamente o semanticamente simile, senza modifiche di forma.",

  shortDefinition:
    "Parola nuova formata traducendo pezzo per pezzo un termine straniero, a differenza del prestito, che ne importa la forma originale.",

  etymology:
    "Da *calcare* «premere, ricalcare», dal latino *calcare* «pigiare con i piedi». Il senso linguistico arriva dal francese *calque*, che a sua volta aveva preso la parola dall'italiano: i linguisti francesi lo usano dalla fine dell'Ottocento, mentre Antoine Meillet e Charles Bally lo resero d'uso comune nel Novecento.",

  examples: [
    "'Grattacielo' è un calco perfetto dell'inglese 'skyscraper': ogni componente è tradotto letteralmente, non importato.",
    "'Ferrovia', attestata in italiano dal 1852, è tradizionalmente spiegata come calco del tedesco 'Eisenbahn' «strada di ferro», tradotto elemento per elemento.",
    "Usare 'realizzare' nel senso di 'rendersi conto', sul modello dell'inglese 'to realize', è un calco semantico: la parola esisteva già, ma ha preso un significato nuovo.",
    "'Superuomo' è il calco italiano del tedesco 'Übermensch' di Nietzsche, tradotto morfema per morfema.",
  ],

  synonyms: [
    { term: "calco linguistico", register: "tecnico", note: "Forma piena e non ambigua, usata quando il contesto non chiarisce già che si parla di linguistica e non di riproduzione materiale." },
  ],

  antonyms: [
    { term: "prestito linguistico", register: "tecnico", note: "Importa la forma originaria della parola straniera, invece di tradurne la struttura come fa il calco." },
  ],

  relatedWords: ["prestito-linguistico", "neologismo", "metonimia"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/calco/",
    wiktionary: "https://it.wiktionary.org/wiki/calco",
  },

  paroliereNote:
    "Il calco è un prestito travestito: importa un'idea straniera, ma ne veste ogni componente con parole già di casa, al punto che spesso il parlante non sospetta affatto un'origine esterna — 'grattacielo' suona italianissimo, eppure è un ricalco esatto di una struttura inglese. È forse per questo che il calco genera molte meno polemiche identitarie del prestito puro: mentre 'weekend' viene talvolta percepito come un'invasione lessicale, 'fine settimana' passa quasi inosservato come alternativa 'nostrana', pur essendo esattamente la stessa importazione concettuale in abito diverso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "calco linguistico — significato, esempi, differenza da prestito",
    description:
      "Che cos'è il calco linguistico: la traduzione strutturale di un termine straniero, elemento per elemento, invece dell'importazione diretta.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-11-13",
};
