// Il Paroliere — Lemma: inettitudine
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const inettitudine: LemmaEntry = {
  lemma: "inettitudine",
  slug: "inettitudine",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Condizione di chi è privo delle capacità o dell'attitudine necessarie per " +
    "svolgere un compito, ricoprire un ruolo o orientarsi in una situazione. Come " +
    "sostantivo astratto, descrive non tanto un singolo fallimento quanto una " +
    "disposizione strutturale — qualcosa che si manifesta con una certa regolarità e " +
    "che l'individuo stesso può riconoscere. In letteratura, l'inettitudine è " +
    "diventata una categoria esistenziale: il modo in cui certi personaggi abitano il " +
    "mondo senza mai riuscire ad abitarlo davvero.",

  shortDefinition:
    "Condizione strutturale di inadeguatezza rispetto a un compito o ruolo; in " +
    "letteratura, categoria esistenziale del non saper agire.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "società"],

  etymology:
    "Derivato di inetto (dal latino ineptus), con il suffisso astratto -itudine, già " +
    "presente in forme latine come ineptitudo. Il sostantivo astratto enfatizza la " +
    "durata e la sistematicità della condizione rispetto all'aggettivo.",

  synonyms: [
    { term: "incapacità", register: "comune", context: "più neutro e puntuale, riferito a una mancanza specifica" },
    { term: "inadeguatezza", register: "comune", context: "accentua lo scarto tra ciò che si è e ciò che viene richiesto" },
    { term: "incompetenza", register: "comune", context: "mancanza di competenza in un dominio specifico — più tecnico" },
    { term: "goffaggine", register: "colloquiale", context: "accentua la dimensione motoria o sociale dell'inadeguatezza" }
  ],

  antonyms: [
    { term: "abilità", register: "comune", context: "padronanza dei mezzi necessari per agire" },
    { term: "competenza", register: "comune", context: "conoscenza e capacità specifiche in un dominio" },
    { term: "destrezza", register: "comune", context: "abilità nell'esecuzione, spesso con riferimento alla pratica" }
  ],

  relatedWords: [
    "inetto",
    "incapacità",
    "inadeguatezza",
    "mediocrità",
    "antieroismo",
    "svevo",
    "autoanalisi"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/inettitudine"
  },

  paroliereNote:
    "Inettitudine e inetto (v.) si completano a vicenda senza essere intercambiabili: " +
    "l'aggettivo descrive una persona in un momento, il sostantivo nomina una " +
    "condizione che dura nel tempo. In ambito letterario, è Italo Svevo a fare " +
    "dell'inettitudine una vera categoria critica — non un difetto morale, ma un modo " +
    "di essere al mondo: la coscienza che paralizza, l'ironia che sostituisce " +
    "l'azione, l'eterno ritardo come stile esistenziale. Termine da usare con " +
    "precisione: non è sinonimo di stupidità.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Inettitudine — Il Paroliere",
    description:
      "Condizione strutturale di inadeguatezza; in letteratura, categoria esistenziale " +
      "del non saper agire nel mondo.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};