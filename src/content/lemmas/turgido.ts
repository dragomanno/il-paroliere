// Il Paroliere — Lemma: turgido
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const turgido: LemmaEntry = {
  lemma: "turgido",
  slug: "turgido",
  partOfSpeech: "aggettivo",
  gender: "maschile",
  register: ["letterario", "tecnico", "comune"],
  domains: ["botanica", "anatomia", "retorica", "estetica"],

  definition:
    "Gonfio, teso, rigonfio per eccesso di liquido o di tensione interna. In botanica " +
    "e anatomia è descrizione precisa: un frutto turgido, un’infiammazione turgida. In " +
    "retorica, è attributo negativo: uno stile turgido è pomposo, esagerato, gonfio di " +
    "parole che non trasportano contenuto proporzionale. La parola oscilla tra descrizione " +
    "fisica neutrale e critica stilistica.",

  shortDefinition:
    "Gonfio, rigonfio per tensione interna; in retorica, detto di stile pomposo e ridondante.",

  etymology:
    "Dal latino turgidus, da turgere “essere gonfio, rigonfio”, di radice incerta. La " +
    "stessa radice di “turgore” e del raro “turgescenza”.",

  examples: [
    "Il fico maturo era turgido e caldo al sole di agosto — la buccia tesa al limite, il succo che premeva dall’interno.",
    "Lo stile turgido di certi romanzi dell’Ottocento non era sempre un difetto: era la convenzione del genere, il modo in cui ci si aspettava che la letteratura 'alta' suonasse.",
    "Il tessuto infiammato appare turgido e caldo al tatto: sono i segni classici dell’infiammazione acuta che ogni studente di medicina impara a riconoscere.",
    "Una prosa turgida non è necessariamente ignorante: può essere la scelta di chi vuole impressionare più che comunicare — il che è un problema diverso.",
  ],

  synonyms: [
    { term: "gonfio", register: "comune", note: "Il sinonimo quotidiano, senza sfumature retoriche." },
    { term: "rigonfio", register: "comune", note: "Più enfatico di gonfio; implica un gonfiore eccessivo." },
    { term: "ampolloso", register: "letterario", note: "Per lo stile retorico: enfatico e vuoto; sinonimo nel senso critico-letterario." },
  ],

  antonyms: [
    { term: "flaccido", register: "comune-tecnico", note: "Il contrario fisico diretto: senza tensione, senza tonicità interna." },
    { term: "asciutto", register: "comune", note: "In senso stilistico: prosa sobria, senza ridondanze." },
  ],

  relatedWords: ["tonicita", "elasticita", "flosco", "materialita"],

  paroliereNote:
    "Turgido è una parola con doppia vita: in botanica è un complimento (frutto turgido " +
    "= frutto al massimo della maturità), in critica letteraria è quasi sempre un’accusa. " +
    "Il passaggio non è casuale — in entrambi i casi si parla di qualcosa gonfio oltre il " +
    "punto ottimale. Il frutto turgido sta per esplodere o marcire; la prosa turgida ha " +
    "perso il controllo della propria abbondanza.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "turgido — significato in botanica, anatomia e retorica",
    description: "Turgido: dal frutto gonfio di succo alla prosa pomposa. Doppio uso descrittivo e critico di un aggettivo con due vite.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
