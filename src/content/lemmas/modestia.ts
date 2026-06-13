// Il Paroliere — Lemma: modestia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const modestia: LemmaEntry = {
  lemma: "modestia",
  slug: "modestia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "letterario"],
  domains: ["etica", "psicologia", "comportamento sociale"],

  definition:
    "Atteggiamento di chi non si mette in primo piano, non ostenta i propri meriti e " +
    "non si attribuisce più importanza di quella che si ritiene dovuta. La modestia " +
    "autentica non è autocommiserazione né falsa umiltà: è la valutazione realistica " +
    "di sé che non richiede né amplificazione né sminuimento. In contesti culturali " +
    "diversi ha valenze opposte: in alcune tradizioni è una virtù che segnala " +
    "maturità, in altre viene percepita come mancanza di ambizione o come " +
    "comunicazione inefficace.",

  shortDefinition:
    "Valutazione equilibrata di sé che non ostenta i propri meriti; né amplificazione " +
    "né sminuimento, ma misura.",

  etymology:
    "Dal latino modestia, da modestus «che osserva la misura», da modus «misura, " +
    "limite». La modestia è letteralmente «il rispetto della misura» — non umiltà " +
    "come abbassamento, ma proporzione come equilibrio.",

  examples: [
    "La modestia falsa — il fingere di valere meno per aspettarsi che gli altri ci smentiscano — è una forma di manipolazione più sottile dell’arroganza.",
    "In molte culture asiatiche, la modestia è il segnale d’ingresso a qualsiasi relazione professionale: chi si presenta magnificando i propri risultati viene percepito come poco affidabile.",
    "La modestia degli scienziati non è rinuncia alla rivendicazione del proprio lavoro: è il riconoscimento che ogni risultato si costruisce su tutto ciò che è venuto prima.",
    "Distinguere modestia da timidezza è importante: la persona modesta sa cosa vale, ma sceglie di non esibirlo; quella timida non sa come comunicarlo.",
  ],

  synonyms: [
    { term: "umiltà", register: "comune-religioso", note: "Più carica di valenza spirituale; può implicare un abbassamento attivo di sé." },
    { term: "discrezione", register: "comune-formale", note: "Più comportamentale: il non dire ciò che non è necessario dire." },
  ],

  antonyms: [
    { term: "arroganza", register: "comune", note: "La sopravvalutazione ostentata di sé a scapito del riconoscimento degli altri." },
    { term: "millanteria", register: "comune", note: "L’esibizione esagerata di meriti reali o immaginari." },
  ],

  relatedWords: ["riserbo", "ritrosia", "arroganza", "millanteria", "verecondia"],
  sourceLinks: {},

  paroliereNote:
    "La modestia ha un problema di reputazione nel mondo contemporaneo della personal " +
    "brand e del self-promotion obbligatorio. Chi non si vende bene sparisce. In " +
    "questo contesto, la modestia autentica richiede un coraggio quasi paradossale: " +
    "quello di sapere quanto si vale senza doverlo gridare. Il problema vero non è la " +
    "modestia in sé, ma la difficoltà di distinguerla dalla sua versione falsa — " +
    "quella che usa l’abbassamento come tecnica per ottenere conferme. La modestia " +
    "vera non cerca conferme: non ne ha bisogno.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "modestia — misura di sé tra virtù autentica e falsa umiltà",
    description: "Che cos’è la modestia: definizione etica, differenza da umiltà e timidezza, e il paradosso della modestia nell’era del personal branding.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
