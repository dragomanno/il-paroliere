// Il Paroliere — Lemma: smielato
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const smielato: LemmaEntry = {
  lemma: "smielato",
  slug: "smielato",
  partOfSpeech: "aggettivo",

  definition:
    "Detto di persona, tono di voce, atteggiamento o discorso eccessivamente dolce, " +
    "affettato, mellifluo fino alla stucchevolezza. Chi è smielato trabocca di gentilezza " +
    "ostentata, usualmente con intento adulatorio o manipolatorio, tanto da risultare " +
    "insincero o artificioso. L'immagine alla base è quella di qualcosa intinto nel " +
    "miele fino a essere impregnato, quindi stucchevole per eccesso di dolcezza.",

  shortDefinition:
    "Eccessivamente dolce, mellifluo, stucchevolmente affettuoso nell'atteggiamento o nel tono.",

  register: ["colloquiale", "ironico"],
  domains: ["società", "linguistica", "usi figurati"],

  etymology:
    "Participio passato di un verbo denominale costruito su miele (latino mel, mellis). " +
    "La formazione per analogia con inzuccherato, addolcito è tipica dell'italiano " +
    "popolare e colloquiale; l'uso figurato è attestato almeno dall'Ottocento.",

  examples: [
    "«Rispose con un tono talmente smielato che tutti capirono che stava mentendo.»",
    "«Non sopporto i discorsi smielati del capo ogni volta che vuole chiederci uno straordinario.»",
    '«"Tesoooro, sei bellissima" disse lui con quella vocina smielata che la faceva rabbrividire.»',
  ],

  synonyms: [
    {
      term: "mellifluo",
      register: "letterario",
      context: "quasi-sinonimo di registro più elevato",
    },
    {
      term: "zuccheroso",
      register: "colloquiale",
      context: "eccesso di dolcezza",
    },
    {
      term: "untuoso",
      register: "colloquiale",
      context: "con sfumatura di falsità",
    },
    {
      term: "melato",
      register: "comune",
      context: "sapore o tono di miele",
    },
    {
      term: "adulatorio",
      register: "formale",
      context: "che lusinga per interesse",
    },
    {
      term: "leccapiedi",
      register: "spregiativo",
      context: "in senso più marcatamente spregiativo",
    },
  ],

  antonyms: [
    {
      term: "brusco",
      register: "comune",
      context: "tono secco e diretto",
    },
    {
      term: "schietto",
      register: "comune",
      context: "senza artifici",
    },
    {
      term: "ruvido",
      register: "comune",
      context: "privo di dolcezze",
    },
    {
      term: "diretto",
      register: "comune",
      context: "senza mediazioni affettate",
    },
    {
      term: "asciutto",
      register: "comune",
      context: "essenziale, senza ornamenti",
    },
  ],

  relatedWords: [
    "melassa",
    "adulazione",
    "ipocrisia",
    "affettazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/smielato/",
    wiktionary: "https://it.wiktionary.org/wiki/smielato",
  },

  paroliereNote:
    "Smielato è una parola che sa fare il suo lavoro con eleganza colloquiale. A " +
    "differenza di mellifluo — suo quasi-sinonimo di registro più elevato, letterario, " +
    "quasi tecnico-retorico — smielato ha un sapore domestico, pettegolo, da " +
    "conversazione di bar. Quando si dice «che tipo smielato» non si sta analizzando " +
    "la retorica di qualcuno: si sta esprimendo un'istintiva diffidenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Smielato — definizione e uso | Il Paroliere",
    description:
      "Smielato: cosa significa, quando si usa, quali sfumature porta rispetto a " +
      "mellifluo o zuccheroso. Definizione originale con esempi d'uso.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
