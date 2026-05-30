// Il Paroliere — Lemma: sostanziale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sostanziale: LemmaEntry = {
  lemma: "sostanziale",
  slug: "sostanziale",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Che riguarda la sostanza di qualcosa, ciò che è fondamentale e non accessorio. " +
    "In ambito giuridico si contrappone a formale: un errore sostanziale inficia il " +
    "merito, non solo la procedura. In filosofia rimanda alla distinzione " +
    "aristotelica tra sostanza e accidente, tra ciò che una cosa è nella sua essenza " +
    "e ciò che le capita.",

  shortDefinition:
    "Che attiene all'essenza, non alla forma; fondamentale, non periferico.",

  register: ["comune", "tecnico", "giuridico"],
  domains: ["diritto", "filosofia", "linguaggio"],

  etymology:
    "Dal latino tardo substantialis, derivato di substantia — che è ciò che sta sotto " +
    "(sub-stare), il fondamento di ogni cosa. Il termine entra nel lessico scolastico " +
    "medievale attraverso la filosofia aristotelica latinizzata.",

  examples: [
  ],

  synonyms: [
    { term: "essenziale", register: "comune", context: "più immediato, meno tecnico" },
    { term: "fondamentale", register: "comune", context: "enfatizza il ruolo strutturante" },
    { term: "materiale", register: "giuridico", context: "in contesti legali spesso sinonimo parziale" }
  ],

  antonyms: [
    { term: "formale", register: "tecnico", context: "contrapposto classico nel diritto e nella filosofia" },
    { term: "accessorio", register: "comune", context: "ciò che si aggiunge senza determinare l'essenza" },
    { term: "marginale", register: "comune", context: "di peso ridotto, non determinante" }
  ],

  relatedWords: [
    "tesi",
    "sintesi",
    "antitesi"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/sostanziale"
  },

  paroliereNote:
    "Nella lingua quotidiana, sostanziale ha perso parte del suo peso filosofico e " +
    "viene usato spesso come sinonimo rafforzato di importante. Ma la distinzione tra " +
    "forma e sostanza che contiene — tra il come e il cosa — è una delle divisioni " +
    "concettuali più fertili del pensiero occidentale, e meriterebbe di tornare nel " +
    "lessico comune con tutta la sua precisione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sostanziale — Il Paroliere",
    description:
      "Sostanziale: che riguarda l'essenza, non la forma. Uso giuridico, filosofico, " +
      "comune — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};