// Il Paroliere — Lemma: inclusione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const inclusione: LemmaEntry = {
  lemma: "inclusione",
  slug: "inclusione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Il processo, o la condizione risultante, per cui persone e gruppi altrimenti " +
    "marginali vengono accolti come parte piena di un contesto sociale, " +
    "lavorativo o istituzionale, con pari accesso a opportunità e " +
    "rappresentanza. A differenza della semplice tolleranza, l'inclusione " +
    "richiede di adattare attivamente le strutture esistenti, non solo di " +
    "accettare passivamente chi ne è rimasto fuori.",

  shortDefinition:
    "Accoglienza piena di persone o gruppi marginali in un contesto sociale, con pari accesso e rappresentanza.",

  register: ["comune", "tecnico"],
  domains: ["sociologia", "politica", "lavoro", "educazione"],

  etymology:
    "Dal latino inclusio, derivato di includere, «chiudere dentro, comprendere». " +
    "Il senso sociale contemporaneo si è affermato soprattutto dagli anni Novanta " +
    "nel linguaggio delle politiche educative e del lavoro.",

  examples: [
    "La scuola ha adottato misure di inclusione per gli studenti con disabilità, ripensando spazi e strumenti didattici.",
    "L'inclusione sul lavoro non si misura solo dalle assunzioni, ma da chi riesce davvero a fare carriera.",
    "Un'inclusione solo dichiarata, senza cambiamenti reali nelle strutture, resta una forma sofisticata di esclusione.",
  ],

  synonyms: [
    {
      term: "integrazione",
      register: "comune",
      context: "più orientato al percorso individuale di adattamento che al cambiamento delle strutture",
    },
    {
      term: "accoglienza",
      register: "comune",
      context: "più generico, meno legato all'idea di pari accesso strutturale",
    },
  ],

  antonyms: [
    {
      term: "esclusione",
      register: "comune",
      context: "l'antonimo diretto: il negare accesso pieno a persone o gruppi",
    },
    {
      term: "emarginazione",
      register: "letterario",
      context: "il processo, spesso graduale, che spinge un gruppo ai margini",
    },
  ],

  relatedWords: ["esclusione", "appartenenza", "diversità", "accessibilità", "rappresentanza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/inclusione",
  },

  paroliereNote:
    "L'inclusione si distingue dalla tolleranza per un dettaglio decisivo: " +
    "tollerare significa sopportare una differenza senza cambiare nulla attorno " +
    "ad essa, includere significa modificare il contesto perché quella differenza " +
    "smetta di essere un ostacolo. È una parola diventata slogan, ma nel suo " +
    "nucleo descrive un lavoro concreto, non solo un'intenzione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Inclusione — Il Paroliere",
    description:
      "Definizione originale di 'inclusione': accoglienza piena di persone o " +
      "gruppi marginali, con pari accesso e rappresentanza. Distinzione da tolleranza e integrazione, con esempi.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
