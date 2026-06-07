// Il Paroliere — Lemma: migrazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const migrazione: LemmaEntry = {
  lemma: "migrazione",
  slug: "migrazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Spostamento di individui o gruppi da un luogo a un altro con l'intenzione o la necessità di " +
    "stabilirsi altrove. In demografia e diritto internazionale si distinguono la migrazione interna " +
    "(all'interno di uno stesso paese) e quella internazionale (tra paesi diversi); la migrazione " +
    "volontaria (mosssa da scelte economiche, familiari o personali) e quella forzata (causata da " +
    "guerre, persecuzioni, disastri ambientali o violazioni dei diritti fondamentali). " +
    "Le cause sono quasi sempre multiple e intrecciate: separare «migrante economico» da " +
    "«rifugiato» è una distinzione giuridica necessaria — perché determina diritti e procedure " +
    "diverse — ma non sempre corrisponde alla complessità delle storie individuali. " +
    "Il termine si applica anche agli spostamenti stagionali di specie animali, con la stessa " +
    "neutralità descrittiva con cui si dovrebbe usare in ambito umano.",

  shortDefinition:
    "Spostamento da un luogo a un altro con intenzione di stabilirsi; comprende movimenti volontari e forzati, interni e internazionali.",

  register: ["comune", "tecnico", "giuridico"],
  domains: ["demografia", "diritto internazionale", "sociologia", "storia", "biologia"],

  etymology:
    "Dal latino migratio, -onis, derivato di migrare ('spostarsi', 'trasferirsi'). " +
    "La radice indoeuropea è condivisa con il greco ameíbein ('cambiare'). " +
    "L'uso moderno con riferimento ai movimenti di popolazione si consolida nel XIX secolo " +
    "con le grandi emigrazioni atlantiche.",

  examples: [
    "Tra il 1880 e il 1930 circa cinque milioni di italiani emigrarono negli Stati Uniti, in Argentina e in Brasile: era migrazione economica, ma anche fuga dalla miseria e dalla violenza politica.",
    "Il diritto internazionale distingue il rifugiato — che ha diritto alla protezione per persecuzioni documentate — dal migrante economico, che rientra nelle politiche di ingresso di ciascun paese.",
    "Le rondini percorrono ogni anno migliaia di chilometri: anche la biologia usa il termine migrazione per descrivere un movimento stagionale guidato da necessità.",
    "Gestire la migrazione richiede strumenti diversi a seconda del tipo: accordi di rimpatrio, programmi di integrazione, canali legali di ingresso, protezione dei richiedenti asilo — non esiste una risposta unica.",
  ],

  synonyms: [
    {
      term: "emigrazione",
      register: "comune",
      context: "enfatizza il movimento di uscita dal luogo di partenza",
    },
    {
      term: "immigrazione",
      register: "comune",
      context: "enfatizza l'arrivo nel luogo di destinazione — stesso fenomeno, punto di vista opposto",
    },
    {
      term: "esodo",
      register: "letterario",
      context: "spostamento massiccio, spesso con connotazione di fuga o trauma collettivo",
    },
  ],

  antonyms: [
    {
      term: "sedentarietà",
      register: "tecnico",
      context: "condizione di chi rimane stabile nel territorio d'origine",
    },
    {
      term: "stanzialità",
      register: "comune",
      context: "radicamento in un luogo, opposto del movimento migratorio",
    },
  ],

  relatedWords: [
    "xenofobia",
    "xenofobo",
    "etnocentrismo",
    "razzismo",
    "pregiudizio",
    "alterità",
    "accoglienza",
    "rifugiato",
    "integrazione",
    "diaspora",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/migrazione/",
    wiktionary: "https://it.wiktionary.org/wiki/migrazione",
  },

  paroliereNote:
    "Migrazione è una parola descrittiva che il dibattito pubblico ha trasformato in un campo " +
    "minato. Vale la pena tenere separati tre piani che spesso vengono mescolati: il piano " +
    "empirico (quante persone si spostano, per quali motivi, con quali effetti documentati), " +
    "il piano giuridico (quali diritti e obblighi si attivano in base alla categoria di ingresso) " +
    "e il piano politico (quali scelte uno Stato decide di compiere nell'esercizio della sua " +
    "sovranità, nel rispetto degli obblighi internazionali). Confondere i tre piani produce " +
    "semplificazioni che servono alla retorica, non alla comprensione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Migrazione — definizione e uso | Il Paroliere",
    description:
      "Migrazione: spostamento umano volontario o forzato verso un nuovo luogo di residenza. Definizione chiara con distinzioni giuridiche, esempi storici ed etimologia.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
