// Il Paroliere — Lemma: zizzania
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const zizzania: LemmaEntry = {
  lemma: "zizzania",
  slug: "zizzania",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Pianta graminacea infestante (Lolium temulentum) che cresce mescolata al grano e risulta quasi " +
    "indistinguibile da esso prima della maturazione. In senso figurato — accezione oggi prevalente " +
    "nel parlato — indica discordia introdotta deliberatamente tra persone: seminare zizzania significa " +
    "alimentare dissidi, diffondere malintesi, incrinare rapporti che altrimenti resisterebbero.",

  shortDefinition:
    "Erba infestante del grano; in senso figurato, discordia seminata apposta per guastare rapporti.",

  register: ["comune", "letterario"],
  domains: ["botanica", "figurato"],

  etymology:
    "Dal latino tardo zizania, a sua volta dal greco zizánion. " +
    "Il senso figurato è di origine biblica: nella parabola evangelica del grano e della zizzania " +
    "(Matteo 13,24-30), il nemico semina zizzania nel campo del padrone durante la notte.",

  examples: [
    "Seminava zizzania con una cura che quasi faceva ammirare — sapeva esattamente dove mettere le parole.",
    "La zizzania botanica è difficile da estirpare senza danneggiare il grano che le cresce accanto.",
    "Non erano notizie false — era zizzania: piccole verità selezionate per creare il massimo attrito.",
    "La parabola della zizzania dice che bisogna aspettare il raccolto per separare: prima non si riesce a distinguere.",
  ],

  synonyms: [
    {
      term: "discordia",
      register: "comune",
      context: "contrasto e dissidio, senza la connotazione di semina deliberata",
    },
    {
      term: "malcontento",
      register: "comune",
      context: "insoddisfazione diffusa, meno mirata della zizzania",
    },
    {
      term: "intrigo",
      register: "comune",
      context: "macchinazione con fini precisi, più elaborata della semplice zizzania",
    },
  ],

  antonyms: [
    {
      term: "concordia",
      register: "formale",
      context: "accordo e armonia nei rapporti, opposto diretto",
    },
    {
      term: "pace",
      register: "comune",
      context: "assenza di conflitto, ciò che la zizzania mira a distruggere",
    },
  ],

  relatedWords: [
    "dissidio",
    "discordia",
    "malinteso",
    "intrigo",
    "parabola",
    "grano",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/zizzania/",
    wiktionary: "https://it.wiktionary.org/wiki/zizzania",
  },

  paroliereNote:
    "Zizzania è una parola che porta con sé tutta la sua parabola di origine — e non a caso. " +
    "Il punto della parabola evangelica non è la pianta: è l'impossibilità di riconoscerla dal grano " +
    "prima che sia troppo tardi. Chi semina zizzania conta esattamente su questo: che la discordia " +
    "sembri legittima finché non ha già fatto il suo lavoro.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Zizzania — Il Paroliere",
    description:
      "Definizione originale di 'zizzania': erba infestante; in senso figurato, discordia seminata per guastare rapporti. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
