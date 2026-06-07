// Il Paroliere — Lemma: F24
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const f24: LemmaEntry = {
  lemma: "F24",
  slug: "f24",
  partOfSpeech: "sostantivo maschile invariabile (nome di modello fiscale)",

  definition:
    "Il modello F24 è il documento fiscale unificato con cui i contribuenti " +
    "italiani — persone fisiche, partite IVA, imprese — effettuano il pagamento " +
    "delle imposte, dei contributi previdenziali e di altri tributi direttamente " +
    "all'Erario o agli enti previdenziali (INPS, INAIL). Il nome deriva dalla sua " +
    "introduzione con il Decreto Legislativo 241/1997, che lo definì \"modello di " +
    "versamento unificato\": la lettera F è la categoria ministeriale dei modelli " +
    "di pagamento, il numero 24 è quello del modello specifico. La caratteristica " +
    "fondamentale dell'F24 è la possibilità di effettuare compensazione: le somme " +
    "a credito (es. rimborsi fiscali, crediti d'imposta, eccedenze → IRPEF) possono " +
    "essere usate per pagare somme a debito (es. → IRES, IVA, contributi INPS), " +
    "riducendo o azzerando il versamento effettivo. Questa compensazione avviene " +
    "tramite i codici tributo — una numerazione standardizzata che identifica ogni " +
    "tipo di imposta o contributo. Principali tributi versati con F24: IRPEF saldo " +
    "e acconti (persone fisiche e partite IVA), IRES saldo e acconti (società), " +
    "IVA mensile e trimestrale, contributi INPS (artigiani, commercianti, autonomi), " +
    "IMU e TASI (tributi comunali sugli immobili), addizionali regionali e comunali " +
    "IRPEF, ritenute alla fonte versate dai sostituti d'imposta.",

  shortDefinition:
    "Modello fiscale unificato con cui i contribuenti italiani pagano imposte, contributi e tributi; caratterizzato dalla possibilità di compensare crediti con debiti fiscali.",

  register: ["tecnico-fiscale", "burocratico", "comune"],
  domains: ["fisco", "diritto tributario", "burocrazia", "economia"],

  etymology:
    "Il nome deriva dall'introduzione con il D.Lgs. 241/1997: F è la categoria " +
    "ministeriale dei modelli di pagamento, 24 è il numero identificativo del " +
    "modello specifico.",

  examples: [
    "Ho pagato le tasse con l'F24: ho usato il credito IVA dell'anno scorso per compensare l'acconto IRPEF.",
    "Il commercialista mi ha mandato l'F24 precompilato: basta portarlo in banca o pagarlo online entro il 16 giugno.",
    "Senza i codici tributo corretti, l'F24 viene rifiutato: ogni imposta ha il suo numero identificativo preciso.",
  ],

  synonyms: [
    {
      term: "modello di versamento unificato",
      register: "tecnico-fiscale",
      context: "denominazione ufficiale",
    },
    {
      term: "bollettino fiscale",
      register: "comune",
      context: "impreciso ma diffuso nel parlato",
    },
  ],

  relatedWords: [
    "IRPEF",
    "IRES",
    "730",
    "deduzione fiscale",
    "detrazione fiscale",
    "codice tributo",
    "compensazione fiscale",
    "Agenzia delle Entrate",
    "INPS",
    "scadenza fiscale",
    "Entratel",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/f24/",
    wiktionary: "https://it.wiktionary.org/wiki/F24",
  },

  paroliereNote:
    "L'F24 è uno di quei documenti che gli italiani imparano a conoscere con una " +
    "certa rassegnazione, di solito il 16 giugno o il 30 novembre, le due scadenze " +
    "principali del calendario fiscale. La sua storia è quella di una " +
    "semplificazione riuscita: prima del 1997 esistevano decine di bollettini " +
    "diversi per imposte diverse, versati in banche o uffici postali differenti. " +
    "L'F24 unificò tutto in un solo documento con la possibilità di compensare " +
    "crediti e debiti — una rivoluzione silenziosa che ha davvero semplificato la " +
    "vita ai contribuenti, anche se la mole di adempimenti fiscali italiani fa sì " +
    "che questa semplificazione resti quasi invisibile.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "F24 — cos'è, come funziona, compensazione fiscale | Il Paroliere",
    description:
      "Cos'è il modello F24, come si usa, cos'è la compensazione fiscale. Imposte, contributi, codici tributo. Definizione originale con esempi pratici.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
