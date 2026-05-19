// Il Paroliere — Lemma: pervicace
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pervicace: LemmaEntry = {
  lemma: "pervicace",
  slug: "pervicace",
  partOfSpeech: "aggettivo",

  definition:
    "Chi non cede di fronte a ostacoli, contraddizioni o evidenze che ne smentirebbero le posizioni: una tenacia che porta in sé qualcosa di assoluto, quasi impermeabile alla ragione. A differenza di «ostinato», dice qualcosa di più radicale — una resistenza che non si piega e non cerca giustificazioni. Può essere ammirevole o esasperante, spesso entrambe le cose insieme.",

  shortDefinition:
    "Che persiste con tenacia assoluta in un proposito, anche contro ogni evidenza contraria; più radicale di ostinato.",

  register: ["comune", "letterario"],
  domains: ["carattere"],

  etymology:
    "Dal latino pervicax, da per- (attraverso, intensivo) + vincere (vincere, avere la meglio); chi vince attraverso tutto.",

  examples: [],

  synonyms: [
      {
        term: "ostinato",
        register: "comune",
        context: "meno assoluto di pervicace, ammette ancora una logica interna",
      },
      {
        term: "tenace",
        register: "comune",
        context: "persistenza con connotazione più neutra o positiva",
      },
      {
        term: "irriducibile",
        register: "comune",
        context: "che non si lascia ridurre o piegare da nulla",
      },
    ],

  antonyms: [
      {
        term: "arrendevole",
        register: "comune",
        context: "disposto a cedere di fronte a pressioni o argomenti",
      },
      {
        term: "malleabile",
        register: "comune",
        context: "che si adatta facilmente alle circostanze",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/pervicace/",
    wiktionary: "https://it.wiktionary.org/wiki/pervicace",
  },

  paroliereNote:
    "Pervicace è una parola che porta già nel suono la sua qualità: quella c finale aspra, quel -vicace che ricorda vinca. La letteratura italiana la usa spesso per personaggi che hanno ragione — o torto — con uguale determinazione. Non è una parola neutrale: usarla significa già prendere posizione su chi si descrive.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Pervicace — Il Paroliere",
    description:
      "Definizione originale di 'pervicace': tenacia assoluta che non cede nemmeno di fronte all'evidenza. Con sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
