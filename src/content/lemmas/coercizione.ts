// Il Paroliere — Lemma: coercizione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coercizione: LemmaEntry = {
  lemma: "coercizione",
  slug: "coercizione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Il costringere qualcuno a fare o a non fare qualcosa mediante forza, minaccia, " +
    "pressione fisica o psicologica, privando o limitando la libertà di scelta. In " +
    "diritto, indica qualsiasi forma di pressione illecita che altera la volontà di " +
    "un soggetto fino a viziarne il consenso; in filosofia politica, è uno dei concetti " +
    "chiave per distinguere il potere legittimo dalla violenza.",

  shortDefinition:
    "Costrizione esercitata con forza o minaccia per piegare la volontà altrui; il contrario del consenso libero.",

  register: ["formale", "giuridico", "filosofico"],
  domains: ["diritto", "psicologia", "filosofia", "sociologia"],

  etymology:
    "Dal latino coercitio, -onis, derivato di coercere («tenere insieme, frenare, " +
    "reprimere»), composto di co- (insieme) + arcere («tenere lontano, chiudere»). " +
    "Termine tecnico del diritto romano, già presente nei testi classici.",

  examples: [
    "«Il contratto fu annullato perché stipulato sotto coercizione: la parte debole non aveva altra scelta.»",
    "«Firmare una confessione sotto coercizione non ha valore probatorio in un ordinamento democratico.»",
    "«La coercizione statale è legittima solo entro i limiti previsti dalla legge e in proporzione al fine perseguito.»",
  ],

  synonyms: [
    {
      term: "coartazione",
      register: ["formale"],
      context: "quasi-sinonimo, più letterario e con sfumatura psicologica",
    },
    {
      term: "costrizione",
      register: ["comune"],
      context: "atto del costringere",
    },
    {
      term: "imposizione",
      register: ["comune"],
      context: "obbligo imposto dall'esterno",
    },
    {
      term: "pressione",
      register: ["comune"],
      context: "spinta che vincola la volontà",
    },
    {
      term: "violenza psicologica",
      register: ["comune"],
      context: "coercizione esercitata per via psichica",
    },
  ],

  antonyms: [
    {
      term: "consenso",
      register: ["giuridico"],
      context: "adesione libera e volontaria",
    },
    {
      term: "libera scelta",
      register: ["comune"],
      context: "decisione non condizionata",
    },
    {
      term: "autonomia",
      register: ["formale"],
      context: "capacità di autodeterminarsi",
    },
    {
      term: "spontaneità",
      register: ["comune"],
      context: "agire senza costrizione esterna",
    },
  ],

  relatedWords: [
    "coartazione",
    "resistenza",
    "autorità",
    "potere",
    "libertà",
    "diritto",
    "violenza",
    "tortura",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/coercizione/",
    wiktionary: "https://it.wiktionary.org/wiki/coercizione",
  },

  paroliereNote:
    "Coercizione e → coartazione sono spesso usate come sinonimi intercambiabili, " +
    "ma è utile tenere la distinzione: coercizione tende a indicare l'atto o il " +
    "meccanismo della pressione, il «costringere da fuori»; coartazione ha una " +
    "sfumatura più psicologica e interiore, il «sentirsi costretti», la libertà " +
    "repressa dall'interno. In linguaggio giuridico, entrambe indicano vizi del " +
    "consenso, ma coercizione è il termine tecnico più diffuso nei codici e nelle sentenze.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Coercizione — definizione giuridica e filosofica | Il Paroliere",
    description:
      "Coercizione: cosa significa, come si usa nel diritto e nella filosofia, " +
      "differenza con coartazione. Definizione originale con esempi e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
