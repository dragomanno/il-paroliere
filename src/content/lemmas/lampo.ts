// Il Paroliere — Lemma: lampo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lampo: LemmaEntry = {
  lemma: "lampo",
  slug: "lampo",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Scarica elettrica visibile che attraversa il cielo durante un temporale, producendo " +
    "una luce bianchissima e istantanea. Per analogia, qualunque cosa accada con quella stessa " +
    "subitaneità assoluta: un lampo di intuizione è un'idea che arriva prima di essere cercata, " +
    "un lampo di ira è un'emozione che brucia e svanisce in un respiro.",

  shortDefinition:
    "Scarica elettrica visibile nel cielo durante un temporale; per estensione, qualunque cosa accada con subitaneità assoluta.",

  register: ["comune", "letterario"],
  domains: ["meteorologia", "percezione", "figurato"],

  etymology:
    "Dal latino lampare (brillare, risplendere), a sua volta dal greco lampein. " +
    "La radice indoeuropea ha la stessa origine di lampada e lanterna: tutte parole che " +
    "portano la luce nel nome.",

  examples: [
    "Il lampo illuminò per un istante la faccia di chi stava dall'altra parte della strada.",
    "Ebbe un lampo di chiarezza alle tre di notte: aveva sbagliato tutto il ragionamento.",
    "La risposta arrivò come un lampo, prima ancora di aver finito la domanda.",
  ],

  synonyms: [
    {
      term: "fulmine",
      register: "comune",
      context:
        "propriamente la scarica intera (luce + tuono); nel parlato spesso usato come sinonimo di lampo",
    },
    {
      term: "bagliore",
      register: "comune",
      context: "luce intensa e fugace, ma meno subitanea e non necessariamente elettrica",
    },
    {
      term: "guizzo",
      register: "comune",
      context: "movimento rapido di luce, con connotazione più fisica e meno atmosferica",
    },
  ],

  antonyms: [
    {
      term: "oscurità",
      register: "comune",
      context: "assenza di luce, opposto del lampo",
    },
    {
      term: "penombra",
      register: "comune",
      context: "luce attenuata e stabile, senza l'istantaneità del lampo",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "barlume",
    "fulgore",
    "guizzo",
    "luminosità",
    "oscurità",
    "penombra",
    "fulmine",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/lampo/",
    wiktionary: "https://it.wiktionary.org/wiki/lampo",
  },

  paroliereNote:
    "Il lampo di genio è una metafora così consumata da essere quasi invisibile. Vale la pena " +
    "ricordare che la sua forza originale veniva proprio dall'idea di qualcosa di incontrollabile " +
    "e improvviso — non un'idea che si costruisce, ma una che arriva come una scarica. La " +
    "subitaneità è la cifra del lemma: un lampo che dura non è più un lampo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Lampo — definizione, etimologia e senso figurato | Il Paroliere",
    description:
      "Lampo: dalla scarica elettrica atmosferica all'intuizione fulminea. " +
      "Definizione originale, etimologia greca e uso figurato.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
