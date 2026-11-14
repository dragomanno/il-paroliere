// Il Paroliere — Lemma: prompt
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const prompt: LemmaEntry = {
  lemma: "prompt",
  slug: "prompt",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Il testo con cui si chiede qualcosa a un modello di intelligenza artificiale generativa: una domanda, un'istruzione, un esempio da imitare, un documento da elaborare. Dal prompt dipendono in buona parte la qualità e la forma della risposta. In informatica il termine indicava già il segnale con cui la riga di comando mostra di essere pronta a ricevere istruzioni.",
  shortDefinition: "Testo con cui si istruisce un modello di intelligenza artificiale; in origine, il segnale di attesa della riga di comando.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Dall'inglese prompt «suggerimento, stimolo», legato al verbo to prompt «sollecitare, suggerire», anche a teatro, e risalente al latino promptus «pronto, a portata di mano», participio di promere «tirare fuori». Lo stesso latino aveva già dato all'italiano pronto: per questo il termine è stato descritto come un caso di riattivazione interlinguistica più che di semplice prestito.",
  examples: [
    "Il primo prompt era troppo vago: «scrivimi un testo sul Chianti» ha prodotto una brochure; indicando pubblico, tono e lunghezza è arrivato un articolo.",
    "Nel prompt conviene dire anche che cosa evitare, non solo che cosa fare.",
    "Sullo schermo nero c'era solo il prompt del DOS, in attesa del primo comando.",
    "Nel gruppo di lavoro ci scambiamo i prompt migliori come una volta le ricette.",
  ],
  synonyms: [
    {
      term: "istruzione",
      register: "comune",
      context: "quando il prompt è un ordine",
    },
    {
      term: "richiesta",
      register: "comune",
      context: "quando il prompt è una domanda",
    },
    {
      term: "consegna",
      register: "comune",
      context: "parola della scuola",
      note: "Sorprendentemente precisa: indica il compito insieme alle condizioni per svolgerlo.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "modello-linguistico",
    "llm",
    "context-window",
    "token",
    "temperatura-ai",
    "agente-ai",
    "rag",
    "allucinazione-ai",
    "fine-tuning",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/prompt/",
    wiktionary: "https://it.wiktionary.org/wiki/prompt",
  },
  paroliereNote: "Prestito ormai saldo, con i suoi derivati: prompting, promptare, perfino promptista. Entra nel parlato italiano dal 2022, con la popolarità degli assistenti conversazionali. Chi scrive bene un prompt fa un lavoro molto vicino a quello di chi scrive una buona consegna: contesto, scopo, vincoli, un esempio. La formula prompt engineering ha qualcosa di esagerato, perché il prompt resta testo e non codice; un testo che conta, però, perché il modello non può chiedere chiarimenti se nessuno glielo consente.",
  seo: {
    title: "Prompt — significato nell'intelligenza artificiale | Il Paroliere",
    description: "Che cos'è un prompt: il testo con cui si istruisce un modello di intelligenza artificiale. Origine latina, derivati, equivalenti italiani.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
