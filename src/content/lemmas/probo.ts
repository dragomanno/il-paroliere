// Il Paroliere — Lemma: probo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const probo: LemmaEntry = {
  lemma: "probo",
  slug: "probo",
  partOfSpeech: "aggettivo",

  definition:
    "Di persona che ha → probità: onesto in modo profondo e costante, integro, di " +
    "rettitudine inattaccabile. Probo è l'aggettivo diretto di probità — come integerrimo " +
    "è il superlativo di integro — e appartiene allo stesso registro formale ed elevato. " +
    "Nel parlato quotidiano è quasi desueto; nel linguaggio giuridico, notarile e " +
    "istituzionale mantiene una presenza stabile come qualificativo morale tecnico.",

  shortDefinition:
    "Di rettitudine morale profonda e costante; onesto in modo pieno e inattaccabile.",

  register: ["formale", "letterario"],
  domains: ["etica", "diritto", "letteratura"],

  etymology:
    "Dal latino probus («buono, onesto»), forse da probare («mettere alla prova»): " +
    "il probo è colui che ha superato ogni prova morale.",

  examples: [
    "«Era un uomo probo nel senso più pieno: non per convenienza né per paura del giudizio altrui, ma perché non sapeva essere altrimenti.»",
    "«Il codice deontologico richiede che il professionista sia probo e irreprensibile nella condotta, pubblica e privata.»",
    "«In un mondo che premia spesso l'opportunismo, un uomo probo rischia di passare per ingenuo.»",
  ],

  synonyms: [
    {
      term: "onesto",
      register: ["comune"],
      context: "forma più quotidiana e accessibile",
    },
    {
      term: "integro",
      register: ["comune"],
      context: "moralmente intatto",
    },
    {
      term: "retto",
      register: ["comune"],
      context: "di condotta dritta",
    },
    {
      term: "irreprensibile",
      register: ["formale"],
      context: "a cui non si può muovere obiezione",
    },
    {
      term: "integerrimo",
      register: ["elevato"],
      context: "superlativo: di rettitudine assoluta",
    },
  ],

  antonyms: [
    {
      term: "disonesto",
      register: ["comune"],
      context: "privo di rettitudine",
    },
    {
      term: "corrotto",
      register: ["comune"],
      context: "ceduto a pratiche illecite",
    },
    {
      term: "venale",
      register: ["comune"],
      context: "guidato dal tornaconto",
    },
    {
      term: "doppio",
      register: ["comune"],
      context: "che si comporta diversamente a seconda delle convenienze",
    },
  ],

  relatedWords: [
    "probità",
    "onestà",
    "integerrimo",
    "irreprensibile",
    "virtù",
    "integrità",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/probo/",
    wiktionary: "https://it.wiktionary.org/wiki/probo",
  },

  paroliereNote:
    "Probo è il termine più sobrio della famiglia: non il superlativo assoluto " +
    "dell'integerrimo, non il concetto astratto della probità — è semplicemente " +
    "l'aggettivo di chi è moralmente intero. La sua rarità nel parlato corrente dice " +
    "qualcosa di preciso: abbiamo scelto di descrivere la virtù con parole complesse " +
    "e di riservarle ai codici e ai documenti formali, mentre per la vita quotidiana " +
    "preferiamo «onesto» — più vicino, più gestibile, meno impegnativo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Probo — definizione, uso letterario e giuridico | Il Paroliere",
    description:
      "Probo: aggettivo di probità. Cosa significa, quando si usa, perché è raro nel " +
      "parlato. Differenza da onesto e integerrimo. Definizione originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
