// Il Paroliere — Lemma: stoicismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const stoicismo: LemmaEntry = {
  lemma: "stoicismo",
  slug: "stoicismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Scuola filosofica fondata da Zenone di Cizio nel III secolo a.C., che insegna a vivere secondo ragione, " +
    "accettando serenamente ciò che non dipende da noi e coltivando la virtù come unico bene autentico. " +
    "Nel linguaggio comune, indica la capacità di sopportare dolore, perdita o avversità senza cedere al " +
    "lamento — non per insensibilità, ma per un controllo lucido e consapevole di sé.",

  shortDefinition:
    "Forza interiore che porta ad affrontare il dolore senza lamentarsi; in origine, dottrina filosofica greca sulla virtù e la ragione.",

  register: ["comune", "tecnico"],
  domains: ["filosofia", "psicologia", "comportamento"],

  etymology:
    "Dal greco stoïkós, 'della Stoa' — il portico dipinto (Stoà Poikíle) di Atene " +
    "dove Zenone di Cizio teneva le sue lezioni nel III secolo a.C.",

  examples: [
    "Affrontò la malattia con uno stoicismo che non cercava ammirazione, solo equilibrio.",
    "Lo stoicismo degli antichi non era indifferenza: era una forma alta di attenzione al reale.",
    "C'è uno stoicismo di circostanza che assomiglia più alla rimozione che alla forza.",
    "Marco Aurelio scrisse i suoi Pensieri come esercizio stoico: per sé, non per i posteri.",
  ],

  synonyms: [
    {
      term: "fermezza",
      register: "comune",
      context: "resistenza emotiva senza la profondità filosofica dello stoicismo",
    },
    {
      term: "impassibilità",
      register: "formale",
      context: "assenza di reazione emotiva visibile, spesso connotata negativamente",
    },
    {
      term: "resilienza",
      register: "comune",
      context: "capacità di recupero dopo l'avversità, con sfumatura più attiva",
    },
  ],

  antonyms: [
    {
      term: "lamentela",
      register: "comune",
      context: "esternazione del disagio che lo stoicismo disciplina",
    },
    {
      term: "epicureismo",
      register: "tecnico",
      context: "scuola filosofica rivale che pone il piacere al centro del bene",
    },
  ],

  relatedWords: [
    "stoico",
    "stoicamente",
    "Zenone",
    "virtù",
    "apàteia",
    "logos",
    "Marco Aurelio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/stoicismo/",
    wiktionary: "https://it.wiktionary.org/wiki/stoicismo",
  },

  paroliereNote:
    "Lo stoicismo è tornato di moda nell'era del self-help, spesso ridotto a 'non lamentarti'. " +
    "Ma la versione originale era molto più ambiziosa: non si trattava di tacere il dolore, " +
    "ma di capire cosa dipende da te e cosa no — e agire solo sulla prima parte. " +
    "Una distinzione che sembra semplice e non lo è quasi mai.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Stoicismo — Il Paroliere",
    description:
      "Definizione originale di 'stoicismo': forza interiore e dottrina filosofica greca sulla virtù e la ragione. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
