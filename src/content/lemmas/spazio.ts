// Il Paroliere — Lemma: spazio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const spazio: LemmaEntry = {
  lemma: "spazio",
  slug: "spazio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "tecnico", "filosofico"],
  domains: ["fisica", "architettura", "estetica", "filosofia"],

  definition:
    "Estensione tridimensionale in cui si collocano gli oggetti e si svolgono gli eventi; " +
    "in estetica e architettura, non è solo il vuoto tra le cose ma è esso stesso elemento " +
    "compositivo — lo spazio negativo che dà forma al positivo, il silenzio che dà senso " +
    "alla nota. In filosofia, Kant lo descriveva come forma a priori della sensibilità " +
    "esterna: non un attributo delle cose ma il modo in cui le percepiamo.",

  shortDefinition:
    "Estensione tridimensionale in cui le cose esistono; in estetica, il vuoto come elemento compositivo attivo.",

  etymology:
    "Dal latino spatium “distanza, intervallo, estensione”, di origine incerta ma " +
    "probabilmente da una radice indoeuropea *spe- “lungo, disteso”. La stessa radice " +
    "di “spazioso” e “spaziare”.",

  examples: [
    "In architettura, lo spazio non è ciò che rimane dopo aver posizionato le pareti: è il primo elemento progettuale, e le pareti sono il modo per definirlo.",
    "La calligrafia giapponese usa il ma — lo spazio vuoto tra i segni — come elemento espressivo equivalente ai tratti: senza il vuoto, il pieno non ha respiro.",
    "Lo spazio in una conversazione — le pause, i silenzi, le non-risposte — dice spesso più delle parole che lo riempiono.",
    "Nella fisica relativistica, spazio e tempo non sono assoluti ma si contraggono e dilatano a seconda della velocità: l’intuizione kantiana si è rivelata più fragile di quanto sembrasse.",
  ],

  synonyms: [
    { term: "vuoto", register: "comune-tecnico", note: "L’assenza di materia nello spazio; in estetica, è lo spazio negativo inteso come valore." },
    { term: "ambiente", register: "comune", note: "Il contesto fisico circostante; più concreto e meno geometrico di spazio." },
  ],

  antonyms: [
    { term: "pienezza", register: "comune-filosofico", note: "Lo spazio completamente occupato dalla materia; l’assenza di vuoto." },
  ],

  relatedWords: ["respiro", "composizione", "ritmo", "proporzione"],

  paroliereNote:
    "Lo spazio è uno di quei concetti talmente vicini che difficilmente ci pensiamo fino " +
    "a quando non viene compresso. Le città dense, gli appartamenti piccoli, i calendari " +
    "pieni: l’assenza di spazio fisico produce l’assenza di spazio mentale, e non è una " +
    "metafora — è una relazione documentata tra ambiente costruito e capacità cognitiva. " +
    "Lo spazio non è il contenitore della vita: è una delle sue condizioni.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "spazio — significato in fisica, architettura, filosofia ed estetica",
    description: "Spazio: dall’estensione tridimensionale alla categoria kantiana, dallo spazio negativo in architettura al silenzio in musica. Tutto sul vuoto come elemento attivo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
