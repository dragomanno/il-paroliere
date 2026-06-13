// Il Paroliere — Lemma: lealtà
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lealta: LemmaEntry = {
  lemma: "lealtà",
  slug: "lealta",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale"],
  domains: ["etica", "relazioni", "politica", "psicologia"],

  definition:
    "Fedeltà coerente a una persona, un gruppo, un’istituzione o un insieme di valori, " +
    "mantenuta anche quando sarebbe conveniente abbandonarla. La lealtà è relazionale " +
    "per definizione: si è leali verso qualcuno o qualcosa, non in astratto. Si " +
    "distingue dall’obbedienza perché implica una scelta: il leale potrebbe fare " +
    "altrimenti, ma sceglie di non farlo. Può diventare un vizio quando si trasforma " +
    "in fedeltà cieca che sospende il giudizio morale, come nella lealtà criminale o " +
    "nella devozione a un leader che ha torto.",

  shortDefinition:
    "Fedeltà scelta e mantenuta verso una persona, un gruppo o un valore, anche " +
    "quando sarebbe conveniente venirvi meno.",

  etymology:
    "Dal francese antico loial, dal latino legalis «conforme alla legge», da lex, " +
    "legis «legge». Il percorso semantico è interessante: dalla legalità alla fedeltà " +
    "personale, passando per l’idea cavalleresca di fedeltà al signore che trascende " +
    "l’obbligo formale.",

  examples: [
    "La lealtà verso un amico che ha torto è una delle prove più difficili: significa dirglielo in faccia, non coprirlo davanti agli altri.",
    "In politica, la lealtà di partito è spesso invocata per silenziare il dissenso interno: confonde la fedeltà a un’istituzione con la fedeltà a chi la controlla.",
    "Un cane è leale per istinto; un essere umano è leale per scelta. È questa differenza che rende la lealtà umana moralmente significativa.",
    "La lealtà verso un’organizzazione criminale non è una virtù: mostra che la lealtà senza un oggetto degno diventa complicità.",
  ],

  synonyms: [
    { term: "fedeltà", register: "comune-formale", note: "Più ampio: include la fedeltà a principi astratti oltre che a persone o gruppi." },
    { term: "affidabilità", register: "comune", note: "L’aspetto comportamentale della lealtà: si fa ciò che si è promesso di fare." },
  ],

  antonyms: [
    { term: "tradimento", register: "comune-letterario", note: "La rottura consapevole di un legame di lealtà, spesso a vantaggio proprio o di altri." },
    { term: "doppiezza", register: "comune", note: "Il mantenere apparentemente la lealtà mentre si agisce contro chi ci si è impegnati a sostenere." },
  ],

  relatedWords: ["fiducia", "onore", "integrita", "doppiezza", "malafede"],
  sourceLinks: {},

  paroliereNote:
    "La lealtà è la virtù relazionale per eccellenza — e proprio per questo è la più " +
    "difficile da mantenere pulita. Perché richiede di scegliere, ogni volta, tra la " +
    "fedeltà a una persona e la fedeltà a un principio. I due non coincidono sempre. " +
    "Chi è leale a un amico anche quando ha torto, fino a quando si tratta di slealtà " +
    "verso un terzo che ha ragione? Non esiste risposta universale, solo la " +
    "consapevolezza che la lealtà senza riserva — la lealtà incondizionata — è la " +
    "prima cosa che i sistemi autoritari richiedono ai loro seguaci.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "lealtà — fedeltà scelta, non obbedienza: tra virtù e vizio",
    description: "Che cos’è la lealtà: definizione etica, differenza da obbedienza e fedeltà cieca, e quando la lealtà diventa complicità.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
