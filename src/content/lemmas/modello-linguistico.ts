// Il Paroliere — Lemma: modello linguistico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const modelloLinguistico: LemmaEntry = {
  lemma: "modello linguistico",
  slug: "modello-linguistico",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Sistema che assegna una probabilità alle sequenze di parole di una lingua e, per questo, sa prevedere come può continuare un testo. I primi modelli contavano le frequenze di gruppi di parole consecutive; quelli attuali sono reti neurali addestrate su enormi raccolte di testi, capaci di generare risposte, riassunti e traduzioni. I più grandi si chiamano LLM.",
  shortDefinition: "Sistema che stima quanto è probabile una sequenza di parole e, per questo, sa continuare e generare testi.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "linguistica computazionale",
  ],
  etymology: "Calco dell'inglese language model. L'idea di descrivere una lingua attraverso la probabilità delle sequenze risale agli studi di Claude Shannon sulla teoria dell'informazione, alla fine degli anni Quaranta; la svolta recente arriva con l'architettura Transformer, presentata nel 2017.",
  examples: [
    "Il correttore del telefono che suggerisce la parola successiva è un modello linguistico molto piccolo.",
    "Un modello linguistico addestrato soprattutto su testi inglesi scrive un italiano corretto, ma con qualche calco di troppo.",
    "Il modello linguistico non consulta un'enciclopedia: genera la risposta più probabile, che di solito è anche giusta, ma non sempre.",
  ],
  synonyms: [
    {
      term: "LLM",
      register: "tecnico",
      context: "solo per i modelli di grandi dimensioni",
      note: "Nell'uso corrente i due termini si sovrappongono.",
    },
    {
      term: "modello di linguaggio",
      register: "tecnico",
      context: "variante meno frequente",
    },
    {
      term: "modello AI",
      register: "comune",
      context: "semplificazione generica",
      note: "Comprende anche modelli che non trattano testo.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "llm",
    "token",
    "tokenizzazione",
    "rete-neurale",
    "deep-learning",
    "training-ai",
    "fine-tuning",
    "embedding",
    "prompt",
    "context-window",
    "inferenza",
    "multimodale",
  ],
  sourceLinks: {},
  paroliereNote: "Ogni → LLM è un modello linguistico, ma non ogni modello linguistico è un LLM. La differenza non è solo di scala: i modelli di oggi, addestrati a seguire istruzioni, sono diventati interfacce generali, e la parola si è caricata di aspettative che la definizione tecnica non giustifica. Un modello linguistico modella la lingua, non il mondo; del mondo conosce solo ciò che ne è stato scritto. Per questo, sui fatti, ha bisogno di fonti (→ RAG) e di controlli.",
  seo: {
    title: "Modello linguistico — significato, differenza con LLM | Il Paroliere",
    description: "Che cos'è un modello linguistico: il sistema che stima la probabilità delle parole e genera testo. Storia, differenza con LLM ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
