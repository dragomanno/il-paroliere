// Il Paroliere — Lemma: antisocialità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const antisocialita: LemmaEntry = {
  lemma: "antisocialità",
  slug: "antisocialita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["psicologia", "sociologia", "diritto"],

  definition:
    "In psicologia, tratto o insieme di comportamenti caratterizzati dal disprezzo " +
    "sistematico per le norme sociali, i diritti altrui e le aspettative condivise — " +
    "senza che ciò implichi necessariamente violenza dichiarata. Nel linguaggio comune " +
    "il termine indica chi evita le relazioni sociali per scelta o disagio, creando una " +
    "sovrapposizione semantica con introversione e misantropia che la psicologia clinica " +
    "considera imprecisa. In diritto penale e criminologia, \u00abantisociale\u00bb definisce " +
    "condotte che danneggiano il tessuto collettivo e possono costituire indicatori per " +
    "la valutazione del rischio di recidiva.",

  shortDefinition:
    "Orientamento comportamentale che contrasta con le norme e i vincoli della vita " +
    "sociale, con significati diversi tra psicologia clinica, sociologia e uso comune.",

  etymology:
    "Composto da anti- (dal greco antí \u00abcontro, di fronte\u00bb) e \u00absociale\u00bb (dal latino " +
    "socialis, da socius \u00abcompagno\u00bb). Il termine acquisisce peso clinico nel XX secolo " +
    "con l'introduzione del \u00abdisturbo antisociale di personalità\u00bb nei sistemi diagnostici; " +
    "prima era usato soprattutto in senso morale-politico.",

  examples: [
    "Nel DSM-5, il disturbo antisociale di personalità richiede un pattern persistente di violazione dei diritti altrui, non semplicemente una preferenza per la solitudine.",
    "Chiamare \u201cantisociale\u201d chi preferisce stare da solo è un errore semantico comune: l'introversione non è patologia, l'antisocialità clinica sì.",
    "Le politiche di welfare studiano come certi ambienti urbani degradati producano comportamenti antisociali non per difetto dei singoli, ma per assenza di strutture di supporto.",
    "In alcuni contesti giuridici britannici, le ASBO (Anti-Social Behaviour Orders) hanno mostrato che criminalizzare l'antisocialità senza affrontarne le cause produce più segregazione che integrazione.",
  ],

  synonyms: [
    {
      term: "comportamento deviante",
      register: "sociologico",
      note: "Più ampio: include qualsiasi scostamento dalla norma, non solo quello ostile.",
    },
    {
      term: "disturbo antisociale",
      register: "clinico",
      note: "La categoria diagnostica specifica, più precisa del termine generico.",
    },
  ],

  antonyms: [
    {
      term: "prosocialità",
      register: "psicologico",
      note: "L'orientamento a comportamenti che beneficiano gli altri e rafforzano la coesione sociale.",
    },
    {
      term: "conformità sociale",
      register: "sociologico",
      note: "L'adeguamento alle norme condivise di un gruppo o di una società.",
    },
  ],

  relatedWords: ["psicopatia", "indifferenza-civile", "astensionismo", "sociologia", "diffidenza", "cinismo"],

  sourceLinks: {},

  paroliereNote:
    "Antisocialità è una parola che porta il peso di due usi molto diversi: quello " +
    "clinico, preciso e diagnosabile, e quello quotidiano, che finisce per etichettare " +
    "come \u00abantisociale\u00bb chiunque non voglia stare in mezzo alla gente il sabato sera. " +
    "La confusione non è innocente: quando un termine clinico diventa insulto, lo stigma " +
    "si sposta su chi ha solo scelto il silenzio. E quando un termine morale viene " +
    "medicalizzato, si rischia di trasformare la protesta in malattia.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "antisocialità — tra disturbo clinico, norma sociale e uso improprio",
    description:
      "Che cos'è l'antisocialità: definizione psicologica e sociologica, differenza " +
      "dall'introversione e implicazioni nel diritto e nella vita civile.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
