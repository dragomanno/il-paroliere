// Il Paroliere — Lemma: ipocrisia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ipocrisia: LemmaEntry = {
  lemma: "ipocrisia",
  slug: "ipocrisia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "religioso"],
  domains: ["etica", "psicologia", "religione", "politica"],

  definition:
    "Atteggiamento di chi ostenta pubblicamente valori, principi o virtù che non " +
    "possiede o non pratica nella vita privata — con consapevolezza dello scarto tra " +
    "ciò che si mostra e ciò che si è. L’ipocrita non è chi fallisce nell’applicare " +
    "i propri principi: questo è debolezza umana. L’ipocrita è chi enuncia principi " +
    "che sa di non voler applicare, usando la loro enunciazione come vantaggio sociale " +
    "o come copertura. È strutturalmente diversa dalla falsità: l’ipocrita non nega " +
    "di avere valori, li performa.",

  shortDefinition:
    "Ostentazione di valori o virtù che non si possiede o non si pratica; si " +
    "distingue dalla debolezza umana perché implica la consapevolezza dello scarto " +
    "tra il mostrato e il vissuto.",

  etymology:
    "Dal greco hypokrisis «interpretazione teatrale, finzione», da hypokrínomai " +
    "«rispondere, recitare», composto da hypo «sotto» e krínomai «giudicare, " +
    "rispondere». L’ipocrita è letteralmente l’attore — chi risponde «da sotto», " +
    "dalla maschera.",

  examples: [
    "L’ipocrita non mente: performa. La differenza è importante perché smascherarlo richiede non solo mostrare che ha torto, ma mostrare che lo sa.",
    "La morale pubblica nelle società puritane produce ipocrisia sistematica: quando lo standard è irraggiungibile, la scelta è tra confessarlo pubblicamente o fingere di rispettarlo.",
    "In politica, accusare l’avversario di ipocrisia è la mossa retorica più comune — e la meno efficace, perché entrambi i lati hanno sempre materiale per reciproca accusa.",
    "L’ipocrisia dei buoni sentimenti: condividere post sull’ambiente mentre si viaggia in business class non è consapevolezza ecologica, è gestione dell’immagine.",
  ],

  synonyms: [
    { term: "doppiezza", register: "comune", note: "Più comportamentale: dire una cosa e farne un’altra. L’ipocrisia è più teatrale e pubblica." },
    { term: "falsità", register: "comune", note: "Più ampio: include anche la menzogna diretta; l’ipocrisia è specifica all’area dei valori." },
  ],

  antonyms: [
    { term: "autenticità", register: "comune-psicologico", note: "La coerenza tra ciò che si è e ciò che si mostra." },
    { term: "sincerità", register: "comune", note: "La corrispondenza tra ciò che si dice e ciò che si pensa o vive." },
  ],

  relatedWords: ["doppiezza", "malafede", "opportunismo", "adulazione"],
  sourceLinks: {},

  paroliereNote:
    "L’ipocrisia è il vizio che la letteratura ha trovato più interessante — da " +
    "Tartufo a Uriah Heep — forse perché è il più teatrale. L’ipocrita è sempre un " +
    "attore che recita per un pubblico, e il problema non è solo morale: è estetico. " +
    "C’è qualcosa di offensivo nell’ipocrisia ben riuscita, qualcosa che va oltre il " +
    "danno pratico. Forse perché ci ricorda che la virtù può essere mimata così bene " +
    "da risultare indistinguibile dall’originale — il che mette in discussione " +
    "l’originale stesso.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "ipocrisia — recitare virtù che non si possiede, da Tartufo ai social",
    description: "Che cos’è l’ipocrisia: definizione etica e psicologica, differenza da debolezza umana e falsità, e l’ipocrisia dei buoni sentimenti nell’era digitale.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
