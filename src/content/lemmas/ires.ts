// Il Paroliere — Lemma: IRES
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ires: LemmaEntry = {
  lemma: "IRES",
  slug: "ires",
  partOfSpeech: "sostantivo femminile (sigla)",

  definition:
    "Sigla di Imposta sul Reddito delle Società: l'imposta proporzionale che " +
    "colpisce il reddito delle società di capitali (SpA, Srl, SapA), degli enti " +
    "pubblici e privati residenti in Italia, e di alcuni soggetti assimilati. È " +
    "in vigore dal 1° gennaio 2004, quando ha sostituito la precedente → IRPEG " +
    "(Imposta sul Reddito delle Persone Giuridiche), nell'ambito della riforma " +
    "fiscale introdotta dal D.Lgs. 344/2003. A differenza dell'→ IRPEF — che è " +
    "progressiva per scaglioni — l'IRES è un'imposta proporzionale: si applica " +
    "un'aliquota fissa (attualmente pari al 24%) all'intero reddito imponibile " +
    "della società, indipendentemente dall'entità del reddito. Le società in " +
    "perdita non pagano IRES nell'esercizio, ma possono riportare la perdita " +
    "negli esercizi successivi per ridurre la base imponibile futura. Il " +
    "passaggio da IRPEG a IRES non fu solo un cambio di nome: segnò l'adozione " +
    "di un'impostazione più moderna e armonizzata con i sistemi fiscali europei.",

  shortDefinition:
    "Imposta proporzionale al 24% sul reddito delle società di capitali e degli enti; in vigore dal 2004, ha sostituito l'IRPEG.",

  register: ["tecnico-fiscale"],
  domains: ["fisco", "diritto tributario", "economia", "diritto societario"],

  etymology:
    "Acronimo di Imposta sul Reddito delle Società. Introdotta con D.Lgs. 344 del " +
    "12 dicembre 2003, in vigore dal 1° gennaio 2004 in sostituzione dell'IRPEG.",

  examples: [
    "La società ha chiuso l'esercizio con un utile di 500.000 euro: l'IRES al 24% comporterà un'imposta di 120.000 euro.",
    "La riforma del 2004 ha sostituito l'IRPEG con l'IRES, abbassando l'aliquota dal 34% al 33% iniziale, poi ridotta ulteriormente al 24%.",
    "Le società in perdita non pagano IRES nell'esercizio, ma possono riportare la perdita negli esercizi successivi per ridurre la base imponibile futura.",
  ],

  relatedWords: [
    "irpef",
    "irpeg",
    "IRAP",
    "deduzione-fiscale",
    "detrazione-fiscale",
    "f24",
    "società di capitali",
    "reddito d",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ires/",
    wiktionary: "https://it.wiktionary.org/wiki/IRES",
  },

  paroliereNote:
    "Il passaggio da IRPEG a IRES non fu solo un cambio di nome: fu la fine di " +
    "una denominazione che aveva una logica interna coerente (fisiche/giuridiche) " +
    "a favore di una più moderna che distingue per tipo di soggetto giuridico " +
    "(persone fisiche / società). L'IRES è anche il terreno su cui si gioca gran " +
    "parte della pianificazione fiscale d'impresa: la differenza tra reddito " +
    "civilistico (quello del bilancio) e reddito fiscale (quello su cui si calcola " +
    "l'IRES) genera le cosiddette variazioni fiscali — un mondo a parte che occupa " +
    "buona parte del lavoro dei commercialisti italiani.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "IRES — cos'è, aliquota, differenza da IRPEF e IRPEG | Il Paroliere",
    description:
      "IRES: l'imposta sul reddito delle società. Cos'è, aliquota, quando ha sostituito IRPEG, differenza con IRPEF. Tabella comparativa delle imposte dirette italiane.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
