// Il Paroliere — Lemma: incursione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incursione: LemmaEntry = {
  lemma: "incursione",
  slug: "incursione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Azione militare rapida e a sorpresa in territorio nemico, con un obiettivo preciso e " +
    "ritiro immediato: non occupazione, ma penetrazione e fuga. Per estensione, il termine " +
    "vive con la stessa agilità nel linguaggio comune, dove indica qualsiasi breve avventura " +
    "in un campo non proprio — una incursione nella poesia, nella cucina, nella filosofia.",

  shortDefinition:
    "Attacco fulmineo in territorio avversario; per estensione, una breve sortita in un campo che non è il proprio.",

  register: ["tecnico militare", "comune"],
  domains: ["guerra", "strategia militare", "linguaggio figurato"],

  etymology:
    "Dal latino incursio, derivato di incurrere («correre dentro, irrompere»), composto di " +
    "in- («dentro») e currere («correre»). La radice latina conserva il senso di movimento " +
    "rapido e direzionato.",

  examples: [
    "I reparti speciali eseguirono un'incursione notturna oltre il confine per recuperare l'ostaggio.",
    "Il romanzo è frutto di una breve incursione dell'autore nel mondo della fantascienza, lontano dal suo genere abituale.",
    "L'incursione aerea distrusse il deposito di carburante senza perdite tra i civili.",
  ],

  synonyms: [
    {
      term: "raid",
      register: "tecnico militare",
      context: "attacco rapido e localizzato, anglicismo diffuso nel linguaggio militare",
    },
    {
      term: "sortita",
      register: "tecnico militare",
      context: "uscita offensiva da una posizione difensiva",
    },
    {
      term: "blitz",
      register: "giornalistico",
      context: "in senso figurato, azione veloce e concentrata",
    },
  ],

  antonyms: [
    {
      term: "occupazione",
      register: "tecnico militare",
      context: "controllo stabile del territorio, opposto del ritiro immediato",
    },
    {
      term: "assedio",
      register: "tecnico militare",
      context: "azione prolungata, non rapida",
    },
  ],

  relatedWords: [
    "kommando",
    "terrorismo",
    "sabotaggio",
    "operazioni speciali",
    "raid",
    "attacco",
    "forze speciali",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/incursione/",
    wiktionary: "https://it.wiktionary.org/wiki/incursione",
  },

  paroliereNote:
    "Incursione ha una doppia vita lessicale che rende la parola particolarmente viva. " +
    "Nel dominio militare descrive una tattica precisa: velocità, obiettivo circoscritto, " +
    "ritiro pianificato. Nel linguaggio comune conserva questa struttura semantica di " +
    "ingresso temporaneo in un territorio non proprio, trasportandola in campi del tutto " +
    "pacifici. Chi parla di «un'incursione nella letteratura» sta applicando la stessa " +
    "logica tattica a un'esperienza intellettuale: breve, focalizzata, senza intenzione " +
    "di stabilirsi. Lo slittamento figurato non impoverisce il termine, lo moltiplica.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Incursione — definizione militare e figurata | Il Paroliere",
    description:
      "Incursione: dall'azione militare rapida alla metafora del linguaggio comune. " +
      "Definizione originale, etimologia latina, esempi d'uso.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
