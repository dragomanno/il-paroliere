// Il Paroliere — Lemma: efficienza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const efficienza: LemmaEntry = {
  lemma: "efficienza",
  slug: "efficienza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Rapporto tra il risultato ottenuto e le risorse impiegate per ottenerlo: un " +
    "sistema è efficiente quando produce il massimo output con il minimo input, " +
    "ottimizzando tempo, energia o costo. In economia e management è uno dei criteri " +
    "fondamentali di valutazione dei processi; in ingegneria si esprime spesso come " +
    "percentuale (rendimento). Si distingue dall'efficacia: l'efficienza misura come " +
    "si fa, non se l'obiettivo sia stato quello giusto.",

  shortDefinition:
    "Rapporto ottimale tra risorse impiegate e risultato ottenuto — misura del come, " +
    "non del cosa o del perché.",

  register: ["comune", "tecnico"],
  domains: ["economia", "ingegneria", "management"],

  etymology:
    "Dal latino efficiens, -entis, participio presente di efficere (compiere, " +
    "produrre effetto), composto di ex- (fuori) e facere (fare). Il sostantivo " +
    "efficientia è attestato in Cicerone in senso filosofico (causa efficiente).",

  synonyms: [
    { term: "rendimento", register: "tecnico", context: "in ingegneria, la misura quantitativa dell'efficienza" },
    { term: "produttività", register: "comune/tecnico", context: "output per unità di input, spesso riferito al lavoro umano" },
    { term: "ottimizzazione", register: "tecnico", context: "processo attivo per raggiungere l'efficienza" }
  ],

  antonyms: [
    { term: "inefficienza", register: "comune/tecnico", context: "antonimo morfologico diretto" },
    { term: "spreco", register: "comune", context: "uso di risorse senza output proporzionato" },
    { term: "dispendiosità", register: "comune", context: "eccesso di risorse consumate rispetto al necessario" }
  ],

  relatedWords: [
    "efficacia",
    "rendimento",
    "produttività",
    "ottimizzazione",
    "performance",
    "risorsa",
    "output"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/efficienza"
  },

  paroliereNote:
    "Efficienza ed efficacia sono due dei termini più frequentemente confusi nel " +
    "linguaggio organizzativo. La distinzione è semplice ma importante: efficienza " +
    "riguarda il modo in cui si usa ciò che si ha; efficacia riguarda il " +
    "raggiungimento dell'obiettivo giusto. Un sistema può essere molto efficiente nel " +
    "fare la cosa sbagliata — e questo è il tipo di paradosso che vale la pena tenere " +
    "a mente.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Efficienza — Il Paroliere",
    description:
      "Rapporto ottimale tra risorse impiegate e risultato ottenuto — misura del come, " +
      "non del cosa o del perché.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};