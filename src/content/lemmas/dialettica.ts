// Il Paroliere — Lemma: dialettica
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dialettica: LemmaEntry = {
  lemma: "dialettica",
  slug: "dialettica",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "saggistico", "comune"],
  domains: ["filosofia", "logica", "retorica", "politica", "critica"],

  definition:
    "Nel pensiero filosofico, arte o metodo di discutere mettendo in gioco tesi opposte, per chiarirne i presupposti, far emergere contraddizioni e avvicinarsi a una comprensione più ricca di un problema. In Platone la dialettica è il dialogo che, attraversando domande e risposte, mira a cogliere le idee al di là delle opinioni mutevoli; in Hegel diventa il movimento interno della realtà e del pensiero, che procede per contraddizioni e superamenti; nel linguaggio marxista indica il conflitto tra forze storiche contrapposte. Nell'uso contemporaneo, fuori dall'accademia, “dialettica” può significare sia capacità di argomentare con finezza, sia gioco retorico visto con sospetto.",

  shortDefinition:
    "Arte e metodo di pensare attraverso il confronto tra posizioni opposte, per far emergere contraddizioni e arrivare a un livello più profondo di comprensione.",

  etymology:
    "Dal latino tardo dialectĭca, a sua volta dal greco dialektikḗ (tékhnē), “arte del dialogo e della discussione”, da diá “attraverso” e légein “parlare, raccogliere”. In origine indicava la tecnica del discutere correttamente; la storia della filosofia ne ha moltiplicato i significati, dal metodo socratico al movimento della realtà in chiave idealistica.",

  examples: [
    "Per Platone, la vera filosofia è dialettica, perché procede per domande che attraversano e mettono alla prova le risposte.",
    "Nel linguaggio politico, si parla spesso di “dialettica tra maggioranza e opposizione”, anche quando il confronto è più teatrale che argomentativo.",
    "La dialettica hegeliana descrive un pensiero che non fugge la contraddizione, ma la attraversa per superarla su un piano diverso.",
    "Accusare qualcuno di “pura dialettica” significa sospettare che usi le parole per spostare il problema, non per chiarirlo.",
    "Una buona dialettica non consiste nel vincere l'avversario, bensì nel lasciare la questione in uno stato più lucido di prima.",
  ],

  synonyms: [
    {
      term: "arte del dialogo",
      register: "saggistico",
      note: "Riprende il nucleo classico socratico-platonico.",
    },
    {
      term: "confronto argomentativo",
      register: "saggistico",
      note: "Rende l'idea di discussione strutturata, senza carico metafisico.",
    },
  ],

  antonyms: [
    {
      term: "monologo dogmatico",
      register: "saggistico",
      note: "Discorso che non tollera obiezioni né confronto.",
    },
    {
      term: "pensiero lineare immutato",
      register: "filosofico-divulgativo",
      note: "Immagine opposta all'idea di sviluppo per contraddizioni.",
    },
  ],

  relatedWords: ["filosofia", "idee-platoniche", "dubbio", "retorica"],

  sourceLinks: {},

  paroliereNote:
    "La dialettica mette in scena un paradosso utile: per avvicinarsi alla verità bisogna accettare il conflitto, non evitarlo. Nel dibattito pubblico, però, la parola rischia di ridursi a “lite ben parlata” o a etichetta per discussioni infinite che non cambiano niente. Il lemma invita a recuperare un senso più esigente: la dialettica non è dire sempre il contrario per principio, ma prendersi sul serio le obiezioni, fino a lasciare che cambino la forma della domanda iniziale. Dove manca dialettica, il dissenso si sfoga in sfiducia o in insulti; dove c'è solo dialettica senza decisione, tutto resta all'infinito allo stato di bozza.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "dialettica — pensare attraverso il conflitto delle idee",
    description:
      "Che cos'è la dialettica tra Platone, Hegel e linguaggio politico, dal dialogo socratico al confronto che attraversa le contraddizioni invece di negarle.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
