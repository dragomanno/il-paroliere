// Il Paroliere — Lemma: guizzo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const guizzo: LemmaEntry = {
  lemma: "guizzo",
  slug: "guizzo",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Movimento rapido, scattante e imprevisto — il guizzo di un pesce che cambia direzione, " +
    "di una fiamma che si torce, di uno sguardo che scappa di lato. Applicato alla luce, " +
    "indica un bagliore brevissimo e nervoso, quasi convulso. La connotazione è sempre di " +
    "vitalità, di riflesso pronto, di energia che non si lascia fermare.",

  shortDefinition:
    "Movimento rapido e scattante, di luce come di un corpo vivo; connotazione di vitalità e riflesso pronto.",

  register: ["comune", "letterario"],
  domains: ["percezione", "movimento", "figurato"],

  etymology:
    "Di origine onomatopeica o espressiva, probabilmente connessa al genovese e lombardo " +
    "guizzare (scivolare via rapidamente). La radice sembra imitare il movimento stesso: " +
    "breve, secco, imprevedibile.",

  examples: [
    "Un guizzo di luce sotto la porta: qualcuno era ancora sveglio.",
    "Il pesce sparì con un guizzo tra le alghe prima che potessimo vederlo bene.",
    "Aveva un guizzo negli occhi quando parlava di quel progetto — quella scintilla che non si finge.",
  ],

  synonyms: [
    {
      term: "scatto",
      register: "comune",
      context: "movimento rapido, con connotazione più muscolare e volontaria",
    },
    {
      term: "baleno",
      register: "letterario",
      context: "lampo breve; in senso figurato, in un baleno = istantaneamente",
    },
    {
      term: "bagliore",
      register: "comune",
      context: "nel dominio della luce, più intenso ma meno nervoso del guizzo",
    },
  ],

  antonyms: [
    {
      term: "lentezza",
      register: "comune",
      context: "opposto del ritmo scattante",
    },
    {
      term: "immobilità",
      register: "comune",
      context: "assenza di movimento, opposto della natura dinamica del guizzo",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "lampo",
    "barlume",
    "fulgore",
    "luminosità",
    "oscurità",
    "penombra",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/guizzo/",
    wiktionary: "https://it.wiktionary.org/wiki/guizzo",
  },

  paroliereNote:
    "Il guizzo è uno dei lemmi più trasversali del cluster: descrive la stessa struttura di " +
    "movimento in domini completamente diversi — la luce, il corpo animale, lo sguardo, il " +
    "pensiero. Questa versatilità non è vaghezza: è precisione di forma applicata a contesti " +
    "diversi. Il guizzo dice sempre la stessa cosa: qualcosa di vivo che sfugge prima che " +
    "tu possa afferrarlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Guizzo — definizione ed etimologia | Il Paroliere",
    description:
      "Guizzo: movimento rapido e scattante, di luce come di un corpo vivo. " +
      "Definizione originale, etimologia e uso figurato.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
