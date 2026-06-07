// Il Paroliere — Lemma: AGGRAVAMENTO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const aggravamento: LemmaEntry = {
  lemma: "aggravamento",
  slug: "aggravamento",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Peggioramento progressivo di una condizione patologica, di una situazione giuridica " +
    "o di un contesto sociale. " +
    "In diritto penale: circostanza aggravante che incide sulla determinazione della pena, " +
    "aumentandola rispetto alla pena base prevista per il reato (art. 59 e ss. c.p. italiano). " +
    "In medicina: evoluzione negativa del quadro clinico di un paziente, opposta alla " +
    "remissione o al miglioramento. " +
    "In uso esteso: peggioramento di qualsiasi situazione critica (politica, economica, ambientale).",
  shortDefinition: "Peggioramento di una condizione patologica o giuridica; in diritto penale: circostanza che aumenta la pena.",
  register: ["tecnico-giuridico", "tecnico-medico", "formale"],
  domains: ["medicina", "diritto"],
  etymology:
    "Derivato verbale di *aggravare*, dal latino *aggravare* (rendere più pesante, " +
    "peggiorare), composto di *ad-* (verso) e *gravis* (pesante, grave). " +
    "Il sostantivo *aggravamento* si afferma in italiano nel linguaggio giuridico e medico " +
    "a partire dal XVII-XVIII secolo.",
  examples: [
    "Il magistrato ha contestato l'aggravamento della pena per premeditazione " +
    "e crudeltà verso la vittima.",
    "L'aggravamento improvviso delle condizioni del paziente ha reso necessario " +
    "il trasferimento in terapia intensiva.",
    "L'aggravamento della crisi climatica richiede misure strutturali, non solo " +
    "interventi emergenziali.",
  ],
  synonyms: [
    { term: "peggioramento", register: "neutro", context: "uso generale, meno tecnico" },
    { term: "deterioramento", register: "formale", context: "con enfasi sul processo graduale" },
    { term: "escalation", register: "giornalistico", context: "anglismo di uso frequente per escalation di conflitti o crisi" },
  ],
  antonyms: [
    { term: "miglioramento", register: "neutro", context: "evoluzione positiva della condizione" },
    { term: "remissione", register: "tecnico-medico", context: "attenuazione dei sintomi patologici" },
    { term: "attenuazione", register: "formale", context: "riduzione dell'intensità di un fenomeno negativo" },
  ],
  relatedWords: ["recidiva", "remissione", "ricaduta", "epidemia", "diritto"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/aggravamento",
    treccani: "https://www.treccani.it/vocabolario/aggravamento/",
  },
  paroliereNote:
    "In diritto penale occorre distinguere tra aggravamento come sostantivo (il peggioramento " +
    "della situazione) e circostanza aggravante come locuzione tecnica (elemento che " +
    "incrementa la pena). " +
    "In medicina, il termine si usa sia per l'aggravamento acuto (rapido deterioramento) " +
    "sia per l'aggravamento cronico (progressione lenta). " +
    "In senso figurato esteso l'uso è diffuso nel linguaggio giornalistico e politico.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "AGGRAVAMENTO — definizione | Il Paroliere",
    description:
      "Definizione di aggravamento: peggioramento patologico o giuridico. In diritto penale, " +
      "circostanza che aumenta la pena. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
