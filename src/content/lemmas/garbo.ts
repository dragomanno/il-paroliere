// Il Paroliere — Lemma: garbo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const garbo: LemmaEntry = {
  lemma: "garbo",
  slug: "garbo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Qualità di chi sa muoversi, parlare e agire con misura e delicatezza, senza " +
    "risultare pesante né sciatto. Il garbo non è semplice cortesia formale: è la " +
    "capacità di calibrare gesti, parole e presenze in modo che l'altro si senta " +
    "visto e rispettato. In senso esteso, indica anche la cura artigianale con cui " +
    "qualcosa viene eseguito, quella precisione attenta che fa la differenza tra il " +
    "fatto e il fatto bene.",

  shortDefinition:
    "Grazia discreta nel comportamento e nella cura dell'esecuzione.",

  register: ["comune", "colloquiale"],
  domains: ["comportamento", "artigianato", "relazioni sociali"],

  etymology:
    "Dal provenzale garbo, 'grazia, eleganza', forse dall'antico alto tedesco " +
    "garawi, 'pronto, ordinato'. Attestato in italiano già nel Trecento.",

  examples: [
    "Rispose con garbo alle domande scomode, senza scivolare nella difensiva.",
    "Aveva quel garbo toscano che non si impara dai libri: veniva dalla bottega.",
    "Una cosa fatta a garbo — come si dice a Firenze — non è solo corretta: è precisa, " +
    "curata, come si deve.",
    "Il garbo con cui gestiva i disaccordi era la sua forma di rispetto per gli altri.",
  ],

  synonyms: [
    {
      term: "grazia",
      register: "comune",
      context: "riferito alla leggerezza dei movimenti o del portamento",
    },
    {
      term: "eleganza",
      register: "formale",
      context: "con sfumatura estetica più marcata",
    },
    {
      term: "cortesia",
      register: "comune",
      context: "più vicino alle buone maniere convenzionali",
    },
    {
      term: "delicatezza",
      register: "comune",
      context: "enfatizza la cura nell'evitare brusquerie",
    },
    {
      term: "garbatezza",
      register: "meno comune",
      note:
        "Forma derivata, più esplicita ma meno usata di 'garbo'. Tende verso il " +
        "registro formale o leggermente burocratico.",
    },
  ],

  antonyms: [
    {
      term: "sgarbatezza",
      register: "comune",
      context: "mancanza di tatto e di rispetto nelle relazioni",
    },
    {
      term: "rozzezza",
      register: "comune",
      context: "assenza di cura nei modi e nell'esecuzione",
    },
    {
      term: "goffaggine",
      register: "colloquiale",
      context: "impaccio fisico o sociale",
    },
  ],

  relatedWords: [
    "garbato",
    "garbatezza",
    "grazia",
    "delicatezza",
    "tatto",
    "misura",
    "raffinatezza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/garbo/",
    wiktionary: "https://it.wiktionary.org/wiki/garbo",
  },

  paroliereNote:
    "Garbo è una di quelle parole italiane che resistono alla traduzione esatta. " +
    "Il suo corrispettivo inglese più vicino — 'grace' o 'poise' — cattura il " +
    "lato estetico, ma perde il senso artigianale e umano che la parola porta con " +
    "sé in certi contesti regionali, soprattutto toscani. 'Una cosa fatta a garbo' " +
    "non è solo bella: è giusta, è come doveva essere fatta. C'è dignità nel garbo, " +
    "non solo apparenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Garbo — Il Paroliere",
    description:
      "Definizione originale di 'garbo': grazia discreta nel comportamento e " +
      "nella cura dell'esecuzione. Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-18",
  updatedAt: "2026-05-18",
};
