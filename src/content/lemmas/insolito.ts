// Il Paroliere — Lemma: insolito
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const insolito: LemmaEntry = {
  lemma: "insolito",
  slug: "insolito",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Che si discosta dall'ordinario senza per questo risultare anomalo: qualcosa " +
    "di insolito emerge dal flusso della routine e lo interrompe, ma non lo " +
    "spezza. Non porta con sé un giudizio — può essere sorprendente, persino " +
    "gradevole — e si distingue da «strano» per l'assenza di sfumatura " +
    "valutativa, da «raro» perché riguarda il contesto, non la frequenza.",

  shortDefinition:
    "Che esula dall'abitudine senza essere anomalo; sorprendente nel contesto, non necessariamente negativo.",

  register: ["comune"],
  domains: ["percezione", "quotidiano"],

  etymology:
    "Dal latino insolitus, composto di in- (negativo) e solitus ('abituato, " +
    "consueto'), participio passato di solere ('essere solito'). Letteralmente: " +
    "ciò a cui non si è abituati.",

  examples: [
    "Quella mattina era successa una cosa insolita: nessuno aveva detto una " +
    "parola per i primi dieci minuti.",
    "La sua risposta fu insolita — non sbagliata, solo diversa da tutto ciò " +
    "che ci si aspettava.",
    "Trovarono il posto in un modo insolito: per caso, fuori strada, senza " +
    "cercare.",
    "C'era qualcosa di insolito nell'aria — non di minaccioso, solo di " +
    "diverso.",
  ],

  synonyms: [
    {
      term: "inconsueto",
      register: "comune",
      context: "non abituale — quasi sinonimo esatto, leggermente più formale",
    },
    {
      term: "inusuale",
      register: "comune",
      context: "al di fuori dell'uso comune — con più enfasi sulla norma statistica",
    },
    {
      term: "atipico",
      register: "tecnico",
      context: "che non corrisponde al tipo standard — più valutativo di insolito",
    },
  ],

  antonyms: [
    {
      term: "ordinario",
      register: "comune",
      context: "nella norma, senza sorprese — l'opposto diretto",
    },
    {
      term: "consueto",
      register: "comune",
      context: "abituale, atteso — ciò a cui si è abituati",
    },
    {
      term: "usuale",
      register: "comune",
      context: "che rientra nell'uso normale",
    },
  ],

  relatedWords: [
    "inusuale",
    "inconsueto",
    "anomalo",
    "strano",
    "raro",
    "fuori dal comune",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/insolito/",
    wiktionary: "https://it.wiktionary.org/wiki/insolito",
  },

  paroliereNote:
    "Insolito è una parola gentile: non giudica, non allarma, si limita a " +
    "segnalare che qualcosa si discosta dall'atteso. È meno drammatico di " +
    "'strano', meno raro di 'eccezionale', meno tecnico di 'atipico'. Proprio " +
    "per questa neutralità è spesso la scelta giusta quando si vuole descrivere " +
    "una deviazione dalla norma senza colorarla con un giudizio.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Insolito — Il Paroliere",
    description:
      "Definizione originale di 'insolito': fuori dall'abitudine ma non anomalo. " +
      "Differenze con strano e raro. Con esempi, sinonimi ed etimologia latina.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
