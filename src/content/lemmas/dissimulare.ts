// Il Paroliere — Lemma: dissimulare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dissimulare: LemmaEntry = {
  lemma: "dissimulare",
  slug: "dissimulare",
  partOfSpeech: "verbo",

  definition:
    "Nascondere o attenuare volontariamente un sentimento, un'intenzione o una " +
    "condizione, senza arrivare alla menzogna aperta. Chi dissimula non afferma il " +
    "falso: evita di affermare il vero, lascia che l'altro creda ciò che non è, " +
    "mantenendo una distanza ambigua tra il proprio stato interiore e ciò che mostra " +
    "al mondo. È una pratica relazionale antica, codificata nella trattatistica " +
    "rinascimentale e barocca.",

  shortDefinition:
    "Nascondere o attenuare un sentimento o un'intenzione senza mentire apertamente: " +
    "un silenzio strategico, non una bugia.",

  register: ["comune", "letterario"],
  domains: ["psicologia", "retorica", "comportamento"],

  etymology:
    "Dal latino dissimulare, composto di dis- (prefisso di negazione o separazione) e " +
    "simulare (fingere, dal latino similis, simile). Dissimulare è quindi il " +
    "contrario di simulare: mentre chi simula finge ciò che non è, chi dissimula " +
    "nasconde ciò che è.",

  examples: [
  ],

  synonyms: [
    { term: "fingere", register: "comune", context: "più generico, comprende sia la dissimulazione che la simulazione" },
    { term: "celare", register: "letterario", context: "nascondere con deliberazione, con accento sull'atto del nascondere piuttosto che sul risultato" },
    { term: "occultare", register: "comune/formale", context: "con connotazione più concreta, spesso di atti o oggetti fisici" }
  ],

  antonyms: [
    { term: "rivelare", register: "comune", context: "portare alla luce ciò che era nascosto" },
    { term: "manifestare", register: "comune/letterario", context: "rendere evidente, esplicito, il proprio stato interiore" }
  ],

  relatedWords: [
    "menefreghismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dissimulare"
  },

  paroliereNote:
    "Il punto di riferimento teorico è Torquato Accetto, che nel 1641 pubblica Della " +
    "dissimulazione onesta — un trattatello breve e straordinario che distingue la " +
    "dissimulazione dalla menzogna e la difende come forma di saggezza pratica in " +
    "tempi di potere arbitrario. Per Accetto, chi dissimula non inganna: si protegge. " +
    "Il testo è rimasto a lungo dimenticato ed è stato riscoperto nel Novecento " +
    "grazie a Benedetto Croce, diventando un classico minore della trattatistica " +
    "italiana. La dissimulazione, però, non è sempre una strategia consapevole. A " +
    "volte si sovrappone all'omissione: non dire, non mostrare, non reagire. In certi " +
    "casi questo confina con il menefreghismo — quella forma di distacco che non è " +
    "neutralità, ma rifiuto silenzioso di partecipare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Dissimulare — Il Paroliere",
    description:
      "Significato di dissimulare: nascondere senza mentire. Da Torquato Accetto e la " +
      "trattatistica barocca all'uso contemporaneo.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};