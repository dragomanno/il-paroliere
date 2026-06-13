// Il Paroliere — Lemma: identità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const identita: LemmaEntry = {
  lemma: "identità",
  slug: "identita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "filosofia", "sociologia", "diritto", "cultura"],

  definition:
    "Modo in cui una persona o una collettività si riconosce come la stessa nel tempo, pur attraverso cambiamenti, sentendo una continuità tra chi era, chi è e chi sta diventando. In psicologia e in filosofia l'identità tiene insieme memoria, corpo, relazioni, valori, ruoli, e riguarda tanto il senso di essere “io” distinto dagli altri quanto l'appartenenza a gruppi sociali che ci danno un nome e un posto nel mondo. Nel linguaggio quotidiano, si parla di identità anche per marchi, città, comunità, ogni volta che si cerca ciò che li rende riconoscibili e non intercambiabili.",

  shortDefinition:
    "Senso di continuità e riconoscibilità di sé o di un gruppo nel tempo, che tiene insieme memoria, ruoli, relazioni e appartenenze.",

  etymology:
    "Dal latino identitas, -atis, “identità, uguaglianza”, derivato di idem “lo stesso”. In filosofia il termine nasce nel lessico logico-metafisico dell'“essere identico a sé”, e viene progressivamente esteso al senso psicologico e sociale di ciò che rende una persona o un gruppo se stesso e non un altro.",

  examples: [
    "Nel passaggio all'età adulta, la sua identità professionale è cambiata più volte prima di trovare una forma provvisoria.",
    "Per molte persone, l'identità di genere non coincide con il sesso assegnato alla nascita, e questo genera percorsi complessi di riconoscimento.",
    "Una città che punta solo sul turismo rischia di perdere l'identità costruita dal lavoro e dai quartieri popolari.",
    "Sui social, l'identità sembra un profilo curato, però fuori dallo schermo restano pezzi che non entrano nella vetrina.",
    "Quando la memoria collettiva tace alcuni eventi, l'identità di un paese resta monca, più liscia di quanto la storia permetta.",
  ],

  synonyms: [
    {
      term: "sé",
      register: "filosofico",
      note: "Indica il nucleo personale vissuto dall'interno.",
    },
    {
      term: "personalità",
      register: "psicologico",
      note: "Più orientata ai tratti caratteriali, non all'asse temporale.",
    },
  ],

  antonyms: [
    {
      term: "dis-identità",
      register: "saggistico",
      note: "Perdita o crisi del senso di sé, usato in contesti critici.",
    },
    {
      term: "anonimato",
      register: "comune",
      note: "Condizione in cui l'individuo non è riconosciuto come figura distinta.",
    },
  ],

  relatedWords: ["memoria", "coscienza", "trauma"],

  sourceLinks: {},

  paroliereNote:
    "Parliamo spesso di “costruirsi un'identità” come se fosse un progetto che dipende solo dalla volontà, ma una parte importante arriva in dotazione: il nome, la lingua, il corpo, il contesto in cui nasciamo. Nel corso della vita, poi, l'identità oscilla tra il bisogno di restare riconoscibili e quello di poter cambiare senza perdere la faccia. Il lemma invita a diffidare sia delle identità rigide, che si difendono chiudendo le porte, sia di quelle troppo liquide, che si sciolgono in ogni contesto: in mezzo c'è il lavoro faticoso di riconoscere quali cambiamenti ci fanno sentire più veri e quali ci allontanano da noi stessi.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "identità — restare se stessi mentre si cambia",
    description:
      "Che cos'è l'identità tra psicologia, filosofia e vita sociale, dal senso di continuità personale alle appartenenze che ci definiscono.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
