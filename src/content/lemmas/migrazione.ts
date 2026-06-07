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
    "Spostamento di individui o gruppi da un luogo a un altro, con l'intenzione o la necessità di " +
    "stabilirsi altrove. Il termine si applica sia ai movimenti umani — interni a un paese o tra " +
    "paesi diversi, volontari o forzati — sia agli spostamenti stagionali di specie animali. " +
    "Nel lessico contemporaneo la migrazione umana è diventata oggetto di dibattito politico " +
    "intenso, spesso con una distanza considerevole tra il fenomeno reale e le sue rappresentazioni.",

  shortDefinition:
    "Spostamento da un luogo a un altro con intenzione di stabilirsi; nel lessico contemporaneo, mobilità umana tra paesi.",

  register: ["comune", "tecnico", "politico"],
  domains: ["sociologia", "geopolitica", "biologia", "storia"],

  etymology:
    "Dal latino migratio, -onis, derivato di migrare ('spostarsi', 'trasferirsi'). " +
    "La radice indoeuropea è condivisa con il greco ameíbein ('cambiare'). " +
    "L'uso moderno con riferimento ai movimenti di popolazione si consolida nel XIX secolo " +
    "con le grandi emigrazioni atlantiche.",

  examples: [
    "La migrazione italiana verso le Americhe tra fine Ottocento e primo Novecento ha coinvolto oltre quattro milioni di persone.",
    "Distinguere migrazione economica da migrazione forzata è importante sul piano giuridico, ma nella realtà le cause si sovrappongono spesso.",
    "Le rondini percorrono ogni anno migliaia di chilometri: anche la biologia usa lo stesso termine per descrivere un movimento guidato da necessità.",
    "Ogni onda migratoria ha incontrato resistenza e poi integrazione: è quasi una legge della storia, se si ha il tempo di guardarla.",
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
    "diaspora",
    "rifugiato",
    "integrazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/migrazione/",
    wiktionary: "https://it.wiktionary.org/wiki/migrazione",
  },

  paroliereNote:
    "Migrazione è una parola neutra che il dibattito politico ha caricato di valenze. " +
    "Vale la pena ricordare che l'Italia è storicamente un paese di emigranti prima che di immigrati: " +
    "a fine Ottocento i migranti italiani venivano descritti in America con gli stessi argomenti " +
    "che oggi si usano per descrivere i migranti che arrivano in Italia.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Migrazione — definizione e uso | Il Paroliere",
    description:
      "Migrazione: spostamento umano o animale verso un nuovo luogo di residenza. Definizione originale con etimologia, esempi e nota storica.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
