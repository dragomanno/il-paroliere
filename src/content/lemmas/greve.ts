// Il Paroliere — Lemma: greve
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const greve: LemmaEntry = {
  lemma: "greve",
  slug: "greve",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Di ciò che pesa sui sensi o sullo spirito con una densità difficile da " +
    "ignorare: un odore greve satura l'aria senza lasciare scampo, un'atmosfera " +
    "greve opprime prima ancora di essere nominata. In ambito letterario può " +
    "indicare anche una qualità stilistica — pesantezza deliberata, assenza di " +
    "leggerezza — che appesantisce il testo o il discorso.",

  shortDefinition:
    "Pesante e opprimente per i sensi o lo spirito; detto di odori, atmosfere o stili che non lasciano respiro.",

  register: ["comune", "letterario"],
  domains: ["percezione", "stile", "atmosfera"],

  etymology:
    "Dal latino gravis ('pesante, grave'), con evoluzione fonetica attraverso " +
    "il toscano medievale. Condivide la radice con 'grave', 'gravità', " +
    "'gravoso'. La forma greve è tipicamente letteraria e poetica.",

  examples: [
    "L'aria della cantina era greve di umidità e di qualcosa di non " +
    "identificabile.",
    "Un silenzio greve aveva preso il posto della conversazione.",
    "Lo stile del romanzo era greve — ogni frase pesava, ogni scena durava " +
    "più del necessario.",
    "Quel profumo dolciastro e greve rendeva difficile stare in sala.",
  ],

  synonyms: [
    {
      term: "pesante",
      register: "comune",
      context: "che pesa — più generico, sia fisico che figurato",
    },
    {
      term: "opprimente",
      register: "comune",
      context: "che schiaccia, che toglie respiro — più emotivo di greve",
    },
    {
      term: "soffocante",
      register: "comune",
      context: "che impedisce di respirare — più fisico, meno stilistico",
    },
    {
      term: "grave",
      register: "comune",
      context: "forma più comune della stessa radice — ma meno sensoriale",
    },
  ],

  antonyms: [
    {
      term: "lieve",
      register: "comune",
      context: "leggero, che non pesa — l'opposto diretto",
    },
    {
      term: "arioso",
      register: "comune",
      context: "pieno di aria e leggerezza — riferito ad ambienti e stili",
    },
    {
      term: "fresco",
      register: "comune",
      context: "che rinfresca, privo di densità opprimente",
    },
  ],

  relatedWords: [
    "gravoso",
    "grave",
    "pesante",
    "opprimente",
    "gravità",
    "pesantezza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/greve/",
    wiktionary: "https://it.wiktionary.org/wiki/greve",
  },

  paroliereNote:
    "Greve è una parola che si sente poco nel parlato quotidiano — vive " +
    "soprattutto in poesia e in prosa letteraria. Eppure quando compare, " +
    "è insostituibile: nessun sinonimo rende la stessa qualità sensoriale e " +
    "atmosferica, quella densità che si attacca all'aria e al testo. Vale la " +
    "pena tenerla in vita, usarla con precisione — non come arcaismo, ma come " +
    "parola che fa il lavoro esatto che serve.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Greve — Il Paroliere",
    description:
      "Definizione originale di 'greve': pesante e opprimente per i sensi o " +
      "lo spirito. Dal latino gravis. Uso letterario e sensoriale. Con esempi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
