// Il Paroliere — Lemma: NORMATIVA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const normativa: LemmaEntry = {
  lemma: "normativa",
  slug: "normativa",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Insieme coordinato di norme che disciplinano un determinato settore, attività o materia. " +
    "Il termine è più ampio di *legge* (che designa un atto normativo specifico approvato dal Parlamento) " +
    "e più specifico di *diritto* (che indica l'intero sistema giuridico). " +
    "La normativa comprende fonti di diverso rango: leggi ordinarie, decreti legislativi, regolamenti " +
    "ministeriali, circolari, direttive europee recepite. In ambito tecnico, *normativa* può indicare " +
    "anche l'insieme di standard e specifiche tecniche (normativa ISO, normativa antincendio). " +
    "Nel linguaggio amministrativo e giornalistico italiano, il termine è diventato di uso comune " +
    "come sinonimo più generico di 'insieme di regole applicabili a una fattispecie'.",
  shortDefinition: "Insieme di norme che disciplinano un settore; più ampia della singola legge, comprende fonti di diverso rango gerarchico.",
  register: ["tecnico-giuridico", "formale", "linguaggio amministrativo"],
  domains: ["diritto", "linguaggio amministrativo"],
  etymology:
    "Derivato dell'aggettivo *normativo* (dal latino *norma* + suffisso *-ativus*), " +
    "sostantivato al femminile. Il suo uso prevalente come sostantivo è un'evoluzione recente " +
    "del linguaggio burocratico-amministrativo italiano del XX secolo.",
  examples: [
    "La normativa europea in materia di protezione dei dati personali (GDPR) ha introdotto obblighi stringenti per le imprese di tutti i settori.",
    "L'imprenditore si trovò ad affrontare una normativa antincendio aggiornata che richiedeva interventi strutturali nell'edificio.",
    "Il legale spiegò che la normativa vigente non prevedeva sanzioni per quel tipo di inadempimento contrattuale.",
  ],
  synonyms: [
    { term: "regolamentazione", register: "tecnico", context: "insieme di regole che disciplinano un settore" },
    { term: "legislazione", register: "formale", context: "insieme delle leggi vigenti in un ordinamento o su una materia" },
    { term: "disposizioni", register: "formale", context: "prescrizioni normative specifiche" },
  ],
  antonyms: [
    { term: "deregulation", register: "tecnico-economico", context: "eliminazione o riduzione delle norme che vincolano un settore" },
    { term: "vuoto normativo", register: "tecnico-giuridico", context: "assenza di norme applicabili a una fattispecie" },
  ],
  relatedWords: ["norma", "diritto", "legge", "contratto", "appalto", "cessione"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/normativa/",
    wiktionary: "https://it.wiktionary.org/wiki/normativa",
  },
  paroliereNote:
    "Il termine *normativa* è criticato da alcuni puristi come tecnicismo burocratico ridondante " +
    "(si preferisce *legge*, *regolamento*, *disciplina*), ma è ormai stabilmente radicato nell'italiano " +
    "giuridico e amministrativo. Utile per riferirsi all'insieme eterogeneo di fonti che governano " +
    "un settore senza doverle elencare tutte. Distinzione pratica: una *legge* è approvata dal Parlamento; " +
    "un *regolamento* è adottato dal governo o da enti pubblici; la *normativa* comprende entrambi " +
    "e anche le norme tecniche private (UNI, ISO) quando hanno valore vincolante per contratto o legge.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "NORMATIVA — definizione e uso | Il Paroliere",
    description: "Normativa: insieme di norme che disciplinano un settore, di rango diverso (leggi, decreti, regolamenti). Linguaggio giuridico e amministrativo.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
