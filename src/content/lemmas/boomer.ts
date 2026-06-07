// Il Paroliere — Lemma: boomer
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const boomer: LemmaEntry = {
  lemma: "boomer",
  slug: "boomer",
  partOfSpeech: "sostantivo",
  gender: "maschile/femminile invariabile",
  register: ["colloquiale", "comune"],
  domains: ["società", "cultura digitale", "sociologia generazionale"],

  definition:
    "Abbreviazione informale di baby boomer: persona nata tra il 1946 e il 1964 " +
    "(Pew Research), nel periodo di forte crescita demografica seguito alla Seconda " +
    "guerra mondiale. Nel linguaggio giovanile contemporaneo il termine ha acquisito " +
    "una sfumatura ironica e spesso sprezzante: usato da un giovane, «boomer» indica " +
    "chi fatica ad accettare il cambiamento, chi giudica le nuove generazioni con " +
    "sufficienza, chi difende abitudini o valori percepiti come sorpassati. In questa " +
    "accezione è ormai quasi sinonimo di retrogrado o parruccone.",

  shortDefinition:
    "Chi è nato tra il 1946 e il 1964; nel gergo giovanile, chi rifiuta il cambiamento " +
    "e giudica con sufficienza le nuove generazioni.",

  etymology:
    "Dall'inglese baby boomer, composto di baby («bambino») e boomer, da boom " +
    "(«esplosione demografica»); il termine entra nell'italiano come prestito non " +
    "adattato, prima nel lessico sociologico, poi nel linguaggio colloquiale giovanile " +
    "con slittamento semantico verso il dispregiativo.",

  examples: [
    "«Ok, boomer» è diventata la risposta standard dei giovani a chi li accusa di non voler lavorare abbastanza.",
    "Mio zio ha commentato il mio lavoro da remoto con una critica così fuori tempo che l'ho guardato e ho pensato: boomer totale.",
  ],

  synonyms: [
    { term: "parruccone", register: "colloquiale", note: "sinonimo quasi perfetto nell'accezione dispregiativa" },
    { term: "retrogrado", register: "comune", note: "→ vedi lemma; più neutro, meno generazionale" },
    { term: "tradizionalista", register: "comune", note: "meno connotato negativamente" },
  ],

  antonyms: [
    { term: "millennial", register: "colloquiale", note: "nella contrapposizione pop tra generazioni" },
    { term: "GenZ", register: "colloquiale", note: "nella contrapposizione pop tra generazioni" },
  ],

  relatedWords: ["baby boomer", "retrogrado", "parruccone", "GenX", "millennial", "GenZ", "Generazione Alpha", "Generazione Beta"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/boomer",
  },

  paroliereNote:
    "«Ok, boomer» — la risposta diventata virale su TikTok nel 2019 — ha cristallizzato " +
    "un uso che esisteva già, ma gli ha dato forma di slogan generazionale. Vale la pena " +
    "distinguere: nell'uso sociologico, «boomer» è neutro e descrittivo; nell'uso giovanile " +
    "online è quasi sempre ironico o provocatorio. Il termine funziona meglio come aggettivo " +
    "predicativo («sei proprio un boomer») che come insulto diretto, perché porta con sé più " +
    "scherno che distanza vera. Nella lingua italiana ha generato derivati spontanei come " +
    "«boomerate» (azioni o commenti tipici di un boomer).",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Boomer — significato, origine e uso nel linguaggio giovanile | Il Paroliere",
    description:
      "Boomer: abbreviazione di baby boomer, nato tra il 1946 e il 1964. Nel gergo giovanile, " +
      "chi rifiuta il cambiamento. Definizione originale, etimologia e nota editoriale.",
  },

  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
