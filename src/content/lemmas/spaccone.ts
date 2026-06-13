// Il Paroliere — Lemma: spaccone
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const spaccone: LemmaEntry = {
  lemma: "spaccone",
  slug: "spaccone",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "colloquiale"],
  domains: ["psicologia", "comportamento sociale"],

  definition:
    "Chi ostenta forza, abilità o risorse in modo esagerato e rumoroso, cercando di " +
    "imporsi sugli altri attraverso la rappresentazione di sé piuttosto che attraverso " +
    "la sostanza. Lo spaccone «spacca» — nel senso figurato di rompere, di fare a " +
    "pezzi — con le parole e i gesti prima ancora che con i fatti. È contiguo al " +
    "gradasso e al fanfarone, ma ha un’accentuazione fisica maggiore: l’ostentazione " +
    "dello spaccone è spesso corporea, legata alla forza o all’aspetto.",

  shortDefinition:
    "Chi ostenta forza o abilità in modo esagerato per imporsi sugli altri; con " +
    "accentuazione corporea e fisica rispetto a gradasso e fanfarone.",

  etymology:
    "Da «spaccare», nel senso figurato di «fare a pezzi, dominare, impressionare». " +
    "Il suffisso -one ha valore accrescitivo e di caratterizzazione del tipo: " +
    "lo spaccone è chi «spacca» sistematicamente e con ostentazione.",

  examples: [
    "In palestra, lo spaccone è quello che solleva più di quanto riesce senza far sapere a tutti quanti quanto solleva.",
    "Certi stili di leadership aziendale sono pura spacconate: riunioni ad alto volume, decisioni annunciate con fanfara, risultati che arrivano in sordina.",
    "Lo spaccone è quasi sempre un personaggio di confine: tra l’insicurezza profonda e la necessità di nasconderla sotto una maschera di forza.",
    "Nelle commedie dialettali italiane, lo spaccone è una presenza fissa: fa ridere perché tutti lo riconoscono, e tutti lo riconoscono perché sanno che un po’ di spaccone c’è in ognuno.",
  ],

  synonyms: [
    { term: "gradasso", register: "comune", note: "Praticamente sinonimo; il gradasso ha un’accentuazione più sull’atteggiamento di superiorità." },
    { term: "fanfarone", register: "comune-letterario", note: "Più legato alla parola; lo spaccone è più fisico e comportamentale." },
  ],

  antonyms: [
    { term: "persona discreta", register: "comune", note: "Chi non ostenta e lascia che i fatti parlino al posto suo." },
    { term: "understatement", register: "comune", note: "Il comportamento opposto: minimizzare invece di amplificare." },
  ],

  relatedWords: ["gradasso", "fanfarone", "millantatore", "bravata", "arroganza"],
  sourceLinks: {},

  paroliereNote:
    "Lo spaccone è il tipo umano che ogni cultura produce in abbondanza e che la " +
    "commedia — da Aristofane in poi — ha sempre trovato inesauribile. Non perché " +
    "sia particolarmente interessante in sé, ma perché la distanza tra la " +
    "rappresentazione e la realtà è comica per definizione. E perché, come ogni " +
    "maschera, rivela sotto di sé qualcosa di più fragile di quanto mostri.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "spaccone — l’ostentazione della forza tra commedia e psicologia",
    description: "Che cos’è uno spaccone: definizione psicologica, differenza da gradasso e fanfarone, e la funzione comica del tipo nella tradizione italiana.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
