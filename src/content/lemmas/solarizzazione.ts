// Il Paroliere — Lemma: solarizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const solarizzazione: LemmaEntry = {
  lemma: "solarizzazione",
  slug: "solarizzazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In fotografia, inversione parziale dei toni di un'immagine. In senso stretto si produce con una sovraesposizione estrema, ma il nome si usa soprattutto per l'effetto Sabattier, ottenuto riesponendo alla luce una pellicola o una stampa durante lo sviluppo: i toni si invertono in parte e attorno ai contorni compaiono sottili aloni chiari, detti linee di Mackie. Man Ray e Moholy-Nagy ne fecero uno strumento di sperimentazione visiva tra gli anni Venti e Trenta del Novecento. In agronomia, tecnica che riscalda il terreno umido coprendolo con un telo di plastica trasparente nei mesi più caldi, per ridurre funghi, nematodi e semi di erbe infestanti senza prodotti chimici.",

  shortDefinition:
    "In fotografia, inversione parziale dei toni di una pellicola riesposta alla luce; in agronomia, riscaldamento del terreno sotto teli.",

  register: ["tecnico", "comune"],
  domains: ["fotografia", "agronomia"],

  etymology:
    "Derivato di solare, con suffisso -izzazione; in fotografia richiama l'effetto della luce, in origine solare, sul materiale fotosensibile, in agronomia l'uso diretto del calore del sole.",

  examples: [],

  synonyms: [
      {
        term: "effetto Sabattier",
        register: "tecnico",
        context: "nome tecnico del procedimento fotografico più spesso chiamato solarizzazione",
      },
    ],

  antonyms: [],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/solarizzazione/",
    wiktionary: "https://it.wiktionary.org/wiki/solarizzazione",
  },

  paroliereNote:
    "La tecnica era nota dall'Ottocento, ma la sua fortuna artistica nasce da un incidente: intorno al 1929, nello studio di Man Ray, Lee Miller accese la luce mentre una pellicola era in sviluppo. Quello che ne risultò — i contorni argentati, i toni parzialmente invertiti — divenne uno dei segni distintivi dell'estetica surrealista. Nei campi, invece, la stessa parola indica una tecnica umile e concreta: il sole, sotto un telo di plastica, fa da disinfettante.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Solarizzazione — Il Paroliere",
    description:
      "Definizione originale di 'solarizzazione': l'inversione dei toni in fotografia, da Man Ray a Moholy-Nagy, e il riscaldamento del terreno in agronomia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-11-13",
};
