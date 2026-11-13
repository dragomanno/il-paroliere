// Il Paroliere — Lemma: rivoluzione scientifica
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rivoluzioneScientifica: LemmaEntry = {
  lemma: "rivoluzione scientifica",
  slug: "rivoluzione-scientifica",
  partOfSpeech: "locuzione sostantivale",
  gender: "femminile",
  register: ["storico", "tecnico", "comune"],
  domains: ["storia della scienza", "epistemologia", "filosofia"],

  definition:
    "In senso storico, il periodo di trasformazione radicale del pensiero occidentale sul mondo naturale convenzionalmente compreso tra il 1543 — anno di pubblicazione del *De revolutionibus orbium coelestium* di Copernico — e il 1687, anno dei *Philosophiae Naturalis Principia Mathematica* di Newton: un arco di tempo in cui il modello geocentrico tolemaico cede progressivamente il passo a quello eliocentrico, si afferma il metodo sperimentale con Galileo e nasce la scienza moderna come disciplina fondata su osservazione, misurazione matematica e verifica empirica, non più su autorità testuale. In senso epistemologico più generale — teorizzato da Thomas Kuhn nel 1962 — una rivoluzione scientifica è invece qualunque episodio, di qualsiasi epoca, in cui un paradigma scientifico consolidato viene sostituito da uno nuovo e incommensurabile col precedente, in seguito all'accumularsi di anomalie che la scienza \"normale\" non riesce più a spiegare: in questa accezione, oltre alla rivoluzione copernicana, si parla di rivoluzione scientifica anche per la meccanica quantistica, la relatività einsteiniana o la teoria dell'evoluzione di Darwin.",

  shortDefinition:
    "La svolta che tra il 1543 e il 1687 porta alla scienza moderna; in senso kuhniano, ogni sostituzione di un paradigma scientifico.",

  etymology:
    "Rivoluzione, dal latino tardo *revolutio*, da *revolvere* «far tornare, rivolgere». Nel titolo dell'opera di Copernico indica i moti circolari dei corpi celesti; il senso di rivolgimento radicale è un altro sviluppo della parola, che l'espressione «rivoluzione scientifica» applica alla storia del pensiero.",

  examples: [
    "La rivoluzione scientifica del Seicento non fu solo un progresso di conoscenze: fu un cambio di metodo, che sostituì l'autorità di Aristotele con l'osservazione diretta e la misura.",
    "Per Kuhn, ogni rivoluzione scientifica attraversa una fase di crisi in cui le anomalie si accumulano finché la comunità scientifica non è pronta ad abbandonare il vecchio paradigma.",
    "La rivoluzione copernicana fu il primo atto della rivoluzione scientifica: spostare la Terra dal centro dell'universo significava anche spostare l'uomo dal centro della creazione.",
    "Alcuni storici della scienza preferiscono parlare di rivoluzioni scientifiche al plurale, distinguendo tappe distinte — Copernico, Galileo, Newton — invece di un unico evento compatto.",
  ],

  synonyms: [
    { term: "rivoluzione copernicana", register: "storico", note: "Si riferisce in senso stretto alla fase inaugurata da Copernico; spesso usato come sineddoche per l'intera rivoluzione scientifica." },
    { term: "cambio di paradigma", register: "tecnico", note: "Termine kuhniano che descrive il meccanismo interno della rivoluzione scientifica, più che il periodo storico." },
  ],

  antonyms: [
    { term: "scienza normale", register: "tecnico", note: "Nel lessico di Kuhn, la fase di lavoro ordinario dentro un paradigma condiviso e non messo in discussione — l'opposto funzionale della rivoluzione." },
  ],

  relatedWords: ["paradigma", "epistemologia", "assioma", "inferenza"],

  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/rivoluzione-scientifica",
    wiktionary: "https://it.wikipedia.org/wiki/Rivoluzione_scientifica",
  },

  paroliereNote:
    "Vale la pena distinguere le due vite di questa espressione. Come nome proprio di un evento storico, la rivoluzione scientifica ha date, protagonisti e un finale (convenzionalmente Newton, 1687). Come categoria teorica kuhniana, invece, non è un evento, ma uno schema ricorrente — il che spiega perché si possa dire, senza contraddizione, che ci sono state molte rivoluzioni scientifiche dopo *la* rivoluzione scientifica. Chi cita Kuhn a sproposito, per etichettare come 'rivoluzionario' qualunque prodotto o teoria di moda, ne tradisce proprio il punto: per Kuhn una rivoluzione autentica è rara, dolorosa e richiede che un'intera comunità impari a vedere il mondo in un modo incommensurabile con quello di prima — non un aggiornamento incrementale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "rivoluzione scientifica — significato storico e kuhniano",
    description:
      "Che cos'è la rivoluzione scientifica tra il periodo storico 1543-1687 (Copernico, Galileo, Newton) e il concetto epistemologico di Thomas Kuhn.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-11-13",
};
