// Il Paroliere — Lemma: tensione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tensione: LemmaEntry = {
  lemma: "tensione",
  slug: "tensione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "relazioni", "fisica", "ingegneria"],

  definition: "Nell’esperienza interiore, stato di allerta o conflitto che rende inquieti, concentrati o reciprocamente rigidi; può crescere nel tempo della → attesa e nella → frustrazione. In fisica e meccanica, forza o condizione di trazione che agisce su un corpo, un cavo o un materiale; in elettrotecnica indica una differenza di potenziale.",

  shortDefinition: "Stato di allerta interiore o condizione fisica di trazione e differenza di potenziale.",

  etymology: "Dal latino tensio, derivato di tendere, «tendere»; il nucleo dell’allungamento e dello sforzo spiega sia l’uso tecnico sia quello emotivo.",

  examples: [
    "Prima del colloquio, la tensione le chiudeva lo stomaco.",
    "Nella stanza restava una tensione sottile, nata da un dissenso mai affrontato.",
    "Il tecnico ha controllato la tensione del cavo prima di sollevare la struttura.",
    "La tensione nel circuito variava quando veniva collegato il caricatore."
  ],

  synonyms: [
    { term: "nervosismo", register: "comune", note: "Vale per l’accezione interiore e quotidiana, più lieve o momentanea." },
    { term: "conflittualità", register: "formale", note: "Riguarda soprattutto una tensione tra persone, gruppi o posizioni." },
    { term: "trazione", register: "tecnico", note: "Indica in modo specifico il tirare meccanico, non lo stato psicologico." }
  ],

  antonyms: [
    { term: "distensione", register: "comune", note: "Nell’uso psicologico segnala l’allentarsi della pressione o del conflitto." },
    { term: "rilassamento", register: "comune", note: "Riguarda soprattutto corpo e stato emotivo, non l’accezione elettrica." },
    { term: "compressione", register: "tecnico", note: "In meccanica è una sollecitazione opposta alla trazione." }
  ],

  relatedWords: ["passione", "slancio", "volontà", "desiderio", "speranza", "attesa", "frustrazione", "relazione", "legame"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/tensione"
  },

  paroliereNote: "La tensione non è sempre un difetto da eliminare: può dare attenzione e forma a un confronto. Diventa corrosiva quando, in una → relazione, non trova parole, limiti o possibilità di sciogliersi.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Tensione — definizione, sinonimi, uso | Il Paroliere",
    description: "Che cos’è la tensione: definizione originale, sinonimi ed esempi d’uso per le accezioni psicologica, relazionale, fisica, meccanica ed elettrica."
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24"
};
