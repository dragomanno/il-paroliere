// Il Paroliere — Lemma: geoide
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const geoide: LemmaEntry = {
  lemma: "geoide",
  slug: "geoide",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition: "In geodesia, superficie di riferimento che coincide con il livello medio dei mari in quiete, idealmente prolungato sotto i continenti, e che in ogni punto è perpendicolare alla direzione della gravità. Non è una figura geometrica regolare: per la distribuzione irregolare delle masse all'interno della Terra si scosta dall'ellissoide di riferimento fino a circa cento metri, dai −106 metri dell'Oceano Indiano, a sud dello Sri Lanka, ai +85 metri intorno all'Islanda. È la superficie da cui si contano le quote sul livello del mare; per ricavarle dalle altezze sull'ellissoide fornite dai ricevitori satellitari serve un modello del geoide, che in Italia è ITALGEO, calcolato dal Politecnico di Milano con l'IGM.",
  shortDefinition: "Superficie del livello medio dei mari prolungata sotto i continenti, da cui si misurano le quote; la forma fisica della Terra.",
  register: [
    "tecnico-scientifico",
  ],
  domains: [
    "geodesia",
    "geofisica",
  ],
  etymology: "Dal tedesco Geoid, coniato nel 1873 dal matematico Johann Benedict Listing sul greco geoeidḗs «simile alla Terra», da gê «terra» ed eîdos «forma». Il concetto risale a Carl Friedrich Gauss, che nel 1828 aveva descritto la figura matematica della Terra come una superficie di uguale potenziale della gravità. Lo stesso Listing aveva introdotto, nel 1847, la parola topologia.",
  examples: [
    "Il GPS misura l'altezza sull'ellissoide; per avere la quota sul mare bisogna togliere l'ondulazione del geoide.",
    "In Italia il geoide sta alcune decine di metri sopra l'ellissoide, e senza correzione le quote del ricevitore sarebbero sbagliate.",
    "Le mappe satellitari della gravità, esagerate migliaia di volte, mostrano il geoide come una patata bitorzoluta.",
  ],
  synonyms: [
    {
      term: "superficie geoidica",
      register: "tecnico-scientifico",
      context: "denominazione estesa",
    },
  ],
  antonyms: [],
  relatedWords: [
    "geodesia",
    "altitudine",
    "quota",
    "gps",
    "coordinate-geografiche",
    "isoipsa",
    "igm",
    "gravita",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/geoide/",
    wiktionary: "https://it.wiktionary.org/wiki/geoide",
  },
  paroliereNote: "Il geoide è la risposta più onesta alla domanda su che forma abbia la Terra: non una sfera, non un ellissoide, ma la superficie che prenderebbe il mare se fosse fermo e potesse infilarsi sotto le montagne. È una forma fisica, decisa dalla gravità, e per questo irregolare; la sua irregolarità, però, è minuscola rispetto al pianeta, meno di duecento metri su un diametro di oltre dodicimila chilometri. Le immagini che la esagerano migliaia di volte l'hanno resa famosa come la patata di Potsdam, dal centro di ricerca tedesco che le ha diffuse. Vedi → geodesia e → altitudine.",
  seo: {
    title: "Geoide — significato, forma della Terra e quote | Il Paroliere",
    description: "Che cos'è il geoide: la superficie del livello medio dei mari prolungata sotto i continenti, da cui si misurano le quote. Ondulazioni, GPS, ITALGEO.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
