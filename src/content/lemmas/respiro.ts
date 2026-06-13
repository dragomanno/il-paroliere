// Il Paroliere — Lemma: respiro
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const respiro: LemmaEntry = {
  lemma: "respiro",
  slug: "respiro",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "letterario"],
  domains: ["fisiologia", "architettura", "letteratura", "musica"],

  definition:
    "L’atto fisiologico dell’inspirazione ed espirazione; in senso traslato, la qualità " +
    "di un’opera, di uno spazio, di un testo che dà l’impressione di non essere " +
    "compresso — che ha pause, variazioni di ritmo, zone di quiete che permettono " +
    "all’attenzione di riprendersi. Un testo senza respiro è un testo che soffoca; " +
    "uno spazio senza respiro è uno spazio claustrofobico.",

  shortDefinition:
    "Atto fisiologico del respirare; in senso estetico, la qualità di ciò che ha pause e spazio sufficiente per non soffocare.",

  etymology:
    "Da respirare, dal latino respirare “riprendere fiato”, composto da re- “di nuovo” " +
    "e spirare “soffiare, spirare”, da spiritus “soffio, fiato”. La stessa radice di " +
    "“spirito” e “ispirazione”.",

  examples: [
    "Una partitura senza indicazioni di respiro è impossibile da cantare: il fraseggio dipende dal punto in cui il cantante può prendere fiato senza spezzare il senso.",
    "Certi romanzi hanno un respiro lungo: i capitoli si espandono, i personaggi hanno tempo di esistere, il lettore non deve correre. Altri sono apnea continua.",
    "Il respiro di un parco dentro una città densa non è un lusso: è un regolatore di temperatura, umidità, qualità dell’aria — e una necessità psicologica documentata.",
    "Il respiro narrativo di Tolstoj — quella capacità di dilatarsi e rallentare prima di accelerare — è una delle qualità più difficili da imitare senza diventare semplicemente lenti.",
  ],

  synonyms: [
    { term: "pausa", register: "comune", note: "L’interruzione momentanea; il respiro include anche il ritmo delle pause, non solo la loro presenza." },
    { term: "ariosità", register: "letterario", note: "La qualità di ciò che ha aria intorno — spazio, leggerezza, non-densità." },
  ],

  antonyms: [
    { term: "soffocamento", register: "comune", note: "L’assenza di respiro — fisico o metaforico — come condizione di compressione totale." },
    { term: "densità", register: "tecnico-comune", note: "L’accumulo senza spazio — il contrario del respiro nell’accezione estetica." },
  ],

  relatedWords: ["spazio", "ritmo", "composizione", "leggerezza", "rarefazione"],

  paroliereNote:
    "Il respiro è forse il concetto più immediato del batch — tutti sanno cosa significa " +
    "quando un’opera 'non respira'. Ma è anche tra i più difficili da costruire " +
    "deliberatamente: non si ottiene aggiungendo pause, ma ripensando la struttura in " +
    "modo che le pause abbiano senso. Un respiro forzato si sente quanto un testo soffocato.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "respiro — significato fisiologico ed estetico del prendere fiato",
    description: "Respiro: dalla fisiologia alla qualità estetica di un testo, uno spazio o una partitura. Quando un’opera 'respira' e perché è importante.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
