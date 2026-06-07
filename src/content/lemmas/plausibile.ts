// Il Paroliere — Lemma: plausibile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const plausibile: LemmaEntry = {
  lemma: "plausibile",
  slug: "plausibile",
  partOfSpeech: "aggettivo",

  definition:
    "Che sembra degno di essere creduto, accettato o approvato sulla base di " +
    "argomenti ragionevoli, pur in assenza di certezza assoluta. Plausibile non " +
    "significa vero: significa che le ragioni a favore di una tesi sono sufficienti " +
    "a renderla credibile e sostenibile in una discussione razionale. In logica " +
    "argomentativa, un'ipotesi è plausibile quando non contraddice le evidenze " +
    "disponibili e si inserisce coerentemente nel quadro delle conoscenze esistenti. " +
    "In diritto, una tesi è plausibile quando è compatibile con le prove agli atti, " +
    "anche se non dimostrata oltre ogni ragionevole dubbio. La parola occupa uno " +
    "spazio semantico preciso e irrinunciabile: quello tra il possibile (che non " +
    "contraddice la logica) e il probabile (che ha più di metà delle probabilità " +
    "a favore). Plausibile è più esigente del possibile — non basta che non sia " +
    "impossibile, ci vogliono ragioni positive a favore — ma meno del probabile, " +
    "che richiede una maggioranza di evidenze.",

  shortDefinition:
    "Che può essere ragionevolmente creduto o accettato sulla base di argomenti coerenti, pur senza certezza; più di «possibile», meno di «probabile».",

  register: ["comune", "formale", "filosofico", "logico"],
  domains: ["linguistica", "logica", "filosofia", "diritto", "uso comune"],

  etymology:
    "Dal latino plausibilis («degno di applauso, approvabile»), derivato di " +
    "plaudere («battere le mani, applaudire»). Il senso originale è letteralmente " +
    "\"ciò che merita applauso\", cioè approvazione razionale. Lo stesso verbo dà " +
    "plauso, applauso, implausibile.",

  examples: [
    "«L'ipotesi che il documento fosse stato alterato è plausibile: le date non tornano e l'inchiostro è diverso.»",
    '«È plausibile che il mercato si stabilizzi nel terzo trimestre disse l\'analista — il che significava: non lo so, ma non è una previsione assurda.»',
    "«Non ti sto chiedendo la certezza: ti chiedo se la tua teoria è almeno plausibile alla luce dei dati che abbiamo.»",
    "«In un'aula di tribunale, una difesa plausibile è sufficiente a introdurre il ragionevole dubbio; non deve essere la spiegazione più probabile.»",
    "«Il piano era plausibile sulla carta: non garantiva il successo, ma aveva abbastanza logica interna da meritare una prova.»",
  ],

  synonyms: [
    {
      term: "verosimile",
      register: "comune",
      context: "simile ma con sfumatura narrativa",
    },
    {
      term: "credibile",
      register: "comune",
      context: "degno di credito",
    },
    {
      term: "ragionevole",
      register: "comune",
      context: "conforme alla ragione",
    },
    {
      term: "sostenibile",
      register: "formale",
      context: "difendibile razionalmente",
    },
  ],

  antonyms: [
    {
      term: "implausibile",
      register: "comune",
      context: "che non regge all'esame razionale",
    },
    {
      term: "inverosimile",
      register: "comune",
      context: "che non sembra vero",
    },
    {
      term: "assurdo",
      register: "comune",
      context: "contrario alla logica",
    },
  ],

  relatedWords: [
    "possibile",
    "probabile",
    "logica",
    "argomentazione",
    "probabilità",
    "verosimiglianza",
    "ragionevole dubbio",
    "ipotesi",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/plausibile/",
    wiktionary: "https://it.wiktionary.org/wiki/plausibile",
  },

  paroliereNote:
    "Plausibile è una parola che vale la pena usare con precisione perché occupare " +
    "il suo spazio semantico è spesso necessario e difficile da sostituire. Quando " +
    "si dice \"è plausibile\", si sta facendo un'affermazione epistemica precisa: " +
    "non si sta dicendo che è vero, non si sta nemmeno dicendo che è probabile — " +
    "si sta dicendo che merita considerazione, che le ragioni a favore sono " +
    "sufficienti a renderlo una posizione razionale. Questa distinzione è " +
    "fondamentale in logica, in diritto, in scienza e in ogni discussione seria. " +
    "L'etimologia è affascinante: plausibile viene dall'applauso. È ciò che " +
    "\"merita le mani alzate\" — non l'ovazione del certo, ma il riconoscimento " +
    "del ragionevole.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Plausibile — definizione, uso in logica e diritto | Il Paroliere",
    description:
      "Cosa significa plausibile, differenza da possibile e probabile. Uso in logica, filosofia e diritto. Etimologia dall'applauso. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
