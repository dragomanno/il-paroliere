// Il Paroliere — Lemma: agente AI
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const agenteAi: LemmaEntry = {
  lemma: "agente AI",
  slug: "agente-ai",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Sistema software che riceve un obiettivo e lo persegue in più passaggi, decidendo da sé quali azioni compiere: consulta fonti, usa strumenti esterni, valuta i risultati intermedi e corregge la rotta fino a concludere il compito. Oggi il motore di un agente è quasi sempre un modello linguistico, ma la parola descrive il comportamento autonomo e orientato allo scopo, non la tecnologia che lo rende possibile.",
  shortDefinition: "Software che persegue un obiettivo in più passaggi, scegliendo da sé azioni e strumenti e controllando i risultati.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Agente viene dal latino agens, agentis, participio presente di agere «fare, muovere, condurre»: è chi agisce. In informatica gli agenti software sono studiati dagli anni Novanta; la forma attuale ricalca l'inglese AI agent e mantiene la sigla inglese posposta. Convive con agente IA, che segue l'ordine italiano delle parole.",
  examples: [
    "Le ho chiesto di trovare il treno più economico per Bologna: l'agente AI ha confrontato orari e tariffe, poi mi ha chiesto conferma prima di pagare.",
    "Un agente AI che può inviare email a nome tuo va trattato come un collaboratore appena arrivato: deleghe chiare e controlli frequenti.",
    "Nel gergo dei team tecnici, un agente si distingue da un flusso automatizzato perché decide l'ordine dei passaggi invece di seguirlo.",
  ],
  synonyms: [
    {
      term: "agente IA",
      register: "tecnico",
      context: "stessa nozione, con la sigla italiana raccomandata da più parti",
    },
    {
      term: "agente intelligente",
      register: "tecnico",
      context: "formula dei manuali di intelligenza artificiale",
      note: "Più ampia: comprende anche robot e programmi che non usano modelli linguistici.",
    },
    {
      term: "agente autonomo",
      register: "comune",
      context: "quando si vuole sottolineare l'assenza di supervisione continua",
      note: "Spesso ottimistica: l'autonomia reale è quasi sempre limitata da permessi e controlli.",
    },
  ],
  antonyms: [
    {
      term: "flusso predefinito",
      register: "tecnico",
      context: "automazione che esegue passaggi fissati in anticipo, senza scegliere",
    },
  ],
  relatedWords: [
    "subagentico",
    "tool-use",
    "modello-linguistico",
    "llm",
    "rag",
    "prompt",
    "automazione-cognitiva",
    "chatbot",
    "assistente-virtuale",
    "bot",
    "context-window",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/agente/",
    wiktionary: "https://it.wiktionary.org/wiki/agente",
  },
  paroliereNote: "Il confine con il → chatbot passa per l'iniziativa: il chatbot risponde, l'agente agisce. Perché ci sia un agente servono tre cose: un obiettivo, la possibilità di usare strumenti (→ tool use) e un ciclo in cui osserva il risultato e decide il passo successivo. Quando il lavoro si divide fra più agenti coordinati si parla di uso → subagentico. La parola porta con sé un'insidia: «agente» evoca volontà e responsabilità, che restano invece a chi lo configura e lo mette al lavoro.",
  seo: {
    title: "Agente AI — significato e differenza con chatbot | Il Paroliere",
    description: "Che cos'è un agente AI: il software che persegue un obiettivo in più passaggi usando strumenti. Differenza con chatbot, etimologia ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
