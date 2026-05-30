// Il Paroliere — Lemma: commemorazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const commemorazione: LemmaEntry = {
  lemma: "commemorazione",
  slug: "commemorazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Atto collettivo — cerimonia, discorso, silenzio, corteo — con cui una comunità " +
    "richiama alla memoria un evento o una persona del passato, riaffermando il " +
    "legame tra chi ricorda e ciò che è stato. La commemorazione non è semplice " +
    "ricordo individuale: è un gesto sociale che costruisce identità condivisa e " +
    "trasmette significati da una generazione all'altra.",

  shortDefinition:
    "Cerimonia collettiva di memoria: richiamare insieme il passato per riaffermarne " +
    "il significato nel presente.",

  register: ["comune", "formale"],
  domains: ["storia", "società", "rituale"],

  etymology:
    "Dal latino commemoratio, derivato di commemorare — com- (insieme) + memorare " +
    "(ricordare, da memor, attento, consapevole). Il prefisso com- è essenziale: la " +
    "commemorazione è per definizione un atto plurale.",

  examples: [
  ],

  synonyms: [
    { term: "celebrazione", register: "comune", context: "più festoso, non necessariamente luttuoso" },
    { term: "ricorrenza", register: "comune", context: "enfatizza il ritorno ciclico della data" },
    { term: "cerimonia", register: "formale", context: "il contenitore rituale, più neutro del contenuto" }
  ],

  antonyms: [
    { term: "oblio", register: "letterario", context: "il dimenticare collettivo, opposto strutturale della commemorazione" },
    { term: "rimozione", register: "psicologico/politico", context: "scelta attiva di non ricordare" }
  ],

  relatedWords: [
    "cesura",
    "solitudine"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/commemorazione"
  },

  paroliereNote:
    "Le commemorazioni sono anche macchine di potere: chi decide cosa si commemora, " +
    "come e con quale tono, esercita un controllo sulla narrativa collettiva. Le " +
    "guerre, i genocidi, le rivoluzioni vengono commemorati in modo diverso a seconda " +
    "di chi ha vinto. Partecipare a una commemorazione è sempre anche un atto " +
    "politico, anche quando non sembra.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Commemorazione — Il Paroliere",
    description:
      "Commemorazione: atto collettivo di memoria che costruisce identità condivisa. " +
      "Significato, etimologia, usi — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};