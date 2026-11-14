// Il Paroliere — Lemma: entropia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const entropia: LemmaEntry = {
  lemma: "entropia",
  slug: "entropia",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "1. In termodinamica, grandezza che misura quanta parte dell'energia di un sistema non è più disponibile per produrre lavoro; in termini statistici, è legata al numero di configurazioni microscopiche compatibili con lo stato del sistema. Il secondo principio della termodinamica stabilisce che in un sistema isolato l'entropia non diminuisce mai: per questo il calore passa spontaneamente dal caldo al freddo e non al contrario. 2. Nella teoria dell'informazione, misura dell'incertezza media dei messaggi prodotti da una fonte, introdotta da Claude Shannon nel 1948: più un messaggio è imprevedibile, più informazione porta. 3. In senso figurato, tendenza di un sistema, di un'organizzazione o di una situazione a scivolare verso il disordine e il degrado, se nessuno interviene.",
  shortDefinition: "Grandezza che misura l'energia non più utilizzabile e il disordine di un sistema; in figurato, tendenza al disordine.",
  register: [
    "tecnico-scientifico",
    "figurato",
  ],
  domains: [
    "fisica",
    "termodinamica",
    "informatica",
  ],
  etymology: "Dal tedesco Entropie, coniato nel 1865 dal fisico Rudolf Clausius sul greco en- «dentro» e tropḗ «trasformazione, svolta». Clausius volle una parola che somigliasse a energia, perché le due grandezze gli parevano parenti strette, e che si potesse usare identica in tutte le lingue.",
  examples: [
    "Quando il ghiaccio si scioglie nel bicchiere, l'entropia del sistema aumenta.",
    "Un file compresso al massimo ha un'entropia vicina al limite teorico: non resta nulla di ripetitivo da togliere.",
    "Senza una regia, l'archivio dell'ufficio è precipitato in pochi mesi in uno stato di entropia totale.",
  ],
  synonyms: [
    {
      term: "disordine",
      register: "comune",
      context: "solo nel senso figurato e divulgativo",
    },
    {
      term: "degrado",
      register: "comune",
      context: "nel senso figurato di decadimento progressivo",
    },
  ],
  antonyms: [
    {
      term: "ordine",
      register: "comune",
      context: "nel senso figurato",
    },
    {
      term: "negentropia",
      register: "tecnico-scientifico",
      context: "entropia negativa: termine della cibernetica e della teoria dei sistemi per l'ordine che un sistema vivente produce",
    },
  ],
  relatedWords: [
    "termodinamica",
    "temperatura",
    "evaporazione",
    "condensazione",
    "legge-di-boyle",
    "calore",
    "kelvin",
    "joule",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/entropia/",
    wiktionary: "https://it.wiktionary.org/wiki/entropia",
  },
  paroliereNote: "Entropia è una delle parole scientifiche più fortunate fuori dai laboratori, e anche una delle più maltrattate. L'equazione «entropia uguale disordine» è un'immagine utile, ma la fisica dice qualcosa di più preciso: conta quante disposizioni microscopiche producono lo stesso stato visibile, e una stanza in disordine non ha più entropia termodinamica di una in ordine. Boltzmann diede alla grandezza la sua forma statistica, S = k log W, la formula oggi incisa sulla sua tomba a Vienna. Il figurato, applicato a uffici, città e governi, resta vivo ed espressivo, a patto di non scambiarlo per una legge fisica. Vedi → termodinamica.",
  seo: {
    title: "Entropia — significato in fisica e senso figurato | Il Paroliere",
    description: "Che cos'è l'entropia: la grandezza che misura l'energia non più utilizzabile e il disordine di un sistema. Clausius, Shannon, senso figurato, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
