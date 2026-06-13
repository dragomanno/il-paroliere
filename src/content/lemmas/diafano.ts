// Il Paroliere — Lemma: diafano
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const diafano: LemmaEntry = {
  lemma: "diafano",
  slug: "diafano",
  partOfSpeech: "aggettivo",
  gender: "maschile",
  register: ["letterario", "tecnico"],
  domains: ["estetica", "ottica", "letteratura"],

  definition:
    "Che lascia passare la luce senza essere completamente trasparente — come certi " +
    "vetri smerigliati, la pergamena, la porcellana sottile, o la pelle di chi ha un " +
    "incarnato particolarmente chiaro. In senso traslato, è detto di ciò che ha una " +
    "qualità di quasi-trasparenza: si intuisce qualcosa al di là senza vederlo completamente.",

  shortDefinition:
    "Che lascia passare la luce senza essere del tutto trasparente; quasi trasparente, traslucido.",

  etymology:
    "Dal greco diaphanés “trasparente”, da diaphainein “brillare attraverso”, composto " +
    "da diá “attraverso” e phainein “mostrare, brillare”. Stessa radice di “fenomeno” " +
    "e “fantasia”.",

  examples: [
    "Le ali di certe libellule sono diafane: non trasparenti come il vetro, ma attraversate da una luce diffusa che le rende quasi incorporee.",
    "Il suo incarnato diafano faceva sì che ogni emozione si leggesse immediatamente sul viso — la pelle come schermo sottile su cui proiettare stati d’animo.",
    "La porcellana di Meissen raggiunge una diafanità tale da poter essere retroilluminata: la luce attraversa il materiale come non farebbe con nessun altro solido.",
    "In certi mattini d’inverno il cielo è diafano: non azzurro, non grigio, ma una trasparenza bianca che non ha nome preciso.",
  ],

  synonyms: [
    { term: "traslucido", register: "tecnico", note: "Sinonimo tecnico diretto: lascia passare la luce diffusa, non le immagini nitide." },
    { term: "trasparente", register: "comune", note: "Più forte: lascia vedere chiaramente attraverso; diafano ha una qualità più velata." },
  ],

  antonyms: [
    { term: "opaco", register: "tecnico-comune", note: "Che non lascia passare la luce." },
  ],

  relatedWords: ["impalpabilità", "luminosità", "ombra", "rarefazione"],

  paroliereNote:
    "Diafano è una di quelle parole che cambiano ciò che descrivono: dire che qualcosa è " +
    "diafano aggiunge una qualità luminosa che “traslucido” — il sinonimo tecnico — non ha. " +
    "C’è una radice greca che parla di qualcosa che si mostra attraverso, e questo " +
    "“attraverso” è tutto: non è il vetro che si vede, è la luce che lo attraversa.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "diafano — significato, etimologia e uso letterario del quasi-trasparente",
    description: "Diafano: dall’ottica alla letteratura. Tutto su questo aggettivo che descrive la qualità della luce che passa senza rivelare completamente.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
