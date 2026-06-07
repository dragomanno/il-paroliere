// Il Paroliere — Lemma: razzismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const razzismo: LemmaEntry = {
  lemma: "razzismo",
  slug: "razzismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Sistema di credenze, pratiche e strutture sociali che attribuisce valore differente agli esseri " +
    "umani in base a caratteristiche fisiche o di origine percepite come razziali. Il razzismo può " +
    "operare a livello individuale — come pregiudizio esplicito — o a livello strutturale, quando " +
    "le disuguaglianze si riproducono indipendentemente dalle intenzioni dei singoli. È concettualmente " +
    "più ristretto della xenofobia, che non presuppone una gerarchia biologica, ma più ampio del " +
    "semplice pregiudizio, perché implica un sistema di potere.",

  shortDefinition:
    "Sistema di credenze e pratiche che attribuisce valore diverso alle persone in base a caratteristiche razziali percepite.",

  register: ["comune", "tecnico", "politico"],
  domains: ["sociologia", "storia", "politica", "diritto"],

  etymology:
    "Derivato di razza (dall'italiano del Cinquecento, di etimologia incerta — forse dall'arabo rāsa, " +
    "'testa', o dall'italiano antico razza, 'stirpe') con il suffisso -ismo che indica sistema di " +
    "pensiero o dottrina. Il termine si consolida nel lessico politico europeo tra fine Ottocento e " +
    "primo Novecento.",

  examples: [
    "Le leggi razziali del 1938 sono l'esempio storico più documentato di razzismo istituzionale in Italia.",
    "Il razzismo strutturale agisce anche quando nessuno ha intenzione di discriminare: è incorporato nelle procedure, nei criteri, nei silenzi.",
    "Distinguere razzismo da xenofobia aiuta la comprensione: si può essere xenofobi verso un popolo della stessa 'razza' percepita.",
    "Il dibattito contemporaneo distingue tra razzismo come singolo atto e razzismo come sistema: la differenza ha conseguenze giuridiche e politiche.",
  ],

  synonyms: [
    {
      term: "discriminazione razziale",
      register: "tecnico-giuridico",
      context: "la manifestazione pratica del razzismo, soggetta a norme legali",
    },
    {
      term: "segregazionismo",
      register: "storico",
      context: "forma organizzata di razzismo che separa fisicamente i gruppi",
    },
  ],

  antonyms: [
    {
      term: "antirazzismo",
      register: "comune",
      context: "postura attiva di opposizione al razzismo, non solo assenza di pregiudizio",
    },
    {
      term: "uguaglianza",
      register: "formale",
      context: "principio normativo che il razzismo nega nella pratica",
    },
  ],

  relatedWords: [
    "xenofobia",
    "xenofobo",
    "etnocentrismo",
    "pregiudizio",
    "alterità",
    "migrazione",
    "fascismo",
    "nazismo",
    "discriminazione",
    "accoglienza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/razzismo/",
    wiktionary: "https://it.wiktionary.org/wiki/razzismo",
  },

  paroliereNote:
    "Il concetto scientifico di razza biologica è stato ampiamente smentito dalla genetica moderna: " +
    "non esistono razze umane nel senso biologico in cui le intendeva il razzismo ottocentesco. " +
    "Eppure il razzismo sopravvive alla smentita scientifica, perché non ha mai avuto bisogno " +
    "della biologia — ha bisogno del potere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Razzismo — definizione e uso | Il Paroliere",
    description:
      "Razzismo: sistema di credenze e pratiche basato su caratteristiche razziali percepite. Definizione originale, esempi, etimologia.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
