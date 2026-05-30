// Il Paroliere — Lemma: curry
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const curry: LemmaEntry = {
  lemma: "curry",
  slug: "curry",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Miscela di spezie macinate di origine indiana — curcuma, coriandolo, cumino, " +
    "pepe, fieno greco e altre a seconda della regione — usata come condimento per " +
    "piatti di carne, pesce, legumi e verdure. Il termine è un'approssimazione " +
    "coloniale britannica del termine tamil kari: in India non esiste una singola " +
    "ricetta di curry, ma centinaia di varianti regionali con caratteri propri.",

  shortDefinition:
    "Miscela di spezie di origine indiana; in Italia, la polvere gialla usata per " +
    "aromatizzare riso e piatti esotici.",

  register: ["comune", "gastronomico"],
  domains: ["gastronomia", "storia", "cultura"],

  etymology:
    "Dall'inglese curry, a sua volta dal tamil kari — salsa, condimento di verdure. " +
    "Il termine si diffonde in Europa attraverso la mediazione coloniale britannica " +
    "nel XVIII–XIX secolo e arriva in italiano nella sua forma anglicizzata.",

  examples: [
  ],

  synonyms: [
    { term: "masala", register: "gastronomico", context: "termine indiano per miscela di spezie, più specifico e preciso" },
    { term: "speziato", register: "comune", context: "aggettivo descrittivo, non un sinonimo preciso" }
  ],

  relatedWords: [
    "curcuma",
    "peperoncino"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/curry"
  },

  paroliereNote:
    "Il curry come lo conosciamo in Italia — quella polvere gialla in busta da " +
    "supermercato — è un'invenzione della semplificazione commerciale britannica. In " +
    "India il concetto stesso di 'curry generico' non esiste: ogni regione, ogni " +
    "famiglia, ogni occasione ha la sua miscela. Usarlo come categoria unica è come " +
    "dire 'pasta italiana' per coprire tutto, dal pesto alla carbonara.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Curry — Il Paroliere",
    description:
      "Curry: miscela di spezie di origine indiana. Storia, etimologia e uso in Italia " +
      "— Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};