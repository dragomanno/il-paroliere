// Il Paroliere — Lemma: sovranità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sovranita: LemmaEntry = {
  lemma: "sovranità",
  slug: "sovranita",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Il potere supremo di uno stato di governarsi senza subordinazione a " +
    "un'autorità esterna, esercitando in modo esclusivo funzioni legislative, " +
    "giudiziarie ed esecutive sul proprio territorio. In filosofia politica il " +
    "concetto risale a Jean Bodin e Thomas Hobbes, che ne fecero il fondamento " +
    "dello stato moderno; nel dibattito contemporaneo il termine è spesso usato " +
    "in modo impreciso, come sinonimo generico di indipendenza o autodeterminazione.",

  shortDefinition:
    "Potere supremo di uno stato di governarsi senza subordinazione esterna; nel dibattito pubblico, spesso usato in modo impreciso.",

  register: ["tecnico", "comune"],
  domains: ["politica", "diritto", "filosofia"],

  etymology:
    "Dal francese antico souverain, «supremo», derivato del latino superanus, da " +
    "super, «sopra». Entrata nel vocabolario politico italiano attraverso la " +
    "trattatistica giuridica di età moderna.",

  examples: [
    "La sovranità nazionale, per la teoria classica, non è divisibile: o si esercita per intero, o non è sovranità.",
    "L'adesione a organizzazioni internazionali comporta sempre una cessione parziale di sovranità in cambio di altri vantaggi.",
    "Chi invoca la sovranità in senso assoluto spesso ignora che nessuno stato moderno la esercita più senza vincoli esterni.",
  ],

  synonyms: [
    {
      term: "autodeterminazione",
      register: "tecnico",
      context: "più specifico, riferito al diritto di un popolo a decidere il proprio assetto politico",
    },
    {
      term: "indipendenza",
      register: "comune",
      context: "più generico e meno tecnico, spesso usato come sinonimo impreciso di sovranità",
    },
  ],

  antonyms: [
    {
      term: "subordinazione",
      register: "tecnico",
      context: "la condizione di dipendenza da un'autorità esterna",
    },
    {
      term: "vassallaggio",
      register: "letterario",
      context: "storicamente specifico, oggi usato in senso figurato per una dipendenza politica marcata",
    },
  ],

  relatedWords: ["stato", "autodeterminazione", "indipendenza", "territorio", "legittimità"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/sovranit%C3%A0",
  },

  paroliereNote:
    "Sovranità è tra i termini più abusati del linguaggio politico contemporaneo, " +
    "spesso invocato come se fosse un valore assoluto e non condizionabile — mentre " +
    "la teoria politica moderna, da Bodin in avanti, l'ha sempre pensata come " +
    "potere supremo all'interno di un ordine giuridico, non come isolamento dal " +
    "resto del mondo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sovranità — Il Paroliere",
    description:
      "Definizione originale di 'sovranità': potere supremo di uno stato di " +
      "governarsi senza subordinazione esterna. Da Bodin all'uso improprio nel dibattito contemporaneo, con esempi.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
