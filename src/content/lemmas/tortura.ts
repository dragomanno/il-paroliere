// Il Paroliere — Lemma: TORTURA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tortura: LemmaEntry = {
  lemma: "tortura",
  slug: "tortura",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Inflizione deliberata e sistematica di dolore fisico o sofferenza psicologica a una persona, " +
    "da parte di un agente statale o con il suo avallo, allo scopo di ottenere confessioni, informazioni, " +
    "di punire o di intimidire. La Convenzione ONU contro la tortura (CAT, 1984) ne fornisce la definizione " +
    "giuridica vincolante e ne vieta la pratica in modo assoluto, senza deroghe neppure in stato di emergenza. " +
    "Nella storia, la tortura era procedura giudiziaria ordinaria; la sua abolizione è conquista dell'Illuminismo. " +
    "In etica, il divieto assoluto di tortura è uno dei pochi casi di norma morale ritenuta inderogabile " +
    "anche dai filosofi non assolutisti.",
  shortDefinition: "Inflizione deliberata di dolore per ottenere informazioni o punire; vietata in modo assoluto dalla Convenzione ONU del 1984.",
  register: ["formale", "tecnico-giuridico"],
  domains: ["diritto internazionale", "storia", "etica"],
  etymology:
    "Dal latino *tortura*, derivato di *torquere* ('torcere, sottoporre a tormento'). " +
    "Il termine designava originariamente il supplizio fisico del torcimento delle membra.",
  examples: [
    "La Convenzione ONU contro la tortura del 1984 obbliga gli Stati firmatari a criminalizzare e perseguire qualsiasi atto di tortura.",
    "I tribunali internazionali hanno stabilito che le tecniche di interrogatorio cosiddette 'avanzate' possono integrare la definizione legale di tortura.",
    "Il pensiero illuminista di Beccaria fu tra i primi a denunciare la tortura giudiziaria come pratica inumana e inefficace.",
  ],
  synonyms: [
    { term: "supplizio", register: "storico-letterario", context: "pena corporale inflitta come punizione o mezzo di coercizione" },
    { term: "tormento", register: "letterario", context: "dolore fisico o psicologico prolungato" },
  ],
  antonyms: [
    { term: "tutela", register: "tecnico-giuridico", context: "protezione dei diritti della persona" },
    { term: "protezione", register: "standard", context: "difesa dell'integrità fisica e psicologica" },
    { term: "rispetto della dignità", register: "formale", context: "riconoscimento del valore intrinseco della persona" },
  ],
  relatedWords: ["violenza", "coercizione", "diritto", "diritti-umani", "detenzione"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/tortura/",
    wiktionary: "https://it.wiktionary.org/wiki/tortura",
  },
  paroliereNote:
    "Importante la distinzione giuridica tra *tortura* (dolore inflitto intenzionalmente da agenti statali " +
    "o con consenso statale) e trattamenti inumani o degradanti (categoria più ampia, anch'essa vietata). " +
    "Il dibattito post-11 settembre ha riportato in auge argomenti sulla 'tortura preventiva' " +
    "(ticking bomb scenario): la filosofia morale li considera quasi unanimemente fallaci. " +
    "In Italia, il reato di tortura è stato introdotto solo nel 2017 (L. 110/2017), tardivamente rispetto " +
    "agli obblighi internazionali assunti nel 1988.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "TORTURA — definizione e uso | Il Paroliere",
    description: "Tortura: inflizione deliberata di dolore vietata dalla Convenzione ONU del 1984. Storia, diritto internazionale, etica del divieto assoluto.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
