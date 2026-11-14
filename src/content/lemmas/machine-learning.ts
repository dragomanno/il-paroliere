// Il Paroliere — Lemma: machine learning
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const machineLearning: LemmaEntry = {
  lemma: "machine learning",
  slug: "machine-learning",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Ramo dell'intelligenza artificiale che sviluppa sistemi capaci di migliorare le proprie prestazioni a partire dai dati, invece di seguire istruzioni scritte passo per passo. Dagli esempi il sistema ricava regolarità statistiche, che poi usa per classificare, prevedere o decidere su casi nuovi: riconoscere lo spam, stimare un prezzo, suggerire un film.",
  shortDefinition: "Ramo dell'intelligenza artificiale in cui i sistemi ricavano dai dati regolarità da applicare a casi nuovi.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
    "statistica",
  ],
  etymology: "Dall'inglese machine «macchina» e learning «apprendimento». L'espressione è attribuita ad Arthur Samuel, ricercatore IBM, che la usò nel 1959 nel titolo di uno studio su un programma capace di migliorare giocando a dama. Il latino machina, dal greco mēchanḗ «congegno», ha dato anche il nostro macchina.",
  examples: [
    "Il filtro antispam usa il machine learning: ogni volta che segni un messaggio come indesiderato, gli dai un esempio in più.",
    "Con il machine learning la banca stima il rischio di un prestito, ma deve saper spiegare perché ha detto di no.",
    "Molti progetti di machine learning falliscono prima del modello, per dati scarsi o raccolti male.",
  ],
  synonyms: [
    {
      term: "apprendimento automatico",
      register: "tecnico",
      context: "equivalente italiano consolidato",
      note: "Usato nei testi accademici e scelto come titolo dalla Wikipedia in italiano.",
    },
    {
      term: "apprendimento statistico",
      register: "tecnico",
      context: "insiste sulle basi matematiche",
      note: "Diffuso soprattutto fra gli statistici.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "deep-learning",
    "rete-neurale",
    "training-ai",
    "algoritmo",
    "inferenza",
    "fine-tuning",
    "embedding",
    "modello-linguistico",
    "automazione-cognitiva",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/machine-learning_(Neologismi)/",
    wiktionary: "https://it.wiktionary.org/wiki/machine_learning",
  },
  paroliereNote: "Il rapporto fra i termini è di contenimento: l'intelligenza artificiale comprende il machine learning, che comprende il → deep learning, che a sua volta si basa sulle → reti neurali. Nel linguaggio dei media i livelli si confondono e tutto diventa «AI». Apprendimento automatico è un equivalente italiano solido, non una traduzione di ripiego, anche se nel parlato professionale prevale l'inglese. Imparare, qui, significa adattare parametri numerici agli esempi: il verbo umano è una metafora che aiuta e insieme confonde.",
  seo: {
    title: "Machine learning — significato, apprendimento automatico | Il Paroliere",
    description: "Che cos'è il machine learning, o apprendimento automatico: sistemi che imparano dai dati. Origine del termine, differenze con il deep learning.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
