// Il Paroliere — Lemma: deduzione fiscale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const deduzioneFiscale: LemmaEntry = {
  lemma: "deduzione fiscale",
  slug: "deduzione-fiscale",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Importo che viene sottratto dal reddito imponibile prima che su di esso venga " +
    "applicata l'aliquota fiscale. La deduzione agisce a monte del calcolo " +
    "dell'imposta: riduce la base imponibile, cioè la somma su cui viene misurata " +
    "l'imposta. Questo significa che il risparmio fiscale effettivo generato da una " +
    "deduzione non è uguale per tutti i contribuenti, ma dipende dall'aliquota " +
    "marginale di ciascuno: chi si trova nello scaglione IRPEF più alto (43%) " +
    "risparmia 430 € per ogni 1.000 € dedotti; chi si trova nel primo scaglione " +
    "(23%) ne risparmia solo 230 €. La deduzione favorisce proporzionalmente i " +
    "redditi più alti. Principali voci deducibili in Italia: contributi previdenziali " +
    "obbligatori e volontari, contributi versati a fondi pensione integrativi " +
    "(entro certi limiti), assegni di mantenimento corrisposti all'ex coniuge " +
    "(non ai figli), contributi versati per colf e badanti, erogazioni liberali " +
    "a determinate ONLUS e enti del terzo settore.",

  shortDefinition:
    "Importo che riduce il reddito imponibile prima del calcolo dell'imposta; il risparmio varia in base all'aliquota marginale del contribuente.",

  register: ["tecnico-fiscale", "comune"],
  domains: ["fisco", "diritto tributario", "economia"],

  etymology:
    "Dal latino deductio, -onis, «azione di condurre via, sottrarre». Latinismo " +
    "tecnico entrato nel lessico giuridico-fiscale italiano con la sistematizzazione " +
    "del diritto tributario moderno.",

  examples: [
    "«I 3.000 euro versati al fondo pensione sono una deduzione: abbassano il reddito imponibile e mi fanno risparmiare tanto più quanto più alta è la mia aliquota.»",
    "«La deduzione dei contributi previdenziali è automatica per i lavoratori dipendenti: non bisogna fare nulla nel 730.»",
    "«Una deduzione da 1.000 euro vale 430 euro di risparmio per chi guadagna molto e solo 230 euro per chi guadagna poco: è uno dei meccanismi che rende il sistema fiscale meno progressivo di quanto sembri.»",
  ],

  synonyms: [
    {
      term: "abbattimento del reddito imponibile",
      register: "tecnico-fiscale",
      context: "accezione tecnica",
    },
    {
      term: "riduzione della base imponibile",
      register: "tecnico-fiscale",
      context: "accezione tecnica",
    },
    {
      term: "sgravio fiscale",
      register: "comune",
      context: "generico",
    },
  ],

  antonyms: [
    {
      term: "tassazione piena",
      register: "tecnico-fiscale",
      context: "imponibilità totale senza riduzioni",
    },
  ],

  relatedWords: [
    "detrazione fiscale",
    "IRPEF",
    "defiscalizzazione",
    "investimento",
    "aliquota marginale",
    "reddito imponibile",
    "fondo pensione",
    "730",
    "Unico",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/deduzione/",
    wiktionary: "https://it.wiktionary.org/wiki/deduzione",
  },

  paroliereNote:
    "La deduzione è lo strumento che il legislatore usa per \"togliere dal conto\" " +
    "certi comportamenti considerati meritevoli: risparmiare per la pensione, pagare " +
    "i contributi della colf, versare a un ente di beneficenza. Il meccanismo è " +
    "corretto, ma l'effetto redistributivo è paradossale: più guadagni, più vale la " +
    "stessa deduzione. È uno dei motivi per cui molti economisti preferirebbero " +
    "convertire le deduzioni in detrazioni a importo fisso, che hanno lo stesso " +
    "valore indipendentemente dal reddito. Regola mnemonica: la deduzione abbassa " +
    "il reddito. Entrambe le parole hanno la doppia D.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Deduzione fiscale — cos'è, come funziona, differenza dalla detrazione | Il Paroliere",
    description:
      "Cos'è la deduzione fiscale, come riduce il reddito imponibile, perché vale di più per chi guadagna di più. Schema, esempi e trabocchetti da evitare.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
