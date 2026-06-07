// Il Paroliere — Lemma: xenofobo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const xenofobo: LemmaEntry = {
  lemma: "xenofobo",
  slug: "xenofobo",
  partOfSpeech: "aggettivo / sostantivo",
  gender: "maschile",

  definition:
    "Chi manifesta xenofobia: avversione, diffidenza o ostilità verso chi è percepito come straniero " +
    "o estraneo al proprio gruppo. Come aggettivo descrive atteggiamenti, discorsi o politiche che " +
    "escludono o denigrano l'altro in quanto diverso per origine, lingua o appartenenza culturale. " +
    "Come sostantivo indica la persona che incarna questa postura, spesso senza esserne pienamente consapevole.",

  shortDefinition:
    "Chi nutre o manifesta ostilità verso gli stranieri; aggettivo di atteggiamenti e politiche di esclusione.",

  register: ["comune", "tecnico"],
  domains: ["sociologia", "politica", "psicologia sociale"],

  etymology:
    "Derivato di xenofobia (dal greco xénos, 'straniero', e phóbos, 'paura') tramite il suffisso " +
    "aggettivale -o. Forma parallela a parole come claustrofobico, agorafobico.",

  examples: [
    "Quel comizio era xenofobo nei toni prima ancora che nei contenuti: il modo in cui veniva pronunciata la parola 'straniero' bastava.",
    "Non si definiva xenofobo, ma ogni volta che parlava di sicurezza tirava in ballo le nazionalità.",
    "Una politica migratoria può essere restrittiva senza essere xenofoba: la differenza sta nei presupposti, non nelle misure.",
  ],

  synonyms: [
    {
      term: "razzista",
      register: "comune",
      context: "più specifico, implica una gerarchia tra razze percepite",
    },
    {
      term: "nazionalista escludente",
      register: "politico",
      context: "usa la paura dello straniero come collante identitario",
    },
  ],

  antonyms: [
    {
      term: "xenofilo",
      register: "tecnico",
      context: "chi è attratto dalle culture straniere",
    },
    {
      term: "cosmopolita",
      register: "formale",
      context: "chi considera l'altro una risorsa, non una minaccia",
    },
  ],

  relatedWords: [
    "xenofobia",
    "razzismo",
    "pregiudizio",
    "etnocentrismo",
    "alterità",
    "migrazione",
    "accoglienza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/xenofobo/",
    wiktionary: "https://it.wiktionary.org/wiki/xenofobo",
  },

  paroliereNote:
    "Xenofobo è una di quelle parole che le persone difficilmente applicano a sé stesse. " +
    "Il meccanismo è ricorrente nel lessico del pregiudizio: l'autodefinizione è sempre al riparo. " +
    "Vale la pena usarla con precisione — non come insulto generico, ma come diagnosi semantica.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Xenofobo — definizione e uso | Il Paroliere",
    description:
      "Xenofobo: chi manifesta ostilità verso gli stranieri. Aggettivo e sostantivo con esempi originali, etimologia e nota editoriale.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
