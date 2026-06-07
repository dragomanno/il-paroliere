// Il Paroliere — Lemma: seminatrice
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const seminatrice: LemmaEntry = {
  lemma: "seminatrice",
  slug: "seminatrice",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Macchina agricola — trainata dal trattore o semovente — progettata per depositare i semi " +
    "nel terreno a profondità, spaziatura e densità controllate, in modo uniforme e continuo. " +
    "La seminatrice meccanica ha sostituito la semina a mano (semina a spaglio) che per secoli " +
    "aveva richiesto l'abilità e la forza fisica di lavoratori specializzati. Oggi esistono " +
    "diverse tipologie in funzione della coltura: la seminatrice a righe per cereali (grano, " +
    "mais, orzo), la seminatrice di precisione o monogranello per colture come barbabietola, " +
    "girasole e soia, dove ogni seme deve essere depositato singolarmente a distanza precisa. " +
    "Le componenti fondamentali di una seminatrice sono: il serbatoio del seme, il dispositivo " +
    "dosatore che regola la quantità di seme distribuita, i dischi semenzali o tutoli che " +
    "aprono il solco nel terreno, il tubo guidaseme che convoglia il seme nel solco, e il " +
    "copriseme che richiude il terreno dopo la deposizione.",

  shortDefinition:
    "Macchina agricola per la deposizione meccanica dei semi nel terreno a profondità e " +
    "spaziatura controllate.",

  register: ["tecnico-agricolo", "comune nel contesto rurale"],
  domains: ["agricoltura", "meccanica agraria", "storia del lavoro"],

  etymology:
    "Da seminare (latino seminare, da semen, «seme») + suffisso -trice che forma il femminile " +
    "dei nomi di macchine e strumenti.",

  examples: [
    "«La seminatrice di precisione permette di distribuire i semi di mais a distanza esatta di 75 cm tra le file, ottimizzando lo spazio e riducendo la competizione tra le piante.»",
    "«Prima dell'avvento della seminatrice meccanica, la semina del grano richiedeva squadre di lavoratori che percorrevano i campi per giorni.»",
    "«La seminatrice a righe è ancora la macchina base per la coltivazione del frumento: semplice, affidabile, adatta a terreni di ogni tipo.»",
  ],

  synonyms: [
    {
      term: "macchina seminatrice",
      register: ["tecnico"],
      context: "denominazione completa",
    },
    {
      term: "semina meccanica",
      register: ["tecnico"],
      context: "il processo meccanico",
    },
  ],

  relatedWords: [
    "trebbiatrice",
    "vendemmia",
    "trattore",
    "aratura",
    "seme",
    "cereali",
    "agricoltura meccanizzata",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/seminatrice/",
    wiktionary: "https://it.wiktionary.org/wiki/seminatrice",
  },

  paroliereNote:
    "La meccanizzazione agricola del Novecento ha trasformato radicalmente il paesaggio " +
    "rurale italiano: macchine come la seminatrice hanno sostituito pratiche millenarie in " +
    "pochi decenni. Questo ha avuto conseguenze profonde non solo sulla produttività ma sulla " +
    "struttura sociale delle campagne — meno manodopera, comunità rurali più piccole, fine " +
    "della mezzadria. La seminatrice è un oggetto tecnico con una storia sociale dietro.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Seminatrice — macchina agricola, tipi, funzionamento | Il Paroliere",
    description:
      "Cos'è una seminatrice, come funziona, tipi principali. Dalla semina a mano alla " +
      "meccanizzazione. Definizione tecnica con note storiche.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
