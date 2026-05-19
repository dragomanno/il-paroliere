// Il Paroliere — Lemma: palinsesto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const palinsesto: LemmaEntry = {
  lemma: "palinsesto",
  slug: "palinsesto",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Manoscritto medievale in cui il testo originale è stato raschiato o lavato per riceverne uno nuovo, " +
    "lasciando tuttavia tracce leggibili del primo sotto la scrittura sovrapposta. In senso figurato, " +
    "qualsiasi struttura — testo, luogo, memoria — in cui strati diversi di tempo e significato coesistono, " +
    "il vecchio visibile sotto il nuovo a chi sa guardarlo. In televisione e radio, indica la griglia " +
    "programmata dei contenuti.",

  shortDefinition:
    "Manoscritto riscritto su testo precedente ancora leggibile; per estensione, ogni struttura in cui strati di storia coesistono sotto la superficie.",

  register: ["tecnico", "comune"],
  domains: ["letteratura", "media"],

  etymology:
    "Dal greco palímpsestos, composto di pálin (di nuovo) e psaō (raschiare, strofinare). " +
    "Letteralmente: 'raschiato di nuovo'. I palinsesti medievali erano pergamene riutilizzate per " +
    "economizzare il materiale, spesso rivelando testi antichi sotto quelli più recenti.",

  examples: [
    "Il palinsesto di Archimede ha restituito trattati matematici perduti sotto un testo liturgico medievale.",
    "Roma è un palinsesto urbano: ogni scavo rivela un altro strato di città sotto la città.",
    "Il palinsesto televisivo della domenica sera non è cambiato in trent'anni.",
    "La sua memoria funzionava come un palinsesto: sotto i ricordi recenti, quelli vecchi erano ancora lì.",
  ],

  synonyms: [
    {
      term: "stratificazione",
      register: "comune",
      context: "nel senso figurato di strati sovrapposti nel tempo",
    },
    {
      term: "griglia",
      register: "tecnico",
      context: "nel senso radiotelevisivo, la programmazione oraria",
    },
    {
      term: "pergamena",
      register: "tecnico",
      context: "il supporto fisico, non la struttura a strati del palinsesto",
    },
  ],

  antonyms: [
    {
      term: "tabula rasa",
      register: "formale",
      context: "superficie completamente cancellata, senza tracce del passato",
    },
  ],

  relatedWords: [
    "pergamena",
    "manoscritto",
    "stratificazione",
    "archeologia",
    "memoria",
    "programmazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/palinsesto/",
    wiktionary: "https://it.wiktionary.org/wiki/palinsesto",
  },

  paroliereNote:
    "Palinsesto è una parola che ha vissuto tre vite: la pergamena medievale raschiata, " +
    "la metafora culturale e urbana, il gergo televisivo. Le tre accezioni non si contraddicono — " +
    "condividono tutte l'idea di qualcosa che viene riscritto senza cancellare del tutto. " +
    "È forse la parola italiana che meglio descrive come funziona la memoria collettiva.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Palinsesto — Il Paroliere",
    description:
      "Definizione originale di 'palinsesto': manoscritto riscritto su testo leggibile; struttura in cui coesistono strati di storia. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
