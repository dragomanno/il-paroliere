// Il Paroliere — Lemma: keyword
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const keyword: LemmaEntry = {
  lemma: "keyword",
  slug: "keyword",
  partOfSpeech: "sostantivo femminile invariabile",
  gender: "femminile",
  definition: "Parola o breve espressione che riassume l'argomento di un contenuto e che le persone digitano in un motore di ricerca. Nella SEO è l'unità di base della pianificazione: per ogni keyword si stimano volume di ricerca, concorrenza e intento, e si decide quale pagina debba rispondere. In programmazione indica una parola riservata del linguaggio.",
  shortDefinition: "Parola o espressione che le persone cercano online e su cui si costruisce una pagina; in programmazione, parola riservata.",
  register: [
    "tecnico",
  ],
  domains: [
    "SEO",
    "marketing digitale",
    "informatica",
  ],
  etymology: "Dall'inglese keyword, che unisce key, «chiave», a word, «parola»; parola chiave ne è il calco italiano. Nel lessico del web l'anglicismo si diffonde con i motori di ricerca e con la pubblicità legata alle ricerche.",
  examples: [
    "La keyword principale è «ristorante a Siena», ma la pagina deve rispondere anche a chi cerca dove mangiare vicino a piazza del Campo.",
    "Ripetere la stessa keyword in ogni frase non aiuta la pagina e rende il testo illeggibile.",
    "In Python if, for e return sono keyword: non si possono usare come nomi di variabile.",
  ],
  synonyms: [
    {
      term: "parola chiave",
      register: "comune",
      context: "calco italiano, pienamente equivalente",
      note: "Preferibile fuori dal gergo professionale.",
    },
    {
      term: "query",
      register: "tecnico",
      context: "SEO",
      note: "Non è un sinonimo: la query è ciò che una persona scrive davvero, la keyword la sua forma normalizzata usata per pianificare.",
    },
    {
      term: "parola riservata",
      register: "tecnico",
      context: "programmazione",
    },
  ],
  antonyms: [],
  relatedWords: [
    "seo",
    "ranking",
    "search-intent",
    "topic-cluster",
    "posizionamento",
    "semantica",
    "ads",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/keyword/",
    wiktionary: "https://it.wiktionary.org/wiki/keyword",
  },
  paroliereNote: "Il genere è femminile per attrazione di parola: la keyword, le keyword, senza -s al plurale. Nell'uso professionale l'anglicismo ha vinto, ma parola chiave resta perfetta in qualunque testo per un pubblico non specialista. La storia del termine racconta l'evoluzione della SEO: un tempo si ottimizzava una pagina per una singola keyword, oggi si ragiona per argomenti e intenti (→ topic cluster, → search intent), perché i motori riconoscono sinonimi e contesto. La keyword resta un'etichetta di lavoro utile, non una parola da ripetere.",
  seo: {
    title: "Keyword — significato nella SEO e in programmazione | Il Paroliere",
    description: "Che cos'è una keyword: la parola chiave che le persone cercano online. Genere in italiano, differenza con query, uso in programmazione.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
