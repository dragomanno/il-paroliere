// Il Paroliere — Lemma: armonia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const armonia: LemmaEntry = {
  lemma: "armonia",
  slug: "armonia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune", "filosofico"],
  domains: ["musica", "estetica", "filosofia", "architettura"],

  definition:
    "In musica, la scienza e l’arte delle relazioni tra note simultanee — accordi, " +
    "progressioni, consonanze e dissonanze. In senso estetico più ampio, è la qualità " +
    "di un insieme in cui le parti si accordano senza conflitto percepibile, producendo " +
    "una sensazione di equilibrio e completezza. I pitagorici credevano che l’armonia " +
    "delle sfere — il suono che i pianeti producono nelle loro orbite — fosse il " +
    "fondamento matematico del cosmo.",

  shortDefinition:
    "Accordo piacevole tra le parti di un insieme; in musica, la relazione tra suoni simultanei.",

  etymology:
    "Dal greco harmonia “unione, accordo, giuntura”, da harmos “giuntura, articolazione”, " +
    "da ararein “adattare, unire”. L’armonia come ciò che tiene le cose giunte senza forzature.",

  examples: [
    "L’armonia funzionale nella musica tonale non è un ornamento: è il sistema che crea aspettativa (tensione) e soddisfazione (risoluzione) su cui si costruisce tutta la narrativa musicale occidentale.",
    "L’armonia di un paesaggio toscano — olivi, cipressi, colline — non è casuale: è il risultato di secoli di intervento umano che ha calibrato la proporzione tra coltivato e selvatico.",
    "Nelle relazioni umane, l’armonia non è assenza di conflitto: è la capacità di attraversare il conflitto senza rompere la struttura relazionale di fondo.",
    "I pitagorici scoprirono che le consonanze musicali corrispondono a rapporti numerici semplici: l’ottava è 2:1, la quinta è 3:2. L’armonia come matematica udibile.",
  ],

  synonyms: [
    { term: "accordo", register: "comune-musicale", note: "Più specifico in musica: la sovrapposizione simultanea di note; in senso figurato, il consenso." },
    { term: "equilibrio", register: "comune", note: "Più generico: lo stato di bilanciamento tra forze o elementi opposti." },
  ],

  antonyms: [
    { term: "dissonanza", register: "tecnico-comune", note: "Il suono o la relazione che crea tensione invece di risolverla; il contrario tecnico in musica." },
    { term: "caos", register: "comune", note: "L’assenza di qualunque principio ordinatore." },
  ],

  relatedWords: ["ritmo", "composizione", "proporzione", "dissonanza", "simmetria"],

  paroliereNote:
    "L’armonia ha avuto cattiva stampa nella modernità: troppo facile, troppo confortante, " +
    "troppo vicina al kitsch. Ma l’armonia difficile — quella che include la dissonanza " +
    "e la risolve, che attraversa la tensione e la porta a compimento — è una conquista, " +
    "non una resa. Bach non è meno interessante di Schönberg: è interessante in modo " +
    "diverso, e più difficile da comprendere in profondità.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "armonia — significato in musica, estetica e filosofia pitagorica",
    description: "Armonia: dall’accordo musicale alla qualità estetica dell’insieme, dalla matematica pitagorica all’equilibrio delle relazioni. Tutto su questo concetto fondamentale.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
