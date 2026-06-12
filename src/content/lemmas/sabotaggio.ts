// Il Paroliere — Lemma: sabotaggio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sabotaggio: LemmaEntry = {
  lemma: "sabotaggio",
  slug: "sabotaggio",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Danneggiamento deliberato di macchinari, infrastrutture o operazioni per bloccarle o " +
    "metterle fuori uso. La parola ha un'origine concreta e potente: viene dal francese " +
    "«sabot», lo zoccolo di legno che i lavoratori dell'Ottocento gettavano nei meccanismi " +
    "delle fabbriche per fermare la produzione. Oggi il termine si è esteso al figurato: si " +
    "sabotano progetti, relazioni, e — nell'accezione psicologica più diffusa — se stessi.",

  shortDefinition:
    "Dall'antico zoccolo operaio gettato negli ingranaggi: oggi distruggere deliberatamente qualcosa, anche dall'interno.",

  register: ["comune", "tecnico", "psicologico"],
  domains: ["storia del lavoro", "politica", "psicologia", "guerra", "sicurezza"],

  etymology:
    "Dal francese sabotage, derivato di sabot («zoccolo di legno»). L'etimologia più accreditata " +
    "collega il termine all'abitudine dei lavoratori di gettare i loro zoccoli di legno negli " +
    "ingranaggi delle macchine per interrompere la produzione nelle fabbriche dell'Ottocento, " +
    "in forma di protesta o resistenza.",

  examples: [
    "Il sabotaggio della linea ferroviaria rallentò l'avanzata delle truppe nemiche per tre giorni.",
    "L'ingegnere scoprì che il guasto al reattore era stato causato da un sabotaggio interno.",
    "Il sabotaggio di sé stessi — procrastinare, boicottare le proprie opportunità — è uno dei meccanismi difensivi più studiati in psicologia.",
  ],

  synonyms: [
    {
      term: "boicottaggio",
      register: "comune",
      context: "rifiuto collettivo di partecipare, forma non distruttiva di resistenza",
    },
    {
      term: "danneggiamento",
      register: "giuridico",
      context: "termine legale più neutro",
    },
    {
      term: "autosabotaggio",
      register: "psicologico",
      context: "forma di sabotaggio diretta contro se stessi",
    },
  ],

  antonyms: [
    {
      term: "manutenzione",
      register: "tecnico",
      context: "cura attiva che preserva il funzionamento",
    },
    {
      term: "cooperazione",
      register: "comune",
      context: "azione collaborativa, opposto del boicottaggio",
    },
  ],

  relatedWords: [
    "kommando",
    "terrorismo",
    "incursione",
    "resistenza",
    "attentato",
    "boicottaggio",
    "autosabotaggio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sabotaggio/",
    wiktionary: "https://it.wiktionary.org/wiki/sabotaggio",
  },

  paroliereNote:
    "Sabotaggio è una delle poche parole della lingua comune la cui etimologia è visibile e " +
    "quasi narrativa: si vede ancora lo zoccolo, si sente il rumore dell'ingranaggio che si " +
    "inceppa. Questa radice operaia e conflittuale continua a colorare il termine anche nelle " +
    "sue accezioni moderne, compresa quella psicologica — autosabotaggio — che descrive il " +
    "meccanismo con cui una persona mette i bastoni tra le ruote a se stessa. Il salto dal " +
    "piano materiale (il macchinario guasto) a quello interiore (la propria crescita bloccata) " +
    "è uno dei percorsi semantici più interessanti del lessico contemporaneo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sabotaggio — definizione, etimologia e uso | Il Paroliere",
    description:
      "Sabotaggio: dall'antico zoccolo operaio al linguaggio della psicologia. " +
      "Definizione originale, storia del termine e accezioni moderne.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
