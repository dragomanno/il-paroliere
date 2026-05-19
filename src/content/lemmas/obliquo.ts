// Il Paroliere — Lemma: obliquo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const obliquo: LemmaEntry = {
  lemma: "obliquo",
  slug: "obliquo",
  partOfSpeech: "aggettivo",

  definition:
    "Che non segue la linea retta o diretta: in geometria e nello spazio fisico, ciò che forma un " +
    "angolo con la verticale o l'orizzontale; nel comportamento e nella comunicazione, ciò che procede " +
    "per vie traverse invece di affrontare apertamente. Uno sguardo obliquo, un'allusione obliqua " +
    "portano con sé un'ambivalenza costitutiva — possono essere astuzia o eleganza, elusione o stile.",

  shortDefinition:
    "Che devia dalla linea retta — nello spazio come geometria, nel comportamento come scelta di non procedere in modo diretto.",

  register: ["comune", "letterario"],
  domains: ["spazio", "comportamento", "comunicazione"],

  etymology:
    "Dal latino obliquus, 'di traverso, non diretto'. Composto di ob- (contro, di fronte) " +
    "e un elemento connesso a liquis (obliquo, pendente). Attestato in italiano dal Trecento.",

  examples: [
    "La luce entrava obliqua nel tardo pomeriggio, disegnando ombre lunghe sul pavimento.",
    "Una critica obliqua è spesso più efficace di una frontale — e più difficile da rispedire al mittente.",
    "Procedeva per vie oblique: non mentiva mai, ma raramente diceva le cose in modo diretto.",
    "Uno sguardo obliquo — non di lato, ma di angolo — come chi osserva senza voler essere visto.",
  ],

  synonyms: [
    {
      term: "trasversale",
      register: "comune",
      context: "che attraversa di lato, con sfumatura più tecnica",
    },
    {
      term: "indiretto",
      register: "comune",
      context: "che non va al punto, più neutro dell'obliquo",
    },
    {
      term: "allusivo",
      register: "comune",
      context: "che suggerisce senza affermare, nel registro comunicativo",
    },
  ],

  antonyms: [
    {
      term: "diretto",
      register: "comune",
      context: "che va al punto senza aggirarsi",
    },
    {
      term: "perpendicolare",
      register: "tecnico",
      context: "che forma un angolo retto, opposto geometrico",
    },
  ],

  relatedWords: [
    "obliquamente",
    "obliquità",
    "trasversale",
    "indiretto",
    "allusione",
    "angolo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/obliquo/",
    wiktionary: "https://it.wiktionary.org/wiki/obliquo",
  },

  paroliereNote:
    "Obliquo è una parola che sa di angolo: non di curva, non di zigzag, ma di quella deviazione " +
    "precisa e controllata che sa dove sta andando. Nel senso figurato porta con sé qualcosa di " +
    "tatticamente intelligente — chi procede per vie oblique non è necessariamente disonesto, " +
    "spesso è semplicemente più consapevole delle resistenze che incontrerebbe andando dritto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Obliquo — Il Paroliere",
    description:
      "Definizione originale di 'obliquo': che devia dalla linea retta — in geometria e nel comportamento. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
