// Il Paroliere — Lemma: solingo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const solingo: LemmaEntry = {
  lemma: "solingo",
  slug: "solingo",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Che vive o si trova in solitudine, lontano dalla frequentazione degli altri; " +
    "detto anche di luoghi remoti, silenziosi, privi di vita umana. L'aggettivo è di " +
    "registro alto e oggi percepito come arcaico fuori dal contesto poetico: il suo " +
    "uso corrente è quasi esclusivamente letterario, legato soprattutto alla " +
    "tradizione lirica italiana.",

  shortDefinition:
    "Solitario, appartato — aggettivo di registro alto, quasi esclusivamente poetico " +
    "nell'italiano contemporaneo.",

  register: ["letterario", "arcaico"],
  domains: ["letteratura", "poesia"],

  etymology:
    "Dal latino tardo solitaneus, derivato di solus. La forma italiana si afferma nel " +
    "Medioevo per via poetica e rimane confinata al registro letterario, mai davvero " +
    "entrata nell'uso parlato.",

  synonyms: [
    { term: "solitario", register: "comune", context: "equivalente neutro, di registro più basso e uso corrente" },
    { term: "appartato", register: "comune", context: "privilegia il senso spaziale rispetto a quello interiore" },
    { term: "romito", register: "letterario/arcaico", context: "sfumatura ascetica, ancora più desueto" },
    { term: "ermo", register: "letterario/arcaico", context: "usato da Leopardi nell'Infinito: 'questo ermo colle'" }
  ],

  antonyms: [
    { term: "affollato", register: "comune", context: "antonimo spaziale" },
    { term: "frequentato", register: "comune", context: "detto di luoghi" }
  ],

  relatedWords: [
    "solitudine",
    "ermo",
    "romito",
    "eremo",
    "silenzioso",
    "appartato",
    "leopardiano"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/solingo"
  },

  paroliereNote:
    "Solingo è inseparabile da Leopardi, che lo usa nel Passero solitario — 'tu, " +
    "solingo augelletto' — con una precisione emotiva che nessun sinonimo potrebbe " +
    "sostituire. L'aggettivo porta con sé tutta la solitudine volontaria del poeta di " +
    "Recanati, quella che non cerca consolazione ma contempla la propria condizione " +
    "con lucidità quasi crudele. Usarlo fuori dalla poesia suona anacronistico, ma è " +
    "esattamente quella distanza storica a renderlo così carico.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Solingo — Il Paroliere",
    description:
      "Solitario, appartato — aggettivo di registro alto, quasi esclusivamente poetico " +
      "nell'italiano contemporaneo.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};