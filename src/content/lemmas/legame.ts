// Il Paroliere — Lemma: legame
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const legame: LemmaEntry = {
  lemma: "legame",
  slug: "legame",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "psicologico", "letterario"],
  domains: ["psicologia", "sociologia", "affetti"],

  definition:
    "Vincolo che unisce persone, gruppi o elementi e dà continuità a una relazione nel tempo. Nel senso affettivo nomina una vicinanza nutrita da fiducia, storia e reciprocità; può essere familiare, amicale o amoroso. È più caldo e coinvolgente della → relazione, ma non dovrebbe chiedere la rinuncia a sé: oltre quel limite può trasformarsi in → dipendenza.",

  shortDefinition:
    "Vincolo durevole tra persone o realtà diverse, fondato su continuità, fiducia e reciprocità.",

  etymology:
    "Derivato di legare, dal latino ligare «unire, annodare». La metafora del nodo resta viva nell’uso figurato: un legame tiene insieme, ma può anche stringere troppo.",

  examples: [
    "Il legame tra le due sorelle ha resistito a molti anni vissuti in paesi diversi.",
    "Quel progetto ha creato un legame inatteso tra vicini che prima si salutavano appena.",
    "Un legame sano lascia spazio alle amicizie, al lavoro e alle scelte di ciascuno.",
  ],

  synonyms: [
    { term: "vincolo", register: "comune/formale", context: "Più neutro o normativo; può evocare un obbligo, mentre legame conserva più facilmente calore affettivo." },
    { term: "affetto", register: "comune", context: "Indica il sentimento benevolo, non necessariamente la struttura reciproca e durevole del rapporto." },
    { term: "connessione", register: "comune", context: "Può essere immediata o momentanea; il legame implica di solito maggiore sedimentazione nel tempo." },
  ],

  antonyms: [
    { term: "distacco", register: "comune", context: "Allontanamento emotivo o pratico da una persona o da un contesto." },
    { term: "estraneità", register: "comune", context: "Assenza del sentirsi uniti o coinvolti reciprocamente." },
  ],

  relatedWords: ["relazione", "dipendenza", "connessione", "comunità", "desiderio", "aspirazione", "speranza", "attesa", "frustrazione", "rassegnazione", "accettazione", "intimità", "fiducia"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/legame",
  },

  paroliereNote:
    "Il legame non è una catena: la sua qualità si misura anche dalla libertà che lascia respirare. Nel continuum relazionale, → relazione nomina il rapporto, legame la sua densità affettiva, → dipendenza il punto in cui la vicinanza diventa necessità eccessiva; accettazione e → rassegnazione non sono, perciò, modi equivalenti di restare.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Legame — definizione, sinonimi, uso | Il Paroliere",
    description: "Legame: vincolo affettivo e durevole fondato su fiducia e reciprocità. Definizione, sinonimi, esempi e differenza da relazione e dipendenza.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
