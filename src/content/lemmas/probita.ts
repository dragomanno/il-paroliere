// Il Paroliere — Lemma: probità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const probita: LemmaEntry = {
  lemma: "probità",
  slug: "probita",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Integrità morale rigorosa e costante; la qualità di chi è probo — cioè di chi " +
    "non solo non fa il male ma ha interiorizzato profondamente i principi etici fino a " +
    "farne una seconda natura. Probità è un'onestà elevata, quasi ascetica: non si " +
    "limita all'assenza di comportamenti scorretti ma indica una rettitudine positiva, " +
    "attiva, che si manifesta anche quando nessuno osserva e anche quando la " +
    "scorrettezza sarebbe vantaggiosa e impunita. Nel lessico giuridico italiano, " +
    "probità compare spesso come requisito per l'esercizio di determinati ruoli pubblici " +
    "o professionali — «requisiti di onorabilità e probità» — dove indica lo standard " +
    "morale richiesto per ricoprire una posizione di fiducia.",

  shortDefinition:
    "Rettitudine morale profonda e costante; onestà elevata a principio di vita, " +
    "non solo assenza di scorrettezze.",

  register: ["formale", "letterario", "giuridico"],
  domains: ["etica", "diritto", "politica", "società"],

  etymology:
    "Dal latino probitas, -atis, da probus («buono, onesto, integro»), forse da " +
    "probare («mettere alla prova, approvare»): colui che ha superato la prova morale.",

  examples: [
    "La sua probità era leggendaria nel palazzo di giustizia: in trent'anni di carriera, nessuno aveva mai potuto muovergli un'obiezione.",
    "La legge richiede ai candidati di dimostrare requisiti di probità e onorabilità prima di essere iscritti all'albo.",
    "Probità non è fare il bene quando conviene: è farlo anche quando costa qualcosa.",
  ],

  synonyms: [
    {
      term: "integrità morale",
      register: "comune",
      context: "completezza etica senza compromessi",
    },
    {
      term: "rettitudine",
      register: "formale",
      context: "condotta dritta e corretta in ogni circostanza",
    },
    {
      term: "onestà",
      register: "comune",
      context: "forma più quotidiana e accessibile",
    },
    {
      term: "virtù civica",
      register: "filosofico",
      context: "in senso repubblicano e istituzionale",
    },
  ],

  antonyms: [
    {
      term: "corruzione",
      register: "comune",
      context: "cedimento ai comportamenti illeciti",
    },
    {
      term: "venalità",
      register: "comune",
      context: "orientamento al tornaconto economico",
    },
    {
      term: "malafede",
      register: "comune",
      context: "intenzione consapevolmente scorretta",
    },
  ],

  relatedWords: [
    "probo",
    "onesta",
    "integerrimo",
    "irreprensibile",
    "virtù",
    "rettitudine",
    "morale pubblica",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/probita/",
    wiktionary: "https://it.wiktionary.org/wiki/probità",
  },

  paroliereNote:
    "Probità occupa il gradino intermedio nella gerarchia dell'onestà italiana: più " +
    "impegnativa e interiore dell'onestà comune, meno assoluta e solenne " +
    "dell'integerrimo. È la parola del codice deontologico, del magistrato che resiste " +
    "alle pressioni, del funzionario che rifiuta il favore. Ha una qualità quasi " +
    "vocazionale: non si è probi occasionalmente, si è probi come modo di essere nel " +
    "mondo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Probità — definizione giuridica e morale | Il Paroliere",
    description:
      "Probità: cos'è, quando si usa, differenza da onestà. Il requisito morale nei " +
      "codici deontologici e nella vita pubblica. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
