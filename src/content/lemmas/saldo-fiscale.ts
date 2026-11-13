// Il Paroliere — Lemma: saldo fiscale
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const saldoFiscale: LemmaEntry = {
  lemma: "saldo fiscale",
  slug: "saldo-fiscale",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  definition: "Versamento che chiude il conto di un'imposta per un anno: la differenza tra l'imposta dovuta, calcolata nella dichiarazione, e quanto è già stato pagato con acconti e ritenute. Se la differenza è negativa non c'è nulla da versare e nasce un credito, da chiedere a rimborso o da usare in compensazione. Per l'IRPEF si paga entro il 30 giugno dell'anno successivo, oppure nei trenta giorni seguenti con una maggiorazione dello 0,40%.",
  shortDefinition: "Versamento che chiude il conto di un'imposta per un anno, sottraendo dal dovuto quanto già pagato in acconto.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
  ],
  etymology: "Saldo, nel senso contabile, è un deverbale di saldare nel significato di «chiudere un conto». Saldare viene a sua volta dall'aggettivo saldo, dal latino solidus «compatto, intero»: il conto saldato è un conto reso intero, senza più parti scoperte.",
  examples: [
    "Il 30 giugno si versano insieme il saldo fiscale dell'anno precedente e la prima rata di acconto.",
    "Quest'anno il saldo fiscale è a credito: gli acconti versati hanno superato l'imposta dovuta.",
    "Con il 730 il saldo fiscale viene trattenuto direttamente in busta paga, di solito a partire da luglio.",
  ],
  synonyms: [
    {
      term: "conguaglio",
      register: "comune",
      context: "spec. per i dipendenti, quando il saldo viene regolato in busta paga",
    },
  ],
  antonyms: [
    {
      term: "acconto fiscale",
      register: "tecnico-fiscale",
      context: "versamento anticipato, da scalare nel saldo",
    },
  ],
  relatedWords: [
    "acconto-fiscale",
    "dichiarazione-dei-redditi",
    "irpef",
    "f24",
    "730",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/saldo2/",
    wiktionary: "https://it.wiktionary.org/wiki/saldo",
  },
  paroliereNote: "Saldo è una parola che il fisco condivide con i negozi e con le banche: i saldi di fine stagione, il saldo del conto corrente, il saldo fiscale. In tutti i casi c'è l'idea di un conto che si chiude o di cui si fa il punto. La differenza è che il saldo fiscale può avere anche il segno più per il contribuente: quando gli acconti superano il dovuto, il conto si chiude con un credito.",
  seo: {
    title: "Saldo fiscale — significato, scadenze, esempi | Il Paroliere",
    description: "Che cos'è il saldo fiscale: il versamento che chiude il conto di un'imposta, al netto di acconti e ritenute. Scadenza del 30 giugno e saldo a credito.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
