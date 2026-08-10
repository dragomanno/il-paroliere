// Il Paroliere — Lemma: effetto alone
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const effettoAlone: LemmaEntry = {
  lemma: "effetto alone",
  slug: "effetto-alone",
  partOfSpeech: "locuzione-nominale",
  gender: "maschile",
  register: ["tecnico-psicologico", "divulgativo"],
  domains: ["psicologia", "sociologia", "comunicazione", "marketing"],

  definition:
    "Distorsione cognitiva per cui la valutazione complessiva di una persona, un " +
    "prodotto o un'organizzazione viene influenzata in modo sproporzionato da " +
    "una singola caratteristica saliente — spesso positiva — che finisce per " +
    "'irradiare' un giudizio favorevole anche su qualità non verificate né " +
    "collegate logicamente ad essa. Chi è percepito come bello, per esempio, " +
    "viene inconsciamente giudicato anche più competente, onesto o intelligente, " +
    "senza alcuna prova a sostegno di quelle inferenze. Il fenomeno fu " +
    "documentato sperimentalmente dallo psicologo Edward Thorndike nel 1920, " +
    "osservando come gli ufficiali militari tendessero a valutare in modo " +
    "uniformemente positivo o negativo tutte le qualità di un subordinato in " +
    "base a un'impressione generale iniziale, invece di valutare ogni tratto in " +
    "modo indipendente. È uno dei → bias cognitivi più sfruttati, spesso in modo " +
    "deliberato, in pubblicità, → propaganda e comunicazione politica.",

  shortDefinition:
    "Bias cognitivo per cui una singola caratteristica saliente — spesso " +
    "positiva — influenza in modo sproporzionato il giudizio complessivo su una " +
    "persona o un prodotto.",

  etymology:
    "Traduzione dell'inglese halo effect, coniato dallo psicologo statunitense " +
    "Edward L. Thorndike nel saggio A Constant Error in Psychological Ratings " +
    "(1920). Il termine halo/alone richiama l'aureola dei santi nell'iconografia " +
    "religiosa: una luce che avvolge l'intera figura a partire da un unico " +
    "punto luminoso, esattamente come il giudizio positivo su un tratto " +
    "'illumina' impropriamente tutti gli altri.",

  examples: [
    "L'effetto alone spiega perché i candidati più attraenti ottengano spesso " +
      "valutazioni di competenza più alte a parità di curriculum, in colloqui " +
      "di lavoro condotti alla cieca su carta.",
    "Il marchio aveva costruito la propria reputazione su un solo prodotto di " +
      "punta, e l'effetto alone faceva sì che anche le linee più deboli " +
      "vendessero bene solo per associazione.",
    "Gli insegnanti, mostrò lo studio, tendevano a giudicare più intelligenti gli " +
      "studenti con una scrittura ordinata — un classico effetto alone che nulla " +
      "ha a che vedere con il contenuto delle risposte.",
    "La → propaganda dei regimi novecenteschi sfruttava sistematicamente " +
      "l'effetto alone: mostrare il leader in poche situazioni curate (con i " +
      "bambini, sul lavoro nei campi) bastava a suggerire virtù mai dimostrate " +
      "altrove.",
  ],

  synonyms: [
    {
      term: "effetto pigmalione",
      register: "tecnico-psicologico",
      context: "concetto affine ma distinto: riguarda come le aspettative su una persona ne influenzano il comportamento effettivo, non solo il giudizio su di essa",
    },
    {
      term: "generalizzazione impropria",
      register: "formale",
      context: "resa descrittiva generica dello stesso meccanismo di inferenza scorretta",
    },
  ],

  antonyms: [
    {
      term: "valutazione analitica",
      register: "tecnico",
      context: "giudicare ogni tratto o qualità in modo indipendente, senza lasciare che uno influenzi la percezione degli altri",
    },
  ],

  relatedWords: [
    "bias cognitivo",
    "pregiudizio",
    "propaganda",
    "persuasione",
    "euristica",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/effetto_alone",
  },

  paroliereNote:
    "L'effetto alone è particolarmente insidioso perché non richiede alcuna " +
    "intenzione ingannevole da parte di chi ne beneficia: è un errore sistematico " +
    "del giudizione umano, non necessariamente una strategia di → manipolazione. " +
    "Diventa manipolazione vera e propria solo quando qualcuno lo sfrutta " +
    "deliberatamente — curando con cura un solo aspetto visibile (l'aspetto " +
    "fisico di un politico, il packaging di un prodotto, la prosa elegante di un " +
    "documento) sapendo che il pubblico estenderà quella buona impressione a " +
    "qualità mai effettivamente verificate. Conoscerlo è una delle difese più " +
    "efficaci contro se stessi: il solo fatto di sapere che il proprio cervello " +
    "tende a generalizzare da un singolo tratto positivo aiuta, negli esperimenti " +
    "successivi a Thorndike, a correggere parzialmente il bias.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Effetto alone — definizione, origine ed esempi | Il Paroliere",
    description:
      "Che cos'è l'effetto alone (halo effect): bias cognitivo studiato da " +
      "Thorndike, esempi in marketing e propaganda, differenza da altri bias.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
