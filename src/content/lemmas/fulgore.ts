// Il Paroliere — Lemma: fulgore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fulgore: LemmaEntry = {
  lemma: "fulgore",
  slug: "fulgore",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Luminosità piena, stabile e maestosa — non l'evento improvviso del bagliore, ma la " +
    "qualità duratura di ciò che risplende con autorevolezza. In senso figurato indica " +
    "splendore morale, intellettuale o artistico: il fulgore di un'opera, di un ingegno, " +
    "di un'epoca. Registro elevato, da usare con misura.",

  shortDefinition:
    "Luminosità piena e stabile, senza il carattere fugace del bagliore; in senso figurato, splendore morale o intellettuale.",

  register: ["letterario", "formale"],
  domains: ["percezione", "retorica", "figurato"],

  etymology:
    "Dal latino fulgorem (accusativo di fulgor), derivato di fulgere (splendere, risplendere). " +
    "La stessa radice di fulmine e fulgido. Già in latino indicava la luminosità intensa e " +
    "duratura, opposta al lampo istantaneo.",

  examples: [
    "Il fulgore di quella civiltà era ancora visibile nelle pietre che la ricoprivano.",
    "Scrisse nel fulgore della maturità, quando tutto sembrava chiaro e necessario.",
    "Usare «fulgore» per descrivere una campagna pubblicitaria suona inevitabilmente ironico.",
  ],

  synonyms: [
    {
      term: "splendore",
      register: "comune",
      context: "luminosità ricca e piacevole, registro più accessibile del fulgore",
    },
    {
      term: "bagliore",
      register: "comune",
      context: "luce intensa ma fugace, opposto del fulgore per durata",
    },
    {
      term: "luminosità",
      register: "comune",
      context: "qualità della luce, meno carico retoricamente",
    },
  ],

  antonyms: [
    {
      term: "oscurità",
      register: "comune",
      context: "assenza di luce, opposto diretto",
    },
    {
      term: "mediocrità",
      register: "comune",
      context: "nel senso figurato, l'opposto dello splendore intellettuale o morale",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "lampo",
    "barlume",
    "guizzo",
    "luminosità",
    "oscurità",
    "penombra",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/fulgore/",
    wiktionary: "https://it.wiktionary.org/wiki/fulgore",
  },

  paroliereNote:
    "Il fulgore è una parola che richiede contesto. Usata nella prosa quotidiana produce quasi " +
    "inevitabilmente un effetto ironico involontario — troppo alta, troppo solenne per il " +
    "momento. Il suo habitat naturale è la saggistica storica, la critica letteraria, il " +
    "discorso commemorativo. La terza frase degli esempi è lì apposta: un piccolo avvertimento " +
    "stilistico mascherato da esempio.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Fulgore — definizione e uso letterario | Il Paroliere",
    description:
      "Fulgore: luminosità piena e stabile; in senso figurato, splendore morale o intellettuale. " +
      "Definizione originale, etimologia latina e avvertenza stilistica.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
