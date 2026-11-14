// Il Paroliere — Lemma: vettore semantico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vettoreSemantico: LemmaEntry = {
  lemma: "vettore semantico",
  slug: "vettore-semantico",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Sequenza di numeri che rappresenta il significato di una parola, di un testo o di un concetto come un punto in uno spazio a molte dimensioni. La vicinanza fra due vettori, misurata di solito con la similarità del coseno, indica quanto i loro significati si somigliano: su questo calcolo si basano i motori di ricerca semantica e molti sistemi di raccomandazione.",
  shortDefinition: "Punto in uno spazio numerico che rappresenta un significato; la distanza fra due vettori misura quanto si somigliano.",
  register: [
    "tecnico",
  ],
  domains: [
    "linguistica computazionale",
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Vettore viene dal latino vector «trasportatore», da vehere «portare»: in matematica è una grandezza con direzione e intensità, poi più semplicemente una lista ordinata di numeri. Semantico dal greco sēmantikós «che significa». L'uso di vettori per rappresentare documenti risale al modello a spazio vettoriale di Gerard Salton, negli anni Settanta.",
  examples: [
    "Nei modelli più recenti il vettore semantico di «riso» cambia con la frase: si avvicina a «risotto» in cucina, a «sorriso» davanti a una battuta.",
    "Due recensioni senza una parola in comune possono avere vettori semantici quasi identici, se dicono la stessa cosa.",
    "La ricerca per vettori semantici trova «auto elettrica economica» anche se la pagina parla di «utilitaria a batteria dal prezzo contenuto».",
  ],
  synonyms: [
    {
      term: "embedding",
      register: "tecnico",
      context: "spesso usato per lo stesso oggetto",
      note: "Più propriamente indica la tecnica che lo produce.",
    },
    {
      term: "rappresentazione vettoriale",
      register: "tecnico",
      context: "formula descrittiva",
    },
  ],
  antonyms: [],
  relatedWords: [
    "embedding",
    "semantica",
    "web-semantico",
    "rag",
    "knowledge-graph",
    "modello-linguistico",
    "search-intent",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/vettore/",
    wiktionary: "https://it.wiktionary.org/wiki/vettore",
  },
  paroliereNote: "Nel lessico digitale convivono due semantiche da non confondere. Quella del → web semantico dichiara i significati con etichette esplicite; quella dei vettori li ricava dall'uso, per somiglianza statistica. La prima è precisa e rigida, la seconda flessibile e approssimativa. I sistemi più solidi le combinano: il → knowledge graph dice che cosa è vero, il vettore semantico aiuta a trovare ciò che somiglia alla domanda.",
  seo: {
    title: "Vettore semantico — significato e ricerca semantica | Il Paroliere",
    description: "Che cos'è un vettore semantico: il punto numerico che rappresenta un significato. Similarità, ricerca semantica, differenza con web semantico.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
