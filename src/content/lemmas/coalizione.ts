// Il Paroliere — Lemma: COALIZIONE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coalizione: LemmaEntry = {
  lemma: "coalizione",
  slug: "coalizione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Alleanza temporanea tra partiti, Stati o forze diverse, costituita per raggiungere " +
    "un obiettivo condiviso, spesso in opposizione a un avversario comune o in risposta a " +
    "una crisi. A differenza dell'alleanza strutturale, la coalizione ha tipicamente " +
    "durata limitata e si scioglie una volta raggiunto (o mancato) lo scopo. " +
    "Governo di coalizione: esecutivo sorretto da più partiti che non hanno ottenuto " +
    "la maggioranza assoluta singolarmente. " +
    "Coalizione militare: accordo tra più eserciti o nazioni per operazioni congiunte.",
  shortDefinition: "Alleanza temporanea tra partiti, Stati o forze diverse per raggiungere un obiettivo comune.",
  register: ["formale", "politico", "storico"],
  domains: ["politica", "storia militare"],
  etymology:
    "Dal francese *coalition*, a sua volta dal latino medievale *coalitio*, " +
    "derivato di *coalescere* (crescere insieme, unirsi), composto di *co-* (insieme) " +
    "e *alescere* (crescere). Il termine entra in italiano nel XVIII-XIX secolo, " +
    "in particolare con le coalizioni antinapoleoniche.",
  examples: [
    "Il governo di coalizione tra i tre partiti di centro si è formato dopo " +
    "tre settimane di trattative post-elettorali.",
    "La coalizione militare guidata dagli Stati Uniti ha condotto operazioni " +
    "aeree nel teatro di guerra per oltre un anno.",
    "In politica italiana, le coalizioni pre-elettorali spesso si sgretolano " +
    "nel momento in cui si tratta di distribuire i ministeri.",
  ],
  synonyms: [
    { term: "alleanza", register: "formale", context: "più stabile e strutturata della coalizione" },
    { term: "fronte", register: "politico-storico", context: "unione di forze contro un nemico comune" },
    { term: "blocco", register: "politico", context: "aggregazione compatta di forze omogenee" },
    { term: "schieramento", register: "politico", context: "con enfasi sulla disposizione delle forze" },
  ],
  antonyms: [
    { term: "frammentazione", register: "neutro", context: "dissoluzione delle forze in entità separate" },
    { term: "scissione", register: "politico", context: "separazione formale di una componente" },
    { term: "opposizione", register: "politico", context: "posizione di contrasto rispetto alla maggioranza" },
  ],
  relatedWords: ["alleanza", "conflitto", "potere", "autorita", "consenso", "politica", "liberalismo", "diritto", "liberta", "norma", "trasformismo"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/coalizione",
    treccani: "https://www.treccani.it/vocabolario/coalizione/",
  },
  paroliereNote:
    "La distinzione tra coalizione e alleanza è di grado e durata: la coalizione è " +
    "più contingente, spesso opportunistica, orientata a un obiettivo puntuale; " +
    "l'alleanza tende a essere più strutturata e duratura, basata su affinità valoriali " +
    "o interessi strategici condivisi. In sistemi proporzionali come quello italiano, " +
    "i governi di coalizione sono la norma e la loro instabilità è oggetto di studio " +
    "politologico costante.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "COALIZIONE — definizione | Il Paroliere",
    description:
      "Definizione di coalizione: alleanza temporanea tra partiti o Stati per un obiettivo comune. " +
      "Governo di coalizione, storia militare. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
