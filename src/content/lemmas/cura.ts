// Il Paroliere — Lemma: cura
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cura: LemmaEntry = {
  lemma: "cura",
  slug: "cura",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Attenzione sostenuta e intenzionale rivolta a qualcosa o a qualcuno. La cura " +
    "implica continuità: non è un gesto isolato ma una disposizione che si rinnova " +
    "nel tempo. Può indicare l'atto medico di trattare una malattia, la sollecitudine " +
    "verso una persona amata, la precisione artigianale nel fare bene un lavoro, o " +
    "l'insieme delle preoccupazioni che pesano sull'animo. In tutti i casi, la cura " +
    "presuppone una forma di responsabilità verso ciò a cui si presta attenzione.",

  shortDefinition:
    "Attenzione continua e responsabile verso qualcosa o qualcuno.",

  register: ["comune", "formale", "letterario"],
  domains: ["medicina", "etica", "relazioni", "lavoro"],

  etymology:
    "Dal latino cura, 'preoccupazione, premura, attenzione'. Radice indoeuropea " +
    "*kois-, legata all'idea di attenzione vigile. Il termine ha attraversato l'intera " +
    "storia della lingua italiana mantenendo la sua ricchezza semantica.",

  examples: [
    "La cura con cui aveva preparato il pranzo raccontava qualcosa che le parole non avrebbero saputo dire.",
    "Seguiva la terapia con cura, convinto che ogni giorno contasse.",
    "Aveva preso in cura il giardino del vecchio vicino come se fosse stato il suo.",
    "Le cure quotidiane della bottega lo tenevano occupato dall'alba al tramonto.",
  ],

  synonyms: [
    {
      term: "attenzione",
      register: "comune",
      context: "sottolinea la dimensione cognitiva e percettiva",
    },
    {
      term: "premura",
      register: "comune",
      context: "enfatizza la sollecitudine affettiva verso gli altri",
    },
    {
      term: "diligenza",
      register: "formale",
      context: "con accento sulla costanza e sulla precisione nel fare",
    },
    {
      term: "cura medica",
      register: "tecnico",
      context: "in contesti clinici e sanitari",
    },
  ],

  antonyms: [
    {
      term: "trascuratezza",
      register: "comune",
      context: "mancanza di attenzione sostenuta",
    },
    {
      term: "negligenza",
      register: "formale",
      context: "omissione colpevole di attenzione dovuta",
    },
    {
      term: "indifferenza",
      register: "comune",
      context: "assenza di interesse o coinvolgimento",
    },
  ],

  relatedWords: [
    "curare",
    "curato",
    "curatore",
    "premura",
    "attenzione",
    "diligenza",
    "responsabilità",
    "cura di sé",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/cura/",
    wiktionary: "https://it.wiktionary.org/wiki/cura",
  },

  paroliereNote:
    "Il filosofo Carlo Rovelli ha scritto che la cura è forse la categoria più " +
    "fondamentale dell'esperienza umana. Non è un'osservazione accademica: chiunque " +
    "abbia vegliato qualcuno di notte sa che la cura è un tempo diverso, lento, " +
    "pesante di presenza. In italiano, la parola porta con sé sia il fardello " +
    "(le cure della vita) sia il dono (prendersi cura di). Questa ambivalenza — " +
    "onere e grazia insieme — è rara nelle lingue europee.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Cura — Il Paroliere",
    description:
      "Definizione originale di 'cura': attenzione continua e responsabile verso " +
      "qualcosa o qualcuno. Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-18",
  updatedAt: "2026-05-18",
};
