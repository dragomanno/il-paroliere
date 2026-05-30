// Il Paroliere — Lemma: curcuma
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const curcuma: LemmaEntry = {
  lemma: "curcuma",
  slug: "curcuma",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Pianta rizomatosa tropicale (Curcuma longa) della famiglia delle Zingiberacee, " +
    "originaria del subcontinente indiano. Il suo rizoma essiccato e macinato produce " +
    "una polvere gialla intensa, componente principale del curry e colorante naturale " +
    "alimentare (E100). Il principio attivo curcumina è oggetto di ricerca per le sue " +
    "proprietà antinfiammatorie e antiossidanti, anche se le concentrazioni " +
    "necessarie a effetti terapeutici rilevanti restano difficili da raggiungere con " +
    "l'uso alimentare ordinario.",

  shortDefinition:
    "Pianta tropicale dal rizoma giallo; spezia fondamentale del curry, studiata per " +
    "le proprietà della curcumina.",

  register: ["comune", "tecnico"],
  domains: ["gastronomia", "botanica", "medicina"],

  etymology:
    "Dal latino medievale curcuma, probabilmente di origine araba (kurkum, zafferano, " +
    "per il colore), a sua volta forse dall'hindi-sanscrito kunkuma. La pianta viene " +
    "descritta nelle fonti arabe e persiane medievali prima di raggiungere l'Europa " +
    "attraverso le rotte delle spezie.",

  examples: [
  ],

  synonyms: [
    { term: "zafferano delle Indie", register: "storico", context: "denominazione europea antica, per il colore giallo simile allo zafferano" },
    { term: "terra merita", register: "storico/farmaceutico", context: "nome latino medievale usato in erboristeria" }
  ],

  relatedWords: [
    "curry",
    "peperoncino"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/curcuma"
  },

  paroliereNote:
    "La curcuma è diventata negli ultimi anni simbolo del wellness occidentale: latte " +
    "dorato, integratori, ricette detox. Ma nella medicina ayurvedica indiana è usata " +
    "da millenni con una complessità terapeutica che le mode social difficilmente " +
    "restituiscono. La curcumina è reale — il problema è la biodisponibilità: senza " +
    "piperina (il principio attivo del pepe nero) l'organismo ne assorbe pochissima.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Curcuma — Il Paroliere",
    description:
      "Curcuma: la spezia gialla del curry. Botanica, curcumina, proprietà medicinali — " +
      "Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};