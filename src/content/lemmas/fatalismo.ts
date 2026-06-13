// Il Paroliere — Lemma: fatalismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fatalismo: LemmaEntry = {
  lemma: "fatalismo",
  slug: "fatalismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["filosofico", "comune", "saggistico"],
  domains: ["filosofia", "etica", "psicologia sociale", "teologia"],

  definition:
    "Concezione secondo cui tutto ciò che accade è determinato in anticipo da una forza " +
    "— destino, volontà divina, leggi necessarie — rispetto alla quale l'azione umana " +
    "non ha potere di cambiamento reale. Il fatalismo si distingue dal determinismo: " +
    "quest'ultimo afferma che ogni evento ha cause sufficienti, ma non preclude l'azione; " +
    "il fatalismo afferma che l'esito è già fissato indipendentemente da cosa si faccia. " +
    "Come atteggiamento pratico, il fatalismo produce spesso rassegnazione passiva e " +
    "riduce la percezione della responsabilità individuale e collettiva. Ha radici nelle " +
    "religioni del destino (Moira greca, Fatum romano, certe letture del Qadar islamico) " +
    "e in alcune correnti stoiche, pur distinguendosi dalle versioni più attiviste " +
    "di questi stessi filoni.",

  shortDefinition:
    "Visione per cui tutto è già determinato da un destino immodificabile, con la " +
    "conseguenza pratica di ridurre il senso di responsabilità e la capacità d'azione.",

  etymology:
    "Dal latino fatalis \u00abche dipende dal fato\u00bb, da fatum \u00abprofezia, destino\u00bb, " +
    "participio di fari \u00abparlare, pronunciare\u00bb. Il fato è ciò che è stato \u00abdetto\u00bb " +
    "— dalla divinità, dal destino — e quindi non può essere cambiato. La stessa " +
    "radice produce \u00abfato\u00bb, \u00abfatale\u00bb, \u00abinfausto\u00bb.",

  examples: [
    "\u201cTanto è destino\u201d è la formula quotidiana del fatalismo: comoda perché chiude ogni conversazione sull'alternativa che avrebbe potuto esistere.",
    "Lo stoicismo è spesso confuso con il fatalismo, ma i due si separano proprio sull'azione: per gli stoici, l'accettazione di ciò che non dipende da te non significa rinunciare a ciò che dipende da te.",
    "In certi contesti di povertà strutturale, il fatalismo non è irrazionale: se tutte le prove della propria esperienza dicono che l'esito è già scritto, rassegnarsi ha una logica adattiva.",
    "Il fatalismo politico — \u201ci politici sono tutti uguali, cambia poco chi vince\u201d — alimenta l'astensionismo e riduce la pressione civica sulle istituzioni.",
  ],

  synonyms: [
    {
      term: "rassegnazione",
      register: "comune",
      note: "L'aspetto pratico e affettivo del fatalismo, senza il carico teorico-filosofico.",
    },
    {
      term: "determinismo forte",
      register: "filosofico",
      note: "Parzialmente sovrapposto, ma il determinismo non implica necessariamente passività.",
    },
  ],

  antonyms: [
    {
      term: "agentività",
      register: "psicologico-filosofico",
      note: "La convinzione di avere potere causale sugli eventi e sulla propria vita.",
    },
    {
      term: "stoicismo attivo",
      register: "filosofico",
      note: "L'accettazione del necessario combinata con l'impegno pieno su ciò che dipende da sé.",
    },
  ],

  relatedWords: ["cinismo", "indifferenza-civile", "astensionismo", "metafisica", "dialettica"],

  sourceLinks: {},

  paroliereNote:
    "Il fatalismo ha una funzione psicologica precisa: riduce l'ansia da responsabilità. " +
    "Se tutto è già scritto, non si può sbagliare — e non si può essere colpevoli. " +
    "Il problema è che questa riduzione dell'ansia ha un costo: svuota anche l'azione " +
    "di senso. Nelle comunità in cui il fatalismo è diffuso, la ricerca sociale mostra " +
    "spesso una correlazione con la bassa fiducia nelle istituzioni e con il disimpegno " +
    "civico. Il fatalismo non è pigrizia: è la risposta razionale di chi ha imparato, " +
    "spesso per esperienza diretta, che agire non cambia niente. Il problema è che quella " +
    "risposta, anche quando è storicamente giustificata, tende a perpetuare le condizioni " +
    "che l'hanno generata.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "fatalismo — destino, rassegnazione e responsabilità tra filosofia e vita civile",
    description:
      "Che cos'è il fatalismo: definizione filosofica, differenza dal determinismo, " +
      "radici storiche e conseguenze pratiche sulla vita individuale e collettiva.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
