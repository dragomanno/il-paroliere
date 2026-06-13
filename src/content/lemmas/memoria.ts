// Il Paroliere — Lemma: memoria
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const memoria: LemmaEntry = {
  lemma: "memoria",
  slug: "memoria",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "filosofia", "neuroscienze", "diritto", "informatica", "cultura"],

  definition:
    "Capacità della mente e del sistema nervoso di conservare e richiamare esperienze, informazioni e abitudini, rendendo possibile una continuità tra ciò che siamo stati e ciò che siamo ora. In psicologia indica l'insieme dei processi con cui un contenuto viene codificato, mantenuto e recuperato nel tempo; in filosofia è anche il luogo in cui la coscienza custodisce il passato, alimentando identità, responsabilità e narrazioni di sé. In uso comune, è tanto il ricordo vivo di qualcosa quanto la sua traccia che sfuma, tra la fedeltà del dato e le deformazioni dell'oblio.",

  shortDefinition:
    "Capacità di conservare e richiamare esperienze e informazioni, che permette alla persona di riconoscersi nel tempo tra ricordo fedele e zone d'ombra.",

  etymology:
    "Dal latino memoria, derivato di memor, -oris “che ricorda, attento a”, con radice indoeuropea ricostruita *smer- / *mer- “ricordare, preoccuparsi di”. Nel passaggio all'italiano il termine conserva sia il valore di facoltà mentale sia quello di ricordo concreto, mentre la tradizione filosofica e giuridica ne rafforza il legame con identità, testimonianza e responsabilità.",

  examples: [
    "Da quando è nato suo figlio, la memoria delle notti insonni si mescola alla tenerezza, e non sa più separare la fatica dalla gioia.",
    "In udienza, la memoria del testimone è stata messa in dubbio perché i fatti risalivano a più di dieci anni prima.",
    "Il romanzo lavora sulla memoria collettiva di un paese che preferirebbe dimenticare le proprie colpe.",
    "Dopo l'incidente ha recuperato gradualmente la memoria, ma alcuni giorni restano come cancellati.",
    "Anche il computer ha una sua memoria, diversa dalla nostra: perfetta nel ripetere i dati, muta nel dare loro un senso.",
  ],

  synonyms: [
    {
      term: "ricordo",
      register: "comune",
      note: "Focalizza il singolo contenuto ricordato, non la facoltà.",
    },
    {
      term: "reminiscenza",
      register: "letterario",
      note: "Ricordo sfumato, che riemerge in parte.",
    },
    {
      term: "memoria storica",
      register: "comune",
      note: "Orientata al piano collettivo e politico.",
    },
  ],

  antonyms: [
    {
      term: "oblio",
      register: "comune",
      note: "Perdita o sospensione del ricordo.",
    },
    {
      term: "dimenticanza",
      register: "comune",
      note: "Può indicare tanto una svista quanto il venir meno della memoria.",
    },
  ],

  relatedWords: ["oblio", "anamnesi", "identita", "trauma", "epistemologia"],

  sourceLinks: {},

  paroliereNote:
    "La memoria non è un archivio neutrale: seleziona, ricompone, cancella. Nella vita quotidiana la trattiamo come se fosse una prova, ma in psicologia e in diritto sappiamo che è fragile, esposta a suggestioni, bias e riscritture successive. Parliamo di “buona memoria” come di una dote individuale, ma esistono anche memorie collettive: racconti condivisi che tengono insieme una comunità, talvolta proprio grazie a ciò che tacciono. In un'epoca in cui delegare ai dispositivi digitali è diventato facile, il lemma apre una domanda discreta: che cosa perdiamo quando non siamo più noi a ricordare?",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "memoria — significato psicologico e quotidiano",
    description:
      "Che cos'è la memoria tra psicologia, vita quotidiana e memoria collettiva, tra ricordi fedeli, dimenticanze e riscritture.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
