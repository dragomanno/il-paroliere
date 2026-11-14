// Il Paroliere — Lemma: altitudine
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const altitudine: LemmaEntry = {
  lemma: "altitudine",
  slug: "altitudine",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "Distanza verticale di un punto o di un luogo dal livello medio del mare, preso come riferimento zero. Si misura in metri e si indica con s.l.m., «sul livello del mare»; in Italia il riferimento è il livello medio del mare registrato a Genova. In aeronautica indica la distanza di un velivolo dal livello del mare, da non confondere con l'altezza, che si misura dal suolo sottostante.",
  shortDefinition: "Distanza verticale di un punto dal livello medio del mare, espressa in metri sul livello del mare.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "geografia",
    "cartografia",
    "aeronautica",
  ],
  etymology: "Dal latino altitudo, -inis «altezza, profondità», derivato di altus «alto», che in latino poteva indicare tanto l'alto quanto il profondo, visti dal punto di chi misura.",
  examples: [
    "Il paese sorge a ottocento metri di altitudine, al confine tra i castagni e i faggi.",
    "Oltre i tremila metri di altitudine qualcuno del gruppo ha cominciato ad accusare mal di testa.",
    "L'aereo ha raggiunto un'altitudine di crociera di undicimila metri sopra il mare.",
  ],
  synonyms: [
    {
      term: "quota",
      register: "tecnico-scientifico",
      context: "il valore numerico dell'altitudine di un punto, soprattutto in cartografia e in volo",
    },
    {
      term: "altezza sul livello del mare",
      register: "comune",
      context: "formula descrittiva; altezza da sola indica la distanza dal suolo",
    },
  ],
  antonyms: [
    {
      term: "profondità",
      register: "comune",
      context: "distanza sotto il livello del mare o sotto una superficie",
    },
  ],
  relatedWords: [
    "quota",
    "isoipsa",
    "equidistanza",
    "topografia",
    "rilievo",
    "cartografia",
    "geoide",
    "coordinate-geografiche",
    "gps",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/altitudine/",
    wiktionary: "https://it.wiktionary.org/wiki/altitudine",
  },
  paroliereNote: "Tre parole che il parlato mescola e il tecnico tiene separate. L'altitudine è un fatto del luogo: il rifugio è a 2400 metri. La → quota è il numero che la esprime, sulla carta o sull'altimetro. L'altezza si misura da un'altra base, il suolo o il piede dell'oggetto: un campanile alto cinquanta metri può stare a mille metri di altitudine. In volo la differenza non è pedanteria, perché un aereo a quota costante può passare in pochi minuti da tremila metri di altezza sul mare a poche centinaia sopra una montagna.",
  seo: {
    title: "Altitudine — significato, quota e altezza | Il Paroliere",
    description: "Che cos'è l'altitudine: la distanza verticale dal livello medio del mare. Differenza con quota e altezza, riferimento di Genova, etimologia ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
