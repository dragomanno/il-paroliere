// Il Paroliere — Lemma: roboante
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const roboante: LemmaEntry = {
  lemma: "roboante",
  slug: "roboante",
  partOfSpeech: "aggettivo",
  gender: "invariabile",

  definition:
    "Di suono, discorso o stile: che risuona con forza eccessiva, più attento alla " +
    "propria risonanza che al contenuto che veicola. Un'orazione roboante colpisce " +
    "l'orecchio ma lascia poco alla mente; un titolo roboante promette più di quanto " +
    "il testo possa mantenere. Il termine porta quasi sempre una sfumatura critica: " +
    "segnala una sproporzione tra forma e sostanza, tra volume e significato.",

  shortDefinition:
    "Di discorso o stile che risuona con forza eccessiva, privilegiando il volume al " +
    "contenuto.",

  register: ["letterario", "ironico"],
  domains: ["retorica", "letteratura"],

  etymology:
    "Dal latino roborare (rafforzare, dar vigore), derivato di robur (forza, " +
    "quercia). Il senso originario era positivo — roboante significava 'che dà forza' " +
    "— ma l'uso italiano contemporaneo ha privilegiato l'accezione ironica del suono " +
    "vuoto.",

  synonyms: [
    { term: "altisonante", register: "letterario", context: "sinonimo quasi diretto, ugualmente critico verso il tono enfatico" },
    { term: "enfatico", register: "comune", context: "più generico, riguarda l'esagerazione del tono emotivo" },
    { term: "magniloquente", register: "letterario", context: "accentua la ricercatezza delle parole, oltre che il volume" },
    { term: "pomposo", register: "colloquiale", context: "registro più basso, sfumatura comica o di autocompiacimento" }
  ],

  antonyms: [
    { term: "sobrio", register: "comune", context: "stile essenziale, senza eccessi retorici" },
    { term: "misurato", register: "comune", context: "calibrato, attento alla proporzione tra forma e contenuto" },
    { term: "asciutto", register: "comune", context: "stile senza ornamenti, che punta alla precisione" }
  ],

  relatedWords: [
    "altisonante",
    "magniloquente",
    "enfasi",
    "retorica",
    "bombast",
    "grandiloquenza",
    "stile"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/roboante"
  },

  paroliereNote:
    "Roboante è uno degli aggettivi preferiti dalla critica letteraria e " +
    "giornalistica italiana quando vuole smontare un testo senza aggredirlo " +
    "frontalmente: basta chiamarlo roboante e il giudizio è emesso, con eleganza. La " +
    "parola ha una qualità autoriflessiva quasi comica — è sonora, piena, quasi " +
    "teatrale: usarla per descrivere un discorso vuoto introduce un piccolo corto " +
    "circuito tra il significante e il significato.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Roboante — Il Paroliere",
    description:
      "Di discorso o stile che risuona con forza eccessiva, privilegiando il volume al " +
      "contenuto.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};