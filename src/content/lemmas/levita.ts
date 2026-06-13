// Il Paroliere — Lemma: levità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const levita: LemmaEntry = {
  lemma: "levità",
  slug: "levita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["letterario", "formale"],
  domains: ["estetica", "filosofia", "letteratura"],

  definition:
    "Condizione di chi o ciò che è privo di peso, con una sfumatura quasi mistica di " +
    "elevazione — come se l’assenza di gravità aprisse uno spazio spirituale. Diversa " +
    "dalla semplice leggerezza, la levità implica quasi una sospensione: non solo il " +
    "peso manca, ma sembra che la cosa fluti in un equilibrio che la fisica non spiega " +
    "del tutto.",

  shortDefinition:
    "Assenza di peso con sfumatura di elevazione spirituale; sospensione tra il fisico e il metafisico.",

  etymology:
    "Dal latino levitas, da levis “leggero”, radice comune a “levare”, “levitare”, " +
    "“alleviare”. In italiano è forma dotta, meno frequente del più popolare “leggerezza”.",

  examples: [
    "La levità dei grandi clown non è assenza di profondità: è profondità che ha imparato a non affondare.",
    "Certi acquerelli hanno una levità che l’olio non può raggiungere: il bianco della carta respira sotto il colore, e questo respiro è tutto.",
    "Nella poesia di Leopardi c’è una tensione irrisolta tra la levità del canto e il peso del pensiero — ed è proprio in quella tensione che vive.",
    "La levità non si impara: si ottiene togliendo, anno dopo anno, tutto ciò che si teneva per paura di sembrare vuoti.",
  ],

  synonyms: [
    { term: "leggerezza", register: "comune", note: "Più frequente e meno aulico; manca della sfumatura spirituale." },
    { term: "imponderabilità", register: "tecnico-letterario", note: "Letteralmente ciò che non si può pesare; molto raro nell’uso contemporaneo." },
  ],

  antonyms: [
    { term: "gravità", register: "comune-formale", note: "In tutti i sensi: fisico, morale, esistenziale." },
    { term: "pesantezza", register: "comune", note: "Il contrario quotidiano, senza la profondità filosofica di gravità." },
  ],

  relatedWords: ["leggerezza", "rarefazione", "diafano", "ineffabile"],

  paroliereNote:
    "Levità è uno di quei lemmi che quasi nessuno usa ma che molti capiscono immediatamente " +
    "quando lo sentono. È la parola giusta per certi momenti che “leggerezza” non coglie " +
    "del tutto — quei momenti in cui qualcosa sembra fluttuare non perché è vuoto ma " +
    "perché è arrivato a un punto in cui la gravità non ha più presa.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "levità — significato, etimologia e differenza con leggerezza",
    description: "Levità: dall’assenza di peso fisico alla categoria spirituale ed estetica. Differenze con leggerezza e imponderabilità.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
