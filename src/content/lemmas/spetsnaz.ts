// Il Paroliere — Lemma: spetsnaz
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const spetsnaz: LemmaEntry = {
  lemma: "spetsnaz",
  slug: "spetsnaz",
  partOfSpeech: "sostantivo maschile invariabile (acronimo/abbreviazione dal russo)",
  gender: "maschile",

  definition:
    "Abbreviazione del russo Спецназ (Spetsnaz), forma contratta di Специального Назначения " +
    "(Spetsial'nogo Naznacheniya, genitivo; nominativo: Специальное Назначение, " +
    "Spetsial'noe Naznacheniye), che significa letteralmente «di designazione speciale» o " +
    "«a scopo speciale». Indica i reparti militari e di polizia della Federazione Russa — e " +
    "precedentemente dell'Unione Sovietica — specializzati in operazioni non convenzionali: " +
    "antiterrorismo, ricognizione profonda, sabotaggio, recupero ostaggi, operazioni clandestine. " +
    "Non esiste un unico corpo Spetsnaz: il termine è un'ombrella che comprende unità diverse " +
    "dipendenti da diversi ministeri e agenzie — Ministero della Difesa (GRU Spetsnaz), FSB " +
    "(Alpha, Vympel), Guardia Nazionale (Rosgvardia), Ministero degli Interni. Le unità più " +
    "note internazionalmente includono: Alpha, unità antiterrorismo dell'FSB, nota per operazioni " +
    "come la crisi del teatro Dubrovka (2002) e la scuola di Beslan (2004); Vympel, specializzata " +
    "in operazioni di sabotaggio e guerra non convenzionale; e il GRU Spetsnaz, reparti " +
    "dell'intelligence militare attivi in conflitti dal Vietnam all'Afghanistan, dalla Cecenia " +
    "all'Ucraina. In italiano giornalistico il termine è traslitterato anche come SpezNas o Speznas.",

  shortDefinition:
    "Reparti speciali russi «a scopo speciale»; denominazione ombrella per le unità d'élite " +
    "delle forze armate e di sicurezza della Federazione Russa.",

  register: ["tecnico militare", "giornalistico"],
  domains: ["storia militare", "geopolitica", "sicurezza", "Russia"],

  etymology:
    "Contrazione del russo Спецназ (Spetsnaz), a sua volta abbreviazione di Специального " +
    "Назначения («di designazione speciale»). Il termine si afferma durante la Guerra Fredda " +
    "per designare i reparti non convenzionali sovietici.",

  examples: [
    "«Le unità Spetsnaz dell'FSB gestirono l'assalto al teatro Dubrovka nel 2002: l'operazione liberò molti ostaggi ma causò la morte di circa 130 persone, soprattutto per l'uso del gas narcotizzante.»",
    "«I reparti Spetsnaz del GRU sono stati accusati di operazioni clandestine in Ucraina, Georgia e in diversi paesi europei.»",
    "«L'addestramento Spetsnaz è considerato tra i più duri al mondo: combatte in condizioni estreme, con risorse minime e obiettivi ad altissimo rischio.»",
  ],

  synonyms: [
    {
      term: "forze speciali russe",
      register: ["comune"],
      context: "denominazione descrittiva",
    },
    {
      term: "reparti speciali",
      register: ["tecnico"],
      context: "denominazione generica",
    },
  ],

  antonyms: [
    {
      term: "esercito regolare",
      register: ["tecnico"],
      context: "forza convenzionale opposta",
    },
    {
      term: "forza convenzionale",
      register: ["tecnico"],
      context: "opposto delle forze speciali",
    },
  ],

  relatedWords: [
    "kommando",
    "pasdaran",
    "FSB",
    "GRU",
    "Alpha",
    "Vympel",
    "Federazione Russa",
    "guerra non convenzionale",
    "antiterrorismo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/spetsnaz/",
    wiktionary: "https://it.wiktionary.org/wiki/spetsnaz",
  },

  paroliereNote:
    "Spetsnaz è uno di quei termini tecnico-militari che il giornalismo usa spesso senza " +
    "definirlo, dando per scontata una familiarità che molti lettori non hanno. Vale la pena " +
    "ricordare che non è un corpo unico ma una famiglia di reparti diversi, dipendenti da catene " +
    "di comando diverse e con missioni distinte — e che la loro storia include operazioni " +
    "controverse sul piano del diritto internazionale e dei diritti umani. La precisione " +
    "terminologica serve qui non solo alla chiarezza lessicale ma alla responsabilità informativa. " +
    "Nota: la traslitterazione italiana SpezNas riflette la struttura dell'acronimo russo, ma " +
    "la forma internazionalmente più diffusa è Spetsnaz.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Spetsnaz — reparti speciali russi, storia, unità | Il Paroliere",
    description:
      "Spetsnaz: cosa significa, quali unità comprende, dalla Guerra Fredda all'Ucraina. " +
      "Alpha, Vympel, GRU. Definizione completa con storia e nota critica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
