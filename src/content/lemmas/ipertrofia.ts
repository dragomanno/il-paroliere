// Il Paroliere — Lemma: ipertrofia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ipertrofia: LemmaEntry = {
  lemma: "ipertrofia",
  slug: "ipertrofia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In medicina, aumento del volume di un organo o di un tessuto dovuto " +
    "all'ingrandimento delle singole cellule che lo compongono — distinto " +
    "dall'iperplasia, che invece moltiplica le cellule. In senso figurato, " +
    "crescita eccessiva e autoreferenziale di qualcosa: una burocrazia, un " +
    "apparato, un ego. Nell'uso comune il termine porta quasi sempre con sé " +
    "un giudizio: è crescita che non serve, che si alimenta di sé stessa.",

  shortDefinition:
    "In medicina, aumento di volume di un organo per ingrandimento cellulare; in senso figurato, crescita sproporzionata e autoreferenziale.",

  register: ["tecnico", "comune"],
  domains: ["biologia", "linguaggio"],

  examples: [
    "L'ipertrofia burocratica era diventata il principale ostacolo al funzionamento dell'ente.",
    "In medicina, l'ipertrofia cardiaca può essere fisiologica — come negli atleti — o patologica.",
    "L'ipertrofia dell'ego non è un difetto raro: è una delle condizioni più comuni nei ruoli di potere.",
  ],

  synonyms: [
    {
      term: "iperplasia",
      register: "tecnico",
      context: "in medicina: aumento per moltiplicazione cellulare, non per ingrandimento",
    },
    {
      term: "elefantiasi",
      register: "comune",
      context: "in senso figurato: crescita abnorme e grottesca",
    },
  ],

  antonyms: [
    {
      term: "atrofia",
      register: "tecnico",
      context: "riduzione di volume e funzione — opposto diretto in medicina",
    },
  ],

  relatedWords: [
    "atrofia",
    "iperplasia",
    "crescita",
    "burocrazia",
    "sproporzionato",
    "autoreferenziale",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/ipertrofia",
  },

  paroliereNote:
    "Ipertrofia ha fatto un viaggio curioso: dal lessico medico preciso è " +
    "entrata nel linguaggio comune come diagnosi implicita di qualcosa che " +
    "ha perso il senso della propria misura. Quando si dice che una burocrazia " +
    "è ipertrofica, si sta dicendo che è cresciuta così tanto da non servire " +
    "più i fini per cui esisteva — solo sé stessa. Non è una metafora innocua.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ipertrofia — Il Paroliere",
    description:
      "Definizione originale di 'ipertrofia': dalla biologia alla crescita " +
      "sproporzionata. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
