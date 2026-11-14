// Il Paroliere — Lemma: carta meteorologica
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cartaMeteorologica: LemmaEntry = {
  lemma: "carta meteorologica",
  slug: "carta-meteorologica",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Carta geografica su cui sono riportati, per un dato istante, i valori delle grandezze meteorologiche osservati o previsti su una vasta area: la pressione al livello del mare tracciata con le isobare, i centri di alta e bassa pressione, i fronti, i venti, le precipitazioni e la nuvolosità. Quella che rappresenta la situazione osservata nello stesso momento in molte stazioni si chiama carta sinottica; le carte in quota mostrano invece l'altezza delle superfici di pressione costante con le isoipse.",
  shortDefinition: "Carta che mostra in un dato momento pressione, fronti, venti e precipitazioni su una vasta area, con le isobare.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "meteorologia",
    "cartografia",
  ],
  etymology: "Carta dal latino charta «foglio di papiro», dal greco chártēs; meteorologico da meteorologia, dal greco meteōrología «studio dei fenomeni celesti», da metéōros «sospeso in alto». La prima carta del tempo pubblicata su un quotidiano uscì sul Times di Londra il 1° aprile 1875, preparata da Francis Galton.",
  examples: [
    "Sulla carta meteorologica di stamattina una depressione profonda si avvicina all'Irlanda, con i fronti già sulla Francia.",
    "In fondo al telegiornale il meteorologo indicava le isobare sulla carta meteorologica con una bacchetta.",
    "Per preparare l'uscita in barca ha confrontato le carte meteorologiche di tre giorni consecutivi.",
  ],
  synonyms: [
    {
      term: "carta sinottica",
      register: "tecnico-scientifico",
      context: "la carta della situazione osservata nello stesso momento in molte stazioni",
    },
    {
      term: "carta del tempo",
      register: "comune",
      context: "formula divulgativa",
    },
    {
      term: "mappa meteo",
      register: "colloquiale",
      context: "nel linguaggio dei siti e delle app",
    },
  ],
  antonyms: [],
  relatedWords: [
    "isobara",
    "fronte-atmosferico",
    "anticiclone",
    "depressione",
    "pressione-atmosferica",
    "isoipsa",
    "cartografia",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/carta/",
    wiktionary: "https://it.wiktionary.org/wiki/carta",
  },
  paroliereNote: "La carta meteorologica è una delle invenzioni grafiche più riuscite dell'Ottocento: trasforma migliaia di numeri in poche linee leggibili da chiunque. Il merito di averla portata sui giornali va a Francis Galton, lo stesso che diede il nome all'→ anticiclone; la sua prima carta sul Times, del 1875, mostrava il tempo del giorno prima e conteneva già quasi tutti gli elementi di quelle odierne. Leggerla bene richiede di guardare insieme le isobare (→ isobara) e i fronti: dove le linee si stringono c'è vento, dove arriva un → fronte atmosferico cambia il tempo.",
  seo: {
    title: "Carta meteorologica — significato, isobare e fronti | Il Paroliere",
    description: "Che cos'è una carta meteorologica: la mappa di pressione, fronti, venti e piogge in un dato momento. Carta sinottica, prima carta del 1875, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
