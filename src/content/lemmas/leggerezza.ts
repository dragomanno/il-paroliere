// Il Paroliere — Lemma: leggerezza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const leggerezza: LemmaEntry = {
  lemma: "leggerezza",
  slug: "leggerezza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "letterario"],
  domains: ["estetica", "fisica", "psicologia"],

  definition:
    "Qualità di ciò che ha poco peso fisico o, in senso traslato, di ciò che non grava " +
    "— né sul corpo né sulla mente né sull’attenzione altrui. Nell’estetica, la leggerezza " +
    "non è assenza di contenuto ma capacità di contenere molto con apparente facilità: " +
    "Calvino ne fece una delle sue Lezioni americane, elevandola a valore letterario " +
    "contro il peso del mondo.",

  shortDefinition:
    "Qualità di ciò che non grava — fisicamente o metaforicamente; valore estetico " +
    "della facilità apparente.",

  etymology:
    "Dal latino levitas (poi influenzato da leggero, dal germanico *lîhtaz “facile, " +
    "poco pesante”), con il suffisso -ezza che indica qualità astratta. La radice " +
    "latina lev- ha dato anche “levità”, “levitare”, “alleviare”.",

  examples: [
    "La leggerezza di certi disegni a matita non è povertà di segno: è la scelta consapevole di non appesantire ciò che già si regge da solo.",
    "Calvino intendeva la leggerezza come antidoto al peso del mondo — non fuga, ma trasformazione: guardare dall’alto senza perdere il contatto con la terra.",
    "Nel ballo, la leggerezza non è assenza di tecnica ma il suo nascondimento: chi la vede è già fuori dall’illusione.",
    "C’è una leggerezza del carattere che non è superficialità: è la capacità di non aggrapparsi, di lasciare andare senza strazio.",
  ],

  synonyms: [
    { term: "levità", register: "letterario", note: "Più astratto e aulico; implica quasi un’ascensione spirituale." },
    { term: "agilità", register: "comune", note: "Enfatizza il movimento fluido più che l’assenza di peso." },
  ],

  antonyms: [
    { term: "pesantezza", register: "comune", note: "Il contrario fisico e metaforico diretto." },
    { term: "gravità", register: "comune-formale", note: "In senso sia fisico (forza gravitazionale) che morale (serietà opprimente)." },
  ],

  relatedWords: ["levità", "rarefazione", "impalpabilità", "grazia"],

  paroliereNote:
    "Calvino ha fatto di più per questo lemma di qualsiasi dizionario. La sua leggerezza " +
    "non è la leggerezza dell’ignorante che non vede il peso — è quella di chi lo vede, " +
    "lo solleva, e lo trasforma. C’è una differenza enorme tra non portare nulla e portare " +
    "tutto con apparente facilità. La seconda richiede più forza della prima.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "leggerezza — significato, etimologia e valore estetico del non-peso",
    description: "Che cos’è la leggerezza: dal peso fisico alla categoria estetica di Calvino, passando per danza, disegno e psicologia.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
