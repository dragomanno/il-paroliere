// Il Paroliere — Lemma: doppiezza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const doppiezza: LemmaEntry = {
  lemma: "doppiezza",
  slug: "doppiezza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale"],
  domains: ["etica", "psicologia", "politica"],

  definition:
    "Qualità di chi si comporta in modo diverso a seconda del contesto o " +
    "dell’interlocutore, dicendo una cosa e facendone un’altra, o mostrando una " +
    "faccia in pubblico e un’altra in privato — non per adattamento sociale normale " +
    "ma per calcolo strategico o per mancanza di una coerenza interiore autentica. " +
    "La doppiezza non è sempre consapevole come la malafede: può essere un tratto " +
    "caratteriale consolidato che chi lo ha fatica a riconoscere in sé stesso.",

  shortDefinition:
    "Comportamento che varia strategicamente tra pubblico e privato, o tra " +
    "interlocutori diversi, con assenza di coerenza autentica tra ciò che si mostra " +
    "e ciò che si è.",

  etymology:
    "Da «doppio» (dal latino duplus, da duo «due»), con il suffisso -ezza che indica " +
    "qualità astratta. Chi ha doppiezza è letteralmente «doppio» — ha due facce, " +
    "due registri, due versioni di sé.",

  examples: [
    "La doppiezza di un negoziatore si rivela quando i termini concordati in privato non coincidono con quelli annunciati pubblicamente.",
    "In politica, la doppiezza è quasi istituzionalizzata: si dice una cosa agli elettori e un’altra agli alleati, una cosa in campagna elettorale e un’altra al governo.",
    "La doppiezza non richiede necessariamente cattive intenzioni: a volte è solo il risultato di non aver mai fatto il lavoro di capire cosa si vuole davvero.",
    "Riconoscere la doppiezza in se stessi è difficile: spesso si racconta come “adattamento al contesto”, che può essere vero — ma può anche essere la razionalizzazione di una coerenza che non c’è.",
  ],

  synonyms: [
    { term: "ipocrisia", register: "comune-formale", note: "Più teatrale e pubblica; la doppiezza è più relazionale e privata." },
    { term: "falsità", register: "comune", note: "Più ampio: include la menzogna diretta; la doppiezza è specifica alla scissione tra versioni di sé." },
  ],

  antonyms: [
    { term: "integrità", register: "etico-comune", note: "La coerenza strutturale tra ciò che si dice, si pensa e si fa in ogni contesto." },
    { term: "autenticità", register: "psicologico-comune", note: "L’essere la stessa persona indipendentemente da chi osserva." },
  ],

  relatedWords: ["malafede", "ipocrisia", "opportunismo", "lealta", "integrita"],
  sourceLinks: {},

  paroliereNote:
    "La doppiezza è il vizio che l’italiano esprime meglio di qualsiasi altra lingua " +
    "con la metafora del «doppio» — avere due facce, due registri, due versioni. " +
    "Non è un caso che la sua frequenza nel lessico politico italiano sia alta: in un " +
    "sistema in cui le coalizioni si formano e si disfano rapidamente e in cui il " +
    "trasformismo ha una lunga storia, la doppiezza non è solo un vizio individuale, " +
    "è quasi una competenza sistemica. Il problema è che, consolidata come norma, " +
    "rende impossibile la fiducia.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "doppiezza — avere due facce tra vizio personale e norma sistemica",
    description: "Che cos’è la doppiezza: definizione etica, differenza da ipocrisia e falsità, e perché in certi sistemi politici diventa quasi una competenza.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
