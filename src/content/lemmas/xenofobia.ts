// Il Paroliere — Lemma: xenofobia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const xenofobia: LemmaEntry = {
  lemma: "xenofobia",
  slug: "xenofobia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Avversione o ostilità — razionale o irrazionale — nei confronti di chi viene percepito come " +
    "straniero o estraneo al proprio gruppo sociale. Si manifesta in forme che vanno dalla semplice " +
    "diffidenza all'esclusione sistematica, senza implicare necessariamente la violenza. In psicologia " +
    "sociale si distingue dall'etnocentrismo per l'intensità della reazione emotiva verso l'alterità.",

  shortDefinition:
    "Ostilità o paura verso chi è percepito come straniero o estraneo al proprio gruppo.",

  register: ["comune", "tecnico"],
  domains: ["sociologia", "politica"],

  etymology:
    "Dal greco xénos (straniero, ospite) e phóbos (paura, terrore). " +
    "Il termine fu coniato nel lessico scientifico ottocentesco e diffuso nel dibattito politico " +
    "del Novecento. La stessa radice di xenos ha dato xenio, 'dono all'ospite'.",

  examples: [
    "La xenofobia non è sempre violenta: spesso si manifesta come diffidenza silenziosa e sistematica.",
    "Le politiche migratorie degli anni Duemila hanno riportato la xenofobia al centro del dibattito europeo.",
    "In psicologia sociale la xenofobia viene studiata come forma di pregiudizio intergruppo.",
    "C'è una xenofobia di prossimità — verso il paese vicino, il quartiere accanto — che non ha nulla a che fare con la distanza geografica.",
  ],

  synonyms: [
    {
      term: "razzismo",
      register: "comune",
      context: "discriminazione basata su caratteristiche fisiche percepite, più specifico della xenofobia",
    },
    {
      term: "etnocentrismo",
      register: "tecnico",
      context: "tendenza a valutare le altre culture dal punto di vista della propria — meno emotivo della xenofobia",
    },
    {
      term: "nazionalismo escludente",
      register: "politico",
      context: "ideologia che usa la xenofobia come strumento di coesione interna",
    },
  ],

  antonyms: [
    {
      term: "xenofilia",
      register: "tecnico",
      context: "attrazione o interesse positivo verso le culture straniere",
    },
    {
      term: "cosmopolitismo",
      register: "formale",
      context: "apertura all'altro come valore, opposto valoriale della xenofobia",
    },
  ],

  relatedWords: [
    "xenofobo",
    "etnocentrismo",
    "razzismo",
    "pregiudizio",
    "alterità",
    "migrazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/xenofobia/",
    wiktionary: "https://it.wiktionary.org/wiki/xenofobia",
  },

  paroliereNote:
    "Xenofobia è una parola che nel Novecento ha fatto un percorso inverso a quello di molti termini " +
    "tecnici: è entrata nella scienza per descrivere un fenomeno, ed è uscita nel dibattito politico " +
    "come parola di battaglia. Vale la pena ricordare l'etimologia: xenos in greco non significa solo " +
    "'straniero' — significa anche 'ospite'. La xenofobia è la paura di chi, in un altro contesto, " +
    "avresti accolto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Xenofobia — Il Paroliere",
    description:
      "Definizione originale di 'xenofobia': ostilità verso chi è percepito come estraneo al proprio gruppo. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-06-08",
};
