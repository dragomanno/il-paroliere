// Il Paroliere — Lemma: consumismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const consumismo: LemmaEntry = {
  lemma: "consumismo",
  slug: "consumismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Orientamento culturale e comportamento economico caratterizzato dall'acquisto " +
    "sistematico di beni e servizi come pratica identitaria, indipendentemente dal " +
    "bisogno reale. Il consumismo non descrive solo l'atto di comprare, ma una " +
    "struttura del desiderio in cui l'identità personale si costruisce attraverso ciò " +
    "che si possiede o si ostenta.",

  shortDefinition:
    "Cultura in cui comprare e possedere diventano pratiche identitarie, oltre il " +
    "bisogno reale.",

  register: ["comune", "critico"],
  domains: ["sociologia", "economia", "cultura"],

  etymology:
    "Dall'inglese consumerism, derivato di consumer (consumatore, dal latino " +
    "consumere, consumare, distruggere consumando). In italiano si afferma negli anni " +
    "Sessanta, nel pieno del miracolo economico, come termine critico usato sia in " +
    "chiave marxista che cattolica e ambientalista.",

  examples: [
  ],

  synonyms: [
    { term: "materialismo", register: "comune/critico", context: "con accento sulla priorità dei beni materiali rispetto ai valori etici o spirituali" },
    { term: "iperconsumismo", register: "critico/sociologico", context: "variante amplificata, riferita ai fenomeni contemporanei di overbuying e fast fashion" }
  ],

  antonyms: [
    { term: "sobrietà", register: "comune", context: "come stile di vita consapevolmente orientato al meno" },
    { term: "decrescita", register: "politico/economico", context: "movimento culturale ed economico che propone la riduzione dei consumi come risposta alla crisi ecologica" }
  ],

  relatedWords: [
    "comunismo",
    "populismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/consumismo"
  },

  paroliereNote:
    "Il consumismo è stato analizzato da pensatori molto diversi — da Vance Packard " +
    "nei Persuasori occulti (1957) a Guy Debord nella Società dello spettacolo " +
    "(1967), fino a Zygmunt Bauman e la sua nozione di modernità liquida. Tutti " +
    "convergono su un punto: nel consumismo si compra non per soddisfare bisogni, ma " +
    "per dare forma a un sé sempre provvisorio e sempre insoddisfatto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Consumismo — Il Paroliere",
    description:
      "Significato di consumismo: quando comprare diventa pratica identitaria. Analisi " +
      "culturale e sociologica di un fenomeno che definisce la modernità.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};