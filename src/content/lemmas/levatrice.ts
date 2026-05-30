// Il Paroliere — Lemma: levatrice
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const levatrice: LemmaEntry = {
  lemma: "levatrice",
  slug: "levatrice",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Figura professionale tradizionalmente incaricata di assistere il parto: riceveva " +
    "il neonato, recideva il cordone, badava alla madre nelle ore critiche. Nella " +
    "storia della medicina europea, la levatrice ha operato per secoli al di fuori " +
    "delle istituzioni accademiche maschili, custodendo un sapere trasmesso per via " +
    "orale e pratica. Nell'uso contemporaneo è in larga parte sostituita " +
    "dall'ostetrica, figura con formazione universitaria riconosciuta.",

  shortDefinition:
    "Chi assisteva tradizionalmente al parto; oggi sostituita dall'ostetrica con " +
    "formazione universitaria.",

  register: ["comune", "tecnico"],
  domains: ["medicina", "ostetricia", "storia"],

  etymology:
    "Da levatrice, derivato di levare nel senso di sollevare, tirare su — perché la " +
    "levatrice 'levava' il bambino al momento della nascita. Il termine riflette il " +
    "gesto fondamentale del mestiere.",

  examples: [
  ],

  synonyms: [
    { term: "ostetrica", register: "tecnico", context: "la figura professionale moderna con titolo universitario" },
    { term: "mammana", register: "regionale/storico", context: "forma dialettale, usata specialmente nell'Italia meridionale" }
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/levatrice"
  },

  paroliereNote:
    "Per secoli la levatrice è stata la principale custode del momento più delicato " +
    "della vita umana, esercitando una competenza pratica che i medici accademici — " +
    "quasi sempre uomini — spesso ignoravano o denigravano. La sua progressiva " +
    "marginalizzazione nel Novecento, in favore dell'ostetrica istituzionalizzata, " +
    "racconta molto su come la modernità ha ridisegnato i confini tra sapere pratico " +
    "e sapere certificato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Levatrice — Il Paroliere",
    description:
      "Levatrice: chi assisteva al parto nella tradizione. Storia della professione e " +
      "differenza con l'ostetrica moderna — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};