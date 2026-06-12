// Il Paroliere — Lemma: barlume
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const barlume: LemmaEntry = {
  lemma: "barlume",
  slug: "barlume",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Luce fioca e incerta, quella che stenta a imporsi — il chiarore di una finestra chiusa, " +
    "il riflesso lontano di una candela. In senso figurato indica qualcosa che c'è appena, " +
    "ma c'è: un barlume di speranza, di ragione, di memoria. La sua forza semantica sta tutta " +
    "in quella tenacia del minimo.",

  shortDefinition:
    "Luce tenue che stenta a imporsi; in senso figurato, qualcosa che esiste appena ma con ostinazione.",

  register: ["comune", "letterario"],
  domains: ["percezione", "figurato"],

  etymology:
    "Di origine incerta; probabilmente composto da baro- (opaco, scuro) e lume, con un'inversione " +
    "semantica: non la luce piena, ma la luce che quasi non c'è. Attestato in italiano dal Cinquecento.",

  examples: [
    "Attraverso le persiane socchiuse entrava un barlume di luce che non bastava a leggere.",
    "Anche nei momenti peggiori, le restava un barlume di ironia — e quello la teneva in piedi.",
    "Un barlume di memoria: il nome non arrivava, ma il viso era lì, nitido.",
  ],

  synonyms: [
    {
      term: "chiarore",
      register: "comune",
      context: "luce diffusa e tenue, simile al barlume ma meno connotata",
    },
    {
      term: "fioca luce",
      register: "letterario",
      context: "costruzione aggettivale equivalente, tipica della prosa letteraria",
    },
    {
      term: "lumicino",
      register: "comune",
      context: "piccola luce, spesso con connotazione affettiva o di fragilità",
    },
  ],

  antonyms: [
    {
      term: "bagliore",
      register: "comune",
      context: "luce intensa e improvvisa, opposto del barlume per intensità",
    },
    {
      term: "fulgore",
      register: "letterario",
      context: "luminosità piena e maestosa, all'estremo opposto della scala",
    },
    {
      term: "oscurità",
      register: "comune",
      context: "assenza totale di luce, dove nemmeno un barlume sopravvive",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "lampo",
    "fulgore",
    "guizzo",
    "luminosità",
    "oscurità",
    "penombra",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/barlume/",
    wiktionary: "https://it.wiktionary.org/wiki/barlume",
  },

  paroliereNote:
    "Il barlume è forse il più umano dei lemmi di questo cluster: non abbaglia, non risplende, " +
    "non guizza. Si limita a esserci, con una tenacia silenziosa. L'uso figurato — «un barlume " +
    "di speranza» — dice qualcosa che «una piccola speranza» non riesce a dire: c'è quasi " +
    "nulla, eppure è sufficiente. La debolezza è la sua forza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Barlume — definizione e senso figurato | Il Paroliere",
    description:
      "Barlume: luce fioca che stenta a imporsi; in senso figurato, la tenacia del minimo. " +
      "Definizione originale, etimologia e uso letterario.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
