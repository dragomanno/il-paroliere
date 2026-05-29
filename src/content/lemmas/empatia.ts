// Il Paroliere — Lemma: empatìa
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const empatia: LemmaEntry = {
  lemma: "empatìa",
  slug: "empatia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Capacità di riconoscere e condividere lo stato emotivo di un'altra persona, " +
    "accedendo alla sua prospettiva senza perdersi nella propria. In psicologia " +
    "clinica si distingue tra empatìa affettiva — la risonanza emotiva diretta — ed " +
    "empatìa cognitiva — la comprensione intellettuale dello stato altrui senza " +
    "necessariamente condividerlo. Nell'uso comune il termine si è diffuso fino a " +
    "diventare quasi una parola d'ordine del discorso relazionale contemporaneo.",

  shortDefinition:
    "Capacità di riconoscere e condividere lo stato emotivo altrui accedendo alla sua " +
    "prospettiva senza perdersi nella propria.",

  register: ["comune", "tecnico"],
  domains: ["psicologia", "medicina", "società"],

  etymology:
    "Dal greco empátheia (passione, emozione intensa), composto di en- (in, dentro) e " +
    "páthos (sofferenza, sentimento). Il termine entra nella psicologia tedesca di " +
    "fine Ottocento come Einfühlung (sentirsi dentro), tradotto poi in inglese " +
    "empathy da Edward Titchener (1909) e da lì adottato nelle lingue europee.",

  synonyms: [
    { term: "immedesimazione", register: "comune", context: "enfatizza la fusione con l'altro, senza la distanza cognitiva dell'empatìa tecnica" },
    { term: "comprensione", register: "comune", context: "più generico e intellettuale, non richiede la dimensione emotiva" },
    { term: "simpatia", register: "comune", context: "in senso tecnico psicologico: condivisione emotiva diretta, diversa dall'empatìa cognitiva" }
  ],

  antonyms: [
    { term: "indifferenza", register: "comune", context: "mancanza di risposta emotiva all'altro" },
    { term: "apatia", register: "comune/tecnico", context: "assenza di reazione emotiva, anche nei confronti di sé stessi" },
    { term: "insensibilità", register: "comune", context: "incapacità o rifiuto di registrare lo stato emotivo altrui" }
  ],

  relatedWords: [
    "empatico",
    "simpatia",
    "compassione",
    "risonanza",
    "ascolto",
    "páthos",
    "specchio"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/empatia"
  },

  paroliereNote:
    "Empatìa — con l'accento sulla i, come vuole la pronuncia corretta — è diventata " +
    "una delle parole più usate e più svuotate del decennio. Ogni corso aziendale, " +
    "ogni manuale di leadership, ogni format di sviluppo personale la invoca. Vale la " +
    "pena ricordare che in origine il termine era tutt'altro che bonario: il greco " +
    "empátheia indicava una passione intensa, quasi un essere posseduti " +
    "dall'emozione. Quella forza originaria merita di essere recuperata.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Empatìa — Il Paroliere",
    description:
      "Capacità di riconoscere e condividere lo stato emotivo altrui accedendo alla sua " +
      "prospettiva senza perdersi nella propria.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};