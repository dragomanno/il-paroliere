// Il Paroliere — Lemma: captatio benevolentiae
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const captatioBenevolentiae: LemmaEntry = {
  lemma: "captatio benevolentiae",
  slug: "captatio-benevolentiae",
  partOfSpeech: "locuzione-nominale",
  gender: "femminile",
  register: ["tecnico-retorico", "colto", "ironico"],
  domains: ["retorica", "diritto", "linguistica", "comunicazione"],

  definition:
    "Nella retorica classica, la parte iniziale del discorso — tipicamente " +
    "l'esordio dell'orazione giudiziaria o l'apertura di una lettera formale — " +
    "dedicata esplicitamente a conquistare la benevolenza e l'attenzione " +
    "dell'uditorio prima di entrare nel merito dell'argomento. Cicerone e i " +
    "manuali retorici latini la classificavano come primo passo obbligato di " +
    "ogni orazione efficace: elogiare i giudici, mostrare modestia sulle proprie " +
    "capacità oratorie, richiamare un interesse condiviso con il pubblico. " +
    "Nell'italiano contemporaneo la locuzione è sopravvissuta soprattutto in " +
    "ambito accademico, giornalistico e colloquiale-colto per indicare, spesso " +
    "con una punta di ironia, qualunque premessa che serva a predisporre " +
    "favorevolmente l'interlocutore prima di una richiesta, una critica o una " +
    "notizia scomoda — dal 'so che sei molto impegnato, ma...' di una email di " +
    "lavoro alla frase di cortesia con cui si apre un rimprovero.",

  shortDefinition:
    "Nella retorica classica, l'esordio del discorso dedicato a conquistare la " +
    "benevolenza dell'uditorio; oggi indica, spesso con ironia, ogni premessa " +
    "che predispone favorevolmente prima di una richiesta scomoda.",

  etymology:
    "Locuzione latina composta da captatio, -onis («ricerca, conquista», da " +
    "captare, frequentativo di capere, «prendere») e benevolentia («buona " +
    "disposizione d'animo», da bene + velle, «voler bene»). Termine tecnico " +
    "della manualistica retorica romana, in particolare della Rhetorica ad " +
    "Herennium e del De Inventione ciceroniano, dove indicava una delle funzioni " +
    "canoniche dell'exordium.",

  examples: [
    "Aprì la mail di lavoro con una captatio benevolentiae di rito — \"spero tu " +
      "stia passando un'estate serena\" — prima di comunicare il taglio del budget.",
    "In tribunale, l'avvocato dedicò i primi minuti a una captatio benevolentiae " +
      "verso la giuria, richiamando valori condivisi prima di affrontare i fatti.",
    "\"Sarò breve e diretto\", disse — e chiunque conoscesse la sua captatio " +
      "benevolentiae preferita sapeva che sarebbe seguito un discorso lunghissimo.",
    "La → lusinga iniziale rivolta al pubblico non era una captatio benevolentiae " +
      "innocente: preparava il terreno a una richiesta di fondi non dichiarata " +
      "in apertura.",
  ],

  synonyms: [
    {
      term: "exordium",
      register: "tecnico-retorico",
      context: "termine latino più ampio per l'intera parte introduttiva del discorso, di cui la captatio benevolentiae è una funzione specifica",
    },
    {
      term: "premessa ossequiosa",
      register: "ironico",
      context: "resa colloquiale e spesso critica dello stesso meccanismo",
    },
  ],

  antonyms: [
    {
      term: "attacco diretto",
      register: "comune",
      context: "entrare subito nel merito senza premesse di cortesia o predisposizione dell'uditorio",
    },
  ],

  relatedWords: [
    "retorica",
    "exordium",
    "lusinga",
    "persuasione",
    "oratoria",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/captatio_benevolentiae",
  },

  paroliereNote:
    "È una delle poche locuzioni tecniche della retorica classica sopravvissute " +
    "intatte, in latino, nell'italiano colto contemporaneo — segno che il " +
    "fenomeno che descrive è talmente ricorrente da non aver mai avuto bisogno " +
    "di un equivalente italiano più maneggevole. Va usata con precisione: non " +
    "ogni gentilezza in apertura di discorso è captatio benevolentiae in senso " +
    "tecnico, ma solo quella costruita specificamente per abbassare le difese " +
    "critiche dell'ascoltatore prima di un passaggio che, altrimenti, " +
    "incontrerebbe resistenza. Riconoscerla è un piccolo esercizio di igiene " +
    "critica: quando un discorso si apre con complimenti insistiti o richiami " +
    "a valori condivisi, vale la pena chiedersi cosa sta per arrivare subito dopo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Captatio benevolentiae — significato e uso attuale | Il Paroliere",
    description:
      "Che cos'è la captatio benevolentiae: origine nella retorica classica " +
      "latina, funzione nell'exordium, uso ironico e attuale in email e discorsi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
