// Il Paroliere — Lemma: tacito
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tacito: LemmaEntry = {
  lemma: "tacito",
  slug: "tacito",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Ciò che non viene detto ma è comunque inteso, riconosciuto o rispettato da " +
    "tutti. Un accordo tacito non ha bisogno di firme: esiste nel comportamento, " +
    "nella consuetudine, nel silenzio condiviso. In ambito giuridico indica il " +
    "consenso o l'obbligazione che si desume dalla condotta delle parti, non da " +
    "una dichiarazione espressa.",

  shortDefinition:
    "Non dichiarato esplicitamente, ma inteso e riconosciuto: vale per i silenzi, i comportamenti, gli accordi non scritti.",

  register: ["comune", "tecnico"],
  domains: ["comunicazione", "diritto", "quotidiano"],

  etymology:
    "Dal latino tacitus, participio passato di tacere, 'stare in silenzio, non " +
    "parlare'. Connesso alla stessa radice del nome del grande storico romano " +
    "Tacito, celebre per la densità e l'essenzialità della sua prosa.",

  examples: [
    "C'era un accordo tacito tra loro: nessuno avrebbe parlato di quella sera.",
    "Il consenso tacito della direzione era chiaro a tutti, anche senza una " +
    "comunicazione ufficiale.",
    "In diritto, il rinnovo tacito del contratto scatta quando nessuna delle " +
    "parti comunica il recesso nei termini previsti.",
    "Quella regola non scritta era tacita ma inviolabile: lo sapevano tutti, " +
    "la prima settimana.",
  ],

  synonyms: [
    {
      term: "implicito",
      register: "comune",
      context: "contenuto senza essere dichiarato — più logico, meno silenzioso",
    },
    {
      term: "sottinteso",
      register: "comune",
      context: "non detto perché noto o ovvio",
    },
    {
      term: "non detto",
      register: "comune",
      context: "locuzione che copre sia il tacito per scelta che quello per convenzione",
    },
    {
      term: "silenzioso",
      register: "comune",
      context: "privo di suono o di parole — più fisico, meno semantico di 'tacito'",
    },
  ],

  antonyms: [
    {
      term: "esplicito",
      register: "comune",
      context: "dichiarato apertamente, senza ambiguità",
    },
    {
      term: "espresso",
      register: "tecnico",
      context: "nel linguaggio giuridico: consenso o volontà manifestata in forma diretta",
    },
  ],

  relatedWords: [
    "silenzio",
    "tacere",
    "implicito",
    "sottinteso",
    "consenso",
    "consuetudine",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/tacito/",
    wiktionary: "https://it.wiktionary.org/wiki/tacito",
  },

  paroliereNote:
    "C'è qualcosa di potente nel tacito: ciò che non ha bisogno di essere detto " +
    "è spesso ciò che regge davvero i rapporti — tra persone, tra istituzioni, " +
    "tra gruppi. Il diritto lo riconosce come forma valida di accordo; la vita " +
    "quotidiana lo usa continuamente, senza nominarla. Forse è proprio per questo " +
    "che la parola conserva una certa eleganza: non è il silenzio della reticenza, " +
    "ma quello dell'intesa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tacito — Il Paroliere",
    description:
      "Definizione originale di 'tacito': non dichiarato ma inteso, dagli accordi " +
      "non scritti al consenso giuridico. Con esempi, sinonimi ed etimologia latina.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
