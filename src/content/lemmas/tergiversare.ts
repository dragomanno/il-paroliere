// Il Paroliere — Lemma: tergiversare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tergiversare: LemmaEntry = {
  lemma: "tergiversare",
  slug: "tergiversare",
  partOfSpeech: "verbo",

  definition:
    "Aggirare una domanda o una decisione con la maestria di chi conosce tutti i sentieri laterali: " +
    "non un rifiuto, non un assenso, ma un elegante balletto intorno al punto. Chi tergiversa trasforma " +
    "l'elusione in arte minore — rimanda, devia, offre contorni senza centro — fino a quando l'interlocutore " +
    "si dimentica persino di cosa avesse chiesto.",

  shortDefinition:
    "Evitare di rispondere o decidere con pretesti e deviazioni abili; girare intorno alla questione senza mai toccarla.",

  register: ["comune", "ironico"],
  domains: ["comunicazione", "comportamento", "retorica"],

  etymology:
    "Dal latino tergiversari, 'voltare le spalle', composto di tergum (schiena) e versare (girare). " +
    "L'immagine originale è quella di chi letteralmente si gira dall'altra parte per evitare il confronto.",

  examples: [
    "Tergiversò per venti minuti prima di ammettere che non sapeva rispondere.",
    "Era un maestro del tergiversare in riunione: finita l'ora, nessuna decisione era stata presa.",
    "Non mentiva — tergiversava. La distinzione non consolava chi aspettava una risposta.",
    "Il politico tergiversò con tale eleganza che metà della sala applaudì senza aver capito nulla.",
  ],

  synonyms: [
    {
      term: "temporeggiare",
      register: "comune",
      context: "guadagnare tempo senza necessariamente aggirare la questione",
    },
    {
      term: "eludere",
      register: "formale",
      context: "evitare in modo più diretto, meno elaborato del tergiversare",
    },
    {
      term: "nicchiare",
      register: "colloquiale",
      context: "esitare, mostrarsi reticenti in modo più trasparente",
    },
  ],

  antonyms: [
    {
      term: "rispondere",
      register: "comune",
      context: "il gesto che il tergiversante evita sistematicamente",
    },
    {
      term: "decidere",
      register: "comune",
      context: "prendere posizione netta, senza deviazioni",
    },
  ],

  relatedWords: [
    "tergiversazione",
    "tergiversatore",
    "elusione",
    "temporeggiamento",
    "reticenza",
    "procrastinazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/tergiversare/",
    wiktionary: "https://it.wiktionary.org/wiki/tergiversare",
  },

  paroliereNote:
    "Tergiversare è un verbo che porta con sé un certo rispetto involontario: per farlo bene " +
    "ci vuole intelligenza, tempismo e una buona conoscenza del proprio interlocutore. " +
    "Non è la stessa cosa del mentire, né del tacere. È una forma di presenza nel discorso " +
    "che produce assenza di sostanza — un equilibrio non facile da mantenere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tergiversare — Il Paroliere",
    description:
      "Definizione originale di 'tergiversare': girare intorno alla questione senza mai toccarla. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
