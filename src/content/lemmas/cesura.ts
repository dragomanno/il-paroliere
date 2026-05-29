// Il Paroliere — Lemma: cesura
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cesura: LemmaEntry = {
  lemma: "cesura",
  slug: "cesura",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In metrica classica e italiana, pausa interna a un verso che lo divide in due " +
    "emistichi, segnata da un confine di parola in posizione fissa. Per estensione, " +
    "indica qualsiasi interruzione netta — nella musica, un silenzio strutturale; nel " +
    "discorso critico, una frattura tra due fasi di un'opera, di una carriera o di " +
    "un'epoca storica.",

  shortDefinition:
    "Pausa interna al verso che lo spezza in due parti; per estensione, qualsiasi " +
    "interruzione netta e strutturale.",

  register: ["tecnico", "letterario"],
  domains: ["metrica", "linguistica", "musica"],

  etymology:
    "Dal latino caesura, nome d'azione di caedere (tagliare). Il termine tecnico " +
    "entra nella trattatistica metrica italiana nel Rinascimento, ripreso dalla " +
    "grammatica latina.",

  synonyms: [
    { term: "pausa", register: "comune", context: "termine più generico, privo di valore tecnico-metrico" },
    { term: "interruzione", register: "comune", context: "in senso figurato, per il valore di frattura" },
    { term: "dieresi", register: "tecnico", context: "in metrica classica, pausa interna alla sillaba — concetto adiacente ma distinto" }
  ],

  antonyms: [
    { term: "continuità", register: "comune", context: "antonimo del senso figurato di frattura" },
    { term: "legatura", register: "tecnico", context: "in musica, collegamento fluido tra note — contrario di interruzione strutturale" }
  ],

  relatedWords: [
    "emistichio",
    "verso",
    "ritmo",
    "pausa",
    "scansione",
    "dieresi",
    "enjambement"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/cesura"
  },

  paroliereNote:
    "Nel linguaggio critico contemporaneo, cesura ha guadagnato una vita autonoma " +
    "rispetto alla metrica: si parla di cesura generazionale, di cesura storica, di " +
    "cesura nell'opera di un autore. Il termine funziona bene perché porta con sé " +
    "l'idea di un taglio preciso, non di una sfumatura — e questa nettezza è " +
    "esattamente la qualità che lo rende utile anche fuori dal verso.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Cesura — Il Paroliere",
    description:
      "Pausa interna al verso che lo spezza in due parti; per estensione, qualsiasi " +
      "interruzione netta e strutturale.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};