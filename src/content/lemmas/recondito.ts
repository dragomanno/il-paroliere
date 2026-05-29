// Il Paroliere — Lemma: recòndito
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const recondito: LemmaEntry = {
  lemma: "recòndito",
  slug: "recondito",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Che si trova o si tiene nascosto in profondità, lontano dalla superficie e dallo " +
    "sguardo comune. Si dice tanto di luoghi fisici — una stanza recòndita, un angolo " +
    "recòndito di un palazzo — quanto di dimensioni interiori: un desiderio recòndito " +
    "è quello che non si osa formulare, che abita gli strati più silenziosi della " +
    "coscienza. In filosofia e in mistica, il recòndito è spesso il luogo dove si " +
    "custodisce la verità più difficile da raggiungere.",

  shortDefinition:
    "Nascosto in profondità, fisicamente o interiormente; lontano dalla superficie e " +
    "dallo sguardo comune.",

  register: ["letterario"],
  domains: ["letteratura", "filosofia"],

  etymology:
    "Dal latino reconditus, participio passato di recondere (riporre, nascondere), " +
    "composto di re- (di nuovo, indietro) + condere (mettere insieme, riporre). La " +
    "radice è la stessa di condire e di fundus.",

  synonyms: [
    { term: "nascosto", register: "comune", context: "più neutro, senza la connotazione di profondità interiore" },
    { term: "segreto", register: "comune", context: "accentua la dimensione deliberata del nascondimento" },
    { term: "riposto", register: "letterario", context: "sinonimo quasi diretto, di registro ugualmente elevato" },
    { term: "celato", register: "letterario", context: "il nascondimento come atto consapevole di copertura" }
  ],

  antonyms: [
    { term: "palese", register: "comune", context: "evidente, visibile, esposto alla percezione comune" },
    { term: "manifesto", register: "comune", context: "che si mostra apertamente, senza occultamento" },
    { term: "superficiale", register: "comune", context: "antonimo della profondità interiore implicata dall'aggettivo" }
  ],

  relatedWords: [
    "nascosto",
    "riposto",
    "segreto",
    "profondo",
    "interiore",
    "abissale",
    "latente",
    "esoterico"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rec%C3%B2ndito"
  },

  paroliereNote:
    "L'accento sulla seconda sillaba — re-còn-dito — è uno dei marcatori fonetici del " +
    "registro letterario italiano: chi lo sposta sulla terza (re-con-dì-to) rivela " +
    "una frequentazione meno assidua con la poesia e la prosa d'arte. La parola porta " +
    "con sé la qualità di tutto ciò che descrive: è discreta, non si impone, " +
    "preferisce restare nell'ombra del lessico colto. Leopardi la usa con " +
    "naturalezza; nei testi contemporanei appare raramente, quasi a custodire la " +
    "propria rarità.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Recòndito — Il Paroliere",
    description:
      "Nascosto in profondità, fisicamente o interiormente; lontano dalla superficie e " +
      "dallo sguardo comune.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};