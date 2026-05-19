// Il Paroliere — Lemma: bot
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bot: LemmaEntry = {
  lemma: "bot",
  slug: "bot",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Programma software che esegue compiti automatizzati in rete, simulando " +
    "o sostituendo l'intervento umano. In SEO, i bot dei motori di ricerca " +
    "— Googlebot, Bingbot — scansionano le pagine web per aggiornare " +
    "l'indice; nel linguaggio comune il termine abbraccia i chatbot di " +
    "assistenza, gli agenti automatici sui social media e i software malevoli " +
    "che imitano il comportamento di un utente reale. La parola è " +
    "un'abbreviazione di «robot».",

  shortDefinition:
    "Software che agisce in rete al posto di un umano: dai crawler SEO ai chatbot, fino agli agenti malevoli.",

  register: ["tecnico", "comune"],
  domains: ["SEO", "informatica", "intelligenza artificiale"],

  examples: [
    "Il file robots.txt serve a istruire i bot sui percorsi che non devono scansionare.",
    "Distinguere il traffico dei bot da quello degli utenti reali è essenziale per leggere correttamente le analytics.",
    "I bot di scraping possono sovraccaricare un server esattamente come un attacco DDoS.",
  ],

  synonyms: [
    {
      term: "robot",
      register: "comune",
      context: "forma estesa, usata nel linguaggio meno tecnico",
    },
    {
      term: "crawler",
      register: "tecnico",
      context: "specificamente per i bot di scansione dei motori di ricerca",
    },
    {
      term: "spider",
      register: "tecnico",
      context: "termine storico per i bot di indicizzazione, ancora in uso",
    },
  ],

  relatedWords: [
    "Googlebot",
    "Bingbot",
    "crawler",
    "robots.txt",
    "user agent",
    "chatbot",
    "agente automatico",
    "scraping",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/bot",
  },

  paroliereNote:
    "Bot è una di quelle parole che nel giro di pochi anni ha cambiato " +
    "connotazione. Prima era quasi sempre neutro — il bot di Googlebot, " +
    "il bot che invia notifiche. Poi è diventato sospetto — bot sui social, " +
    "bot che falsificano il traffico, bot che rubano contenuti. Oggi convivono " +
    "entrambi i sensi, e il contesto decide quale leggere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Bot — Il Paroliere",
    description:
      "Definizione originale di 'bot': il software automatizzato che agisce in rete, " +
      "dai crawler SEO ai chatbot. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
