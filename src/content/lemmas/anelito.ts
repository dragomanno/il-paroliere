// Il Paroliere — Lemma: anelito
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const anelito: LemmaEntry = {
  lemma: "anelito",
  slug: "anelito",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "letterario"],
  domains: ["psicologia", "filosofia", "vita interiore"],

  definition:
    "1. Respiro ansante o affannoso, soprattutto in uso letterario. 2. Desiderio intenso di un cambiamento, di un miglioramento o di un bene sentito come necessario. Nel suo uso figurato è l'idea che vuole diventare azione, ma non l'ha ancora avviata: una tensione urgente, precedente allo → slancio. Rispetto a → aspirazione, che può essere stabile e ordinata attorno a un progetto, l'anelito è più acceso e conserva nell'origine l'immagine fisica del respiro che manca.",

  shortDefinition:
    "Desiderio ardente di cambiamento, ancora sulla soglia dell'azione.",

  etymology:
    "Dal latino anhelitus, «respiro affannoso», derivato di anhelare, «ansimare». Dal fiato spezzato dello sforzo nasce il valore figurato di desiderio ardente e urgente.",

  examples: [
    "L'anelito a una vita meno precaria gli riempiva i pensieri, ma non aveva ancora inviato una candidatura.",
    "Nelle assemblee si sentiva un anelito di cambiamento prima che qualcuno trovasse il coraggio di proporre un gesto concreto.",
    "Il suo anelito alla libertà non era un piano definito: era una pressione quieta e continua che chiedeva spazio.",
    "Dopo anni nello stesso ruolo, l'anelito a imparare di nuovo precedette lo slancio con cui si iscrisse al corso serale.",
  ],

  synonyms: [
    {
      term: "aspirazione",
      register: "comune",
      note: "È più stabile e orientata a un progetto o a un traguardo; l'anelito insiste sull'intensità e sulla soglia prima dell'azione.",
    },
    {
      term: "brama",
      register: "letterario",
      note: "Può essere più possessiva e rivolta a un oggetto; anelito conserva meglio una direzione ideale o di cambiamento.",
    },
    {
      term: "desiderio",
      register: "comune",
      note: "È il termine più ampio e non implica né la stessa urgenza né il passaggio imminente all'azione.",
    },
  ],

  antonyms: [
    {
      term: "rassegnazione",
      register: "comune",
      note: "Accetta l'immobilità o rinuncia a mantenere viva la tensione verso un cambiamento.",
    },
    {
      term: "inerzia",
      register: "comune",
      note: "Indica l'assenza di spinta a mutare o iniziare.",
    },
  ],

  relatedWords: [
    "aspirazione",
    "desiderio",
    "slancio",
    "speranza",
    "attesa",
    "volontà",
    "cambiamento",
    "rassegnazione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/anelito",
  },

  paroliereNote:
    "Anelito nomina un prima: non l'immobilità di chi non vuole, ma il punto in cui il desiderio di mutare si è fatto abbastanza intenso da chiedere una forma. Per questo non è sinonimo di → slancio: l'anelito è la pressione che precede la partenza, lo slancio è il desiderio quando entra nel gesto. Con → aspirazione condivide la direzione verso il futuro, ma la seconda può restare a lungo un progetto; l'anelito è più impaziente, più vicino al respiro e alla soglia.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Anelito — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Anelito: desiderio ardente di cambiamento sulla soglia dell'azione. Definizione originale, esempi e differenze da aspirazione e slancio.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
