// Il Paroliere — Lemma: lucido
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lucido: LemmaEntry = {
  lemma: "lucido",
  slug: "lucido",
  partOfSpeech: "aggettivo",

  definition:
    "Di chi mantiene piena chiarezza di giudizio anche sotto pressione, senza cedere alla distorsione emotiva o al pensiero difensivo. In senso fisico, che riflette la luce con uniformità e nitidezza. Le due accezioni convergono nell'idea di superficie pulita: la mente lucida, come uno specchio, restituisce le cose per quello che sono.",

  shortDefinition:
    "Capace di vedere con chiarezza senza distorsioni; in senso fisico, brillante e riflettente.",

  register: ["comune"],
  domains: ["pensiero", "carattere"],

  etymology:
    "Dal latino lucidus, da lux (luce); la radice condivide con illustre, luna, translucido.",

  examples: [],

  synonyms: [
      {
        term: "chiaro",
        register: "comune",
        context: "più generico, si applica a idee, spiegazioni, situazioni",
      },
      {
        term: "nitido",
        register: "comune",
        context: "preciso, senza sfumature indistinte — accezione visiva e mentale",
      },
      {
        term: "cristallino",
        register: "comune",
        context: "trasparenza totale, senza ambiguità residue",
      },
    ],

  antonyms: [
      {
        term: "confuso",
        register: "comune",
        context: "pensiero che non riesce a distinguere con chiarezza",
      },
      {
        term: "offuscato",
        register: "comune",
        context: "chiarezza oscurata da emozione, stanchezza o pregiudizio",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/lucido/",
    wiktionary: "https://it.wiktionary.org/wiki/lucido",
  },

  paroliereNote:
    "Essere lucido sotto pressione è considerato una virtù quasi assoluta nella cultura razionalista moderna. Ma c'è un paradosso: la lucidità richiede una forma di distacco che non sempre è disponibile quando servirebbe di più. Chi è sempre lucido in ogni circostanza potrebbe semplicemente non essere abbastanza presente.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Lucido — Il Paroliere",
    description:
      "Definizione originale di 'lucido': chiarezza di giudizio senza distorsioni, in senso mentale e fisico. Con sinonimi, contrari ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
