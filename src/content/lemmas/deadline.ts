// Il Paroliere — Lemma: deadline
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const deadline: LemmaEntry = {
  lemma: "deadline",
  slug: "deadline",
  partOfSpeech: "sostantivo femminile invariabile",
  gender: "femminile",
  definition: "Data o ora entro cui un lavoro deve essere concluso o consegnato, senza possibilità di rinvio. Nel lessico aziendale ed editoriale indica la scadenza di un compito, di un progetto, di una pubblicazione o di una candidatura, e porta con sé un'idea di urgenza e di pressione più forte della semplice scadenza.",
  shortDefinition: "Data o ora entro cui un lavoro va concluso o consegnato senza rinvii; scadenza percepita come pressante.",
  register: [
    "professionale",
    "colloquiale",
  ],
  domains: [
    "lavoro",
    "editoria",
    "gestione dei progetti",
  ],
  etymology: "Dall'inglese deadline, composto di dead «morto» e line «linea». Nel 1864, nel campo di prigionia di Andersonville, durante la guerra civile americana, era la linea oltre la quale i prigionieri venivano uccisi a vista. Il senso di termine perentorio si afferma nel giornalismo americano nei primi decenni del Novecento, per l'ora di chiusura dell'edizione. In italiano si scrive anche dead line e prevale il femminile, per accordo con scadenza.",
  examples: [
    "La deadline per il bando è il 30 novembre alle 12: un minuto dopo, la piattaforma non accetta più domande.",
    "In redazione la deadline è alle 22: dopo, la pagina va in stampa con o senza il tuo pezzo.",
    "Abbiamo tre deadline nella stessa settimana e nessuno ha avuto il coraggio di spostarne una.",
  ],
  synonyms: [
    {
      term: "scadenza",
      register: "comune",
      context: "la resa italiana più naturale e completa",
    },
    {
      term: "termine",
      register: "formale",
      context: "nel linguaggio giuridico e amministrativo",
      note: "Il diritto distingue il termine perentorio, che non ammette proroghe, da quello ordinatorio, che si può prorogare.",
    },
    {
      term: "chiusura",
      register: "professionale",
      context: "in editoria e nel giornalismo, l'ora di chiusura dell'edizione",
    },
  ],
  antonyms: [
    {
      term: "proroga",
      register: "comune",
      context: "lo spostamento della scadenza",
    },
    {
      term: "data aperta",
      register: "comune",
      context: "attività senza termine fisso",
    },
  ],
  relatedWords: [
    "milestone",
    "deliverable",
    "sprint",
    "burnout",
    "prioritizzazione",
    "kronos",
    "attesa",
    "bollo-auto",
    "kairos",
    "termine perentorio",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/dead-line/",
  },
  paroliereNote: "Deadline ha un'origine cupa: era la linea che non si poteva oltrepassare senza essere uccisi, in un campo di prigionia della guerra civile americana. Poi i giornali ne hanno fatto l'ora oltre la quale un articolo non entra più in pagina, e il lessico aziendale l'ha resa quotidiana. L'italiano scadenza dice quasi tutto, ma non la stessa pressione: nessuno parlerebbe della deadline del → bollo auto, mentre la deadline di un progetto sembra subito più vicina. Usarla per ogni scadenza, però, la svuota. Il suo rapporto con → milestone e → deliverable è spiegato in quelle voci.",
  seo: {
    title: "Deadline — significato, origine e differenza con scadenza | Il Paroliere",
    description: "Che cos'è una deadline: la data entro cui un lavoro va consegnato senza rinvii. Origine ad Andersonville nel 1864, uso giornalistico e rese italiane.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
