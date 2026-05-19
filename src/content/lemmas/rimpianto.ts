// Il Paroliere — Lemma: rimpianto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rimpianto: LemmaEntry = {
  lemma: "rimpianto",
  slug: "rimpianto",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Dolore quieto per qualcosa che non c'è più — un'occasione perduta, una scelta " +
    "non fatta, un tempo che non torna. A differenza del rimorso, non presuppone " +
    "colpa: si può rimpiangere anche ciò che era fuori dalla propria portata, o " +
    "semplicemente diverso da come è andato.",

  shortDefinition:
    "Dolore malinconico per ciò che è andato perduto o non è mai avvenuto, senza necessariamente implicare colpa.",

  register: ["comune", "letterario"],
  domains: ["emozione", "psicologia", "tempo"],

  etymology:
    "Deriva dal verbo rimpiangere, composto di ri- e piangere, con il senso di " +
    "'piangere di nuovo' o 'piangere per qualcosa che è perso'. Attestato in " +
    "italiano dal XIV secolo.",

  examples: [
    "Non era rimorso il suo — era rimpianto: nessuna colpa, solo la consapevolezza " +
    "che quella porta non si sarebbe più riaperta.",
    "Il rimpianto più comune non riguarda ciò che si è fatto, ma ciò che non si è " +
    "mai osato fare.",
    "Parlava di quel periodo con un rimpianto misurato, senza nostalgia eccessiva.",
    "C'è un rimpianto che non pesa: quello per le cose belle vissute e finite nel " +
    "modo giusto.",
  ],

  synonyms: [
    {
      term: "nostalgia",
      register: "comune",
      context: "più legata al passato e ai luoghi, meno al senso di perdita personale",
    },
    {
      term: "malinconia",
      register: "letterario",
      context: "stato d'animo diffuso, non necessariamente legato a un evento specifico",
    },
    {
      term: "dispiacere",
      register: "comune",
      context: "più generico, include anche situazioni presenti",
    },
  ],

  antonyms: [
    {
      term: "rimorso",
      register: "comune",
      context: "dolore per una colpa commessa — il rimpianto non implica colpa",
    },
    {
      term: "accettazione",
      register: "comune",
      context: "stato opposto di pace con ciò che è stato",
    },
  ],

  relatedWords: [
    "rimpiangere",
    "nostalgia",
    "malinconia",
    "rimorso",
    "perdita",
    "memoria",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/rimpianto/",
    wiktionary: "https://it.wiktionary.org/wiki/rimpianto",
  },

  paroliereNote:
    "In italiano il rimpianto ha una qualità silenziosa che lo distingue dal suo " +
    "cugino rumoroso, il rimorso. Non urla: è più simile a una nota che resta in " +
    "sospeso. Alcune lingue non distinguono tra i due — in inglese 'regret' copre " +
    "entrambi, appiattendo una differenza che in italiano è netta e vissuta. " +
    "Rimpiangere qualcosa non vuol dire avere sbagliato: vuol dire aver amato " +
    "abbastanza da sentirne la mancanza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Rimpianto — Il Paroliere",
    description:
      "Definizione originale di 'rimpianto': dolore quieto per ciò che non c'è più, " +
      "senza colpa. Con esempi, sinonimi, differenza con rimorso ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
