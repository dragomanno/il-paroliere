// Il Paroliere — Lemma: zenit
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const zenit: LemmaEntry = {
  lemma: "zenit",
  slug: "zenit",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "In astronomia, il punto immaginario della sfera celeste che si trova esattamente sopra l'osservatore, " +
    "a novanta gradi dall'orizzonte — il punto più alto che un astro può raggiungere nel suo percorso " +
    "apparente nel cielo. Per estensione, il momento in cui una persona, un'istituzione o un fenomeno " +
    "tocca la propria vetta: massima potenza, massima influenza, massima luce prima che la curva " +
    "incominci a scendere.",

  shortDefinition:
    "Il punto più alto del cielo sopra l'osservatore; per estensione, il culmine di splendore o influenza di chiunque o qualcosa.",

  register: ["comune", "tecnico"],
  domains: ["astronomia", "figurato"],

  etymology:
    "Dall'arabo samt (ar-ra's), 'direzione (della testa)', attraverso il latino medievale zenit " +
    "o cenit, con una probabile storpiatura del termine originale durante la trasmissione medievale.",

  examples: [
    "Il sole era allo zenit: l'ombra si era raccolta direttamente sotto i piedi.",
    "Era allo zenit della sua influenza quando decise di ritirarsi — il momento più difficile da scegliere.",
    "La civiltà raggiunse il suo zenit in quel secolo, poi qualcosa si spostò lentamente.",
    "Conoscere il proprio zenit è facile; sapere quando si è già scesi è più raro.",
  ],

  synonyms: [
    {
      term: "apice",
      register: "comune",
      context: "punto massimo, usato più spesso in senso figurato",
    },
    {
      term: "culmine",
      register: "comune",
      context: "il punto più alto di un processo, con sfumatura di compimento",
    },
    {
      term: "vertice",
      register: "formale",
      context: "posizione più alta di una struttura gerarchica o spaziale",
    },
  ],

  antonyms: [
    {
      term: "nadir",
      register: "tecnico",
      context: "il punto diametralmente opposto allo zenit sulla sfera celeste; per estensione, il punto più basso",
    },
    {
      term: "declino",
      register: "comune",
      context: "la fase discendente che segue lo zenit",
    },
  ],

  relatedWords: [
    "nadir",
    "apice",
    "culminare",
    "orizzonte",
    "sfera celeste",
    "meridiano",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/zenit/",
    wiktionary: "https://it.wiktionary.org/wiki/zenit",
  },

  paroliereNote:
    "Zenit è una parola che porta con sé l'arabismo medievale e la geometria del cielo. " +
    "Nel senso figurato funziona meglio di apice o culmine perché ha un complemento naturale — " +
    "il nadir — che ricorda come ogni punto più alto abbia un punto più basso speculare. " +
    "Chi usa zenit, anche inconsapevolmente, include già la possibilità della discesa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Zenit — Il Paroliere",
    description:
      "Definizione originale di 'zenit': punto più alto del cielo; per estensione, culmine di splendore o influenza. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
