// Il Paroliere — Lemma: indizio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const indizio: LemmaEntry = {
  lemma: "indizio",
  slug: "indizio",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Elemento parziale che, pur non dimostrando da solo un fatto, lo rende più o meno" +
    " probabile, orientando l'attenzione e la ricerca verso una certa ipotesi. Nel" +
    " linguaggio giuridico l'indizio è un dato che, messo insieme ad altri e valutato nel" +
    " suo complesso, può concorrere a formare prova, ma non basta da solo per condannare;" +
    " in ambito quotidiano chiamiamo indizio qualsiasi traccia che suggerisce qualcosa —" +
    " uno sguardo, una frase, un comportamento — anche quando il collegamento è più" +
    " immaginato che fondato. Il valore di un indizio dipende tanto dalla sua forza" +
    " intrinseca quanto dal modo in cui viene interpretato.",

  shortDefinition:
    "Traccia o elemento parziale che non dimostra da solo un fatto, ma lo rende più" +
    " probabile e orienta ipotesi e sospetti.",

  register: ["comune", "tecnico-giuridico"],
  domains: ["diritto", "logica", "criminologia", "vita-quotidiana"],

  etymology:
    "Dal latino inditium (più spesso indicium), \"denuncia, segno rivelatore, indizio\"," +
    " derivato di indicāre \"mostrare, indicare\", da in- \"verso\" e dicere \"dire\". In" +
    " italiano il termine conserva il nucleo di \"segno che parla di qualcos'altro\", con" +
    " specializzazione nel linguaggio giuridico e investigativo.",

  examples: [
    "La presenza delle sue impronte è un forte indizio, ma non l'unica cosa da considerare.",
    "Il cambiamento di tono nei messaggi può essere un indizio di malessere, se lo si guarda nel contesto.",
    "In letteratura, un buon indizio è quello che il lettore dimentica fino al momento in cui torna a rivelare il suo peso.",
    "La mancanza di trasparenza sui finanziamenti è un indizio che merita ulteriori domande.",
    "Un singolo indizio non basta a parlare di colpa, però invita a cercare altri elementi coerenti o a smentirlo.",
  ],

  synonyms: [
    {
      term: "traccia",
      register: "comune",
      note: "Enfatizza il carattere materiale o minimo del segno.",
    },
    {
      term: "segno",
      register: "comune",
      note: "Più generico, può avere anche valore simbolico.",
    },
    {
      term: "indizio-circostanziale",
      register: "tecnico-giuridico",
      note: "Elemento che riguarda le circostanze del fatto.",
    },
  ],

  antonyms: [
    {
      term: "smentita",
      register: "comune",
      note: "Fatto che va in direzione opposta rispetto a quanto suggerito dall'indizio.",
    },
    {
      term: "alibi",
      register: "tecnico-giuridico",
      note: "Circostanza che esclude la presenza o il coinvolgimento di una persona.",
    },
  ],

  relatedWords: [
    {
      term: "prova",
      relation: "Esito possibile di un sistema di indizi valutati nel loro insieme.",
    },
    {
      term: "dubbio",
      relation: "L'indizio può attenuare o rafforzare un dubbio, ma difficilmente lo elimina da solo.",
    },
    {
      term: "sospetto",
      relation: "Spesso nasce da indizi interpretati come segnali di colpa.",
    },
    {
      term: "presunzione-di-innocenza",
      relation: "Principio che impedisce di trasformare semplici indizi in condanna senza prove sufficienti.",
    },
  ],

  sourceLinks: {},

  paroliereNote:
    "L'indizio piace perché trasforma il mondo in un giallo: ogni dettaglio può essere un" +
    " pezzo di trama. Ma il rischio è vedere indizi ovunque, dimenticando che sono tali" +
    " solo dentro una storia che li collega. Nel diritto e nella ricerca scientifica" +
    " contano tanto gli indizi che puntano in una direzione quanto quelli che la" +
    " contraddicono, che spesso vengono trascurati. Il lemma suggerisce di trattare gli" +
    " indizi come inviti a indagare meglio, non come scorciatoie per arrivare alla" +
    " conclusione che desideriamo.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "indizio — tracce che orientano senza dimostrare",
    description:
      "Che cos'è un indizio tra diritto, indagine e vita quotidiana, dalle tracce che" +
    " orientano le ipotesi ai rischi di vedere prove dove ci sono solo sospetti.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
