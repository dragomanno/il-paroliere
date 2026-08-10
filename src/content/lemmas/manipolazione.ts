// Il Paroliere — Lemma: manipolazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const manipolazione: LemmaEntry = {
  lemma: "manipolazione",
  slug: "manipolazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "tecnico"],
  domains: ["psicologia", "sociologia", "diritto", "comunicazione"],

  definition:
    "L'influenzare pensieri, emozioni o comportamenti altrui attraverso mezzi indiretti, " +
    "occulti o ingannevoli, che aggirano la capacità di giudizio critico della vittima " +
    "invece di rivolgersi ad essa apertamente. A differenza della → persuasione, che " +
    "espone argomenti verificabili, la manipolazione psicologica lavora nell'ombra: " +
    "nasconde le proprie intenzioni, distorce la percezione della realtà, sfrutta " +
    "vulnerabilità emotive (senso di colpa, paura dell'abbandono, bisogno di " +
    "approvazione) o asimmetrie di informazione. In psicologia clinica il termine " +
    "descrive pattern relazionali specifici — nelle dinamiche di coppia, in famiglia, " +
    "sul lavoro — in cui una persona induce sistematicamente l'altra a dubitare della " +
    "propria percezione o a agire contro il proprio interesse. Il termine si applica " +
    "anche fuori dall'ambito interpersonale: manipolazione dei dati, manipolazione del " +
    "mercato, manipolazione dell'opinione pubblica, sempre con la stessa struttura di " +
    "fondo — alterare qualcosa facendolo sembrare inalterato.",

  shortDefinition:
    "Influenzare pensieri o comportamenti altrui con mezzi occulti o ingannevoli, " +
    "aggirando il giudizio critico invece di rivolgersi apertamente ad esso.",

  etymology:
    "Dal francese manipulation, derivato di manipuler, a sua volta dal latino " +
    "manipulus («manciata, fascio», da manus, «mano»). Il termine nasce in ambito " +
    "chimico-farmaceutico settecentesco per indicare la lavorazione manuale di " +
    "sostanze; il significato psicologico e figurato — trattare le persone come si " +
    "tratta la materia, plasmandole senza che se ne accorgano — si consolida solo nel " +
    "XX secolo.",

  examples: [
    "Il terapeuta riconobbe rapidamente i segnali della manipolazione: ogni volta che " +
      "lei esprimeva un dubbio, lui la faceva sentire in colpa per averlo anche solo pensato.",
    "La manipolazione dei dati di vendita, per quanto minima, era comunque una frode: " +
      "presentare come reale un trend che non esisteva.",
    "Non era una discussione, era manipolazione pura: ogni argomento veniva rigirato per " +
      "farla sembrare irragionevole, mai per rispondere nel merito.",
    "Il confine tra → persuasione politica e manipolazione dell'opinione pubblica si gioca " +
      "tutto sulla trasparenza delle fonti e degli interessi in gioco.",
  ],

  synonyms: [
    {
      term: "strumentalizzazione",
      register: "formale",
      context: "più centrato sull'uso della persona come mezzo per un fine altrui",
    },
    {
      term: "raggiro",
      register: "comune",
      context: "più orientato all'inganno finalizzato a un vantaggio concreto e immediato",
    },
    {
      term: "gaslighting",
      register: "tecnico",
      context: "forma specifica di manipolazione che mira a far dubitare della propria percezione della realtà",
    },
  ],

  antonyms: [
    {
      term: "trasparenza",
      register: "comune",
      context: "dichiarare apertamente intenzioni e argomenti — l'opposto strutturale della manipolazione",
    },
    {
      term: "persuasione",
      register: "comune",
      context: "convincere con argomenti verificabili invece che con leve nascoste",
    },
  ],

  relatedWords: [
    "manipolare",
    "manipolatore",
    "gaslighting",
    "persuasione",
    "propaganda",
    "coercizione",
    "vittimismo",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/manipolazione",
  },

  paroliereNote:
    "La manipolazione psicologica è difficile da riconoscere dall'interno proprio " +
    "perché il suo bersaglio è la capacità stessa di riconoscerla: chi la subisce viene " +
    "indotto a dubitare del proprio giudizio prima ancora di poterlo applicare alla " +
    "situazione. È una differenza cruciale rispetto alla → coercizione, che si annuncia " +
    "(la minaccia è dichiarata) e rispetto alla → persuasione onesta, che si espone al " +
    "controllo razionale. Chi studia le dinamiche manipolative — dal → gaslighting nelle " +
    "relazioni intime alla propaganda su scala di massa — nota sempre lo stesso schema: " +
    "isolamento progressivo dalle fonti di verifica esterne, così che il manipolatore " +
    "diventi l'unico punto di riferimento rimasto per interpretare la realtà.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Manipolazione (psicologica) — definizione e riconoscimento | Il Paroliere",
    description:
      "Che cos'è la manipolazione psicologica: definizione originale, differenza da " +
      "persuasione e coercizione, esempi relazionali e sociali, con etimologia.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
