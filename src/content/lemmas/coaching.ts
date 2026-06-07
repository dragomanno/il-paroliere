// Il Paroliere — Lemma: coaching
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coaching: LemmaEntry = {
  lemma: "coaching",
  slug: "coaching",
  partOfSpeech: "sostantivo maschile invariabile",

  definition:
    "Processo strutturato di accompagnamento professionale in cui un coach — figura " +
    "neutrale e qualificata — aiuta una persona o un gruppo a sviluppare consapevolezza " +
    "delle proprie risorse, a definire obiettivi chiari e a trovare autonomamente le " +
    "soluzioni più adatte. Il coaching non insegna e non consiglia: facilita. Il coach " +
    "non dice cosa fare; fa le domande giuste perché il coachee trovi da solo la " +
    "propria risposta.",

  shortDefinition:
    "Processo di accompagnamento che aiuta a sviluppare risorse proprie e raggiungere " +
    "obiettivi, senza dare risposte dirette.",

  register: ["tecnico", "professionale"],
  domains: ["psicologia", "formazione", "management", "lavoro"],

  etymology:
    "Dall'inglese to coach, «allenare», originariamente riferito al cocchiere (coach, " +
    "«carrozza») che portava il passeggero a destinazione. Il senso metaforico — " +
    "portare qualcuno dove vuole arrivare — è già attivo nell'inglese ottocentesco " +
    "nell'ambito universitario.",

  examples: [
    "L'azienda ha assunto un coach esterno per aiutare il team di vendita a migliorare la gestione dello stress e la comunicazione.",
    "Dopo sei mesi di coaching, aveva capito da sola dove voleva andare: non si aspettava di trovare le risposte guardando dentro di sé.",
    "Non aveva bisogno di un coach che le facesse le domande giuste, aveva bisogno di un mentor che le dicesse dove guardare.",
  ],

  synonyms: [
    {
      term: "accompagnamento",
      register: "comune",
      context: "parziale, meno tecnico",
    },
    {
      term: "facilitazione",
      register: "tecnico",
      context: "enfasi sul ruolo del coach come facilitatore",
    },
    {
      term: "affiancamento",
      register: "professionale",
      context: "parziale, meno tecnico",
    },
  ],

  antonyms: [
    {
      term: "formazione frontale",
      register: "tecnico",
      context: "trasmissione unidirezionale di contenuti",
    },
    {
      term: "didattica tradizionale",
      register: "comune",
      context: "il docente dà le risposte",
    },
    {
      term: "direttività",
      register: "tecnico",
      context: "indicare cosa fare invece di facilitare",
    },
  ],

  relatedWords: [
    "coach",
    "mentoring",
    "mentorship",
    "mentor",
    "formazione",
    "sviluppo professionale",
    "leadership",
    "psicologia positiva",
    "resilienza",
    "feedback",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/coaching/",
    wiktionary: "https://it.wiktionary.org/wiki/coaching",
  },

  paroliereNote:
    "Coaching e → mentoring sono due dei termini più inflazionati del lessico " +
    "lavorativo e manageriale contemporaneo. Vengono usati spesso in modo " +
    "intercambiabile, talvolta come semplici sinonimi di «aiuto», «consiglio» o " +
    "«formazione»: un segnale che la loro popolarità ha superato la comprensione del " +
    "loro significato tecnico. Questo non significa che il bisogno sia falso — al " +
    "contrario: la domanda di guida professionale strutturata è concreta e crescente, " +
    "specialmente in un mercato del lavoro che cambia velocemente. Vale la pena " +
    "rivendicare la distinzione: il coaching porta all'autonomia, il mentoring porta " +
    "all'eredità. Sono belli entrambi; non sono la stessa cosa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Coaching — definizione, differenza da mentoring | Il Paroliere",
    description:
      "Coaching o mentoring? La differenza è reale. Cosa significa coaching, come " +
      "funziona, perché è diverso dal mentoring. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
