// Il Paroliere — Lemma: distacco
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const distacco: LemmaEntry = {
  lemma: "distacco",
  slug: "distacco",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "psicologico"],
  domains: ["psicologia", "relazioni", "vita quotidiana", "lutto"],

  definition:
    "1. Separazione da ciò che era unito o vicino, concreta come il distacco di un foglio. 2. In senso psicologico e relazionale, distanza da una persona, da un legame o da una situazione: può raffreddare il coinvolgimento, ma non coincide necessariamente con indifferenza o → menefreghismo. Talvolta è una misura di lucidità e di autoprotezione, necessaria per ritrovare quiete o andare avanti; nel lutto nomina anche il difficile separarsi da chi non c'è più.",

  shortDefinition:
    "Separazione concreta o emotiva che crea distanza e può proteggere, chiarire o segnare la fine di un legame.",

  etymology:
    "Derivato di distaccare, formato da dis- e attaccare. La parola conserva l'immagine materiale di qualcosa che si stacca, poi trasferita alle emozioni, ai legami e al giudizio.",

  examples: [
    "Il distacco dal telefono per un fine settimana gli ha restituito un'attenzione che non sapeva di aver perso.",
    "Parlava della fine della relazione con un distacco sorprendente, forse troppo ordinato per non nascondere dolore.",
    "Per giudicare il lavoro con onestà, la curatrice ha aspettato qualche giorno di distacco dall'inaugurazione.",
    "Prendere un po' di distacco dalla famiglia non era menefreghismo: le serviva a ritrovare quiete e a non smarrirsi nel conflitto.",
    "Dopo la morte del padre, il distacco gli appariva come un gesto lento: imparare a vivere senza recidere il ricordo.",
  ],

  synonyms: [
    {
      term: "distanza",
      register: "comune",
      note: "È più ampia e neutra: può essere spaziale, sociale o affettiva senza suggerire un precedente legame.",
    },
    {
      term: "freddezza",
      register: "comune",
      note: "Indica un modo poco partecipe o cordiale; non ogni distacco è freddo.",
    },
    {
      term: "disimpegno",
      register: "formale",
      note: "Riguarda soprattutto il sottrarsi a un compito, a una causa o a una responsabilità.",
    },
  ],

  antonyms: [
    {
      term: "coinvolgimento",
      register: "comune",
      note: "Partecipazione emotiva o pratica a una situazione.",
    },
    {
      term: "vicinanza",
      register: "comune",
      note: "Prossimità fisica o affettiva che favorisce contatto e confidenza.",
    },
  ],

  relatedWords: [
    "relazione",
    "legame",
    "dipendenza",
    "menefreghismo",
    "lutto",
    "perdita",
    "estraneamento",
    "alienazione",
    "accettazione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/distacco",
  },

  paroliereNote:
    "Il distacco non è automaticamente una fuga né una virtù e non va confuso con → menefreghismo: conta da che cosa ci si separa e con quale effetto. Può essere un limite sano, preso per il quieto vivere o per tornare a procedere dopo una ferita; nel rapporto con la perdita, lascia spazio al dolore senza ridurlo a una rinuncia. Un po' di distacco può sottrarre una → relazione alla → dipendenza; se si irrigidisce, può avvicinarsi a → estraneamento e lasciare il → legame senza voce.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Distacco — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Distacco: separazione materiale o emotiva, tra lucidità, protezione, lutto e raffreddamento dei legami. Definizione originale, sinonimi ed esempi.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
