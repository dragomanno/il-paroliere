// Il Paroliere — Lemma: coordinate geografiche
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coordinateGeografiche: LemmaEntry = {
  lemma: "coordinate geografiche",
  slug: "coordinate-geografiche",
  partOfSpeech: "locuzione sostantivale femminile plurale",
  gender: "femminile",
  definition: "1. Coppia di valori angolari, la latitudine e la longitudine, che individua senza ambiguità la posizione di un punto sulla superficie terrestre; spesso si aggiunge l'altitudine come terza coordinata. Si esprimono in gradi, primi e secondi o in gradi decimali, rispetto all'equatore e al meridiano di Greenwich. 2. In senso figurato e colloquiale, le indicazioni essenziali per trovare qualcuno o per orientarsi in una situazione: mandami le coordinate.",
  shortDefinition: "Latitudine e longitudine di un punto, che ne indicano la posizione esatta sulla Terra; nel parlato, le indicazioni per trovarlo.",
  register: [
    "tecnico-scientifico",
    "comune",
    "colloquiale",
  ],
  domains: [
    "geografia",
    "cartografia",
    "navigazione",
  ],
  etymology: "Coordinate dal latino moderno coordinatae, termine della geometria analitica del Seicento, composto di co- «insieme» e ordinare «mettere in ordine»: valori che, presi insieme, ordinano lo spazio. Geografico dal greco geographikós, da gê «terra» e gráphein «scrivere».",
  examples: [
    "Le coordinate geografiche della vetta erano scritte a penna sul retro della cartina.",
    "Il soccorso alpino ha raggiunto gli escursionisti grazie alle coordinate inviate dal telefono.",
    "Mandami le coordinate del ristorante, che stavolta non voglio girare a vuoto.",
  ],
  synonyms: [
    {
      term: "posizione",
      register: "comune",
      context: "più generico, senza il riferimento ai valori numerici",
    },
    {
      term: "punto nave",
      register: "tecnico-scientifico",
      context: "in navigazione, la posizione stimata o calcolata dell'imbarcazione",
    },
  ],
  antonyms: [],
  relatedWords: [
    "latitudine",
    "longitudine",
    "gps",
    "greenwich",
    "meridiano",
    "parallelo",
    "altitudine",
    "cartografia",
    "fuso-orario",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/coordinate-geografiche/",
    wiktionary: "https://it.wiktionary.org/wiki/coordinata",
  },
  paroliereNote: "Il formato tradizionale in gradi, primi e secondi convive oggi con quello decimale delle mappe digitali, e la confusione tra i due è la causa più frequente di punti finiti in mezzo al mare. Le coordinate non sono assolute: dipendono dal modello di Terra con cui sono calcolate, e lo stesso numero può cadere a qualche decina di metri di distanza su carte con riferimenti diversi. Il figurato è recente e affettuoso, nato con la diffusione dei navigatori e del → GPS: chiedere le coordinate a un amico è un modo scherzoso di chiedere un indirizzo. Vedi → latitudine, → longitudine.",
  seo: {
    title: "Coordinate geografiche — significato e formati | Il Paroliere",
    description: "Che cosa sono le coordinate geografiche: latitudine e longitudine che indicano la posizione di un punto sulla Terra. Formati, sistemi di riferimento ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
