// Il Paroliere — Lemma: integrità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const integrita: LemmaEntry = {
  lemma: "integrità",
  slug: "integrita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "saggistico", "tecnico (etica, diritto)"],
  domains: ["etica", "diritto", "politica", "psicologia morale"],

  definition:
    "Qualità di chi agisce in modo coerente con i propri valori dichiarati, senza " +
    "cedere a pressioni, convenienze o vantaggi personali che li contraddicano. " +
    "L’integrità non è solo assenza di corruzione: è la tenuta strutturale tra ciò " +
    "che si dice, ciò che si pensa e ciò che si fa. In ambito giuridico indica anche " +
    "l’inviolabilità di una persona o di un bene — l’integrità fisica, l’integrità dei " +
    "dati — nel senso di completezza non compromessa.",

  shortDefinition:
    "Coerenza stabile tra valori, parole e azioni; in senso giuridico, completezza " +
    "non compromessa di una persona o di un bene.",

  etymology:
    "Dal latino integritas, da integer «intatto, non toccato, completo», composto da " +
    "in- privativo e tangere «toccare». La stessa radice di «intatto» e «integro»: " +
    "chi ha integrità non è stato «toccato» dalla corruzione o dalla compromissione.",

  examples: [
    "L’integrità non si dimostra nei momenti facili: si misura quando il vantaggio di fare altrimenti è concreto e il rischio di essere scoperti è basso.",
    "In politica, parlare di integrità è diventato così inflazionato da suonare quasi come un segnale d’allarme: chi la rivendica troppo spesso sta coprendo qualcosa.",
    "La certificazione ISO 27001 include requisiti specifici per l’integrità dei dati: che non vengano alterati, corrotti o manipolati senza autorizzazione.",
    "Un professionista con integrità rifiuta l’incarico quando ha un conflitto d’interessi — non perché la legge lo imponga, ma perché sa che non potrebbe fare bene il proprio lavoro.",
  ],

  synonyms: [
    { term: "probità", register: "formale-saggistico", note: "Sottolinea la dimensione morale della rettitudine, con sfumatura più personale." },
    { term: "rettitudine", register: "formale", note: "Orientamento costante verso il giusto, con accento sul comportamento piuttosto che sul carattere." },
  ],

  antonyms: [
    { term: "corruttibilità", register: "etico-giuridico", note: "La disposizione opposta: cedere a pressioni o vantaggi che contraddicono i propri valori." },
    { term: "doppiezza", register: "comune", note: "La scissione tra ciò che si mostra e ciò che si fa — l’opposto strutturale dell’integrità." },
  ],

  relatedWords: ["incorruttibilita", "correttezza", "onore", "lealta", "fiducia", "doppiezza", "malafede"],
  sourceLinks: {},

  paroliereNote:
    "Integrità è una parola che ha resistito all’inflazione meglio di molte altre " +
    "parole morali — forse perché la sua radice fisica (intatto, non toccato) le dà " +
    "una concretezza che termini come «virtù» o «honestà» non hanno. Dire che " +
    "qualcuno «ha integrità» evoca qualcosa di strutturale, non solo comportamentale: " +
    "non solo che non imbroglia, ma che non potrebbe imbrogliare senza rompere " +
    "qualcosa di essenziale in sé stesso. È questa la differenza tra integrità e " +
    "semplice obbedienza alle regole.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "integrità — coerenza tra valori e azioni, dalla morale al diritto",
    description: "Che cos’è l’integrità: definizione etica e giuridica, differenza da probità e rettitudine, e perché l’integrità si misura sotto pressione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
