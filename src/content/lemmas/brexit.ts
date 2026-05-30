// Il Paroliere — Lemma: Brexit
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const brexit: LemmaEntry = {
  lemma: "Brexit",
  slug: "brexit",
  partOfSpeech: "sostantivo proprio",
  gender: "femminile",

  definition:
    "Neologismo che designa il recesso del Regno Unito dall'Unione Europea, deciso " +
    "con il referendum del 23 giugno 2016 (51,9% favorevoli all'uscita) e diventato " +
    "effettivo il 31 gennaio 2020. Il processo ha attraversato tre anni e mezzo di " +
    "negoziati turbolenti, tre primi ministri (Cameron, May, Johnson) e una crisi " +
    "costituzionale senza precedenti nella storia politica britannica moderna.",

  shortDefinition:
    "Il recesso del Regno Unito dall'UE, deciso nel referendum 2016 e attuato nel " +
    "2020 dopo negoziati triennali.",

  register: ["politico", "storico", "giornalistico"],
  domains: ["politica", "storia", "economia"],

  etymology:
    "Parola-valigia dall'inglese: Britain + exit. Il modello è Grexit (possibile " +
    "uscita della Grecia dall'eurozona), coniato durante la crisi del debito greco " +
    "del 2012. Brexit compare per la prima volta in forma scritta nel 2012 e si " +
    "afferma nel lessico globale dopo il referendum del 2016, entrando anche " +
    "nell'italiano giornalistico senza traduzione.",

  examples: [
  ],

  synonyms: [
    { term: "uscita dalla UE", register: "comune/giornalistico", context: "forma perifrastica usata nelle spiegazioni divulgative" },
    { term: "recesso britannico", register: "formale/diplomatico", context: "termine tecnico-diplomatico usato nei documenti ufficiali" }
  ],

  antonyms: [
    { term: "Remain", register: "politico/storico", context: "la campagna e la posizione favorevole alla permanenza del Regno Unito nell'UE" }
  ],

  relatedWords: [
    "nato",
    "nazionalismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/Brexit"
  },

  paroliereNote:
    "Brexit è il caso più studiato di un neologismo che nasce quasi per scherzo e " +
    "diventa una parola storica. La sua adozione universale — anche nelle lingue che " +
    "avevano termini alternativi — dice qualcosa sul potere dei media anglosassoni " +
    "nel plasmare il lessico politico globale. In italiano si usa invariabilmente al " +
    "femminile (la Brexit), concordando con uscita o con il genere implicito di " +
    "crisi. Dal punto di vista linguistico, Brexit è una crasi: la fusione di due " +
    "parole distinte in un'unica forma compatta. Un meccanismo di condensazione che " +
    "la lingua contemporanea usa sempre più spesso per nominare fenomeni complessi " +
    "con un solo colpo d'occhio.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Brexit — Il Paroliere",
    description:
      "Significato e storia di Brexit: il recesso del Regno Unito dall'UE tra il " +
      "referendum 2016 e l'uscita effettiva del 2020.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};