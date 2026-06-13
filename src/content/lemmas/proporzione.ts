// Il Paroliere — Lemma: proporzione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const proporzione: LemmaEntry = {
  lemma: "proporzione",
  slug: "proporzione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["matematica", "architettura", "estetica", "medicina"],

  definition:
    "Relazione di grandezza tra le parti di un insieme o tra l’insieme e le sue parti. " +
    "In architettura e nelle arti visive, la proporzione è il principio che governa la " +
    "percezione di 'giusto' o 'sbagliato' nella dimensione degli elementi: il corpo umano " +
    "come modulo (Vitruvio), la sezione aurea come rapporto universalmente percepito come " +
    "armonioso. In matematica, è la relazione di equivalenza tra due rapporti.",

  shortDefinition:
    "Relazione di grandezza tra le parti di un insieme; il principio che governa la percezione di equilibrio nelle dimensioni.",

  etymology:
    "Dal latino proportio, da pro “per, in favore di” e portio “parte, quota”, da portare " +
    "“portare”. La proporzione come la quota che ciascuna parte 'porta' rispetto all’insieme.",

  examples: [
    "Vitruvio nel De architectura stabilì che le proporzioni dell’edificio ideale dovevano rispecchiare quelle del corpo umano: l’architettura come antropometria.",
    "La sezione aurea — il rapporto 1:1,618 — non è la chiave segreta di tutta la bellezza, come si legge spesso: è uno dei molti rapporti proporzionali che l’occhio percepisce come stabili.",
    "Una proporzione sbagliata in un ritratto non sempre significa errore: certi pittori espressivi distorcono deliberatamente le proporzioni per amplificare l’emozione.",
    "In medicina, le proporzioni corporee cambiano con l’età: la testa di un neonato è un quarto del corpo, quella di un adulto è un settimo — una variazione proporzionale che riflette lo sviluppo neurologico.",
  ],

  synonyms: [
    { term: "misura", register: "comune-tecnico", note: "Più ampio: il sistema di riferimento che stabilisce le dimensioni; proporzione è la relazione tra misure." },
    { term: "rapporto", register: "matematico", note: "La relazione quantitativa precisa tra due valori." },
  ],

  antonyms: [
    { term: "sproporzione", register: "comune", note: "La violazione della proporzione attesa — le parti che non si tengono insieme." },
    { term: "asimmetria", register: "tecnico", note: "In senso largo: la mancanza di equivalenza tra le parti; non sempre negativa." },
  ],

  relatedWords: ["simmetria", "asimmetria", "armonia", "composizione", "grazia"],

  paroliereNote:
    "La proporzione è uno degli strumenti più abusati nella pseudoscienza estetica: la " +
    "sezione aurea viene trovata ovunque da chi la cerca, come tutti i rapporti numerici " +
    "semplici in nature complesse. Il punto interessante non è che il 1,618 sia magico, " +
    "ma che l’occhio umano sia sensibile a certi rapporti di grandezza più di altri " +
    "— e che questo sia un dato su cui lavorare, non un principio da idolatrare.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "proporzione — significato in matematica, architettura ed estetica",
    description: "Proporzione: dalla sezione aurea di Vitruvio al rapporto matematico. Come le relazioni di grandezza governano la percezione della bellezza.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
