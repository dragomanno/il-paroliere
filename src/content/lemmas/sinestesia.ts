// Il Paroliere — Lemma: sinestesia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sinestesia: LemmaEntry = {
  lemma: "sinestesia",
  slug: "sinestesia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In neurologia, una condizione percettiva per cui la stimolazione di un senso " +
    "attiva automaticamente anche un altro senso — chi la vive può, per esempio, " +
    "percepire colori nell'ascoltare suoni o numeri. In retorica, la figura che " +
    "accosta nella stessa espressione parole appartenenti a sensi diversi, come " +
    "«un silenzio caldo» o «un colore assordante», per creare un'immagine più " +
    "densa di quanto ciascun senso riuscirebbe a rendere da solo.",

  shortDefinition:
    "Percezione neurologica che unisce sensi diversi; in retorica, figura che accosta parole di sensi diversi.",

  register: ["tecnico", "letterario"],
  domains: ["neurologia", "psicologia", "linguistica", "poesia"],

  etymology:
    "Dal greco sýn («insieme») e aísthesis («sensazione, percezione»). Il termine " +
    "retorico e quello neurologico condividono l'etimologia ma si sono sviluppati " +
    "come discipline separate a partire dal XIX secolo.",

  examples: [
    "Per chi vive la sinestesia cromatica-numerica, ogni cifra ha un colore fisso, indipendente dalla volontà.",
    "«Un silenzio caldo copriva la stanza» è una sinestesia che unisce tatto e udito in un'unica immagine.",
    "Baudelaire e i simbolisti hanno fatto della sinestesia uno strumento centrale della loro poetica delle corrispondenze.",
  ],

  synonyms: [
    {
      term: "commistione sensoriale",
      register: "tecnico",
      context: "descrizione più clinica, usata in ambito neuroscientifico",
    },
  ],

  antonyms: [],

  relatedWords: ["metafora", "percezione", "sensi", "corrispondenze", "epidermico"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/sinestesia",
  },

  paroliereNote:
    "La sinestesia è un caso raro in cui un termine scientifico e una figura " +
    "retorica condividono lo stesso nome senza essere la stessa cosa: la " +
    "sinestesia neurologica è un fatto involontario del cervello, quella retorica " +
    "è una scelta costruita — ma entrambe raccontano che i confini tra i sensi, " +
    "nella percezione umana, sono più permeabili di quanto la fisiologia da " +
    "manuale suggerisca.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sinestesia — Il Paroliere",
    description:
      "Definizione originale di 'sinestesia': condizione neurologica che unisce " +
      "sensi diversi, e figura retorica che li accosta nella stessa espressione. Con esempi e riferimento ai simbolisti.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
