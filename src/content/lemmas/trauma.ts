// Il Paroliere — Lemma: trauma
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const trauma: LemmaEntry = {
  lemma: "trauma",
  slug: "trauma",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "psichiatria", "medicina", "sociologia", "diritto"],

  definition:
    "Evento o serie di eventi che superano le normali capacità di sopportazione di una persona o di una comunità, lasciando conseguenze durature sul corpo, sulla psiche o sui legami sociali. In medicina il trauma indica un danno prodotto da una forza esterna — un urto, una ferita, un incidente — mentre in psicologia e psichiatria il termine si sposta sull'impatto emotivo e relazionale di ciò che è accaduto, che può continuare a farsi sentire sotto forma di ricordi intrusivi, anestesia affettiva, ipervigilanza, difficoltà di fidarsi. Nel linguaggio quotidiano la parola viene usata anche in modo più leggero, per disagi minori, rischiando di diluire l'intensità del suo significato clinico e storico.",

  shortDefinition:
    "Evento che eccede le capacità abituali di tenuta di una persona o di una comunità, lasciando ferite durature nel corpo, nella psiche o nei legami.",

  etymology:
    "Dal greco traûma, “ferita, lesione”, passato al latino trauma con lo stesso significato. L'estensione all'ambito psichico è relativamente recente e si consolida tra Ottocento e Novecento, con lo sviluppo della psicoanalisi e delle osservazioni sui soldati reduci dalle guerre, fino alla nozione contemporanea di disturbo post-traumatico.",

  examples: [
    "L'incidente è stato un trauma non solo fisico, ma anche emotivo: per mesi non riusciva più a salire in macchina.",
    "Per molte persone il trauma non è un singolo evento, bensì una ripetizione quotidiana di violenza o umiliazione.",
    "Il paese fa ancora fatica a riconoscere come trauma collettivo quella stagione di terrorismo e di stragi.",
    "Non tutti reagiscono allo stesso modo allo stesso trauma, però questo non rende l'evento meno grave.",
    "Scherzare su tutto può nascondere un trauma non elaborato, che trova sfogo solo nella battuta.",
  ],

  synonyms: [
    {
      term: "ferita psichica",
      register: "saggistico",
      note: "Mette l'accento sulla dimensione interiore più che su quella fisica.",
    },
    {
      term: "shock traumatico",
      register: "tecnico",
      note: "Evidenzia l'irruzione improvvisa dell'evento e le sue prime reazioni.",
    },
  ],

  antonyms: [
    {
      term: "tutela",
      register: "giuridico",
      note: "Insieme di misure che mirano a prevenire traumi o a limitarne l'impatto.",
    },
    {
      term: "resilienza",
      register: "psicologico",
      note: "Capacità di attraversare il trauma e ritrovare una forma di equilibrio, pur trasformata.",
    },
  ],

  relatedWords: ["rimozione", "memoria", "oblio", "amnesia"],

  sourceLinks: {},

  paroliereNote:
    "Il trauma non coincide con il dolore in sé, ma con il modo in cui un dolore rompe le mappe con cui leggevamo il mondo: ciò che prima sembrava sicuro non lo è più, ciò che prima era pensabile diventa indicibile. Per questo non basta “passarci sopra” né dire che il tempo guarirà tutto; da solo, il tempo può trasformare il trauma in un nodo muto che continua a stringere. Il lemma ricorda che nominare un'esperienza come traumatica non è richiedere indulgenza, ma chiedere strumenti adeguati per non essere costretti a riviverla all'infinito.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "trauma — quando l'esperienza lascia ferite profonde",
    description:
      "Che cos'è il trauma tra medicina, psicologia e vita collettiva, dalle ferite fisiche ai segni invisibili che restano nella memoria.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
