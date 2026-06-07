// Il Paroliere — Lemma: ironia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ironia: LemmaEntry = {
  lemma: "ironia",
  slug: "ironia",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Figura retorica e modo di espressione che consiste nel dire il contrario di ciò " +
    "che si intende, con l'intenzione che l'ascoltatore colga il significato reale " +
    "sotto la superficie letterale del discorso. A differenza del sarcasmo — che è " +
    "ironia aspra e aggressiva — l'ironia può essere sottile, leggera, persino " +
    "affettuosa. In filosofia, l'ironia socratica è la tecnica dialettica per cui " +
    "Socrate finge ignoranza per smascherare le contraddizioni dell'interlocutore.",

  shortDefinition:
    "Figura retorica che dice il contrario di ciò che intende, contando sulla " +
    "complicità del lettore o ascoltatore per essere compresa.",

  register: ["comune", "letterario", "filosofico"],
  domains: ["linguistica", "retorica", "letteratura", "filosofia", "società"],

  etymology:
    "Dal greco eirōneía («simulazione, dissimulazione»), da eirōn («chi dissimula»), " +
    "derivato di eirein («dire»). Passato nel latino ironia e da lì nelle lingue romanze.",

  examples: [
    "«"Che bel lavoro hai fatto" disse con ironia guardando il disastro lasciato dalla ristrutturazione.»",
    "«L'ironia del destino volle che proprio lui, che aveva sempre schivato le riunioni, fosse nominato responsabile delle assemblee.»",
    "«L'ironia socratica non era derisione: era uno strumento filosofico per portare l'interlocutore a riconoscere i propri limiti.»",
  ],

  synonyms: [
    {
      term: "sarcasmo",
      register: "comune",
      context: "più aggressivo e unilaterale",
    },
    {
      term: "dissimulazione",
      register: "formale",
      context: "occultare il vero significato",
    },
    {
      term: "allusione",
      register: "comune",
      context: "riferimento indiretto",
    },
    {
      term: "antifrasi",
      register: "tecnico",
      context: "termine tecnico-retorico per il dire il contrario",
    },
    {
      term: "umorismo sottile",
      register: "comune",
      context: "con componente umoristica leggera",
    },
  ],

  antonyms: [
    {
      term: "letteralità",
      register: "comune",
      context: "il dire esattamente ciò che si intende",
    },
    {
      term: "franchezza",
      register: "comune",
      context: "apertura diretta senza dissimulazione",
    },
    {
      term: "sincerità diretta",
      register: "comune",
      context: "comunicazione senza doppio piano",
    },
  ],

  relatedWords: [
    "sarcasmo",
    "umorismo",
    "satira",
    "antifrasi",
    "ironia drammatica",
    "ironia socratica",
    "smielato",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ironia/",
    wiktionary: "https://it.wiktionary.org/wiki/ironia",
  },

  paroliereNote:
    "Ironia è una delle parole più usate e meno capite della lingua italiana. Nel " +
    "parlato corrente tende a essere usata come sinonimo di sarcasmo, perdendo la sua " +
    "sfumatura fondamentale: l'ironia richiede complicità, presuppone un interlocutore " +
    "capace di cogliere il doppio piano; il sarcasmo è invece più aggressivo, " +
    "unilaterale, feritore. C'è poi l'ironia drammatica — tipica del teatro greco e " +
    "shakespeariano — dove lo spettatore sa qualcosa che il personaggio sul palco non " +
    "sa: una struttura narrativa di grande tensione. Infine, «l'ironia del destino» è " +
    "un uso metonimico quasi fisso nella lingua, dove ironia vale come «coincidenza " +
    "paradossale e beffarda».",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ironia — definizione, usi e differenza dal sarcasmo | Il Paroliere",
    description:
      "Cosa significa ironia? Dalla retorica alla filosofia socratica, dalla vita " +
      "quotidiana al teatro. Definizione originale con esempi d'uso e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
