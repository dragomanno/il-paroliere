// Il Paroliere — Lemma: RAG
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rag: LemmaEntry = {
  lemma: "RAG",
  slug: "rag",
  partOfSpeech: "sigla",
  gender: "femminile e maschile",
  definition: "Tecnica che affianca a un modello linguistico una fase di ricerca nei documenti: prima di rispondere, il sistema cerca in un archivio i passaggi più pertinenti e li inserisce nel prompt, così che la risposta si appoggi a fonti aggiornate e verificabili invece che alla sola memoria del modello. L'acronimo sta per l'inglese retrieval-augmented generation.",
  shortDefinition: "Tecnica che fa cercare a un modello linguistico i documenti pertinenti prima di rispondere, per ancorarlo alle fonti.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Acronimo dell'inglese retrieval-augmented generation, «generazione arricchita dal recupero». L'espressione si afferma con un articolo di Patrick Lewis e colleghi, ricercatori di Facebook AI Research, University College London e New York University, pubblicato nel 2020.",
  examples: [
    "Il servizio clienti usa la RAG: il modello risponde leggendo il manuale aggiornato, non quello che ricordava dall'addestramento.",
    "Con la RAG le citazioni diventano possibili, perché il sistema sa da quale documento ha preso ogni informazione.",
    "Se l'archivio è in disordine, la RAG recupera i passaggi sbagliati e la risposta peggiora invece di migliorare.",
  ],
  synonyms: [
    {
      term: "generazione aumentata dal recupero",
      register: "tecnico",
      context: "resa italiana usata nella documentazione tecnica",
      note: "Rara nel parlato; circola anche la variante «potenziata dal recupero».",
    },
    {
      term: "retrieval-augmented generation",
      register: "tecnico",
      context: "forma estesa inglese",
    },
  ],
  antonyms: [],
  relatedWords: [
    "modello-linguistico",
    "llm",
    "embedding",
    "vettore-semantico",
    "knowledge-graph",
    "allucinazione-ai",
    "prompt",
    "context-window",
    "agente-ai",
    "geo",
    "fine-tuning",
  ],
  sourceLinks: {},
  paroliereNote: "La RAG nasce come rimedio a due limiti dei modelli: sanno solo ciò che c'era nei dati di addestramento e, quando non sanno, tendono a inventare (→ allucinazione AI). Recuperare documenti e portarli nella → context window non elimina l'errore, ma lo rende controllabile, perché la fonte si può verificare. Il recupero passa di solito per gli → embedding e per la somiglianza fra → vettori semantici, a volte per un → knowledge graph. Sul genere sono corrette entrambe le forme, secondo ciò che si sottintende: la RAG se si pensa alla tecnica o alla metodologia, il RAG se si pensa al sistema o al framework. Nei testi tecnici si trovano entrambe, accanto all'uso come apposizione di «un sistema RAG».",
  seo: {
    title: "RAG — significato, retrieval-augmented generation | Il Paroliere",
    description: "Che cos'è la RAG: la tecnica che fa cercare a un modello linguistico i documenti giusti prima di rispondere. Origine, limiti, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
