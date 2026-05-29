// Il Paroliere — Lemma: abnegazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const abnegazione: LemmaEntry = {
  lemma: "abnegazione",
  slug: "abnegazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Rinuncia volontaria a sé stessi, ai propri desideri o ai propri interessi in " +
    "favore di un bene considerato superiore — una causa, un'altra persona, un " +
    "ideale. In tradizione religiosa indica la mortificazione dell'io come pratica " +
    "spirituale; in senso laico contemporaneo descrive chi lavora o si impegna senza " +
    "cercare riconoscimento o vantaggio personale.",

  shortDefinition:
    "Rinuncia volontaria a sé stessi in favore di una causa o di un altro — tra virtù " +
    "etica e pratica spirituale.",

  register: ["comune", "letterario"],
  domains: ["etica", "religione", "psicologia"],

  etymology:
    "Dal latino abnegatio, -onis, rifiuto, negazione — composto di ab- (da, via da) e " +
    "negare (dire no). Nella letteratura cristiana medievale il termine designava " +
    "specificamente la rinuncia al peccato e alla volontà propria.",

  synonyms: [
    { term: "sacrificio", register: "comune", context: "più concreto, implica una perdita specifica e visibile" },
    { term: "dedizione", register: "comune/letterario", context: "più attivo e meno connotato dalla rinuncia" },
    { term: "altruismo", register: "comune", context: "enfatizza l'orientamento verso l'altro più che la rinuncia a sé" },
    { term: "mortificazione", register: "letterario/religioso", context: "termine più marcato, specificamente ascetico" }
  ],

  antonyms: [
    { term: "egoismo", register: "comune", context: "antonimo diretto sul piano etico" },
    { term: "autoaffermazione", register: "comune/psicologico", context: "priorità del sé e dei propri bisogni" },
    { term: "opportunismo", register: "comune", context: "ricerca del vantaggio personale come motore principale" }
  ],

  relatedWords: [
    "dedizione",
    "sacrificio",
    "altruismo",
    "mortificazione",
    "ascesi",
    "rinuncia",
    "devozione"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/abnegazione"
  },

  paroliereNote:
    "Abnegazione è uno di quei lemmi che la psicologia contemporanea ha cominciato a " +
    "guardare con occhio più critico: laddove tradizione religiosa ed etica classica " +
    "la consideravano una virtù pura, la psicologia umanistica la mette sotto esame — " +
    "l'abnegazione può essere anche un sintomo, non solo una scelta. Usarlo senza " +
    "sfumature, oggi, è quasi una dichiarazione di posizione.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Abnegazione — Il Paroliere",
    description:
      "Rinuncia volontaria a sé stessi in favore di una causa o di un altro — tra virtù " +
      "etica e pratica spirituale.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};