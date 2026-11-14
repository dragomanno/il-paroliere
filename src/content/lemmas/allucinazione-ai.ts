// Il Paroliere — Lemma: allucinazione AI
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const allucinazioneAi: LemmaEntry = {
  lemma: "allucinazione AI",
  slug: "allucinazione-ai",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Risposta di un sistema di intelligenza artificiale che contiene informazioni false o inventate, presentate con la stessa sicurezza di quelle corrette: una citazione mai pronunciata, un libro inesistente, una sentenza mai emessa. Nasce dal funzionamento stesso dei modelli linguistici, che producono il testo più plausibile senza verificare se corrisponde ai fatti.",
  shortDefinition: "Informazione falsa o inventata che un sistema di intelligenza artificiale presenta con sicurezza, come se fosse vera.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
  ],
  etymology: "Allucinazione viene dal latino hallucinatio, da (h)allucinari «vaneggiare, sognare a occhi aperti». Il senso informatico ricalca l'inglese hallucination, già usato in ambito tecnico prima dei modelli linguistici; con la loro diffusione il Cambridge Dictionary ha scelto hallucinate come parola dell'anno 2023.",
  examples: [
    "L'avvocato ha citato tre sentenze suggerite da un chatbot: erano allucinazioni AI, e il giudice se n'è accorto subito.",
    "Per ridurre le allucinazioni AI, il sistema risponde solo con i documenti dell'archivio e indica da dove ha preso ogni frase.",
    "La biografia era scritta benissimo, ma metà delle date era un'allucinazione AI.",
  ],
  synonyms: [
    {
      term: "confabulazione",
      register: "tecnico",
      context: "termine della psicologia proposto da alcuni studiosi come più preciso",
      note: "Indica il riempire i vuoti di memoria con ricostruzioni plausibili, senza alterazioni della percezione.",
    },
    {
      term: "invenzione",
      register: "comune",
      context: "resa generica",
    },
    {
      term: "errore fattuale",
      register: "tecnico",
      context: "più neutro",
      note: "Perde, però, il carattere sistematico del fenomeno.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "modello-linguistico",
    "llm",
    "rag",
    "temperatura-ai",
    "prompt",
    "chatbot",
    "geo",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/allucinazione/",
    wiktionary: "https://it.wiktionary.org/wiki/allucinazione",
  },
  paroliereNote: "La metafora è discussa: nell'uomo l'allucinazione è una percezione senza oggetto, mentre il modello non percepisce nulla. Confabulazione sarebbe più esatta, ma la partita l'ha già vinta l'altra parola. C'è anche un rischio retorico: dire che una macchina «allucina» suggerisce una mente che vede male, invece di un sistema che calcola parole probabili senza controllo sui fatti. La → RAG riduce il fenomeno senza eliminarlo; abbassare la → temperatura AI rende le risposte più stabili, non più vere. La verifica umana resta l'unico rimedio sicuro.",
  seo: {
    title: "Allucinazione AI — significato e perché accade | Il Paroliere",
    description: "Che cos'è un'allucinazione AI: l'informazione inventata che un modello presenta come vera. Perché accade, alternative al termine, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
