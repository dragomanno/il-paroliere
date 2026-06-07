// Il Paroliere — Lemma: defiscalizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const defiscalizzazione: LemmaEntry = {
  lemma: "defiscalizzazione",
  slug: "defiscalizzazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In senso tecnico-fiscale ed economico, l'insieme di misure legislative che " +
    "riducono o eliminano del tutto l'onere tributario su determinate attività, " +
    "categorie di soggetti o tipologie di spesa, allo scopo di incentivare " +
    "comportamenti ritenuti socialmente o economicamente desiderabili: investimenti " +
    "produttivi, assunzione di lavoratori, ricerca e sviluppo, riqualificazione " +
    "edilizia, consumo di energia rinnovabile. La defiscalizzazione è uno strumento " +
    "di politica economica: il legislatore rinuncia a una quota di gettito fiscale " +
    "presente in cambio di un effetto positivo atteso nel medio-lungo periodo. " +
    "In senso più ampio e non strettamente economico, defiscalizzare qualcosa " +
    "significa toglierle il \"peso fiscale\" del giudizio, della norma, dell'etichetta " +
    "imposta dall'esterno: un uso metaforico raro ma non inesistente nel linguaggio " +
    "giornalistico e saggistico, dove può indicare la rimozione di un tabù o di una " +
    "categorizzazione rigida. Vedi anche → incentivo per il concetto correlato di " +
    "stimolo economico diretto.",

  shortDefinition:
    "Riduzione o eliminazione del carico fiscale su specifiche attività o categorie, usata come strumento di politica economica per incentivare determinati comportamenti.",

  register: ["tecnico-fiscale", "economico", "giornalistico"],
  domains: ["fisco", "economia", "diritto", "società"],

  etymology:
    "Composto di de- (prefisso privativo o sottrattivo) + fiscalizzazione, derivato " +
    "di fiscale, dal latino fiscus («cesta, erario pubblico»). Formazione neologica " +
    "italiana del XX secolo, parallela a fiscalizzazione (il processo inverso di " +
    "inclusione di oneri nel regime fiscale).",

  examples: [
    "«Il governo ha annunciato la defiscalizzazione parziale degli straordinari per i lavoratori del settore manifatturiero.»",
    "«Le zone economiche speciali prevedono una defiscalizzazione temporanea per attrarre investimenti nelle aree depresse.»",
    "«La defiscalizzazione dei contributi previdenziali per le nuove assunzioni ha spinto molte aziende ad aumentare l'organico.»",
    "«In senso lato, quella legge aveva operato una sorta di defiscalizzazione morale del fenomeno: tolto il marchio d'infamia, era diventato semplicemente un dato.»",
  ],

  synonyms: [
    {
      term: "sgravio fiscale",
      register: "comune",
      context: "generico",
    },
    {
      term: "esenzione fiscale",
      register: "tecnico-fiscale",
      context: "esenzione totale",
    },
    {
      term: "agevolazione tributaria",
      register: "tecnico-fiscale",
      context: "termine formale",
    },
    {
      term: "incentivo fiscale",
      register: "economico",
      context: "come strumento di politica",
    },
  ],

  antonyms: [
    {
      term: "fiscalizzazione",
      register: "tecnico-fiscale",
      context: "processo inverso",
    },
    {
      term: "inasprimento fiscale",
      register: "comune",
      context: "aumento del carico tributario",
    },
  ],

  relatedWords: [
    "IRPEF",
    "deduzione fiscale",
    "detrazione fiscale",
    "investimento",
    "incentivo",
    "agevolazione",
    "credito d'imposta",
    "zona franca",
    "ZES",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/defiscalizzazione/",
    wiktionary: "https://it.wiktionary.org/wiki/defiscalizzazione",
  },


  paroliereNote:
    "Defiscalizzazione è una di quelle parole che il fisco ha reso necessarie ma " +
    "che la lingua ha adottato con una certa riluttanza: lunga, tecnica, costruita " +
    "su un prefisso privativo che la rende meno immediata di 'sgravio' o 'esenzione'. " +
    "Eppure resiste, perché indica qualcosa di preciso: non solo meno tasse, ma una " +
    "scelta politica consapevole di rinunciare a gettito in cambio di un effetto atteso. " +
    "Chi la usa sa di cosa parla; chi non la usa la sostituisce con 'agevolazione' " +
    "o 'incentivo', perdendo la sfumatura del processo sistemico che sta dietro.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Defiscalizzazione — cos'è, come funziona, esempi | Il Paroliere",
    description:
      "Cosa significa defiscalizzazione, come funziona come strumento di politica economica, esempi pratici. Differenza da incentivo, deduzione e sgravio fiscale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
