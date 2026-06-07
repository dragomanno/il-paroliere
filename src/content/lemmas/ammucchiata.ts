// Il Paroliere — Lemma: ammucchiata
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ammucchiata: LemmaEntry = {
  lemma: "ammucchiata",
  slug: "ammucchiata",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Nel senso letterale, un insieme di cose o persone ammassate in modo disordinato, " +
    "senza organizzazione. In senso figurato politico, un'alleanza o coalizione " +
    "costruita senza vera coerenza ideologica, tenuta insieme solo da convenienze " +
    "tattiche o dall'avversione comune verso un avversario, non da un progetto " +
    "condiviso: in questo senso è sinonimo parziale di → coacervo. Ha anche un terzo " +
    "significato colloquiale-volgare, che designa un rapporto sessuale di gruppo; " +
    "quest'uso, pur non letterario, è quello più noto nel parlato e viene qui registrato " +
    "con etichetta di registro esplicita.",

  shortDefinition:
    "Insieme disordinato di cose o persone; in politica, coalizione eterogenea e priva " +
    "di coerenza ideologica; in registro volgare, rapporto sessuale di gruppo.",

  register: ["colloquiale", "spregiativo", "volgare"],
  domains: ["società", "politica", "usi figurati", "linguistica"],

  etymology:
    "Participio passato sostantivato del verbo ammucchiare, derivato di mucchio, da un " +
    "latino tardo muculum di origine incerta (forse germanica o preromana).",

  examples: [
    "Il governo era una vera ammucchiata: sette partiti che non si sopportavano ma non volevano andare all'opposizione.",
    "Quella coalizione non era nata da un'idea condivisa ma da una pura ammucchiata elettorale.",
    "In fondo alla cantina c'era una solita ammucchiata di roba vecchia che nessuno voleva buttare.",
  ],

  synonyms: [
    {
      term: "coacervo",
      register: "formale",
      context: "senso politico, più formale e letterario",
    },
    {
      term: "accozzaglia",
      register: "colloquiale",
      context: "insieme disomogeneo",
    },
    {
      term: "guazzabuglio",
      register: "colloquiale",
      context: "miscuglio confuso",
    },
    {
      term: "carrozzone",
      register: "colloquiale",
      context: "in senso politico-giornalistico",
    },
    {
      term: "minestrone",
      register: "colloquiale",
      context: "miscuglio incoerente",
    },
    {
      term: "mucchio",
      register: "comune",
      context: "senso letterale",
    },
  ],

  antonyms: [
    {
      term: "coalizione organica",
      register: "formale",
      context: "alleanza con coerenza ideologica",
    },
    {
      term: "alleanza coerente",
      register: "formale",
      context: "unione fondata su progetto condiviso",
    },
    {
      term: "blocco ideologico",
      register: "formale",
      context: "schieramento con identità chiara",
    },
  ],

  relatedWords: [
    "coacervo",
    "coercizione",
    "politica",
    "trasformismo",
    "alleanza",
    "coalizione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ammucchiata/",
    wiktionary: "https://it.wiktionary.org/wiki/ammucchiata",
  },

  paroliereNote:
    "Ammucchiata in senso politico ha avuto una fortuna notevole nel lessico " +
    "giornalistico italiano a partire dagli anni Novanta, soprattutto con la fine del " +
    "sistema dei partiti della Prima Repubblica e la nascita di coalizioni sempre più " +
    "ibride e contingenti. La parola porta con sé una connotazione inevitabilmente " +
    "ironica e spregiativa: chi la usa sta implicitamente dicendo che quella coalizione " +
    "non ha gambe. Il parallelo con → coacervo è utile: coacervo è più formale, quasi " +
    "tecnico-legale; ammucchiata è da titolo di giornale, da talk show, da battuta " +
    "sarcastica.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ammucchiata — definizione politica e figurata | Il Paroliere",
    description:
      "Ammucchiata in politica: cosa significa, come si usa, differenza con coacervo. " +
      "Definizione originale con esempi d'uso e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
