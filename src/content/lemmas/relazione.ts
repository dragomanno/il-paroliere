// Il Paroliere — Lemma: relazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const relazione: LemmaEntry = {
  lemma: "relazione",
  slug: "relazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico", "tecnico"],
  domains: ["psicologia", "sociologia", "filosofia", "logica"],

  definition:
    "Rapporto, stabile o occasionale, che collega due o più persone e ne organizza scambi, ruoli e vicinanze: una relazione può essere affettiva, familiare, professionale o conflittuale. In logica e nel ragionamento indica invece il nesso che lega fatti, concetti o cause. Nel continuum umano, la relazione è la forma neutra da cui può nascere un → legame; quando l’autonomia si consuma, può scivolare nella → dipendenza.",

  shortDefinition:
    "Rapporto tra persone oppure nesso tra fatti e concetti; in ambito umano può andare dal contatto al legame profondo.",

  etymology:
    "Dal latino relatio, «riporto, riferimento», derivato di referre. L’origine richiama il rimandare qualcosa a qualcos’altro, nucleo rimasto sia nel rapporto umano sia nel nesso logico-causale.",

  examples: [
    "La loro relazione è cambiata quando hanno imparato a discutere senza trasformare ogni divergenza in una minaccia.",
    "Con il padre aveva una relazione affettuosa, ma fatta di poche parole e molta affidabilità.",
    "Il rapporto mostra una relazione chiara tra l’aumento degli affitti e il numero di famiglie costrette a spostarsi.",
    "Non basta che due eventi avvengano insieme per dimostrare una relazione di causa ed effetto.",
  ],

  synonyms: [
    { term: "rapporto", register: "comune", context: "Quasi equivalente nell’uso interpersonale, ma più adatto anche a misure, proporzioni e rapporti di lavoro." },
    { term: "legame", register: "comune", context: "Implica in genere maggiore calore affettivo, durata o coinvolgimento rispetto alla struttura neutra di relazione." },
    { term: "nesso", register: "tecnico", context: "Riguarda il collegamento logico o causale, non l’incontro tra persone." },
  ],

  antonyms: [
    { term: "disconnessione", register: "comune", context: "Mancanza o interruzione di contatto tra persone, elementi o sistemi." },
    { term: "indipendenza", register: "psicologico", context: "In una relazione segnala il mantenimento di autonomia; non è l’opposto di ogni rapporto." },
  ],

  relatedWords: ["connessione", "legame", "dipendenza", "desiderio", "aspirazione", "speranza", "attesa", "frustrazione", "rassegnazione", "accettazione", "comunità"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/relazione",
  },

  paroliereNote:
    "«Relazione» è una parola strutturale: dice che qualcosa sta in rapporto con qualcos’altro, senza decidere ancora se quel rapporto sia buono, intimo o duraturo. Nella vita affettiva il passaggio da relazione a → legame richiede riconoscimento e cura; il desiderio, l’→ attesa e la → frustrazione ne possono rivelare i punti delicati.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Relazione — definizione, sinonimi, uso | Il Paroliere",
    description: "Relazione: rapporto tra persone e nesso tra fatti. Significati, esempi distinti, sinonimi e differenza da legame e dipendenza.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
