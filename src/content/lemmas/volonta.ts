// Il Paroliere — Lemma: volontà
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const volonta: LemmaEntry = {
  lemma: "volontà",
  slug: "volonta",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune"],
  domains: ["psicologia", "filosofia", "diritto"],

  definition: "Facoltà di scegliere un orientamento e sostenerlo con decisione, anche quando costa fatica o rinuncia. Può indicare sia l’impulso consapevole ad agire sia il proposito espresso da una persona; non coincide con il → desiderio, che può restare privo di azione.",

  shortDefinition: "Capacità di decidere e perseverare in un’azione o in un proposito.",

  etymology: "Dal latino voluntas, derivato di velle, «volere»; conserva l’idea di un volere reso consapevole e durevole.",

  examples: [
    "Con volontà ha ripreso gli esercizi, senza promettersi risultati immediati.",
    "La sua volontà era che la casa restasse aperta anche d’inverno.",
    "Non bastava desiderarlo: per cambiare abitudine serviva volontà."
  ],

  synonyms: [
    { term: "determinazione", register: "comune", note: "Sottolinea la fermezza nel perseguire una decisione." },
    { term: "fermezza", register: "comune", note: "Indica soprattutto la tenuta davanti a pressioni o ripensamenti." },
    { term: "intenzione", register: "comune", note: "È un proposito iniziale e può non implicare la costanza della volontà." }
  ],

  antonyms: [
    { term: "indecisione", register: "comune", note: "Esprime l’incapacità o la difficoltà di scegliere." },
    { term: "remissività", register: "formale", note: "Indica la rinuncia a sostenere la propria posizione davanti alla volontà altrui." }
  ],

  relatedWords: ["desiderio", "aspirazione", "passione", "slancio", "tensione", "speranza", "attesa", "frustrazione", "rassegnazione", "accettazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/volont%C3%A0"
  },

  paroliereNote: "La volontà è meno spettacolare dello slancio: si riconosce soprattutto nella continuità. Può accompagnare una → aspirazione e perfino una scelta di → accettazione, senza ridursi a ostinazione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Volontà — definizione, sinonimi, uso | Il Paroliere",
    description: "Che cos’è la volontà: definizione originale, sinonimi ed esempi d’uso. Scopri le differenze con desiderio, aspirazione, determinazione e perseveranza nel tempo."
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24"
};
