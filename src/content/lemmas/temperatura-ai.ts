// Il Paroliere — Lemma: temperatura AI
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const temperaturaAi: LemmaEntry = {
  lemma: "temperatura AI",
  slug: "temperatura-ai",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Parametro che regola quanto è variabile la scelta delle parole in un modello linguistico. A temperatura bassa il modello sceglie quasi sempre la continuazione più probabile e dà risposte prevedibili e ripetibili; a temperatura alta concede più spazio a scelte meno probabili, con testi più vari e inventivi, ma anche più esposti a errori e incoerenze.",
  shortDefinition: "Parametro che regola quanto un modello linguistico varia le sue scelte: bassa per risposte prevedibili, alta per testi vari.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Uso figurato di temperatura, dal latino temperatura «giusta mescolanza, misura», da temperare. Il termine arriva dalla fisica statistica: la formula con cui il modello sceglie i token ha la stessa forma della distribuzione di Boltzmann, in cui la temperatura stabilisce quanto restano accessibili gli stati meno probabili.",
  examples: [
    "Per estrarre i dati dalle fatture teniamo la temperatura a zero: vogliamo sempre la stessa risposta.",
    "Con la temperatura alta il modello ha proposto venti slogan, tre buoni e diciassette improbabili.",
    "Alzare la temperatura non rende il modello più intelligente, solo meno prevedibile.",
  ],
  synonyms: [
    {
      term: "casualità",
      register: "comune",
      context: "approssimazione divulgativa",
      note: "La temperatura non aggiunge caso: redistribuisce le probabilità.",
    },
    {
      term: "creatività",
      register: "comune",
      context: "etichetta usata da alcune interfacce",
      note: "Impropria, ma diffusa.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "temperatura",
    "entropia",
    "termodinamica",
    "token",
    "modello-linguistico",
    "llm",
    "allucinazione-ai",
    "prompt",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/temperatura/",
  },
  paroliereNote: "Il prestito dalla fisica è coerente: come in un gas caldo le particelle esplorano più stati, così un modello «caldo» esplora più continuazioni (→ temperatura, → entropia). Nelle interfacce di uso comune il parametro è spesso nascosto, ma decide il carattere delle risposte. Un equivoco frequente: una temperatura bassa non garantisce risposte vere, solo risposte stabili, e un errore ripetuto con costanza resta un errore (→ allucinazione AI).",
  seo: {
    title: "Temperatura AI — significato nei modelli linguistici | Il Paroliere",
    description: "Che cos'è la temperatura di un modello AI: il parametro che regola quanto variano le risposte. Origine fisica, equivoci ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
