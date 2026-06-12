// Il Paroliere — Lemma: terrorismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const terrorismo: LemmaEntry = {
  lemma: "terrorismo",
  slug: "terrorismo",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Uso sistematico della violenza — o della sua minaccia — contro civili o obiettivi " +
    "simbolici per diffondere paura nella popolazione e perseguire fini politici. Non è " +
    "sinonimo di violenza generica: l'atto terroristico è inseparabile dalla sua " +
    "comunicazione, perché il terrore collettivo che genera è lo strumento, non solo l'effetto.",

  shortDefinition:
    "Violenza politica che usa il terrore come messaggio: colpisce per farsi sentire, non solo per distruggere.",

  register: ["comune", "tecnico", "giornalistico"],
  domains: ["politica", "storia", "sicurezza", "diritto"],

  etymology:
    "Dal latino terror («spavento, terrore»), derivato di terrere («spaventare»). " +
    "Il termine acquista il suo significato politico durante la Rivoluzione Francese, con il " +
    "periodo noto come «la Terreur» (1793–94), passando poi nell'italiano e nell'uso internazionale.",

  examples: [
    "Il terrorismo degli anni di piombo in Italia segnò in modo indelebile la storia della Repubblica.",
    "Il terrorismo non è solo un atto di violenza: è un messaggio calcolato per destabilizzare la società.",
    "La lotta al terrorismo internazionale ha ridisegnato le politiche di sicurezza di molti stati democratici.",
  ],

  synonyms: [
    {
      term: "violenza politica",
      register: "tecnico",
      context: "categoria più ampia che include il terrorismo",
    },
    {
      term: "eversione",
      register: "giuridico",
      context: "in diritto italiano, condotta volta a sovvertire l'ordine costituzionale",
    },
  ],

  antonyms: [
    {
      term: "dialogo politico",
      register: "comune",
      context: "metodo alternativo al conflitto violento",
    },
    {
      term: "resistenza nonviolenta",
      register: "comune",
      context: "opposizione politica senza uso della forza",
    },
  ],

  relatedWords: [
    "kommando",
    "incursione",
    "sabotaggio",
    "eversione",
    "attentato",
    "brigate rosse",
    "anni di piombo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/terrorismo/",
    wiktionary: "https://it.wiktionary.org/wiki/terrorismo",
  },

  paroliereNote:
    "Terrorismo è una parola che il giornalismo e la politica usano spesso in modo impreciso, " +
    "applicandola a qualsiasi atto di violenza organizzata. La distinzione essenziale è nel " +
    "meccanismo comunicativo: un atto terroristico è progettato per produrre terrore " +
    "diffuso — nella popolazione, non solo nelle vittime dirette. È questa componente di " +
    "messaggio amplificato che distingue il terrorismo dalla violenza criminale comune o dalla " +
    "guerra convenzionale. In Italia, il fenomeno degli anni Settanta e Ottanta è studiato " +
    "in profondità da storici e politologi: le principali organizzazioni del periodo — " +
    "Brigate Rosse (https://it.wikipedia.org/wiki/Brigate_Rosse), " +
    "NAR - Nuclei Armati Rivoluzionari (https://it.wikipedia.org/wiki/Nuclei_Armati_Rivoluzionari), " +
    "NAP - Nuclei Armati Proletari (https://it.wikipedia.org/wiki/Nuclei_Armati_Proletari), " +
    "Partito Comunista Combattente (https://it.wikipedia.org/wiki/Partito_Comunista_Combattente) — " +
    "sono documentate nelle rispettive voci Wikipedia. Per analisi geopolitica e prospettiva " +
    "internazionale, l'ISPI offre ricerche e report aggiornati: https://www.ispionline.it.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Terrorismo — definizione, origine e uso | Il Paroliere",
    description:
      "Terrorismo: definizione originale, etimologia e uso in italiano. " +
      "Violenza politica che usa il terrore come strumento di comunicazione.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
