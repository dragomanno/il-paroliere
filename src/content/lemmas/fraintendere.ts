// Il Paroliere — Lemma: fraintendere
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fraintendere: LemmaEntry = {
  lemma: "fraintendere",
  slug: "fraintendere",
  partOfSpeech: "verbo",

  definition:
    "Interpretare in modo errato o distorto ciò che qualcuno ha detto, " +
    "scritto o inteso comunicare. Il fraintendimento può nascere tanto " +
    "dall'ambiguità di chi parla quanto dal contesto di chi ascolta: non è " +
    "sempre un errore di ricezione, ma spesso un disallineamento tra " +
    "l'intenzione e la sua lettura.",

  shortDefinition:
    "Capire male ciò che qualcuno intendeva dire, per ambiguità del messaggio o distanza tra i contesti.",

  register: ["comune"],
  domains: ["comunicazione"],

  examples: [
    "Lo aveva frainteso: non stava criticando il progetto, stava chiedendo aiuto.",
    "Certi fraintendimenti nascono non da mala fede ma da contesti così diversi che le stesse parole significano cose diverse.",
    "La comunicazione scritta fraintende più di quella orale perché manca il tono.",
  ],

  synonyms: [
    {
      term: "equivocare",
      register: "comune",
      context: "simile, con sfumatura di doppio senso o ambiguità reciproca",
    },
    {
      term: "frainteso",
      register: "comune",
      context: "participio passato usato come aggettivo — chi non è stato capito",
    },
  ],

  antonyms: [
    {
      term: "comprendere",
      register: "comune",
      context: "cogliere il significato inteso da chi comunica",
    },
  ],

  relatedWords: [
    "fraintendimento",
    "equivoco",
    "malinteso",
    "interpretazione",
    "comunicazione",
    "ambiguità",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/fraintendere",
  },

  paroliereNote:
    "Fraintendere è umano — e spesso inevitabile. Le parole non trasportano " +
    "significati: creano occasioni di senso che dipendono da chi le emette e " +
    "da chi le riceve. Un fraintendimento non è sempre colpa di qualcuno: " +
    "è spesso il segnale che due mondi si sono incontrati con mappe diverse. " +
    "Non correggersi, però, quando si capisce di avere frainteso: quello è " +
    "un'altra cosa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Fraintendere — Il Paroliere",
    description:
      "Definizione originale di 'fraintendere': capire male per ambiguità o " +
      "distanza di contesti. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
