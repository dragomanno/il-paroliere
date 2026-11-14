// Il Paroliere — Lemma: training AI
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const trainingAi: LemmaEntry = {
  lemma: "training AI",
  slug: "training-ai",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Fase in cui un modello di intelligenza artificiale impara dai dati: elabora esempi, confronta le proprie risposte con quelle attese e corregge milioni o miliardi di parametri interni per ridurre l'errore. Nei modelli linguistici comprende di solito un pre-addestramento generale su grandi raccolte di testi e fasi successive di rifinitura, anche con il giudizio di valutatori umani.",
  shortDefinition: "Fase in cui un modello di intelligenza artificiale regola i propri parametri sugli esempi, prima di essere messo in uso.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Dall'inglese training «allenamento, addestramento», da to train, che risale al francese antico trahiner «trascinare» e, più indietro, al latino trahere «tirare». La sigla AI, posposta come in inglese, distingue il senso tecnico da quello sportivo e professionale di training, già acclimatato in italiano.",
  examples: [
    "Il training del modello ha richiesto settimane di calcolo; ogni risposta che ci dà oggi, invece, arriva in pochi secondi.",
    "Il modello non sa nulla di ciò che è accaduto dopo il training, a meno che qualcuno non gli fornisca documenti aggiornati.",
    "Molti editori hanno chiesto di escludere i propri articoli dal training AI, bloccando i crawler dedicati.",
  ],
  synonyms: [
    {
      term: "addestramento",
      register: "tecnico",
      context: "equivalente italiano corretto e diffuso",
      note: "Preferibile nei testi divulgativi.",
    },
    {
      term: "apprendimento",
      register: "comune",
      context: "guarda il processo dal punto di vista del modello",
      note: "Addestramento lo guarda invece da chi lo conduce.",
    },
    {
      term: "pre-addestramento",
      register: "tecnico",
      context: "solo la prima fase, generale, su grandi quantità di dati",
    },
  ],
  antonyms: [
    {
      term: "inferenza",
      register: "tecnico",
      context: "la fase d'uso del modello già addestrato",
      note: "Contrapposizione tipica del lessico tecnico.",
    },
  ],
  relatedWords: [
    "inferenza",
    "machine-learning",
    "deep-learning",
    "rete-neurale",
    "fine-tuning",
    "modello-linguistico",
    "llm",
    "token",
    "bot",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/addestramento/",
    wiktionary: "https://it.wiktionary.org/wiki/addestramento",
  },
  paroliereNote: "Nel lessico tecnico il training si oppone all'→ inferenza, che qui ha un senso specifico: il momento in cui il modello già addestrato risponde a una richiesta. Il primo costa molto e avviene una volta, la seconda costa poco e avviene ogni volta. In italiano training circola da decenni nello sport, nella formazione e in psicologia, come nel training autogeno; con l'intelligenza artificiale ha preso un significato nuovo, che conviene segnalare. I dati di addestramento sono diventati anche una questione giuridica: l'AI Act europeo chiede a chi fornisce modelli per finalità generali di pubblicarne una sintesi.",
  seo: {
    title: "Training AI — significato, addestramento, inferenza | Il Paroliere",
    description: "Che cos'è il training di un modello AI: la fase in cui impara dai dati. Differenza con inferenza e fine-tuning, equivalente italiano ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
