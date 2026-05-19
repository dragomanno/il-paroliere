// Il Paroliere — Lemma: sorpresa
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sorpresa: LemmaEntry = {
  lemma: "sorpresa",
  slug: "sorpresa",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Reazione emotiva improvvisa di fronte a qualcosa di inatteso, che interrompe per un istante il flusso " +
    "normale delle aspettative. Non ha valenza fissa: può essere lieta o sgradevole, a seconda di ciò che " +
    "la provoca. Si distingue dallo stupore per la sua brevità — è il momento prima che la mente riprenda a ragionare.",

  shortDefinition:
    "Reazione emotiva a qualcosa di inatteso; può essere piacevole o no, dura il tempo di un battito sospeso.",

  register: ["comune"],
  domains: ["emozioni", "psicologia", "comportamento"],

  etymology:
    "Dal francese antico surprise, participio passato di surprendre, 'cogliere all'improvviso'. " +
    "Composto di sur- (sopra, al di là) e prendre (prendere). Entrato in italiano nel Cinquecento.",

  examples: [
    "La sorpresa durò un secondo — poi il volto si ricompose in qualcosa di più controllato.",
    "Era una sorpresa brutta: il tipo che non ti aspetti e che però, pensandoci, avresti dovuto.",
    "Organizzarono una festa a sorpresa, e per una volta la sorpresa fu genuina.",
    "La vita riserva sorprese, si dice. Peccato che non specifichi mai di che tipo.",
  ],

  synonyms: [
    {
      term: "stupore",
      register: "comune",
      context: "più duraturo e intenso della sorpresa, spesso con connotazione positiva",
    },
    {
      term: "meraviglia",
      register: "comune",
      context: "tono più elevato, implica ammirazione oltre alla sorpresa",
    },
    {
      term: "sgomento",
      register: "comune",
      context: "sorpresa con valenza negativa, accompagnata da turbamento",
    },
  ],

  antonyms: [
    {
      term: "attesa",
      register: "comune",
      context: "stato psicologico opposto: anticipazione consapevole di ciò che accadrà",
    },
    {
      term: "prevedibilità",
      register: "comune",
      context: "qualità di ciò che si annuncia senza creare scarto con le aspettative",
    },
  ],

  relatedWords: [
    "sorprendere",
    "sorpreso",
    "stupore",
    "meraviglia",
    "inaspettato",
    "imprevisto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sorpresa/",
    wiktionary: "https://it.wiktionary.org/wiki/sorpresa",
  },

  paroliereNote:
    "La sorpresa è forse l'emozione più democratica: non distingue tra chi ha vissuto molto " +
    "e chi ha vissuto poco. Si installa nel momento in cui la realtà devia dal percorso previsto " +
    "e la mente non ha ancora avuto il tempo di ricalcolare. Dura pochissimo — ma in quel pochissimo " +
    "c'è qualcosa di molto simile alla verità.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sorpresa — Il Paroliere",
    description:
      "Definizione originale di 'sorpresa': reazione emotiva all'inatteso, dura il tempo di un battito sospeso. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
