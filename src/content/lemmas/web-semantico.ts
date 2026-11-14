// Il Paroliere — Lemma: web semantico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const webSemantico: LemmaEntry = {
  lemma: "web semantico",
  slug: "web-semantico",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Progetto di evoluzione del Web in cui i dati sono descritti in un formato leggibile dalle macchine, con significati espliciti e condivisi, così che programmi diversi possano collegarli e ragionarci sopra. Si fonda su standard del W3C come RDF, OWL e SPARQL e, nell'uso quotidiano, sopravvive soprattutto nei dati strutturati che i siti inseriscono nelle pagine.",
  shortDefinition: "Web in cui i dati hanno significati espliciti e leggibili dalle macchine, così da poterli collegare fra sistemi diversi.",
  register: [
    "tecnico",
  ],
  domains: [
    "informatica",
    "web",
  ],
  etymology: "Calco dell'inglese Semantic Web, espressione legata a Tim Berners-Lee, che la presentò con James Hendler e Ora Lassila in un articolo di Scientific American del maggio 2001. Semantico viene dal greco sēmantikós «che significa», da sêma «segno».",
  examples: [
    "Grazie al web semantico, il catalogo della biblioteca può far sapere a un altro sistema che quel Manzoni è l'autore dei Promessi sposi e non un omonimo.",
    "Il markup di schema.org è la parte del web semantico che quasi ogni sito usa senza saperlo.",
    "Nei primi anni Duemila il web semantico prometteva agenti capaci di organizzarci la vita; è rimasto soprattutto un'infrastruttura silenziosa per i dati.",
  ],
  synonyms: [
    {
      term: "web dei dati",
      register: "tecnico",
      context: "formula usata dal W3C",
      note: "Insiste sui dati collegati più che sul ragionamento automatico.",
    },
    {
      term: "linked data",
      register: "tecnico",
      context: "pratica di pubblicare dati collegati fra loro",
      note: "È la parte del progetto che ha avuto più successo.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "semantica",
    "ontologia",
    "knowledge-graph",
    "vettore-semantico",
    "seo",
    "agente-ai",
  ],
  sourceLinks: {},
  paroliereNote: "Da non confondere con la → semantica in senso linguistico: qui l'aggettivo indica dati che portano con sé il proprio significato in forma esplicita, con etichette e relazioni definite in un'→ ontologia. Non coincide nemmeno con la ricerca semantica dei motori basati su → vettori semantici, che il significato lo stimano dalla statistica invece di dichiararlo. Il progetto originario non si è avverato nella forma immaginata, ma le sue idee vivono nei → knowledge graph e nei dati strutturati che aiutano i motori a capire di che cosa parla una pagina.",
  seo: {
    title: "Web semantico — significato, standard ed esempi | Il Paroliere",
    description: "Che cos'è il web semantico: dati con significati espliciti, leggibili dalle macchine. Origine, standard W3C, differenze con la ricerca semantica.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
