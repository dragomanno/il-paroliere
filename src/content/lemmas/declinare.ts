// Il Paroliere — Lemma: declinare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const declinare: LemmaEntry = {
  lemma: "declinare",
  slug: "declinare",
  partOfSpeech: "verbo",

  definition:
    "Rifiutare con misura e cortesia un invito, un incarico o una responsabilità; in grammatica, flettere un nome o un pronome secondo i casi; per estensione, avviarsi gradualmente verso la fine o la perdita di forza, come il sole al tramonto o un'influenza che si affievolisce. Le tre accezioni convergono in un movimento comune: qualcosa che scende, cede o si piega.",

  shortDefinition:
    "Rifiutare con garbo, flettere per casi grammaticali o avviarsi al tramonto: tre modi di scendere.",

  register: ["comune", "letterario"],
  domains: ["linguaggio", "comportamento"],

  etymology:
    "Dal latino declinare (piegare, allontanarsi), da de- (verso il basso, via da) + clinare (inclinare).",

  examples: [],

  synonyms: [
      {
        term: "rifiutare",
        register: "comune",
        context: "più diretto, senza la cortesia implicita in declinare",
      },
      {
        term: "ricusare",
        register: "formale",
        context: "rifiuto formale, spesso in contesti giuridici",
      },
      {
        term: "coniugare",
        register: "tecnico",
        context: "in grammatica, flettere secondo i paradigmi",
      },
    ],

  antonyms: [
      {
        term: "accettare",
        register: "comune",
        context: "risposta opposta a un invito o un incarico",
      },
      {
        term: "ascendere",
        register: "letterario",
        context: "opposto del declino fisico o figurato",
      },
    ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/declinare/",
    wiktionary: "https://it.wiktionary.org/wiki/declinare",
  },

  paroliereNote:
    "È raro che una parola contenga tre verbi così distinti — rifiutare, flettere, calare — senza che nessuno dei tre domini sugli altri. Eppure il filo c'è: in tutti e tre i casi qualcosa abbandona la sua posizione verticale. Il sole che declina, la forma che declina, l'invito che si declina: tutti e tre descrivono una realtà che non regge più la stessa posizione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Declinare — Il Paroliere",
    description:
      "Definizione originale di 'declinare': tre accezioni — rifiutare con cortesia, flettere grammaticalmente, avviarsi al tramonto. Con etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
