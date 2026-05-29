// Il Paroliere — Lemma: pendenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pendenza: LemmaEntry = {
  lemma: "pendenza",
  slug: "pendenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In geometria e in topografia, l'inclinazione di una superficie o di una retta " +
    "rispetto al piano orizzontale, espressa come rapporto tra dislivello e distanza " +
    "percorsa. In economia descrive il grado di variazione di una grandezza rispetto " +
    "a un'altra — si parla per esempio di pendenza della curva di domanda. In ambito " +
    "giuridico e amministrativo indica una pratica ancora aperta, non risolta: una " +
    "pendenza con il fisco è un debito o un accertamento in corso.",

  shortDefinition:
    "Inclinazione rispetto all'orizzontale; in senso figurato, questione o debito " +
    "ancora aperto e non risolto.",

  register: ["comune", "tecnico"],
  domains: ["geometria", "economia", "diritto"],

  etymology:
    "Dal latino pendentia, derivato di pendere (essere appeso, inclinare). La radice " +
    "esprime l'idea di qualcosa che non ha ancora trovato il suo punto di equilibrio.",

  synonyms: [
    { term: "inclinazione", register: "comune", context: "sinonimo geometrico diretto, più neutro" },
    { term: "declivio", register: "tecnico", context: "si riferisce alla pendenza di un terreno, tipicamente in contesti geografici" },
    { term: "gradiente", register: "tecnico", context: "in fisica e meteorologia, indica la variazione di una grandezza per unità di distanza" },
    { term: "questione aperta", register: "comune", context: "sinonimo del senso giuridico-amministrativo, più informale" }
  ],

  antonyms: [
    { term: "pianura", register: "comune", context: "assenza di inclinazione topografica" },
    { term: "orizzontalità", register: "tecnico", context: "condizione di assenza di pendenza geometrica" },
    { term: "definizione", register: "giuridico", context: "nel senso di questione risolta, chiusa" }
  ],

  relatedWords: [
    "inclinazione",
    "declivio",
    "gradiente",
    "salita",
    "discesa",
    "curva",
    "debito",
    "contenzioso"
  ],

  examples: [],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/pendenza"
  },

  paroliereNote:
    "Poche parole italiane riescono a coprire ambiti così distanti con la stessa " +
    "radice etimologica: pendenza descrive tanto la morfologia di un terreno quanto " +
    "una controversia legale irrisolta. L'elemento comune è quello che l'etimo " +
    "custodisce: qualcosa che pende, che non ha ancora trovato il suo equilibrio. In " +
    "montagna si misura in percentuale o in gradi; nei rapporti con l'erario, si " +
    "misura in lettere raccomandate.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Pendenza — Il Paroliere",
    description:
      "Inclinazione rispetto all'orizzontale; in senso figurato, questione o debito " +
      "ancora aperto e non risolto.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};