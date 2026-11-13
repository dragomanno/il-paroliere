// Il Paroliere — Lemma: catasto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const catasto: LemmaEntry = {
  lemma: "catasto",
  slug: "catasto",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition: "Inventario pubblico dei beni immobili di un territorio, che per ogni terreno o fabbricato registra posizione, caratteristiche, intestatari e rendita, a fini soprattutto fiscali. In Italia è tenuto dall'Agenzia delle Entrate e si divide in catasto dei terreni e catasto dei fabbricati. Per estensione, indica anche l'ufficio che lo gestisce e, nella storia, i grandi censimenti fiscali come il catasto fiorentino del 1427.",
  shortDefinition: "Inventario pubblico di terreni e fabbricati, con caratteristiche, intestatari e rendita, tenuto soprattutto a fini fiscali.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto",
    "storia",
  ],
  etymology: "Dal veneziano catastico, attestato nel Trecento, che risale al greco bizantino katástichon «registro», dalla locuzione katà stíchon «riga per riga»: un elenco in cui ogni bene occupa la sua riga.",
  examples: [
    "Prima di comprare casa conviene controllare che la planimetria depositata al catasto corrisponda allo stato reale.",
    "Il catasto fiorentino del 1427 registrava i beni di tutti, dai Medici agli artigiani.",
    "La riforma del catasto viene annunciata da decenni, ma le rendite restano ancorate a valori lontani dal mercato.",
  ],
  synonyms: [
    {
      term: "registro catastale",
      register: "tecnico-fiscale",
      context: "formula descrittiva",
    },
    {
      term: "estimo",
      register: "storico",
      context: "nelle città medievali e moderne, la stima dei beni a fini fiscali",
    },
  ],
  antonyms: [],
  relatedWords: [
    "rendita-catastale",
    "imponibile",
    "capacita-contributiva",
    "imu",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/catasto/",
    wiktionary: "https://it.wiktionary.org/wiki/catasto",
  },
  paroliereNote: "Il catasto fiorentino del 1427 è uno dei documenti più ricchi della storia europea: chiedeva a ogni famiglia di dichiarare beni, debiti e bocche da sfamare, ed è arrivato fino a noi con le portate dei Medici, di Brunelleschi e di Donatello. Ancora oggi, però, il catasto non prova la proprietà: dice al fisco che cosa esiste e quanto rende, mentre chi ne è proprietario lo stabiliscono gli atti e i registri immobiliari.",
  seo: {
    title: "Catasto — significato, etimologia, storia | Il Paroliere",
    description: "Che cos'è il catasto: l'inventario pubblico di terreni e fabbricati tenuto a fini fiscali. Etimologia dal greco bizantino e il catasto fiorentino del 1427.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
