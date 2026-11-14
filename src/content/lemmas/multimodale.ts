// Il Paroliere — Lemma: multimodale
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const multimodale: LemmaEntry = {
  lemma: "multimodale",
  slug: "multimodale",
  partOfSpeech: "aggettivo",
  gender: "maschile e femminile",
  definition: "Che combina più modalità o canali. Nell'intelligenza artificiale si dice di un sistema capace di ricevere e produrre contenuti di tipo diverso, come testo, immagini, audio e video, mettendoli in relazione: descrivere una foto, rispondere a voce, leggere un grafico. Nei trasporti indica un viaggio o una spedizione che usa più mezzi, in statistica una distribuzione con più valori di massima frequenza.",
  shortDefinition: "Che combina più modalità: nell'IA, sistema che tratta testo, immagini, audio e video; nei trasporti, che usa più mezzi.",
  register: [
    "tecnico",
    "comune",
  ],
  domains: [
    "intelligenza artificiale",
    "trasporti",
    "statistica",
  ],
  etymology: "Composto di multi-, dal latino multus «molto», e modale, da modo, dal latino modus «misura, maniera». Il modello è l'inglese multimodal; in italiano l'aggettivo era già in uso nella statistica e nei trasporti prima di entrare nel lessico dell'intelligenza artificiale.",
  examples: [
    "Il modello multimodale ha letto la foto dello scontrino e ha diviso la spesa fra i quattro amici.",
    "Con un assistente multimodale puoi inquadrare la pianta del balcone e chiedere perché ha le foglie gialle.",
    "Il trasporto multimodale delle merci combina nave, treno e camion con un unico contratto.",
    "La distribuzione delle età è multimodale: un picco di studenti e uno di pensionati.",
  ],
  synonyms: [
    {
      term: "multimediale",
      register: "comune",
      context: "falso amico",
      note: "Descrive un contenuto che usa più media, non la capacità di un sistema di comprenderli.",
    },
    {
      term: "intermodale",
      register: "tecnico",
      context: "trasporti",
      note: "Vicino a multimodale, ma implica un'unità di carico, come il container, che passa da un mezzo all'altro.",
    },
  ],
  antonyms: [
    {
      term: "unimodale",
      register: "tecnico",
      context: "sistema o distribuzione con una sola modalità",
    },
  ],
  relatedWords: [
    "modello-linguistico",
    "llm",
    "deep-learning",
    "assistente-virtuale",
    "chatbot",
    "gemini",
    "embedding",
  ],
  sourceLinks: {},
  paroliereNote: "Aggettivo vecchio con un mestiere nuovo: prima dell'intelligenza artificiale lo usavano soprattutto logistici e statistici. Nei modelli di oggi la multimodalità è diventata la norma più che l'eccezione, e la distinzione che conta è un'altra: alcuni sistemi nascono multimodali e trattano tutti i tipi di dati nello stesso spazio, altri collegano in sequenza modelli diversi. Da non confondere con multimediale, che descrive il contenuto; multimodale descrive il sistema che lo comprende o lo produce.",
  seo: {
    title: "Multimodale — significato nell'IA e nei trasporti | Il Paroliere",
    description: "Che cosa significa multimodale: sistemi AI che trattano testo, immagini, audio e video, ma anche trasporti e statistica. Differenza con multimediale.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
