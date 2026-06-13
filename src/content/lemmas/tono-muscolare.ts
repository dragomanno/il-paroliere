// Il Paroliere — Lemma: tono muscolare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tonoMuscolare: LemmaEntry = {
  lemma: "tono muscolare",
  slug: "tono-muscolare",
  partOfSpeech: "locuzione nominale",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["fisiologia", "fisioterapia", "medicina sportiva"],

  definition:
    "Stato di contrazione parziale e involontaria che il muscolo mantiene costantemente " +
    "a riposo, garantendo la postura, la prontezza al movimento e la resistenza di base " +
    "agli agenti esterni. Non è una contrazione attiva ma un livello basale di attivazione " +
    "neuromuscolare, regolato dal sistema nervoso centrale attraverso i fusi neuromuscolari. " +
    "Senza tono muscolare, il corpo collasserebbe sulla gravità.",

  shortDefinition:
    "Contrazione parziale e involontaria del muscolo a riposo che mantiene postura e prontezza al movimento.",

  etymology:
    "Composto da tono (dal greco tonos “tensione, corda tesa”) e muscolare (dal latino " +
    "musculus “muscolo”, diminutivo di mus “topo” — per la forma del muscolo contratto " +
    "sotto la pelle). Il tono come tensione ordinata di una struttura elastica.",

  examples: [
    "Il tono muscolare si valuta passivamente: il clinico muove l’arto del paziente rilassato e misura la resistenza che il muscolo oppone senza sforzo volontario.",
    "Gli atleti di alto livello hanno un tono muscolare elevato anche a riposo: il sistema nervoso impara a mantenere un livello di allerta superiore come default.",
    "Il tono muscolare diminuisce fisiologicamente durante il sonno profondo: il corpo si rilascia completamente solo nelle fasi di sonno lento, mai durante il sogno.",
    "Il tono muscolare del neonato è uno dei parametri del punteggio di Apgar: nella prima valutazione postnatale, la risposta neuromuscolare dice molto sullo stato di salute del sistema nervoso.",
  ],

  synonyms: [
    { term: "tonicità", register: "tecnico-comune", note: "La forma sostantivata della qualità; spesso intercambiabile nell’uso non strettamente clinico." },
    { term: "tono di base", register: "tecnico", note: "Denominazione alternativa per il livello basale di contrazione a riposo." },
  ],

  antonyms: [
    { term: "flaccidità", register: "tecnico-comune", note: "Assenza di tono; il muscolo che non oppone resistenza passiva." },
  ],

  relatedWords: ["tonicita", "ipotonia", "elasticita", "atrofia"],

  paroliereNote:
    "Il tono muscolare è la differenza tra un corpo che si tiene in piedi e un corpo " +
    "che collassa — eppure è così automatico che quasi nessuno sa di averlo fino a " +
    "quando non viene meno. È una delle tante cose che il corpo fa silenziosamente, " +
    "senza chiederci permesso, e che notiamo solo per assenza. C’è qualcosa di simile " +
    "nella buona struttura di un testo: il tono che regge tutto dall’interno, invisibile, " +
    "e che si sente solo quando manca.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "tono muscolare — cos’è, come funziona e come si valuta",
    description: "Tono muscolare: definizione fisiologica, valutazione clinica, differenze con tonicità e ipotonia. Come il sistema nervoso mantiene il corpo in postura.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
