// Il Paroliere — Lemma: incipit
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incipit: LemmaEntry = {
  lemma: "incipit",
  slug: "incipit",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Le prime parole di un testo, quelle che decidono il tono prima ancora che il lettore se ne accorga. " +
    "In filologia designa l'apertura di un manoscritto, spesso usata come titolo identificativo dell'opera; " +
    "nel parlato colto indica qualsiasi inizio che porta già in sé la qualità di ciò che verrà. " +
    "Un incipit riuscito non prepara: è già.",

  shortDefinition:
    "L'apertura di un testo che ne definisce il tono: in filologia, inizio del manoscritto; nel parlato colto, ogni esordio che porta già in sé ciò che segue.",

  register: ["tecnico", "comune"],
  domains: ["letteratura", "scrittura"],

  etymology:
    "Dal latino incipit, terza persona singolare del presente di incipere (cominciare). " +
    "Nei manoscritti medievali era la formula con cui il copista segnalava l'inizio del testo: " +
    "Incipit liber primus — 'comincia il primo libro'.",

  examples: [
    "«Call me Ishmael» — un incipit che non spiega niente e dice tutto.",
    "Il problema non era il romanzo: era l'incipit, che non riusciva a staccarsi dalla pagina.",
    "In filologia l'incipit identifica spesso un manoscritto meglio di qualsiasi titolo.",
    "Ogni discorso ha il suo incipit, nel bene e nel male: il tono è già lì, nelle prime tre parole.",
  ],

  synonyms: [
    {
      term: "esordio",
      register: "comune",
      context: "più generico, non implica la funzione identificativa dell'incipit",
    },
    {
      term: "apertura",
      register: "comune",
      context: "inizio di qualsiasi testo o performance, più neutro",
    },
    {
      term: "attacco",
      register: "tecnico",
      context: "usato in musica e narratologia per indicare l'avvio del pezzo",
    },
  ],

  antonyms: [
    {
      term: "explicit",
      register: "tecnico",
      context: "in filologia, la formula che chiude il testo — opposto speculare dell'incipit",
    },
    {
      term: "epilogo",
      register: "comune",
      context: "la parte conclusiva, che chiude ciò che l'incipit ha aperto",
    },
  ],

  relatedWords: [
    "explicit",
    "esordio",
    "attacco",
    "incipit narrativo",
    "filologia",
    "manoscritto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/incipit/",
    wiktionary: "https://it.wiktionary.org/wiki/incipit",
  },

  paroliereNote:
    "L'incipit è forse la parte di un testo su cui si lavora di più e che si dimentica di meno. " +
    "Esistono interi libri dedicati ai migliori incipit della letteratura mondiale — " +
    "a dimostrazione che quelle prime parole non sono un'introduzione ma già il testo stesso, " +
    "condensato in poche sillabe che decidono tutto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Incipit — Il Paroliere",
    description:
      "Definizione originale di 'incipit': apertura di un testo che ne definisce il tono; in filologia, inizio del manoscritto. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
