// Il Paroliere — Lemma: demagogia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const demagogia: LemmaEntry = {
  lemma: "demagogia",
  slug: "demagogia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["formale", "politico", "spregiativo"],
  domains: ["politica", "sociologia", "retorica"],

  definition:
    "Pratica politica che consiste nel conquistare o mantenere il consenso popolare " +
    "assecondando gli umori, i pregiudizi o i desideri immediati della maggioranza, " +
    "invece di proporre analisi e soluzioni realistiche — spesso scomode — ai problemi " +
    "reali. Il demagogo non necessariamente mente in senso stretto: semplifica, " +
    "polarizza, promette senza indicare i costi, e individua nemici comodi su cui " +
    "scaricare responsabilità complesse. Il termine, nato in senso neutro nella Grecia " +
    "classica per indicare chi guidava il demos, ha assunto un valore quasi " +
    "esclusivamente negativo già in Tucidide e Aristotele, che la contrapponevano alla " +
    "vera arte politica: mentre lo statista educa il popolo verso il bene comune anche " +
    "a costo dell'impopolarità, il demagogo insegue il popolo per ottenerne il favore " +
    "immediato.",

  shortDefinition:
    "Conquistare consenso assecondando umori e desideri immediati della maggioranza " +
    "invece di proporre soluzioni realistiche ai problemi reali.",

  etymology:
    "Dal greco dēmagōgía, composto di dêmos («popolo») + agōgós («che guida», da ágein, " +
    "«condurre»). Letteralmente «guida del popolo» — termine originariamente neutro, " +
    "riferito a chi orientava le assemblee democratiche ateniesi, che ha assunto la " +
    "connotazione negativa attuale già presso gli storici greci.",

  examples: [
    "Il candidato scelse la via della demagogia: promise di abolire le tasse senza mai " +
      "spiegare come avrebbe finanziato i servizi pubblici.",
    "Non tutta la retorica populista è demagogia in senso proprio, ma la demagogia si " +
      "riconosce quasi sempre da un tratto: identifica un colpevole facile invece di un " +
      "problema complesso.",
    "Gli storici distinguono la demagogia di Cleone, che sfruttava le paure di Atene in " +
      "guerra, dallo statismo di Pericle, che pure cercava il consenso ma senza rinunciare " +
      "a proposte impopolari quando necessario.",
    "La → propaganda lavora sulla ripetizione e sul controllo dei canali di informazione; " +
      "la demagogia lavora piuttosto sulla scelta dei temi e sulla loro semplificazione " +
      "emotiva — i due meccanismi si rafforzano spesso a vicenda.",
  ],

  synonyms: [
    {
      term: "populismo",
      register: "politico",
      context: "termine più recente e più ampio, non necessariamente spregiativo in ogni contesto d'uso",
    },
    {
      term: "qualunquismo",
      register: "politico",
      context: "orientato più al rifiuto della politica in quanto tale che alla ricerca attiva del consenso",
    },
  ],

  antonyms: [
    {
      term: "statismo",
      register: "formale",
      context: "arte di governo che persegue il bene comune anche a costo dell'impopolarità",
    },
    {
      term: "responsabilità politica",
      register: "formale",
      context: "assumersi il costo di decisioni impopolari ma necessarie",
    },
  ],

  relatedWords: [
    "demagogo",
    "demagogico",
    "populismo",
    "propaganda",
    "consenso",
    "retorica",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/demagogia",
  },

  paroliereNote:
    "Aristotele, nella Politica, la definiva come la degenerazione della democrazia " +
    "così come la tirannide è la degenerazione della monarchia: in entrambi i casi chi " +
    "governa smette di perseguire l'interesse comune per inseguire il proprio, con la " +
    "differenza che il demagogo lo fa presentandosi come il più fedele interprete della " +
    "volontà popolare. È un lemma che va maneggiato con cautela editoriale: viene spesso " +
    "usato come insulto generico verso qualunque posizione politica popolare che non " +
    "piace a chi parla, svuotandolo del suo significato analitico preciso. Il test più " +
    "utile per distinguere demagogia da legittima rappresentanza degli interessi " +
    "popolari resta quello indicato dagli storici classici: il demagogo evita " +
    "sistematicamente di dire al popolo qualcosa che il popolo non vuole sentire, anche " +
    "quando sarebbe vero e necessario.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Demagogia — origine, definizione e differenza dal populismo | Il Paroliere",
    description:
      "Che cos'è la demagogia: definizione originale, origine greca del termine, " +
      "differenza da populismo e propaganda, con esempi storici ed etimologia.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
