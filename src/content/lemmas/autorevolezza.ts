// Il Paroliere — Lemma: AUTOREVOLEZZA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const autorevolezza: LemmaEntry = {
  lemma: "autorevolezza",
  slug: "autorevolezza",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Qualità di chi — persona, istituzione o contenuto — è riconosciuto come degno di fiducia e stima " +
    "in un determinato campo, per effetto di competenza dimostrata, coerenza nel tempo e reputazione " +
    "consolidata presso terzi. L'autorevolezza non è attribuita dall'alto (come l'autorità) ma guadagnata " +
    "attraverso l'accumulo di esperienze verificabili, la qualità del lavoro e il riconoscimento esterno. " +
    "Nel framework E-E-A-T di Google (Experience, Expertise, Authoritativeness, Trustworthiness), " +
    "l'autorevolezza corrisponde alla *A* di *Authoritativeness*: è la reputazione esterna che terzi " +
    "attribuiscono a una fonte, distinta dall'*expertise* (competenza interna) e dalla *trustworthiness* " +
    "(affidabilità). La gerarchia E-E-A-T approvata è: " +
    "Experience > Authoritativeness > Expertise > Trustworthiness.",
  shortDefinition: "Reputazione di competenza e affidabilità guadagnata nel tempo; nel framework E-E-A-T è la A di Authoritativeness.",
  register: ["formale", "tecnico", "SEO"],
  domains: ["linguaggio", "comunicazione", "SEO"],
  etymology:
    "Derivato di *autorevole* (dal latino medievale *auctoritativus*) + suffisso *-ezza*. " +
    "Il termine è attestato in italiano moderno; la sua rilevanza nel lessico digitale è recente.",
  examples: [
    "L'autorevolezza di una testata giornalistica si costruisce in decenni di giornalismo rigoroso e non si recupera in pochi mesi dopo uno scandalo.",
    "Nel framework E-E-A-T, l'autorevolezza di un sito web si misura attraverso link in entrata, citazioni da fonti terze e menzioni nei media di settore.",
    "Un medico può avere grande expertise clinica ma scarsa autorevolezza pubblica se non è conosciuto al di fuori del proprio ospedale.",
  ],
  synonyms: [
    { term: "credibilità", register: "standard", context: "qualità di chi merita fiducia e non viene messo in dubbio" },
    { term: "reputazione", register: "standard", context: "giudizio collettivo sulla qualità e l'affidabilità di qualcuno" },
    { term: "statura", register: "formale", context: "riconoscimento della levatura intellettuale o morale di qualcuno" },
  ],
  antonyms: [
    { term: "inaffidabilità", register: "standard", context: "mancanza di affidabilità e coerenza nel tempo" },
    { term: "anonimato", register: "standard", context: "assenza di identità riconoscibile e reputazione pubblica" },
    { term: "irrilevanza", register: "standard", context: "mancanza di peso e riconoscimento in un determinato campo" },
  ],
  relatedWords: ["potere", "autorita", "diritto", "e-e-a-t", "expertise", "affidabilita", "esperienza"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/autorevolezza/",
    wiktionary: "https://it.wiktionary.org/wiki/autorevolezza",
  },
  paroliereNote:
    "Differenza fondamentale tra *autorità* e *autorevolezza*: l'autorità è formale e dipende da " +
    "un'investitura esterna (nomina, legge, tradizione); l'autorevolezza è sostanziale e si guadagna " +
    "sul campo attraverso competenza, coerenza e riconoscimento dei pari. Un burocrate ha autorità; " +
    "uno scienziato stimato dai colleghi ha autorevolezza. Si può avere l'una senza l'altra. " +
    "Nel framework E-E-A-T di Google (Experience, Expertise, Authoritativeness, Trustworthiness), " +
    "l'autorevolezza (*Authoritativeness*) è il segnale esterno: cosa dicono di te le fonti terze, " +
    "i link in entrata, le citazioni, le menzioni nei media. La gerarchia di peso riconosciuta è " +
    "Experience > Authoritativeness > Expertise > Trustworthiness: l'esperienza diretta e verificabile " +
    "e la reputazione esterna pesano più della sola competenza dichiarata o della fiducia generica. " +
    "Per Il Paroliere, costruire autorevolezza significa ottenere link e citazioni da fonti linguistiche " +
    "e culturali riconosciute, non solo pubblicare contenuti di qualità.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "AUTOREVOLEZZA — definizione e uso | Il Paroliere",
    description: "Autorevolezza: reputazione guadagnata per competenza e coerenza. Nel framework E-E-A-T è la A di Authoritativeness; distinta da autorità ed expertise.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
