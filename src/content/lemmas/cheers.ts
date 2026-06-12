// Il Paroliere — Lemma: Cheers
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cheers: LemmaEntry = {
  lemma: "Cheers",
  slug: "cheers",
  partOfSpeech: "locuzione (prestito dall'inglese)",

  definition:
    "Brindisi di origine anglofona, letteralmente «gioie» o «evviva», da «cheer» — esultanza, " +
    "gioia, incoraggiamento. In inglese ha una vita molto più ampia del solo brindisi: si usa " +
    "come ringraziamento informale, come saluto di commiato, come risposta a un gesto gentile. " +
    "In italiano viene usato come formula conviviale per evocare un'atmosfera cosmopolita o " +
    "con intonazione leggermente ironica.",

  shortDefinition:
    "Brindisi anglofono da «cheer», gioia; in inglese vale anche come ringraziamento o saluto; in italiano, formula cosmopolita o ironica.",

  register: ["colloquiale", "comune"],
  domains: ["inglese", "galateo", "convivialità", "cultura"],

  etymology:
    "Dall'inglese cheer (gioia, esultanza, incoraggiamento), a sua volta dall'antico francese " +
    "chiere (viso, espressione), dal latino cara (viso). «Cheers» è letteralmente «gioie, " +
    "evviva» — forma plurale usata come esclamazione.",

  examples: [
    "«Cheers!» disse, alzando il bicchiere con il sorriso di chi si sente un po' londinese.",
    "Ti mando la mail — «Cheers» — come risposta, tipicamente britannico.",
    "In certi bar del centro storico «cheers» ha quasi sostituito «salute» tra i trentenni.",
  ],

  synonyms: [
    {
      term: "salute",
      register: "comune",
      context: "equivalente italiano del brindisi",
    },
    {
      term: "na zdarovje",
      register: "comune",
      context: "equivalente russo, con connotazione esotica simile",
    },
    {
      term: "skål",
      register: "comune",
      context: "equivalente scandinavo",
    },
  ],

  antonyms: [],

  relatedWords: [
    "na zdarovje",
    "skål",
    "salute",
    "alla salute",
    "brindisi",
    "Zum Wohl",
  ],

  sourceLinks: {
    wiktionary: "https://en.wiktionary.org/wiki/cheers",
  },

  paroliereNote:
    "Il dettaglio più sorprendente di «cheers» per un italiano è il suo uso extraconviviale " +
    "in inglese — specialmente nell'inglese britannico. «Cheers» può significare «grazie», " +
    "«prego», «ciao» e persino «capito» in contesti informali. Una parola che in italiano " +
    "serve solo per brindare, in inglese fa cinque lavori diversi. Questo tipo di polisemia " +
    "contestuale è uno degli aspetti più interessanti da documentare lessicograficamente.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Cheers — definizione e uso in italiano | Il Paroliere",
    description:
      "Cheers: brindisi anglofono e formula multipurpose britannica. " +
      "Definizione originale, etimologia e uso ironico in italiano.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
