// Il Paroliere — Lemma: accoglienza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const accoglienza: LemmaEntry = {
  lemma: "accoglienza",
  slug: "accoglienza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Il ricevere qualcuno — ospite, straniero, richiedente asilo — garantendogli le condizioni " +
    "minime di dignità previste dal diritto e dalla convivenza civile. In senso comune indica " +
    "anche il modo in cui una persona o una comunità si apre al nuovo arrivato: calore, " +
    "disponibilità, assenza di ostilità. " +
    "Nel dibattito pubblico contemporaneo il termine è spesso usato come sinonimo improprio " +
    "di «apertura illimitata delle frontiere» — una semplificazione che distorce il concetto. " +
    "Accoglienza non significa assenza di regole, né obbligo di accettare chiunque senza " +
    "valutazione: significa garantire a chi arriva — qualunque sia il suo status giuridico — " +
    "il rispetto dei diritti fondamentali riconosciuti dal diritto internazionale, a partire " +
    "dal divieto di respingimento verso paesi dove la vita è in pericolo (principio di " +
    "non-refoulement). È un concetto giuridico prima ancora che sentimentale.",

  shortDefinition:
    "Il ricevere l'altro garantendo dignità e diritti fondamentali; non apertura illimitata, ma rispetto degli obblighi internazionali.",

  register: ["comune", "tecnico-giuridico", "politico"],
  domains: ["diritto internazionale", "etica", "sociologia", "politica"],

  etymology:
    "Derivato del verbo accogliere, dal latino ad- + colligere ('raccogliere verso di sé', " +
    "'riunire'). La radice è la stessa di collegare e raccogliere: l'accoglienza è, " +
    "etimologicamente, un atto di raccolta — portare qualcosa o qualcuno dentro il proprio " +
    "perimetro.",

  examples: [
    "Il principio di non-refoulement, sancito dalla Convenzione di Ginevra del 1951, è il nucleo giuridico dell'accoglienza: nessuno può essere respinto verso un paese dove rischia persecuzione.",
    "Accoglienza non significa rinunciare a valutare le domande di protezione: significa farlo con procedure giuste, tempestive e rispettose della dignità della persona.",
    "Un sistema di accoglienza efficiente non è necessariamente un sistema generoso: è un sistema che applica le norme con rapidità, riducendo i tempi di incertezza per tutti.",
    "La città aveva organizzato l'accoglienza con metodo: alloggi temporanei, corsi di lingua, orientamento legale. Non era sentimentalismo — era amministrazione.",
  ],

  synonyms: [
    {
      term: "ospitalità",
      register: "comune",
      context: "più legato alla tradizione culturale e morale, meno al quadro giuridico",
    },
    {
      term: "protezione umanitaria",
      register: "tecnico-giuridico",
      context: "forma specifica di accoglienza garantita a chi non soddisfa i requisiti del rifugiato ma si trova in situazione di vulnerabilità",
    },
  ],

  antonyms: [
    {
      term: "respingimento",
      register: "tecnico-giuridico",
      context: "misura di allontanamento alla frontiera; quando illegale, viola il principio di non-refoulement",
    },
    {
      term: "esclusione",
      register: "comune",
      context: "rifiuto di riconoscere all'altro uno spazio e uno status",
    },
  ],

  relatedWords: [
    "migrazione",
    "alterità",
    "pregiudizio",
    "xenofobia",
    "xenofobo",
    "etnocentrismo",
    "razzismo",
    "rifugiato",
    "integrazione",
    "diritto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/accoglienza/",
    wiktionary: "https://it.wiktionary.org/wiki/accoglienza",
  },

  paroliereNote:
    "Accoglienza è una delle parole più abusate del dibattito pubblico italiano degli ultimi " +
    "anni — sia da chi la trasforma in slogan buonista, sia da chi la tratta come sinonimo di " +
    "ingenuità. In entrambi i casi si perde la precisione: l'accoglienza è prima di tutto un " +
    "obbligo giuridico che discende da trattati internazionali firmati dall'Italia. " +
    "Non è un sentimento. Non è una scelta discrezionale. È un sistema di norme — " +
    "che si può implementare meglio o peggio, ma che non si può semplicemente ignorare " +
    "senza violare il diritto internazionale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Accoglienza — definizione e uso | Il Paroliere",
    description:
      "Accoglienza: garantire dignità e diritti a chi arriva, nel rispetto del diritto internazionale. Non apertura illimitata — obbligo giuridico prima che scelta morale.",
  },

  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
};
