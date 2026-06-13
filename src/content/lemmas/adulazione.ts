// Il Paroliere — Lemma: adulazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const adulazione: LemmaEntry = {
  lemma: "adulazione",
  slug: "adulazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "letterario"],
  domains: ["psicologia", "etica", "politica", "retorica"],

  definition:
    "Lode esagerata e interessata rivolta a qualcuno per ottenerne favori, protezione " +
    "o accesso a risorse — non perché si pensi davvero che meriti quell’elogio. " +
    "L’adulatore sa che sta esagerando: è questo che distingue l’adulazione dal " +
    "semplice entusiasmo o dall’ammirazione genuina. Come pratica politica e di " +
    "corte, l’adulazione è stata analizzata dai moralisti di ogni epoca come uno dei " +
    "meccanismi più efficaci di corruzione del potere: chi è continuamente adulato " +
    "perde la capacità di giudizio realistico su di sé.",

  shortDefinition:
    "Lode esagerata e interessata per ottenere favori; si distingue dall’ammirazione " +
    "perché chi adula sa di esagerare e lo fa per scopo.",

  etymology:
    "Dal latino adulatio, da adulari «scodinzolare, lusingare», probabilmente da un " +
    "termine originariamente riferito al comportamento del cane che si avvicina " +
    "sottomesso. La radice visualizza l’adulatore come chi si prostra per ottenere " +
    "qualcosa.",

  examples: [
    "I cortigiani che adulavano il re non erano necessariamente stupidi: sapevano benissimo cosa stavano facendo, e lo facevano perché funzionava.",
    "L’adulazione manageriale — il dipendente che loda ogni decisione del capo indipendentemente dal merito — produce capi sempre più incapaci di vedere i propri errori.",
    "Distinguere complimento sincero da adulazione richiede attenzione al contesto: chi ti loda sempre ha meno valore di chi ti dice la verità anche quando fa male.",
    "La psicologia del potere mostra che i leader ad alta autostima resistono meglio all’adulazione: chi ha bisogno di essere confermato continuamente è più vulnerabile all’adulatore.",
  ],

  synonyms: [
    { term: "lusinga", register: "comune-letterario", note: "Più generico: include anche l’auto-adulazione e le lusinghe non orientate a un fine specifico." },
    { term: "piaggeria", register: "comune-formale", note: "Sinonimo quasi perfetto, con sfumatura di subalternità più marcata." },
  ],

  antonyms: [
    { term: "franchezza", register: "comune", note: "Il dire la verità anche quando fa male, senza calcolo di convenienza." },
    { term: "critica costruttiva", register: "comune-professionale", note: "Il feedback che mira al miglioramento, non all’approvazione." },
  ],

  relatedWords: ["ipocrisia", "opportunismo", "malafede", "doppiezza"],
  sourceLinks: {},

  paroliereNote:
    "Plutarco scrisse un intero trattato su come distinguere l’adulatore dall’amico " +
    "— e il fatto che ci volesse un trattato dice tutto sulla difficoltà " +
    "dell’impresa. L’adulazione è difficile da smascherare perché usa le stesse " +
    "parole dell’apprezzamento genuino. L’unico test affidabile è il tempo e la " +
    "coerenza: l’adulatore cambia tono quando il potente cade. L’amico no. " +
    "Costruire una cerchia in cui sia possibile sentirsi dire la verità è " +
    "probabilmente la cosa più difficile che chiunque in una posizione di potere " +
    "possa fare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "adulazione — la lode interessata che corrompe chi la riceve",
    description: "Che cos’è l’adulazione: definizione etica e psicologica, differenza da ammirazione sincera, e come l’adulazione sistematica degrada il giudizio del potere.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
