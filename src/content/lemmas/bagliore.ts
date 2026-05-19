// Il Paroliere — Lemma: bagliore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bagliore: LemmaEntry = {
  lemma: "bagliore",
  slug: "bagliore",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Luce viva e improvvisa che nasce e svanisce prima che l'occhio possa abituarsi — un lampo che abbaglia " +
    "senza restare. In senso figurato, indica un momento di chiarezza improvvisa che attraversa il pensiero " +
    "o la coscienza: un'intuizione, un'emozione intensa che illumina per un istante qualcosa che era " +
    "rimasto nell'ombra.",

  shortDefinition:
    "Luce intensa e fugace che abbaglia di colpo; in senso figurato, un'intuizione o un'emozione che illumina per un istante.",

  register: ["comune", "letterario"],
  domains: ["percezione", "figurato"],

  etymology:
    "Da bàgliore, derivato del verbo abbagliare, a sua volta da ab- e *bagliare, " +
    "forse connesso al latino badius ('rossiccio, lucente'). Attestato in italiano dal Trecento.",

  examples: [
    "Un bagliore improvviso illuminò la stanza per un secondo, poi tutto tornò scuro.",
    "Ebbe un bagliore di lucidità nel mezzo del panico — e fu abbastanza.",
    "Il bagliore del tramonto sull'acqua durava così poco da sembrare un'invenzione.",
    "Tra una frase e l'altra, un bagliore di comprensione: aveva capito prima di sapere di aver capito.",
  ],

  synonyms: [
    {
      term: "lampo",
      register: "comune",
      context: "più legato al fenomeno atmosferico, meno usato in senso figurato raffinato",
    },
    {
      term: "guizzo",
      register: "comune",
      context: "movimento rapido di luce, con connotazione più fisica",
    },
    {
      term: "barlume",
      register: "comune",
      context: "luce fievole e persistente, quasi opposta al bagliore per intensità",
    },
  ],

  antonyms: [
    {
      term: "oscurità",
      register: "comune",
      context: "assenza di luce, condizione permanente opposta al bagliore",
    },
    {
      term: "penombra",
      register: "comune",
      context: "luce attenuata e stabile, senza il carattere improvviso del bagliore",
    },
  ],

  relatedWords: [
    "abbagliare",
    "lampo",
    "barlume",
    "fulgore",
    "guizzo",
    "luminosità",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/bagliore/",
    wiktionary: "https://it.wiktionary.org/wiki/bagliore",
  },

  paroliereNote:
    "Bagliore è una delle poche parole italiane che fanno quasi vedere qualcosa mentre si pronunciano. " +
    "Il senso figurato — il bagliore di un'idea, di un ricordo, di una comprensione — funziona così bene " +
    "perché conserva la brevità del fenomeno fisico: un bagliore non dura, altrimenti è già altra cosa. " +
    "È questo limite temporale implicito che lo distingue da fulgore o splendore, parole che invece restano.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Bagliore — Il Paroliere",
    description:
      "Definizione originale di 'bagliore': luce intensa e fugace; in senso figurato, intuizione che illumina per un istante. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
