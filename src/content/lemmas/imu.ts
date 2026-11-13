// Il Paroliere — Lemma: IMU
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const imu: LemmaEntry = {
  lemma: "IMU",
  slug: "imu",
  partOfSpeech: "sostantivo femminile (sigla)",
  gender: "femminile",
  definition: "Sigla di imposta municipale propria, spesso sciolta in imposta municipale unica: l'imposta che chi possiede un immobile o un terreno paga ogni anno al Comune. Si calcola sulla rendita catastale rivalutata con aliquote decise da ciascun Comune e si versa in due rate, entro il 16 giugno e il 16 dicembre. Non si paga sull'abitazione principale, salvo le case di lusso.",
  shortDefinition: "Imposta annuale che chi possiede immobili o terreni paga al Comune; non si applica alla prima casa, salvo le case di lusso.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "fiscalità locale",
  ],
  etymology: "Sigla nata con il federalismo fiscale municipale del 2011. La legge parla di imposta municipale propria, ma nell'uso si è affermata anche la lettura «unica», perché il nuovo tributo sostituiva insieme l'ICI e l'IRPEF sugli immobili non affittati.",
  examples: [
    "L'acconto dell'IMU scade il 16 giugno, il saldo il 16 dicembre.",
    "Sulla casa al mare pago l'IMU, sulla prima casa no.",
    "Il Comune ha alzato l'aliquota IMU sulle seconde case.",
  ],
  synonyms: [
    {
      term: "imposta municipale propria",
      register: "tecnico-fiscale",
      context: "nome ufficiale",
    },
  ],
  antonyms: [],
  relatedWords: [
    "ici",
    "tari",
    "catasto",
    "rendita-catastale",
    "aliquota",
    "f24",
    "imposta",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/IMU",
  },
  paroliereNote: "L'IMU è arrivata nel 2012 al posto dell'→ ICI, con due anni di anticipo sul previsto grazie al decreto «Salva Italia». Dal 2020 ha assorbito anche la TASI, il tributo comunale per i servizi indivisibili come l'illuminazione pubblica e la manutenzione delle strade, in vigore dal 2014 al 2019 e pagato in parte anche dagli inquilini. Resta esente l'abitazione principale, tranne le case accatastate come signorili, ville e castelli (categorie A/1, A/8 e A/9).",
  seo: {
    title: "IMU — significato, come si calcola, scadenze | Il Paroliere",
    description: "Che cos'è l'IMU: l'imposta municipale che chi possiede immobili paga al Comune, esclusa la prima casa non di lusso. Calcolo, scadenze, storia, TASI.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
