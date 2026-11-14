// Il Paroliere — Lemma: topic cluster
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const topicCluster: LemmaEntry = {
  lemma: "topic cluster",
  slug: "topic-cluster",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Gruppo di pagine dello stesso sito dedicate a un unico argomento e collegate fra loro: una pagina principale, detta pillar page, tratta il tema in modo ampio, mentre le pagine satellite ne approfondiscono ciascuna un aspetto e rimandano alla principale. Il modello serve a mostrare, a chi legge e ai motori di ricerca, che il sito copre un argomento in modo organico.",
  shortDefinition: "Gruppo di pagine collegate attorno a un argomento: una pagina principale ampia e varie pagine che ne approfondiscono gli aspetti.",
  register: [
    "tecnico",
  ],
  domains: [
    "SEO",
    "marketing digitale",
  ],
  etymology: "Dall'inglese topic «argomento», che risale al greco tà topiká, i «luoghi» dell'argomentazione di Aristotele, e cluster «grappolo, gruppo compatto», di origine germanica. Il modello è stato formalizzato e reso popolare da HubSpot nel 2017.",
  examples: [
    "Il blog della cantina è stato riorganizzato in topic cluster: una guida generale sul Chianti e dieci articoli su vitigni, annate e abbinamenti.",
    "Senza link interni un topic cluster è solo un elenco di articoli sullo stesso tema.",
    "Prima di scrivere il ventesimo articolo sulla stessa domanda, conviene chiedersi a quale topic cluster appartiene e che cosa aggiunge.",
  ],
  synonyms: [
    {
      term: "cluster tematico",
      register: "tecnico",
      context: "adattamento italiano parziale, frequente nei testi divulgativi",
    },
    {
      term: "modello pillar-cluster",
      register: "tecnico",
      context: "nome del metodo",
    },
    {
      term: "silo",
      register: "tecnico",
      context: "architettura parente",
      note: "Più rigida: il silo separa le sezioni del sito, il cluster punta sui collegamenti.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "keyword",
    "search-intent",
    "seo",
    "semantica",
    "ranking",
    "posizionamento",
    "autorevolezza",
    "e-e-a-t",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/cluster/",
    wiktionary: "https://it.wiktionary.org/wiki/cluster",
  },
  paroliereNote: "La forma inglese domina e l'adattamento cluster tematico fatica a imporsi; grappolo, che sarebbe la traduzione letterale, non lo usa nessuno. Dietro la formula c'è un'idea vecchia quanto le enciclopedie: una voce generale che rinvia a voci più specifiche. Il Paroliere stesso funziona così, con le correlate e i rimandi. Il rischio è la caricatura: cluster costruiti solo per i motori di ricerca, con pagine quasi identiche che si contendono la stessa domanda (→ search intent).",
  seo: {
    title: "Topic cluster — significato e pillar page nella SEO | Il Paroliere",
    description: "Che cos'è un topic cluster: pagine collegate attorno a un argomento, con una pillar page al centro. Origine, differenza con silo, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
