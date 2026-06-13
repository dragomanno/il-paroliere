// Il Paroliere — Lemma: dubbio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dubbio: LemmaEntry = {
  lemma: "dubbio",
  slug: "dubbio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "filosofico", "tecnico-giuridico"],
  domains: ["psicologia", "filosofia", "diritto", "religione", "scienza"],

  definition:
    "Stato mentale in cui si sospende l'adesione piena a una credenza, a un'ipotesi o a una decisione, perché si percepiscono alternative possibili o mancano elementi sufficienti per scegliere con sicurezza. Nella vita interiore il dubbio può essere una forma di inquietudine che consuma, quando paralizza ogni scelta, ma può anche essere il gesto che ci sottrae alla credulità e apre spazio alla ricerca; in filosofia diventa metodo: mettere in questione ciò che sembra ovvio per vedere se regge alla prova; in ambito giuridico, il dubbio ragionevole è il limite oltre il quale non è lecito condannare. Nelle tradizioni religiose è spesso vissuto come lotta tra fiducia e interrogazione.",

  shortDefinition:
    "Sospensione dell'assenso pieno di fronte a credenze o decisioni, che può bloccare, ma anche proteggere dall'errore e dall'ingenuità.",

  etymology:
    "Dal latino dubium, “cosa incerta, questione controversa”, sostantivo neutro dell'aggettivo dubius “incerto, oscillante”, collegato etimologicamente a duo “due”, a indicare la presenza di due vie possibili. In italiano conserva la doppia anima di condizione psicologica e di problema oggettivo su cui non c'è ancora accordo.",

  examples: [
    "Aveva il dubbio che la strada più comoda non fosse quella giusta per sé.",
    "In scienza il dubbio non è un nemico della verità, però è il motore che spinge a verificare ipotesi e esperimenti.",
    "Di fronte a testimonianze così contraddittorie, il giudice ha riconosciuto che sussiste un ragionevole dubbio.",
    "Il dubbio può essere un luogo di passaggio, non una casa in cui abitare per sempre.",
    "Nel suo percorso di fede, il dubbio non ha cancellato la credenza, ma l'ha resa meno rigida e più consapevole.",
  ],

  synonyms: [
    {
      term: "incertezza",
      register: "comune",
      note: "Più ampia, può riguardare anche situazioni esterne, non solo credenze.",
    },
    {
      term: "perplessità",
      register: "comune",
      note: "Sottolinea l'imbarazzo della scelta, spesso in presenza di opzioni poco chiare.",
    },
    {
      term: "scetticismo",
      register: "filosofico",
      note: "Atteggiamento più stabile di sospensione e richiesta di prove.",
    },
  ],

  antonyms: [
    {
      term: "certezza",
      register: "comune",
      note: "Stato in cui non si ritiene più necessario dubitare.",
    },
    {
      term: "dogmatismo",
      register: "filosofico",
      note: "Rifiuto del dubbio e chiusura su posizioni ritenute indiscutibili.",
    },
  ],

  relatedWords: ["diffidenza", "epistemologia", "presunzione-di-innocenza", "certezza"],

  sourceLinks: {},

  paroliereNote:
    "Il dubbio è spesso raccontato come nemico della serenità, perché si insinua dove pensavamo di avere risposte ferme. Eppure, senza dubbio, molte conquiste scientifiche, giuridiche e personali non sarebbero mai arrivate: qualcuno ha dovuto chiedersi se “davvero è così” quando tutti davano per scontato il contrario. Il rischio è restare prigionieri di un dubbio che non si lascia mai verificare, trasformandosi in alibi per non scegliere. Il lemma invita a trattare il dubbio come un passaggio necessario, da attraversare con strumenti adeguati, invece che come uno stato d'animo da zittire o glorificare a priori.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "dubbio — quando sospendere l'assenso diventa necessario",
    description:
      "Che cos'è il dubbio tra vita interiore, filosofia, scienza e diritto, tra paralisi della scelta e gesto critico che apre alla ricerca.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
