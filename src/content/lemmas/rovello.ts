// Il Paroliere — Lemma: rovello
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rovello: LemmaEntry = {
  lemma: "rovello",
  slug: "rovello",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Pensiero che ritorna insistentemente sullo stesso punto senza trovare " +
    "pace né risoluzione, come una spina conficcata nella mente che non si " +
    "riesce né a togliere né a ignorare. Nella tradizione letteraria, " +
    "soprattutto toscana, il rovello nomina quella forma di cruccio che " +
    "tiene sveglio, che occupa il pensiero, che si alimenta di sé senza " +
    "arrivare da nessuna parte.",

  shortDefinition:
    "Cruccio ostinato e circolare che non si risolve — la mente vi torna sopra senza riuscire a lasciarlo andare.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "carattere"],

  examples: [
    "Il rovello di quella notte non lo abbandonò per settimane.",
    "Non era rimpianto — era rovello: la stessa domanda che tornava ogni volta che si fermava a pensare.",
    "Scrivere era il suo modo di dare forma al rovello, non di risolverlo.",
  ],

  synonyms: [
    {
      term: "cruccio",
      register: "comune",
      context: "preoccupazione persistente che pesa — meno circolare del rovello",
    },
    {
      term: "tormento",
      register: "comune",
      context: "sofferenza più intensa, con maggiore carica emotiva",
    },
    {
      term: "assillo",
      register: "comune",
      context: "pensiero che preme e non lascia in pace",
    },
  ],

  antonyms: [
    {
      term: "serenità",
      register: "comune",
      context: "pace interiore, assenza di pensieri tormentosi",
    },
    {
      term: "rassegnazione",
      register: "comune",
      context: "accettazione che interrompe il circolo del rovello",
    },
  ],

  relatedWords: [
    "cruccio",
    "tormento",
    "rimpianto",
    "assillo",
    "pensiero ossessivo",
    "inquietudine",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rovello",
  },

  paroliereNote:
    "Rovello è una di quelle parole che il toscano ha conservato con una " +
    "precisione che l'italiano standard non ha saputo mantenere. Nomina " +
    "qualcosa di specifico: non la tristezza, non il rimpianto, non " +
    "l'ansia — ma quel pensiero che gira e non si esaurisce, che non è " +
    "abbastanza grave da chiamarsi ossessione, ma abbastanza tenace da " +
    "occupare il silenzio. Una parola che vale la pena tenere viva.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Rovello — Il Paroliere",
    description:
      "Definizione originale di 'rovello': cruccio circolare della tradizione " +
      "letteraria toscana. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
