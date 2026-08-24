// Il Paroliere — Lemma: slancio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const slancio: LemmaEntry = {
  lemma: "slancio",
  slug: "slancio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune"],
  domains: ["movimento", "psicologia", "vita sociale"],

  definition:
    "1. Movimento rapido e proiettato in avanti, del corpo o di una cosa. 2. In senso figurato, energia pronta con cui si avvia un gesto, un progetto o una relazione. Spesso viene dopo un → anelito: ciò che era desiderio di cambiamento si traduce in un primo movimento concreto. Lo slancio, però, nomina l'avvio e non il successo: può incontrare ostacoli, esaurirsi a metà strada o lasciare incompiuta l'azione che ha messo in moto.",

  shortDefinition:
    "Impulso fisico o interiore che avvia un movimento o un'azione, senza garantirne l'esito.",

  etymology:
    "Da slanciare, formato su lanciare con s- intensivo. Nell'uso figurato, l'immagine del gettarsi in avanti diventa iniziativa ed energia d'azione.",

  examples: [
    "Con uno slancio ha raggiunto il corrimano prima che il treno ripartisse.",
    "Dall'anelito a lavorare in modo più giusto nacque lo slancio con cui il gruppo aprì il confronto.",
    "Le scrisse in uno slancio di sincerità, poi rilesse il messaggio con più calma.",
    "Partì con grande slancio per ristrutturare il laboratorio, ma i preventivi lo fermarono a metà e il progetto rimase incompiuto.",
  ],

  synonyms: [
    {
      term: "impeto",
      register: "comune",
      note: "Ha una forza più irruenta e può suggerire scarsa misura.",
    },
    {
      term: "entusiasmo",
      register: "comune",
      note: "Descrive una disposizione positiva più durevole, non necessariamente un avvio rapido.",
    },
    {
      term: "impulso",
      register: "comune",
      note: "È più neutro e può essere momentaneo o poco riflessivo.",
    },
  ],

  antonyms: [
    {
      term: "esitazione",
      register: "comune",
      note: "Rallenta o sospende l'inizio dell'azione.",
    },
    {
      term: "inerzia",
      register: "comune",
      note: "Indica l'assenza di movimento o di iniziativa.",
    },
  ],

  relatedWords: [
    "anelito",
    "volontà",
    "passione",
    "tensione",
    "desiderio",
    "aspirazione",
    "speranza",
    "attesa",
    "frustrazione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/slancio",
  },

  paroliereNote:
    "Lo slancio è l'istante in cui un'intenzione entra nel gesto: spesso è il seguito di un → anelito, non il suo sinonimo. Può aprire una strada verso una → aspirazione, ma non basta a percorrerla: il suo valore è nell'avvio, non nella garanzia dell'arrivo. Senza continuità, risorse o → volontà, può consumarsi nel primo movimento e lasciare un progetto sospeso; per questo non va confuso con un risultato raggiunto.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Slancio — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Slancio: impulso che mette in moto un gesto o un progetto, senza garantirne il successo. Definizione originale, esempi e differenze da anelito e impulso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
