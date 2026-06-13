// Il Paroliere — Lemma: aporetika
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const aporetika: LemmaEntry = {
  lemma: "aporetika",
  slug: "aporetika",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["filosofico", "saggistico"],
  domains: ["filosofia", "logica", "retorica"],

  definition:
    "Nella filosofia antica, i testi o i dialoghi aporetici sono quelli che si concludono " +
    "nell'impasse — senza una soluzione dichiarata, lasciando il lettore con una " +
    "contraddizione irrisolta o con la consapevolezza che il problema è più profondo di " +
    "quanto sembrasse all'inizio. Aristotele usa l'aporetika per designare la messa in " +
    "scena delle difficoltà prima di ogni ricerca sistematica: affrontare le aporie non è " +
    "un fallimento, ma il preludio onesto a qualsiasi indagine seria. In senso più largo, " +
    "una posizione o un testo \u201caporetici\u201d segnalano un nodo teorico che non si lascia " +
    "sciogliere con gli strumenti concettuali disponibili.",

  shortDefinition:
    "Dimensione filosofica dell'impasse irrisolvibile: il momento in cui la riflessione " +
    "riconosce una contraddizione che non riesce ancora a sciogliere.",

  etymology:
    "Dal greco aporetikós, \u00abche si trova in difficoltà, che non trova via d'uscita\u00bb, " +
    "da aporía \u00abmancanza di passaggio\u00bb, composto da a- privativo e póros \u00abpassaggio, via\u00bb. " +
    "Stessa radice di \u00abaporia\u00bb, con il suffisso -ika che ne marca l'aspetto riflessivo-sistematico.",

  examples: [
    "I dialoghi aporetici di Platone — Eutifrone, Lachete, Carmide — si chiudono senza definizione: l'impasse non è un errore di regia, ma il risultato cercato.",
    "Aristotele apre la Metafisica raccogliendo le aporetika dei predecessori: non per demolirli, ma per capire bene il problema prima di proporre una soluzione.",
    "Una discussione si fa aporetika nel momento in cui entrambe le parti si accorgono che le categorie che usano non bastano più.",
    "In filosofia della mente, la questione della coscienza rimane aporetika: non perché non si cerchi una risposta, ma perché nessuna risposta disponibile sembra davvero soddisfacente.",
  ],

  synonyms: [
    {
      term: "aporia",
      register: "filosofico",
      note: "Il singolo nodo irrisolto; aporetika è la dimensione sistematica o la raccolta di tali nodi.",
    },
    {
      term: "impasse teorica",
      register: "saggistico",
      note: "Rende il blocco concettuale senza il registro tecnico greco.",
    },
  ],

  antonyms: [
    {
      term: "soluzione apodittica",
      register: "filosofico",
      note: "Affermazione dimostrata con certezza, senza residui di dubbio.",
    },
    {
      term: "risoluzione sistematica",
      register: "saggistico",
      note: "Il punto d'arrivo che l'aporetika rinvia o nega.",
    },
  ],

  relatedWords: ["zetetica", "dialettica", "dubbio", "filosofia", "metafisica", "idee-platoniche"],

  sourceLinks: {},

  paroliereNote:
    "L'aporetika è il momento in cui il pensiero smette di fingere. Quando un problema " +
    "viene dichiarato aporetiko, non si sta ammettendo una sconfitta: si sta dicendo che " +
    "le domande serie meritano una difficoltà seria. In un'epoca che premia le risposte " +
    "veloci e le sintesi immediate, l'aporetika è quasi un atto di resistenza — la scelta " +
    "di non risolvere in anticipo ciò che non si è ancora capito davvero.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "aporetika — il pensiero che riconosce il proprio limite",
    description:
      "Che cosa sono i dialoghi aporetici e l'aporetika in filosofia: l'impasse come " +
      "punto di partenza onesto per ogni vera indagine.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
