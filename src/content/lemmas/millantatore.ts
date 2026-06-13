// Il Paroliere — Lemma: millantatore
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const millantatore: LemmaEntry = {
  lemma: "millantatore",
  slug: "millantatore",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "formale", "giuridico"],
  domains: ["psicologia", "diritto", "comportamento sociale"],

  definition:
    "Chi vanta in modo sistematico capacità, risorse, conoscenze o influenze " +
    "esagerate o inesistenti per ottenere vantaggi — materiali, di posizione o di " +
    "considerazione. Il millantatore è più calcolato del fanfarone e più orientato al " +
    "risultato del semplice vanitoso: la sua millanteria ha uno scopo. In italiano " +
    "giuridico, il «millantatore di credito» era chi si faceva dare denaro o favori " +
    "dichiarando di poter influire su pubblici funzionari — reato oggi assorbito nella " +
    "concussione e nella corruzione.",

  shortDefinition:
    "Chi vanta sistematicamente meriti o influenze esagerati o finti per ottenere " +
    "vantaggi; in diritto, figura legata alla millanteria di credito.",

  etymology:
    "Da «millantare», agente nominale con suffisso -tore. Vedere «millanteria» per " +
    "l’etimologia della radice. Il suffisso -tore indica chi compie l’azione in modo " +
    "stabile, non occasionale.",

  examples: [
    "Il classico millantatore da bar è quello che conosce personalmente “il direttore”, il quale può “sistemare” qualsiasi problema — senza che questa conoscenza si materializzi mai.",
    "Il millantatore di credito non è solo un bugiardo: è qualcuno che ha capito come funziona un sistema in cui le relazioni contano più delle competenze, e ne approfitta.",
    "Smascherare un millantatore richiede pazienza: bisogna aspettare che la promessa diventi dovuta, e poi verificare se si mantiene.",
    "Nella cultura d’impresa, il millantatore si annida nei pitch deck: numeri gonfiati, roadmap irrealistiche, mercati totali addressable che includono chiunque respiri.",
  ],

  synonyms: [
    { term: "fanfarone", register: "comune-letterario", note: "Meno calcolato; il fanfarone vanta per abitudine, il millantatore per strategia." },
    { term: "impostore", register: "comune-formale", note: "Più grave: l’impostore assume un’identità falsa, il millantatore amplifica quella reale." },
  ],

  antonyms: [
    { term: "persona affidabile", register: "comune", note: "Chi mantiene ciò che promette senza amplificarne la portata." },
    { term: "understatement", register: "comune", note: "Il comportamento opposto: minimizzare anziché gonfiare." },
  ],

  relatedWords: ["millanteria", "fanfarone", "gradasso", "spaccone", "ipocrisia", "malafede"],
  sourceLinks: {},

  paroliereNote:
    "Il millantatore è la versione razionale del fanfarone: non vanta per esuberanza, " +
    "vanta per calcolo. Il che lo rende più pericoloso e meno simpatico. In sistemi " +
    "in cui la reputazione precede la performance — e in Italia questo è un problema " +
    "strutturale — il millantatore può sopravvivere a lungo semplicemente perché la " +
    "verifica è costosa e il dubbio imbarazzante. Smascherarlo richiede la " +
    "disponibilità a fare ciò che il sistema preferisce non fare: controllare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "millantatore — il vanto strategico tra psicologia, diritto e cultura d’impresa",
    description: "Che cos’è un millantatore: definizione psicologica e giuridica, differenza da fanfarone e impostore, e come sopravvive nei sistemi dove la verifica è costosa.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
