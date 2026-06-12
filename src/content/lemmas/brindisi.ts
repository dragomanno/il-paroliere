// Il Paroliere — Lemma: brindisi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const brindisi: LemmaEntry = {
  lemma: "brindisi",
  slug: "brindisi",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",

  definition:
    "Atto rituale con cui si alzano i bicchieri insieme, accompagnato da una formula augurale — " +
    "che sia una sola parola o un discorso articolato. Il brindisi è gesto sociale prima ancora " +
    "che conviviale: sancisce un momento, crea un noi temporaneo, trasforma il bere in atto " +
    "collettivo. L'etimologia è discussa: la derivazione più accreditata è dal tedesco " +
    "«bring dir's», «portalo a te».",

  shortDefinition:
    "Atto rituale in cui si alzano i bicchieri con una formula augurale; trasforma il bere in gesto collettivo.",

  register: ["comune", "formale"],
  domains: ["galateo", "convivialità", "retorica", "storia"],

  etymology:
    "Etimologia discussa. La derivazione più accreditata è dal tedesco «bring dir's» " +
    "(porta a te, offro a te), formula di offerta da tavola medievale entrata nell'italiano " +
    "attraverso i mercanti. Da non confondere con Brindisi, città pugliese: l'omonimia ha " +
    "generato un'etimologia popolare non fondata che vorrebbe il termine derivare dal porto " +
    "salentino. Le due storie sono separate.",

  examples: [
    "Il brindisi agli sposi durò tre minuti — il discorso del testimone, dieci.",
    "Alzò il bicchiere senza dire nulla: a volte il brindisi più sincero è quello senza parole.",
    "Il brindisi di fine anno in ufficio aveva quella malinconia tipica delle cose obbligatorie.",
  ],

  synonyms: [
    {
      term: "toast",
      register: "comune",
      context: "anglicismo usato nei contesti più formali o internazionali",
    },
    {
      term: "salute",
      register: "comune",
      context: "la formula del brindisi italiano, per antonomasia",
    },
  ],

  antonyms: [],

  relatedWords: [
    "salute",
    "alla salute",
    "na zdarovje",
    "skål",
    "Zum Wohl",
    "Cheers",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/brindisi/",
    wiktionary: "https://it.wiktionary.org/wiki/brindisi",
  },

  paroliereNote:
    "Il brindisi è uno dei riti sociali più universali e meno analizzati. L'atto di alzare " +
    "il bicchiere insieme prima di bere è documentato in quasi tutte le culture — cambia la " +
    "formula, non il gesto. C'è qualcosa di fondamentale in questa struttura: il momento di " +
    "pausa prima di bere, il contatto visivo o verbale, la formula che trasforma un atto " +
    "individuale in atto collettivo. Il brindisi è, in fondo, un piccolo contratto sociale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Brindisi — definizione, etimologia e uso | Il Paroliere",
    description:
      "Brindisi: atto rituale conviviale che trasforma il bere in gesto collettivo. " +
      "Etimologia tedesca, distinzione dalla città pugliese, uso in italiano.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
