// Il Paroliere — Lemma: vinaggio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vinaggio: LemmaEntry = {
  lemma: "vinaggio",
  slug: "vinaggio",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "La pratica di mescolare vini di diversa provenienza, annata o vitigno dopo che sono " +
    "stati prodotti separatamente, al fine di ottenere un vino finale con caratteristiche " +
    "organolettiche più equilibrate, complesse o costanti rispetto ai componenti singoli. " +
    "Il vinaggio — o assemblaggio (termine francese usato nella tradizione enologica " +
    "internazionale, blending in inglese) — è una pratica antica e legittima, ma soggetta a " +
    "regolamentazione precisa nelle denominazioni di origine. Va distinto dall'uvaggio — il " +
    "miscuglio di uve di vitigni diversi prima o durante la fermentazione, quindi a monte del " +
    "vino — e dal taglio (termine meno tecnico e talvolta con connotazione negativa, usato per " +
    "indicare l'aggiunta di vini di qualità inferiore o di altra provenienza geografica per " +
    "aumentare il volume). Nei vini a denominazione (DOC, DOCG), il disciplinare regola " +
    "rigorosamente cosa si può e non si può aggiungere: il Chianti Classico DOCG permette " +
    "percentuali di vitigni complementari al Sangiovese base; il Brunello di Montalcino DOCG " +
    "deve essere 100% Sangiovese e quindi non ammette vinaggio tra vitigni diversi.",

  shortDefinition:
    "La pratica di mescolare vini già prodotti per ottenere un blend finale con caratteristiche " +
    "desiderate; assemblaggio post-fermentazione, da distinguere dall'uvaggio (pre-fermentazione).",

  register: ["tecnico-enologico", "raro nel parlato comune"],
  domains: ["enologia", "chimica del vino", "legislazione alimentare"],

  etymology:
    "Da vino (latino vinum) + suffisso -aggio di origine francese che indica un processo o " +
    "un'operazione tecnica. Lo stesso meccanismo di imbottigliaggio, filtraggio, travaso.",

  examples: [
    "«Il vinaggio tra Sangiovese e Merlot è alla base di molti Supertuscans: l'internazionale Merlot ammorbidisce i tannini aspri del Sangiovese giovane.»",
    "«Il vinaggio non è una frode: è una tecnica enologica che richiede competenza e sensibilità. La frode è quando si viola il disciplinare o si aggiungono vini non consentiti.»",
    "«Nei grandi Champagne non millesimati, il vinaggio tra annate diverse è fondamentale per mantenere uno stile costante di maison.»",
  ],

  synonyms: [
    {
      term: "assemblaggio",
      register: ["tecnico"],
      context: "termine francese di uso internazionale",
    },
    {
      term: "blending",
      register: ["tecnico"],
      context: "anglicismo di uso internazionale",
    },
    {
      term: "taglio",
      register: ["comune"],
      context: "termine meno tecnico, talvolta con connotazione spregiativa",
    },
  ],

  relatedWords: [
    "uvaggio",
    "vino",
    "vitigno",
    "vendemmia",
    "disciplinare",
    "DOC",
    "DOCG",
    "Supertuscans",
    "enologia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/vinaggio/",
    wiktionary: "https://it.wiktionary.org/wiki/vinaggio",
  },

  paroliereNote:
    "Uvaggio e vinaggio sono spesso confusi — persino da appassionati di vino — perché " +
    "entrambi descrivono una pratica di «mescolare». La distinzione temporale è però " +
    "fondamentale: nell'uvaggio, i vitigni fermentano insieme, le loro componenti chimiche " +
    "interagiscono durante il processo, i tannini si fondono, le acidità si compensano mentre " +
    "il vino si forma. Nel vinaggio, si mescolano prodotti già formati, con caratteri già " +
    "definiti. È la differenza tra cucinare con ingredienti mescolati fin dall'inizio o " +
    "impiattare piatti diversi sullo stesso piatto. Entrambi danno risultati interessanti; " +
    "sono cose diverse.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Vinaggio — definizione, assemblaggio, differenza da taglio | Il Paroliere",
    description:
      "Cos'è il vinaggio, come si distingue dall'uvaggio e dal taglio, il ruolo " +
      "nell'enologia italiana. Definizione tecnica con nota sui Supertuscans.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
