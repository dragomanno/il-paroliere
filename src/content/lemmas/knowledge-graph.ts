// Il Paroliere — Lemma: knowledge graph
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const knowledgeGraph: LemmaEntry = {
  lemma: "knowledge graph",
  slug: "knowledge-graph",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Base di conoscenza organizzata come una rete: i nodi sono entità, come persone, luoghi, opere o concetti, e gli archi sono le relazioni che le legano, come «è nato a» o «ha scritto». La struttura permette di collegare fatti di fonti diverse e di interrogarli insieme. Con la maiuscola, Knowledge Graph indica in particolare il sistema che Google usa dal 2012 per riconoscere le entità nelle ricerche.",
  shortDefinition: "Rete di entità collegate da relazioni esplicite; con la maiuscola, la base di conoscenza che Google usa dal 2012.",
  register: [
    "tecnico",
  ],
  domains: [
    "informatica",
    "intelligenza artificiale",
    "SEO",
  ],
  etymology: "Dall'inglese knowledge «conoscenza» e graph «grafo», termine matematico per una rete di nodi e archi, dal greco gráphein «scrivere». L'espressione circolava già nella ricerca accademica; la rende popolare Google, che il 16 maggio 2012 presenta il proprio Knowledge Graph con il motto «things, not strings».",
  examples: [
    "Il knowledge graph sa che Siena è in Toscana, che il Palio si corre in piazza del Campo e che la piazza è a Siena: così risponde a domande che nessun documento formula in quel modo.",
    "Il riquadro con foto, date e opere che compare cercando un pittore viene dal Knowledge Graph di Google.",
    "Il knowledge graph aziendale collega clienti, contratti e fornitori, così un'anomalia in un contratto emerge anche nei report sul fornitore.",
  ],
  synonyms: [
    {
      term: "grafo della conoscenza",
      register: "tecnico",
      context: "calco italiano, usato nei testi accademici",
    },
    {
      term: "base di conoscenza",
      register: "tecnico",
      context: "più generica",
      note: "Non implica la struttura a grafo.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "ontologia",
    "web-semantico",
    "rag",
    "embedding",
    "vettore-semantico",
    "seo",
    "e-e-a-t",
    "geo",
  ],
  sourceLinks: {},
  paroliereNote: "Se l'→ ontologia è lo schema, il knowledge graph è il mondo descritto con quello schema: nodi e relazioni reali, non solo categorie. Per la SEO il passaggio dalle stringhe alle entità è stato una svolta: per un motore, una pagina su Dante parla di una persona riconoscibile, non di cinque lettere. Wikidata, aperto e collaborativo, è il grande knowledge graph pubblico a cui attingono molti altri sistemi. Il calco grafo della conoscenza è corretto, ma fuori dall'università suona ancora insolito.",
  seo: {
    title: "Knowledge graph — significato e grafo della conoscenza | Il Paroliere",
    description: "Che cos'è un knowledge graph: una rete di entità collegate da relazioni. Il Knowledge Graph di Google, il rapporto con l'ontologia, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
