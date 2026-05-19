// Il Paroliere — Lemma: recidivo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const recidivo: LemmaEntry = {
  lemma: "recidivo",
  slug: "recidivo",
  partOfSpeech: "aggettivo",

  definition:
    "Chi — dopo aver già subìto le conseguenze di un comportamento scorretto o illegale — vi ricade " +
    "in modo consapevole o sistematico. In diritto costituisce una circostanza aggravante, segnale che " +
    "la sanzione precedente non ha prodotto effetto deterrente. Nel parlato corrente si usa anche con " +
    "tono ironico, per chi ripete imperterrito gli stessi errori nonostante l'esperienza.",

  shortDefinition:
    "Chi ricade nello stesso comportamento sbagliato dopo averne già pagato le conseguenze — in senso giuridico o, ironicamente, nella vita di tutti i giorni.",

  register: ["comune", "tecnico"],
  domains: ["diritto", "psicologia"],

  etymology:
    "Dal latino recidivus, 'che ricade, che torna', derivato di recidere (ricadere) — composto di " +
    "re- (di nuovo) e cadere. La stessa radice di recidiva in medicina: la ricomparsa di una malattia.",

  examples: [
    "Era recidivo: terza condanna per lo stesso reato, circostanza aggravante automatica.",
    "Si dichiarò recidivo nel dimenticare gli anniversari, quasi con orgoglio.",
    "La recidiva in campo medico e quella in campo giuridico condividono la stessa logica: qualcosa è tornato che non doveva tornare.",
    "Recidivo nell'ottimismo — quella volta che lo descrissero così, lo prese come un complimento.",
  ],

  synonyms: [
    {
      term: "incorreggibile",
      register: "comune",
      context: "che non si riesce a correggere, con tono più rassegnato",
    },
    {
      term: "impenitente",
      register: "formale",
      context: "che non mostra pentimento, con sfumatura morale più marcata",
    },
    {
      term: "abituale",
      register: "tecnico",
      context: "nel diritto, il reato commesso per abitudine — categoria distinta dalla recidiva",
    },
  ],

  antonyms: [
    {
      term: "ravveduto",
      register: "comune",
      context: "chi ha cambiato comportamento dopo le conseguenze",
    },
    {
      term: "corretto",
      register: "comune",
      context: "chi non ripete l'errore",
    },
  ],

  relatedWords: [
    "recidiva",
    "recidivismo",
    "ravvedimento",
    "circostanza aggravante",
    "impenitente",
    "incorreggibile",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/recidivo/",
    wiktionary: "https://it.wiktionary.org/wiki/recidivo",
  },

  paroliereNote:
    "Recidivo è una parola che ha fatto il salto dal diritto penale al parlato quotidiano " +
    "conservando entrambi i sensi. Nel parlato ironico descrive una specie di fedeltà ai propri " +
    "difetti — quasi ammirevole nella sua coerenza. È raro che una parola tecnica acquisisca " +
    "una sfumatura così affettuosa nell'uso comune.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Recidivo — Il Paroliere",
    description:
      "Definizione originale di 'recidivo': chi ricade nello stesso errore dopo averne pagato le conseguenze. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
