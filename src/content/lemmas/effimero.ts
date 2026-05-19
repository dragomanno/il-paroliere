// Il Paroliere — Lemma: effimero
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const effimero: LemmaEntry = {
  lemma: "effimero",
  slug: "effimero",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Ciò che dura pochissimo, destinato a dissolversi prima ancora di lasciare " +
    "un'impronta stabile. Dal greco ephémeros — «che dura un giorno» — porta con " +
    "sé una tensione irrisolta tra il fascino del presente e la consapevolezza " +
    "della sua fine: in filosofia si contrappone all'eterno, nell'uso comune " +
    "descrive mode, emozioni o successi che brillano e svaniscono.",

  shortDefinition:
    "Che dura un giorno, o meno: ciò che esiste nell'attimo senza pretendere l'eternità.",

  register: ["comune", "letterario"],
  domains: ["filosofia", "estetica", "quotidiano", "tempo"],

  etymology:
    "Dal greco ephémeros, composto di epí ('su, durante') e hēméra ('giorno'). " +
    "In origine indicava letteralmente ciò che dura un solo giorno. Attraverso " +
    "il latino epheměrus è entrato nelle lingue europee moderne.",

  examples: [
    "Il successo di quella canzone fu effimero: tre settimane di ascolti, " +
    "poi il silenzio.",
    "C'è qualcosa di bello nell'effimero — il fiore di ciliegio dura poco " +
    "proprio per questo.",
    "Le mode sono per definizione effimere; l'errore è trattarle come tendenze durature.",
    "Non era una felicità solida, ma neanche effimera: durava quanto durava, " +
    "e bastava.",
  ],

  synonyms: [
    {
      term: "transitorio",
      register: "comune",
      context: "che passa, che non è definitivo — meno legato alla brevità estrema",
    },
    {
      term: "fugace",
      register: "letterario",
      context: "che sfugge rapidamente — con più enfasi sulla velocità della sparizione",
    },
    {
      term: "passeggero",
      register: "comune",
      context: "che passa senza lasciare traccia duratura",
    },
    {
      term: "caduco",
      register: "letterario",
      context: "destinato a cadere, a finire — con sfumatura più malinconica",
    },
  ],

  antonyms: [
    {
      term: "eterno",
      register: "comune",
      context: "senza inizio né fine — il polo opposto nella tradizione filosofica",
    },
    {
      term: "duraturo",
      register: "comune",
      context: "che resiste nel tempo, che lascia un'impronta",
    },
    {
      term: "permanente",
      register: "comune",
      context: "che non cambia, che resta",
    },
  ],

  relatedWords: [
    "effimero (s.m.)",
    "fugacità",
    "transitorietà",
    "caducità",
    "temporaneo",
    "istante",
    "attimo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/effimero/",
    wiktionary: "https://it.wiktionary.org/wiki/effimero",
  },

  paroliereNote:
    "Effimero è una delle parole più oneste della lingua: dichiara subito la " +
    "propria condizione. Eppure non è sempre usata in senso negativo — in " +
    "estetica giapponese, l'impermanenza (mono no aware) è una fonte di bellezza, " +
    "non di lutto. Anche in italiano, chiamare «effimero» qualcosa può essere un " +
    "riconoscimento, non solo un giudizio. L'effimero ben vissuto vale l'eterno " +
    "mal sopportato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Effimero — Il Paroliere",
    description:
      "Definizione originale di 'effimero': ciò che dura un giorno, o meno. " +
      "Con esempi, sinonimi, radice greca ephémeros e nota sul bello del transitorio.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
