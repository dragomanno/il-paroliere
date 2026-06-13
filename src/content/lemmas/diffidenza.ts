// Il Paroliere — Lemma: diffidenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const diffidenza: LemmaEntry = {
  lemma: "diffidenza",
  slug: "diffidenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune"],
  domains: ["psicologia", "relazioni", "società", "politica"],

  definition:
    "Atteggiamento di sospetto o di prudente distanza verso persone, situazioni o informazioni, basato sulla sensazione che ci sia qualcosa di non detto o di potenzialmente dannoso. Nella vita relazionale la diffidenza può essere una difesa appresa dopo ferite o delusioni, che protegge dal farsi coinvolgere troppo in fretta, ma rischia di trasformarsi in chiusura preventiva anche quando non ce n'è bisogno; in ambito sociale e politico indica una sfiducia generalizzata verso istituzioni, media, gruppi percepiti come “altro”, che può funzionare da anticorpo contro la credulità, oppure alimentare complotti e isolamento. Il confine tra sana cautela e diffidenza cronica è spesso sottile.",

  shortDefinition:
    "Sospetto prudente verso persone o situazioni, che protegge dagli inganni, ma può chiudere in una sfiducia preventiva.",

  etymology:
    "Dal latino diffidentia, “sfiducia, mancanza di fiducia”, derivato di diffīdere “non fidarsi, non avere fiducia”, composto da dis-/dif- con valore di separazione o negazione e fidere “fidarsi, avere fede”, della stessa famiglia di fides “fiducia”. In italiano il termine si stabilizza nel significato di atteggiamento sospettoso o poco incline a concedere fiducia.",

  examples: [
    "Dopo quella truffa ha sviluppato una diffidenza istintiva verso ogni proposta troppo allettante.",
    "Un po' di diffidenza verso le promesse elettorali è sana, però può diventare cinismo se impedisce di vedere qualsiasi possibilità di cambiamento.",
    "La sua diffidenza non era odio, ma paura di esporsi di nuovo.",
    "La diffidenza reciproca tra gruppi sociali alimenta stereotipi che poi sembrano confermare i timori di partenza.",
    "In rete, la diffidenza verso le fonti ufficiali ha aperto spazio a informazioni alternative, non sempre più affidabili.",
  ],

  synonyms: [
    {
      term: "sospetto",
      register: "comune",
      note: "Più diretto, può avere tono accusatorio.",
    },
    {
      term: "sfiducia",
      register: "comune",
      note: "Indica spesso una posizione stabile, più che un'attitudine momentanea.",
    },
    {
      term: "cautela",
      register: "comune",
      note: "Sfumatura meno emotiva, più vicina alla prudenza razionale.",
    },
  ],

  antonyms: [
    {
      term: "fiducia",
      register: "comune",
      note: "Apertura di credito verso l'altro o verso un'istituzione.",
    },
    {
      term: "ingenuità",
      register: "comune",
      note: "Fiducia eccessiva, priva di senso del rischio.",
    },
  ],

  relatedWords: ["sospetto", "dubbio", "cinismo", "preconcetto"],

  sourceLinks: {},

  paroliereNote:
    "La diffidenza nasce spesso da una ferita: qualcuno ha tradito una fiducia e la mente decide che è più sicuro tenere le porte socchiuse. Può essere una risorsa, perché evita di consegnarsi a chiunque prometta soluzioni facili, ma può anche costruire muri così spessi da impedire ogni legame. Nelle democrazie contemporanee, un certo grado di diffidenza verso il potere è considerato salutare; quando però diventa riflesso automatico contro tutto e tutti, il rischio è consegnarsi proprio a chi vive di sfiducia generalizzata. Il lemma invita a chiedersi non solo di chi diffidiamo, ma anche da che cosa stiamo cercando di proteggerci.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "diffidenza — tra prudenza e chiusura",
    description:
      "Che cos'è la diffidenza tra ferite, prudenza e sfiducia sociale, dal sospetto che protegge ai muri che impediscono ogni legame.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
