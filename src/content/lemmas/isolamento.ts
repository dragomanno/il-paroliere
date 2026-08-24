// Il Paroliere — Lemma: isolamento
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const isolamento: LemmaEntry = {
  lemma: "isolamento",
  slug: "isolamento",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "psicologico", "sociologico", "medico", "giuridico"],
  domains: ["psicologia", "sociologia", "salute", "diritto penitenziario"],

  definition:
    "1. In psicologia e nella vita sociale, condizione, spesso oggettiva o imposta dall’esterno, in cui una persona, un gruppo o un luogo resta separato da contatti, risorse e partecipazione. 2. In medicina, separazione di un paziente per prevenire o contenere un rischio sanitario o infettivo. 3. In ambito penitenziario, misura cautelare o disciplinare che separa una persona detenuta dagli altri reclusi. Diverso dal → estraneamento, che è soprattutto il vissuto interiore di non sentirsi parte anche in mezzo agli altri.",

  shortDefinition:
    "Condizione di separazione dai contatti o dalla partecipazione; in medicina e in carcere, misura di separazione con finalità specifiche.",

  etymology:
    "Derivato di isolare, verbo formato sull’immagine dell’isola, luogo separato dalla terraferma. Il valore figurato conserva l’idea di una distanza difficile da attraversare.",

  examples: [
    "Non era → solitudine cercata: l’isolamento sociale le aveva fatto perdere il ritmo delle conversazioni e degli inviti.",
    "La frana causò l’isolamento del paese e rese complicati anche i gesti più ordinari.",
    "Per proteggere gli altri degenti, il paziente fu trasferito in isolamento ospedaliero.",
    "L’isolamento in carcere fu disposto come misura cautelare, con regole e durata da verificare.",
  ],

  synonyms: [
    { term: "estraneamento", register: "psicologico", context: "Sinonimo parziale: isolamento è soprattutto una condizione o una circostanza, spesso esterna e concreta; estraneamento descrive il sentirsi fuori posto o non partecipi anche quando gli altri sono presenti." },
    { term: "segregazione", register: "sociologico", context: "Separazione imposta o strutturale tra gruppi; ha una gravità politica che isolamento non implica sempre." },
    { term: "emarginazione", register: "sociologico", context: "Evidenzia l’essere spinti ai margini di una comunità o di un sistema sociale." },
    { term: "separazione", register: "comune", context: "Termine più neutro: può designare anche una distanza temporanea o volontaria." },
  ],

  antonyms: [
    { term: "comunità", register: "comune", context: "Presenza di appartenenza, scambio e riconoscimento reciproco." },
    { term: "integrazione", register: "sociologico", context: "Ingresso effettivo in una rete sociale o in un contesto condiviso." },
  ],

  relatedWords: ["comunità", "solitudine", "connessione", "estraneamento", "relazione", "esclusione", "alienazione", "appartenenza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/isolamento",
  },

  paroliereNote:
    "L’isolamento descrive prima di tutto una posizione: si è tagliati fuori da qualcuno o da qualcosa. L’estraneamento può invece affiorare in una stanza piena di persone; la → solitudine, a sua volta, può essere scelta e persino feconda. Distinguere queste parole aiuta a rendere visibili le cause sociali, materiali o istituzionali della separazione.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Isolamento — definizione, sinonimi, uso | Il Paroliere",
    description: "Isolamento: separazione sociale, sanitaria o penitenziaria. Differenza da estraneamento e solitudine, sinonimi ed esempi d’uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
