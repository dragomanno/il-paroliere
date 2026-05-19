// Il Paroliere — Lemma: resilienza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const resilienza: LemmaEntry = {
  lemma: "resilienza",
  slug: "resilienza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Capacità di un sistema — materiale, biologico o umano — di assorbire uno shock, " +
    "adattarsi a condizioni avverse e ritrovare il proprio equilibrio senza perdere le " +
    "caratteristiche essenziali. In ingegneria indica la proprietà di un materiale di " +
    "resistere agli urti senza rompersi. In psicologia e nelle scienze sociali è " +
    "diventata la parola-chiave per descrivere la capacità di attraversare le " +
    "difficoltà senza esserne distrutti — con la consapevolezza che il punto di " +
    "arrivo può essere diverso, e a volte più solido, del punto di partenza.",

  shortDefinition:
    "Capacità di reagire alle avversità e ritrovare equilibrio senza perdere sé stessi.",

  register: ["comune", "tecnico", "psicologia"],
  domains: ["psicologia", "ingegneria", "sociologia", "linguaggio pubblico"],

  etymology:
    "Dal latino resilire, composto di re- (indietro) e salire (saltare): " +
    "'rimbalzare, tornare indietro'. Attestato in italiano nel senso tecnico " +
    "dall'Ottocento, nella sua accezione psicologica e sociale dal tardo Novecento, " +
    "con una diffusione esplosiva nei primi decenni del Duemila.",

  examples: [
    "La resilienza non è resistenza passiva: è la capacità di farsi attraversare " +
    "dall'evento senza dissolversi in esso.",
    "I materiali compositi usati in aeronautica sono scelti per la loro resilienza " +
    "agli sbalzi termici estremi.",
    "Dopo il terremoto, la resilienza della comunità si manifestò nella velocità con " +
    "cui le reti informali di solidarietà si riorganizzarono.",
    "Usare 'resilienza' per descrivere ogni forma di sopportazione rischia di svuotare " +
    "la parola del suo significato più preciso.",
  ],

  synonyms: [
    {
      term: "elasticità",
      register: "tecnico",
      context: "in fisica e ingegneria, riferito alla proprietà dei materiali",
    },
    {
      term: "adattabilità",
      register: "comune",
      context: "con enfasi sulla capacità di modificarsi in risposta al contesto",
    },
    {
      term: "tenacia",
      register: "comune",
      context: "più vicino alla perseveranza personale, meno sistemico",
    },
    {
      term: "robustezza",
      register: "tecnico",
      context: "in sistemi informatici e infrastrutturali",
    },
  ],

  antonyms: [
    {
      term: "fragilità",
      register: "comune",
      context: "incapacità di reggere l'urto senza rompersi o cedere",
    },
    {
      term: "rigidità",
      register: "tecnico",
      context: "in senso fisico: mancanza di flessibilità che porta alla frattura",
    },
    {
      term: "vulnerabilità",
      register: "comune",
      context: "esposizione al danno senza capacità di recupero",
    },
  ],

  relatedWords: [
    "resiliente",
    "adattamento",
    "coping",
    "trauma",
    "antifragilità",
    "elasticità",
    "robustezza",
    "post-traumatic growth",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/resilienza/",
    wiktionary: "https://it.wiktionary.org/wiki/resilienza",
  },

  paroliereNote:
    "Resilienza è una delle parole più inflazionate del discorso pubblico contemporaneo. " +
    "Dalla psicologia è migrata nei titoli dei giornali, nei discorsi politici, nei " +
    "corsi di formazione aziendale — fino a diventare quasi un sinonimo generico di " +
    "'andare avanti nonostante tutto'. Il rischio di questa traiettoria è doppio: " +
    "da un lato si perde la precisione semantica; dall'altro, l'uso retorico del termine " +
    "può diventare un modo per delegare all'individuo la responsabilità di sopportare " +
    "condizioni strutturalmente difficili. Vale la pena usarla con cura, " +
    "distinguendo la resilienza come qualità reale da quella come imperativo morale.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Resilienza — Il Paroliere",
    description:
      "Definizione originale di 'resilienza': capacità di reagire alle avversità " +
      "e ritrovare equilibrio. Con etimologia, esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
