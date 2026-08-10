// Il Paroliere — Lemma: metonimia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const metonimia: LemmaEntry = {
  lemma: "metonimia",
  slug: "metonimia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["linguaggio", "retorica"],

  definition:
    "Figura retorica che consiste nel designare una cosa con il nome di un'altra, legata alla prima da un rapporto di contiguità logica reale — non di somiglianza, come nella metafora. I rapporti tipici su cui si fonda sono causa per effetto ('vivere del proprio lavoro' per 'del proprio stipendio'), contenente per contenuto ('bere un bicchiere'), autore per opera ('leggere Manzoni'), materia per oggetto ('la lama' per 'la spada'), luogo per istituzione ('Palazzo Chigi' per 'il governo'), strumento per chi lo usa ('la penna' per 'lo scrittore'). Concettualmente vicina alla sineddoche — con cui in molte grammatiche viene accorpata come sottocaso — la metonimia si distingue perché il legame è tra entità distinte e correlate, non tra parte e tutto della stessa entità.",

  shortDefinition:
    "Sostituzione di un termine con un altro legato al primo da un rapporto di contiguità reale — causa/effetto, contenitore/contenuto, autore/opera.",

  etymology:
    "Dal greco *metōnymía*, composto da *metá* «al di là, in cambio» e *ónoma* «nome»: letteralmente «cambio di nome» — la sostituzione lessicale che dà nome alla figura stessa.",

  examples: [
    "'Il Quirinale ha diramato una nota' è una metonimia: il palazzo (luogo) sta per la presidenza della Repubblica (istituzione).",
    "Dire 'ho bevuto un bicchiere intero' è una metonimia tanto comune da essere quasi invisibile: nessuno pensa davvero di bere il vetro.",
    "'Leggere Dante' significa leggere le opere di Dante: una metonimia autore-per-opera che usiamo ogni giorno senza accorgercene.",
    "In cronaca sportiva, 'la Ferrari ha vinto' è una metonimia che sostituisce la squadra e i piloti con il marchio dell'auto.",
  ],

  synonyms: [
    { term: "sineddoche", register: "tecnico", note: "Figura affine ma distinta: sostituzione tra parte e tutto della stessa entità, non tra entità contigue e separate." },
  ],

  antonyms: [
    { term: "designazione diretta", register: "comune", note: "L'uso del nome proprio dell'oggetto o del concetto, senza mediazione figurata." },
  ],

  relatedWords: ["iperbole", "litote", "perifrasi"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/metonimia/",
    wiktionary: "https://it.wiktionary.org/wiki/metonimia",
  },

  paroliereNote:
    "La metonimia è probabilmente la figura retorica più usata e meno riconosciuta come tale: 'il Cremlino ha dichiarato', 'la Casa Bianca smentisce', 'ha bevuto due bottiglie' sono tutte metonimie perfettamente funzionanti nel linguaggio giornalistico quotidiano, al punto da non sembrare affatto figure di stile. Questo la rende un ottimo caso di studio su come la retorica non sia un ornamento riservato alla letteratura, ma un meccanismo cognitivo di base con cui organizziamo il linguaggio ordinario: pensiamo per contiguità molto più spesso di quanto crediamo.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "metonimia — significato, esempi, differenza da sineddoche",
    description:
      "Che cos'è la metonimia: la figura retorica che sostituisce un termine con un altro legato da contiguità — causa/effetto, contenitore/contenuto, autore/opera.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
