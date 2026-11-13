// Il Paroliere — Lemma: accettazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const accettazione: LemmaEntry = {
  lemma: "accettazione",
  slug: "accettazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico", "formale"],
  domains: ["psicologia", "relazioni", "vita quotidiana"],

  definition:
    "Disponibilità a ricevere, riconoscere o assumere qualcosa: una proposta, una condizione, una persona, un fatto. In senso psicologico indica il fare spazio a una realtà che non si può o non si vuole più negare, senza che questo comporti approvazione, passività o rinuncia a intervenire dove si può.",

  shortDefinition:
    "Riconoscimento consapevole di una realtà, di una proposta o di una persona, senza che implichi resa.",

  etymology:
    "Dal latino tardo acceptatio, derivato di acceptare, forma frequentativa di accipere, «ricevere». L'origine richiama il gesto del prendere con sé, poi esteso al consenso e al riconoscimento di un fatto.",

  examples: [
    "L'accettazione dell'incarico è arrivata con una mail breve, ma preparata per giorni.",
    "Per lei l'accettazione della diagnosi non ha significato arrendersi: ha reso più chiari i passi da fare.",
    "In quella casa l'accettazione delle differenze non era uno slogan, ma il modo normale di stare a tavola insieme.",
  ],

  synonyms: [
    {
      term: "consenso",
      register: "formale",
      note: "Riguarda soprattutto l'assenso espresso a una scelta, a una proposta o a un atto.",
    },
    {
      term: "riconoscimento",
      register: "comune",
      note: "Sottolinea il vedere e ammettere il valore o la realtà di qualcuno o qualcosa.",
    },
    {
      term: "assenso",
      register: "formale",
      note: "È più circoscritto all'accordo manifestato e meno adatto al lavoro interiore dell'accettazione.",
    },
  ],

  antonyms: [
    {
      term: "rifiuto",
      register: "comune",
      note: "Scelta di non ricevere, non ammettere o non acconsentire.",
    },
    {
      term: "negazione",
      register: "psicologico",
      note: "Mancato riconoscimento di un fatto doloroso o scomodo, spesso come difesa temporanea.",
    },
  ],

  relatedWords: [
    "frustrazione",
    "rassegnazione",
    "desiderio",
    "aspirazione",
    "speranza",
    "attesa",
    "relazione",
    "legame",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/accettazione",
  },

  paroliereNote:
    "Dopo → frustrazione e talvolta dopo → rassegnazione, l'→ accettazione può segnare un passaggio diverso: non il cedimento, ma una presa d'atto da cui ripartire. Nelle → relazioni, accettare una persona non significa sottrarla al confronto; significa non far dipendere la sua dignità dalla sua conformità alle nostre attese.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Accettazione — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Accettazione: riconoscere una realtà, una proposta o una persona senza confondere lucidità e resa. Definizione originale, sinonimi, esempi e contesti d'uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
