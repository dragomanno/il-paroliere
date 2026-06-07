// Il Paroliere — Lemma: DELINQUENZA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const delinquenza: LemmaEntry = {
  lemma: "delinquenza",
  slug: "delinquenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Condizione o insieme di comportamenti che violano la legge penale; in sociologia, " +
    "la tendenza o l'abitudine al crimine, spesso analizzata in relazione a contesti di " +
    "marginalità sociale, povertà o esclusione. Delinquenza giovanile: forma di delinquenza " +
    "commessa da minori o giovani adulti, oggetto di specifiche politiche di prevenzione. " +
    "Delinquenza organizzata: attività criminale strutturata in associazioni stabili con " +
    "divisione dei ruoli e controllo territoriale.",
  shortDefinition: "Insieme di comportamenti che violano la legge penale; in sociologia, tendenza al crimine legata alla marginalità.",
  register: ["formale", "tecnico-giuridico", "sociologico"],
  domains: ["diritto", "sociologia"],
  etymology:
    "Dal latino *delinquentia*, derivato di *delinquere* (venir meno al proprio dovere, " +
    "commettere una colpa), composto di *de-* (privativo) e *linquere* (lasciare). " +
    "L'uso specializzato in senso giuridico si consolida in italiano tra Otto e Novecento.",
  examples: [
    "Il piano triennale per il contrasto alla delinquenza giovanile prevede interventi " +
    "educativi nelle scuole di periferia.",
    "La delinquenza organizzata si è infiltrata nel tessuto economico legale attraverso " +
    "operazioni di riciclaggio.",
    "Le statistiche mostrano che la delinquenza diminuisce dove aumentano occupazione " +
    "e coesione sociale.",
  ],
  synonyms: [
    { term: "criminalità", register: "formale", context: "uso statistico e fenomenologico" },
    { term: "illegalità", register: "neutro", context: "con accento sulla violazione di norme" },
  ],
  antonyms: [
    { term: "legalità", register: "formale", context: "osservanza delle norme giuridiche" },
    { term: "rispetto delle regole", register: "neutro", context: "condotta conforme all'ordinamento" },
  ],
  relatedWords: ["criminalita", "recidiva", "reato", "violenza", "norma"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/delinquenza",
    treccani: "https://www.treccani.it/vocabolario/delinquenza/",
  },
  paroliereNote:
    "In criminologia il termine ha subito un parziale slittamento semantico: " +
    "delinquenza tende a evocare il crimine di strada e la marginalità, mentre " +
    "criminalità ha una portata più ampia (include criminalità economica, di Stato, ecc.). " +
    "Usare con consapevolezza per evitare connotazioni stigmatizzanti verso classi sociali specifiche.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "DELINQUENZA — definizione | Il Paroliere",
    description:
      "Definizione di delinquenza: comportamenti che violano la legge penale, analizzati " +
      "in ottica giuridica e sociologica. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
