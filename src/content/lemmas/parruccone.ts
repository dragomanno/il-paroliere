// Il Paroliere — Lemma: parruccone
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const parruccone: LemmaEntry = {
  lemma: "parruccone",
  slug: "parruccone",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Nel senso originale e storico, chi portava la parrucca incipriata tipica " +
    "dell'epoca aristocratica e dell'ancien régime, diventata simbolo di una cultura " +
    "politica e intellettuale reazionaria nel periodo successivo alla Rivoluzione " +
    "Francese e all'Illuminismo. In senso figurato corrente, una persona di mentalità " +
    "antiquata, attaccata ai valori e ai modi del passato, ostile all'innovazione e " +
    "al progresso; un conservatore che si oppone al cambiamento non per ragionamento " +
    "ma per abitudine e per paura del nuovo. L'immagine è quella di chi, anche quando " +
    "la storia aveva già voltato pagina, continuava a portare la parrucca come se " +
    "nulla fosse accaduto. Vedi anche → forchettone per la variante di registro " +
    "più quotidiano.",

  shortDefinition:
    "Chi portava la parrucca dell'ancien régime; per estensione figurata, persona " +
    "di mentalità antiquata e refrattaria al cambiamento.",

  register: ["colloquiale", "ironico", "spregiativo"],
  domains: ["società", "storia", "cultura", "linguistica", "usi figurati"],

  etymology:
    "Accrescitivo di parrucca, dall'italiano settentrionale o dal veneziano paruca, " +
    "di origine incerta (forse dal franco pil, «pelo», o da termini dialettali). La " +
    "parrucca fu moda obbligata nelle corti europee tra Seicento e Settecento; dopo " +
    "la Rivoluzione Francese, chi la continuava a portare fu identificato con l'ordine " +
    "vecchio. Il termine si trova già in testi risorgimentali come accusa " +
    "politico-culturale.",

  examples: [
    "«I parrucconi del Consiglio comunale bloccarono il progetto urbanistico per tre anni.»",
    "«Non essere un parruccone: quella legge fu scritta cinquant'anni fa, il mondo è cambiato.»",
    "«Il teatro era frequentato da una certa fauna di parrucconi che fischiavano ogni volta che qualcuno osava mettere in scena uno spettacolo contemporaneo.»",
  ],

  synonyms: [
    {
      term: "forchettone",
      register: "colloquiale",
      context: "più quotidiano e bonario, meno ideologico",
    },
    {
      term: "reazionario",
      register: "politico",
      context: "più marcatamente politico",
    },
    {
      term: "conservatore",
      register: "comune",
      context: "attaccato ai valori del passato",
    },
    {
      term: "passatista",
      register: "comune",
      context: "chi guarda solo indietro",
    },
    {
      term: "laudator temporis acti",
      register: "letterario",
      context: "latinismo ironico per chi loda i tempi andati",
    },
    {
      term: "retrograde",
      register: "colloquiale",
      context: "anglicismo occasionale nel parlato giovanile",
    },
  ],

  antonyms: [
    {
      term: "progressista",
      register: "comune",
      context: "chi crede nel cambiamento",
    },
    {
      term: "innovatore",
      register: "comune",
      context: "chi porta novità",
    },
    {
      term: "riformatore",
      register: "comune",
      context: "chi agisce per modificare l'esistente",
    },
    {
      term: "uomo del suo tempo",
      register: "comune",
      context: "chi è in sintonia con l'epoca in cui vive",
    },
  ],

  relatedWords: [
    "forchettone",
    "Illuminismo",
    "Rivoluzione Francese",
    "ancien régime",
    "reazionarismo",
    "parrucca",
    "conservatorismo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/parruccone/",
    wiktionary: "https://it.wiktionary.org/wiki/parruccone",
  },

  paroliereNote:
    "Parruccone è una di quelle parole che portano incorporata una storia. Chi la usa " +
    "non sa sempre da dove viene, ma chi la ascolta sente comunque il peso dell'accusa: " +
    "non solo «sei vecchio», ma «sei dalla parte sbagliata della storia». La " +
    "distinzione con → forchettone vale: parruccone ha una radice ideologico-storica " +
    "precisa, nata nel conflitto tra Illuminismo e Ancien Régime, e conserva ancora " +
    "oggi una carica politica più marcata. Forchettone è più bonario, più domestico, " +
    "più neutro rispetto alla storia delle idee. Se chiami qualcuno forchettone gli " +
    "stai dicendo che è antiquato; se lo chiami parruccone, stai dicendo che è rimasto " +
    "fermo al vecchio mondo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Parruccone — origine, storia e uso figurato | Il Paroliere",
    description:
      "Parruccone: dall'Illuminismo al linguaggio di oggi. Perché si dice, cosa " +
      "significa, differenza con forchettone. Definizione originale con nota storica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
