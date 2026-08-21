// Il Paroliere — Lemma: viscoso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const viscoso: LemmaEntry = {
  lemma: "viscoso",
  slug: "viscoso",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Che scorre con lentezza densa, opponendo resistenza al movimento — di un " +
    "liquido, una pasta, una sostanza che si attacca più che scivolare. In senso " +
    "figurato descrive situazioni, rapporti o atmosfere da cui è difficile uscire: " +
    "un intreccio che invischia, che trattiene invece di lasciare andare.",

  shortDefinition:
    "Denso e resistente allo scorrimento; in senso figurato, una situazione difficile da cui è arduo liberarsi.",

  register: ["comune", "tecnico"],
  domains: ["fisica", "chimica", "relazioni", "quotidiano"],

  etymology:
    "Dal latino viscosus, derivato di viscum, «vischio» — la sostanza collosa " +
    "usata per intrappolare gli uccelli. La stessa radice di invischiare.",

  examples: [
    "Il miele freddo diventa viscoso e fatica a scendere dal cucchiaio.",
    "Era una trattativa viscosa: ogni volta che credevano di aver chiuso, qualcosa li tratteneva ancora dentro.",
    "La melassa, riscaldata, perde la sua viscosità e scorre quasi come acqua.",
  ],

  synonyms: [
    {
      term: "denso",
      register: "comune",
      context: "più generico, riferito alla consistenza senza implicare resistenza al movimento",
    },
    {
      term: "colloso",
      register: "comune",
      context: "enfatizza l'attaccarsi, meno la lentezza del flusso",
    },
    {
      term: "invischiante",
      register: "letterario",
      context: "quasi solo in senso figurato, per situazioni da cui è difficile uscire",
    },
  ],

  antonyms: [
    {
      term: "fluido",
      register: "comune",
      context: "che scorre liberamente, senza resistenza",
    },
    {
      term: "scorrevole",
      register: "comune",
      context: "sia fisico sia figurato: un rapporto scorrevole, senza attriti",
    },
  ],

  relatedWords: ["viscosità", "melassa", "vischio", "invischiare", "denso"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/viscoso",
  },

  paroliereNote:
    "Viscoso porta nel corpo della parola la memoria del vischio, la trappola dei " +
    "cacciatori di uccelli: non stupisce che il suo senso figurato sia sempre una " +
    "forma di intrappolamento morbido, mai violento ma innegabile. Vicino a melassa " +
    "per l'immagine fisica, la nota resta distinta perché melassa è la sostanza, " +
    "viscoso la qualità che la definisce e che si estende ad altro.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Viscoso — Il Paroliere",
    description:
      "Definizione originale di 'viscoso': denso e resistente al movimento, " +
      "fisicamente e in senso figurato. Con esempi, etimologia dal latino viscum e link a melassa.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
