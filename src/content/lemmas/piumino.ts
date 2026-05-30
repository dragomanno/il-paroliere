// Il Paroliere — Lemma: piumino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const piumino: LemmaEntry = {
  lemma: "piumino",
  slug: "piumino",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Termine che designa due oggetti distinti accomunati dall'imbottitura soffice: 1) " +
    "in abbigliamento, il giubbotto invernale imbottito di piuma d'oca o materiali " +
    "sintetici, leggero, ma molto caldo, diventato un capo iconico dell'abbigliamento " +
    "urbano e sportivo dal secondo Novecento in poi; 2) in casa, la coperta morbida e " +
    "leggera usata sul divano o sul sofà per riposare, in piuma naturale o in fibre " +
    "sintetiche, più sottile e versatile del piumone da letto.",

  shortDefinition:
    "Giacca invernale imbottita e leggera; anche coperta soffice da divano. Due " +
    "oggetti, stesso principio d'imbottitura.",

  register: ["comune"],
  domains: ["abbigliamento", "casa"],

  etymology:
    "Diminutivo di piuma, dal latino pluma, piuma leggera, lanugine. La formazione " +
    "con -ino ne marca inizialmente le dimensioni o il carattere delicato; nell'uso " +
    "moderno il suffisso non indica più dimensione, ma ha cristallizzato il nome dei " +
    "due oggetti distinti.",

  examples: [
  ],

  synonyms: [
    { term: "giubbotto imbottito", register: "comune", context: "descrittivo, per l'accezione abbigliamento" },
    { term: "plumino", register: "comune/tecnico", context: "variante grafica usata nel settore sportivo e outdoor" },
    { term: "copertina", register: "comune/familiare", context: "per l'accezione coperta da divano, in registro affettuoso" }
  ],

  relatedWords: [
    "piumone"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/piumino"
  },

  paroliereNote:
    "Due oggetti, un'unica parola: il piumino abbigliamento e il piumino da divano " +
    "condividono il nome, ma abitano mondi diversi. Il primo ha una storia di design " +
    "che passa per Moncler e le giacche da montagna degli anni Cinquanta; il secondo " +
    "è un comfort object domestico, simbolo del relax serale, spesso conteso tra i " +
    "membri della famiglia. Il piumone (vedi) è invece riservato al letto: più " +
    "pesante, più largo, più ufficialmente notturno.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Piumino — Il Paroliere",
    description:
      "Piumino: giacca invernale imbottita o coperta leggera da divano. Due accezioni " +
      "di uno stesso termine, spiegato nella voce originale de Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};