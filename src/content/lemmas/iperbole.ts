// Il Paroliere — Lemma: iperbole
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const iperbole: LemmaEntry = {
  lemma: "iperbole",
  slug: "iperbole",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["linguaggio", "retorica", "matematica"],

  definition:
    "Figura retorica che amplifica la descrizione di un fatto o di un sentimento oltre i limiti della verosimiglianza, per eccesso o per difetto, con l'intento dichiarato — non ingannevole — di rendere più efficace, vivida o intensa una comunicazione. Proprio perché l'esagerazione è palese e riconoscibile come tale da chi ascolta, l'iperbole non mira a far credere il falso, ma a segnalare con enfasi l'intensità reale di un'emozione o di un giudizio: dire 'muoio di fame' non inganna nessuno sul fatto che si tratti solo di appetito. In un'accezione tecnica distinta e non retorica, iperbole è anche il nome di una curva conica in geometria analitica, luogo dei punti per cui la differenza delle distanze da due punti fissi (fuochi) è costante — un'omonimia che condivide solo l'etimologia con la figura retorica, non il significato.",

  shortDefinition:
    "Esagerazione retorica, per eccesso o per difetto, usata per intensità espressiva; in geometria, anche il nome di una curva conica.",

  etymology:
    "Dal greco *hyperbolḗ* «eccesso, esagerazione», da *hypér* «oltre» e *bállein* «lanciare»: letteralmente «un lancio oltre il segno» — l'immagine di chi getta la parola più lontano del vero per farla arrivare con più forza.",

  examples: [
    "'Te l'ho detto un milione di volte' è un'iperbole così comune da essere quasi lessicalizzata: nessuno la interpreta letteralmente.",
    "'Muoio dalla voglia di vederti' esagera un'emozione reale — il desiderio — per comunicarne l'intensità, non la letteralità.",
    "Gli spot pubblicitari abusano dell'iperbole: 'il detersivo più potente del mondo' non va preso alla lettera, ma segnala un posizionamento di marketing.",
    "In geometria analitica, l'iperbole equilatera ha come asintoti gli assi cartesiani — un uso del termine completamente estraneo alla retorica.",
  ],

  synonyms: [
    { term: "esagerazione", register: "comune", note: "Termine generico per l'effetto; iperbole ne è il nome tecnico-retorico." },
  ],

  antonyms: [
    { term: "litote", register: "tecnico", note: "Attenua per negazione del contrario, invece di amplificare — meccanismo retorico opposto nell'intensità, non nella struttura." },
  ],

  relatedWords: ["litote", "metonimia", "perifrasi"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/iperbole/",
    wiktionary: "https://it.wiktionary.org/wiki/iperbole",
  },

  paroliereNote:
    "L'iperbole vive di un paradosso interessante: funziona solo finché resta riconoscibile come esagerazione. Se qualcuno crede davvero che tu sia morto di fame, l'iperbole ha fallito — non ha comunicato intensità, ha comunicato disinformazione. Questo la distingue nettamente dalla menzogna: l'iperbole è un patto implicito tra chi parla e chi ascolta, che sa di essere di fronte a un'amplificazione voluta e la decodifica correttamente come tale. È forse la figura retorica più usata nel linguaggio colloquiale quotidiano, dove la sobrietà letterale cede quasi sempre il passo all'enfasi affettiva.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "iperbole — significato figura retorica ed esempi",
    description:
      "Che cos'è l'iperbole: la figura retorica dell'esagerazione per eccesso o difetto, con cenno all'omonima curva geometrica.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
