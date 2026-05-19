// Il Paroliere — Lemma: cauto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cauto: LemmaEntry = {
  lemma: "cauto",
  slug: "cauto",
  partOfSpeech: "aggettivo",

  definition:
    "Chi agisce misurando i rischi prima di muoversi, preferendo la riflessione all'impeto. Non è sinonimo di timoroso: la cautela può essere scelta lucida di chi ha imparato che la fretta sbaglia. In senso critico, indica chi esita oltre il necessario, bloccato più dal timore che dal calcolo.",

  shortDefinition:
    "Chi valuta prima di agire; non per paura, ma per metodo — anche se a volte l'esitazione diventa il vero ostacolo.",

  register: ["comune"],
  domains: ["carattere", "comportamento"],

  etymology:
    "Dal latino cautus, participio passato di cavere (guardarsi, stare attento).",

  examples: [],

  synonyms: [
      {
        term: "prudente",
        register: "comune",
        context: "quasi sinonimo, con sfumatura più positiva",
      },
      {
        term: "guardingo",
        register: "comune",
        context: "enfatizza la diffidenza e la sorveglianza",
      },
      {
        term: "circospetto",
        register: "comune",
        context: "attenzione ai dettagli e all'ambiente circostante",
      },
    ],

  antonyms: [
      {
        term: "temerario",
        register: "comune",
        context: "agisce senza valutare i rischi",
      },
      {
        term: "impulsivo",
        register: "comune",
        context: "agisce prima di riflettere",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/cauto/",
    wiktionary: "https://it.wiktionary.org/wiki/cauto",
  },

  paroliereNote:
    "La tradizione latina distingueva la cautela come virtù — il saggio che non si lascia sorprendere — dalla pusillanimità come difetto. Nella lingua contemporanea questa distinzione si è in parte persa: «cauto» può suonare come lode o come critica velata, a seconda del tono con cui viene detto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Cauto — Il Paroliere",
    description:
      "Definizione originale di 'cauto': chi valuta prima di agire, per metodo e non per paura. Con sinonimi, contrari ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
