// Il Paroliere — Lemma: incarnare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incarnare: LemmaEntry = {
  lemma: "incarnare",
  slug: "incarnare",
  partOfSpeech: "verbo",

  definition:
    "Dare forma concreta e vivente a un'idea, un valore o un principio astratto, " +
    "al punto che chi lo osserva riconosce quell'idea proprio in quella persona o " +
    "in quel gesto. In teologia cristiana indica specificamente il farsi carne del " +
    "Verbo; nell'uso corrente si applica a chiunque rappresenti in modo esemplare " +
    "una qualità — un attore che incarna un personaggio, un atleta che incarna un'epoca.",

  shortDefinition:
    "Dare corpo concreto a un'idea astratta, fino a diventarne l'esempio vivente e riconoscibile.",

  register: ["comune", "letterario", "tecnico"],
  domains: ["teologia", "filosofia", "arte", "quotidiano"],

  etymology:
    "Dal latino tardo incarnare, da in- e caro, carnis, «carne». Passato dal " +
    "linguaggio teologico medievale all'uso figurato corrente.",

  examples: [
    "Quell'attore ha incarnato il ruolo con una naturalezza che ha spiazzato la critica.",
    "Nel racconto natalizio cristiano, il Verbo si incarna e si fa uomo.",
    "Per una generazione, quella squadra ha incarnato l'idea stessa di gioco corale.",
  ],

  synonyms: [
    {
      term: "personificare",
      register: "comune",
      context: "più diretto e meno solenne, spesso riferito a qualità morali o difetti",
    },
    {
      term: "rappresentare",
      register: "comune",
      context: "più generico, senza l'enfasi sul farsi corpo",
    },
    {
      term: "simboleggiare",
      register: "letterario",
      context: "orientato al valore simbolico più che alla presenza fisica",
    },
  ],

  antonyms: [
    {
      term: "disincarnare",
      register: "tecnico",
      context: "raro, per lo più in filosofia: separare un'idea dalla sua forma concreta",
    },
  ],

  relatedWords: ["incarnazione", "carne", "personificazione", "epidermico", "materico"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/incarnare",
  },

  paroliereNote:
    "Incarnare porta con sé il peso teologico dell'Incarnazione ma vive benissimo " +
    "fuori dalla dottrina: ogni volta che diciamo che qualcuno «incarna» un valore, " +
    "stiamo usando — spesso senza saperlo — la stessa struttura concettuale del " +
    "farsi carne. La parola resta viva perché quella tensione tra idea e corpo non " +
    "si è mai davvero risolta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Incarnare — Il Paroliere",
    description:
      "Definizione originale di 'incarnare': dare forma concreta e vivente a un'idea " +
      "astratta. Senso teologico, filosofico e uso corrente, con esempi ed etimologia.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
