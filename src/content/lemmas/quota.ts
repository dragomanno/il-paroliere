// Il Paroliere — Lemma: quota
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const quota: LemmaEntry = {
  lemma: "quota",
  slug: "quota",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "1. In cartografia e in topografia, numero che esprime l'altitudine di un punto rispetto al livello del mare o a un altro piano di riferimento; sulle carte compare accanto ai punti quotati e alle curve di livello. 2. Per estensione, posizione in altezza di un aereo, di un luogo o di un oggetto: volare ad alta quota, prendere o perdere quota, anche in senso figurato. 3. Nell'uso comune, parte che spetta a ciascuno in una divisione, o somma da versare: la quota d'iscrizione, una quota del capitale sociale.",
  shortDefinition: "Valore numerico dell'altitudine di un punto sulle carte; nell'uso comune, anche la parte o la somma che spetta a ciascuno.",
  register: [
    "tecnico-scientifico",
    "comune",
    "figurato",
  ],
  domains: [
    "cartografia",
    "topografia",
    "aeronautica",
  ],
  etymology: "Dal latino medievale quota (pars) «quale parte, quanta parte», femminile di quotus «quanto, in che numero». I due sensi principali vengono dalla stessa domanda, «quanto?»: quanto spetta a ciascuno, e a che numero sta un punto in altezza.",
  examples: [
    "Sulla tavoletta IGM la cima è segnata con un triangolino e la quota 1347.",
    "Dopo il decollo l'aliante ha preso quota sfruttando una corrente ascensionale sopra il crinale.",
    "Ognuno dei soci ha versato la sua quota, e il furgone per la cooperativa è stato pagato in contanti.",
  ],
  synonyms: [
    {
      term: "altitudine",
      register: "tecnico-scientifico",
      context: "il fatto geografico di cui la quota è la misura",
    },
    {
      term: "altezza",
      register: "comune",
      context: "nel parlato, impreciso: in senso tecnico si misura dal suolo",
    },
    {
      term: "rata",
      register: "comune",
      context: "solo nel senso economico, quando la somma è divisa nel tempo",
    },
  ],
  antonyms: [],
  relatedWords: [
    "altitudine",
    "isoipsa",
    "equidistanza",
    "topografia",
    "rilievo",
    "geoide",
    "igm",
    "isobata",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/quota/",
    wiktionary: "https://it.wiktionary.org/wiki/quota",
  },
  paroliereNote: "Sulle carte la quota è un dato preciso, e i punti quotati sono i capisaldi da cui si ricostruisce tutto il → rilievo. Nella lingua comune la parola si è presa un'enorme libertà: dalle quote rosa alla quota latte, fino ai nomi delle riforme pensionistiche, è diventata la misura di tutto ciò che si conta e si divide. Il figurato aeronautico, prendere o perdere quota, è il più espressivo, e funziona per carriere, partiti e umori. Vedi → altitudine.",
  seo: {
    title: "Quota — significato in cartografia e nell'uso comune | Il Paroliere",
    description: "Che cos'è la quota: il valore dell'altitudine di un punto sulle carte, ma anche la parte che spetta a ciascuno. Prendere e perdere quota, etimologia ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
