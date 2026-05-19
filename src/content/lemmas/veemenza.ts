// Il Paroliere — Lemma: veemenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const veemenza: LemmaEntry = {
  lemma: "veemenza",
  slug: "veemenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Intensità impetuosa di un sentimento, di un gesto o di un discorso, in cui " +
    "l'energia non si trattiene ma si manifesta tutta in superficie, visibile e " +
    "diretta. Non è necessariamente eccesso: può essere la forma che assume la " +
    "passione autentica quando non si censura. In retorica, indica la forza " +
    "espressiva capace di travolgere l'ascoltatore senza artificio.",

  shortDefinition:
    "Forza impetuosa e manifesta di un sentimento o di un discorso; passione che non si trattiene.",

  register: ["comune", "letterario"],
  domains: ["emozione", "retorica", "carattere"],

  etymology:
    "Dal latino vehementia, derivato di vehemens ('impetuoso, ardente'), " +
    "probabilmente composto di vehere ('portare, trascinare') e mens ('mente'): " +
    "letteralmente 'ciò che trascina la mente'. Attestato in italiano dal XIV secolo.",

  examples: [
    "Parlava con una veemenza che rendeva difficile non essere convinti, " +
    "anche quando si aveva qualcosa da obiettare.",
    "Non era rabbia la sua — era veemenza: quella spinta che non lascia " +
    "scelta tra il dire e il tacere.",
    "La veemenza con cui difese la propria posizione sorprese anche chi " +
    "la conosceva bene.",
    "In certi discorsi la veemenza è tutto: senza quella forza, le parole " +
    "giuste non bastano.",
  ],

  synonyms: [
    {
      term: "impeto",
      register: "comune",
      context: "slancio improvviso e forte — più fisico, meno retorico",
    },
    {
      term: "ardore",
      register: "letterario",
      context: "calore emotivo — con sfumatura più positiva e meno travolgente",
    },
    {
      term: "foga",
      register: "comune",
      context: "entusiasmo irrefrenabile nell'agire o nel parlare",
    },
    {
      term: "passione",
      register: "comune",
      context: "termine più ampio — la veemenza è la passione quando si manifesta",
    },
  ],

  antonyms: [
    {
      term: "moderazione",
      register: "comune",
      context: "misura nel sentire e nell'esprimere",
    },
    {
      term: "compostezza",
      register: "comune",
      context: "controllo esteriore che non lascia trapelare l'intensità interna",
    },
    {
      term: "flemma",
      register: "comune",
      context: "calma imperturbabile, indifferenza agli stimoli emotivi",
    },
  ],

  relatedWords: [
    "veemente",
    "veementemente",
    "impeto",
    "ardore",
    "foga",
    "intensità",
    "passione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/veemenza/",
    wiktionary: "https://it.wiktionary.org/wiki/veemenza",
  },

  paroliereNote:
    "La veemenza ha avuto cattiva stampa — viene spesso associata all'eccesso, " +
    "alla perdita di controllo, all'inaffidabilità emotiva. Ma c'è una veemenza " +
    "che è solo onestà: il rifiuto di ammorbidire ciò che si pensa, di calibrare " +
    "il tono per far sentire tutti a proprio agio. I retori classici la " +
    "consideravano una virtù, non un difetto: la prova che ciò che si dice " +
    "è davvero creduto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Veemenza — Il Paroliere",
    description:
      "Definizione originale di 'veemenza': forza impetuosa di un sentimento o " +
      "discorso, passione che non si censura. Con esempi, sinonimi ed etimologia latina.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
