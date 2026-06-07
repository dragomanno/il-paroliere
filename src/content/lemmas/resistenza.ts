// Il Paroliere — Lemma: resistenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const resistenza: LemmaEntry = {
  lemma: "resistenza",
  slug: "resistenza",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Capacità di un corpo, di un materiale o di una persona di opporsi a una forza " +
    "esterna, a una pressione o a un processo di cambiamento senza cedere. In fisica, " +
    "misura la difficoltà che un conduttore oppone al passaggio di corrente elettrica; " +
    "si esprime in ohm (Ω), dal nome del fisico tedesco Georg Simon Ohm. In senso " +
    "storico e con la maiuscola, designa il movimento organizzato di opposizione armata " +
    "alle occupazioni nazifasciste, in particolare quello italiano durante la Seconda " +
    "Guerra Mondiale.",

  shortDefinition:
    "L'opposizione attiva a una forza, a una pressione o a un dominio. In fisica, " +
    "la grandezza che misura l'ostacolo al flusso di corrente elettrica, espressa in ohm.",

  register: ["comune", "tecnico", "storico"],
  domains: ["fisica", "elettrotecnica", "società", "storia", "psicologia"],

  etymology:
    "Dal latino resistentia, derivato di resistere («stare saldo contro»), composto " +
    "di re- (forza reiterativa o contraria) + sistere («fermare, fare stare»). Il lemma " +
    "è attestato in italiano già nel Trecento.",

  examples: [
    "«La resistenza dei materiali compositi è molto superiore a quella dell'acciaio tradizionale.»",
    "«Il circuito non funzionava: la resistenza era bruciata.»",
    "«Una resistenza di 100 ohm limita il passaggio di corrente in modo significativo.»",
    "«Quella donna oppose una resistenza silenziosa ma ostinata a ogni tentativo di piegarla.»",
    "«I partigiani della Resistenza pagarono un prezzo altissimo in vite umane.»",
  ],

  synonyms: [
    {
      term: "opposizione",
      register: ["comune"],
      context: "in senso figurato",
    },
    {
      term: "contrasto",
      register: ["comune"],
      context: "in senso figurato",
    },
    {
      term: "ostinazione",
      register: ["comune"],
      context: "in senso figurato",
    },
    {
      term: "tenacia",
      register: ["comune"],
      context: "in senso figurato",
    },
    {
      term: "perseveranza",
      register: ["comune"],
      context: "in senso figurato",
    },
    {
      term: "impedenza",
      register: ["tecnico"],
      context: "in elettrotecnica, più preciso tecnicamente",
    },
  ],

  antonyms: [
    {
      term: "arrendevolezza",
      register: ["comune"],
      context: "disposizione a cedere",
    },
    {
      term: "cedimento",
      register: ["comune"],
      context: "atto del cedere",
    },
    {
      term: "acquiescenza",
      register: ["formale"],
      context: "accettazione passiva",
    },
    {
      term: "capitolazione",
      register: ["comune"],
      context: "resa formale",
    },
  ],

  relatedWords: [
    "coercizione",
    "coartazione",
    "Resistenza (storica)",
    "ohm",
    "conduttore",
    "circuito",
    "partigiano",
    "resilienza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/resistenza/",
    wiktionary: "https://it.wiktionary.org/wiki/resistenza",
  },

  paroliereNote:
    "Resistenza è una di quelle parole che la lingua italiana ha caricato di significati " +
    "su piani molto diversi senza mai renderli incompatibili. L'ohmmetro e il partigiano " +
    "abitano la stessa parola. Vale la pena notare la distinzione tra resistenza e " +
    "resilienza: la prima indica un'opposizione attiva, un non cedere frontale; la seconda, " +
    "mutuata dall'inglese resilience e dalla metallurgia, designa la capacità di assorbire " +
    "un urto e ritornare alla forma originale. Le due parole vengono spesso confuse nel " +
    "linguaggio corrente, soprattutto nei testi di psicologia divulgativa e management.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Resistenza — definizione, fisica, storia | Il Paroliere",
    description:
      "Cosa significa resistenza? La parola dalla fisica degli ohm alla Resistenza " +
      "partigiana: definizione originale, esempi d'uso, etimologia e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
