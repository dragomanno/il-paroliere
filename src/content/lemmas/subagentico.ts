// Il Paroliere — Lemma: subagentico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const subagentico: LemmaEntry = {
  lemma: "subagentico",
  slug: "subagentico",
  partOfSpeech: "aggettivo",

  definition:
    "Aggettivo che descrive un'architettura, un utilizzo o un contesto in cui uno " +
    "o più agenti AI secondari (sotto-agenti) operano in modo coordinato sotto la " +
    "supervisione o l'orchestrazione di un agente AI primario (agente orchestratore), " +
    "per eseguire task complessi che richiedono decomposizione, parallelizzazione o " +
    "specializzazione. L'utilizzo subagentico di un sistema AI consente di " +
    "frammentare un obiettivo articolato in sottocompiti indipendenti o sequenziali, " +
    "delegati a sotto-agenti specializzati — ciascuno con il proprio contesto, i " +
    "propri strumenti e la propria logica operativa — il cui output viene poi " +
    "aggregato o valutato dall'agente primario. Il termine è neologismo del lessico " +
    "tecnico dell'intelligenza artificiale generativa, diffusosi soprattutto tra il " +
    "2024 e il 2026 con la proliferazione di framework multi-agente come LangGraph, " +
    "AutoGen, CrewAI e con l'introduzione di funzionalità agentiche nelle piattaforme " +
    "AI di largo consumo.",

  shortDefinition:
    "Aggettivo che descrive l'uso coordinato di agenti AI secondari sotto la guida di un agente primario, per eseguire task complessi attraverso decomposizione e specializzazione.",

  register: ["tecnico-specialistico", "neologismo"],
  domains: ["intelligenza artificiale", "informatica", "automazione"],

  etymology:
    "Formazione neologica: sub- (prefisso latino, «sotto, subordinato») + agentico " +
    "(da agente + -ico, aggettivo), sul modello dell'inglese sub-agent, agentic, " +
    "multi-agent. Il termine agentico stesso è un neologismo del lessico AI degli " +
    "anni 2020.",

  examples: [
    "«Il sistema di ricerca utilizza un'architettura subagentìca: un agente orchestratore riceve la domanda dell'utente, attiva tre sotto-agenti specializzati (ricerca web, analisi documenti, sintesi) e integra i risultati in un'unica risposta.»",
    "«L'utilizzo subagentico di modelli linguistici permette di superare i limiti della finestra di contesto: ogni sotto-agente lavora su una porzione del problema, senza dover tenere tutto in memoria simultaneamente.»",
    "«I framework come LangGraph o AutoGen sono progettati esplicitamente per abilitare flussi di lavoro subagentici in cui la supervisione umana può essere minima o assente.»",
  ],

  synonyms: [
    {
      term: "multi-agente",
      register: ["tecnico-specialistico"],
      context: "architettura a più agenti coordinati",
    },
    {
      term: "a orchestrazione distribuita",
      register: ["tecnico-specialistico"],
      context: "per sistemi con agente orchestratore",
    },
  ],

  antonyms: [
    {
      term: "monolitico",
      register: ["tecnico-specialistico"],
      context: "architettura a singolo agente",
    },
  ],

  relatedWords: [
    "agente AI",
    "agente orchestratore",
    "sotto-agente",
    "LLM",
    "RAG",
    "tool use",
    "LangGraph",
    "AutoGen",
    "CrewAI",
    "intelligenza artificiale generativa",
    "automazione cognitiva",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/subagentico",
  },

  paroliereNote:
    "Subagentico è uno dei neologismi tecnici più rappresentativi della fase attuale " +
    "dell'intelligenza artificiale. Segnala un passaggio epocale: dall'AI come " +
    "strumento di risposta a singola domanda all'AI come sistema capace di " +
    "pianificazione autonoma e collaborazione tra componenti specializzate. Il " +
    "modello subagentico rispecchia, in modo speculare, la struttura delle " +
    "organizzazioni umane complesse: c'è chi pianifica e coordina (l'orchestratore) " +
    "e chi esegue compiti specifici con expertise dedicata (i sotto-agenti). La " +
    "differenza è che nei sistemi subagentici questa struttura può operare in pochi " +
    "secondi su task che a un team umano richiederebbero giorni. Vale la pena " +
    "includere questa voce nel Paroliere proprio perché il termine sta uscendo " +
    "dalla letteratura tecnica per entrare nel linguaggio professionale di chi " +
    "lavora con l'AI — e come sempre, quando una parola tecnica incontra un " +
    "pubblico più ampio, la precisione tende a evaporare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Subagentico — cos'è, architettura AI multi-agente | Il Paroliere",
    description:
      "Cosa significa subagentico nell'AI. Agenti orchestratori, sotto-agenti, utilizzo subagentico. Definizione originale con glossario e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
