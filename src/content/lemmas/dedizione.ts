// Il Paroliere — Lemma: dedizione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dedizione: LemmaEntry = {
  lemma: "dedizione",
  slug: "dedizione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Impegno profondo e continuato verso una causa, una persona o un'attività, tale " +
    "da mettere in secondo piano i propri bisogni o interessi immediati. Non implica " +
    "necessariamente sacrificio: la dedizione può essere una forma di pienezza, non " +
    "di rinuncia. In ambito lavorativo designa la qualità di chi porta il proprio " +
    "compito fino in fondo con costanza e concentrazione.",

  shortDefinition:
    "Impegno continuato e profondo verso qualcuno o qualcosa, che antepone la causa " +
    "all'interesse immediato.",

  register: ["comune", "letterario"],
  domains: ["etica", "psicologia", "lavoro"],

  etymology:
    "Dal latino deditio, -onis, resa, consegna — termine militare e giuridico che " +
    "indicava la resa senza condizioni a un nemico o a un'autorità. Il significato " +
    "moderno, positivo e volontario, si afferma in italiano tra Cinque e Seicento " +
    "come evoluzione semantica verso l'idea di dono di sé.",

  synonyms: [
    { term: "impegno", register: "comune", context: "più neutro, meno marcato emotivamente" },
    { term: "devozione", register: "letterario/religioso", context: "con sfumatura affettiva o spirituale più forte" },
    { term: "zelo", register: "comune", context: "accentua l'intensità dell'applicazione, talvolta con tono ironico" },
    { term: "abnegazione", register: "letterario", context: "enfatizza il sacrificio di sé più che il dono attivo" }
  ],

  antonyms: [
    { term: "disinteresse", register: "comune", context: "mancanza di coinvolgimento" },
    { term: "trascuratezza", register: "comune", context: "antonimo in ambito lavorativo" },
    { term: "egoismo", register: "comune", context: "antonimo sul piano etico" }
  ],

  relatedWords: [
    "abnegazione",
    "devozione",
    "impegno",
    "sacrificio",
    "passione",
    "costanza",
    "cura"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dedizione"
  },

  paroliereNote:
    "Dedizione e abnegazione vengono spesso usati come sinonimi, ma il confine è " +
    "netto: la dedizione può essere gioiosa, non implica perdita di sé; l'abnegazione " +
    "porta invece una nota di rinuncia che la rende semanticamente più pesante. Vale " +
    "la pena tenere distinti i due lemmi, perché descrivono modi diversi di stare al " +
    "mondo.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Dedizione — Il Paroliere",
    description:
      "Impegno continuato e profondo verso qualcuno o qualcosa, che antepone la causa " +
      "all'interesse immediato.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};