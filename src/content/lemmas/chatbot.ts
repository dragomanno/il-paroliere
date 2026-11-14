// Il Paroliere — Lemma: chatbot
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const chatbot: LemmaEntry = {
  lemma: "chatbot",
  slug: "chatbot",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Programma progettato per conversare con le persone in linguaggio naturale, per iscritto o a voce, simulando uno scambio di battute. Può seguire copioni prestabiliti, come molti assistenti dei servizi clienti, oppure generare le risposte con un modello linguistico, come i sistemi conversazionali più recenti.",
  shortDefinition: "Programma che conversa in linguaggio naturale, con risposte tratte da copioni o generate da un modello linguistico.",
  register: [
    "comune",
    "tecnico",
  ],
  domains: [
    "informatica",
    "intelligenza artificiale",
  ],
  etymology: "Dall'inglese chatbot, accorciamento di chatterbot, composto di chatter «chiacchiera» e bot, a sua volta accorciamento di robot. Chatterbot compare nel 1994 in un lavoro di Michael Mauldin; il capostipite del genere è considerato ELIZA, il programma che Joseph Weizenbaum scrisse al MIT e descrisse nel 1966.",
  examples: [
    "Il chatbot della compagnia aerea sa cambiarti il posto, ma per un rimborso ti passa a un operatore.",
    "Ho fatto la stessa domanda a due chatbot e ho avuto due date diverse: alla fine ho controllato sul sito del Comune.",
    "Weizenbaum rimase colpito quando la sua segretaria gli chiese di uscire dalla stanza per conversare da sola con ELIZA.",
  ],
  synonyms: [
    {
      term: "assistente conversazionale",
      register: "tecnico",
      context: "formula più ampia, preferita quando il sistema svolge anche operazioni",
    },
    {
      term: "agente conversazionale",
      register: "tecnico",
      context: "letteratura accademica",
    },
    {
      term: "bot",
      register: "comune",
      context: "iperonimo",
      note: "Ogni chatbot è un bot, ma non ogni bot conversa.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "bot",
    "assistente-virtuale",
    "agente-ai",
    "modello-linguistico",
    "llm",
    "prompt",
    "allucinazione-ai",
    "multimodale",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/chatbot_(Neologismi)/",
    wiktionary: "https://it.wiktionary.org/wiki/chatbot",
  },
  paroliereNote: "Il → bot è una categoria funzionale ampia: qualunque programma che agisce in rete al posto di una persona, dai crawler dei motori di ricerca agli account automatici sui social. Il chatbot è un bot specializzato nel dialogo, e la sua natura sta tutta lì: esiste per rispondere. Quando un sistema conversazionale comincia a svolgere compiti da sé, la parola giusta diventa → agente AI. L'«effetto ELIZA», la tendenza ad attribuire comprensione a un programma che conversa, porta il nome del primo chatbot ed è più attuale che mai.",
  seo: {
    title: "Chatbot — significato e differenza con bot | Il Paroliere",
    description: "Che cos'è un chatbot: il programma che conversa in linguaggio naturale. Da ELIZA ai modelli linguistici, differenza con bot e agente AI.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
