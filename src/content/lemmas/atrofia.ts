// Il Paroliere — Lemma: atrofia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const atrofia: LemmaEntry = {
  lemma: "atrofia",
  slug: "atrofia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["medicina", "biologia", "psicologia", "critica culturale"],

  definition:
    "Riduzione del volume e della funzionalità di un organo, di un tessuto o di un " +
    "muscolo per mancato uso, malnutrizione o patologia. In senso figurato, è il " +
    "progressivo indebolimento e impoverimento di una facoltà, di una relazione, di " +
    "un’istituzione che non viene alimentata: l’atrofia non è una rottura improvvisa ma " +
    "un processo lento di prosciugamento.",

  shortDefinition:
    "Riduzione progressiva di volume e funzione per mancato uso o malnutrizione; in senso figurato, impoverimento lento di una facoltà o relazione.",

  etymology:
    "Dal greco atrophia, composto da a- privativo e trophé “nutrimento”. Letteralmente: " +
    "“assenza di nutrimento”. La stessa radice di “trofico” e “distrofia” (cattivo nutrimento).",

  examples: [
    "Il muscolo in ingessatura per sei settimane mostra un’atrofia visibile: senza stimolo meccanico, il corpo riassorbe ciò che non usa.",
    "L’atrofia delle relazioni di quartiere nelle città contemporanee non è colpa di nessuno in particolare: è il risultato di architetture e ritmi che non lasciano spazio all’incontro casuale.",
    "Certi talenti musicali vanno in atrofia senza pratica regolare: non scompaiono del tutto, ma richiedono anni per essere recuperati.",
    "L’atrofia cerebrale in alcune demenze non è l’unica causa del declino cognitivo: è spesso sia causa che effetto in un ciclo che si autoalimenta.",
  ],

  synonyms: [
    { term: "degenerazione", register: "tecnico", note: "Più ampio: qualsiasi deterioramento progressivo della struttura e funzione." },
    { term: "deperimento", register: "comune", note: "Più quotidiano: il perdere forza e vigore in modo visibile." },
  ],

  antonyms: [
    { term: "ipertrofia", register: "tecnico", note: "Il contrario clinico: aumento eccessivo del volume di un organo o muscolo." },
    { term: "tonicità", register: "tecnico", note: "Lo stato di buona tensione e funzionalità — ciò che l’atrofia erode." },
  ],

  relatedWords: ["ipotonia", "tonicita", "flosco", "elasticita"],

  paroliereNote:
    "L’atrofia è il lemma della trascuratezza — non della violenza, non del trauma, ma " +
    "del non-uso. È il modo in cui le cose muoiono lentamente quando non vengono " +
    "alimentate: relazioni, muscoli, lingue, istituzioni, talenti. C’è qualcosa di " +
    "pedagogicamente importante nell’atrofia: ci ricorda che le cose vive richiedono " +
    "manutenzione attiva, non solo l’assenza di danni.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "atrofia — significato in medicina, biologia e senso figurato",
    description: "Atrofia: dalla riduzione muscolare per mancato uso al prosciugamento lento di relazioni e facoltà. Tutto sull’assenza di nutrimento.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
