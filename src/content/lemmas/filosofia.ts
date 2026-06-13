// Il Paroliere — Lemma: filosofia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const filosofia: LemmaEntry = {
  lemma: "filosofia",
  slug: "filosofia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Insieme di attività di pensiero che interrogano in modo critico e argomentato i" +
    " concetti più generali con cui abitiamo il mondo — essere, verità, bene, giustizia," +
    " tempo, conoscenza — senza limitarsi a ciò che appare ovvio. Storicamente la filosofia" +
    " è anche una disciplina con tradizioni, scuole e metodi diversi, dalla dialettica" +
    " antica alle analisi del linguaggio, dalle riflessioni sull'esperienza quotidiana alle" +
    " discussioni sulla scienza e sulla tecnica. Nel linguaggio comune, \"farsi una" +
    " filosofia\" significa darsi un modo di vedere la vita, più o meno coerente, che aiuta" +
    " a reggere ciò che accade.",

  shortDefinition:
    "Pratica di pensiero che mette in questione i concetti fondamentali con cui" +
    " comprendiamo il mondo e noi stessi, costruendo visioni argomentate della realtà.",

  register: ["comune", "tecnico", "accademico"],
  domains: ["filosofia", "cultura", "educazione", "scienza", "etica"],

  etymology:
    "Dal latino philosophia, a sua volta dal greco philósophia, \"amore per la sapienza\"," +
    " composto da phileîn \"amare\" e sophía \"sapienza, sapere\". Nella Grecia antica indicava" +
    " un atteggiamento di ricerca più che un possesso di verità; nel tempo è diventata nome" +
    " di una disciplina con confini variabili rispetto alle scienze e alle religioni.",

  examples: [
    "Per lui la filosofia non è un sapere in più, ma un modo diverso di porsi domande su ciò che tutti vedono.",
    "Molte questioni che oggi chiamiamo scientifiche nascono come problemi di filosofia naturale.",
    "Dire \"questa è la mia filosofia di vita\" significa raccontare in breve un sistema di valori e priorità.",
    "A scuola la filosofia rischia di diventare solo storia di dottrine, se non la si collega alle domande del presente.",
    "Quando la filosofia dialoga con la tecnologia, può aiutare a chiedersi non solo cosa possiamo fare, ma cosa vogliamo diventare facendo certe scelte.",
  ],

  synonyms: [
    {
      term: "pensiero-critico",
      register: "divulgativo",
      note: "Mette l'accento sulla funzione di interrogare e argomentare.",
    },
    {
      term: "riflessione-teorica",
      register: "accademico",
      note: "Evidenzia il lavoro concettuale ad alto livello di astrazione.",
    },
  ],

  antonyms: [
    {
      term: "dogmatismo",
      register: "filosofico",
      note: "Atteggiamento che rifiuta il confronto critico e il dubbio.",
    },
    {
      term: "praticismo-acefalo",
      register: "saggistico",
      note: "Fare senza interrogarsi sul senso e sulle conseguenze.",
    },
  ],

  relatedWords: [
    {
      term: "metafisica",
      relation: "Uno dei grandi rami della filosofia, dedicato a ciò che va \"oltre\" il mondo sensibile.",
    },
    {
      term: "epistemologia",
      relation: "Ramo che studia natura e limiti della conoscenza.",
    },
    {
      term: "dialettica",
      relation: "Metodo classico di indagine filosofica.",
    },
    {
      term: "sociologia",
      relation: "Disciplina che, pur autonoma, condivide con la filosofia interrogativi sulle forme della vita collettiva.",
    },
  ],

  sourceLinks: {},

  paroliereNote:
    "La filosofia ha la reputazione di parlare difficile, ma nasce da gesti molto" +
    " semplici: chiedere \"perché proprio così?\", \"potrebbe essere altrimenti?\", \"che cosa" +
    " stiamo dando per scontato?\". In un mondo che premia la rapidità, rischia di sembrare" +
    " inutile perché non produce soluzioni immediate; eppure, molte scelte tecniche," +
    " politiche, personali incorporano risposte implicite a domande filosofiche mai" +
    " esplicitate. Il lemma invita a vedere la filosofia non come lusso per specialisti, ma" +
    " come officina in cui si riparano e si reinventano le categorie con cui pensiamo.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "filosofia — l'arte di fare domande fondamentali",
    description:
      "Che cos'è la filosofia tra etimologia, storia e uso quotidiano, dal pensiero critico" +
    " sulle idee di sempre alle filosofie di vita con cui affrontiamo il presente.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
