// Il Paroliere — Lemma: crasi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const crasi: LemmaEntry = {
  lemma: "crasi",
  slug: "crasi",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In linguistica, fenomeno per cui due parole o sillabe adiacenti si fondono in " +
    "un'unica forma, perdendo uno o più elementi fonologici. Esempi canonici " +
    "dell'italiano sono «del» da «di + il» e «nel» da «in + il». In senso più ampio, " +
    "il termine indica la fusione compatta di due forme distinte in un unico termine " +
    "nuovo, come accade nei portmanteau e in certi neologismi internazionali nati " +
    "dalla contrazione di due parole.",

  shortDefinition:
    "Fusione fonetica di due parole o sillabe adiacenti in un'unica forma compatta.",

  register: ["tecnico", "linguistico"],
  domains: ["linguistica", "retorica", "grammatica"],

  etymology:
    "Dal greco krâsis (mescolanza, temperamento), derivato di keránnymi (mescolare). " +
    "Il termine era usato anche in medicina antica per indicare la mescolanza degli " +
    "umori corporei.",

  examples: [
  ],

  synonyms: [
    { term: "contrazione", register: "tecnico", context: "Riduzione fonetica di due elementi in uno, sinonimo parziale in grammatica italiana" },
    { term: "fusione", register: "comune", context: "In senso lato, unione di due forme distinte; meno preciso del termine tecnico" },
    { term: "elisione", register: "tecnico", context: "Caduta di una vocale finale davanti a vocale iniziale; processo affine ma distinto dalla crasi" }
  ],

  antonyms: [
    { term: "scissione", register: "tecnico", context: "Separazione di elementi; movimento opposto alla fusione" },
    { term: "separazione", register: "comune", context: "Divisione di ciò che era unito; contrario del processo di crasi" }
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/crasi"
  },

  paroliereNote:
    "La crasi è uno dei meccanismi più antichi e naturali della lingua: le parole si " +
    "avvicinano, si toccano, e dove il contatto è abbastanza frequente finiscono per " +
    "fondersi. L'italiano è pieno di crasi ormai invisibili — «del», «nel», «col», " +
    "«al» — che nessun parlante percepisce più come fusioni, ma che portano ancora " +
    "dentro di sé la traccia del processo. Nei neologismi contemporanei il principio " +
    "è lo stesso, ma il gesto è deliberato: due parole vengono avvicinate " +
    "consapevolmente per produrre un termine nuovo, compatto, memorabile. Il " +
    "risultato è spesso più di una somma: la crasi genera qualcosa che non esisteva " +
    "prima, con una forma propria e, talvolta, una vita propria. Nel linguaggio del " +
    "digital marketing contemporaneo il meccanismo è particolarmente vivo: SEOmantica " +
    "(SEO + semantica) nomina l'approccio alla SEO moderna fondato su entità, topic " +
    "cluster e segnali di ranking semantici; Searchperience (search + experience) " +
    "ricorda che la SEO non finisce al click, ma si estende alla qualità dell'esperienza " +
    "utente dalla SERP in poi; Rankability (rank + ability) descrive la capacità concreta " +
    "di una pagina di posizionarsi — intento chiaro, struttura, autorevolezza e segnali " +
    "coerenti — distinta dalla semplice presenza online. Tre esempi di come la crasi " +
    "non sia solo un fatto grammaticale, ma uno strumento per pensare concetti nuovi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Crasi — Il Paroliere",
    description:
      "Crasi: significato, etimologia e uso in linguistica. La fusione di due parole in " +
      "una sola forma, dai classici dell'italiano ai neologismi contemporanei.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};