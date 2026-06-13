// Il Paroliere — Lemma: spudoratezza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const spudoratezza: LemmaEntry = {
  lemma: "spudoratezza",
  slug: "spudoratezza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "colloquiale"],
  domains: ["etica", "comportamento sociale", "psicologia"],

  definition:
    "Assenza totale di pudore o ritegno, manifestata in modo aperto e ostentato: chi " +
    "è spudorato non solo non prova vergogna, ma sembra non concepire che la vergogna " +
    "possa essere una risposta appropriata alla propria condotta. La spudoratezza va " +
    "oltre la sfacciataggine: non è solo superare i limiti del decoro, ma farlo con " +
    "un’incapacità — o un rifiuto — di percepire che quei limiti esistano e abbiano " +
    "un senso.",

  shortDefinition:
    "Assenza totale e ostentata di pudore: non solo si violano i limiti del decoro, " +
    "ma non si concepisce che quei limiti abbiano senso.",

  etymology:
    "Da «spudorato», composto dal prefisso s- privativo e «pudore» (dal latino pudor). " +
    "Letteralmente: «senza pudore», con la connotazione rafforzata dal suffisso " +
    "-ezza che indica un tratto stabile e non un atto isolato.",

  examples: [
    "La spudoratezza di certe campagne pubblicitarie non è solo cattivo gusto: è la scelta deliberata di provocare per occupare attenzione.",
    "Mentire sapendo di essere smentiti immediatamente dai fatti e non mostrare alcun imbarazzo: questa è spudoratezza, non solo disonestà.",
    "C’è una spudoratezza allegra — quella del buffone, del mattatore — che non offende nessuno e fa ridere. E c’è una spudoratezza che chiude ogni conversazione.",
    "La differenza tra sfacciataggine e spudoratezza è di intensità e di consapevolezza: lo sfacciato sa che supera un limite, lo spudorato non vede il limite.",
  ],

  synonyms: [
    { term: "sfacciataggine", register: "comune", note: "Meno intenso: la sfacciataggine è consapevole del limite che supera." },
    { term: "impudenza", register: "comune-formale", note: "Più legato all’atto; la spudoratezza è il tratto stabile e totale." },
  ],

  antonyms: [
    { term: "pudore", register: "comune-letterario", note: "L’emozione che la spudoratezza non conosce o non lascia agire." },
    { term: "verecondia", register: "letterario", note: "La virtù opposta nella tradizione classica." },
  ],

  relatedWords: ["sfacciataggine", "impudenza", "vergogna", "arroganza", "fanfarone"],
  sourceLinks: {},

  paroliereNote:
    "La spudoratezza porta con sé una domanda interessante: è un vizio o un sintomo? " +
    "In certi casi — nella politica, nella comunicazione pubblica — sembra quasi " +
    "un’abilità: chi non prova vergogna non può essere fermato dalla vergogna. In " +
    "altri contesti è la spia di qualcosa che non funziona nell’empatia morale. " +
    "La domanda non è se la spudoratezza faccia male a chi la subisce — fa sempre " +
    "male — ma cosa dice di chi la pratica.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "spudoratezza — l’assenza totale di pudore tra etica e comunicazione pubblica",
    description: "Che cos’è la spudoratezza: definizione etica, differenza da sfacciataggine e impudenza, e la domanda se sia un vizio o un sintomo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
