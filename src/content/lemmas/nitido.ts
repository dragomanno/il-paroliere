// Il Paroliere — Lemma: nitido
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const nitido: LemmaEntry = {
  lemma: "nitido",
  slug: "nitido",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Detto di ciò che si percepisce con precisione e senza interferenze: " +
    "un'immagine nitida non ha sbavature, un suono nitido non ha distorsioni, " +
    "un pensiero nitido non lascia margini di ambiguità. Come qualità dello " +
    "stile, indica una scrittura o un'espressione che rinuncia al superfluo " +
    "e raggiunge la chiarezza per sottrazione.",

  shortDefinition:
    "Privo di sfocature, rumori o ambiguità; chiaro fino all'essenziale, nell'immagine come nel pensiero e nello stile.",

  register: ["comune"],
  domains: ["percezione", "stile", "comunicazione"],

  etymology:
    "Dal latino nitidus ('lucente, pulito, elegante'), derivato di nitere " +
    "('brillare, risplendere'). Il senso originario era di splendore visivo; " +
    "nel tempo si è esteso alla precisione e alla chiarezza in senso lato.",

  examples: [
    "La fotografia era nitida come raramente si vede: ogni dettaglio aveva " +
    "un bordo preciso.",
    "Spiegò la questione in modo nitido — tre concetti, nessuna ridondanza.",
    "Aveva un ricordo nitido di quel giorno, come se il tempo non avesse " +
    "ancora avuto modo di sfumarlo.",
    "Lo stile del saggio era nitido e asciutto: ogni parola era quella giusta, " +
    "non ce n'era una di troppo.",
  ],

  synonyms: [
    {
      term: "chiaro",
      register: "comune",
      context: "comprensibile, senza oscurità — più semantico, meno percettivo di nitido",
    },
    {
      term: "preciso",
      register: "comune",
      context: "esatto, senza margini di errore — più legato alla misura che alla percezione",
    },
    {
      term: "limpido",
      register: "comune",
      context: "trasparente, senza torbidità — con sfumatura più liquida e visiva",
    },
    {
      term: "definito",
      register: "comune",
      context: "con contorni chiari — più visivo, riferito soprattutto a forme",
    },
  ],

  antonyms: [
    {
      term: "sfocato",
      register: "comune",
      context: "senza messa a fuoco — opposto diretto nella percezione visiva",
    },
    {
      term: "vago",
      register: "comune",
      context: "impreciso, senza contorni netti — opposto semantico",
    },
    {
      term: "confuso",
      register: "comune",
      context: "privo di ordine e chiarezza",
    },
  ],

  relatedWords: [
    "nitidezza",
    "nitidamente",
    "limpido",
    "chiaro",
    "preciso",
    "definito",
    "pulito",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/nitido/",
    wiktionary: "https://it.wiktionary.org/wiki/nitido",
  },

  paroliereNote:
    "Nitido è uno di quei termini che dicono molto sullo stile di chi li usa: " +
    "chi scrive bene tende ad avere un ideale di nitidezza — nella frase, nel " +
    "paragrafo, nel ragionamento. Non è semplicità: è precisione. Si può " +
    "scrivere di cose complesse in modo nitido; è più difficile, ma è l'obiettivo. " +
    "La nitidezza non è l'assenza di profondità: è la profondità resa visibile.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Nitido — Il Paroliere",
    description:
      "Definizione originale di 'nitido': chiaro fino all'essenziale, privo di " +
      "sfocature. Dal latino nitidus. Nell'immagine, nel pensiero e nello stile.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
