// Il Paroliere — Lemma: condensazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const condensazione: LemmaEntry = {
  lemma: "condensazione",
  slug: "condensazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "1. In fisica, passaggio di una sostanza dallo stato aeriforme a quello liquido, come quando il vapore acqueo si trasforma in goccioline. Nell'atmosfera avviene quando l'aria si raffredda fino alla saturazione e le molecole d'acqua si raccolgono attorno a minuscole particelle sospese; libera calore, e per questo alimenta nubi e temporali. 2. In chimica, reazione in cui due molecole si uniscono liberandone una più piccola, spesso acqua. 3. Per estensione, riduzione di un testo, di un'idea o di un racconto all'essenziale.",
  shortDefinition: "Passaggio dallo stato di vapore a quello liquido, che forma nubi, nebbia e rugiada; per estensione, sintesi di un contenuto.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "fisica",
    "meteorologia",
    "chimica",
  ],
  etymology: "Dal latino tardo condensatio, -onis, da condensare «rendere denso, stringere», composto di con- e densus «fitto, compatto».",
  examples: [
    "La mattina d'inverno la condensazione appanna i vetri della cucina prima ancora che si accenda il caffè.",
    "Le nubi si formano per condensazione del vapore attorno a granelli di polvere e di sale marino.",
    "Quella pagina è una condensazione felice di tutto il saggio: chi ha fretta può leggere solo lei.",
  ],
  synonyms: [
    {
      term: "liquefazione",
      register: "tecnico-scientifico",
      context: "termine più generale, usato anche per i gas portati a liquido con la pressione",
    },
    {
      term: "sintesi",
      register: "comune",
      context: "nel senso esteso di riduzione all'essenziale",
    },
  ],
  antonyms: [
    {
      term: "evaporazione",
      register: "tecnico-scientifico",
      context: "passaggio inverso, dal liquido al vapore",
    },
    {
      term: "vaporizzazione",
      register: "tecnico-scientifico",
      context: "passaggio inverso in senso generale",
    },
  ],
  relatedWords: [
    "evaporazione",
    "saturazione",
    "punto-di-rugiada",
    "rugiada",
    "umidita-relativa",
    "nebbia",
    "precipitazione",
    "termodinamica",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/condensazione/",
    wiktionary: "https://it.wiktionary.org/wiki/condensazione",
  },
  paroliereNote: "La condensazione ha bisogno di un appiglio: in aria perfettamente pulita il vapore potrebbe restare tale anche oltre la → saturazione, e sono polveri, pollini e sale marino, i nuclei di condensazione, a far nascere le goccioline. È anche un fenomeno caldo, il che sorprende: restituisce all'aria l'energia spesa per l'→ evaporazione, ed è il carburante di ogni → temporale. Il senso esteso è elegante e un po' letterario; nel parlato si preferisce condensare, il verbo.",
  seo: {
    title: "Condensazione — significato, nubi ed esempi | Il Paroliere",
    description: "Che cos'è la condensazione: il passaggio dal vapore al liquido che forma nubi, nebbia e rugiada. Nuclei di condensazione, senso esteso ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
