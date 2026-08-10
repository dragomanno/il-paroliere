// Il Paroliere — Lemma: euristica
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const euristica: LemmaEntry = {
  lemma: "euristica",
  slug: "euristica",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "divulgativo"],
  domains: ["psicologia-cognitiva", "informatica", "epistemologia", "economia-comportamentale"],

  definition:
    "Procedura di ricerca o di soluzione di problemi che non garantisce un risultato esatto o dimostrabile, ma consente di arrivare rapidamente a una risposta accettabile risparmiando tempo e risorse cognitive: si contrappone al procedimento *algoritmico*, esaustivo e rigoroso ma spesso troppo costoso da applicare in condizioni reali. In psicologia cognitiva, a partire dagli studi di Amos Tversky e Daniel Kahneman, le euristiche indicano le scorciatoie mentali automatiche con cui il cervello semplifica giudizi complessi — come l'euristica della disponibilità, che ci fa stimare più probabile ciò che ricordiamo con più facilità — e che possono generare i → bias cognitivi quando applicate fuori dal contesto per cui sono utili. In informatica, un'euristica è un metodo di ricerca o ottimizzazione che trova soluzioni buone, anche se non necessariamente ottimali, in tempi computazionalmente accettabili.",

  shortDefinition:
    "Procedura di ricerca rapida e non esaustiva, che offre una soluzione accettabile senza garanzia di esattezza; scorciatoia mentale o computazionale.",

  etymology:
    "Dal greco *heuretikós*, “atto a scoprire, atto a trovare”, derivato dal verbo *heurískō*, “trovo, scopro” — lo stesso verbo che, alla forma di perfetto in prima persona *heúrēka* (\"ho trovato!\"), è all'origine dell'esclamazione *eureka*, tradizionalmente attribuita ad Archimede nel momento in cui, immergendosi nella vasca da bagno, intuì il principio dello spostamento dei fluidi. Il legame etimologico non è aneddotico: sia euristica sia eureka condividono l'idea di scoperta improvvisa, non pianificata passo per passo — l'euristica, appunto, è ciò che porta a trovare una soluzione senza percorrere l'intero cammino dimostrativo.",

  examples: [
    "Non avendo tempo di leggere ogni recensione, ha applicato un'euristica semplice: comprare il prodotto con più stelle, ignorando quanto fossero numerose le recensioni.",
    "In scacchi i motori usano euristiche di valutazione della posizione perché calcolare ogni mossa possibile fino alla fine della partita richiederebbe un tempo computazionale proibitivo.",
    "L'euristica della rappresentatività ci porta a giudicare probabile ciò che assomiglia a uno stereotipo mentale, anche quando le statistiche dicono il contrario.",
    "Da bravo insegnante usava un'euristica pedagogica: partire sempre da un esempio concreto prima di introdurre la regola generale.",
  ],

  synonyms: [
    { term: "scorciatoia mentale", register: "divulgativo", note: "Resa colloquiale del concetto psicologico, meno precisa ma più immediata." },
    { term: "regola pratica", register: "comune", note: "Traduzione informale dell'inglese rule of thumb, spesso usata come quasi sinonimo in ambito divulgativo." },
    { term: "metodo approssimativo", register: "tecnico", note: "Sottolinea l'assenza di garanzia di esattezza, tipica dell'approccio euristico in informatica." },
  ],

  antonyms: [
    { term: "algoritmo", register: "tecnico", note: "Procedimento esatto e sistematico che garantisce, se applicato correttamente, il risultato corretto." },
    { term: "calcolo esaustivo", register: "tecnico", note: "Esplorazione completa di tutte le possibilità, senza scorciatoie né approssimazioni." },
  ],

  relatedWords: ["bias-cognitivo", "inferenza", "pensiero-laterale"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/euristico",
  },

  paroliereNote:
    "L'euristica merita di essere difesa dalla cattiva fama che si porta dietro come parente povera dell'algoritmo: non è un ripiego per chi non sa fare i conti giusti, è la strategia cognitiva che ha permesso alla nostra specie di decidere in tempo utile in un mondo che raramente concede il lusso del calcolo esaustivo. Il problema non è usare euristiche — è farlo senza saperlo, scambiando una scorciatoia utile per una verità accertata. Chi conosce le proprie euristiche può ancora usarle, ma con la prudenza di chi sa di stare correndo, non camminando.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "euristica — significato, dal greco eureka alla psicologia cognitiva",
    description:
      "Che cos'è un'euristica tra psicologia cognitiva e informatica, il legame etimologico con eureka e Archimede, e la differenza con l'algoritmo.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
