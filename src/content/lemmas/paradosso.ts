// Il Paroliere — Lemma: paradosso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const paradosso: LemmaEntry = {
  lemma: "paradosso",
  slug: "paradosso",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Affermazione o situazione che contraddice le aspettative ma non per " +
    "questo si smonta: a un esame più attento rivela una coerenza che " +
    "resiste, o almeno una domanda che vale la pena tenere aperta. In " +
    "logica, il paradosso è una contraddizione formale che il sistema non " +
    "riesce a risolvere dall'interno — come il paradosso di Russell o quello " +
    "del mentitore. Nel linguaggio comune indica piuttosto l'ironia della " +
    "realtà: ciò che doveva funzionare non funziona, e ciò che sembrava " +
    "assurdo si rivela vero.",

  shortDefinition:
    "Situazione o argomento che contraddice le aspettative ma nasconde una sua verità; in logica, contraddizione che il sistema non riesce a risolvere.",

  register: ["comune", "filosofico"],
  domains: ["logica", "retorica"],

  examples: [
    "Il paradosso del mentitore — «questa frase è falsa» — blocca ogni sistema logico che tenti di classificarla.",
    "C'è un paradosso nel voler essere spontanei: appena ci provi, non lo sei più.",
    "Il paradosso della tolleranza dice che una società completamente tollerante deve essere intollerante verso chi vuole distruggerla.",
  ],

  synonyms: [
    {
      term: "aporia",
      register: "filosofico",
      context: "impasse logica senza uscita, termine socratico",
    },
    {
      term: "antinomia",
      register: "filosofico",
      context: "contraddizione tra due principi entrambi validi",
    },
    {
      term: "contraddizione in termini",
      register: "comune",
      context: "formulazione più colloquiale, meno precisa",
    },
  ],

  relatedWords: [
    "aporia",
    "antinomia",
    "contraddizione",
    "logica",
    "sofisma",
    "dilemma",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/paradosso",
  },

  paroliereNote:
    "Il paradosso è uno dei concetti più produttivi del pensiero: non è solo " +
    "un gioco logico, ma un luogo dove il pensiero si inceppa e deve fermarsi " +
    "a chiedersi perché. Zenone, Epimenide, Russell, Gödel — hanno tutti " +
    "usato paradossi per mostrare i limiti di sistemi che si credevano " +
    "completi. Nel linguaggio comune, un paradosso è spesso solo un'ironia " +
    "della situazione — ma anche lì, vale la pena non liquidarlo troppo in fretta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Paradosso — Il Paroliere",
    description:
      "Definizione originale di 'paradosso': contraddizione che nasconde una verità, " +
      "tra logica e uso comune. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
