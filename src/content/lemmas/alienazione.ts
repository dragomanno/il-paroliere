// Il Paroliere — Lemma: alienazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const alienazione: LemmaEntry = {
  lemma: "alienazione",
  slug: "alienazione",
  partOfSpeech: "sostantivo femminile",

  definition:
    "In senso filosofico e sociologico — nella tradizione che da Hegel arriva a Marx " +
    "e alla Scuola di Francoforte — l'alienazione è il processo per cui un soggetto " +
    "diventa estraneo a se stesso, ai propri prodotti, alle proprie relazioni o alla " +
    "propria umanità essenziale. Marx descrive l'alienazione del lavoro come la " +
    "condizione del lavoratore che, producendo oggetti per il mercato, non si riconosce " +
    "in essi — il lavoro cessa di essere espressione di sé e diventa strumento di " +
    "sopravvivenza, separando il lavoratore dalla propria attività, dal suo prodotto, " +
    "dagli altri uomini e dalla sua specie. In psicologia e nel linguaggio comune, " +
    "alienazione indica uno stato di distacco, estraneità o disconnessione dalla realtà, " +
    "da se stessi o dal contesto sociale; la sensazione di non appartenersi, di essere " +
    "spettatori della propria vita più che protagonisti. In diritto, alienazione ha un " +
    "significato tecnico preciso e distinto: il trasferimento della proprietà di un bene " +
    "da un soggetto a un altro attraverso compravendita, donazione o altro atto giuridico.",

  shortDefinition:
    "Il diventare estranei a se stessi, ai propri prodotti o alla propria umanità; " +
    "in Marx, la condizione del lavoratore separato dal frutto del suo lavoro; in " +
    "diritto, trasferimento di proprietà.",

  register: ["filosofico", "psicologico", "giuridico"],
  domains: ["filosofia", "psicologia", "sociologia", "diritto", "letteratura"],

  etymology:
    "Dal latino alienatio, -onis, da alienare («rendere altrui, trasferire, rendere " +
    "estraneo»), da alienus («altrui, estraneo»), da alius («altro»). Lo stesso campo " +
    "etimologico di alieno, inalienabile, alienista (vecchio termine per psichiatra).",

  examples: [
    "Marx descriveva l'alienazione come la condizione fondamentale del lavoro capitalistico: il lavoratore produce ricchezza che non gli appartiene.",
    "Sentiva una profonda alienazione dalla città in cui viveva: tutto le sembrava estraneo, costruito per qualcun altro.",
    "L'alienazione del bene immobile deve essere fatta per atto pubblico davanti a un notaio: così dice il codice civile.",
    "I social media possono produrre una forma di alienazione paradossale: più condividi, meno sei presente a te stesso.",
  ],

  synonyms: [
    {
      term: "estraneazione",
      register: "filosofico",
      context: "il diventare estranei a se stessi",
    },
    {
      term: "distacco",
      register: "comune",
      context: "separazione emotiva o identitaria",
    },
    {
      term: "sradicamento",
      register: "comune",
      context: "perdita del senso di appartenenza",
    },
    {
      term: "cessione",
      register: "giuridico",
      context: "trasferimento di proprietà",
    },
  ],

  antonyms: [
    {
      term: "appartenenza",
      register: "comune",
      context: "sentirsi parte di qualcosa",
    },
    {
      term: "identificazione",
      register: "psicologico",
      context: "riconoscersi in ciò che si fa o si è",
    },
    {
      term: "autenticità",
      register: "comune",
      context: "essere fedeli a se stessi",
    },
    {
      term: "anelare",
      register: "letterario",
      context: "polo opposto: chi anela è ancora connesso al proprio ideale",
    },
  ],

  relatedWords: [
    "anelare",
    "subliminale",
    "Marx",
    "Hegel",
    "Scuola di Francoforte",
    "lavoro",
    "capitalismo",
    "identità",
    "proprietà",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/alienazione/",
    wiktionary: "https://it.wiktionary.org/wiki/alienazione",
  },

  paroliereNote:
    "Alienazione è una delle grandi parole della modernità. Hegel la usa per " +
    "descrivere il processo attraverso cui lo Spirito si fa altro da sé per poi " +
    "riconoscersi; Marx la trasforma in strumento di critica sociale concreta. Oggi il " +
    "termine è entrato nel lessico psicologico quotidiano — «mi sento alienato» — spesso " +
    "senza la consapevolezza del peso filosofico che porta. Non è necessariamente un " +
    "problema: le parole vivono anche quando il loro contesto originale è dimenticato. " +
    "Ma recuperare la genealogia del termine aiuta a capire perché alienazione dica " +
    "qualcosa di più preciso e più grave di «mi sento a disagio»: dice che qualcosa " +
    "dell'umano si è separato da se stesso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Alienazione — filosofia, Marx, psicologia, diritto | Il Paroliere",
    description:
      "Alienazione in Marx, Hegel, nella psicologia moderna e nel diritto. Tre " +
      "significati, una sola parola. Definizione originale con esempi e nota filosofica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
