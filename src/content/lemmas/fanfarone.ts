// Il Paroliere — Lemma: fanfarone
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fanfarone: LemmaEntry = {
  lemma: "fanfarone",
  slug: "fanfarone",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "colloquiale", "letterario"],
  domains: ["psicologia", "comportamento sociale", "letteratura"],

  definition:
    "Chi si vanta rumorosamente di imprese, capacità o conoscenze esagerate o " +
    "immaginarie, con scarsa preoccupazione per la credibilità e grande attenzione " +
    "all’effetto immediato. Il fanfarone è più chiassoso del millantatore e meno " +
    "calcolato del gradasso: è istintivo, esuberante, spesso simpatico quanto inutile. " +
    "Come tipo letterario, attraversa la commedia europea da Plauto a Molière, sempre " +
    "come figura che promette più di quanto potrà mai mantenere.",

  shortDefinition:
    "Chi si vanta rumorosamente di imprese esagerate o immaginarie; tipo letterario " +
    "della commedia europea, chiassoso e istintivo più che calcolato.",

  etymology:
    "Dall’italiano «fanfara» (squillo di tromba, rumore festoso), attraverso il " +
    "francese fanfaron. Chi fa «fanfara» di sé stesso: annuncia la propria grandezza " +
    "a suon di tromba. La radice onomatopeica fa- suggerisce il suono eccessivo e vuoto.",

  examples: [
    "Il fanfarone del gruppo è quello che ha sempre vissuto la versione più estrema di ogni esperienza che chiunque altro racconta.",
    "Nelle commedie di Plauto, il miles gloriosus è il fanfarone per antonomasia: soldato che si vanta di battaglie mai combattute davanti a chi ha tutto l’interesse a smontarlo.",
    "Un certo fanfaronismo è quasi un tratto culturale in certi contesti meridionali italiani: non è menzogna sistematica, è teatro — tutti sanno che è teatro, e ci si diverte comunque.",
    "Il problema del fanfarone non è che mente: è che occupa spazio sonoro che potrebbe essere usato da chi ha qualcosa di reale da dire.",
  ],

  synonyms: [
    { term: "smargiasso", register: "comune", note: "Praticamente sinonimo, con sfumatura più aggressiva nel tono." },
    { term: "spaccone", register: "comune-colloquiale", note: "Più orientato verso chi si vanta di forza o capacità fisiche." },
  ],

  antonyms: [
    { term: "persona sobria", register: "comune", note: "Chi non ostenta e non cerca di impressionare con le parole." },
    { term: "understatement", register: "comune", note: "Il polo retorico opposto: minimizzare invece di amplificare." },
  ],

  relatedWords: ["millantatore", "gradasso", "spaccone", "bravata", "millanteria", "arroganza"],
  sourceLinks: {},

  paroliereNote:
    "Il fanfarone è il vizio con il miglior rapporto qualità-intrattenimento del " +
    "catalogo morale. È irritante, ma raramente pericoloso; è rumoroso, ma spesso " +
    "consapevole di essere visto. La sua fortuna letteraria — da Plauto a Molière a " +
    "Falstaff — dice che l’umanità ha sempre avuto con lui un conto aperto e mai " +
    "del tutto chiuso: lo condanna e lo ama allo stesso tempo. Forse perché in ogni " +
    "fanfarone c’è un residuo di chi vorrebbe essere ciò che racconta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "fanfarone — il vanto rumoroso tra tipo letterario e carattere sociale",
    description: "Che cos’è il fanfarone: definizione psicologica e letteraria, dal miles gloriosus di Plauto al fanfarone contemporaneo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
