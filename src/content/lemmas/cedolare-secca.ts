// Il Paroliere — Lemma: cedolare secca
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cedolareSecca: LemmaEntry = {
  lemma: "cedolare secca",
  slug: "cedolare-secca",
  partOfSpeech: "locuzione sostantivale",
  gender: "femminile",
  definition: "Regime facoltativo con cui chi affitta una casa paga sul canone un'imposta ad aliquota fissa, invece dell'IRPEF e delle addizionali. L'aliquota è del 21%, ridotta al 10% sui contratti a canone concordato nei Comuni con carenza di abitazioni; chi la sceglie non paga imposta di registro né di bollo sul contratto, ma rinuncia agli aumenti del canone legati all'inflazione. Possono sceglierla solo le persone fisiche che non affittano come impresa.",
  shortDefinition: "Imposta ad aliquota fissa sugli affitti di case, al 21% o al 10%, che il proprietario può scegliere al posto dell'IRPEF.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "immobiliare",
  ],
  etymology: "Cedolare viene da cedola, il tagliando dei titoli che dà diritto a interessi o dividendi: l'imposta cedolare nasce come prelievo su quei rendimenti. Secca indica che il prelievo è fisso e definitivo, senza altri conguagli.",
  examples: [
    "Con la cedolare secca pago il 21% sull'affitto e non devo sommarlo agli altri redditi.",
    "Il contratto a canone concordato ci permette di avere la cedolare al 10%.",
    "Chi sceglie la cedolare secca rinuncia all'adeguamento ISTAT del canone.",
  ],
  synonyms: [
    {
      term: "cedolare",
      register: "comune",
      context: "forma breve, quando il contesto è chiaro",
    },
  ],
  antonyms: [],
  relatedWords: [
    "irpef",
    "addizionale",
    "imposta-di-registro",
    "imposta-di-bollo",
    "flat-tax",
    "aliquota",
    "regime-fiscale",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/cedolare/",
    wiktionary: "https://it.wiktionary.org/wiki/cedolare",
  },
  paroliereNote: "La cedolare secca è arrivata nel 2011 con il federalismo fiscale municipale. È, di fatto, una piccola → flat tax sugli affitti: chi ha redditi alti ci guadagna di più, perché sfugge agli scaglioni più pesanti dell'IRPEF. Per gli affitti brevi valgono regole proprie: dal 2026 l'aliquota è del 26%, ridotta al 21% per un solo appartamento scelto dal proprietario. Oltre i due appartamenti l'attività si presume d'impresa.",
  seo: {
    title: "Cedolare secca — significato, aliquote, come funziona | Il Paroliere",
    description: "Che cos'è la cedolare secca: l'imposta ad aliquota fissa sugli affitti, al 21% o al 10%, che sostituisce IRPEF e addizionali. Affitti brevi ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
