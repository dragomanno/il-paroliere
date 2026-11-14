// Il Paroliere — Lemma: tool use
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const toolUse: LemmaEntry = {
  lemma: "tool use",
  slug: "tool-use",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Capacità di un modello linguistico di servirsi di strumenti esterni durante una risposta: invece di produrre solo testo, il modello formula una richiesta strutturata per una calcolatrice, un motore di ricerca, un database o un altro programma, ne riceve il risultato e lo usa per proseguire. È il meccanismo che permette a un sistema di passare dal dire al fare.",
  shortDefinition: "Capacità di un modello linguistico di chiamare strumenti esterni, come ricerche o programmi, e di usarne i risultati.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Dall'inglese tool «attrezzo, strumento» e use «uso». L'espressione è di casa nell'etologia e nella primatologia, dove indica l'uso di strumenti da parte degli animali; nel lessico dell'intelligenza artificiale si diffonde dal 2023, con studi come Toolformer e con le interfacce di function calling dei grandi fornitori di modelli.",
  examples: [
    "Senza tool use il modello tira a indovinare il cambio euro-dollaro; con il tool use lo legge da un servizio aggiornato.",
    "Abbiamo limitato il tool use alla sola lettura: l'assistente può consultare il calendario, non spostare gli appuntamenti.",
    "Il tool use è il punto in cui gli errori costano davvero: una risposta sbagliata si corregge, un'email partita no.",
  ],
  synonyms: [
    {
      term: "uso di strumenti",
      register: "comune",
      context: "resa italiana trasparente, adatta ai testi divulgativi",
    },
    {
      term: "function calling",
      register: "tecnico",
      context: "meccanismo con cui il modello chiama funzioni definite da chi sviluppa",
      note: "È il modo più comune di realizzare il tool use, non un sinonimo perfetto.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "agente-ai",
    "subagentico",
    "modello-linguistico",
    "llm",
    "rag",
    "prompt",
    "automazione-cognitiva",
    "context-window",
  ],
  sourceLinks: {},
  paroliereNote: "Il modello non usa davvero lo strumento: scrive la richiesta nel formato previsto, un programma esterno la esegue e gli restituisce l'esito. La distinzione conta, perché è lì che si decidono i permessi. Il tool use separa un → chatbot da un → agente AI; protocolli come MCP, presentato da Anthropic nel 2024, cercano di renderlo uniforme fra strumenti diversi. Fuori dai testi tecnici, uso di strumenti è chiaro e va benissimo.",
  seo: {
    title: "Tool use — significato nell'IA, uso di strumenti | Il Paroliere",
    description: "Che cos'è il tool use: la capacità di un modello linguistico di usare strumenti esterni. Differenza con function calling, origine ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
