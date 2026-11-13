// Il Paroliere — Lemma: imponibile
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const imponibile: LemmaEntry = {
  lemma: "imponibile",
  slug: "imponibile",
  partOfSpeech: "aggettivo e sostantivo maschile",
  definition: "Come aggettivo, qualifica ciò che può essere sottoposto a un'imposta: un reddito imponibile, un'operazione imponibile. Come sostantivo, l'imponibile — o base imponibile — è la grandezza su cui il tributo si calcola davvero, ottenuta togliendo dal valore di partenza le voci che la legge permette di escludere. È il numero su cui lavorano le aliquote: l'imposta non si calcola su quanto si incassa, ma su quanto resta imponibile.",
  shortDefinition: "Che può essere tassato; come sostantivo, la base su cui si calcola un'imposta.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "economia",
  ],
  etymology: "Da imporre, dal latino imponere «porre sopra», con il suffisso -ibile: ciò su cui un'imposta può essere posta. Appartiene alla stessa famiglia di imposta e imposizione.",
  examples: [
    "Il rimborso delle spese di trasferta documentate non entra nell'imponibile, mentre gli straordinari sì.",
    "Su un imponibile di 1.000 euro, con l'IVA ordinaria al 22%, l'imposta è di 220 euro.",
    "I contributi versati al fondo pensione riducono l'imponibile, entro un tetto annuo fissato dalla legge.",
  ],
  synonyms: [
    {
      term: "base imponibile",
      register: "tecnico-fiscale",
      context: "forma estesa del sostantivo, preferita nei testi normativi",
    },
    {
      term: "tassabile",
      register: "comune",
      context: "solo come aggettivo, più colloquiale",
    },
  ],
  antonyms: [
    {
      term: "esente",
      register: "tecnico-fiscale",
      context: "sottratto all'imposta per espressa previsione di legge",
    },
    {
      term: "non imponibile",
      register: "tecnico-fiscale",
      context: "in ambito IVA, operazione che resta nel campo dell'imposta senza pagarla, come le esportazioni",
    },
  ],
  relatedWords: [
    "reddito-imponibile",
    "aliquota",
    "deduzione-fiscale",
    "detrazione-fiscale",
    "irpef",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/imponibile/",
    wiktionary: "https://it.wiktionary.org/wiki/imponibile",
  },
  paroliereNote: "Sull'imponibile si gioca quasi tutta la differenza tra deduzione e detrazione. La → deduzione fiscale lavora sull'imponibile, prima che le aliquote entrino in scena; la → detrazione fiscale arriva dopo e si sottrae direttamente dall'imposta. Per questo una deduzione vale di più per chi ha un'aliquota marginale alta, mentre una detrazione vale lo stesso importo per tutti, finché c'è imposta da cui sottrarla.",
  seo: {
    title: "Imponibile — significato, base imponibile, esempi | Il Paroliere",
    description: "Che cosa significa imponibile: ciò che può essere tassato e la base su cui si calcola un'imposta. Differenza tra deduzione e detrazione spiegata in breve.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
