// Il Paroliere — Lemma: sottoagente
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sottoagente: LemmaEntry = {
  lemma: "sottoagente",
  slug: "sottoagente",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition: "Nei sistemi di intelligenza artificiale, agente secondario a cui un agente principale affida una parte del lavoro: riceve un compito circoscritto, lo svolge con istruzioni, strumenti e memoria di lavoro propri, e restituisce il risultato senza vedere l'intera conversazione. Più sottoagenti possono lavorare in parallelo sotto la regia dello stesso agente orchestratore.",
  shortDefinition: "Agente AI secondario che svolge un compito delegato dall'agente principale, con contesto e strumenti propri, e gli restituisce il risultato.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Composto di sotto- e agente, calco dell'inglese subagent, diffuso con i sistemi multi-agente e con gli strumenti per sviluppatori basati su modelli linguistici. In italiano convivono sottoagente, con il prefisso italiano, e subagente, che però ha già un senso commerciale consolidato: il collaboratore che procura affari a un agente di commercio o di assicurazioni. Si scrive tutto attaccato, come sottoinsieme e sottosistema.",
  examples: [
    "L'agente principale ha lanciato tre sottoagenti in parallelo: uno per le fonti, uno per i dati, uno per controllare le citazioni.",
    "Ogni sottoagente parte da un contesto pulito, quindi le istruzioni che gli passi devono contenere tutto quello che gli serve.",
    "Il sottoagente ha letto duecento file e ha restituito un riassunto di dieci righe.",
    "Per un compito così piccolo un sottoagente è uno spreco: fai prima a farlo direttamente.",
  ],
  synonyms: [
    {
      term: "subagente",
      register: "tecnico",
      context: "forma latineggiante, più vicina all'inglese",
      note: "Nel commercio e nelle assicurazioni subagente indica già il collaboratore di un agente: nel senso informatico sottoagente evita l'ambiguità.",
    },
    {
      term: "agente secondario",
      register: "tecnico",
      context: "descrizione generica, senza termine specialistico",
    },
    {
      term: "subagent",
      register: "tecnico",
      context: "forma inglese, usata nella documentazione degli strumenti",
    },
  ],
  antonyms: [
    {
      term: "agente orchestratore",
      register: "tecnico",
      context: "l'agente che distribuisce i compiti e raccoglie i risultati",
    },
    {
      term: "agente principale",
      register: "tecnico",
      context: "quello che dialoga con l'utente e tiene il filo del lavoro",
    },
  ],
  relatedWords: [
    "subagentico",
    "agente-ai",
    "automazione-cognitiva",
    "context-window",
    "tool-use",
    "llm",
    "modello-linguistico",
    "prompt",
    "chatbot",
    "sistema multi-agente",
    "agente orchestratore",
    "delega",
  ],
  sourceLinks: {},
  paroliereNote: "Il sottoagente serve soprattutto a proteggere l'attenzione dell'agente principale. Nella documentazione di Claude Code ogni sottoagente lavora in una propria finestra di contesto, con istruzioni e permessi suoi ([Claude Code Docs](https://code.claude.com/docs/en/sub-agents)): l'esplorazione resta fuori dalla conversazione principale, che riceve solo l'esito. Il prezzo è il consumo: Anthropic ha scritto che i suoi sistemi multi-agente usano circa quindici volte i token di una normale chat ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)), quindi convengono quando il compito vale la spesa. Sul piano della lingua, sottoagente è preferibile a sotto-agente con il trattino: il prefisso sotto- si salda alla parola che segue, come in sottosistema e sottotitolo. → subagentico, → context window",
  seo: {
    title: "Sottoagente — significato nell'intelligenza artificiale | Il Paroliere",
    description: "Che cos'è un sottoagente nell'AI: l'agente secondario che svolge un compito delegato con contesto proprio. Differenza con subagente e grafia corretta.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
