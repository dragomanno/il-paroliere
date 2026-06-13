// Il Paroliere — Lemma: inconscio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const inconscio: LemmaEntry = {
  lemma: "inconscio",
  slug: "inconscio",
  partOfSpeech: "sostantivo_aggettivo",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["psicologia", "psicoanalisi", "filosofia", "neuroscienze", "cultura"],

  definition:
    "Nella psicologia e nella psicoanalisi, insieme di processi, contenuti mentali e dinamiche affettive che operano al di fuori della coscienza, ma influenzano pensieri, emozioni e comportamenti, talvolta entrando in conflitto con ciò che ci raccontiamo di noi stessi. Come sostantivo, l'inconscio è il nome di questo spazio mentale non direttamente accessibile se non attraverso sogni, lapsus, sintomi, fantasie e relazioni; in filosofia indica ogni dimensione dell'esperienza che precede il pensiero riflesso, dal corpo che “sa” prima della mente, agli schemi appresi che guidano lo sguardo sul mondo. Nell'uso comune, “inconscio” come aggettivo può significare semplicemente non intenzionale o poco avvertito.",

  shortDefinition:
    "Parte della vita psichica che agisce fuori dalla coscienza ma ne orienta desideri, paure e decisioni, spesso rivelandosi solo indirettamente.",

  etymology:
    "Dal latino tardo incōnscius, “che non sa”, formato da in- privativo e cōnscius “consapevole, che sa con qualcuno”, a sua volta da cum “con” e scire “sapere”. L'uso filosofico è documentato già in età moderna, ma è con la psicoanalisi di fine Ottocento e inizio Novecento che inconscio diventa termine tecnico centrale, indicato talvolta anche con le varianti storiche “subconscio” o “subconscio psichico”, oggi meno usate o con sfumature diverse.",

  examples: [
    "Nel sogno, l'inconscio ha rimesso in scena un conflitto che lui nella vita diurna fingeva di non vedere.",
    "Un gesto apparentemente inconscio, come cambiare strada all'ultimo momento, può rivelare un timore che non abbiamo ancora nominato.",
    "Molte campagne pubblicitarie lavorano a livello quasi inconscio, legando il prodotto a emozioni primarie come sicurezza o appartenenza.",
    "Per alcuni filosofi, il corpo è un sapere in parte inconscio, che anticipa ogni decisione razionale.",
    "Dire “l'ho fatto in modo inconscio” non basta a cancellare la responsabilità, ma ricorda che la nostra consapevolezza non è padrona assoluta di ciò che facciamo.",
  ],

  synonyms: [
    {
      term: "psiche inconscia",
      register: "tecnico",
      note: "Precisa che si tratta della parte non cosciente della psiche.",
    },
    {
      term: "sfera profonda",
      register: "saggistico",
      note: "Espressione metaforica che allude alla dimensione non consapevole.",
    },
    {
      term: "non consapevole",
      register: "comune",
      note: "Per l'uso aggettivale, sottolinea l'assenza di consapevolezza senza rimandi psicoanalitici diretti.",
    },
  ],

  antonyms: [
    {
      term: "coscienza",
      register: "comune",
      note: "La dimensione mentale vigilante e consapevole.",
    },
    {
      term: "consapevole",
      register: "comune",
      note: "Opposto di “inconscio” nel linguaggio quotidiano.",
    },
  ],

  relatedWords: ["coscienza", "rimozione", "subliminale", "bias-cognitivo"],

  sourceLinks: {},

  paroliereNote:
    "Parlare di inconscio significa ammettere che non siamo trasparenti a noi stessi: ciò che pensiamo di volere, di temere, di scegliere è attraversato da forze che non controlliamo del tutto. La psicoanalisi ha dato a questa intuizione un modello complesso, ma l'idea circola ormai nel linguaggio quotidiano: “mi è sfuggito”, “non so perché l'ho fatto”. Il lemma invita a non usarlo come alibi (“è colpa dell'inconscio”), bensì come chiave per leggere certe ripetizioni di vita che non si spiegano solo con la volontà consapevole.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "inconscio — ciò che agisce fuori dalla coscienza",
    description:
      "Che cos'è l'inconscio tra psicoanalisi, filosofia e uso quotidiano, tra desideri nascosti, rimozione e responsabilità.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
