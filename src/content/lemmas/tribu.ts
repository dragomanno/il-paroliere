// Il Paroliere — Lemma: tribù
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tribu: LemmaEntry = {
  lemma: "tribù",
  slug: "tribu",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In senso antropologico, un gruppo sociale organizzato per legami di " +
    "parentela, territorio condiviso e regole proprie, precedente o alternativo " +
    "alla struttura dello stato moderno. Nell'uso figurato contemporaneo indica " +
    "qualsiasi comunità coesa attorno a un'identità comune — di gusto, consumo, " +
    "opinione — spesso con un accento su chi ne resta fuori quanto su chi ne fa parte.",

  shortDefinition:
    "Gruppo sociale legato da parentela e territorio; in senso figurato, qualsiasi comunità coesa attorno a un'identità comune.",

  register: ["comune", "tecnico"],
  domains: ["antropologia", "sociologia", "politica"],

  etymology:
    "Dal latino tribus, in origine una delle tre suddivisioni del popolo romano " +
    "arcaico, poi estesa a designare i gruppi organizzati per parentela di popoli " +
    "diversi.",

  examples: [
    "Gli antropologi ottocenteschi applicarono il concetto di tribù a strutture sociali molto diverse tra loro, spesso semplificandole.",
    "Sui social, ogni fandom finisce per comportarsi come una tribù: codici propri, gergo proprio, confini netti verso l'esterno.",
    "Il marketing tribale punta esattamente su questo: vendere non un prodotto, ma l'appartenenza a una tribù di consumatori.",
  ],

  synonyms: [
    {
      term: "clan",
      register: "comune",
      context: "più stretto, quasi sempre legato a un unico ceppo familiare",
    },
    {
      term: "comunità",
      register: "comune",
      context: "più neutro, senza l'enfasi sui confini rigidi verso l'esterno",
    },
  ],

  antonyms: [],

  relatedWords: ["tribalismo", "appartenenza", "clan", "identità", "comunità"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/trib%C3%B9",
  },

  paroliereNote:
    "Tribù, nell'uso contemporaneo fuori dall'antropologia, ha perso quasi del " +
    "tutto il legame con la parentela di sangue e ha conservato solo la struttura " +
    "logica: un dentro compatto e un fuori ben distinto. È la parola giusta per " +
    "descrivere comunità che si definiscono più per ciò che escludono che per ciò " +
    "che condividono.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tribù — Il Paroliere",
    description:
      "Definizione originale di 'tribù': gruppo sociale legato da parentela e " +
      "territorio, e in senso figurato qualsiasi comunità coesa attorno a un'identità comune. Con esempi ed etimologia.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
