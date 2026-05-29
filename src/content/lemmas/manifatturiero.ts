// Il Paroliere — Lemma: manifatturiero
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const manifatturiero: LemmaEntry = {
  lemma: "manifatturiero",
  slug: "manifatturiero",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Relativo alla manifattura, ossia alla trasformazione di materie prime in " +
    "prodotti finiti attraverso processi industriali o artigianali. Si dice di " +
    "settore, distretto, comparto o attività che produce beni tangibili — distinto " +
    "dal settore dei servizi. In economia, il PIL manifatturiero misura il peso della " +
    "produzione fisica nel sistema economico di un paese.",

  shortDefinition:
    "Relativo alla produzione industriale o artigianale di beni fisici, distinto dal " +
    "settore dei servizi.",

  register: ["tecnico", "comune"],
  domains: ["economia", "industria"],

  etymology:
    "Derivato di manifattura, dal francese manufacture (a sua volta dal latino " +
    "medievale manu factura: fatto a mano). L'aggettivo si consolida nel lessico " +
    "economico italiano nel corso del XIX secolo con l'industrializzazione.",

  synonyms: [
    { term: "industriale", register: "comune", context: "più generico, include anche l'industria estrattiva e l'energia" },
    { term: "produttivo", register: "comune", context: "si riferisce alla capacità di produrre, non necessariamente a beni fisici" },
    { term: "artigianale", register: "comune", context: "nel contesto della piccola produzione fisica, spesso usato in alternativa" }
  ],

  antonyms: [
    { term: "terziario", register: "tecnico", context: "il settore dei servizi, contrapposto alla produzione di beni" },
    { term: "finanziario", register: "tecnico", context: "settore dell'economia basato su strumenti e transazioni immateriali" }
  ],

  relatedWords: [
    "manifattura",
    "industria",
    "produzione",
    "distretto industriale",
    "filiera",
    "PMI",
    "export"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/manifatturiero"
  },

  paroliereNote:
    "Il settore manifatturiero è uno di quegli argomenti in cui l'italiano economico " +
    "ha costruito un lessico preciso e spesso sottovalutato: distretto, filiera, " +
    "comparto, sistema manifatturiero sono termini che descrivono una realtà " +
    "produttiva specifica — quella dell'industria italiana, con i suoi modelli di PMI " +
    "diffusa — che non trova corrispondenze esatte in altri sistemi economici. Usare " +
    "manifatturiero con precisione significa anche riconoscere questa specificità.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Manifatturiero — Il Paroliere",
    description:
      "Relativo alla produzione industriale o artigianale di beni fisici, distinto dal " +
      "settore dei servizi.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};