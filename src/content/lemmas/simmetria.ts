// Il Paroliere — Lemma: simmetria
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const simmetria: LemmaEntry = {
  lemma: "simmetria",
  slug: "simmetria",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["matematica", "fisica", "biologia", "estetica", "architettura"],

  definition:
    "Corrispondenza esatta di forma, dimensione e posizione delle parti di un insieme " +
    "rispetto a un asse, a un centro o a un piano. In biologia, la simmetria bilaterale " +
    "è la norma dei vertebrati; la simmetria radiale è quella dei crinoidi, delle stelle " +
    "marine, dei fiori. In fisica, le simmetrie fondamentali governano le leggi di " +
    "conservazione (Teorema di Noether). In estetica, la simmetria perfetta è spesso " +
    "percepita come bella ma anche come morta: priva di tensione.",

  shortDefinition:
    "Corrispondenza esatta tra le parti di un insieme rispetto a un asse o centro; in estetica, equilibrio che può sfiorare la staticità.",

  etymology:
    "Dal greco symmetria “giusta misura, proporzione”, da syn “insieme” e metron “misura”. " +
    "Letteralmente: la misura condivisa, la stessa misura su entrambi i lati.",

  examples: [
    "Il volto umano non è perfettamente simmetrico: le piccole asimmetrie sono quelle che lo rendono caratteristico e riconoscibile. Un volto perfettamente simmetrico appare inquietante.",
    "La simmetria di un cristallo non è decorazione: è la manifestazione visibile dell’ordine molecolare interno, la struttura che determina tutte le proprietà fisiche del materiale.",
    "In architettura classica, la simmetria è principio compositivo fondamentale: il Pantheon, il Partenone, Versailles — l’asse centrale come dichiarazione di ordine e autorità.",
    "La simmetria nelle leggi fisiche è più profonda di quella visiva: se le leggi della natura sono simmetriche rispetto a una trasformazione, esiste una quantità conservata — è il contenuto del Teorema di Noether.",
  ],

  synonyms: [
    { term: "equilibrio", register: "comune", note: "Più generico: lo stato di bilanciamento senza la precisione geometrica." },
    { term: "regolarità", register: "comune-tecnico", note: "La qualità di ciò che segue un pattern ordinato e ripetibile." },
  ],

  antonyms: [
    { term: "asimmetria", register: "tecnico-comune", note: "L’assenza di corrispondenza esatta tra le parti — non necessariamente negativa." },
    { term: "irregolarità", register: "comune", note: "La deviazione dal pattern atteso, senza la precisione matematica di asimmetria." },
  ],

  relatedWords: ["asimmetria", "proporzione", "armonia", "composizione"],

  paroliereNote:
    "La simmetria perfetta è inquietante perché è una qualità del morto, non del vivo. " +
    "I cristalli sono simmetrici; gli organismi sono approssimativamente simmetrici. La " +
    "vita introduce piccole deviazioni — e quelle deviazioni sono la firma dell’ " +
    "individualità. Un volto perfettamente simmetrico, generato da un computer, è " +
    "sempre leggermente sinistro: bello in modo sbagliato.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "simmetria — significato in matematica, biologia, fisica ed estetica",
    description: "Simmetria: dalla corrispondenza geometrica alle leggi di conservazione in fisica, dall’architettura classica alla biologia dei vertebrati.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
