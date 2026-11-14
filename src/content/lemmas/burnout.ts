// Il Paroliere — Lemma: burnout
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const burnout: LemmaEntry = {
  lemma: "burnout",
  slug: "burnout",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "1. Nel lavoro e nell'uso comune, condizione di esaurimento fisico ed emotivo legata a uno stress lavorativo prolungato e non gestito: la persona perde energia, prende le distanze dal proprio lavoro e sente di non riuscire più a farlo bene. Per estensione, stanchezza profonda anche fuori dall'ufficio, nello studio o nella cura dei familiari. 2. In medicina e in psicologia, quadro che l'OMS descrive con tre tratti, cioè energie esaurite, cinismo verso il lavoro ed efficacia ridotta, e che l'ICD-11 classifica come fenomeno legato all'occupazione, non come malattia né come disturbo mentale.",
  shortDefinition: "Esaurimento da stress lavorativo cronico, con distacco e calo di efficacia; per l'OMS fenomeno occupazionale, non malattia.",
  register: [
    "comune",
    "tecnico",
  ],
  domains: [
    "lavoro",
    "psicologia",
    "medicina",
    "società",
  ],
  etymology: "Dall'inglese burnout, da to burn out «bruciarsi fino in fondo, consumarsi», detto di una candela o di un motore che si spegne per esaurimento. Nel senso attuale la parola entra nella psicologia nel 1974 con l'articolo «Staff Burn-Out» dello psicologo Herbert Freudenberger, che osservava gli operatori delle cliniche gratuite di New York; poco prima, Graham Greene aveva intitolato un romanzo A Burnt-Out Case. Il passaggio al linguaggio clinico si deve soprattutto a Christina Maslach e Susan Jackson, che nel 1981 pubblicarono il Maslach Burnout Inventory, il questionario da cui derivano le tre dimensioni riprese dall'OMS. Nell'ICD-11 la voce ha il codice QD85; nell'ICD-10 corrispondeva a Z73.0. In italiano si scrive anche burn-out.",
  examples: [
    "Dopo due anni di turni scoperti e reperibilità continua, metà del reparto era in burnout e l'altra metà cercava lavoro altrove.",
    "Il burnout non passa con un fine settimana alle terme: se il carico di lavoro resta quello, al rientro torna tutto come prima.",
    "Lo chiamano burnout da caregiver: chi assiste per anni un genitore malato arriva a un esaurimento che somiglia molto a quello da lavoro.",
    "Nella relazione il medico ha parlato di burnout, ma ha segnalato anche i sintomi depressivi da trattare: il primo descrive il contesto, i secondi chiedono una cura.",
    "Lo studio ha misurato il burnout degli infermieri con il Maslach Burnout Inventory, prima e dopo la riorganizzazione dei turni.",
  ],
  synonyms: [
    {
      term: "esaurimento",
      register: "comune",
      context: "più generico e non legato al lavoro",
      note: "«Esaurimento nervoso» è formula popolare, oggi evitata in ambito clinico.",
    },
    {
      term: "sindrome da burnout",
      register: "tecnico",
      context: "formula frequente nei testi sanitari italiani",
    },
    {
      term: "sindrome da esaurimento professionale",
      register: "tecnico",
      context: "resa italiana descrittiva",
    },
    {
      term: "logoramento",
      register: "comune",
      context: "il processo lento di usura, più che lo stato finale",
    },
    {
      term: "stress lavoro-correlato",
      register: "tecnico-giuridico",
      context: "la causa, non la condizione",
      note: "Nella normativa italiana sulla sicurezza è un rischio da valutare; il burnout è uno dei suoi esiti possibili.",
    },
  ],
  antonyms: [
    {
      term: "engagement",
      register: "tecnico",
      context: "nella psicologia del lavoro, energia, dedizione e coinvolgimento",
      note: "Parte della ricerca lo considera il polo opposto del burnout.",
    },
    {
      term: "benessere lavorativo",
      register: "comune",
    },
  ],
  relatedWords: [
    "engagement",
    "saturazione",
    "frustrazione",
    "depressione",
    "cinismo",
    "distacco",
    "stigma",
    "resilienza",
    "abnegazione",
    "dedizione",
    "alienazione",
    "turnover",
    "welfare-aziendale",
    "smart-working",
    "lavoro-agile",
    "deadline",
    "sprint",
    "stress",
  ],
  sourceLinks: {},
  paroliereNote: "Il burnout porta con sé una contraddizione: è una parola nata per i luoghi di lavoro e diventata il nome di un malessere generazionale. L'[Organizzazione mondiale della sanità](https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases) ha precisato nel 2019 che il termine riguarda specificamente il contesto professionale; l'uso comune, però, va per la sua strada, e oggi si parla di burnout dello studente o del genitore. Per come è definito, il burnout descrive il rapporto fra una persona e un'organizzazione, non una fragilità individuale. Sul piano clinico il lessico conta più che altrove: dire «ho il burnout» non equivale a ricevere una diagnosi. L'ICD-11 lo tiene separato dai disturbi d'ansia, dell'umore e da stress, il DSM-5 non lo include, e una parte della ricerca discute quanto si distingua davvero dalla → depressione, perché i sintomi si sovrappongono molto. Il termine è prezioso per leggere un'organizzazione che fa ammalare, meno per sostituire una valutazione clinica.",
  seo: {
    title: "Burnout — significato nel lavoro e in medicina | Il Paroliere",
    description: "Che cos'è il burnout: esaurimento da stress lavorativo cronico. Il senso comune, la posizione dell'OMS, il codice ICD-11 QD85 e il confine con la depressione.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
