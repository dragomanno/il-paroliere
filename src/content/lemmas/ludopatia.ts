// Il Paroliere — Lemma: ludopatia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ludopatia: LemmaEntry = {
  lemma: "ludopatia",
  slug: "ludopatia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Disturbo del comportamento caratterizzato da un impulso persistente e " +
    "incontrollabile al gioco d'azzardo, che continua nonostante le conseguenze " +
    "negative sulla vita personale, economica e relazionale di chi ne è affetto. " +
    "Riconosciuta dal DSM-5 come disturbo da gioco d'azzardo (gambling disorder), la " +
    "ludopatia è classificata tra le dipendenze comportamentali: non richiede una " +
    "sostanza, ma produce meccanismi neurobiologici analoghi a quelli delle " +
    "dipendenze chimiche.",

  shortDefinition:
    "Dipendenza dal gioco d'azzardo: impulso compulsivo e incontrollabile che " +
    "persiste nonostante le conseguenze negative.",

  register: ["tecnico", "comune"],
  domains: ["medicina", "psicologia", "sociologia"],

  etymology:
    "Termine composto moderno: dal latino ludus (gioco) e dal greco -patia (da " +
    "páthos, sofferenza, malattia). Coniato nella seconda metà del Novecento in " +
    "ambito psichiatrico per denominare il disturbo in modo tecnicamente preciso.",

  synonyms: [
    { term: "dipendenza da gioco", register: "comune", context: "perifrasi descrittiva, più accessibile al non specialista" },
    { term: "gambling disorder", register: "tecnico", context: "termine DSM-5 in inglese, usato nella letteratura scientifica internazionale" },
    { term: "gioco compulsivo", register: "comune", context: "descrizione comportamentale, meno tecnica di ludopatia" }
  ],

  relatedWords: [
    "dipendenza",
    "gambling",
    "gioco d'azzardo",
    "DSM-5",
    "impulso",
    "compulsione",
    "addiction"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/ludopatia"
  },

  paroliereNote:
    "La ludopatia è cresciuta in Italia insieme all'espansione del gioco d'azzardo " +
    "legalizzato: slot machine, scommesse online, gratta e vinci. Il termine tecnico " +
    "è entrato nel discorso pubblico e legislativo solo relativamente di recente, " +
    "seguendo il riconoscimento clinico del disturbo. Un dettaglio linguistico: la " +
    "parola contiene ludus — gioco — e questo può far sembrare il disturbo più " +
    "leggero di quanto non sia; ma il suffisso -patia porta il peso di tutto quello " +
    "che il gioco fa quando smette di essere tale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ludopatia — Il Paroliere",
    description:
      "Dipendenza dal gioco d'azzardo: impulso compulsivo e incontrollabile che " +
      "persiste nonostante le conseguenze negative.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};