// Il Paroliere — Lemma: mangiaufo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const mangiaufo: LemmaEntry = {
  lemma: "mangiaufo",
  slug: "mangiaufo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Persona eccessivamente credulona, che abbocca senza spirito critico a qualsiasi " +
    "notizia stravagante, teoria del complotto o storia inverosimile — specialmente " +
    "quelle che riguardano fenomeni soprannaturali, avvistamenti di oggetti volanti " +
    "non identificati o spiegazioni alternative alla realtà condivisa. " +
    "Il termine è affettuosamente ironico: non indica necessariamente malafede " +
    "ma una disposizione all'ingenuità credulona che può diventare comica.",

  shortDefinition:
    "Chi crede ingenuamente a qualsiasi storia stravagante o teoria bizzarra.",

  register: ["colloquiale", "ironico"],
  domains: ["linguaggio informale", "cultura popolare", "registro ironico"],

  etymology:
    "Composto italiano di mangiare e ufo (dall'inglese UFO, Unidentified Flying Object). " +
    "Nata probabilmente negli anni Settanta-Ottanta nell'italiano parlato, " +
    "sulla scia della popolarità del fenomeno degli avvistamenti UFO nella cultura " +
    "di massa italiana. La struttura mangia- + sostantivo è produttiva in italiano " +
    "(mangianastri, mangiadischi, mangiafuoco).",

  examples: [
    "Mio zio è un mangiaufo patentato: per lui ogni nuvola strana è una spia " +
    "del governo e ogni guasto all'auto è causato da campi magnetici alieni.",
    "Non dirlo in giro, ma anche il più navigato dei giornalisti ha una vena " +
    "mangiaufo sepolta da qualche parte.",
    "Il convegno sembrava una raduno di mangiaufo, eppure c'erano fisici " +
    "con dottorato sul palco.",
    "In rete, il confine tra mangiaufo e scettico ironico si è fatto " +
    "quasi impossibile da tracciare.",
  ],

  synonyms: [
    {
      term: "credulone",
      register: "colloquiale",
      context: "più generico, non legato necessariamente al soprannaturale",
    },
    {
      term: "complottista",
      register: "comune",
      context:
        "con sfumatura più paranoica e sistematica, non necessariamente ironica",
    },
    {
      term: "gonzo",
      register: "colloquiale",
      context: "ingenuo, facilmente ingannabile — senza la connotazione soprannaturale",
    },
  ],

  antonyms: [
    {
      term: "scettico",
      register: "comune",
      context: "chi sospende il giudizio in assenza di prove sufficienti",
    },
    {
      term: "razionalista",
      register: "formale",
      context: "chi affida la valutazione dei fatti a criteri logici verificabili",
    },
  ],

  relatedWords: [
    "credulità",
    "ingenuità",
    "complottismo",
    "pensiero magico",
    "UFO",
    "pseudoscienza",
    "bufala",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/mangiaufo",
  },

  paroliereNote:
    "Mangiaufo è una delle parole più oneste della lingua italiana popolare: " +
    "dice esattamente quello che vuole dire, senza mascherare il giudizio " +
    "sotto strati di eufemismo. C'è qualcosa di simpatico nel termine — " +
    "è ironico ma non feroce, scherzoso ma non cattivo. " +
    "In un'epoca in cui la parola 'complottista' è diventata un'etichetta politica " +
    "pesante, mangiaufo conserva una leggerezza quasi affettuosa. " +
    "Il Paroliere lo include perché un dizionario che non tiene conto del registro " +
    "ironico e popolare racconta solo metà della lingua.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Mangiaufo — Il Paroliere",
    description:
      "Definizione originale di 'mangiaufo': chi crede ingenuamente a storie " +
      "stravaganti. Con etimologia, esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
