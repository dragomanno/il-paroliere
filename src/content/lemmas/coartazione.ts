// Il Paroliere — Lemma: coartazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coartazione: LemmaEntry = {
  lemma: "coartazione",
  slug: "coartazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Il restringimento o la compressione di qualcosa — sia in senso fisico sia in " +
    "senso morale — che impedisce il libero dispiegarsi. In medicina cardiologica, " +
    "indica il restringimento patologico dell'aorta (coartazione aortica). In senso " +
    "giuridico e filosofico, è la condizione di chi agisce sotto una pressione che " +
    "limita o annulla la libertà di volontà, prossima a → coercizione ma con una " +
    "sfumatura più interiore e psicologica.",

  shortDefinition:
    "Costrizione che limita la libertà fisica o morale; in medicina, restringimento " +
    "patologico di un vaso (tipicamente l'aorta).",

  register: ["formale", "letterario", "giuridico"],
  domains: ["diritto", "psicologia", "filosofia", "medicina"],

  etymology:
    "Dal latino coartatio, -onis, derivato di coartare («stringere, comprimere»), " +
    "composto di co- + artare («restringere», da artus, «stretto»). Il termine tecnico " +
    "medico è un prestito neoclassico del XIX secolo.",

  examples: [
    "Il filosofo sosteneva che ogni forma di governo implica una qualche coartazione della libertà individuale.",
    "Il bambino era nato con una coartazione aortica che richiedeva un intervento chirurgico entro il primo anno di vita.",
    "Agire per coartazione significa non agire liberamente: il gesto perde la sua valenza morale.",
  ],

  synonyms: [
    {
      term: "coercizione",
      register: "giuridico",
      context: "quasi-sinonimo, più esteriore e meccanico",
    },
    {
      term: "costrizione",
      register: "comune",
      context: "atto del costringere",
    },
    {
      term: "compressione",
      register: "comune",
      context: "in senso fisico",
    },
    {
      term: "restringimento",
      register: "comune",
      context: "in senso fisico e medico",
    },
  ],

  antonyms: [
    {
      term: "libertà",
      register: "comune",
      context: "assenza di costrizione",
    },
    {
      term: "autodeterminazione",
      register: "formale",
      context: "capacità di scegliere senza condizionamenti",
    },
    {
      term: "espansione",
      register: "comune",
      context: "in senso fisico, opposto di restringimento",
    },
  ],

  relatedWords: [
    "coercizione",
    "resistenza",
    "libertà",
    "volontà",
    "consenso",
    "aorta",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/coartazione/",
    wiktionary: "https://it.wiktionary.org/wiki/coartazione",
  },

  paroliereNote:
    "Coartazione è una parola che vive su due piani distanti e quasi mai sovrapposti: " +
    "il piano filosofico-giuridico e il piano medico-cardiologico. Chi la incontra in " +
    "un testo di cardiologia si aspetta l'aorta; chi la incontra in un testo di " +
    "filosofia del diritto si aspetta il problema del libero arbitrio sotto pressione. " +
    "Questa doppia cittadinanza lessicale è rara e degna di nota. Rispetto a coercizione, " +
    "coartazione ha un profilo più arcaico e letterario nell'uso filosofico: suona come " +
    "un latinismo che il filosofo sceglie consapevolmente per distinguersi dal burocratese.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Coartazione — definizione giuridica e medica | Il Paroliere",
    description:
      "Coartazione: dal diritto alla cardiologia. Cosa significa, come si usa, " +
      "differenza con coercizione. Definizione originale con esempi e nota.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
