// Il Paroliere — Lemma: assistente virtuale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const assistenteVirtuale: LemmaEntry = {
  lemma: "assistente virtuale",
  slug: "assistente-virtuale",
  partOfSpeech: "locuzione sostantivale maschile e femminile",
  gender: "maschile e femminile",
  definition: "Software che aiuta una persona nelle attività quotidiane eseguendo comandi vocali o scritti: imposta promemoria, cerca informazioni, gestisce il calendario, controlla i dispositivi di casa. A differenza di un semplice chatbot, accompagna l'utente su servizi e dispositivi diversi e di solito ha un nome e una voce riconoscibili.",
  shortDefinition: "Software che, su comando vocale o scritto, svolge piccoli compiti quotidiani attraverso app e dispositivi diversi.",
  register: [
    "comune",
  ],
  domains: [
    "informatica",
    "intelligenza artificiale",
  ],
  etymology: "Calco dell'inglese virtual assistant. Assistente viene dal latino assistens, participio di assistere «stare accanto»; virtuale dal latino medievale virtualis, da virtus «forza, potenza», qui nel senso informatico di «realizzato da un programma». L'espressione si diffonde con gli assistenti degli smartphone, a partire da Siri, presentata da Apple nel 2011.",
  examples: [
    "Ho chiesto all'assistente virtuale di ricordarmi la rata dell'IMU il 16 giugno.",
    "L'assistente virtuale capisce «spegni la luce in cucina», ma si confonde se gli dici «qui è buio pesto».",
    "In ufficio l'assistente virtuale prepara il riassunto delle riunioni e propone una bozza delle risposte.",
  ],
  synonyms: [
    {
      term: "assistente vocale",
      register: "comune",
      context: "quando l'interazione avviene soprattutto a voce, come negli altoparlanti intelligenti",
    },
    {
      term: "assistente digitale",
      register: "comune",
      context: "quasi equivalente",
    },
    {
      term: "assistente AI",
      register: "comune",
      context: "formula recente per gli assistenti basati su modelli linguistici",
    },
  ],
  antonyms: [],
  relatedWords: [
    "chatbot",
    "agente-ai",
    "bot",
    "modello-linguistico",
    "multimodale",
    "gemini",
    "prompt",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/assistente/",
  },
  paroliereNote: "Fra → chatbot e → agente AI, l'assistente virtuale sta nel mezzo: non si limita a conversare, ma agisce solo su richiesta e dentro confini stabiliti da chi lo produce. Con l'arrivo dei modelli linguistici i tre termini si stanno avvicinando, e i prodotti commerciali li usano con disinvoltura. Quasi tutti gli assistenti sono nati con nomi e voci femminili, una scelta che ha aperto un dibattito sugli stereotipi; la parola italiana, almeno, va bene per entrambi i generi.",
  seo: {
    title: "Assistente virtuale — significato ed esempi | Il Paroliere",
    description: "Che cos'è un assistente virtuale: il software che svolge piccoli compiti su comando vocale o scritto. Differenze con chatbot e agente AI.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
