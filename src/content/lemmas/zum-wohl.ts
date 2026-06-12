// Il Paroliere — Lemma: Zum Wohl
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const zumWohl: LemmaEntry = {
  lemma: "Zum Wohl",
  slug: "zum-wohl",
  partOfSpeech: "locuzione (prestito dal tedesco)",

  definition:
    "Brindisi formale tedesco, traducibile come «alla salute» o «al benessere» — «Wohl» " +
    "in tedesco indica il bene-essere, il florire. Si contrappone al più spontaneo «Prost», " +
    "usato in contesti informali e specialmente in Baviera: «Prost» è immediato come un " +
    "colpo di campanello, «Zum Wohl» è più solenne, da tavola imbandita.",

  shortDefinition:
    "Brindisi formale tedesco, letteralmente «al benessere»; il controcanto ufficiale del più informale «Prost».",

  register: ["colloquiale", "comune"],
  domains: ["tedesco", "galateo", "convivialità", "cultura"],

  etymology:
    "Dal tedesco zum (preposizione articolata: zu + dem, verso il, per il) + Wohl " +
    "(benessere, salute, prosperità). Letteralmente: «(bevo) per il tuo benessere». " +
    "«Wohl» condivide la radice germanica con l'inglese «well» (bene).",

  examples: [
    "«Zum Wohl» disse con un piccolo inchino, più formale di quanto la situazione richiedesse.",
    "In Baviera senti più «Prost» che «Zum Wohl» — il registro informale vince quasi sempre.",
    "Usò «Zum Wohl» al posto di «Prost» per segnalare che quella cena era un'occasione speciale.",
  ],

  synonyms: [
    {
      term: "Prost",
      register: "colloquiale",
      context: "il brindisi informale tedesco, molto più comune nel parlato quotidiano",
    },
    {
      term: "alla salute",
      register: "comune",
      context: "equivalente italiano di registro simile",
    },
    {
      term: "na zdarovje",
      register: "comune",
      context: "equivalente russo",
    },
  ],

  antonyms: [],

  relatedWords: [
    "na zdarovje",
    "skål",
    "salute",
    "alla salute",
    "brindisi",
    "Cheers",
  ],

  sourceLinks: {
    wiktionary: "https://de.wiktionary.org/wiki/Wohl",
  },

  paroliereNote:
    "La distinzione Prost/Zum Wohl è uno di quei dettagli linguistici che rivelano quanto " +
    "le culture investano nel gesto del brindisi. «Prost» è immediato, popolare, bavarese — " +
    "lo si grida con il boccale in mano all'Oktoberfest. «Zum Wohl» è la versione in abito " +
    "da sera: stessa funzione, altro tono. In italiano questa distinzione non esiste con la " +
    "stessa nitidezza — «salute» e «alla salute» sono sfumature, non registri opposti.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Zum Wohl — definizione e uso | Il Paroliere",
    description:
      "Zum Wohl: il brindisi formale tedesco e la sua differenza con Prost. " +
      "Definizione originale, etimologia e confronto con altre tradizioni.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
