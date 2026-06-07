// Il Paroliere — Lemma: flaccido
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const flaccido: LemmaEntry = {
  lemma: "flaccido",
  slug: "flaccido",
  partOfSpeech: "aggettivo",

  definition:
    "Privo di tono, di tensione, di consistenza elastica; molle in modo che denota " +
    "mancanza di vitalità o di struttura interna. Detto principalmente di tessuti " +
    "biologici — muscoli, pelle, strutture organiche — flaccido indica la perdita del " +
    "turgore fisiologico normale, sia per cause naturali (invecchiamento, disidratazione, " +
    "atrofia muscolare) sia per cause patologiche. In senso figurato, si usa per " +
    "descrivere qualsiasi cosa priva di energia, tensione o vigore: un discorso flaccido, " +
    "una risposta flaccida, un'istituzione flaccida. In neurologia, la paralisi flaccida " +
    "(o ipotonica) indica la perdita del tono muscolare causata da una lesione del " +
    "motoneurone periferico, in opposizione alla paralisi spastica (o ipertonica) " +
    "causata da lesioni del sistema nervoso centrale.",

  shortDefinition:
    "Molle, privo di tono e tensione; in medicina, che ha perso il turgore " +
    "fisiologico; in senso figurato, privo di vigore o energia.",

  register: ["comune", "tecnico"],
  domains: ["medicina", "biologia", "linguistica"],

  etymology:
    "Dal latino flaccidus, derivato di flaccus («floscio, cascante»). Stesso campo " +
    "di flosco, con cui condivide il significato di base.",

  examples: [
    "«Dopo sei settimane di immobilità forzata, i muscoli della coscia erano diventati flaccidi e avevano perso quasi un terzo del volume.»",
    "«La risposta del governo fu flaccida: molte parole, nessuna misura concreta.»",
    "«La paralisi flaccida che seguì all'incidente era di origine spinale: il tono muscolare era completamente assente.»",
  ],

  synonyms: [
    {
      term: "floscio",
      register: ["comune"],
      context: "molle, senza struttura",
    },
    {
      term: "ipotonico",
      register: ["medico"],
      context: "con tono muscolare ridotto",
    },
    {
      term: "fiacco",
      register: ["figurato"],
      context: "privo di energia o vigore",
    },
    {
      term: "inconsistente",
      register: ["figurato"],
      context: "senza sostanza né forza",
    },
  ],

  antonyms: [
    {
      term: "tonico",
      register: ["comune"],
      context: "con buon tono muscolare",
    },
    {
      term: "turgido",
      register: ["comune"],
      context: "pieno, gonfio, vitale",
    },
    {
      term: "elastico",
      register: ["comune"],
      context: "che ritorna alla forma originale",
    },
    {
      term: "vigoroso",
      register: ["figurato"],
      context: "pieno di forza ed energia",
    },
  ],

  relatedWords: [
    "tono muscolare",
    "atrofia",
    "ipotonia",
    "etereo",
    "flosco",
    "cedimento",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/flaccido/",
    wiktionary: "https://it.wiktionary.org/wiki/flaccido",
  },

  paroliereNote:
    "Flaccido è una parola che nella lingua quotidiana ha quasi esclusivamente una " +
    "connotazione negativa — nessuno vuole essere descritto come flaccido. Eppure nella " +
    "terminologia medica è semplicemente descrittivo, neutro: una paralisi flaccida non " +
    "è moralmente inferiore a una paralisi spastica, sono due condizioni cliniche diverse " +
    "con cause diverse. È un buon esempio di come lo stesso termine possa essere neutro " +
    "in un contesto tecnico e carico di giudizio in un contesto comune.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Flaccido — definizione medica e figurata | Il Paroliere",
    description:
      "Cosa significa flaccido in medicina, biologia e nel linguaggio comune. Paralisi " +
      "flaccida, tono muscolare, uso figurato. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
