// Il Paroliere — Lemma: presentimento
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const presentimento: LemmaEntry = {
  lemma: "presentimento",
  slug: "presentimento",
  partOfSpeech: "sostantivo maschile",

  definition:
    "Sensazione interiore, anticipatoria e non razionalmente fondata, che qualcosa di " +
    "importante — spesso qualcosa di grave o di decisivo — stia per accadere. Il " +
    "presentimento non si basa su prove né su ragionamenti: viene da dentro, emerge come " +
    "un'emozione diffusa o come una certezza silenziosa che precede l'evento senza " +
    "poterlo spiegare. Ha una qualità quasi viscerale — si sente nello stomaco, nel " +
    "petto, in quel luogo impreciso dove si incontrano corpo e intuizione — e resiste " +
    "alla razionalizzazione. Il presentimento è diverso dal sospetto: non implica la " +
    "colpa di qualcuno né un giudizio negativo su una persona; è piuttosto un presagio " +
    "generico, un'ombra sul futuro. È diverso dal sentore: più intenso, più carico " +
    "emotivamente, spesso più specifico nell'anticipare qualcosa di grave. Nella " +
    "letteratura e nella tradizione narrativa, il presentimento è un topos classico: " +
    "l'eroe che prima della battaglia ha un cattivo presentimento, il personaggio che " +
    "«sentiva» che qualcosa stava per cambiare. È anche un oggetto di studio nella " +
    "psicologia cognitiva moderna, che lo riconduce ai processi di elaborazione " +
    "inconscia dell'informazione — il cervello che ha già «calcolato» qualcosa che la " +
    "coscienza non ha ancora formulato.",

  shortDefinition:
    "Sensazione anticipatoria non razionale che qualcosa di importante, spesso di " +
    "grave, stia per accadere.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "letteratura", "linguistica", "società"],

  etymology:
    "Da pre- (prima) + sentimento (da sentire, latino sentire): letteralmente «ciò " +
    "che si sente prima» — la percezione che precede l'evento. Stesso campo di presagio, " +
    "premonizione, preludio.",

  examples: [
    "«Aveva avuto un presentimento cupo tutta la mattina, senza riuscire a spiegarselo: poi arrivò la telefonata.»",
    "«I presentimenti non sono magia: spesso il cervello elabora segnali deboli — un tono di voce, un comportamento anomalo — prima che la coscienza li formuli.»",
    "«C'è qualcosa di straziante nel presentimento letterario: il lettore sa già ciò che il personaggio teme di sapere.»",
  ],

  synonyms: [
    {
      term: "presagio",
      register: ["comune"],
      context: "segno anticipatore di qualcosa che verrà",
    },
    {
      term: "premonizione",
      register: ["comune"],
      context: "con sfumatura quasi soprannaturale",
    },
    {
      term: "intuizione anticipatoria",
      register: ["psicologico"],
      context: "elaborazione non conscia di segnali deboli",
    },
    {
      term: "sentore",
      register: ["comune"],
      context: "più neutro e sensoriale, meno emotivo",
    },
  ],

  antonyms: [
    {
      term: "certezza a posteriori",
      register: ["comune"],
      context: "conoscenza acquisita dopo l'evento",
    },
    {
      term: "rassicurazione",
      register: ["comune"],
      context: "sensazione che tutto vada bene",
    },
    {
      term: "sorpresa totale",
      register: ["comune"],
      context: "evento completamente imprevisto",
    },
  ],

  relatedWords: [
    "sentore",
    "sospetto",
    "reminiscenza",
    "intuizione",
    "inconscio",
    "presagio",
    "premonizione",
    "subliminale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/presentimento/",
    wiktionary: "https://it.wiktionary.org/wiki/presentimento",
  },

  paroliereNote:
    "Presentimento, sentore e sospetto sono tre modi diversi di stare sul confine " +
    "tra il sapere e il non sapere. Se dovessimo metterli in una scala di intensità " +
    "emotiva: il sentore è la percezione più lieve — quasi olfattiva, quasi animale; " +
    "il sospetto è il più cognitivo e relazionale — richiede un oggetto, una persona, " +
    "un'ipotesi negativa; il presentimento è il più emotivo e viscerale — non ragiona, " +
    "anticipa. Tutti e tre fanno parte di quell'intelligenza non verbale che la cultura " +
    "razionalista ha a lungo svalutato e che la psicologia cognitiva moderna sta " +
    "progressivamente rivalutando come forma legittima di elaborazione dell'informazione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Presentimento — definizione, psicologia, letteratura | Il Paroliere",
    description:
      "Cosa significa presentimento, differenza da sentore e sospetto, il presagio " +
      "nella letteratura e nella psicologia cognitiva. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
