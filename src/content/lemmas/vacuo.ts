// Il Paroliere — Lemma: vacuo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vacuo: LemmaEntry = {
  lemma: "vacuo",
  slug: "vacuo",
  partOfSpeech: "aggettivo",

  definition:
    "Privo di contenuto reale sotto una superficie che può anche sembrare piena: si dice di discorsi " +
    "che girano su sé stessi, di persone che abitano la forma senza abitare il senso, di gesti che " +
    "imitano la profondità senza toccarla. In fisica, indica l'assenza di materia in uno spazio; " +
    "nel registro comune e letterario la mancanza è sempre di sostanza, non di volume.",

  shortDefinition:
    "Vuoto di senso e di sostanza: ciò che appare ma non è, che suona ma non dice nulla di reale.",

  register: ["comune", "letterario"],
  domains: ["linguaggio", "carattere", "fisica"],

  etymology:
    "Dal latino vacuus, 'vuoto, privo di', derivato di vacare, 'essere vuoto, essere libero'. " +
    "La stessa radice di vacanza e vacante.",

  examples: [
    "Un'ora di riunione vacua: molte parole, nessuna decisione, zero direzione.",
    "Aveva un sorriso vacuo che non si capiva mai se fosse gentilezza o assenza.",
    "La conversazione era vacua non per mancanza di intelligenza, ma per eccesso di prudenza.",
    "In fisica il vacuo assoluto non esiste, eppure la parola si usa come se fosse raggiungibile.",
  ],

  synonyms: [
    {
      term: "vuoto",
      register: "comune",
      context: "più diretto, meno connotato stilisticamente",
    },
    {
      term: "inconsistente",
      register: "comune",
      context: "enfatizza la mancanza di solidità più che di senso",
    },
    {
      term: "superficiale",
      register: "comune",
      context: "manca di profondità, ma non necessariamente di contenuto",
    },
  ],

  antonyms: [
    {
      term: "denso",
      register: "comune",
      context: "ricco di contenuto, di peso, di senso",
    },
    {
      term: "sostanzioso",
      register: "comune",
      context: "con materia reale sotto la forma",
    },
  ],

  relatedWords: [
    "vacuità",
    "vacanza",
    "vuoto",
    "vacante",
    "svuotare",
    "inconsistenza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/vacuo/",
    wiktionary: "https://it.wiktionary.org/wiki/vacuo",
  },

  paroliereNote:
    "Il vacuo è interessante proprio perché non è il vuoto: il vuoto è dichiarato, " +
    "il vacuo si traveste. Un discorso vuoto non inganna nessuno; un discorso vacuo " +
    "può sembrare pieno per molto tempo. È la differenza tra l'assenza e la simulazione " +
    "della presenza — una distinzione che riguarda il linguaggio quanto le persone.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Vacuo — Il Paroliere",
    description:
      "Definizione originale di 'vacuo': vuoto di senso e sostanza, ciò che suona ma non dice nulla di reale. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
