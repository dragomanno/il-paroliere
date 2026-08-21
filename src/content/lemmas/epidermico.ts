// Il Paroliere — Lemma: epidermico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const epidermico: LemmaEntry = {
  lemma: "epidermico",
  slug: "epidermico",
  partOfSpeech: "aggettivo",
  gender: "variabile (epidermico/epidermica)",

  definition:
    "Relativo all'epidermide, lo strato più superficiale della pelle; per " +
    "estensione, nella locuzione «reazione epidermica», descrive una risposta " +
    "istintiva e immediata, che precede il pensiero razionale e si manifesta " +
    "prima di essere elaborata. Indica un livello di reazione più superficiale " +
    "e rapido, non necessariamente più debole.",

  shortDefinition:
    "Relativo alla pelle; in senso figurato, una reazione istintiva e immediata, prima ancora del pensiero.",

  register: ["comune", "tecnico"],
  domains: ["medicina", "psicologia", "quotidiano"],

  etymology:
    "Dal greco epidermís, composto di epí («sopra») e dérma («pelle»), attraverso " +
    "il latino scientifico epidermis. La forma aggettivale entra nell'italiano " +
    "medico del XIX secolo.",

  examples: [
    "L'irritazione epidermica si era diffusa su tutto l'avambraccio dopo il contatto con la pianta.",
    "La sua fu una reazione epidermica: si irrigidì un istante prima ancora di capire cosa fosse stato detto.",
    "Il rifiuto era epidermico, quasi fisico — non una posizione ragionata, ma un riflesso.",
  ],

  synonyms: [
    {
      term: "istintivo",
      register: "comune",
      context: "più generico, senza il riferimento fisico alla pelle",
    },
    {
      term: "superficiale",
      register: "comune",
      context: "in senso figurato può sovrapporsi, ma epidermico non implica leggerezza di giudizio",
    },
    {
      term: "viscerale",
      register: "letterario",
      context: "reazione più profonda e intensa; epidermico resta invece al livello della superficie",
    },
  ],

  antonyms: [
    {
      term: "ponderato",
      register: "comune",
      context: "reazione meditata, opposta all'immediatezza epidermica",
    },
    {
      term: "razionale",
      register: "tecnico",
      context: "risposta elaborata dal pensiero, non dal riflesso",
    },
  ],

  relatedWords: ["epidermide", "istinto", "riflesso", "viscerale", "palpabile"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/epidermico",
  },

  paroliereNote:
    "La reazione epidermica occupa un posto preciso nella scala dell'istinto: più " +
    "immediata del ponderato, ma più superficiale del viscerale — sta esattamente " +
    "dove suggerisce l'anatomia, al primo strato, quello che sente per primo e più " +
    "in fretta di tutti gli altri.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Epidermico — Il Paroliere",
    description:
      "Definizione originale di 'epidermico': relativo alla pelle, e in senso " +
      "figurato una reazione istintiva e immediata. Con esempi, etimologia e distinzione da viscerale.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
