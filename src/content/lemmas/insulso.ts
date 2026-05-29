// Il Paroliere — Lemma: insulso
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const insulso: LemmaEntry = {
  lemma: "insulso",
  slug: "insulso",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Privo di sapore, di sostanza o di interesse: si dice di una conversazione che " +
    "non lascia nulla, di un testo che non dice nulla, di una persona la cui presenza " +
    "non aggiunge niente a ciò che già c'è. Ha una qualità curiosamente neutra: non " +
    "segnala malevolenza o stupidità, ma un'assenza — di vivacità, di contenuto, di " +
    "carattere. L'insulso non disturba: semplicemente, non arriva.",

  shortDefinition:
    "Privo di sostanza o interesse, incapace di lasciare traccia; più assente che " +
    "fastidioso.",

  register: ["comune", "colloquiale"],
  domains: ["società", "linguaggio"],

  etymology:
    "Dal latino insulsus, composto di in- (negazione) + salsus (salato, saporito). Il " +
    "termine nasce dal gusto: privo di sale, privo di sapore. La metafora della " +
    "mancanza di sale come mancanza di spirito era già attiva in Cicerone e " +
    "Quintiliano.",

  synonyms: [
    { term: "scipito", register: "comune", context: "sinonimo diretto, anch'esso di origine alimentare (cibo senza sale)" },
    { term: "piatto", register: "colloquiale", context: "privo di rilievi, senza variazioni né interesse" },
    { term: "banale", register: "comune", context: "accentua la prevedibilità e la convenzionalità, più che la vuotezza" },
    { term: "vuoto", register: "comune", context: "mancanza di contenuto, più ampio e meno specifico" }
  ],

  antonyms: [
    { term: "vivace", register: "comune", context: "pieno di energia e iniziativa" },
    { term: "arguto", register: "comune", context: "acuto, tagliente, capace di sorprendere" },
    { term: "saporito", register: "colloquiale", context: "che ha carattere, gusto, qualità — il contrario etimologico diretto" }
  ],

  relatedWords: [
    "scipito",
    "banale",
    "piatto",
    "noioso",
    "sbiadito",
    "anonimo",
    "inconsistente"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/insulso"
  },

  paroliereNote:
    "Insulso ha un'etimologia gastronomica che dice qualcosa di profondo sul modo in " +
    "cui l'italiano pensa al linguaggio: una conversazione senza sale è senza gusto, " +
    "e una persona senza gusto è, appunto, insulsa. La metafora del sale come misura " +
    "dell'intelligenza e dello spirito — il latino sal significava anche arguzia — è " +
    "sopravvissuta intatta nei secoli. Oggi la usiamo senza saperlo ogni volta che " +
    "definiamo insulso qualcuno che, semplicemente, non sa condire le proprie parole.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Insulso — Il Paroliere",
    description:
      "Privo di sostanza o interesse, incapace di lasciare traccia; più assente che " +
      "fastidioso.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};