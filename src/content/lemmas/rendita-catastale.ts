// Il Paroliere — Lemma: rendita catastale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const renditaCatastale: LemmaEntry = {
  lemma: "rendita catastale",
  slug: "rendita-catastale",
  partOfSpeech: "locuzione sostantivale",
  gender: "femminile",
  definition: "Valore annuo che il catasto attribuisce a un immobile come reddito medio che il bene potrebbe produrre, calcolato in base a categoria, classe e consistenza. Non coincide con l'affitto reale né con il prezzo di mercato, ma serve da base per diverse imposte. Per l'IMU di un'abitazione, per esempio, la rendita si rivaluta del 5% e si moltiplica per 160: con una rendita di 1.000 euro la base imponibile è di 168.000 euro.",
  shortDefinition: "Valore annuo che il catasto attribuisce a un immobile e che serve da base per calcolare diverse imposte.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "immobiliare",
  ],
  etymology: "Rendita deriva da rendere, dal latino reddere «restituire, dare in cambio»: ciò che un bene restituisce a chi lo possiede. Catastale è l'aggettivo di → catasto, dal greco bizantino katástichon «registro».",
  examples: [
    "Comprando casa da un privato, le imposte dell'atto si possono calcolare sulla rendita catastale rivalutata e non sul prezzo pagato.",
    "Dopo la ristrutturazione la rendita catastale è aumentata e con lei l'IMU della seconda casa.",
    "Due appartamenti dello stesso palazzo possono avere rendite catastali molto diverse, se sono stati accatastati in anni diversi.",
  ],
  synonyms: [
    {
      term: "reddito catastale",
      register: "tecnico-fiscale",
      context: "nei terreni si distinguono reddito dominicale e reddito agrario",
    },
  ],
  antonyms: [],
  relatedWords: [
    "catasto",
    "imponibile",
    "aliquota",
    "capacita-contributiva",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/rendita/",
    wiktionary: "https://it.wiktionary.org/wiki/rendita_catastale",
  },
  paroliereNote: "La rendita catastale è un numero che quasi nessuno conosce e che quasi tutti pagano. È stata pensata come una stima prudente del reddito di un immobile: per questo resta spesso lontana dai valori di mercato, soprattutto nei centri storici. Da qui nasce l'eterno dibattito sulla riforma del → catasto: aggiornare le rendite significa rendere il sistema più equo, ma anche, per molti, pagare di più.",
  seo: {
    title: "Rendita catastale — significato, IMU, esempi | Il Paroliere",
    description: "Che cos'è la rendita catastale: il valore annuo che il catasto attribuisce a un immobile, base per IMU e altre imposte. Come si calcola, con un esempio.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
