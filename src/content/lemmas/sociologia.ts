// Il Paroliere — Lemma: sociologia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sociologia: LemmaEntry = {
  lemma: "sociologia",
  slug: "sociologia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "saggistico", "comune"],
  domains: ["scienze sociali", "epistemologia", "metodologia"],

  definition:
    "Disciplina che studia la vita sociale nelle sue strutture, dinamiche e trasformazioni " +
    "— dai gruppi e le istituzioni alle pratiche quotidiane, dalle disuguaglianze ai " +
    "movimenti collettivi. Fondata come scienza nel XIX secolo (Comte ne coniò il nome, " +
    "Durkheim ne stabilì il metodo), la sociologia si interroga su come la società forma " +
    "gli individui e, al contempo, come gli individui producono e modificano la società. " +
    "I suoi metodi spaziano dall'inchiesta statistica all'osservazione etnografica, " +
    "dall'analisi dei testi ai big data, mantenendo al centro la domanda su cosa tenga " +
    "insieme — o separi — le comunità umane.",

  shortDefinition:
    "Scienza che studia come le strutture sociali formano gli individui e come gli " +
    "individui, insieme, producono e trasformano la società.",

  etymology:
    "Termine ibrido coniato da Auguste Comte nel 1838: dal latino socius \u00abcompagno, " +
    "associato\u00bb e dal greco lógos \u00abdiscorso, studio\u00bb. Comte voleva fondare una " +
    "\u00abfisica sociale\u00bb con metodo positivo; l'ibridismo latino-greco fu criticato dai " +
    "puristi, ma il termine attecchì.",

  examples: [
    "Durkheim dimostrò che persino il suicidio — atto apparentemente individuale — segue pattern collettivi: era la prova che la sociologia aveva un oggetto proprio.",
    "La sociologia di Weber introduce la comprensione del senso soggettivo dell'azione: non basta osservare i comportamenti, bisogna capire cosa significano per chi li compie.",
    "Nelle università italiane, sociologia è spesso relegata a disciplina ancillare: un paradosso per un paese in cui i legami sociali sono materia di sopravvivenza quotidiana.",
    "I big data hanno trasformato la ricerca sociologica, moltiplicando le fonti ma complicando la domanda su cosa significhi davvero \u201cmisurare\u201d la società.",
  ],

  synonyms: [
    {
      term: "scienza sociale",
      register: "accademico",
      note: "Più ampio: include economia, scienze politiche, antropologia.",
    },
    {
      term: "studio della società",
      register: "divulgativo",
      note: "Formula esplicativa, non termine tecnico.",
    },
  ],

  antonyms: [
    {
      term: "individualismo metodologico",
      register: "filosofico-sociale",
      note: "Approccio che spiega i fenomeni sociali a partire dalle azioni dei singoli, invertendo la freccia causale.",
    },
  ],

  relatedWords: ["modernita-liquida", "antisocialita", "indifferenza-civile", "astensionismo", "epistemologia"],

  sourceLinks: {},

  paroliereNote:
    "La sociologia ha il vizio di sembrare ovvia — \u201cstudia la società, no?\u201d — e il " +
    "pregio di essere sistematicamente più scomoda di quanto sembri. Ogni volta che " +
    "qualcuno dice \u201cè la natura umana\u201d, la sociologia risponde: \u201cAspetta, mostrami " +
    "i dati\u201d. Ogni volta che qualcuno spiega un fenomeno collettivo con le cattive " +
    "intenzioni di singoli individui, un buon sociologo chiede: \u201cQuali strutture rendono " +
    "quelle intenzioni possibili, plausibili, normali?\u201d Non è cinismo, è metodo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "sociologia — come la società forma gli individui e viceversa",
    description:
      "Che cos'è la sociologia: storia, metodo e domande fondamentali dalla fondazione " +
      "ottocentesca ai big data contemporanei.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
