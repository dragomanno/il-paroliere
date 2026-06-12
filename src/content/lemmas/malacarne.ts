// Il Paroliere — Lemma: MALACARNE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malacarne: LemmaEntry = {
  lemma: "malacarne",
  slug: "malacarne",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "1. Carne di bassa macelleria, taglio scadente o di qualità inferiore, venduto a basso prezzo. " +
    "2. In senso figurato, persona disonesta, imbroglione, farabutto; individuo senza scrupoli e degno di poco conto. " +
    "In questa accezione è attestato nella narrativa del Novecento italiano: Vitaliano Brancati lo usa con precisione: " +
    "«Faceva così questo malacarne, mi rubava allora e mi ruba ora.».",
  shortDefinition:
    "Carne scadente; per estensione, persona disonesta, imbroglione, farabutto.",
  register: ["colloquiale", "popolare"],
  domains: ["gastronomia", "uso figurato"],
  etymology:
    "Composto di male e carne: letteralmente «carne cattiva», ovvero materia di qualità insufficiente. " +
    "Il passaggio semantico dal taglio scadente di macelleria all'individuo di basso valore morale " +
    "segue un percorso metaforico comune nell'italiano popolare, che valuta la persona per la sua sostanza.",
  examples: [
    "Al mercato si vendeva a poco prezzo malacarne che i fornai usavano per i ragù della settimana.",
    "«Faceva così questo malacarne, mi rubava allora e mi ruba ora.» (Vitaliano Brancati)",
    "Non fidarti di lui: è un malacarne di quelli che sorridono in faccia e ti fregano alle spalle.",
  ],
  synonyms: [
    { term: "farabutto", register: "colloquiale", context: "persona senza scrupoli, condanna morale strutturale" },
    { term: "imbroglione", register: "colloquiale", context: "chi inganna con astuzia sistematica" },
    { term: "mascalzone", register: "colloquiale", context: "individuo disonesto e spregevole, registro teatrale-popolare" },
    { term: "birbante", register: "colloquiale", context: "furfante di basso livello, registro più leggero o ironico" },
  ],
  antonyms: [],
  relatedWords: ["farabutto", "imbroglione", "mascalzone", "birbante"],
  sourceLinks: {},
  paroliereNote:
    "Malacarne porta con sé l'odore della bottega: nasce come giudizio sul valore della carne, " +
    "e diventa giudizio sul valore dell'uomo. La metafora è diretta, quasi brutale, come vuole il " +
    "registro popolare. Brancati la usa senza spiegazioni, affidandosi alla comprensione immediata " +
    "del lettore meridionale. Una parola che sa di mercato, di inganni piccoli e consuetudine al sopruso.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Malacarne — Il Paroliere",
    description:
      "Definizione originale di 'malacarne': carne scadente di macelleria; per estensione, persona disonesta, imbroglione. Attestato in Vitaliano Brancati.",
  },
  createdAt: "2026-05-25",
  updatedAt: "2026-06-12",
};
