// Il Paroliere — Lemma: kairos
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const kairos: LemmaEntry = {
  lemma: "kairos",
  slug: "kairos",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico-filosofico", "colto"],
  domains: ["filosofia", "retorica", "linguistica"],

  definition:
    "Nel pensiero greco antico, il momento opportuno: l'istante qualitativamente " +
    "giusto per agire, parlare o decidere, distinto dal tempo quantitativo e " +
    "indifferenziato di → kronos. Kairos non si misura in minuti ma si " +
    "riconosce — o si manca — perché è irripetibile: la stessa parola detta " +
    "un istante prima o un istante dopo il kairos giusto produce un effetto " +
    "completamente diverso, spesso opposto. Il concetto nasce in ambito " +
    "medico e retorico: per Ippocrate è il momento preciso in cui una cura va " +
    "somministrata perché sia efficace; per i retori greci è il momento in cui " +
    "un argomento, pronunciato proprio allora e non altrimenti, ottiene la " +
    "massima presa sull'uditorio. Nell'uso contemporaneo, fuori dalla " +
    "filosofia tecnica, 'cogliere il kairos' indica la capacità — spesso " +
    "presentata come dote quasi intuitiva — di riconoscere l'occasione giusta " +
    "prima che sfumi.",

  shortDefinition:
    "Il momento opportuno e irripetibile per agire o parlare, distinto dal " +
    "tempo quantitativo di → kronos: non si misura, si coglie o si manca.",

  etymology:
    "Dal greco kairós (καιρός), il cui significato originario nella lingua " +
    "arcaica è legato all'idea di 'punto giusto', 'misura adatta' — forse in " +
    "origine un termine tecnico della tessitura, riferito allo spazio esatto " +
    "in cui la spola doveva passare nell'ordito, o dell'arciere, riferito al " +
    "punto vulnerabile del bersaglio da colpire. Da questa origine concreta " +
    "deriva l'estensione filosofica: kairos come 'apertura' temporale precisa, " +
    "stretta e fuggevole, che va colta esattamente al momento giusto o va " +
    "persa per sempre. Nell'iconografia greca posteriore, Kairos venne " +
    "personificato come un giovane alato con un ciuffo di capelli solo sulla " +
    "fronte e la nuca calva: lo si può afferrare solo mentre arriva, mai " +
    "dopo che è passato.",

  examples: [
    "Non era il momento di kronos a contare — l'orologio segnava le tre come " +
      "un'ora qualunque — ma il kairos: proprio in quel silenzio la proposta " +
      "avrebbe trovato ascolto, prima o dopo no.",
    "Nella retorica classica, saper riconoscere il kairos di un discorso — " +
      "quando introdurre l'argomento decisivo, quando invece attendere — " +
      "contava quanto la qualità degli argomenti stessi.",
    "L'investitore raccontava di aver aspettato mesi il kairos giusto per " +
      "vendere: non un calcolo preciso, più un istinto costruito su anni di " +
      "osservazione del mercato.",
    "\"Il tempismo è tutto\", si dice spesso in italiano corrente — una " +
      "traduzione involontaria e imprecisa dell'idea antica di kairos, che " +
      "però perde la sfumatura dell'irripetibilità.",
  ],

  synonyms: [
    {
      term: "momento opportuno",
      register: "comune",
      context: "resa italiana corrente, meno tecnica e priva della sfumatura filosofica di irripetibilità",
    },
    {
      term: "tempismo",
      register: "comune",
      context: "più orientato alla capacità pratica di cogliere il momento che al momento stesso in sé",
    },
    {
      term: "occasione",
      register: "comune",
      context: "termine più generico, non necessariamente legato alla dimensione temporale stretta di kairos",
    },
  ],

  antonyms: [
    {
      term: "kronos",
      register: "tecnico-filosofico",
      context: "il tempo quantitativo e indifferenziato, opposto strutturale nella coppia concettuale greca",
    },
    {
      term: "intempestività",
      register: "formale",
      context: "l'agire fuori tempo, mancando sistematicamente il momento giusto",
    },
  ],

  relatedWords: [
    "kronos",
    "occasione",
    "tempismo",
    "opportunità",
    "retorica",
    "aion",
  ],

  sourceLinks: {
    wiktionary: "https://en.wiktionary.org/wiki/καιρός",
  },

  paroliereNote:
    "Kairos è forse il termine greco più difficile da rendere in una sola " +
    "parola italiana proprio perché descrive qualcosa che l'italiano corrente " +
    "smembra in più concetti separati: tempismo, occasione, opportunità. " +
    "Nessuno di questi, da solo, cattura l'idea centrale che il momento non " +
    "esiste prima che qualcuno lo colga — non è una finestra che resta aperta " +
    "in attesa, ma un'apertura che si crea e si chiude nell'atto stesso del " +
    "riconoscerla o mancarla. È per questo che la statua di Kairos alato, " +
    "afferrabile solo per il ciuffo frontale, resta l'immagine più efficace " +
    "del concetto: dopo che è passato, non c'è più nulla a cui aggrapparsi. " +
    "Nella pratica editoriale e argomentativa, distinguere kronos da kairos è " +
    "utile ogni volta che si discute di → transitorietà: non tutto ciò che " +
    "passa nel tempo di kronos ha lo stesso peso — alcuni istanti pesano " +
    "quanto anni, altri passano senza lasciare → vestigio alcuno.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Kairos — il momento opportuno nella filosofia greca | Il Paroliere",
    description:
      "Che cos'è kairos: il tempo qualitativo e irripetibile dell'occasione " +
      "giusta, differenza da kronos, origine retorica e uso contemporaneo.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
