// Il Paroliere — Lemma: labile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const labile: LemmaEntry = {
  lemma: "labile",
  slug: "labile",
  partOfSpeech: "aggettivo",

  definition:
    "Che tende a dissolversi prima di fissarsi, senza lasciare traccia duratura. Si dice di ricordi " +
    "che sfumano appena evocati, di emozioni che attraversano senza depositarsi, di stati mentali che " +
    "non reggono il peso del tempo. Non è fragilità — la cosa fragile si rompe e rimane; il labile " +
    "scivola via come se non fosse mai stato del tutto.",

  shortDefinition:
    "Di ciò che non riesce a fissarsi: ricordi che sfumano, emozioni che attraversano, stati mentali che non reggono.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "tempo", "memoria"],

  etymology:
    "Dal latino labilis, derivato di labi, 'scivolare, cadere'. " +
    "La stessa radice di lapsus — lo scivolamento involontario — e di collasso.",

  examples: [
    "Il ricordo era labile: ogni volta che cercava di tenerlo, sfumava.",
    "Una felicità labile non è meno reale — è solo meno duratura.",
    "Il suo stato d'umore era labile in quel periodo: alto al mattino, basso nel tardo pomeriggio.",
    "Labile come una luce su un muro che cambia angolo senza che tu te ne accorga.",
  ],

  synonyms: [
    {
      term: "effimero",
      register: "comune",
      context: "di breve durata, con connotazione temporale più esplicita",
    },
    {
      term: "fugace",
      register: "comune",
      context: "che passa rapidamente, con enfasi sulla velocità",
    },
    {
      term: "instabile",
      register: "comune",
      context: "che cambia, ma non necessariamente scompare come il labile",
    },
  ],

  antonyms: [
    {
      term: "duraturo",
      register: "comune",
      context: "che resiste al tempo e lascia traccia",
    },
    {
      term: "indelebile",
      register: "comune",
      context: "impossibile da cancellare o dimenticare",
    },
  ],

  relatedWords: [
    "labilità",
    "lapsus",
    "effimero",
    "fugace",
    "dissolversi",
    "memoria",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/labile/",
    wiktionary: "https://it.wiktionary.org/wiki/labile",
  },

  paroliereNote:
    "La distinzione che questa voce introduce — tra fragilità e labilità — è raramente esplicitata " +
    "nel lessico comune, eppure descrive due esperienze molto diverse: la cosa fragile si rompe e " +
    "i frammenti restano; la cosa labile sparisce senza lasciare bordi netti. " +
    "È la differenza tra un bicchiere rotto e una nebbia che si dirada.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Labile — Il Paroliere",
    description:
      "Definizione originale di 'labile': di ciò che non riesce a fissarsi, che scivola via senza lasciare traccia. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
