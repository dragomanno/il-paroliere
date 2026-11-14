// Il Paroliere — Lemma: deep learning
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const deepLearning: LemmaEntry = {
  lemma: "deep learning",
  slug: "deep-learning",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Insieme di tecniche di machine learning basate su reti neurali con molti strati di elaborazione, ciascuno dei quali estrae dai dati caratteristiche via via più astratte: dai contorni alle forme, dalle forme agli oggetti. È la tecnologia che ha reso possibili il riconoscimento vocale moderno, la traduzione automatica di qualità e i modelli linguistici.",
  shortDefinition: "Machine learning basato su reti neurali a molti strati, ognuno dei quali coglie nei dati caratteristiche più astratte.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Dall'inglese deep «profondo» e learning «apprendimento»: la profondità è il numero di strati della rete. L'espressione entra nel lessico del machine learning nel 1986 con Rina Dechter e viene applicata alle reti neurali nel 2000; la diffusione di massa arriva dopo il 2012, quando una rete profonda vince con largo margine la competizione ImageNet sul riconoscimento delle immagini.",
  examples: [
    "Il deep learning permette al telefono di riconoscere il tuo volto anche quando porti gli occhiali da sole.",
    "Per addestrare un sistema di deep learning servono molti dati e molta potenza di calcolo, due risorse che non tutti hanno.",
    "Hinton, LeCun e Bengio hanno ricevuto il premio Turing 2018 per il loro lavoro sul deep learning.",
  ],
  synonyms: [
    {
      term: "apprendimento profondo",
      register: "tecnico",
      context: "equivalente italiano corretto",
      note: "Usato nei testi accademici, più raro nel parlato.",
    },
    {
      term: "reti neurali profonde",
      register: "tecnico",
      context: "indica i modelli più che la disciplina",
    },
  ],
  antonyms: [],
  relatedWords: [
    "machine-learning",
    "rete-neurale",
    "training-ai",
    "modello-linguistico",
    "multimodale",
    "embedding",
    "llm",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/deep-learning_(Neologismi)/",
  },
  paroliereNote: "Profondo è un aggettivo tecnico, non un giudizio: conta gli strati che separano l'ingresso dall'uscita, non misura la profondità del pensiero. Il successo della formula deve molto al suono, che promette più di quanto descriva. Il deep learning è il motore di quasi tutta l'intelligenza artificiale recente, ma non l'unico modo di fare → machine learning: con pochi dati ben ordinati, metodi più semplici funzionano spesso meglio e si spiegano più facilmente. Nel 2024 il Nobel per la fisica a John Hopfield e Geoffrey Hinton ne ha riconosciuto le basi.",
  seo: {
    title: "Deep learning — significato, apprendimento profondo | Il Paroliere",
    description: "Che cos'è il deep learning: machine learning con reti neurali a molti strati. Origine del termine, differenze, equivalente italiano ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
