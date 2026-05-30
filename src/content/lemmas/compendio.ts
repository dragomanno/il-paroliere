// Il Paroliere — Lemma: compendio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const compendio: LemmaEntry = {
  lemma: "compendio",
  slug: "compendio",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Esposizione condensata di un argomento complesso, che ne restituisce i tratti " +
    "essenziali senza sacrificare la chiarezza alla brevità. Il compendio è forma " +
    "editoriale nobile — a metà tra il manuale e il saggio: non si limita a elencare, " +
    "ma gerarchizza, sceglie, struttura. Si distingue dal riassunto perché presuppone " +
    "giudizio critico, e dalla sintesi perché privilegia la completezza sulla " +
    "risoluzione dialettica.",

  shortDefinition:
    "Esposizione condensata e gerarchizzata di un argomento; più strutturato del " +
    "riassunto, meno dialettico della sintesi.",

  register: ["comune", "letterario"],
  domains: ["linguaggio", "editoria", "didattica"],

  etymology:
    "Dal latino compendium — risparmio, abbreviazione — derivato di compendere: " +
    "pesare insieme, bilanciare. L'immagine originaria è quella della bilancia: il " +
    "compendio 'pesa' l'argomento e ne tiene solo ciò che vale.",

  examples: [
  ],

  synonyms: [
    { term: "sunto", register: "comune", context: "più breve, meno strutturato editorialmente" },
    { term: "manuale", register: "comune/didattico", context: "più ampio, pensato per l'uso pratico" },
    { term: "vademecum", register: "formale", context: "guida pratica, enfatizza l'utilità d'uso" }
  ],

  antonyms: [
    { term: "trattato", register: "formale", context: "esposizione estesa e sistematica, opposto della condensazione" },
    { term: "monografia", register: "accademico", context: "studio approfondito su un argomento specifico" }
  ],

  relatedWords: [
    "sintesi",
    "tesi",
    "bignami"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/compendio"
  },

  paroliereNote:
    "Il compendio ha avuto il suo momento d'oro nella cultura scolastica italiana del " +
    "Novecento: quei volumetti di poche centinaia di pagine che pretendevano di " +
    "contenere storia della letteratura, filosofia, diritto. Erano strumenti " +
    "imperfetti, ma utili — e ci insegnavano che il giudizio sull'essenziale è " +
    "un'operazione culturale, non solo tecnica. Un caso tutto italiano di compendio " +
    "incarnato è il Bignami: i celebri manualetti nati nel secondo dopoguerra, che " +
    "condensavano in poche pagine interi programmi scolastici — storia, chimica, " +
    "letteratura — diventando il rifugio degli studenti prima delle interrogazioni. " +
    "Ante litteram, una forma di intelligenza artificiale: un sistema per assorbire " +
    "il massimo delle nozioni nel minimo del tempo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Compendio — Il Paroliere",
    description:
      "Compendio: esposizione condensata e strutturata. Linguaggio, editoria, didattica " +
      "— Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};