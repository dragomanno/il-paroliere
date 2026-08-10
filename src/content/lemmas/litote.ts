// Il Paroliere — Lemma: litote
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const litote: LemmaEntry = {
  lemma: "litote",
  slug: "litote",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["linguaggio", "retorica"],

  definition:
    "Figura retorica che consiste nell'esprimere un concetto negando il suo contrario, invece di affermarlo direttamente: dire 'non è stupido' per intendere 'è intelligente', o 'non mi dispiace' per 'mi piace'. L'effetto non è mai neutro: la litote può attenuare un giudizio troppo diretto per cortesia o prudenza, ma spesso, paradossalmente, lo rinforza — dire che qualcuno 'non è un'aquila' comunica un giudizio più tagliente, per il tono di understatement, di quanto farebbe 'è stupido' detto apertamente. Per questo la litote condivide un territorio con l'eufemismo, di cui è spesso considerata un meccanismo particolare, ma se ne distingue perché opera specificamente per via di negazione grammaticale del contrario, non per semplice sostituzione lessicale.",

  shortDefinition:
    "Affermare un concetto negandone il contrario ('non è male' per 'è buono') — spesso attenua, a volte rinforza per understatement.",

  etymology:
    "Dal greco *litótēs* «semplicità, sobrietà», da *litós* «semplice, modesto»: il nome descrive lo stile sobrio e indiretto con cui la figura formula un giudizio.",

  examples: [
    "'Non è la persona più puntuale del mondo' è una litote che comunica, con garbo, un ritardo cronico.",
    "'Non mi sembra una cattiva idea' spesso significa, nel registro colloquiale italiano, un vero e proprio entusiasmo trattenuto.",
    "Nella letteratura inglese, l'understatement britannico è quasi sempre costruito con litoti: 'not bad at all' per un risultato eccellente.",
    "'Non è stata la mia serata migliore' può essere una litote che minimizza, con ironia, un disastro totale.",
  ],

  synonyms: [
    { term: "understatement", register: "colto/anglicismo", note: "Termine inglese ormai naturalizzato per indicare l'attenuazione voluta di un giudizio o di un fatto — spesso realizzata proprio tramite litote." },
    { term: "perifrasi attenuativa", register: "tecnico", note: "Categoria più ampia in cui la litote rientra come caso specifico basato sulla negazione del contrario." },
  ],

  antonyms: [
    { term: "iperbole", register: "tecnico", note: "Amplifica invece di attenuare — meccanismo retorico opposto nell'intensità espressiva." },
  ],

  relatedWords: ["iperbole", "eufemismo", "disfemismo"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/litote/",
    wiktionary: "https://it.wiktionary.org/wiki/litote",
  },

  paroliereNote:
    "La litote è la dimostrazione più elegante che negare non è mai un atto neutro. Chi dice 'non è male' non sta semplicemente evitando di dire 'è buono': sta scegliendo un tono, una distanza, spesso un understatement calcolato che dice più cose insieme — un giudizio positivo, ma anche una certa riluttanza a esporsi con troppo entusiasmo. È la figura retorica preferita di chi vuole comunicare con precisione senza sbilanciarsi apertamente, ed è per questo un tratto stilistico ricorrente in registri colti, ironici o diplomatici.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "litote — significato, esempi, differenza da eufemismo",
    description:
      "Che cos'è la litote: la figura retorica che afferma negando il contrario, tra attenuazione, cortesia e understatement.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
