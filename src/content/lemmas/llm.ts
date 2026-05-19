// Il Paroliere — Lemma: LLM
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const llm: LemmaEntry = {
  lemma: "LLM",
  slug: "llm",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Acronimo di Large Language Model: sistema di intelligenza artificiale " +
    "addestrato su quantità massicce di testo per generare linguaggio token " +
    "dopo token, calcolando la continuazione statisticamente più probabile " +
    "di ogni sequenza. Non comprende nel senso umano — elabora distribuzioni " +
    "di probabilità. GPT, Claude, Gemini e Llama sono tutti LLM; nella SEO " +
    "contemporanea alimentano le AI Overview di Google e i motori di ricerca " +
    "conversazionali.",

  shortDefinition:
    "Modello AI addestrato su grandi corpora testuali che genera linguaggio per calcolo probabilistico, non per comprensione.",

  register: ["tecnico", "comune"],
  domains: ["intelligenza artificiale", "NLP", "SEO"],

  examples: [
    "Le AI Overview di Google sono generate da un LLM che sintetizza le pagine web in risposta diretta.",
    "Un LLM non ha accesso al web in tempo reale: risponde sulla base dei dati su cui è stato addestrato.",
    "La qualità di un LLM dipende tanto dalla quantità di dati quanto dalla cura con cui sono stati selezionati.",
  ],

  synonyms: [
    {
      term: "modello linguistico di grandi dimensioni",
      register: "tecnico",
      context: "traduzione letterale dell'acronimo, poco usata in italiano",
    },
    {
      term: "modello AI",
      register: "comune",
      context: "semplificazione, meno precisa ma più accessibile",
    },
  ],

  relatedWords: [
    "token",
    "tokenizzazione",
    "AI Overview",
    "RAG",
    "embedding",
    "prompt",
    "context window",
    "hallucination",
    "GPT",
    "Claude",
    "Gemini",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/LLM",
  },

  paroliereNote:
    "LLM è l'acronimo che ha ridisegnato il paesaggio del web in meno di " +
    "tre anni. Per la SEO il cambiamento è radicale: Google usa gli stessi " +
    "modelli per generare risposte dirette, il che significa che un contenuto " +
    "può essere citato senza essere cliccato. Ottimizzare per un LLM non è " +
    "lo stesso che ottimizzare per un crawler: richiede chiarezza concettuale, " +
    "non solo keyword density.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "LLM — Il Paroliere",
    description:
      "Definizione originale di 'LLM' (Large Language Model): il modello AI che genera " +
      "testo per calcolo probabilistico. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
