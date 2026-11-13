// Il Paroliere — Lemma: fondo pensione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fondoPensione: LemmaEntry = {
  lemma: "fondo pensione",
  slug: "fondo-pensione",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  definition: "Forma di previdenza complementare che raccoglie i versamenti del lavoratore, del datore di lavoro e spesso il TFR, li investe e alla fine della vita lavorativa li restituisce come pensione integrativa o, in parte, come capitale. In Italia si distinguono i fondi negoziali, nati dai contratti collettivi, e i fondi aperti, promossi da banche, assicurazioni e società di gestione. Dal 2026 i contributi si deducono fino a 5.300 euro l'anno.",
  shortDefinition: "Forma di previdenza complementare che investe i versamenti del lavoratore per pagargli una pensione in aggiunta a quella pubblica.",
  register: [
    "tecnico-previdenziale",
    "comune",
  ],
  domains: [
    "previdenza",
    "finanza",
    "fisco",
  ],
  etymology: "Fondo viene dal latino fundus «fondo, base, podere» e nel linguaggio economico indica una massa di denaro destinata a uno scopo. Pensione viene dal latino pensio «pagamento», derivato di pendere «pesare» e quindi «pagare»: in origine il denaro veniva pesato.",
  examples: [
    "Al momento dell'assunzione ho deciso di versare il TFR nel fondo pensione di categoria.",
    "Dal 1° luglio 2026 i neoassunti del settore privato che non scelgono entro sessanta giorni aderiscono automaticamente a un fondo pensione.",
    "Il fondo pensione conviene anche per il fisco: i versamenti riducono il reddito imponibile.",
  ],
  synonyms: [
    {
      term: "previdenza complementare",
      register: "tecnico-previdenziale",
      context: "il sistema nel suo insieme, che comprende anche i piani individuali pensionistici",
    },
    {
      term: "pensione integrativa",
      register: "comune",
      context: "la prestazione che il fondo eroga, più che il fondo stesso",
    },
  ],
  antonyms: [],
  relatedWords: [
    "contributi-previdenziali",
    "deduzione-fiscale",
    "reddito-imponibile",
    "irpef",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/fondo_pensione",
  },
  paroliereNote: "Il fondo pensione è il secondo pilastro di un edificio a tre piani: sotto c'è la pensione pubblica, finanziata dai → contributi previdenziali obbligatori, sopra il risparmio individuale. In Italia questo piano intermedio è stato a lungo poco abitato, anche per la diffidenza verso l'idea di affidare il TFR ai mercati. L'adesione automatica dei neoassunti, in vigore da luglio 2026, prova a ribaltare la logica: chi non vuole il fondo deve dirlo.",
  seo: {
    title: "Fondo pensione — significato, come funziona | Il Paroliere",
    description: "Che cos'è un fondo pensione: la previdenza complementare che investe versamenti e TFR. Fondi negoziali e aperti, deducibilità e adesione automatica.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
