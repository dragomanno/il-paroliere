// Il Paroliere — Lemma: ipotonia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ipotonia: LemmaEntry = {
  lemma: "ipotonia",
  slug: "ipotonia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico"],
  domains: ["medicina", "fisiologia", "neurologia"],

  definition:
    "Riduzione patologica del tono muscolare al di sotto dei valori normali. Il muscolo " +
    "ipotonico cede eccessivamente alla gravità e alla pressione esterna, manca della " +
    "tensione basale che mantiene la postura e la prontezza al movimento. Può essere " +
    "sintomo di patologie neurologiche, muscolari o metaboliche. Nel neonato, l’ipotonia " +
    "è uno dei primi segni che richiedono valutazione neurologica.",

  shortDefinition:
    "Riduzione patologica del tono muscolare; muscolo che cede eccessivamente senza opporre la tensione di base normale.",

  etymology:
    "Dal greco hypo “sotto, al di sotto del normale” e tonos “tensione, tono”. Composto " +
    "medico che segue il modello di ipertonia (tono eccessivo) e normotonia (tono normale).",

  examples: [
    "Il neonato ipotonico viene descritto dai clinici come 'bambino floppy': sembra non avere le resistenze posturali attese, si piega tra le braccia come se fosse privo di struttura.",
    "L’ipotonia da disuso si distingue dall’ipotonia neurologica: la prima si risolve con la rieducazione, la seconda richiede trattamento della causa sottostante.",
    "In anestesia, alcuni farmaci producono ipotonia controllata per facilitare l’intubazione: abbassare il tono muscolare è in certi contesti una scelta terapeutica deliberata.",
    "Nelle sindromi da ipermobilità articolare, l’ipotonia del tessuto connettivo produce articolazioni che si muovono oltre il range normale — con benefici in certi sport e rischi in altri.",
  ],

  synonyms: [
    { term: "ipotonia muscolare", register: "tecnico", note: "La forma estesa della denominazione clinica." },
    { term: "flaccidità", register: "tecnico-comune", note: "Il termine più descrittivo e meno tecnico per lo stesso fenomeno." },
  ],

  antonyms: [
    { term: "ipertonia", register: "tecnico", note: "Il contrario clinico: tono muscolare eccessivo, rigidità." },
    { term: "normotonia", register: "tecnico", note: "Il tono muscolare nella norma fisiologica." },
  ],

  relatedWords: ["tonicita", "atrofia", "flosco", "elasticita"],

  paroliereNote:
    "Ipotonia è uno di quei lemmi tecnici che non hanno quasi mai bisogno di essere " +
    "usati in modo figurato, perché il concetto che descrivono è già abbastanza preciso " +
    "e delimitato. Eppure c’è qualcosa nell’immagine del 'bambino floppy' — quella " +
    "mancanza di resistenza interna — che non è lontana da certi stati psicologici. " +
    "Anche una mente può avere ipotonia.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "ipotonia — significato clinico e fisiologico del tono muscolare ridotto",
    description: "Ipotonia: cos’è, cause, sintomi e differenze con flaccidità e atrofia. Il tono muscolare al di sotto della norma.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
