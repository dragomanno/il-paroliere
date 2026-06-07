// Il Paroliere — Lemma: forchettone
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const forchettone: LemmaEntry = {
  lemma: "forchettone",
  slug: "forchettone",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Nel senso letterale, una forchetta di grandi dimensioni usata per servire o " +
    "trasportare alimenti in cucina o a tavola. In senso figurato colloquiale e " +
    "spregiativo, persona fortemente attaccata alle tradizioni passate, refrattaria " +
    "al cambiamento, portatrice di idee, gusti o comportamenti ritenuti superati e " +
    "anacronistici; spesso associata a un ambiente sociale conservatore, borghese o " +
    "provinciale. Il senso figurato sfrutta l'immagine della «vecchia cucina» come " +
    "simbolo di un mondo che non vuole cambiare. Vedi anche → parruccone per la " +
    "variante di registro più storico-letterario.",

  shortDefinition:
    "Grande forchetta da servizio; in senso figurato, persona retrò, attaccata " +
    "all'antico e poco incline al cambiamento.",

  register: ["colloquiale", "spregiativo"],
  domains: ["società", "cultura", "linguistica", "usi figurati"],

  etymology:
    "Accrescitivo di forchetta, dal francese fourchette, diminutivo di fourche " +
    "(«forca»), dal latino furca. Il senso figurato colloquiale si è sviluppato " +
    "nell'italiano popolare come metafora della cucina tradizionale contrapposta " +
    "alla modernità.",

  examples: [
    "Non invitarlo a discutere di tecnologia: è un forchettone che non riesce nemmeno a mandare un'email senza aiuto.",
    "La commissione era piena di forchettoni: nessuna idea nuova aveva speranza di passare.",
    "Tira fuori il forchettone dal cassetto, che stasera abbiamo l'arrosto per venti persone.",
  ],

  synonyms: [
    {
      term: "parruccone",
      register: "colloquiale",
      context: "più storico-letterario, con radice ideologica",
    },
    {
      term: "reazionario",
      register: "politico",
      context: "più marcatamente politico",
    },
    {
      term: "conservatore",
      register: "comune",
      context: "attaccato ai valori e modi del passato",
    },
    {
      term: "passatista",
      register: "comune",
      context: "chi guarda solo al passato",
    },
    {
      term: "laudator temporis acti",
      register: "letterario",
      context: "latinismo ironico per chi loda i tempi andati",
    },
  ],

  antonyms: [
    {
      term: "innovatore",
      register: "comune",
      context: "chi porta idee e pratiche nuove",
    },
    {
      term: "progressista",
      register: "comune",
      context: "chi sostiene il cambiamento",
    },
    {
      term: "aperto al cambiamento",
      register: "comune",
      context: "chi accetta e abbraccia il nuovo",
    },
  ],

  relatedWords: [
    "parruccone",
    "tradizione",
    "conservatorismo",
    "reazionarismo",
    "nostalgia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/forchettone/",
    wiktionary: "https://it.wiktionary.org/wiki/forchettone",
  },

  paroliereNote:
    "Forchettone nel senso figurato è una parola simpatica e un po' artigianale, " +
    "tipicamente italiana nel suo affidarsi all'immagine concreta della cucina per " +
    "descrivere un tipo umano. Non ha la profondità storica di → parruccone — che " +
    "porta con sé tutto il peso del conflitto illuminismo/romanticismo — ma è più " +
    "immediato, più quotidiano, più usabile in una conversazione normale. Chi chiama " +
    "qualcuno forchettone non sta facendo una tesi di laurea sul conservatorismo: " +
    "sta dicendo, con bonaria insofferenza, che quella persona vive ancora nel passato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Forchettone — definizione e uso figurato | Il Paroliere",
    description:
      "Forchettone: dal senso letterale al tipo umano retrò. Cosa significa, come " +
      "si usa, differenza con parruccone. Definizione originale con esempi d'uso.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
