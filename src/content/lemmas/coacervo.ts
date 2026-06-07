// Il Paroliere — Lemma: coacervo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coacervo: LemmaEntry = {
  lemma: "coacervo",
  slug: "coacervo",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Accumulo disordinato, ammasso eterogeneo di elementi diversi accumulati senza " +
    "criterio organizzativo visibile. In retorica classica, il coacervo è una figura " +
    "che consiste nell'accumulare sinonimi o concetti simili per effetto di " +
    "intensificazione. In senso corrente, soprattutto giornalistico-politico, indica " +
    "una mescolanza confusa e incoerente di elementi che non dovrebbero stare insieme: " +
    "in questo senso è prossimo a → ammucchiata, ma con registro più formale.",

  shortDefinition:
    "Ammasso disordinato ed eterogeneo di cose o idee; in senso politico, coalizione " +
    "o insieme privo di vera coerenza.",

  register: ["formale", "letterario", "giornalistico"],
  domains: ["linguistica", "diritto", "politica", "retorica"],

  etymology:
    "Dal latino coacervus, composto di co- («insieme») + acervus («mucchio, ammasso»). " +
    "Termine attestato già in Cicerone, usato sia in senso concreto sia retorico.",

  examples: [
    "La proposta di legge era un coacervo di norme contraddittorie accumulate senza logica sistematica.",
    "Quel romanzo è un coacervo di citazioni colte e rimandi oscuri che finiscono per soffocare la storia.",
    "La coalizione di governo sembrava un coacervo di interessi incompatibili destinato a implodere presto.",
  ],

  synonyms: [
    {
      term: "ammucchiata",
      register: "colloquiale",
      context: "più colloquiale e spregiativo",
    },
    {
      term: "guazzabuglio",
      register: "colloquiale",
      context: "miscuglio confuso",
    },
    {
      term: "accozzaglia",
      register: "colloquiale",
      context: "insieme eterogeneo e disomogeneo",
    },
    {
      term: "miscuglio",
      register: "comune",
      context: "insieme di cose diverse mescolate",
    },
    {
      term: "accumulazione",
      register: "retorico",
      context: "figura retorica dell'accumulo (sinatroismos)",
    },
  ],

  antonyms: [
    {
      term: "sistema",
      register: "comune",
      context: "insieme organizzato con coerenza",
    },
    {
      term: "ordine",
      register: "comune",
      context: "disposizione secondo un criterio",
    },
    {
      term: "coerenza",
      register: "comune",
      context: "unità logica degli elementi",
    },
    {
      term: "struttura",
      register: "comune",
      context: "organizzazione con ruoli definiti",
    },
  ],

  relatedWords: [
    "ammucchiata",
    "coercizione",
    "coalizione",
    "retorica",
    "accumulazione",
    "figura retorica",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/coacervo/",
    wiktionary: "https://it.wiktionary.org/wiki/coacervo",
  },

  paroliereNote:
    "Coacervo è una parola che sa di latinismo consapevole: chi la usa in un articolo " +
    "di giornale sta scegliendo di elevarsi sopra il registro di ammucchiata o " +
    "guazzabuglio, pur volendo comunicare la stessa idea di disordine irrimediabile. " +
    "La differenza con → ammucchiata è soprattutto di tono: coacervo è il termine che " +
    "si usa in un editoriale serio o in un atto notarile; ammucchiata è quello che si " +
    "usa in un tweet o in una battuta televisiva. Vale la pena segnalare anche l'uso " +
    "retorico classico, molto noto negli studi latini: la figura del coacervo (o " +
    "sinatroismos) consiste nell'accumulare sinonimi o quasi-sinonimi in serie, " +
    "amplificando per saturazione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Coacervo — definizione, uso politico e retorico | Il Paroliere",
    description:
      "Coacervo: cosa significa, come si usa in politica e retorica, differenza con " +
      "ammucchiata. Definizione originale con esempi e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
