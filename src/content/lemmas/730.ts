// Il Paroliere — Lemma: 730
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const mod730: LemmaEntry = {
  lemma: "730",
  slug: "730",
  partOfSpeech: "sostantivo maschile invariabile (nome di modello fiscale; nell'uso comune si omette «modello»)",

  definition:
    "Il modello 730 è la dichiarazione dei redditi semplificata destinata ai " +
    "lavoratori dipendenti e ai pensionati, che consente di dichiarare i propri " +
    "redditi annuali, calcolare l'→ IRPEF dovuta, e ottenere eventuali rimborsi " +
    "direttamente in busta paga (o nella pensione) oppure versare le imposte a " +
    "saldo tramite trattenuta dallo stipendio. Si chiama 730 dal numero " +
    "identificativo del modello ministeriale, introdotto in Italia con la riforma " +
    "fiscale degli anni Ottanta. Il 730 si distingue dal modello Redditi PF " +
    "(ex Unico) per semplicità e per la modalità di rimborso: chi usa il 730 " +
    "riceve i rimborsi IRPEF direttamente dal proprio sostituto d'imposta (datore " +
    "di lavoro o INPS) entro luglio-agosto, senza dover attendere i tempi " +
    "dell'Agenzia delle Entrate. Chi ha redditi complessi (partite IVA, redditi " +
    "esteri, plusvalenze da investimenti) deve usare il modello Redditi. Dal 2015 " +
    "l'Agenzia delle Entrate mette a disposizione un 730 precompilato che aggrega " +
    "automaticamente i dati già in possesso del fisco. Negli ultimi anni il " +
    "perimetro dei dati precaricati si è esteso fino a coprire la quasi totalità " +
    "delle spese mediche: farmacie, laboratori, strutture sanitarie e medici " +
    "comunicano le spese sostenute abbinate al codice fiscale del paziente, così " +
    "il sistema precompila automaticamente la sezione spese sanitarie per la " +
    "stragrande maggioranza dei contribuenti. Il contribuente può accettare il " +
    "precompilato — in quel caso non è soggetto a controllo documentale — oppure " +
    "modificarlo aggiungendo spese non caricate o correggendo dati errati.",

  shortDefinition:
    "Dichiarazione dei redditi semplificata per lavoratori dipendenti e pensionati; consente rimborsi IRPEF diretti in busta paga; dal 2015 disponibile in versione precompilata.",

  register: ["tecnico-fiscale", "burocratico", "comune"],
  domains: ["fisco", "diritto tributario", "burocrazia"],

  etymology:
    "Dal numero identificativo del modello ministeriale, introdotto con la riforma " +
    "fiscale italiana degli anni Ottanta. Il numero è puramente convenzionale, come " +
    "l'→ F24.",

  examples: [
    "«Ho fatto il 730 online in mezz'ora: il precompilato aveva già tutto, ho solo aggiunto le spese mediche che non erano state caricate.»",
    "«Il rimborso IRPEF mi arriverà in busta paga a luglio: questo è il vantaggio del 730 rispetto al modello Redditi.»",
    "«Ho aperto la partita IVA a marzo: quest'anno non posso più usare il 730, devo passare al modello Redditi PF.»",
  ],

  synonyms: [
    {
      term: "dichiarazione dei redditi semplificata",
      register: "tecnico-fiscale",
      context: "denominazione descrittiva",
    },
    {
      term: "730 precompilato",
      register: "comune",
      context: "variante specifica dal 2015",
    },
  ],

  antonyms: [
    {
      term: "modello Redditi PF",
      register: "tecnico-fiscale",
      context: "per chi ha redditi complessi o partita IVA",
    },
  ],

  relatedWords: [
    "IRPEF",
    "F24",
    "deduzione fiscale",
    "detrazione fiscale",
    "CU",
    "sostituto d'imposta",
    "rimborso fiscale",
    "Agenzia delle Entrate",
    "CAF",
    "modello Redditi PF",
    "saldo e acconto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/730/",
    wiktionary: "https://it.wiktionary.org/wiki/730",
  },

  paroliereNote:
    "Il 730 è probabilmente il documento fiscale più familiare agli italiani che " +
    "non hanno una partita IVA: arriva ogni anno, porta con sé un misto di speranza " +
    "(rimborso?) e timore (debito?), e da qualche anno è diventato sorprendentemente " +
    "gestibile grazie al precompilato. La sua logica di fondo è sana: chi ha un " +
    "sostituto d'imposta (il datore di lavoro o l'INPS) che già trattiene le tasse " +
    "alla fonte, non ha bisogno di pagare ulteriormente — ha solo bisogno di " +
    "dichiarare e aggiustare il tiro. Il vero limite del sistema è che milioni di " +
    "italiani ancora non lo compilano, rinunciando a detrazioni e rimborsi che " +
    "spettano loro di diritto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "730 — cos'è, come funziona, rimborsi IRPEF | Il Paroliere",
    description:
      "Cos'è il modello 730, chi può usarlo, come funziona il precompilato, quando arriva il rimborso IRPEF. Definizione originale con esempi pratici.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
