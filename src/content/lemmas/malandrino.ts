// Il Paroliere — Lemma: MALANDRINO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malandrino: LemmaEntry = {
  lemma: "malandrino",
  slug: "malandrino",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Un tempo brigante di strada, figura del brigantaggio meridionale. " +
    "Col tempo il termine si è ammorbidito: oggi indica chi sa muoversi ai margini delle regole " +
    "con una certa abilità — furbo, un po' furfante, a volte quasi ammirato per l'astuzia. " +
    "Conserva una patina letteraria che birbante non ha.",
  shortDefinition:
    "Individuo astuto e furfante, dall'originario significato di brigante; registro colloquiale con patina letteraria.",
  register: ["colloquiale", "letterario", "ironico"],
  domains: ["storia", "comportamento", "letteratura popolare"],
  etymology:
    "Dall'antico francese malandrin (brigante di strada), a sua volta dal latino medievale " +
    "malandrinus. Entra nell'italiano meridionale e toscano come denominazione del bandito " +
    "di campagna, poi si ammorbidisce progressivamente nell'uso popolare e letterario.",
  examples: [
    "Era un malandrino della vecchia scuola: sapeva il fatto suo, ma non si spingeva mai troppo in là.",
    "I briganti del Sud italiano — i malandrini per eccellenza — hanno alimentato un immaginario che dura ancora.",
    "«Malandrino!» — detto con un sorriso, è quasi un complimento.",
  ],
  synonyms: [
    { term: "furfante", register: "comune-letterario", context: "simile per ammorbidimento semantico, più letterario" },
    { term: "birbante", register: "colloquiale", context: "simile percorso semantico, registro più leggero" },
    { term: "brigante", register: "storico", context: "il significato originale, senza ammorbidimento" },
    { term: "imbroglione", register: "colloquiale", context: "con enfasi sul metodo dell'inganno" },
    { term: "mascalzone", register: "colloquiale", context: "più espressivo e teatrale, meno storico" },
  ],
  antonyms: [
    { term: "onesto", register: "comune", context: "di condotta retta" },
  ],
  relatedWords: [
    "brigante", "furfante", "birbante", "imbroglione", "mascalzone",
    "farabutto", "malacarne", "malavita", "canaglia",
  ],
  sourceLinks: {},
  paroliereNote:
    "Malandrino e birbante hanno percorso la stessa strada: dal crimine all'ironia, " +
    "dalla condanna all'affetto. " +
    "La differenza è che malandrino porta ancora con sé il profumo della campagna meridionale, " +
    "del cavallo e della lupara — birbante sa di città e di commedia.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Malandrino — Il Paroliere",
    description:
      "Definizione originale di 'malandrino': brigante nell'uso storico, individuo astuto e furfante nell'uso contemporaneo. Radici nel brigantaggio meridionale italiano.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
