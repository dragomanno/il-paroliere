// Il Paroliere — Lemma: disfemismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const disfemismo: LemmaEntry = {
  lemma: "disfemismo",
  slug: "disfemismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["linguaggio", "retorica"],

  definition:
    "Procedimento retorico speculare e opposto all'eufemismo: consiste nel sostituire un termine neutro o già accettabile con uno intenzionalmente più crudo, sgradevole o offensivo, allo scopo di svalutare, sminuire o colpire ciò a cui ci si riferisce. A differenza dell'insulto diretto, il disfemismo opera per sostituzione lessicale mirata — non aggiunge un giudizio esplicito, ma lo insinua scegliendo la parola più dura tra quelle disponibili. Esiste anche una forma affettuosa e scherzosa del fenomeno, tipica del gergo e dello slang di gruppo, in cui un termine di per sé dispregiativo viene usato con calore o complicità tra chi condivide il codice — un uso che rovescia temporaneamente la polarità negativa del termine.",

  shortDefinition:
    "Sostituzione di un termine neutro con uno volutamente crudo o offensivo — l'opposto dell'eufemismo, salvo l'uso affettuoso in gergo.",

  etymology:
    "Dal greco *dysphēmía* «maldicenza, parola infausta», composto da *dys-*, prefisso che nega o rovescia il valore positivo, e *phēmí* «io parlo» — coniato per analogia e contrasto diretto con eufemismo, di cui inverte il prefisso (*eu-* «bene» → *dys-* «male»).",

  examples: [
    "Chiamare 'carretta' un'auto vecchia ma ancora funzionante è un disfemismo bonario, quasi affettuoso.",
    "Nel linguaggio politico il disfemismo è un'arma comune: definire un avversario 'burocrate' invece di 'funzionario' ne svaluta il ruolo senza bisogno di argomentare.",
    "Tra amici stretti, chiamarsi a vicenda con soprannomi apparentemente offensivi è un disfemismo che funziona come segno di intimità, non di ostilità.",
    "Il giornalismo scandalistico abusa del disfemismo per rendere notiziabile ciò che altrimenti sarebbe un fatto ordinario: non 'ha lasciato il lavoro', ma 'è stato cacciato'.",
  ],

  synonyms: [
    { term: "termine spregiativo", register: "comune", note: "Descrive l'effetto lessicale, senza implicare necessariamente la sostituzione intenzionale di un termine neutro preesistente." },
  ],

  antonyms: [
    { term: "eufemismo", register: "tecnico", note: "Il procedimento simmetrico e opposto: attenuare invece di inasprire." },
  ],

  relatedWords: ["eufemismo", "litote", "iperbole"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/disfemismo/",
    wiktionary: "https://it.wiktionary.org/wiki/disfemismo",
  },

  paroliereNote:
    "Il disfemismo è la prova che una figura retorica non è mai 'buona' o 'cattiva' in sé, ma dipende interamente da chi parla, a chi, e con quale relazione di fondo. Lo stesso identico termine sgradevole può essere un'aggressione in bocca a uno sconosciuto e una carezza linguistica tra due amici che si conoscono da vent'anni — il disfemismo affettuoso funziona solo dentro un contesto di fiducia condivisa, ed è proprio questa condivisione, non la parola, a neutralizzarne la durezza.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "disfemismo — significato, opposto dell'eufemismo, esempi",
    description:
      "Che cos'è il disfemismo: la figura retorica che sostituisce un termine neutro con uno crudo o offensivo, tra svalutazione e uso affettuoso in gergo.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
