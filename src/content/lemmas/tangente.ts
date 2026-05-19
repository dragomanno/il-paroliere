// Il Paroliere — Lemma: tangente
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tangente: LemmaEntry = {
  lemma: "tangente",
  slug: "tangente",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In geometria, la retta che tocca una curva in un unico punto senza attraversarla. In trigonometria, " +
    "funzione pari al rapporto tra seno e coseno di un angolo. Nel linguaggio comune italiano, indica " +
    "una somma di denaro versata illecitamente per ottenere favori o appalti — termine entrato nel " +
    "lessico quotidiano con lo scandalo Tangentopoli degli anni Novanta.",

  shortDefinition:
    "Retta tangente a una curva, funzione trigonometrica, o — nel parlato — bustarella illecita.",

  register: ["tecnico", "comune"],
  domains: ["matematica", "figurato", "politica"],

  etymology:
    "Dal latino tangens (participio presente di tangere, 'toccare'). Il senso matematico viene " +
    "dall'idea della retta che tocca senza attraversare; il senso corrotto viene dall'idea di " +
    "'toccare' denaro — prendere la propria parte.",

  examples: [
    "La tangente a una curva in un punto rappresenta la pendenza della curva in quel punto esatto.",
    "Tangentopoli ha trasformato una parola matematica in un simbolo di corruzione sistemica.",
    "La funzione tangente diverge a π/2: uno dei comportamenti più bruschi dell'analisi elementare.",
    "Non era una bustarella nel senso classico — era una tangente ben strutturata, con fattura.",
  ],

  synonyms: [
    {
      term: "bustarella",
      register: "colloquiale",
      context: "nel senso corruttivo, termine più informale e diretto",
    },
    {
      term: "mazzetta",
      register: "colloquiale",
      context: "sinonimo nel parlato, con connotazione più materiale",
    },
    {
      term: "corruzione",
      register: "formale",
      context: "il fenomeno di cui la tangente è uno strumento",
    },
  ],

  antonyms: [
    {
      term: "secante",
      register: "tecnico",
      context: "in geometria, la retta che attraversa la curva in due punti — opposta alla tangente",
    },
  ],

  relatedWords: [
    "tangente trigonometrica",
    "Tangentopoli",
    "corruzione",
    "secante",
    "seno",
    "coseno",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/tangente/",
    wiktionary: "https://it.wiktionary.org/wiki/tangente",
  },

  paroliereNote:
    "Tangente è uno dei casi più noti di slittamento semantico nella storia recente dell'italiano. " +
    "Prima del 1992 era quasi esclusivamente un termine matematico; dopo Mani Pulite è diventata " +
    "una delle parole più cariche della lingua italiana contemporanea. " +
    "L'etimologia — toccare — le dà una precisione quasi ironica: denaro che si tocca senza dichiararlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tangente — Il Paroliere",
    description:
      "Definizione originale di 'tangente': retta che tocca una curva; nel parlato, bustarella illecita. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
