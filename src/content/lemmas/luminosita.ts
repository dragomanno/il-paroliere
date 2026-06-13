// Il Paroliere â Lemma: luminositÃ 
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const luminosita: LemmaEntry = {
  lemma: "luminosità",
  slug: "luminosita",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Quantità o qualità della luce emessa, riflessa o percepita da un oggetto o da un " +
    "ambiente — stabile e misurabile, a differenza del bagliore che è evento. In fotografia " +
    "e in fisica è parametro tecnico preciso. In senso figurato indica chiarezza di carattere, " +
    "trasparenza interiore: una persona dalla luminosità rara è quella in cui non si trovano " +
    "zone d’ombra.",

  shortDefinition:
    "Quantità o qualità della luce di un oggetto o ambiente; in fotografia parametro tecnico; in senso figurato, chiarezza di carattere.",

  register: ["comune", "tecnico", "letterario"],
  domains: ["percezione", "fisica", "fotografia", "estetica", "figurato"],

  etymology:
    "Da luminoso (dal latino luminosus, derivato di lumen, luce) + suffisso astratto -ità. " +
    "Attestato in italiano in senso fisico dal Seicento, in senso figurato con uso crescente " +
    "nel Novecento.",

  examples: [
    "La luminosità dell’appartamento era il suo punto di forza: tre esposizioni diverse, sole tutto il giorno.",
    "Aumenta la luminosità dello schermo: non riesco a vedere bene con questa luce esterna.",
    "C’era in lei una luminosità tranquilla — non abbagliava, ma illuminava chi le stava vicino.",
  ],

  synonyms: [
    {
      term: "chiarezza",
      register: "comune",
      context: "nel senso figurato, qualità di chi è privo di opacità",
    },
    {
      term: "splendore",
      register: "letterario",
      context: "luminosità con connotazione di pienezza e meraviglia",
    },
    {
      term: "brillantezza",
      register: "comune",
      context: "intensità luminosa con connotazione di vivacità",
    },
  ],

  antonyms: [
    {
      term: "oscurità",
      register: "comune",
      context: "assenza di luce, opposto diretto",
    },
    {
      term: "opacità",
      register: "comune",
      context: "nel senso figurato, mancanza di trasparenza o chiarezza",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "lampo",
    "barlume",
    "fulgore",
    "guizzo",
    "oscurità",
    "penombra",
    "ombra",
    "diafano",
    "contrasto-estetico",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/luminosita/",
    wiktionary: "https://it.wiktionary.org/wiki/luminosit%C3%A0",
  },

  paroliereNote:
    "La distinzione tra luminosità e bagliore è strutturale: la luminosità è una condizione, " +
    "il bagliore è un evento. Questa coppia vale come esempio di come Il Paroliere gestisce " +
    "i cluster semantici — non sinonimi, ma prospettive diverse sullo stesso campo. Una persona " +
    "può avere luminosità; non può avere un bagliore permanente senza che smetta di essere " +
    "un bagliore.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Luminosità — definizione e uso figurato | Il Paroliere",
    description:
      "Luminosità: qualità stabile della luce, parametro tecnico in fotografia, " +
      "chiarezza di carattere in senso figurato. Definizione originale ed etimologia.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-13",
};
