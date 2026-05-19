// Il Paroliere — Lemma: accondiscendenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const accondiscendenza: LemmaEntry = {
  lemma: "accondiscendenza",
  slug: "accondiscendenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Disposizione a cedere alle richieste, ai desideri o alle opinioni altrui, " +
    "anche quando ciò comporta rinunciare alle proprie posizioni o convenzioni. " +
    "L'accondiscendenza può avere una valenza positiva — flessibilità, disponibilità, " +
    "rispetto per l'altro — o negativa, quando diventa compiacenza sistematica, " +
    "incapacità di dissentire o tendenza a evitare il conflitto a qualunque costo. " +
    "In psicologia è spesso descritta come tratto della personalità legato alla " +
    "paura del rifiuto o al bisogno di approvazione.",

  shortDefinition:
    "Tendenza a cedere alle richieste altrui, tra flessibilità e compiacenza.",

  register: ["formale", "comune"],
  domains: ["psicologia", "relazioni interpersonali", "linguaggio formale"],

  etymology:
    "Dal latino condescendere, composto di con- (insieme) e descendere (scendere): " +
    "'abbassarsi al livello di qualcuno', con originale sfumatura di condiscendenza " +
    "benevola da parte di chi si trova in posizione superiore. " +
    "In italiano il termine ha progressivamente perso la connotazione gerarchica " +
    "per indicare più genericamente la disposizione a venire incontro agli altri.",

  examples: [
    "La sua accondiscendenza nei confronti del capo aveva smesso di sembrare " +
    "diplomazia: era diventata una forma di autodissoluzione.",
    "Un'accondiscendenza ben calibrata nei negoziati può aprire spazi che la " +
    "rigidità avrebbe chiuso.",
    "I bambini imparano presto a distinguere l'accondiscendenza autentica dei genitori " +
    "da quella stanca, che concede tutto pur di evitare la lite.",
    "Non confondere accondiscendenza con gentilezza: la prima evita il conflitto, " +
    "la seconda lo attraversa senza ferire.",
  ],

  synonyms: [
    {
      term: "compiacenza",
      register: "comune",
      context:
        "con sfumatura più negativa: desiderio di piacere agli altri " +
        "a scapito della propria autenticità",
    },
    {
      term: "condiscendenza",
      register: "formale",
      context:
        "forma correlata, oggi spesso percepita come paternalistica: " +
        "abbassarsi al livello dell'altro con un senso implicito di superiorità",
    },
    {
      term: "arrendevolezza",
      register: "comune",
      context: "tendenza a cedere facilmente nelle discussioni o nei contrasti",
    },
    {
      term: "disponibilità",
      register: "comune",
      context: "accezione positiva: apertura e flessibilità verso gli altri",
    },
  ],

  antonyms: [
    {
      term: "assertività",
      register: "psicologia",
      context:
        "capacità di esprimere le proprie posizioni con chiarezza " +
        "senza aggredire né cedere",
    },
    {
      term: "intransigenza",
      register: "formale",
      context: "rifiuto di qualsiasi compromesso o cedimento",
    },
    {
      term: "fermezza",
      register: "comune",
      context: "stabilità nelle proprie posizioni di fronte alle pressioni esterne",
    },
  ],

  relatedWords: [
    "accondiscendente",
    "compiacenza",
    "assertività",
    "people-pleasing",
    "deferenza",
    "sottomissione",
    "flessibilità",
    "conflitto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/accondiscendenza/",
    wiktionary: "https://it.wiktionary.org/wiki/accondiscendenza",
  },

  paroliereNote:
    "Accondiscendenza è una parola che ha cambiato gradualmente reputazione. " +
    "In italiano classico era spesso una virtù: il saggio che si abbassa al livello " +
    "del discepolo, il potente che viene incontro al povero. " +
    "Nella psicologia contemporanea, soprattutto nella letteratura sul people-pleasing " +
    "e sui pattern relazionali disfunzionali, tende invece ad apparire come un " +
    "tratto da correggere — una forma di rinuncia a sé stessi mascherata da gentilezza. " +
    "Entrambe le letture sono legittime: la parola contiene entrambe le possibilità, " +
    "e il contesto decide quale prevale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Accondiscendenza — Il Paroliere",
    description:
      "Definizione originale di 'accondiscendenza': tra flessibilità e compiacenza. " +
      "Con etimologia, esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
