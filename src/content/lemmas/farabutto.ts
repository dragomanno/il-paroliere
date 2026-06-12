// Il Paroliere — Lemma: FARABUTTO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const farabutto: LemmaEntry = {
  lemma: "farabutto",
  slug: "farabutto",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Chi è farabutto lo è in modo permanente, non circostanziale. " +
    "Non si tratta di un errore di giudizio o di una mossa conveniente: " +
    "la disonestà è la struttura stessa del carattere, non un incidente di percorso. " +
    "Termine di condanna senza attenuanti, usato quando si vuole dire che una persona " +
    "non è recuperabile sul piano morale.",
  shortDefinition:
    "Persona moralmente compromessa in modo strutturale: la disonestà non è una scelta, è il carattere.",
  register: ["comune", "letterario"],
  domains: ["morale", "società"],
  etymology:
    "Di origine incerta, probabilmente dal tedesco Freibeuter (predone, pirata) attraverso l'italiano " +
    "settentrionale; il termine entra nell'uso comune italiano tra Sette e Ottocento come " +
    "designazione di individuo senza scrupoli e senza onore.",
  examples: [
    "«Faceva così questo malacarne, mi rubava allora e mi ruba ora» — Vitaliano Brancati usa malacarne dove altri avrebbero scritto farabutto: la condanna è identica, il registro più popolare.",
    "Non è uno che sbaglia: è un farabutto. C'è differenza.",
    "Scoprì tardi di aver dato fiducia a un farabutto — e quella scoperta le costò più del danno materiale.",
  ],
  synonyms: [
    { term: "canaglia", register: "comune", context: "persona senza scrupoli, con sfumatura più colorita" },
    { term: "mascalzone", register: "colloquiale", context: "condotta bassa, spesso in tono più espressivo" },
    { term: "imbroglione", register: "colloquiale", context: "chi inganna con metodo, enfasi sul modo operativo" },
    { term: "malacarne", register: "popolare", context: "uso figurato: persona di basso valore morale" },
  ],
  antonyms: [
    { term: "galantuomo", register: "comune", context: "uomo onesto e di parola" },
    { term: "integerrimo", register: "formale", context: "di integrità morale assoluta" },
  ],
  relatedWords: ["canaglia", "mascalzone", "imbroglione", "birbante", "malacarne", "malandrino", "furfante", "disonestà"],
  sourceLinks: {},
  paroliereNote:
    "Farabutto è il termine che non lascia scampo. Gli altri lemmi del cluster — imbroglione, mascalzone, birbante — " +
    "descrivono un comportamento, un metodo, una figura. Farabutto descrive una natura. " +
    "Usarlo significa chiudere il giudizio, non aprire una discussione.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Farabutto — Il Paroliere",
    description:
      "Definizione originale di 'farabutto': persona disonesta in modo strutturale e permanente, non circostanziale. Termine di condanna senza attenuanti.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
