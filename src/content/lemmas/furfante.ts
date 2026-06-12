// Il Paroliere — Lemma: FURFANTE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const furfante: LemmaEntry = {
  lemma: "furfante",
  slug: "furfante",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Persona disonesta che porta con sé una luce teatrale: il furfante appartiene alla pagina " +
    "più che alla cronaca, alla commedia settecentesca e al romanzo d'avventura. " +
    "Meno grave del farabutto sul piano morale, ma più vivido — conserva, nell'uso contemporaneo, " +
    "una patina quasi bonaria che lo avvicina al mascalzone più che al criminale.",
  shortDefinition:
    "Disonesto di registro letterario: figura da romanzo d'avventura, oggi usato con tono quasi bonario.",
  register: ["comune", "letterario"],
  domains: ["morale", "letteratura popolare", "comportamento"],
  etymology:
    "Di origine incerta, probabilmente dal longobardo furfante (vagabondo, briccone) " +
    "o da un derivato di furfare (rubare di nascosto). " +
    "Entra nella lingua letteraria italiana tra Cinque e Seicento come designazione " +
    "del briccone di strada, poi migra nel teatro e nella narrativa popolare.",
  examples: [
    "Era il classico furfante da romanzo: sempre un passo avanti agli altri, mai abbastanza per farla franca.",
    "«Furfante!» esclamò il vecchio — ma nella voce c'era più divertimento che indignazione.",
    "I furfanti della letteratura italiana hanno più umanità di molti eroi.",
  ],
  synonyms: [
    { term: "birbante", register: "colloquiale", context: "con sfumatura più leggera e spesso affettuosa" },
    { term: "mascalzone", register: "colloquiale", context: "più teatrale e popolare, meno letterario" },
    { term: "canaglia", register: "colloquiale-espressivo", context: "più energico e esclamativo" },
    { term: "farabutto", register: "comune", context: "quando la disonestà è strutturale e senza attenuanti" },
    { term: "malandrino", register: "colloquiale-letterario", context: "con radici nel brigantaggio, oggi simile per sfumatura" },
  ],
  antonyms: [
    { term: "galantuomo", register: "comune", context: "uomo di condotta onesta e irreprensibile" },
    { term: "probo", register: "formale", context: "di integrità morale riconosciuta" },
  ],
  relatedWords: ["birbante", "mascalzone", "canaglia", "farabutto", "malandrino", "imbroglione"],
  sourceLinks: {},
  paroliereNote:
    "Il furfante è il personaggio disonesto più simpatico della lingua italiana. " +
    "Ha vissuto troppo a lungo nelle pagine di buona letteratura per uscirne del tutto compromesso. " +
    "Chiamare qualcuno furfante, oggi, è quasi un complimento — o almeno non è una condanna.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Furfante — Il Paroliere",
    description:
      "Definizione originale di 'furfante': disonesto di registro letterario, figura da romanzo d'avventura. Distinto da farabutto, mascalzone, birbante.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
