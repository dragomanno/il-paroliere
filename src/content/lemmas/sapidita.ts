// Il Paroliere — Lemma: sapidità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sapidita: LemmaEntry = {
  lemma: "sapidità",
  slug: "sapidita",
  partOfSpeech: "sostantivo femminile",

  definition:
    "La proprietà organolettica di un alimento o di una bevanda di avere un sapore pieno, " +
    "persistente e caratteristico — di «saper di qualcosa» in modo riconoscibile e " +
    "soddisfacente. In enologia, la sapidità indica la presenza di sali minerali disciolti " +
    "nel vino (soprattutto cloruri, solfati e fosfati), che conferiscono una sensazione di " +
    "freschezza salina e di persistenza aromatica. Un vino sapido non è salato nel senso " +
    "ordinario: ha una qualità minerale che richiama vagamente la percezione del sale senza " +
    "essere salato, che stimola la salivazione e prolunga la persistenza in bocca. È una delle " +
    "qualità più apprezzate nei vini bianchi di zone vulcaniche o marine — il Vermentino di " +
    "Sardegna, il Greco di Tufo, il Chablis francese, il Muscadet sur lie della Loira sono " +
    "esempi tipici di vini ad alta sapidità. In gastronomia più ampia, sapidità è sinonimo " +
    "parziale di umami — il quinto gusto fondamentale, identificato dal chimico giapponese " +
    "Kikunae Ikeda nel 1908 come la sensazione di «pieno, saporito, rotondo» prodotta " +
    "dall'acido glutammico. Parmigiano stagionato, acciughe, funghi porcini secchi, pomodori " +
    "concentrati: tutti alimenti ad altissima sapidità/umami.",

  shortDefinition:
    "La proprietà di avere un sapore pieno e persistente; in enologia, la sensazione " +
    "minerale-salina che prolunga la persistenza in bocca; correlato all'umami in gastronomia.",

  register: ["tecnico (enologia, gastronomia, chimica degli alimenti)", "comune nel parlato enogastronomico"],
  domains: ["enologia", "gastronomia", "chimica", "sensoristica"],

  etymology:
    "Dal latino sapidus («saporito, gustoso»), da sapere («avere sapore», ma anche «essere " +
    "saggio» — la stessa radice di saggezza e sapiente: chi sa è chi ha assaggiato il mondo). " +
    "Questa doppia radice — sapore e sapienza — è una delle etimologie più ricche della " +
    "lingua italiana: lo stesso verbo latino ha generato sapiente, sapido, insipido, sapienza.",

  examples: [
    "«Il Vermentino di Gallura DOCG è uno dei vini italiani più sapidi: la mineralità vulcanica del terreno si sente chiaramente nella persistenza salina in bocca.»",
    "«La sapidità del Parmigiano Reggiano stagionato 36 mesi è il risultato della concentrazione di glutammato libero: è il motivo per cui basta una scaglia per trasformare un piatto semplice.»",
    "«Nella degustazione, sapidità non è sinonimo di salinità: è una sensazione più complessa, che riguarda la pienezza e la persistenza del sapore.»",
  ],

  synonyms: [
    {
      term: "mineralità",
      register: "enologico",
      context: "in enologia",
    },
    {
      term: "umami",
      register: "gastronomico",
      context: "in gastronomia, il quinto gusto fondamentale",
    },
    {
      term: "saporosità",
      register: "comune",
      context: "qualità di avere sapore pieno",
    },
  ],

  antonyms: [
    {
      term: "insipidità",
      register: "comune",
      context: "mancanza di sapore",
    },
    {
      term: "piattezza",
      register: "enologico",
      context: "in enologia, vino privo di struttura",
    },
  ],

  relatedWords: [
    "vino",
    "olio-doliva",
    "vitigno",
    "umami",
    "mineralità",
    "persistenza",
    "Vermentino",
    "Greco di Tufo",
    "Parmigiano",
    "glutammato",
    "Ikeda",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sapidita/",
    wiktionary: "https://it.wiktionary.org/wiki/sapidit%C3%A0",
  },

  paroliereNote:
    "L'etimologia di sapidità è una delle più ricche del lessico italiano: sapere nel senso " +
    "di «avere sapore» e sapere nel senso di «conoscere» vengono dalla stessa radice latina. " +
    "Il latino sapio significa insieme «ho sapore» e «sono saggio» — perché la saggezza è " +
    "intesa come il frutto di aver assaggiato l'esperienza. Chi sa, ha assaggiato. Chi non sa, " +
    "è insipido. È uno di quei nessi etimologici che cambiano il modo di sentire una parola: " +
    "non solo un aggettivo enologico, ma una piccola filosofia della conoscenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sapidità — enologia, gastronomia, umami, etimologia | Il Paroliere",
    description:
      "Cos'è la sapidità nel vino e in cucina, differenza da salinità, connessione con " +
      "umami. L'etimologia di sapere tra gusto e saggezza. Definizione originale completa.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
