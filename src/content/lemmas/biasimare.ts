// Il Paroliere — Lemma: biasimare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const biasimare: LemmaEntry = {
  lemma: "biasimare",
  slug: "biasimare",
  partOfSpeech: "verbo",

  definition:
    "Esprimere disapprovazione verso qualcuno o qualcosa, formulando un giudizio " +
    "negativo esplicito su un'azione, un comportamento o una scelta. È un'operazione " +
    "verbale e morale al tempo stesso: chi biasima si colloca in una posizione di " +
    "giudizio e la esplicita, a differenza di chi si limita a disapprovare in " +
    "silenzio. Il tono è più formale e pesato di criticare o rimproverare.",

  shortDefinition:
    "Esprimere disapprovazione con giudizio esplicito — più formale di criticare, più " +
    "pesante di rimproverare.",

  register: ["comune", "letterario"],
  domains: ["etica", "comportamento"],

  etymology:
    "Dal latino medievale blasphemare, attraverso il provenzale blasmar e l'italiano " +
    "antico blasmare, poi biasimare. La stessa radice di blasfemo, dal greco " +
    "blásphēmos (che parla male): il significato originario era più forte, vicino " +
    "all'oltraggio; si è attenuato nel corso dei secoli.",

  synonyms: [
    { term: "criticare", register: "comune", context: "più neutro, non implica necessariamente una condanna morale" },
    { term: "rimproverare", register: "comune", context: "con sfumatura educativa o affettiva, spesso da superiore a inferiore" },
    { term: "censurare", register: "comune/tecnico", context: "giudizio formale, spesso istituzionale" },
    { term: "condannare", register: "comune/letterario", context: "il più forte del gruppo: emette una sentenza, non solo un giudizio" }
  ],

  antonyms: [
    { term: "lodare", register: "comune", context: "antonimo diretto" },
    { term: "elogiare", register: "comune/letterario", context: "approvazione esplicita, con tono più elevato" },
    { term: "approvare", register: "comune", context: "antonimo neutro, senza necessità di esplicitare" }
  ],

  relatedWords: [
    "biasimo",
    "biasimevole",
    "critica",
    "rimprovero",
    "censura",
    "disapprovazione",
    "condanna"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/biasimare"
  },

  paroliereNote:
    "L'etimologia di biasimare porta sorprendentemente a blasfemo — stessa radice " +
    "greca, stesso atto di parlar male di qualcuno. Nel Medioevo il confine tra " +
    "bestemmia e biasimo era assai meno marcato di quanto siamo abituati a pensare. " +
    "Oggi biasimare è un verbo di disapprovazione moderata, quasi formale; ma " +
    "conserva sotto la superficie una severità antica.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Biasimare — Il Paroliere",
    description:
      "Esprimere disapprovazione con giudizio esplicito — più formale di criticare, più " +
      "pesante di rimproverare.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};