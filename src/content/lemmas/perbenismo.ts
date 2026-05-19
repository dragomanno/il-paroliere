// Il Paroliere — Lemma: perbenismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const perbenismo: LemmaEntry = {
  lemma: "perbenismo",
  slug: "perbenismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Atteggiamento di chi esibisce rispettabilità morale e buone maniere come un abito della domenica — " +
    "indossato con cura, ma riposto con altrettanta cura il lunedì mattina. Chi incarna il perbenismo " +
    "non è necessariamente in malafede: può credere sinceramente ai propri princìpi, ma la sua bussola " +
    "etica è orientata più dallo sguardo altrui che dalla coscienza.",

  shortDefinition:
    "Moralità di facciata calibrata sull'opinione altrui, non sulla convinzione; rispettabilità ostentata più che vissuta.",

  register: ["comune", "ironico"],
  domains: ["società", "comportamento", "morale"],

  etymology:
    "Da per bene + suffisso -ismo. Composto che trasforma un aggettivo elogiativo (" +
    "«una persona per bene») in un sostantivo che ne denuncia la deriva formale e ipocrita.",

  examples: [
    "Il perbenismo del quartiere era più potente di qualsiasi regolamento scritto.",
    "Si nascondeva dietro un perbenismo impeccabile, ma bastava grattare la superficie.",
    "Non è moralismo il suo: è perbenismo — gli importa di non sembrare sbagliato, non di non esserlo.",
    "Una certa Italia provinciale ha trasformato il perbenismo in virtù civica.",
  ],

  synonyms: [
    {
      term: "ipocrisia",
      register: "comune",
      context: "più duro, implica consapevolezza del doppio registro",
    },
    {
      term: "conformismo",
      register: "comune",
      context: "enfatizza l'adeguamento alle norme sociali più che la facciata morale",
    },
    {
      term: "rispettabilità",
      register: "formale",
      context: "versione neutra, senza connotazione negativa",
    },
  ],

  antonyms: [
    {
      term: "autenticità",
      register: "comune",
      context: "coerenza tra valori interni e comportamento esteriore",
    },
    {
      term: "trasgressione",
      register: "comune",
      context: "rottura deliberata delle convenzioni sociali",
    },
  ],

  relatedWords: [
    "perbenista",
    "conformismo",
    "rispettabilità",
    "ipocrisia",
    "facciata",
    "apparenza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/perbenismo/",
    wiktionary: "https://it.wiktionary.org/wiki/perbenismo",
  },

  paroliereNote:
    "Il perbenismo è un fenomeno profondamente italiano — o almeno così ci piace pensare. " +
    "Ma la metafora dell'abito festivo funziona ovunque ci sia uno scarto tra come si appare " +
    "il giorno di riposo e come si agisce il resto della settimana. La parola porta con sé " +
    "una critica silenziosa: non verso chi sbaglia, ma verso chi non ammette nemmeno di poterlo fare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Perbenismo — Il Paroliere",
    description:
      "Definizione originale di 'perbenismo': moralità di facciata orientata dall'opinione altrui. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
