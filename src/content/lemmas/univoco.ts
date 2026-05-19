// Il Paroliere — Lemma: univoco
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const univoco: LemmaEntry = {
  lemma: "univoco",
  slug: "univoco",
  partOfSpeech: "aggettivo",

  definition:
    "Che ammette un solo significato o una sola interpretazione possibile, senza margine di ambiguità. " +
    "Si contrappone ad equivoco e ambiguo: un messaggio univoco chiude la domanda su cosa si intende " +
    "dire, senza lasciare aperte altre letture. In logica e matematica designa una relazione o funzione " +
    "che a ogni elemento associa esattamente un valore.",

  shortDefinition:
    "Che ha un solo significato possibile; in logica, funzione o relazione che associa a ogni elemento un unico valore.",

  register: ["comune", "tecnico"],
  domains: ["logica", "comunicazione"],

  etymology:
    "Dal latino tardo univocus, composto di unus (uno) e vox (voce, significato). " +
    "Letteralmente: 'che ha una sola voce', cioè un solo significato. " +
    "Termine della logica medievale scolastica, poi entrato nel linguaggio comune.",

  examples: [
    "Il segnale era univoco: nessuna interpretazione alternativa era possibile.",
    "In matematica, una funzione è univoca se a ogni x corrisponde esattamente un y.",
    "Non sempre un messaggio univoco è più efficace di uno ambiguo — dipende da cosa vuoi ottenere.",
    "La risposta era univoca: sì, senza riserve, senza clausole.",
  ],

  synonyms: [
    {
      term: "inequivocabile",
      register: "comune",
      context: "che non può essere frainteso, con sfumatura più enfatica",
    },
    {
      term: "chiaro",
      register: "comune",
      context: "comprensibile senza sforzo, più generico dell'univoco",
    },
    {
      term: "monosemico",
      register: "tecnico",
      context: "in linguistica, che ha un solo significato — termine tecnico di semantica",
    },
  ],

  antonyms: [
    {
      term: "ambiguo",
      register: "comune",
      context: "che ammette più interpretazioni, opposto diretto",
    },
    {
      term: "equivoco",
      register: "comune",
      context: "che genera fraintendimento per la molteplicità di sensi",
    },
  ],

  relatedWords: [
    "univocità",
    "ambiguità",
    "equivoco",
    "monosemia",
    "polisemia",
    "interpretazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/univoco/",
    wiktionary: "https://it.wiktionary.org/wiki/univoco",
  },

  paroliereNote:
    "Univoco è una di quelle parole che diventano interessanti proprio nel momento in cui " +
    "ci si chiede se esistano davvero messaggi del tutto univoci. In linguistica la risposta " +
    "è quasi sempre no — il contesto, il tono, la relazione tra parlanti colorano anche le " +
    "formulazioni più precise. L'univocità è un ideale della logica, non una proprietà del linguaggio naturale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Univoco — Il Paroliere",
    description:
      "Definizione originale di 'univoco': che ammette un solo significato, senza margine di ambiguità. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
