// Il Paroliere — Lemma: melassa
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const melassa: LemmaEntry = {
  lemma: "melassa",
  slug: "melassa",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Liquido denso e vischioso di colore bruno scuro, residuo della lavorazione dello " +
    "zucchero da canna o da barbabietola dopo la cristallizzazione del saccarosio. " +
    "In senso figurato, designa qualsiasi situazione, discorso, relazione o contesto " +
    "eccessivamente lenti, appiccicosi, soffocanti per eccesso di sentimentalismo o " +
    "per mancanza di agilità intellettuale. La metafora sfrutta la densità vischiosa " +
    "del prodotto.",

  shortDefinition:
    "Sciroppo denso e scuro residuo della produzione zuccheriera; in senso figurato, " +
    "qualcosa di eccessivamente viscoso, lento o stucchevolmente sentimentale.",

  register: ["comune", "figurato"],
  domains: ["alimentare", "chimica", "usi figurati", "linguistica"],

  etymology:
    "Dallo spagnolo melaza, derivato di miel («miele»), a sua volta dal latino mel, " +
    "mellis. Passato in italiano probabilmente attraverso il commercio coloniale dello " +
    "zucchero nei secoli XVI-XVII.",

  examples: [
    "La melassa di canna integrale ha un sapore intenso, quasi amaro, molto diverso dallo zucchero raffinato.",
    "Quel romanzo è pura melassa: troppe lacrime, troppi abbracci, zero tensione narrativa.",
    "La riunione si era trasformata in una melassa di buoni propositi senza alcuna decisione concreta.",
  ],

  synonyms: [
    {
      term: "sciroppo",
      register: "comune",
      context: "senso letterale",
    },
    {
      term: "sentimentalismo",
      register: "comune",
      context: "senso figurato",
    },
    {
      term: "zuccherosità",
      register: "comune",
      context: "eccesso di dolcezza",
    },
    {
      term: "viscosità",
      register: "comune",
      context: "in senso figurato di lentezza appiccicosa",
    },
  ],

  antonyms: [
    {
      term: "concisione",
      register: "comune",
      context: "in senso figurato",
    },
    {
      term: "agilità",
      register: "comune",
      context: "in senso figurato",
    },
    {
      term: "secchezza",
      register: "comune",
      context: "in senso figurato di stile asciutto",
    },
  ],

  relatedWords: [
    "smielato",
    "ammucchiata",
    "zucchero",
    "saccarosio",
    "distillazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/melassa/",
    wiktionary: "https://it.wiktionary.org/wiki/melassa",
  },

  paroliereNote:
    "L'uso figurato di melassa è interessante perché porta con sé non solo la dolcezza " +
    "ma soprattutto la viscosità: qualcosa in cui ci si impantana, da cui è difficile " +
    "uscire. È una parola più visiva e sensoriale di sentimentalismo, più concreta e " +
    "meno accademica. Funziona bene per descrivere certi prodotti culturali — film, " +
    "testi, discorsi politici — che catturano l'attenzione con l'emozione per poi " +
    "lasciarti senza nulla di solido tra le mani.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Melassa — definizione, uso figurato | Il Paroliere",
    description:
      "Melassa: dal residuo dello zucchero all'uso figurato. Cosa significa, come si " +
      "usa, perché è diversa da sentimentalismo. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
