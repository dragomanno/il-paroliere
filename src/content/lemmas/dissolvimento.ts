// Il Paroliere — Lemma: dissolvimento
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dissolvimento: LemmaEntry = {
  lemma: "dissolvimento",
  slug: "dissolvimento",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "L'atto o il processo del dissolversi: perdita progressiva di forma, consistenza " +
    "o percezione da parte di un'entità materiale o sensoriale. Nel lessico " +
    "cinematografico designa la tecnica di transizione in cui un'immagine sfuma " +
    "gradualmente lasciando spazio alla successiva. Nel linguaggio comune indica il " +
    "venir meno graduale di qualcosa di concreto o percettibile.",

  shortDefinition:
    "Perdita progressiva di forma o percezione; in cinema, tecnica di transizione in " +
    "cui un'immagine sfuma nella successiva.",

  register: ["comune", "tecnico"],
  domains: ["fisica", "società", "cinema"],

  etymology:
    "Deverbale di dissolvere, dal latino dissolvere (dis- + solvere, sciogliere), con " +
    "il suffisso nominale -mento che in italiano forma sostantivi d'azione. Rispetto " +
    "a dissoluzione (di origine latina diretta), dissolvimento è una formazione più " +
    "tarda e più aderente al processo concreto.",

  examples: [
  ],

  synonyms: [
    { term: "dissoluzione", register: "comune/formale", context: "sinonimo parziale, con accezione più astratta e istituzionale" },
    { term: "sfumatura", register: "tecnico/cinematografico", context: "nella terminologia specifica del montaggio visivo" },
    { term: "dissipazione", register: "tecnico/fisico", context: "con riferimento alla dispersione di energia o materia" }
  ],

  antonyms: [
    { term: "consolidamento", register: "comune", context: "il rafforzarsi progressivo di qualcosa di concreto" },
    { term: "coagulazione", register: "tecnico", context: "il processo fisico opposto al dissolvimento in molti contesti" }
  ],

  relatedWords: [
    "dissoluzione",
    "disgregazione"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dissolvimento"
  },

  paroliereNote:
    "La distinzione tra dissolvimento e dissoluzione (vedi) è una di quelle sfumature " +
    "che i dizionari tendono ad appianare e che l'uso colto invece conserva. " +
    "Dissolvimento è più fisico e percettivo: il dissolvimento di una nebbia, di un " +
    "suono in lontananza, di un'immagine sullo schermo. Dissoluzione è più astratta e " +
    "spesso irreversibile: la dissoluzione di un'istituzione, di un legame, di una " +
    "certezza. Il dissolvimento può anche essere temporaneo; la dissoluzione di " +
    "solito no. Il dissolvimento dell'URSS — avvenuto tra il 1989 e il 1991, con la " +
    "caduta del Muro di Berlino e la progressiva implosione del sistema sovietico — è " +
    "forse il più grande esempio storico contemporaneo di disgregazione politica e " +
    "ideologica. Un impero che non fu sconfitto militarmente, ma si dissolse " +
    "dall'interno, per esaurimento.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Dissolvimento — Il Paroliere",
    description:
      "Significato di dissolvimento: perdita progressiva di forma o percezione. In " +
      "cinema, tecnica di transizione. Differenza con dissoluzione.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};