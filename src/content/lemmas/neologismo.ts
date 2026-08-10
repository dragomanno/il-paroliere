// Il Paroliere — Lemma: neologismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const neologismo: LemmaEntry = {
  lemma: "neologismo",
  slug: "neologismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["linguistica", "linguaggio"],

  definition:
    "Parola o locuzione di recente formazione, non ancora appartenente al nucleo lessicale consolidato di una lingua, coniata per derivazione, composizione, adattamento da un'altra lingua, o per attribuzione di un significato nuovo a una parola già esistente. Un neologismo nasce tipicamente per colmare un vuoto lessicale — nominare un oggetto, un fenomeno sociale o una tecnologia prima inesistenti — ma il suo destino non è garantito: solo una parte dei neologismi che circolano ogni anno si radica stabilmente nell'uso comune ed entra nei dizionari, mentre la maggioranza scompare entro pochi anni, categorizzata retrospettivamente come modismo o parola effimera. La linguistica distingue inoltre il neologismo spontaneo, nato dall'uso collettivo, dal neologismo d'autore, coniato deliberatamente da uno scrittore o da un'istituzione per un'esigenza espressiva o comunicativa specifica.",

  shortDefinition:
    "Parola o espressione di recente formazione, non ancora radicata nel lessico consolidato; solo una parte dei neologismi sopravvive nell'uso.",

  etymology:
    "Dal francese *néologisme*, composto dal greco *néos* «nuovo» e *lógos* «parola», con il suffisso *-isme* «-ismo»: letteralmente, «la qualità di essere una parola nuova».",

  examples: [
    "'Informatica' fu un neologismo degli anni '60, adattato dal francese *informatique*, oggi perfettamente integrato nel lessico italiano.",
    "Molti neologismi legati ai social media, come 'shadowban' o 'engagement', restano per ora confinati a un gergo tecnico specifico.",
    "Gabriele D'Annunzio è celebre per i suoi neologismi d'autore, spesso ricercati e mai entrati nell'uso comune.",
    "Un neologismo che non supera la prova del tempo viene retrospettivamente etichettato come modismo, una parola di moda passeggera.",
  ],

  synonyms: [
    { term: "conio lessicale", register: "tecnico", note: "Descrive più specificamente l'atto di creazione della nuova parola, non la parola stessa una volta formata." },
  ],

  antonyms: [
    { term: "arcaismo", register: "tecnico-linguistico", note: "Termine caduto in disuso, opposto simmetrico del neologismo sull'asse temporale della lingua." },
  ],

  relatedWords: ["prestito-linguistico", "calco", "burocratese"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/neologismo/",
    wiktionary: "https://it.wiktionary.org/wiki/neologismo",
  },

  paroliereNote:
    "Ogni lingua viva produce neologismi in continuazione, spesso senza che i suoi parlanti se ne accorgano: la lingua che usiamo oggi è piena di parole che, cento anni fa, non esistevano affatto. Il criterio che distingue un neologismo destinato a restare da uno destinato a scomparire non è mai puramente linguistico — dipende dalla persistenza del bisogno che lo ha generato. Finché esisterà il fenomeno che nomina, un neologismo utile ha buone probabilità di sopravvivere; se il fenomeno svanisce, la parola lo segue quasi sempre nell'oblio.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "neologismo — significato, esempi, differenza da modismo",
    description:
      "Che cos'è un neologismo: parola di recente formazione tra necessità lessicale, invenzione d'autore e destino incerto nell'uso comune.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
