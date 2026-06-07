// Il Paroliere — Lemma: VIOLENZA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const violenza: LemmaEntry = {
  lemma: "violenza",
  slug: "violenza",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Uso della forza fisica o psicologica per dominare, offendere, costringere o danneggiare una persona " +
    "o un gruppo, contro la sua volontà. La sociologia distingue varie forme: violenza interpersonale " +
    "(fisica, sessuale, psicologica), violenza di genere (diretta prevalentemente contro le donne in ragione " +
    "del loro sesso), violenza di Stato (esercitata dagli apparati istituzionali), violenza simbolica " +
    "(il concetto di Pierre Bourdieu: meccanismi di dominio che si esercitano attraverso il linguaggio, " +
    "le rappresentazioni e le strutture sociali, senza ricorso alla forza fisica). " +
    "In diritto, la violenza è causa di vizio del consenso nei contratti e circostanza aggravante nei reati.",
  shortDefinition: "Uso della forza fisica o psicologica per dominare o costringere; in sociologia include violenza simbolica e di Stato.",
  register: ["standard", "tecnico-giuridico", "sociologico"],
  domains: ["sociologia", "diritto", "psicologia"],
  etymology:
    "Dal latino *violentia*, derivato di *violentus* ('impetuoso, che usa forza'), connesso a *vis* ('forza'). " +
    "In italiano dal XIII secolo.",
  examples: [
    "Le statistiche mostrano che la violenza domestica colpisce prevalentemente donne e minori, spesso in contesti di dipendenza economica.",
    "Bourdieu definisce la violenza simbolica come quel meccanismo invisibile attraverso cui il dominato accetta come naturali i valori del dominante.",
    "L'art. 1435 del codice civile prevede che il contratto sia annullabile quando il consenso è stato estorto con violenza.",
  ],
  synonyms: [
    { term: "brutalità", register: "standard", context: "crudeltà fisica o morale manifesta" },
    { term: "sopruso", register: "standard", context: "abuso di forza o potere su qualcuno" },
    { term: "coercizione", register: "formale", context: "imposizione della propria volontà con la forza" },
    { term: "forza", register: "standard", context: "energia fisica usata per imporre qualcosa" },
  ],
  antonyms: [
    { term: "pace", register: "standard", context: "assenza di conflitto e ostilità" },
    { term: "non-violenza", register: "etico-politico", context: "principio di resistenza senza ricorso alla forza" },
    { term: "dialogo", register: "standard", context: "confronto verbale come alternativa alla forza" },
    { term: "consenso", register: "formale", context: "accordo libero che esclude la coercizione" },
  ],
  relatedWords: ["tortura", "coercizione", "potere", "diritto", "violazione", "conflitto", "criminalita"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/violenza/",
    wiktionary: "https://it.wiktionary.org/wiki/violenza",
  },
  paroliereNote:
    "Il concetto bourdieusiano di *violenza simbolica* ha ampliato enormemente il campo semantico del termine, " +
    "includendo forme di dominio non fisiche ma altrettanto pervasive: stereotipi di genere, " +
    "discriminazione sistemica, linguaggio escludente. Attenzione all'uso giornalistico abusato: " +
    "non tutto ciò che è 'forte' o 'brusco' costituisce violenza nel senso sociologico o giuridico del termine. " +
    "In diritto penale, *violenza* come mezzo del reato (es. rapina, violenza sessuale) va distinta dalla " +
    "violenza come vizio del consenso civilistico.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "VIOLENZA — definizione e uso | Il Paroliere",
    description: "Violenza: forza fisica o psicologica usata per dominare o costringere. Violenza di genere, simbolica (Bourdieu), di Stato, diritto.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
