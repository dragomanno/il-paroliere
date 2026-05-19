// Il Paroliere — Lemma: acredine
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const acredine: LemmaEntry = {
  lemma: "acredine",
  slug: "acredine",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Qualità aspra e persistente che impregna parole, toni o rapporti — non la fiamma viva dell'ira, " +
    "ma la sua cenere ancora calda. È il residuo acido di un risentimento che non si è consumato del " +
    "tutto: rimane nell'aria, nelle scelte di parola, nel modo in cui si dice una cosa giusta con un " +
    "tono sbagliato.",

  shortDefinition:
    "Il residuo acido del risentimento: qualcosa che brucia sotto, nelle parole e nei toni, dopo che l'ira si è spenta.",

  register: ["comune", "letterario"],
  domains: ["carattere", "conflitto"],

  etymology:
    "Dal latino acredo (o acredinis), derivato di acer, 'aspro, pungente'. " +
    "La stessa radice di acerbo, aceto, acume — tutte parole che portano con sé un senso di taglio.",

  examples: [
    "Rispose con un'acredine che tradiva anni di rancori non detti.",
    "L'acredine nel suo tono era più eloquente di qualsiasi accusa diretta.",
    "Non era arrabbiato, nel senso convenzionale del termine: aveva quell'acredine quieta di chi non si aspetta più nulla.",
    "La discussione era finita, ma l'acredine era rimasta — quella qualità aspra nell'aria che non si disperde subito.",
  ],

  synonyms: [
    {
      term: "astio",
      register: "comune",
      context: "risentimento più attivo e diretto, meno residuale",
    },
    {
      term: "rancore",
      register: "comune",
      context: "sentimento persistente, ma più interiorizzato dell'acredine",
    },
    {
      term: "amarezza",
      register: "comune",
      context: "tono affettivo simile, meno pungente",
    },
  ],

  antonyms: [
    {
      term: "dolcezza",
      register: "comune",
      context: "disposizione opposta nel tono e nei rapporti",
    },
    {
      term: "cordialità",
      register: "comune",
      context: "calore nei rapporti che l'acredine esclude",
    },
  ],

  relatedWords: [
    "acre",
    "acerbo",
    "astio",
    "rancore",
    "risentimento",
    "amarezza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/acredine/",
    wiktionary: "https://it.wiktionary.org/wiki/acredine",
  },

  paroliereNote:
    "Acredine è una parola che porta con sé la sua qualità sensoriale: il suffisso -dine e la radice acer " +
    "la rendono quasi pungente al tatto. Non a caso appartiene alla stessa famiglia di aceto e acume — " +
    "cose che tagliano, che lasciano un segno. Nel parlato quotidiano è quasi sparita, sostituita da " +
    "rancore o astio; eppure descrive qualcosa di più preciso: non l'odio dichiarato, ma il suo sapore residuo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Acredine — Il Paroliere",
    description:
      "Definizione originale di 'acredine': il residuo acido del risentimento, nelle parole e nei toni. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
