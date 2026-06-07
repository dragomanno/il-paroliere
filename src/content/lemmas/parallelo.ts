// Il Paroliere — Lemma: parallelo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const parallelo: LemmaEntry = {
  lemma: "parallelo",
  slug: "parallelo",
  partOfSpeech: "sostantivo maschile; anche aggettivo",
  gender: "maschile",

  definition:
    "In geografia e cartografia, ciascuno dei cerchi immaginari tracciati sulla " +
    "superficie terrestre parallelamente all'equatore, che misura la latitudine dei " +
    "punti che vi giacciono. I paralleli sono perpendicolari ai → meridiani e si " +
    "estendono da est a ovest. Il parallelo di riferimento è l'equatore (0° di " +
    "latitudine), che divide la Terra in emisfero boreale (Nord) e emisfero australe " +
    "(Sud). Il Tropico del Cancro (circa 23°26' N) e il Tropico del Capricorno " +
    "(circa 23°26' S) sono i paralleli limite delle zone tropicali; il Circolo " +
    "Polare Artico (circa 66°34' N) e il Circolo Polare Antartico (circa 66°34' S) " +
    "delimitano le zone polari. I paralleli, a differenza dei meridiani, non " +
    "convergono: mantengono la stessa distanza relativa lungo tutta la loro estensione.",

  shortDefinition:
    "Cerchio immaginario parallelo all'equatore che misura la latitudine; i paralleli sono perpendicolari ai meridiani e non convergono mai.",

  register: ["tecnico-geografico", "comune"],
  domains: ["geografia", "cartografia", "navigazione", "astronomia"],

  etymology:
    "Dal latino parallelus, dal greco parállēlos («che corre accanto»), composto " +
    "di pará («accanto») + allēlōn («l'uno dell'altro»). Il termine " +
    "geometrico-geografico è attestato già in Strabone e Tolomeo.",

  examples: [
    "Il 45° parallelo Nord passa per il nord Italia, attraverso Torino e Venezia.",
    "A differenza dei meridiani, i paralleli non si restringono verso i poli: sono cerchi completi di diametro diverso.",
    "Il Tropico del Cancro è il parallelo più a nord in cui il sole può trovarsi allo zenit a mezzogiorno.",
  ],

  relatedWords: [
    "meridiano",
    "latitudine",
    "longitudine",
    "equatore",
    "tropico",
    "circolo polare",
    "cartografia",
    "coordinate geografiche",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/parallelo/",
    wiktionary: "https://it.wiktionary.org/wiki/parallelo",
  },

  paroliereNote:
    "Parallelo e → meridiano sono quasi sempre insegnati insieme, e quasi sempre " +
    "confusi. La regola visiva più efficace: i paralleli sono le righe orizzontali " +
    "della griglia geografica (come i gradini di una scala), i meridiani sono le " +
    "colonne verticali (come i raggi di una mezza arancia). La confusione è " +
    "comprensibile perché nella vita quotidiana \"parallelo\" significa \"che corre " +
    "nella stessa direzione senza incontrarsi mai\" — e i paralleli geografici fanno " +
    "esattamente questo. I meridiani, invece, si incontrano ai poli: non sono " +
    "davvero \"paralleli\" tra loro, anche se all'equatore sembrano equidistanti.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Parallelo — definizione geografica, latitudine, equatore | Il Paroliere",
    description:
      "Cosa sono i paralleli in geografia, come si misurano, differenza dai meridiani. Tropico del Cancro, equatore, circolo polare. Definizione originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
