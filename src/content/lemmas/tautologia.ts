// Il Paroliere — Lemma: tautologia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tautologia: LemmaEntry = {
  lemma: "tautologia",
  slug: "tautologia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune", "critico"],
  domains: ["logica", "linguistica", "retorica"],

  definition:
    "In logica proposizionale, formula che risulta vera per qualunque assegnazione di valori di verità alle variabili che la compongono, indipendentemente dalle circostanze fattuali: l'esempio canonico è \"p oppure non-p\", vera qualunque sia il valore, vero o falso, attribuito a p. In questo senso tecnico la tautologia non è un difetto, ma una garanzia strutturale — è tra le colonne portanti della logica matematica moderna, dai *Principia Mathematica* di Russell e Whitehead in poi. Nella logica classica del linguaggio comune e nella retorica, invece, il termine assume una connotazione negativa: si dice tautologico un enunciato che, pur presentandosi come una definizione o un'affermazione informativa, si limita in realtà a ripetere nel predicato ciò che era già contenuto nel soggetto, senza aggiungere reale conoscenza — come in \"la pena di morte è una pena capitale che porta alla morte\".",

  shortDefinition:
    "In logica, formula sempre vera per costruzione, a prescindere dai fatti; nel linguaggio comune, affermazione che ripete senza aggiungere informazione.",

  etymology:
    "Dal greco *tautología*, composto da *tautó* — crasi di *tò autó*, “la stessa cosa” — e *-logía*, derivato di *lógos*, “discorso”: letteralmente, “dire la stessa cosa”. Il filosofo Ludwig Wittgenstein applicò per primo il termine, nel 1921, alle ridondanze della logica proposizionale, riprendendolo dalla retorica classica, dove una tautologia era già un'affermazione ripetitiva priva di reale progresso argomentativo.",

  examples: [
    "\"O piove o non piove\" è una tautologia in senso stretto: è vera per costruzione logica, non perché dica qualcosa sul tempo di oggi.",
    "Dire che 'un vincitore è chi vince' è una tautologia nel senso critico del termine: sembra una definizione, ma non spiega nulla di nuovo su cosa significhi vincere.",
    "Lo slogan pubblicitario suonava come una tautologia mascherata da promessa: 'la qualità che ti aspetti', senza specificare in cosa consistesse quella qualità.",
    "In logica matematica, riconoscere che una formula è una tautologia serve a dimostrare che è un teorema del sistema, valido a prescindere dall'interpretazione delle variabili.",
  ],

  synonyms: [
    { term: "ridondanza logica", register: "tecnico", note: "Sottolinea l'aspetto della ripetizione strutturale, più che la verità garantita." },
    { term: "→ ovvietà", register: "comune", note: "Nell'uso critico, quasi sinonimo: affermazione talmente scontata da risultare priva di informazione." },
    { term: "pleonasmo", register: "linguistico", note: "Termine affine ma più specificamente linguistico-stilistico: ripetizione di un concetto già espresso, non necessariamente in forma logica." },
  ],

  antonyms: [
    { term: "contraddizione", register: "tecnico", note: "In logica, formula sempre falsa per costruzione — l'opposto simmetrico della tautologia." },
    { term: "affermazione informativa", register: "comune", note: "Enunciato che aggiunge realmente conoscenza, distinguendosi da chi si limita a ripetere il già noto." },
  ],

  relatedWords: ["ovvieta", "sillogismo", "assioma"],

  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/tautologia_(Dizionario-di-filosofia)/",
    wiktionary: "https://it.wiktionary.org/wiki/tautologia",
  },

  paroliereNote:
    "La tautologia vive una doppia vita curiosa: in logica formale è una delle poche certezze assolute che possediamo, un enunciato che non può mai tradirci; nel linguaggio quotidiano, invece, è quasi sempre un sintomo — il segno che qualcuno sta parlando a lungo per non dire nulla, o che una definizione è stata scritta senza capire davvero cosa si stesse definendo. Riconoscere una tautologia nel discorso altrui, e talvolta nel proprio, è un piccolo esercizio di igiene mentale: chiedersi \"questa frase mi dice qualcosa che non sapessi già dal solo leggerla?\" smaschera più retorica vuota di quanto si creda.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "tautologia — significato in logica e nel linguaggio comune",
    description:
      "Che cos'è una tautologia tra logica proposizionale e retorica quotidiana: formula sempre vera o affermazione che ripete senza informare.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
