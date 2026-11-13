// Il Paroliere — Lemma: desiderio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const desiderio: LemmaEntry = {
  lemma: "desiderio",
  slug: "desiderio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune"],
  domains: ["psicologia", "relazioni", "filosofia", "sessualità"],

  definition:
    "1. Tensione della mente o del corpo verso ciò che manca, attrae o si vorrebbe ottenere: può riguardare un bene concreto, una persona, un'esperienza o una condizione futura. Non misura da sé l'intensità né promette un'azione; è il nucleo ampio da cui si distinguono l'orientata → aspirazione e la più urgente brama. 2. Nelle relazioni e nella sessualità, attrazione che porta a cercare intimità o contatto erotico con qualcuno; può essere ricambiata, incerta, intensa o quieta e chiede sempre ascolto e rispetto reciproco.",

  shortDefinition:
    "Tensione verso ciò che manca o attrae, concreta, affettiva o sessuale, senza implicare per forza urgenza o progetto.",

  etymology:
    "Dal latino desiderium, da desiderare. L'origine è tradizionalmente accostata a sidus, «stella»: una lontananza osservata che diventa mancanza e ricerca.",

  examples: [
    "Il desiderio di cambiare lavoro era chiaro, ma non aveva ancora preso la forma di un piano.",
    "Davanti alla vetrina sentì un desiderio improvviso e sorrise della propria debolezza.",
    "Il suo desiderio più semplice era avere una sera libera da condividere con gli amici.",
    "Tra loro il desiderio cresceva con naturalezza, fatto di attrazione, fiducia e della libertà di dirsi anche di no.",
  ],

  synonyms: [
    { term: "aspirazione", register: "comune", context: "È un desiderio organizzato attorno a un traguardo futuro o a un progetto di sé." },
    { term: "brama", register: "letterario", context: "Desiderio di intensità più fisica e possessiva; non serve per ogni semplice desiderio." },
    { term: "anelito", register: "letterario", context: "Desiderio più acceso e impaziente, che conserva l'immagine del respiro che manca." },
  ],

  antonyms: [
    { term: "indifferenza", register: "comune", context: "Assenza di attrazione o di investimento verso un oggetto." },
    { term: "rassegnazione", register: "comune", context: "Rinuncia a mantenere viva la tensione verso ciò che non si può avere." },
  ],

  relatedWords: ["aspirazione", "bramare", "agognare", "vagheggiare", "attrazione", "intimità", "speranza", "attesa", "frustrazione", "rassegnazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/desiderio",
  },

  paroliereNote:
    "Desiderio è la parola-cerniera del gruppo: non nobilita né condanna ciò che muove e lascia aperte intensità, oggetto e conseguenze. Anche quando riguarda la sessualità non equivale a pretesa: nomina un orientamento verso l'altro, non un diritto sull'altro. Quando si vuole nominare una direzione già costruita conviene passare a → aspirazione; quando prevale la mancanza, il rapporto con → attesa cambia il tono della frase.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Desiderio — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Che cos'è il desiderio: definizione originale, esempi e differenze da aspirazione, brama, agognare e vagheggiare.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
