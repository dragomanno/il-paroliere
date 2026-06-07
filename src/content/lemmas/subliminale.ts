// Il Paroliere — Lemma: subliminale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const subliminale: LemmaEntry = {
  lemma: "subliminale",
  slug: "subliminale",
  partOfSpeech: "aggettivo",

  definition:
    "Che opera al di sotto della soglia della percezione cosciente: uno stimolo " +
    "subliminale è quello che il sistema nervoso registra senza che la mente consapevole " +
    "ne sia pienamente consapevole, influenzando comportamenti, emozioni o giudizi senza " +
    "che il soggetto se ne accorga. Il termine viene dalla psicologia sperimentale e " +
    "indica tutto ciò che avviene sub limen — sotto la soglia — della coscienza. In " +
    "marketing e comunicazione, la pubblicità subliminale è quella che inserisce messaggi, " +
    "immagini o suggestioni in modo non percepibile consciamente, con l'intento di " +
    "influenzare le scelte del consumatore. Il dibattito sulla sua reale efficacia è " +
    "aperto: alcuni studi ne documentano effetti misurabili su breve termine; altri " +
    "sostengono che l'effetto sia trascurabile nella pratica reale. In molti paesi, la " +
    "pubblicità subliminale è esplicitamente vietata dalla legge.",

  shortDefinition:
    "Che agisce al di sotto della soglia della percezione cosciente, influenzando " +
    "comportamenti o stati interiori senza che il soggetto ne sia consapevole.",

  register: ["tecnico", "colto"],
  domains: ["psicologia", "neuroscienze", "marketing", "linguistica", "società"],

  etymology:
    "Dal latino sub («sotto») + limen, -inis («soglia»): letteralmente «sotto la " +
    "soglia». Termine coniato nella psicologia sperimentale del XIX secolo, reso popolare " +
    "dalla psicanalisi e dalla psicologia della percezione del Novecento.",

  examples: [
    "Il filmato conteneva immagini subliminali inserite a 1/24 di secondo: visivamente impercettibili ma registrate dal cervello.",
    "C'era nella sua voce qualcosa di subliminale che metteva a disagio senza che si riuscisse a capire esattamente perché.",
    "Il marketing subliminale è vietato in Italia dalla legge: ogni messaggio pubblicitario deve essere riconoscibile come tale.",
    "Certi bias cognitivi operano a livello subliminale: influenzano le nostre scelte prima ancora che le elaboriamo consciamente.",
  ],

  synonyms: [
    {
      term: "inconscio",
      register: "psicologico",
      context: "al di sotto della coscienza, in senso ampio",
    },
    {
      term: "pre-cosciente",
      register: "psicoanalitico",
      context: "accessibile ma non ancora cosciente",
    },
    {
      term: "occulto",
      register: "comune",
      context: "nascosto, non manifesto",
    },
  ],

  antonyms: [
    {
      term: "cosciente",
      register: "comune",
      context: "di cui si è pienamente consapevoli",
    },
    {
      term: "esplicito",
      register: "comune",
      context: "dichiarato apertamente",
    },
    {
      term: "manifesto",
      register: "comune",
      context: "visibile e percepibile",
    },
  ],

  relatedWords: [
    "sentore",
    "alienazione",
    "inconscio",
    "bias cognitivo",
    "percezione",
    "soglia percettiva",
    "pubblicità",
    "nudge",
    "priming",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/subliminale/",
    wiktionary: "https://it.wiktionary.org/wiki/subliminale",
  },

  paroliereNote:
    "Subliminale è una parola che nella cultura popolare ha acquisito una connotazione " +
    "quasi cospiratoria — messaggi nascosti, manipolazione occulta, pubblicità che ti " +
    "fanno comprare cose senza che tu lo sappia. La realtà scientifica è più sfumata: " +
    "gli effetti subliminali esistono, ma sono generalmente deboli, dipendenti dal " +
    "contesto e difficilmente replicabili in condizioni naturali. La parola però porta " +
    "con sé qualcosa di più interessante del mero dibattito sull'efficacia pubblicitaria: " +
    "ricorda che la coscienza è uno strato sottile sopra un oceano di elaborazione non " +
    "consapevole, e che gran parte di ciò che ci muove opera proprio in quello spazio " +
    "sotto la soglia. In questo senso, subliminale è una parola filosoficamente " +
    "importante: dice che non siamo trasparenti a noi stessi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Subliminale — definizione, psicologia, pubblicità | Il Paroliere",
    description:
      "Cosa significa subliminale, come funziona la percezione sotto soglia, la " +
      "pubblicità subliminale è reale? Definizione originale con nota psicologica e critica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
