// Il Paroliere — Lemma: radici
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const radici: LemmaEntry = {
  lemma: "radici",
  slug: "radici",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "letterario"],
  domains: ["identità", "cultura", "territorio", "famiglia"],

  definition:
    "Nel plurale figurato, i luoghi, le memorie, le lingue e le storie familiari da cui una persona o una comunità sente di provenire. Le radici non coincidono con un'appartenenza sociale presente: richiamano soprattutto l'origine, la continuità ancestrale e il rapporto, anche conflittuale, con un territorio o una genealogia.",

  shortDefinition:
    "Origini, memorie e legami territoriali o familiari che danno continuità alla propria storia.",

  etymology:
    "Plurale di radice, dal latino radix, radicis. Dalla parte della pianta che affonda nel terreno nasce una metafora antica e ancora viva per l'origine, la discendenza e il legame con un luogo.",

  examples: [
    "Ha lasciato la valle da giovane, ma nelle ricette e nelle inflessioni della voce riconosce ancora le proprie radici.",
    "Cercare le radici della famiglia non gli serviva a chiudersi nel passato, ma a capire quali storie aveva ereditato.",
    "Il festival ha dato spazio alle radici locali senza trasformarle in una cartolina per turisti.",
  ],

  synonyms: [
    {
      term: "origini",
      register: "comune",
      note: "Termine più ampio e descrittivo, adatto anche a fatti, idee o fenomeni senza implicare un legame affettivo.",
    },
    {
      term: "ascendenze",
      register: "letterario",
      note: "Sottolinea la discendenza familiare o culturale e ha un tono più genealogico.",
    },
    {
      term: "radicamento",
      register: "comune",
      note: "Indica la condizione o il processo dell'essere ben legati a un luogo o a un contesto.",
    },
  ],

  antonyms: [
    {
      term: "sradicamento",
      register: "comune",
      note: "Perdita o interruzione dolorosa dei riferimenti territoriali, familiari o culturali.",
    },
    {
      term: "disancoraggio",
      register: "letterario",
      note: "Immagine di una vita senza punti stabili di riferimento; è meno comune e più metaforica.",
    },
  ],

  relatedWords: [
    "appartenenza",
    "identità",
    "legame",
    "relazione",
    "estraneamento",
    "alienazione",
    "nostalgia",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/radici",
  },

  paroliereNote:
    "Le → radici guardano all'indietro e in basso: all'origine, alle generazioni, al terreno reale o immaginato da cui si viene. → Appartenenza nomina invece il sentirsi parte di un gruppo nel presente e → identità il modo in cui ci si riconosce nel tempo; le radici possono nutrire entrambe, ma non obbligano a restare fermi né a idealizzare il luogo da cui si parte.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Radici — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Radici, in senso figurato: origini, memorie e legami con una storia familiare o un territorio. Definizione originale, sinonimi, esempi e contesti d'uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
