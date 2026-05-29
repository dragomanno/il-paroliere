// Il Paroliere — Lemma: mellifluo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const mellifluo: LemmaEntry = {
  lemma: "mellifluo",
  slug: "mellifluo",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Detto di voce, tono o stile: così fluido e dolce da risultare, all'orecchio " +
    "attento, quasi sospetto. L'aggettivo porta con sé un'ambivalenza strutturale: in " +
    "origine aveva valore puramente positivo (dolce come il miele), ma nell'uso " +
    "contemporaneo segnala quasi sempre un'eccessiva o calcolata suavità, quella di " +
    "chi sceglie le parole come si addolcisce una medicina amara. Si applica tanto " +
    "alla retorica quanto ai rapporti interpersonali.",

  shortDefinition:
    "Dolce e fluido nel suono o nello stile, spesso con sottinteso di artificiosità o " +
    "eccesso calcolato.",

  register: ["letterario", "ironico"],
  domains: ["retorica", "linguaggio"],

  etymology:
    "Dal latino mellīfluus, composto di mel, mellis (miele) e fluere (scorrere). La " +
    "metafora originaria era quella di un discorso che scorre come miele — immagine " +
    "positiva nell'Antichità, progressivamente ironizzata nei secoli successivi.",

  synonyms: [
    { term: "suadente", register: "comune", context: "accentua la capacità persuasiva, meno il giudizio sulla qualità del suono" },
    { term: "untuoso", register: "colloquiale", context: "più marcato negativamente, suggerisce adulazione servile" },
    { term: "blandizioso", register: "letterario", context: "raro, segnala lusinga e adulazione con registro elevato" },
    { term: "mieloso", register: "colloquiale", context: "diminutivo ironico del concetto, registro decisamente basso" }
  ],

  antonyms: [
    { term: "brusco", register: "comune", context: "tono secco, senza ammorbidimenti" },
    { term: "tagliente", register: "comune", context: "stile che non concede nulla alla dolcezza o alla mediazione" },
    { term: "franco", register: "comune", context: "diretto e senza filtri retorici, indipendentemente dal giudizio di valore" }
  ],

  relatedWords: [
    "suadente",
    "eloquente",
    "adulatorio",
    "retorica",
    "persuasione",
    "lusinga",
    "vellutato"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/mellifluo"
  },

  paroliereNote:
    "Il percorso storico di mellifluo è un caso di parola che ha cambiato segno senza " +
    "cambiare forma: Bernardo di Chiaravalle veniva chiamato Doctor Mellifluus — e il " +
    "titolo era un elogio. Oggi usarlo senza ironia richiederebbe uno sforzo " +
    "stilistico considerevole. La lingua ha incorporato una diffidenza verso la " +
    "dolcezza eccessiva che l'originale latino non prevedeva affatto — spia " +
    "linguistica del nostro rapporto ambivalente con la retorica e la persuasione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Mellifluo — Il Paroliere",
    description:
      "Dolce e fluido nel suono o nello stile, spesso con sottinteso di artificiosità o " +
      "eccesso calcolato.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};