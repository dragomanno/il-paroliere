// Il Paroliere — Lemma: esclusione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const esclusione: LemmaEntry = {
  lemma: "esclusione",
  slug: "esclusione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Il processo, o la condizione risultante, per cui una persona o un gruppo " +
    "viene tenuto fuori da un contesto sociale, economico o istituzionale — per " +
    "decisione esplicita o per effetto di barriere strutturali mai messe in " +
    "discussione. Può essere formale e dichiarata, oppure operare in modo " +
    "silenzioso attraverso regole che, apparentemente neutre, favoriscono di " +
    "fatto solo chi già appartiene al gruppo dominante.",

  shortDefinition:
    "Il tenere fuori una persona o un gruppo da un contesto sociale, per decisione esplicita o barriere strutturali.",

  register: ["comune", "tecnico"],
  domains: ["sociologia", "politica", "lavoro"],

  etymology:
    "Dal latino exclusio, derivato di excludere, «chiudere fuori». Contrario " +
    "diretto e coevo di inclusione, con cui condivide la radice latina claudere.",

  examples: [
    "L'esclusione dal mercato del lavoro colpisce in modo sproporzionato chi non ha potuto studiare.",
    "Non fu un'esclusione dichiarata: semplicemente, nessuna regola era pensata per includerlo.",
    "L'esclusione sociale si misura non solo in mancanza di reddito, ma in isolamento e perdita di legami.",
  ],

  synonyms: [
    {
      term: "emarginazione",
      register: "letterario",
      context: "enfatizza il processo graduale più che l'atto puntuale",
    },
    {
      term: "marginalizzazione",
      register: "tecnico",
      context: "termine sociologico, spesso riferito a dinamiche strutturali e di lungo periodo",
    },
  ],

  antonyms: [
    {
      term: "inclusione",
      register: "comune",
      context: "l'antonimo diretto: l'accoglienza piena in un contesto sociale",
    },
  ],

  relatedWords: ["inclusione", "emarginazione", "stigma", "discriminazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/esclusione",
  },

  paroliereNote:
    "L'esclusione più difficile da correggere non è quella dichiarata con un " +
    "divieto esplicito, ma quella che si annida in regole pensate per un solo tipo " +
    "di persona senza che nessuno se ne accorga: non serve escludere " +
    "attivamente, quando il sistema è già costruito per includere solo alcuni.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Esclusione — Il Paroliere",
    description:
      "Definizione originale di 'esclusione': il tenere fuori una persona o un " +
      "gruppo da un contesto sociale. Esclusione dichiarata e strutturale, con esempi ed etimologia.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
