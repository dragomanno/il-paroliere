// Il Paroliere — Lemma: APPALTO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const appalto: LemmaEntry = {
  lemma: "appalto",
  slug: "appalto",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Contratto con cui un soggetto — l'appaltatore — si impegna verso un committente " +
    "a realizzare un'opera o a prestare un servizio, verso un corrispettivo in denaro, " +
    "assumendosi in proprio il rischio imprenditoriale dell'esecuzione (art. 1655 c.c.). " +
    "L'elemento distintivo rispetto al contratto d'opera è l'organizzazione di mezzi e persone " +
    "che l'appaltatore mette in campo con propria autonomia gestionale. " +
    "L'appalto si divide in due grandi categorie: " +
    "l'appalto privato, regolato dal Codice civile (artt. 1655-1677), " +
    "e l'appalto pubblico, disciplinato dal Codice dei contratti pubblici (D.Lgs. 36/2023), " +
    "che fissa le procedure di gara (procedure aperte, ristrette, negoziate), " +
    "le soglie di applicazione delle direttive europee e le garanzie di trasparenza e concorrenza. " +
    "Quando l'appaltatore affida parte dei lavori o servizi a terzi, si configura il subappalto, " +
    "soggetto a specifici limiti percentuali nel settore pubblico. " +
    "La gara d'appalto è la procedura competitiva con cui la stazione appaltante seleziona " +
    "l'offerta più vantaggiosa tra quelle presentate dagli operatori economici.",
  shortDefinition:
    "Contratto in cui l'appaltatore realizza un'opera o servizio verso corrispettivo, assumendo il rischio imprenditoriale (art. 1655 c.c.).",
  register: ["tecnico-giuridico", "tecnico-edilizio"],
  domains: ["diritto", "economia", "edilizia"],
  etymology:
    "Dal latino medievale appaltare, derivato di paltum (variante di pactum, «patto»), " +
    "con il prefisso ad-. L'etimo riflette l'idea di un patto formale per l'esecuzione di un'opera. " +
    "In alcune lingue romanze il termine ha mantenuto il senso di impegno contrattuale formalizzato.",
  examples: [
    "Il Comune ha indetto una gara d'appalto aperta per la ristrutturazione della scuola elementare, " +
      "con criterio di aggiudicazione dell'offerta economicamente più vantaggiosa.",
    "L'appaltatore ha richiesto una revisione del corrispettivo per varianti in corso d'opera, " +
      "invocando l'art. 1660 c.c. che consente il riconoscimento delle variazioni necessarie.",
    "Il contratto vietava il subappalto senza autorizzazione scritta del committente: " +
      "la violazione ha comportato la risoluzione immediata per inadempimento grave.",
  ],
  synonyms: [
    {
      term: "contratto d'opera",
      register: "tecnico-giuridico",
      context: "figura affine ma con autonomia gestionale minore",
    },
    {
      term: "subappalto",
      register: "tecnico-giuridico",
      context: "quando l'appalto viene ri-delegato a terzi dall'appaltatore",
    },
    {
      term: "gara d'appalto",
      register: "tecnico",
      context: "la procedura competitiva di selezione del contraente",
    },
  ],
  antonyms: [
    {
      term: "commissione diretta",
      register: "tecnico",
      context: "affidamento senza procedura competitiva",
    },
    {
      term: "in-house",
      register: "tecnico",
      context: "esecuzione interna senza ricorso al mercato",
    },
  ],
  relatedWords: ["contratto", "normativa", "cessione", "diritto", "proprieta"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/appalto",
    wiktionary: "https://it.wiktionary.org/wiki/appalto",
  },
  paroliereNote:
    "La distinzione tra appalto pubblico e privato è cruciale sul piano pratico: " +
    "nell'appalto pubblico ogni fase — dalla progettazione alla liquidazione del saldo — " +
    "è soggetta a norme imperative di trasparenza e controllo anti-corruzione. " +
    "Il D.Lgs. 36/2023 (Codice dei contratti pubblici) ha sostituito il precedente D.Lgs. 50/2016 " +
    "con l'obiettivo di semplificare le procedure e recepire le direttive UE 2014/24 e 2014/25.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "APPALTO — definizione | Il Paroliere",
    description:
      "Definizione giuridica di appalto (art. 1655 c.c.): contratto per realizzare opera o servizio " +
      "con rischio imprenditoriale. Appalto pubblico vs privato.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
