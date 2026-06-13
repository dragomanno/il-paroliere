// Il Paroliere — Lemma: composizione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const composizione: LemmaEntry = {
  lemma: "composizione",
  slug: "composizione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["musica", "pittura", "fotografia", "letteratura", "chimica"],

  definition:
    "Il modo in cui gli elementi di un’opera sono disposti, bilanciati e messi in " +
    "relazione tra loro per produrre un effetto coerente. Non è solo l’insieme delle " +
    "parti ma il principio che le organizza: una composizione riuscita ha un centro di " +
    "gravità visivo o sonoro, una gerarchia degli elementi, un equilibrio tra tensione e " +
    "risoluzione. In chimica, è la struttura molecolare di una sostanza.",

  shortDefinition:
    "Il principio che organizza gli elementi di un’opera in un tutto coerente; la struttura relazionale che dà senso alle parti.",

  etymology:
    "Dal latino compositio, da componere “mettere insieme, comporre”, da com- “insieme” " +
    "e ponere “mettere, collocare”. Stessa radice di “componente”, “composto”, “composito”.",

  examples: [
    "La composizione fotografica non si impara con le regole — il terzo, la linea d’orizzonte, i leading lines — ma capendo perché quelle regole funzionano e quando infrangerle.",
    "Nelle composizioni di Bach, la struttura contrappuntistica non è un esercizio formale: è il modo in cui voci indipendenti trovano un ordine comune senza perdere la propria identità.",
    "Una cattiva composizione pittorica non è necessariamente brutta: può essere intenzionalmente destabilizzante, come in certi lavori di Bacon dove il disagio compositivo è il punto.",
    "La composizione chimica di un materiale ne determina le proprietà fisiche: lo stesso elemento in configurazioni molecolari diverse produce sostanze con caratteristiche radicalmente differenti.",
  ],

  synonyms: [
    { term: "struttura", register: "tecnico-comune", note: "Più astratto: il principio organizzativo senza l’implicazione estetica." },
    { term: "forma", register: "tecnico-estetico", note: "In senso musicale e visivo: la categoria formale (sonata, fuga, trittico) che governa la composizione." },
  ],

  antonyms: [
    { term: "caos", register: "comune", note: "L’assenza di organizzazione — gli stessi elementi senza principio relazionale." },
    { term: "frammentazione", register: "tecnico", note: "Le parti che non si tengono insieme, che resistono alla composizione." },
  ],

  relatedWords: ["ritmo", "armonia", "proporzione", "simmetria", "asimmetria", "contrasto-estetico"],

  paroliereNote:
    "Composizione è uno di quei lemmi che non si può insegnare con una definizione: si " +
    "capisce guardando, ascoltando, leggendo. È il risultato di una serie di scelte che " +
    "producono l’effetto di inevitabilità — come se quell’opera non avrebbe potuto essere " +
    "organizzata diversamente. Le composizioni riuscite nascondono il lavoro dietro di sé.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "composizione — significato in musica, pittura, fotografia e letteratura",
    description: "Composizione: dal principio organizzativo di un’opera d’arte alla struttura molecolare in chimica. Come gli elementi diventano un tutto.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
