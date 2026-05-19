// Il Paroliere — Lemma: consuetudine
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const consuetudine: LemmaEntry = {
  lemma: "consuetudine",
  slug: "consuetudine",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Pratica collettiva che si è sedimentata nel tempo fino a diventare norma non scritta: non appartiene " +
    "a un singolo, ma a un gruppo, a una comunità, a un'epoca. In diritto designa la fonte normativa che " +
    "nasce dall'uso costante e dalla convinzione condivisa della sua obbligatorietà — ciò che i giuristi " +
    "chiamano opinio iuris ac necessitatis.",

  shortDefinition:
    "Norma non scritta nata dall'uso ripetuto di una comunità; in diritto, fonte autonoma fondata sull'uso costante e sull'opinio iuris.",

  register: ["comune", "formale"],
  domains: ["tempo", "abitudini", "diritto"],

  etymology:
    "Dal latino consuetudo (genitivo consuetudinis), derivato di consuescere, 'abituarsi, prendere l'abitudine'. " +
    "Composto di con- (insieme) e suescere (abituarsi). Attestato in italiano dal Duecento.",

  examples: [
    "Era consuetudine nel paese che i vicini si aiutassero durante il raccolto, senza chiederlo.",
    "Alcune consuetudini sopravvivono alle leggi che le avrebbero dovute sostituire.",
    "In diritto internazionale la consuetudine è fonte primaria, al pari dei trattati.",
    "Non era una regola scritta da nessuna parte: era solo la consuetudine, e bastava.",
  ],

  synonyms: [
    {
      term: "usanza",
      register: "comune",
      context: "più legata alle tradizioni locali o folcloristiche",
    },
    {
      term: "abitudine",
      register: "comune",
      context: "individuale, non necessariamente collettiva come la consuetudine",
    },
    {
      term: "tradizione",
      register: "comune",
      context: "con sfumatura di trasmissione intergenerazionale più marcata",
    },
  ],

  antonyms: [
    {
      term: "novità",
      register: "comune",
      context: "ciò che rompe la continuità della consuetudine",
    },
    {
      term: "eccezione",
      register: "comune",
      context: "caso singolo che devia dalla norma consuetudinaria",
    },
  ],

  relatedWords: [
    "consueto",
    "consuetudinario",
    "usanza",
    "tradizione",
    "abitudine",
    "norma",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/consuetudine/",
    wiktionary: "https://it.wiktionary.org/wiki/consuetudine",
  },

  paroliereNote:
    "La consuetudine è una delle forme più antiche di diritto — e forse la più onesta, " +
    "perché nasce dal comportamento reale delle persone prima ancora che qualcuno lo codifichi. " +
    "Nel diritto internazionale regola ancora oggi rapporti tra Stati in assenza di trattati. " +
    "Nel parlato quotidiano ha perso parte della sua precisione giuridica, ma conserva qualcosa " +
    "di più pesante dell'abitudine: la consuetudine non è solo quello che faccio, è quello che siamo abituati a fare insieme.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Consuetudine — Il Paroliere",
    description:
      "Definizione originale di 'consuetudine': norma non scritta nata dall'uso collettivo; in diritto, fonte autonoma. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
