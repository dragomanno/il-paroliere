// Il Paroliere — Lemma: tronfio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tronfio: LemmaEntry = {
  lemma: "tronfio",
  slug: "tronfio",
  partOfSpeech: "aggettivo",
  register: ["comune", "colloquiale", "letterario"],
  domains: ["comportamento sociale", "retorica", "psicologia"],

  definition:
    "Gonfio di orgoglio o vanità e incline a mostrarlo con pose, parole o cerimonie eccessive. Si dice di una persona che trasforma un risultato in autocelebrazione, ma anche di un tono o di uno stile troppo solenne e compiaciuto. Non coincide con la semplice soddisfazione: nel tronfio il compiacimento chiede di essere notato.",

  shortDefinition:
    "Gonfio di vanità e ostentatamente soddisfatto di sé, talvolta con un tono pomposo.",

  etymology:
    "Voce collegata a «tronfiare», nel senso di gonfiare; l’immagine fisica del rigonfiarsi si trasferisce al portamento e alla parola. La formazione storica non è del tutto pacifica, ma il valore figurato di «gonfio di sé» è stabile nell’uso.",

  examples: [
    "Dopo l’applauso salì sul palco con un sorriso tronfio, come se la serata intera fosse stata organizzata per lui.",
    "Il comunicato aveva un tono tronfio: molte promesse, pochi dettagli verificabili.",
    "Non era felice del premio e basta; lo raccontava con una compiacenza tronfia che rendeva difficile partecipare alla sua gioia.",
  ],

  synonyms: [
    { term: "borioso", register: "comune", note: "Sottolinea la superiorità ostentata; può risultare meno legato alla posa esteriore." },
    { term: "pomposo", register: "comune-formale", note: "Si applica soprattutto a tono, stile o cerimonia; «tronfio» resta più personale e compiaciuto." },
    { term: "arrogante", register: "comune", note: "→ arroganza implica più facilmente disprezzo o sopraffazione; «tronfio» può fermarsi all’autocompiacimento." },
  ],

  antonyms: [
    { term: "modesto", register: "comune", note: "Chi non amplifica i propri meriti e non cerca di occupare la scena." },
    { term: "sobrio", register: "comune", note: "Detto di tono o stile, evita l’enfasi e la sovrabbondanza celebrativa." },
  ],

  relatedWords: ["arroganza", "spaccone", "gradasso", "fanfarone", "vanità"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/tronfio",
  },

  paroliereNote:
    "«Tronfio» giudica una messa in scena, non il fatto di essere contenti di sé. Per questo è spesso più preciso di → arroganza quando il problema non è l’offesa agli altri, ma l’aria troppo piena con cui si attraversa la stanza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tronfio — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di tronfio: chi o ciò che mostra vanità e autocompiacimento con toni pomposi. Sinonimi, contrari, esempi e sfumature d’uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
