// Il Paroliere — Lemma: reddito imponibile
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const redditoImponibile: LemmaEntry = {
  lemma: "reddito imponibile",
  slug: "reddito-imponibile",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  definition: "Parte del reddito su cui si calcola effettivamente l'imposta: per l'IRPEF, il reddito complessivo al netto degli oneri deducibili, come i contributi previdenziali obbligatori o i versamenti a un fondo pensione. Sta in mezzo tra gli altri due: è più basso del reddito lordo perché la legge ne esclude alcune voci; è più alto del reddito netto perché l'imposta non è ancora stata pagata. Su questa cifra lavorano gli scaglioni e le aliquote.",
  shortDefinition: "Parte del reddito su cui si calcola l'imposta: il reddito complessivo meno gli oneri deducibili.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "economia",
  ],
  etymology: "Locuzione formata da reddito, dal latino redditus «ciò che ritorna, rendita», participio di reddere «restituire», e imponibile, da imporre.",
  examples: [
    "Versare al fondo pensione abbassa il reddito imponibile e, con esso, l'imposta dell'anno.",
    "Con un reddito imponibile di 32.000 euro, i primi 28.000 pagano il 23% e i restanti 4.000 il 33%.",
    "Non confondere il reddito imponibile con quello netto: il primo è la base del calcolo, il secondo è il risultato.",
  ],
  synonyms: [
    {
      term: "base imponibile",
      register: "tecnico-fiscale",
      context: "formulazione generale, valida per qualunque tributo",
    },
  ],
  antonyms: [],
  relatedWords: [
    "imponibile",
    "reddito-lordo",
    "reddito-netto",
    "deduzione-fiscale",
    "scaglione",
    "aliquota",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/reddito",
  },
  paroliereNote: "Il reddito imponibile è il vero campo della pianificazione fiscale lecita: tutto ciò che la legge permette di dedurre agisce qui, prima che le aliquote entrino in gioco. Chi applica le aliquote direttamente al lordo, dimenticando le deduzioni, finisce per credere di pagare più di quanto paga davvero.",
  seo: {
    title: "Reddito imponibile — significato e calcolo IRPEF | Il Paroliere",
    description: "Che cos'è il reddito imponibile: la base su cui si calcola l'IRPEF, cioè il reddito complessivo meno gli oneri deducibili. Con esempio sugli scaglioni 2026.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
