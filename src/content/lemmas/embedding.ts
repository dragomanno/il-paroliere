// Il Paroliere — Lemma: embedding
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const embedding: LemmaEntry = {
  lemma: "embedding",
  slug: "embedding",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Rappresentazione di una parola, di una frase, di un'immagine o di un altro dato come una lista ordinata di numeri, calcolata in modo che elementi di significato simile abbiano numeri vicini. Gli embedding permettono ai sistemi di intelligenza artificiale di confrontare significati con operazioni matematiche: su di essi si reggono la ricerca semantica, i sistemi di raccomandazione e la RAG.",
  shortDefinition: "Rappresentazione numerica di un dato in cui elementi di significato simile risultano vicini; base della ricerca semantica.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "linguistica computazionale",
    "matematica",
  ],
  etymology: "Dall'inglese embedding «incassatura, inserimento», da to embed «incastonare, inserire in profondità». Il termine viene dalla matematica, dove indica l'inserimento di una struttura dentro un'altra che ne conserva le proprietà, e dove l'italiano dice immersione. Nel trattamento automatico del linguaggio si diffonde con i word embedding, resi popolari da word2vec nel 2013.",
  examples: [
    "Nello spazio degli embedding «gatto» e «felino» finiscono vicini, mentre «gatto» e «catasto» restano lontani nonostante le lettere in comune.",
    "Per la ricerca interna abbiamo calcolato l'embedding di ogni scheda e lo confrontiamo con quello della domanda.",
    "Gli embedding ereditano i pregiudizi dei testi da cui sono calcolati: se una professione compare sempre al maschile, anche i numeri lo ricordano.",
  ],
  synonyms: [
    {
      term: "vettore semantico",
      register: "tecnico",
      context: "il risultato numerico vero e proprio",
      note: "Embedding indica anche la tecnica che lo produce.",
    },
    {
      term: "rappresentazione vettoriale",
      register: "tecnico",
      context: "formula descrittiva italiana",
    },
    {
      term: "immersione",
      register: "tecnico",
      context: "solo nel senso matematico",
      note: "Nell'intelligenza artificiale non si usa.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "vettore-semantico",
    "rag",
    "semantica",
    "modello-linguistico",
    "token",
    "tokenizzazione",
    "knowledge-graph",
    "rete-neurale",
    "deep-learning",
  ],
  sourceLinks: {},
  paroliereNote: "Embedding e → vettore semantico si usano spesso come sinonimi, ma lo sguardo è diverso: embedding mette l'accento sull'operazione, l'inserimento di un significato in uno spazio numerico; vettore semantico sul punto che ne risulta. L'idea di fondo è antica e linguistica: il significato di una parola si capisce dalle parole che la accompagnano, come sosteneva la semantica distribuzionale degli anni Cinquanta (→ semantica). Il calcolo moderno l'ha resa misurabile.",
  seo: {
    title: "Embedding — significato nell'IA e in matematica | Il Paroliere",
    description: "Che cos'è un embedding: la rappresentazione numerica che avvicina dati di significato simile. Origine matematica, usi, differenza con vettore semantico.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
