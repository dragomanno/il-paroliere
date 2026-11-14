// Il Paroliere — Lemma: rete neurale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const reteNeurale: LemmaEntry = {
  lemma: "rete neurale",
  slug: "rete-neurale",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Modello di calcolo formato da molte unità semplici, i neuroni artificiali, collegate da connessioni che hanno ciascuna un peso numerico. Ogni unità riceve segnali, li combina e trasmette il risultato; durante l'addestramento i pesi vengono regolati finché la rete produce le risposte attese. In biologia l'espressione indica anche un insieme di neuroni reali collegati da sinapsi.",
  shortDefinition: "Modello di calcolo fatto di unità collegate da connessioni con pesi regolabili; in biologia, insieme di neuroni connessi.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
    "neuroscienze",
  ],
  etymology: "Calco dell'inglese neural network. Neurale deriva da neurone, dal greco neûron «nervo, tendine». Il primo modello matematico di neurone si deve a Warren McCulloch e Walter Pitts nel 1943; Frank Rosenblatt presentò il percettrone nel 1958; la retropropagazione dell'errore, resa nota nel 1986, permise di addestrare reti a più strati.",
  examples: [
    "La rete neurale ha imparato a distinguere le foglie malate da quelle sane guardando migliaia di fotografie.",
    "Nessuno ha scritto le regole di questa rete neurale: le ha ricavate dagli esempi, e per questo è difficile capire perché ha sbagliato.",
    "Dopo l'ictus, ha spiegato il neurologo, altre reti neurali del cervello compensano in parte la funzione perduta.",
  ],
  synonyms: [
    {
      term: "rete neuronale",
      register: "tecnico",
      context: "variante con lo stesso significato, meno frequente",
    },
    {
      term: "rete neurale artificiale",
      register: "tecnico",
      context: "forma estesa, per distinguerla da quella biologica",
    },
    {
      term: "rete neurale profonda",
      register: "tecnico",
      context: "solo per le reti a molti strati, quelle del deep learning",
    },
  ],
  antonyms: [],
  relatedWords: [
    "deep-learning",
    "machine-learning",
    "training-ai",
    "modello-linguistico",
    "embedding",
    "algoritmo",
    "memoria",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rete_neurale",
  },
  paroliereNote: "La metafora biologica ha fatto la fortuna del termine e resta fuorviante: un neurone artificiale è una formula di poche righe, lontanissima dalla complessità di una cellula nervosa. Il calco italiano è integrato al punto che nessuno scrive neural network in un testo italiano. Neurale e neuronale sono entrambe corrette; la prima è di gran lunga la più usata.",
  seo: {
    title: "Rete neurale — significato in informatica e biologia | Il Paroliere",
    description: "Che cos'è una rete neurale: il modello di calcolo fatto di neuroni artificiali con pesi regolabili. Storia, varianti, senso biologico ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
