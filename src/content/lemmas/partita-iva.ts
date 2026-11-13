// Il Paroliere — Lemma: partita IVA
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const partitaIva: LemmaEntry = {
  lemma: "partita IVA",
  slug: "partita-iva",
  partOfSpeech: "locuzione sostantivale",
  gender: "femminile",
  definition: "Codice di undici cifre che l'Agenzia delle Entrate attribuisce a chi esercita un'attività d'impresa, arte o professione, per identificarlo ai fini dell'IVA: le prime sette numerano il contribuente, le tre successive indicano l'ufficio, l'ultima è una cifra di controllo. Per estensione, indica la posizione fiscale stessa («aprire la partita IVA») e, nel parlato, il lavoratore autonomo: «è una partita IVA», «le partite IVA».",
  shortDefinition: "Codice di undici cifre che identifica ai fini IVA chi svolge un'attività d'impresa o professionale; per estensione, il lavoratore autonomo.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "lavoro autonomo",
  ],
  etymology: "Partita viene da partire nel senso antico di «dividere» e nel linguaggio contabile indica una voce di conto, come nella partita doppia. IVA è la sigla di imposta sul valore aggiunto, in vigore in Italia dal 1° gennaio 1973 al posto dell'IGE.",
  examples: [
    "Ho aperto la partita IVA a gennaio e ho scelto subito il regime forfettario.",
    "In fattura vanno indicati la partita IVA del fornitore e quella del cliente, se è un'impresa.",
    "Le cosiddette false partite IVA lavorano come dipendenti, ma senza le tutele del contratto.",
  ],
  synonyms: [
    {
      term: "numero di partita IVA",
      register: "tecnico-fiscale",
      context: "il codice in senso stretto",
    },
    {
      term: "lavoratore autonomo",
      register: "comune",
      context: "nel senso esteso, riferito alla persona",
    },
    {
      term: "P. IVA",
      register: "tecnico",
      context: "abbreviazione nei documenti",
    },
  ],
  antonyms: [
    {
      term: "lavoratore dipendente",
      register: "comune",
      context: "nel senso esteso",
    },
  ],
  relatedWords: [
    "forfettario",
    "regime-fiscale",
    "contributi-previdenziali",
    "ritenuta-dacconto",
    "f24",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/partita_IVA",
  },
  paroliereNote: "Pochi codici fiscali sono diventati persone. «Le partite IVA» è ormai il nome collettivo di un mondo eterogeneo: professionisti affermati, artigiani, giovani al primo incarico, collaboratori che di autonomo hanno solo la fattura. La metonimia dice molto su come il lavoro indipendente viene percepito in Italia: prima di tutto come una posizione fiscale e solo dopo come un mestiere.",
  seo: {
    title: "Partita IVA — significato, struttura, esempi | Il Paroliere",
    description: "Che cos'è la partita IVA: il codice di undici cifre che identifica imprese e professionisti ai fini IVA. Come è composto e perché indica anche gli autonomi.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
