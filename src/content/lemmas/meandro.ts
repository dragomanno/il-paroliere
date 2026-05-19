// Il Paroliere — Lemma: meandro
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const meandro: LemmaEntry = {
  lemma: "meandro",
  slug: "meandro",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Curva larga e ripetuta con cui un corso d'acqua percorre il suo letto, piegando su sé stesso prima " +
    "di riprendere la direzione generale — segno visibile del tempo che un fiume prende per raggiungere " +
    "il mare. In senso figurato, ogni tortuosità di un percorso, di un ragionamento o di una narrazione " +
    "che non avanza in linea retta, ma si avvolge, devia, ritarda: i meandri di un'argomentazione, " +
    "i meandri della memoria.",

  shortDefinition:
    "Ampia curva sinuosa di un fiume; in senso figurato, ogni tortuosità di un percorso, di un pensiero o di una narrazione.",

  register: ["comune", "letterario"],
  domains: ["geografia", "figurato"],

  etymology:
    "Dal greco Maíandros, nome del fiume Meandro in Asia Minore (oggi Büyük Menderes, in Turchia), " +
    "celebre nell'antichità per le sue curve tortuose. Il nome del fiume è diventato il termine comune.",

  examples: [
    "Il fiume scorreva lento, piegandosi in meandri sempre più ampi prima della foce.",
    "Si perse nei meandri del ragionamento senza trovare il filo che cercava.",
    "I meandri della burocrazia non erano un difetto del sistema: erano il sistema.",
    "La memoria funziona per meandri, non per linee rette: ogni ricordo porta a un altro, inaspettato.",
  ],

  synonyms: [
    {
      term: "ansa",
      register: "tecnico",
      context: "curva di un corso d'acqua, termine geografico più specifico",
    },
    {
      term: "tortuosità",
      register: "comune",
      context: "qualità di ciò che non è retto, più astratto del meandro",
    },
    {
      term: "labirinto",
      register: "comune",
      context: "rete di percorsi contorti senza uscita evidente",
    },
  ],

  antonyms: [
    {
      term: "rettilineo",
      register: "comune",
      context: "che procede in linea retta senza deviazioni",
    },
    {
      term: "diretto",
      register: "comune",
      context: "che va al punto senza aggirarsi",
    },
  ],

  relatedWords: [
    "meandrare",
    "ansa",
    "sinuoso",
    "tortuoso",
    "labirinto",
    "deviazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/meandro/",
    wiktionary: "https://it.wiktionary.org/wiki/meandro",
  },

  paroliereNote:
    "Meandro è uno di quei termini geografici che hanno fatto il salto verso il linguaggio della mente " +
    "in modo talmente naturale da sembrare sempre stati lì. I meandri della memoria, " +
    "i meandri di un ragionamento: la metafora funziona perché il meandro non è un ostacolo — " +
    "è il percorso stesso, la forma che il movimento prende quando non ha fretta di arrivare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Meandro — Il Paroliere",
    description:
      "Definizione originale di 'meandro': curva sinuosa di un fiume; in senso figurato, tortuosità di pensiero o narrazione. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
