// Il Paroliere — Lemma: equidistanza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const equidistanza: LemmaEntry = {
  lemma: "equidistanza",
  slug: "equidistanza",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "1. In cartografia, dislivello costante tra due curve di livello consecutive di una carta topografica: sulle carte dell'Istituto Geografico Militare alla scala 1:25.000 è di 25 metri. 2. In geometria, condizione di un punto che si trova alla stessa distanza da due o più punti, linee o superfici. 3. In senso figurato, soprattutto nel linguaggio politico, posizione di neutralità di chi non si schiera con nessuna delle parti in contrasto.",
  shortDefinition: "Dislivello costante tra due curve di livello consecutive; in senso figurato, neutralità tra parti in contrasto.",
  register: [
    "tecnico-scientifico",
    "comune",
    "figurato",
  ],
  domains: [
    "cartografia",
    "geometria",
    "politica",
  ],
  etymology: "Derivato di equidistante, composto del latino aequus «uguale» e distans, -antis, participio presente di distare «stare lontano».",
  examples: [
    "La legenda indica un'equidistanza di 25 metri: contando le curve si capisce quanto sale il sentiero.",
    "Tutti i punti del cerchio sono in equidistanza dal centro, ed è questo a definirlo.",
    "Il sindaco ha rivendicato la propria equidistanza tra i comitati del sì e del no.",
  ],
  synonyms: [
    {
      term: "intervallo delle curve di livello",
      register: "tecnico-scientifico",
      context: "formula descrittiva, nel senso cartografico",
    },
    {
      term: "neutralità",
      register: "comune",
      context: "nel senso figurato, più netto e meno legato al calcolo delle posizioni",
    },
    {
      term: "imparzialità",
      register: "comune",
      context: "nel senso figurato, con l'accento sul giudizio più che sulla posizione",
    },
  ],
  antonyms: [
    {
      term: "parzialità",
      register: "comune",
      context: "nel senso figurato",
    },
    {
      term: "schieramento",
      register: "comune",
      context: "nel senso figurato, presa di posizione per una parte",
    },
  ],
  relatedWords: [
    "isoipsa",
    "scala-cartografica",
    "quota",
    "altitudine",
    "topografia",
    "cartografia",
    "isobata",
    "pendenza",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/equidistanza/",
    wiktionary: "https://it.wiktionary.org/wiki/equidistanza",
  },
  paroliereNote: "In cartografia l'equidistanza è la chiave di lettura della carta: senza conoscerla, le → isoipsa restano disegni. Di regola vale circa un millesimo del denominatore della → scala cartografica, quindi 25 metri al 25.000, ma le carte di pianura la riducono per non perdere i dislivelli minimi. Il figurato politico è antico e un po' scivoloso: chi si dichiara equidistante sostiene di stare nel mezzo, ma la parola, a differenza di neutralità, lascia intendere che la posizione sia stata misurata con cura, e spesso proprio per questo viene contestata.",
  seo: {
    title: "Equidistanza — significato in cartografia e in politica | Il Paroliere",
    description: "Che cos'è l'equidistanza: il dislivello tra curve di livello consecutive, 25 m sulle carte IGM 1:25.000. Senso geometrico, figurato politico ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
