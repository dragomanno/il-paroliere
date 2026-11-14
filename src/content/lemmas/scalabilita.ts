// Il Paroliere — Lemma: scalabilità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const scalabilita: LemmaEntry = {
  lemma: "scalabilità",
  slug: "scalabilita",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "Capacità di un sistema, di un'organizzazione o di un modello di business di crescere in volume, utenti o fatturato senza che costi e complessità aumentino nella stessa misura. Nata in informatica per i software e le infrastrutture che reggono carichi crescenti, la parola è passata al linguaggio d'impresa, dove indica la possibilità di replicare e allargare un'attività in modo efficiente.",
  shortDefinition: "Capacità di un sistema o di un'impresa di crescere in volume senza che costi e complessità crescano nella stessa misura.",
  register: [
    "tecnico",
    "professionale",
  ],
  domains: [
    "informatica",
    "economia",
    "management",
  ],
  etymology: "Derivato di scalabile, calco dell'inglese scalable. In inglese la parola significava dal Cinquecento «che si può scalare, arrampicabile»; il senso di «che si può ridurre o ampliare in scala» è del Novecento, e quello informatico si afferma negli ultimi decenni del secolo. In italiano scalare ha già due sensi opposti, salire e detrarre: scalabilità li ha assorbiti entrambi, perché un sistema scalabile può crescere ma anche ridursi senza rompersi.",
  examples: [
    "Il gestionale andava bene con dieci clienti, ma con mille si bloccava: nessuno ne aveva verificato la scalabilità.",
    "La scalabilità di una piattaforma digitale è alta: servire un utente in più costa quasi nulla.",
    "Una bottega artigiana ha poca scalabilità, e non è un difetto: il valore sta proprio nel lavoro che non si moltiplica.",
  ],
  synonyms: [
    {
      term: "espandibilità",
      register: "tecnico",
      context: "in informatica, la possibilità di aggiungere risorse",
    },
    {
      term: "replicabilità",
      register: "tecnico",
      context: "nell'impresa, la possibilità di ripetere un modello altrove",
      note: "Un modello replicabile non è per forza scalabile: si può replicare anche a costi crescenti.",
    },
  ],
  antonyms: [
    {
      term: "rigidità",
      register: "comune",
    },
    {
      term: "non scalabilità",
      register: "tecnico",
    },
  ],
  relatedWords: [
    "startup",
    "efficienza",
    "lean",
    "agile",
    "investimento",
    "rendimento",
    "automazione-cognitiva",
    "saturazione",
    "crescita",
  ],
  sourceLinks: {},
  paroliereNote: "Scalabilità è la parola chiave di molte presentazioni a investitori, e spesso funziona come un giudizio di valore: scalabile è bello, non scalabile è piccolo. Conviene ridarle il suo senso tecnico. Un sistema è scalabile quando cresce senza che costi e complessità crescano allo stesso ritmo; un software si presta molto, un ristorante stellato molto meno. Questo non dice nulla sulla qualità dell'attività, ma solo sul suo modo di crescere. Molte imprese italiane eccellenti sono poco scalabili per natura, e la loro forza sta proprio lì. Quando la domanda supera ciò che un sistema riesce a reggere, si arriva alla → saturazione.",
  seo: {
    title: "Scalabilità — significato in informatica e nell'impresa | Il Paroliere",
    description: "Che cos'è la scalabilità: crescere in volume senza che costi e complessità crescano allo stesso ritmo. Origine informatica, uso d'impresa e replicabilità.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
