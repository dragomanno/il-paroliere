// Il Paroliere — Lemma: detrazione fiscale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const detrazioneIrpef: LemmaEntry = {
  lemma: "detrazione fiscale",
  slug: "detrazione-fiscale",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Importo che viene sottratto direttamente dall'imposta lorda già calcolata. " +
    "La detrazione agisce a valle del calcolo dell'imposta: non tocca la base " +
    "imponibile, ma riduce il tributo finale da versare. A differenza della " +
    "→ deduzione fiscale, il risparmio reale è tendenzialmente uguale per tutti " +
    "i contribuenti che applicano la stessa detrazione (salvo meccanismi di decalage " +
    "al crescere del reddito), perché opera su un valore fisso o percentuale " +
    "indipendente dall'aliquota marginale. Principali voci detraibili in Italia: " +
    "detrazione per lavoro dipendente (spettante automaticamente), interessi passivi " +
    "sul mutuo per la prima casa (19%), spese mediche e sanitarie (19%, con " +
    "franchigia di 129,11 €), spese per istruzione (19%), premi assicurativi vita " +
    "e infortuni (19%), bonus ristrutturazioni edilizie (50%, 65%, 70% a seconda " +
    "dell'intervento), ecobonus per risparmio energetico, spese veterinarie (19%). " +
    "Il decalage: molte detrazioni si riducono proporzionalmente al crescere del " +
    "reddito e si azzerano oltre una soglia. La detrazione non rimborsata: se " +
    "l'imposta lorda è inferiore alla detrazione spettante, la parte eccedente " +
    "in genere non viene rimborsata — è persa.",

  shortDefinition:
    "Importo che riduce direttamente l'imposta lorda già calcolata; il risparmio è tendenzialmente uguale per tutti, salvo meccanismi di decalage.",

  register: ["tecnico-fiscale", "comune"],
  domains: ["fisco", "diritto tributario", "economia"],

  etymology:
    "Dal latino detractio, -onis, «azione di togliere, diminuire». Latinismo " +
    "tecnico entrato nel lessico giuridico-fiscale italiano con la sistematizzazione " +
    "del diritto tributario moderno.",

  examples: [
    "Ho speso 2.000 euro di spese mediche: con la detrazione del 19%, recupero 370 euro direttamente dall'imposta — ma solo sulla parte eccedente la franchigia di 129 euro.",
    "La detrazione per gli interessi del mutuo è uno dei pochi sgravi rimasti alla classe media: vale 19% degli interessi pagati, fino a 4.000 euro all'anno.",
    'Mi spettavano 800 euro di detrazione ma la mia imposta lorda era solo 600 euro: ho "perso" 200 euro perché non c\'era abbastanza imposta da abbattere.',
  ],

  synonyms: [
    {
      term: "sgravio fiscale",
      register: "comune",
      context: "generico",
    },
    {
      term: "sconto sull'imposta",
      register: "comune",
      context: "uso informale",
    },
  ],

  antonyms: [
    {
      term: "imposta piena",
      register: "tecnico-fiscale",
      context: "tassazione senza sgravi",
    },
  ],

  relatedWords: [
    "deduzione-fiscale",
    "irpef",
    "defiscalizzazione",
    "f24",
    "730",
    "decalage",
    "franchigia",
    "bonus fiscale",
    "credito d",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/detrazione/",
    wiktionary: "https://it.wiktionary.org/wiki/detrazione",
  },

  paroliereNote:
    "Le detrazioni sono lo strumento con cui lo Stato orienta i comportamenti dei " +
    "cittadini senza vietare né obbligare: ti costa meno ristrutturare casa, andare " +
    "dal medico, pagare la retta universitaria. Il sistema funziona — le detrazioni " +
    "edilizie hanno effettivamente mosso il mercato delle ristrutturazioni — ma ha " +
    "un difetto strutturale: avvantaggia chi ha già abbastanza imposta da pagare. " +
    "Chi guadagna poco, o ha redditi intermittenti, spesso non riesce a sfruttare " +
    "pienamente le detrazioni perché non ha imposta lorda sufficiente. È uno dei " +
    "paradossi del sistema fiscale italiano: gli sgravi vanno a chi ha già di che " +
    "pagare. Regola mnemonica: la detrazione abbatte l'imposta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Detrazione fiscale — cos'è, come funziona, differenza dalla deduzione | Il Paroliere",
    description:
      "Cos'è la detrazione fiscale, come abbatte l'imposta lorda, trabocchetti del decalage e della detrazione non rimborsata. Schema, esempi numerici, nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
