// Il Paroliere — Lemma: fine-tuning
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fineTuning: LemmaEntry = {
  lemma: "fine-tuning",
  slug: "fine-tuning",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Addestramento supplementare con cui un modello già addestrato in modo generale viene adattato a un compito, a un settore o a uno stile, usando una quantità di dati molto più piccola. Il modello conserva le capacità di base e ne acquista di nuove: per esempio, adottare il linguaggio di uno studio legale o rispondere sempre nel formato richiesto.",
  shortDefinition: "Addestramento aggiuntivo che adatta un modello già pronto a un compito o a un settore specifico con pochi dati mirati.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Dall'inglese fine-tuning «regolazione fine», da to fine-tune «regolare con precisione», detto in origine di apparecchi e strumenti. In fisica e in cosmologia la stessa parola indica l'apparente taratura perfetta delle costanti dell'universo.",
  examples: [
    "Con il fine-tuning sui verbali degli ultimi dieci anni, il modello ha imparato lessico e struttura dei documenti della cooperativa.",
    "Prima del fine-tuning prova con un buon prompt e qualche esempio: spesso basta, e costa molto meno.",
    "Il fine-tuning insegna uno stile, non aggiorna i fatti: per le informazioni recenti serve un sistema di recupero.",
  ],
  synonyms: [
    {
      term: "affinamento",
      register: "tecnico",
      context: "resa italiana che si incontra in testi accademici e divulgativi",
      note: "Minoritaria nell'uso professionale.",
    },
    {
      term: "messa a punto",
      register: "comune",
      context: "espressione italiana generale, adatta ai testi per tutti",
    },
    {
      term: "addestramento specifico",
      register: "tecnico",
      context: "formula descrittiva",
    },
  ],
  antonyms: [
    {
      term: "pre-addestramento",
      register: "tecnico",
      context: "la fase iniziale e generale",
      note: "Non è un contrario logico, ma il polo opposto del processo.",
    },
  ],
  relatedWords: [
    "training-ai",
    "modello-linguistico",
    "llm",
    "machine-learning",
    "deep-learning",
    "rag",
    "prompt",
    "rete-neurale",
  ],
  sourceLinks: {},
  paroliereNote: "La confusione più frequente riguarda il rapporto con la → RAG. Il fine-tuning cambia il modello, cioè i suoi parametri; la RAG cambia ciò che il modello legge al momento di rispondere. Il primo serve per stile, formato e competenze ricorrenti, la seconda per conoscenze che si aggiornano. In italiano l'anglicismo è stabile: affinamento esiste e si capisce, ma nel lavoro quotidiano quasi nessuno lo usa.",
  seo: {
    title: "Fine-tuning — significato e differenza con la RAG | Il Paroliere",
    description: "Che cos'è il fine-tuning: l'addestramento aggiuntivo che adatta un modello a un compito. Differenza con RAG e prompt, origine ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
