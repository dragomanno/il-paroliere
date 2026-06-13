// Il Paroliere — Lemma: malafede
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malafede: LemmaEntry = {
  lemma: "malafede",
  slug: "malafede",
  partOfSpeech: "locuzione nominale",
  gender: "femminile",
  register: ["comune", "giuridico", "formale"],
  domains: ["etica", "diritto", "psicologia", "politica"],

  definition:
    "Condizione di chi agisce sapendo di fare o dire qualcosa di scorretto, ingiusto " +
    "o falso — con consapevolezza della propria disonestà. La malafede non è errore " +
    "né ignoranza: è la scelta deliberata di agire contro ciò che si sa essere giusto, " +
    "vero o onesto. In diritto, ha rilevanza specifica in ambito contrattuale e " +
    "processuale: chi agisce in malafede viola non solo la norma ma il principio di " +
    "buona fede che le relazioni giuridiche presuppongono.",

  shortDefinition:
    "Consapevolezza di agire in modo scorretto o falso, senza che ciò sia errore o " +
    "ignoranza; in diritto, violazione del principio di buona fede.",

  etymology:
    "Locuzione composta da «mala» (dal latino mala, femminile di malus «cattivo») e " +
    "«fede» (dal latino fides «fiducia, lealtà»). La malafede è letteralmente la " +
    "«fede cattiva» — l’opposto della buona fede che presuppone ogni relazione onesta.",

  examples: [
    "Negoziare in malafede non significa solo mentire: significa fingere di voler raggiungere un accordo mentre si lavora per farlo fallire.",
    "Il diritto distingue l’errore dalla malafede: chi sbaglia in buona fede ha rimedi diversi da chi ha agito sapendo di fare il male.",
    "L’accusa di malafede è tra le più gravi nel dibattito pubblico: significa non solo che hai torto, ma che lo sapevi.",
    "Certe campagne di disinformazione non sono errori: sono malafede sistematica — la produzione deliberata di confusione su questioni di fatto verificabili.",
  ],

  synonyms: [
    { term: "disonestà", register: "comune", note: "Più ampio: include comportamenti scorretti anche senza la piena consapevolezza della malafede." },
    { term: "perfidia", register: "formale-letterario", note: "Più carico: implica una deliberatezza quasi metodica nel fare il male." },
  ],

  antonyms: [
    { term: "buona fede", register: "comune-giuridico", note: "La convinzione onesta di agire correttamente, anche quando ci si sbaglia." },
    { term: "lealtà", register: "comune", note: "La fedeltà alle regole del gioco, inclusa quella di non fingere di seguirle mentre le si viola." },
  ],

  relatedWords: ["ipocrisia", "doppiezza", "opportunismo", "fiducia", "lealta"],
  sourceLinks: {},

  paroliereNote:
    "La malafede è il vizio che rende impossibile qualsiasi conversazione genuina: se " +
    "so che l’interlocutore non dice ciò che pensa e non fa ciò che dice, non c’è " +
    "dialogo — c’è solo teatro. Il problema è che la malafede strutturale — quella " +
    "che permea sistemi interi, non solo singoli individui — produce l’abitudine al " +
    "cinismo come risposta adattiva. Quando nessuno si aspetta buona fede, smettere " +
    "di agire in buona fede sembra razionale. Rompere questo ciclo richiede qualcuno " +
    "disposto a essere vulnerabile per primo.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "malafede — la disonestà consapevole tra etica, diritto e dibattito pubblico",
    description: "Che cos’è la malafede: definizione etica e giuridica, differenza da errore e buona fede, e come la malafede sistematica produce cinismo collettivo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
