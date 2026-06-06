// Il Paroliere — Lemma: possibile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const possibile: LemmaEntry = {
  lemma: "possibile",
  slug: "possibile",
  partOfSpeech: "aggettivo; anche sostantivo maschile (il possibile)",

  definition:
    "Che non contraddice le leggi della logica, della natura o delle circostanze " +
    "date: ciò che può accadere o essere vero, senza che vi sia alcuna forza che " +
    "lo escluda necessariamente. Possibile è il grado più basso della triade " +
    "epistemica: richiede solo l'assenza di contraddizione, non la presenza di " +
    "evidenze positive a favore. Una cosa è possibile anche se non ci sono ragioni " +
    "per ritenerla vera: basta che non ci siano ragioni decisive per ritenerla " +
    "falsa. In filosofia modale, il possibile si contrappone al necessario (ciò " +
    "che non può non essere) e al contingente (ciò che è, ma avrebbe potuto non " +
    "essere). In logica argomentativa, affermare che qualcosa è \"possibile\" è " +
    "l'affermazione epistemica più debole: non impegna chi la fa a fornire " +
    "evidenze, e non può essere facilmente confutata.",

  shortDefinition:
    "Che non contraddice la logica o la realtà; il grado più basso della triade epistemica, che richiede solo assenza di impossibilità.",

  register: ["comune", "filosofico", "logico"],
  domains: ["logica", "filosofia", "linguistica", "uso comune"],

  etymology:
    "Dal latino possibilis, derivato di posse («potere»), composto di potis " +
    "(«capace») + esse («essere»): «che può essere». Stesso campo di potere, " +
    "potenza, potenziale, impossibile.",

  examples: [
    "«È possibile che l'universo contenga altre forme di vita intelligente: non lo esclude nulla di ciò che sappiamo.»",
    "«\\"È possibile\\" — quando lo dice un politico, di solito significa \\"non voglio impegnarmi ma non posso dire di no\\".»",
    "«Tecnicamente è possibile scalare quella parete senza attrezzatura: non è detto che sia ragionevole farlo.»",
    "«Il possibile e il plausibile non sono la stessa cosa: molte cose sono possibili senza essere plausibili.»",
  ],

  synonyms: [
    {
      term: "fattibile",
      register: "comune",
      context: "realizzabile praticamente",
    },
    {
      term: "ipotizzabile",
      register: "formale",
      context: "che si può ipotizzare",
    },
    {
      term: "concepibile",
      register: "filosofico",
      context: "che la mente può concepire",
    },
  ],

  antonyms: [
    {
      term: "impossibile",
      register: "comune",
      context: "escluso dalla logica o dalla realtà",
    },
    {
      term: "necessario",
      register: "filosofico",
      context: "ciò che non può non essere",
    },
  ],

  relatedWords: [
    "plausibile",
    "probabile",
    "logica modale",
    "contingenza",
    "necessità",
    "potenzialità",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/possibile/",
    wiktionary: "https://it.wiktionary.org/wiki/possibile",
  },

  paroliereNote:
    "Possibile è la parola epistemica più abusata della lingua. Viene usata come " +
    "schermo retorico da chiunque voglia sembrare aperto a un'ipotesi senza " +
    "realmente sostenerla — «è possibile che tu abbia ragione» come formula di " +
    "chiusura di una discussione che non si vuole vincere. Vale la pena ricordare " +
    "che affermare la mera possibilità di qualcosa è quasi sempre non falsificabile: " +
    "è difficile dimostrare che qualcosa è impossibile in senso assoluto. Chi usa " +
    "possibile come argomento dovrebbe essere invitato a salire un gradino nella " +
    "triade: è plausibile? È probabile? Se la risposta è no a entrambe, la " +
    "possibilità da sola vale poco.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Possibile — definizione logica, differenza da plausibile e probabile | Il Paroliere",
    description:
      "Cosa significa possibile in logica e nel linguaggio comune. La triade possibile-plausibile-probabile. Definizione originale con esempi e nota filosofica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
