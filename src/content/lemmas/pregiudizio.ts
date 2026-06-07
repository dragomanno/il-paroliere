// Il Paroliere — Lemma: pregiudizio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pregiudizio: LemmaEntry = {
  lemma: "pregiudizio",
  slug: "pregiudizio",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Giudizio formato prima dell'esperienza diretta, per lo più negativo, che tende a resistere " +
    "alle smentite fattuali. In psicologia sociale indica l'atteggiamento ostile o svalutante verso " +
    "un gruppo basato sull'appartenenza, non sui comportamenti reali dei suoi membri. Il pregiudizio " +
    "è il piano cognitivo ed emotivo da cui nascono la discriminazione — sul piano del comportamento " +
    "— e lo stereotipo — sul piano della rappresentazione.",

  shortDefinition:
    "Giudizio negativo precostituito che precede l'esperienza; base cognitiva di discriminazione e stereotipo.",

  register: ["comune", "tecnico"],
  domains: ["psicologia sociale", "sociologia", "filosofia"],

  etymology:
    "Dal latino praeiudicium, composto di prae- ('prima') e iudicium ('giudizio'). " +
    "In latino indicava una decisione giuridica preliminare; in italiano il termine ha assunto " +
    "progressivamente il senso di opinione formata prima di esaminare i fatti.",

  examples: [
    "Il pregiudizio non scompare automaticamente con l'informazione: la ricerca mostra che spesso i fatti vengono riinterpretati per confermare ciò che si credeva già.",
    "Crescere in un ambiente omogeneo non produce necessariamente pregiudizio, ma riduce le occasioni in cui il pregiudizio viene messo alla prova.",
    "Distinguere pregiudizio da stereotipo è utile: lo stereotipo è una rappresentazione, il pregiudizio è un'emozione — spesso la stessa cosa vista da angolature diverse.",
  ],

  synonyms: [
    {
      term: "stereotipo",
      register: "comune",
      context: "rappresentazione semplificata e rigida di un gruppo — più cognitivo, meno emotivo del pregiudizio",
    },
    {
      term: "bias",
      register: "tecnico",
      context: "distorsione cognitiva sistematica, non necessariamente legata a gruppi sociali",
    },
    {
      term: "preconcetto",
      register: "comune",
      context: "sinonimo parziale, enfatizza la rigidità del giudizio più che l'ostilità",
    },
  ],

  antonyms: [
    {
      term: "apertura mentale",
      register: "comune",
      context: "disponibilità a rivedere giudizi alla luce dell'esperienza",
    },
    {
      term: "imparzialità",
      register: "formale",
      context: "assenza di favoritismi o avversioni precostituiti",
    },
  ],

  relatedWords: [
    "xenofobia",
    "xenofobo",
    "etnocentrismo",
    "razzismo",
    "alterità",
    "migrazione",
    "discriminazione",
    "stereotipo",
    "accoglienza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/pregiudizio/",
    wiktionary: "https://it.wiktionary.org/wiki/pregiudizio",
  },

  paroliereNote:
    "Il pregiudizio è strutturalmente conservativo: ha una logica di autodifesa. " +
    "Ogni esperienza che lo smentisce tende a essere classificata come eccezione; ogni esperienza " +
    "che lo conferma diventa prova. La psicologia chiama questo meccanismo «bias di conferma». " +
    "Per questa ragione il pregiudizio non si smonta con i fatti, ma con le relazioni.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Pregiudizio — definizione e uso | Il Paroliere",
    description:
      "Pregiudizio: giudizio negativo precostituito, resistente ai fatti. Base cognitiva di discriminazione e stereotipo. Definizione con esempi ed etimologia.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
