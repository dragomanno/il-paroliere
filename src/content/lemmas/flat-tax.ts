// Il Paroliere — Lemma: flat tax
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const flatTax: LemmaEntry = {
  lemma: "flat tax",
  slug: "flat-tax",
  partOfSpeech: "locuzione sostantivale",
  gender: "femminile",
  definition: "Sistema di imposizione sul reddito basato su un'unica aliquota uguale per tutti i livelli di reddito, spesso accompagnata da una soglia esente che ne attenua il carattere proporzionale. La formula moderna risale alla proposta degli economisti americani Robert Hall e Alvin Rabushka, nel 1985. Nel dibattito italiano l'espressione è usata in senso molto più largo, per qualunque regime ad aliquota fissa, a partire dal regime forfettario al 15% per le partite IVA.",
  shortDefinition: "Imposta sul reddito ad aliquota unica; in Italia, anche nome corrente dei regimi ad aliquota fissa.",
  register: [
    "tecnico-fiscale",
    "giornalistico",
  ],
  domains: [
    "fisco",
    "economia",
    "politica",
  ],
  etymology: "Dall'inglese flat «piatto, uniforme» e tax «imposta»: un'imposta «piatta», la cui aliquota non sale con il reddito. In italiano è un prestito non adattato e prende il femminile per accordo con imposta e tassa.",
  examples: [
    "Ogni campagna elettorale riporta in primo piano la flat tax, quasi sempre senza dire a quale aliquota e con quali soglie.",
    "Per molti professionisti la flat tax coincide, di fatto, con il regime forfettario al 15%.",
    "Con una flat tax al 20% e una soglia esente di 10.000 euro, chi guadagna 20.000 euro paga in media il 10%, chi ne guadagna 100.000 il 18%.",
  ],
  synonyms: [
    {
      term: "aliquota unica",
      register: "tecnico-fiscale",
      context: "descrive il meccanismo senza la connotazione politica",
    },
    {
      term: "imposta piatta",
      register: "comune",
      context: "traduzione letterale, poco diffusa",
    },
  ],
  antonyms: [
    {
      term: "imposta progressiva",
      register: "tecnico-fiscale",
      context: "aliquote crescenti per scaglioni o per classi di reddito",
    },
  ],
  relatedWords: [
    "progressivita",
    "aliquota",
    "capacita-contributiva",
    "irpef",
    "prestito-linguistico",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/flat-tax_(Neologismi)/",
  },
  paroliereNote: "Flat tax è una di quelle espressioni che dicono più del loro significato tecnico. Un'aliquota unica con una soglia esente è ancora, in senso stretto, un'imposta progressiva: l'aliquota media cresce con il reddito, anche se più lentamente. Per questo la discussione sulla sua compatibilità con l'articolo 53 della Costituzione è meno semplice di come appare negli slogan: il nodo non è l'aliquota unica in sé, ma quanta → progressività resta nel sistema nel suo complesso.",
  seo: {
    title: "Flat tax — significato, origine, flat tax in Italia | Il Paroliere",
    description: "Che cos'è la flat tax: l'imposta ad aliquota unica proposta da Hall e Rabushka nel 1985 e usata in senso largo nel dibattito fiscale italiano.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
