// Il Paroliere — Lemma: stigma
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const stigma: LemmaEntry = {
  lemma: "stigma",
  slug: "stigma",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Un attributo — una malattia, una condizione, un'appartenenza — che la " +
    "società percepisce come screditante, al punto da sovrastare ogni altra " +
    "caratteristica di chi lo porta e da definirne l'identità sociale agli occhi " +
    "degli altri. Il sociologo Erving Goffman ne ha fatto uno strumento di " +
    "analisi centrale: lo stigma non risiede nell'attributo in sé, ma nella " +
    "reazione sociale che quell'attributo provoca.",

  shortDefinition:
    "Attributo percepito come screditante che definisce l'identità sociale di chi lo porta agli occhi degli altri.",

  register: ["tecnico", "comune"],
  domains: ["sociologia", "psicologia", "salute pubblica"],

  etymology:
    "Dal greco stígma, «marchio, segno impresso», originariamente il marchio a " +
    "fuoco inflitto a schiavi e criminali nell'antichità. Goffman ne ha ripreso " +
    "il senso figurato nel suo saggio Stigma del 1963.",

  examples: [
    "Lo stigma legato alla malattia mentale spinge molte persone a rinunciare a cercare aiuto.",
    "Goffman distingueva lo stigma visibile, immediatamente riconoscibile, da quello nascosto, che la persona può scegliere di rivelare o meno.",
    "Rimuovere lo stigma attorno a una condizione non significa negarla, ma smettere di farla coincidere con l'intera identità di chi la vive.",
  ],

  synonyms: [
    {
      term: "marchio",
      register: "letterario",
      context: "più diretto e fisico, conserva meglio l'origine etimologica",
    },
    {
      term: "discredito",
      register: "comune",
      context: "enfatizza l'effetto sociale più che la condizione che lo genera",
    },
  ],

  antonyms: [
    {
      term: "normalizzazione",
      register: "tecnico",
      context: "il processo per cui una condizione cessa di essere percepita come screditante",
    },
  ],

  relatedWords: ["discriminazione", "pregiudizio", "identità", "esclusione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/stigma",
  },

  paroliereNote:
    "Lo stigma di Goffman è un concetto relazionale, non una proprietà della " +
    "persona: è la società che stigmatizza, non l'attributo che stigmatizza da " +
    "solo. Questo spiega perché lo stesso tratto può essere uno stigma in un " +
    "contesto e irrilevante in un altro — la reazione collettiva, non il tratto, " +
    "fa la differenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Stigma — Il Paroliere",
    description:
      "Definizione originale di 'stigma': attributo percepito come screditante " +
      "che definisce l'identità sociale. Con il riferimento a Goffman, esempi ed etimologia dal greco.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
