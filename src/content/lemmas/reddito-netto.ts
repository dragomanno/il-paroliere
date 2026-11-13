// Il Paroliere — Lemma: reddito netto
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const redditoNetto: LemmaEntry = {
  lemma: "reddito netto",
  slug: "reddito-netto",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  definition: "Ciò che resta di un reddito dopo aver sottratto le imposte e i contributi a proprio carico: per un lavoratore dipendente, la somma che arriva effettivamente in busta paga. Rispetto al reddito lordo è il risultato finale del calcolo; rispetto al reddito imponibile è ciò che sopravvive anche all'imposta. Nel linguaggio delle imprese indica invece l'utile, quanto resta dei ricavi dopo costi e imposte.",
  shortDefinition: "Ciò che resta di un reddito dopo imposte e contributi: quanto si incassa davvero.",
  register: [
    "comune",
    "tecnico-fiscale",
  ],
  domains: [
    "fisco",
    "economia",
    "lavoro",
  ],
  etymology: "Netto viene dal latino nitidus «lucente, pulito»: un importo netto è un importo ripulito da tare, spese e trattenute. È la stessa immagine che sopravvive in «un taglio netto» o «una vittoria netta»: senza residui, senza sbavature.",
  examples: [
    "Con l'aumento, il netto mensile è cresciuto di una cinquantina di euro, molto meno di quanto sembrava dal lordo.",
    "Quando ti propongono uno stipendio, chiedi sempre se la cifra è lorda o netta.",
    "Il reddito netto dell'azienda è sceso, nonostante l'aumento del fatturato, per colpa dei costi energetici.",
  ],
  synonyms: [
    {
      term: "netto",
      register: "colloquiale",
      context: "sostantivato: «quanto prendi di netto?»",
    },
    {
      term: "utile netto",
      register: "tecnico",
      context: "nel bilancio d'impresa",
    },
  ],
  antonyms: [
    {
      term: "reddito lordo",
      register: "comune",
      context: "l'importo prima di imposte e contributi",
    },
  ],
  relatedWords: [
    "reddito-lordo",
    "reddito-imponibile",
    "detrazione-fiscale",
    "irpef",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/netto",
  },
  paroliereNote: "Il netto è l'unica cifra che conta quando si fa la spesa, ma è anche la meno stabile delle tre: dipende dalle aliquote, dalle detrazioni, dalle addizionali della regione e del comune in cui si vive. Due persone con lo stesso lordo possono avere netti diversi. Non è un errore: è il sistema che tiene conto di situazioni diverse, come i familiari a carico o le spese sostenute durante l'anno.",
  seo: {
    title: "Reddito netto — significato, differenza dal lordo | Il Paroliere",
    description: "Che cos'è il reddito netto: ciò che resta dopo imposte e contributi. Differenza da reddito lordo e imponibile, etimologia da nitidus ed esempi.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
