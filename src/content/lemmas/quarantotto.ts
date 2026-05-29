// Il Paroliere — Lemma: quarantotto
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const quarantotto: LemmaEntry = {
  lemma: "quarantotto",
  slug: "quarantotto",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Come sostantivo storico, indica l'anno 1848, quando un'ondata di rivoluzioni e " +
    "moti liberali attraversò l'Europa — dal Piemonte alla Sicilia, dalla Francia " +
    "all'Impero asburgico — segnando uno dei momenti più turbolenti del Risorgimento " +
    "italiano. Come espressione colloquiale — 'fare un quarantotto', 'essere un " +
    "quarantotto' — indica una grande confusione, un disordine clamoroso, un momento " +
    "di tumulto e caos difficile da gestire.",

  shortDefinition:
    "L'anno delle rivoluzioni europee del 1848; nel parlato comune, grande confusione " +
    "e tumulto — 'fare un quarantotto'.",

  register: ["comune", "storico", "colloquiale"],
  domains: ["storia", "società", "linguaggio"],

  etymology:
    "Dal numero cardinale quarantotto, diventato sostantivo per metonimia storica: il " +
    "1848 fu un anno di tale intensità che il numero ha finito per incarnare il " +
    "concetto di rivolgimento improvviso. L'estensione colloquiale al significato di " +
    "caos generico si afferma nell'italiano popolare già nella seconda metà " +
    "dell'Ottocento.",

  synonyms: [
    { term: "caos", register: "comune", context: "nel senso colloquiale di disordine" },
    { term: "baraonda", register: "colloquiale", context: "confusione rumorosa, tono simile" },
    { term: "rivoluzione", register: "comune/storico", context: "nel senso storico — ma con registro più preciso e neutro" }
  ],

  antonyms: [
    { term: "ordine", register: "comune", context: "antonimo del senso colloquiale" },
    { term: "quiete", register: "comune", context: "antonimo del senso di tumulto" }
  ],

  relatedWords: [
    "Risorgimento",
    "1848",
    "moti",
    "rivoluzione",
    "baraonda",
    "trambusto",
    "confusione"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/quarantotto"
  },

  paroliereNote:
    "Quarantotto è un lemma doppio che la lingua porta con sé in modo quasi " +
    "inconsapevole: chi dice 'è un quarantotto' raramente pensa ai cannoni e alle " +
    "barricate del 1848. Eppure è proprio da quell'anno — da una primavera europea di " +
    "sommosse, speranze e sconfitte — che la parola ha ereditato la sua carica. Non è " +
    "frequente che un numero d'anno diventi un modo di dire tanto vivo e duraturo: " +
    "dice qualcosa sulla potenza di quel momento storico nella memoria collettiva " +
    "italiana.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Quarantotto — Il Paroliere",
    description:
      "L'anno delle rivoluzioni europee del 1848; nel parlato comune, grande confusione " +
      "e tumulto — 'fare un quarantotto'.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};