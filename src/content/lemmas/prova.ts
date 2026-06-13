// Il Paroliere — Lemma: prova
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const prova: LemmaEntry = {
  lemma: "prova",
  slug: "prova",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico-giuridico", "tecnico-scientifico"],
  domains: ["diritto", "scienza", "sport", "teatro", "vita-quotidiana"],

  definition:
    "Elemento o insieme di elementi che giustificano in modo sufficientemente forte l'accettazione di un'affermazione, di un'ipotesi o di un'accusa, secondo le regole del contesto in cui vengono valutati. In ambito giuridico la prova è ciò che permette al giudice di ritenere un fatto come accertato oltre ogni ragionevole dubbio, attraverso testimonianze, documenti, perizie; in ambito scientifico indica il grado di conferma sperimentale o osservativa che sostiene una teoria, sapendo che può essere messa in discussione da nuovi dati. Nel linguaggio comune, “mettere alla prova” significa verificare capacità o tenuta di qualcosa o qualcuno, non solo in senso tecnico, ma anche affettivo e morale.",

  shortDefinition:
    "Ciò che consente di considerare un fatto come accertato, o una capacità come verificata, secondo criteri condivisi in un dato contesto.",

  etymology:
    "Dal latino proba, “prova, saggio, dimostrazione”, femminile sostantivato dell'aggettivo probus “onesto, buono, corretto”, collegato all'idea di ciò che è stato “provato” e trova approvazione. In italiano il lemma si è esteso ai molti significati legati al verificare, testare, dimostrare.",

  examples: [
    "Nel processo non basta il sospetto, serve una prova che regga alle obiezioni della difesa.",
    "Un singolo esperimento non fa teoria, però può essere una forte prova a suo favore.",
    "La malattia è stata una dura prova, ma ha cambiato il modo in cui guarda le priorità della vita.",
    "Prima della prima teatrale, la compagnia ha fatto una prova generale a porte chiuse.",
    "La mancanza di prova non è automaticamente prova del contrario, anche se spesso lo dimentichiamo.",
  ],

  synonyms: [
    {
      term: "evidenza",
      register: "scientifico",
      note: "In italiano è spesso usato al plurale “evidenze” in senso saggistico.",
    },
    {
      term: "dimostrazione",
      register: "comune",
      note: "Indica un percorso argomentativo che porta a una conclusione certa entro un sistema.",
    },
    {
      term: "test",
      register: "tecnico",
      note: "Verifica pratica di capacità o funzionamento.",
    },
  ],

  antonyms: [
    {
      term: "assenza di prova",
      register: "saggistico",
      note: "Mancanza di elementi sufficienti a confermare un'affermazione.",
    },
    {
      term: "confutazione",
      register: "scientifico",
      note: "Prova contraria che smentisce una tesi.",
    },
  ],

  relatedWords: ["indizio", "dubbio", "presunzione-di-innocenza", "esperimento"],

  sourceLinks: {},

  paroliereNote:
    "La prova non è mai neutrale: dipende dalle regole del gioco in cui viene raccolta e valutata. Ciò che basta come prova in una conversazione tra amici non è sufficiente in un tribunale o in un articolo scientifico, e questo scarto genera spesso incomprensioni. L'epoca delle informazioni veloci alimenta la retorica del “ci sono le prove” senza chiarire quali, come sono state ottenute, chi le ha interpretate. Il lemma invita a chiedere non solo se “c'è una prova”, ma che tipo di prova è, secondo quali criteri e con quali limiti.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "prova — dal sospetto al fatto accertato",
    description:
      "Che cos'è una prova tra diritto, scienza e vita quotidiana, dai sistemi di indizi alle verifiche che mettono alla prova persone e teorie.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
