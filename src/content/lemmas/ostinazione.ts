// Il Paroliere — Lemma: ostinazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ostinazione: LemmaEntry = {
  lemma: "ostinazione",
  slug: "ostinazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Disposizione a non cedere su una posizione, un'intenzione o un " +
    "comportamento, anche quando ostacoli o argomenti contrari ne sconsigliano " +
    "la prosecuzione. A differenza della testardaggine, non presuppone " +
    "irragionevolezza; a differenza della caparbietà, non porta con sé un " +
    "giudizio di valore positivo. Il segno dell'ostinazione — forza o limite " +
    "— lo determina ciò che si persegue.",

  shortDefinition:
    "Tenacia nel mantenere una posizione o un'azione nonostante resistenze esterne; né vizio né virtù, dipende da ciò che si difende.",

  register: ["comune"],
  domains: ["carattere", "psicologia", "comportamento"],

  etymology:
    "Dal latino obstinatio, derivato di obstinare ('tener fermo, essere " +
    "irremovibile'), composto di ob- ('contro') e un elemento legato a stare " +
    "('stare, restare'). L'immagine è di chi si pianta contro qualcosa e " +
    "non si muove.",

  examples: [
    "L'ostinazione con cui continuava a provare, anche dopo i rifiuti, " +
    "aveva qualcosa di commovente.",
    "Quell'ostinazione nel voler fare tutto da solo era diventata un " +
    "freno, non una forza.",
    "Ci vuole ostinazione per portare avanti certi progetti — ma serve " +
    "sapere quando smettere.",
    "La sua ostinazione non era chiusura mentale: era la forma che prendeva " +
    "la sua fiducia nel lavoro.",
  ],

  synonyms: [
    {
      term: "caparbietà",
      register: "comune",
      context: "ostinazione con sfumatura positiva — la testa dura che porta risultati",
    },
    {
      term: "testardaggine",
      register: "comune",
      context: "ostinazione con sfumatura negativa — chiusura irragionevole",
    },
    {
      term: "tenacia",
      register: "comune",
      context: "perseveranza verso un obiettivo — connotazione più positiva",
    },
    {
      term: "pervicacia",
      register: "formale",
      context: "ostinazione puntigliosa — termine più letterario e più negativo",
    },
  ],

  antonyms: [
    {
      term: "cedevolezza",
      register: "comune",
      context: "tendenza a cedere alle pressioni — opposto diretto",
    },
    {
      term: "flessibilità",
      register: "comune",
      context: "capacità di adattarsi e cambiare posizione",
    },
    {
      term: "arrendevolezza",
      register: "comune",
      context: "disposizione a rinunciare senza resistenza",
    },
  ],

  relatedWords: [
    "ostinato",
    "ostinatamente",
    "caparbietà",
    "testardaggine",
    "tenacia",
    "pervicacia",
    "perseveranza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ostinazione/",
    wiktionary: "https://it.wiktionary.org/wiki/ostinazione",
  },

  paroliereNote:
    "Ostinazione è la parola più onesta della famiglia: non giudica, non " +
    "ammira, descrive. È il termine neutro che lascia aperta la domanda se " +
    "quella tenacia sia forza o limite — e la risposta dipende sempre da " +
    "cosa si sta difendendo, non da come lo si difende. Forse è per questo " +
    "che è così utile: non ci esime dal giudizio, ci costringe a farlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ostinazione — Il Paroliere",
    description:
      "Definizione originale di 'ostinazione': tenacia né vizio né virtù — " +
      "dipende da ciò che si persegue. Differenze con caparbietà e testardaggine.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
