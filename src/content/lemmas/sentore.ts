// Il Paroliere — Lemma: sentore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sentore: LemmaEntry = {
  lemma: "sentore",
  slug: "sentore",
  partOfSpeech: "sostantivo maschile",

  definition:
    "Percezione vaga e indistinta di qualcosa — un'impressione, un segnale debole, " +
    "un'intuizione ancora priva di forma precisa — che suggerisce la presenza o " +
    "l'imminenza di qualcosa senza confermarlo. Il sentore non è una prova né una " +
    "certezza: è qualcosa di più di un sospetto e di meno di una conferma. Si situa " +
    "nella zona grigia tra il percepire e il sapere, tra il fiutare e il vedere. Ha una " +
    "radice sensoriale precisa — viene da sentire — ma nel suo uso figurato ha perso la " +
    "specificità sensoriale per indicare qualsiasi forma di percezione intuitiva " +
    "anticipatoria.",

  shortDefinition:
    "Percezione vaga e anticipatoria di qualcosa; impressione indistinta che qualcosa " +
    "stia accadendo o stia per accadere.",

  register: ["comune", "letterario"],
  domains: ["linguistica", "psicologia", "società"],

  etymology:
    "Da sentire (latino sentire, «percepire, avvertire») + suffisso -ore che forma " +
    "sostantivi deverbali indicanti un processo o uno stato percettivo. La stessa radice " +
    "di senso, sensazione, consenso, sentimento.",

  examples: [
    "Aveva avuto un vago sentore che qualcosa non andasse, ma non riusciva a mettere il dito su nulla di preciso.",
    "C'era nell'aria un sentore di temporale: non ancora nuvole, ma quella qualità dell'aria che i vecchi contadini riconoscono.",
    "Il primo sentore dello scandalo arrivò da una fonte anonima: niente di verificabile, solo l'odore di qualcosa che stava per emergere.",
  ],

  synonyms: [
    {
      term: "presentimento",
      register: "comune",
      context: "più emotivo e carico, spesso verso qualcosa di grave",
    },
    {
      term: "indizio",
      register: "comune",
      context: "segnale parziale verso una conclusione",
    },
    {
      term: "impressione",
      register: "comune",
      context: "percezione soggettiva non verificata",
    },
    {
      term: "fiuto",
      register: "colloquiale",
      context: "capacità intuitiva quasi animale",
    },
    {
      term: "avvisaglia",
      register: "comune",
      context: "primo segnale di qualcosa che arriva",
    },
  ],

  antonyms: [
    {
      term: "certezza",
      register: "comune",
      context: "conoscenza verificata e piena",
    },
    {
      term: "conferma",
      register: "comune",
      context: "validazione di un'ipotesi",
    },
    {
      term: "evidenza",
      register: "comune",
      context: "prova visibile e chiara",
    },
  ],

  relatedWords: [
    "reminiscenza",
    "subliminale",
    "intuizione",
    "presentimento",
    "percezione",
    "fiuto",
    "avvisaglia",
    "sospetto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sentore/",
    wiktionary: "https://it.wiktionary.org/wiki/sentore",
  },

  paroliereNote:
    "Sentore è una parola che fa ciò che poche parole sanno fare: descrive lo spazio " +
    "tra il percepire e il sapere, quella zona in cui l'intuizione ha già registrato " +
    "qualcosa che la coscienza non ha ancora formulato. È più precisa di sospetto — che " +
    "ha una connotazione quasi sempre negativa — e più concreta di presentimento — che " +
    "tende al soprannaturale. Sentore è terreno, olfattivo nell'immagine di base, quasi " +
    "animale: la capacità di fiutare ciò che non si vede ancora.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sentore — definizione, uso, sinonimi | Il Paroliere",
    description:
      "Cosa significa sentore, come si usa, differenza da sospetto e presentimento. " +
      "La zona tra intuizione e certezza. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
