// Il Paroliere — Lemma: irascibile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const irascibile: LemmaEntry = {
  lemma: "irascibile",
  slug: "irascibile",
  partOfSpeech: "aggettivo (anche sostantivo: un irascibile)",

  definition:
    "Detto di persona che si adira facilmente, che ha una soglia di tolleranza alla " +
    "frustrazione bassa e tende a rispondere con ira o irritazione a stimoli che altri " +
    "gestirebbero con maggiore controllo. L'irascibilità non è necessariamente esplosiva o " +
    "violenta: può manifestarsi come un'irritabilità cronica, una facilità a offendersi, una " +
    "reattività sproporzionata rispetto alle situazioni. A differenza di chi è bilioso — che " +
    "porta dentro di sé un risentimento più stagnante e cronico — l'irascibile reagisce in " +
    "tempo reale, con scatti immediati che possono anche passare rapidamente. Nella psicologia " +
    "del carattere classica, l'irascibilità è associata al temperamento collerico (dalla teoria " +
    "degli umori di Galeno: la bile gialla, cholé, produceva rapidità di reazione, energia e " +
    "tendenza all'ira). Il collerico è energico, deciso, reattivo — qualità che nelle " +
    "situazioni giuste diventano leadership; nelle situazioni sbagliate, diventano " +
    "irascibilità. Nota tomista: San Tommaso d'Aquino distingueva nell'anima due appetiti " +
    "sensitivi: il concupiscibile (che tende al piacere, fugge il dolore) e l'irascibile " +
    "(che affronta gli ostacoli, combatte le difficoltà). In questo senso tecnico, irascibile " +
    "non è negativo: è la facoltà che permette di opporsi, di non cedere, di reagire. " +
    "L'irascibilità diventa difetto solo quando questa facoltà è mal regolata dalla ragione.",

  shortDefinition:
    "Chi si adira con facilità e rapidità; persona con bassa soglia alla frustrazione e " +
    "reattività emotiva elevata.",

  register: ["comune", "con sfumatura valutativa; leggermente formale rispetto ai sinonimi colloquiali"],
  domains: ["psicologia", "società", "linguistica", "caratterologia"],

  etymology:
    "Dal latino irascibilis, da irasci («adirarsi»), da ira («ira, collera»). La stessa " +
    "radice di irato, iroso, ira. Il termine è attestato in italiano già nel latino scolastico " +
    "medievale, soprattutto nella distinzione tra appetito irascibile e appetito concupiscibile " +
    "della filosofia tomista.",

  examples: [
    "«Era un uomo gentile, ma irascibile: bastava un'attesa di cinque minuti per vederlo trasformarsi.»",
    "«Il direttore irascibile terrorizzava i colleghi non perché fosse crudele, ma perché nessuno sapeva mai cosa avrebbe scatenato la prossima reazione.»",
    "«Con l'età era diventato più irascibile: le piccole seccature che prima ignorava ora lo mettevano fuori dai gangheri.»",
  ],

  synonyms: [
    {
      term: "collerico",
      register: "tecnico",
      context: "il temperamento umorale equivalente",
    },
    {
      term: "iracondo",
      register: "letterario",
      context: "più letterario e intenso",
    },
    {
      term: "bilioso",
      register: "comune",
      context: "più cronico e stagnante",
    },
    {
      term: "fumino",
      register: "colloquiale toscano",
      context: "variante bonaria e regionale",
    },
    {
      term: "incazzoso",
      register: "colloquiale volgare",
      context: "corrispettivo nel registro basso",
    },
  ],

  antonyms: [
    {
      term: "paziente",
      register: "comune",
      context: "chi tollera con calma",
    },
    {
      term: "flemmatico",
      register: "comune",
      context: "di temperamento lento e controllato",
    },
    {
      term: "imperturbabile",
      register: "comune",
      context: "chi non si scompone",
    },
  ],

  relatedWords: [
    "bilioso",
    "fumino",
    "incazzoso",
    "incazzatello",
    "ira",
    "collera",
    "temperamento",
    "carattere",
    "bile",
    "umore",
    "psicologia del carattere",
    "Galeno",
    "Tommaso d'Aquino",
    "appetito irascibile",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/irascibile/",
    wiktionary: "https://it.wiktionary.org/wiki/irascibile",
  },

  paroliereNote:
    "Irascibile è una parola che porta con sé tutta la storia della filosofia del carattere — " +
    "da Galeno a Tommaso — e che nella lingua quotidiana viene usata con una precisione " +
    "inconsapevole: quando diciamo che qualcuno è irascibile, stiamo usando un termine tecnico " +
    "che descrive esattamente una configurazione caratteriale specifica, non solo generica " +
    "cattiveria. Vale la pena distinguerlo da bilioso, che è più cupo e risentito; da fumino, " +
    "che è più bonario e dimenticato in fretta; e da incazzoso, che è il registro colloquiale " +
    "dello stesso concetto. Irascibile è la versione adulta, formale, quasi clinica di tutta " +
    "questa famiglia di parole.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Irascibile — definizione, psicologia, differenza da bilioso | Il Paroliere",
    description:
      "Irascibile: chi si adira facilmente, il temperamento collerico, la distinzione " +
      "tomista. Differenza da bilioso, fumino, incazzoso. Definizione originale con note.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
