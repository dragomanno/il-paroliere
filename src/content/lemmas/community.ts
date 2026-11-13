// Il Paroliere — Lemma: community
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const community: LemmaEntry = {
  lemma: "community",
  slug: "community",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["prestito", "comune", "contemporaneo", "digitale"],
  domains: ["internet", "sociolinguistica", "comportamento sociale digitale"],

  definition:
    "Gruppo di persone che si riconoscono e interagiscono attorno a un interesse comune in uno spazio digitale — un forum, un gruppo social, un server di chat o i commenti sotto contenuti condivisi. In italiano si usa quasi sempre il prestito inglese, perché → comunità suona più ampia e astratta e non designa con la stessa precisione la partecipazione organizzata online.",

  shortDefinition:
    "Gruppo digitale di persone che interagiscono attorno a un interesse, un progetto o un contenuto condiviso.",

  etymology:
    "Prestito dall’inglese community, che risale, attraverso il francese antico, al latino communitas. In italiano è invariabile e ha assunto soprattutto il valore specifico di gruppo che si forma e si riconosce in uno spazio digitale.",

  examples: [
    "La community del videogioco ha raccolto guide per chi comincia e consigli per chi vuole migliorare.",
    "Gestire una community richiede regole chiare, ascolto e attenzione alle conversazioni più fragili.",
    "Dopo la pubblicazione del video, la community si è ritrovata nei commenti per confrontare esperienze simili.",
    "Il server di chat è diventato il punto d’incontro quotidiano della community locale.",
  ],

  synonyms: [
    { term: "comunità", register: "comune", context: "Traduzione possibile, ma più ampia: riguarda anche gruppi territoriali, culturali o di valori e non porta necessariamente con sé il contesto digitale." },
    { term: "gruppo online", register: "comune", context: "Espressione trasparente e descrittiva, ma meno riconoscibile come nome di una rete di partecipazione stabile." },
    { term: "rete di utenti", register: "tecnico", context: "Sottolinea le persone connesse a un servizio o a un contenuto, più che il loro riconoscersi reciproco." },
  ],

  antonyms: [
    { term: "isolamento", register: "comune", context: "Condizione di separazione dai contatti e dalle reti di partecipazione." },
    { term: "disconnessione", register: "comune/tecnico", context: "Interruzione del canale o della continuità di partecipazione che rende possibile l’interazione online." },
  ],

  relatedWords: ["comunità", "connessione", "forum", "partecipazione", "appartenenza", "moderazione", "interazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/community",
  },

  paroliereNote:
    "Community non sostituisce automaticamente comunità. Il primo termine mette a fuoco un gruppo che prende forma e si mantiene attraverso interazioni digitali; il secondo resta più adatto quando contano il territorio, l’appartenenza civile, una storia comune o valori condivisi. Il prestito è invariabile: «una community», «le community».",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Community — definizione, uso e differenza da comunità | Il Paroliere",
    description: "Community: gruppo di persone che interagisce online attorno a un interesse comune. Significato, esempi e differenza da comunità.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
