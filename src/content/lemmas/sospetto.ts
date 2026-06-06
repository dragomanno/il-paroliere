// Il Paroliere — Lemma: sospetto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sospetto: LemmaEntry = {
  lemma: "sospetto",
  slug: "sospetto",
  partOfSpeech: "sostantivo maschile; anche aggettivo",

  definition:
    "Stato mentale in cui si ritiene probabile — senza averne la certezza né la prova " +
    "— che qualcosa di negativo sia vero, che qualcuno abbia commesso qualcosa di " +
    "sbagliato, o che una situazione nasconda qualcosa di non dichiarato. Il sospetto " +
    "non è né innocente né colpevole: è la zona scomoda tra il non sapere e il credere " +
    "di sapere, alimentata da indizi parziali, incongruenze o semplicemente " +
    "dall'esperienza passata che suggerisce di stare in guardia. Come aggettivo, " +
    "sospetto descrive ciò che desta diffidenza o che appare anomalo rispetto a un " +
    "contesto atteso: un comportamento sospetto, un pacco sospetto, un silenzio sospetto. " +
    "In diritto, il sospetto non ha valore probatorio autonomo: è il punto di partenza " +
    "di un'indagine, non la sua conclusione. Il principio della presunzione di innocenza " +
    "tutela esattamente la distanza tra il sospetto e la prova.",

  shortDefinition:
    "Credenza non dimostrata che qualcosa di negativo sia vero o che qualcuno abbia " +
    "agito scorrettamente; diffidenza basata su indizi parziali.",

  register: ["comune"],
  domains: ["psicologia", "diritto", "società", "linguistica"],

  etymology:
    "Dal latino suspectus, participio passato di suspicere («guardare dal basso in " +
    "su, guardare con attenzione, guardare con diffidenza»), composto di sub- + specere " +
    "(«guardare»): letteralmente «guardato da sotto», cioè osservato con attenzione e " +
    "con una certa inquietudine.",

  examples: [
    "«Aveva un sospetto che qualcosa non tornasse nei conti, ma non riusciva ancora a mettere il dito sul punto preciso.»",
    "«Il sospetto è il peggiore dei veleni nelle relazioni: avvelena anche ciò che era sano.»",
    "«Lasciare una persona nel sospetto senza darle la possibilità di difendersi è una forma sottile di ingiustizia.»",
    "«Quel ritardo inspiegabile lo rese immediatamente sospetto agli occhi degli investigatori.»",
  ],

  synonyms: [
    {
      term: "diffidenza",
      register: "comune",
      context: "atteggiamento di guardia verso qualcuno o qualcosa",
    },
    {
      term: "dubbio",
      register: "comune",
      context: "incertezza su ciò che è vero",
    },
    {
      term: "perplessità",
      register: "comune",
      context: "disagio di fronte a qualcosa che non quadra",
    },
    {
      term: "indizio",
      register: "giuridico",
      context: "segnale che orienta verso una conclusione",
    },
  ],

  antonyms: [
    {
      term: "certezza",
      register: "comune",
      context: "conoscenza verificata",
    },
    {
      term: "fiducia",
      register: "comune",
      context: "credenza positiva nell'altro",
    },
    {
      term: "evidenza",
      register: "comune",
      context: "prova visibile e indiscutibile",
    },
  ],

  relatedWords: [
    "sentore",
    "presentimento",
    "fiducia",
    "diffidenza",
    "indizio",
    "prova",
    "presunzione di innocenza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sospetto/",
    wiktionary: "https://it.wiktionary.org/wiki/sospetto",
  },

  paroliereNote:
    "Sospetto, sentore e presentimento formano una piccola famiglia di stati cognitivi " +
    "ed emotivi che vivono nella zona grigia tra il non sapere e il credere di capire. " +
    "La differenza è nella direzione e nel tono: il sentore è neutro e quasi sensoriale " +
    "— si fiuta qualcosa, non necessariamente di negativo; il presentimento è carico di " +
    "anticipazione emotiva, spesso verso qualcosa di grave; il sospetto ha una valenza " +
    "quasi sempre negativa e relazionale — si sospetta di qualcuno o che qualcosa di " +
    "sbagliato stia accadendo. Il sospetto è il più cognitivo dei tre: richiede un " +
    "ragionamento, anche implicito, su cause e intenzioni.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sospetto — definizione, psicologia, diritto | Il Paroliere",
    description:
      "Cosa significa sospetto, differenza da sentore e presentimento, il sospetto nel " +
      "diritto e nella psicologia. Definizione originale con esempi e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
