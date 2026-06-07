// Il Paroliere — Lemma: irreprensibile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const irreprensibile: LemmaEntry = {
  lemma: "irreprensibile",
  slug: "irreprensibile",
  partOfSpeech: "aggettivo",

  definition:
    "Che non può essere rimproverato né criticato; che si comporta in modo talmente " +
    "corretto e ineccepibile da non offrire alcun appiglio alla censura altrui. " +
    "Irreprensibile descrive una condotta, un carattere o un'opera che ha raggiunto uno " +
    "standard di correttezza tale da resistere a qualsiasi valutazione critica. Non " +
    "implica necessariamente grandezza o eccellenza — una prestazione può essere " +
    "irreprensibile senza essere straordinaria: significa che non c'è nulla da obiettare, " +
    "anche se non c'è necessariamente nulla da celebrare. Rispetto a integerrimo, " +
    "irreprensibile è meno assoluto sul piano morale e più applicabile a contesti " +
    "professionali, estetici e comportamentali quotidiani.",

  shortDefinition:
    "Che non può essere rimproverato; di condotta o comportamento ineccepibile, " +
    "privo di mancanze osservabili.",

  register: ["formale", "comune"],
  domains: ["etica", "diritto", "società"],

  etymology:
    "Dal latino irreprehensi­bilis, composto di in- (negazione) + reprehendere " +
    "(«riprendere, censurare, afferrare di nuovo»): letteralmente «che non può essere " +
    "ripreso». Reprehendere è lo stesso verbo di rimproverare attraverso il francese antico.",

  examples: [
    "La sua condotta professionale era sempre stata irreprensibile: nessuno aveva mai avuto nulla da obiettare.",
    "Un servizio irreprensibile non basta più per distinguersi: oggi i clienti si aspettano qualcosa di memorabile, non solo di corretto.",
    "L'arbitro diresse la partita in modo irreprensibile: nessuna delle due squadre ebbe motivo di protestare.",
  ],

  synonyms: [
    {
      term: "ineccepibile",
      register: "formale",
      context: "a cui non si può eccepire nulla",
    },
    {
      term: "impeccabile",
      register: "comune",
      context: "senza pecche né difetti",
    },
    {
      term: "esemplare",
      register: "comune",
      context: "degno di essere imitato",
    },
    {
      term: "inattaccabile",
      register: "comune",
      context: "che non offre appigli alla critica",
    },
  ],

  antonyms: [
    {
      term: "riprovevole",
      register: "formale",
      context: "degno di biasimo",
    },
    {
      term: "censurabile",
      register: "formale",
      context: "che merita censura",
    },
    {
      term: "difettoso",
      register: "comune",
      context: "che presenta mancanze",
    },
  ],

  relatedWords: [
    "integerrimo",
    "probità",
    "probo",
    "onestà",
    "correttezza",
    "etica",
    "condotta",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/irreprensibile/",
    wiktionary: "https://it.wiktionary.org/wiki/irreprensibile",
  },

  paroliereNote:
    "Irreprensibile e integerrimo sono spesso usati come sinonimi, ma la differenza " +
    "è reale e vale la pena tracciarla. Irreprensibile guarda dall'esterno: dice che " +
    "nessuno può muovere obiezioni. Integerrimo guarda dall'interno: dice che la persona " +
    "è integra fino in fondo, moralmente intera. Si può essere irreprensibili per " +
    "convenienza — perché si sa di essere osservati — ma non integerrimi. L'integerrimo " +
    "è irreprensibile anche quando nessuno guarda.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Irreprensibile — definizione, differenza da integerrimo | Il Paroliere",
    description:
      "Cosa significa irreprensibile, quando usarlo, differenza da integerrimo e " +
      "impeccabile. Definizione originale con esempi e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
