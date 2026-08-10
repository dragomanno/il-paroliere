// Il Paroliere — Lemma: perifrasi
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const perifrasi: LemmaEntry = {
  lemma: "perifrasi",
  slug: "perifrasi",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["linguaggio", "retorica"],

  definition:
    "Figura retorica che consiste nell'esprimere un concetto non con il termine diretto e proprio, ma con un giro di parole più esteso che ne evoca il senso — comunemente detta anche circonlocuzione. La perifrasi può nascere da esigenze stilistiche, per evitare una ripetizione ravvicinata dello stesso termine o per creare un effetto poetico ed evocativo ('il re della foresta' per 'il leone'), oppure da esigenze pragmatiche di cortesia o attenuazione, sovrapponendosi in questo caso alla funzione dell'eufemismo ('cadere fra le braccia di Morfeo' per 'addormentarsi'). Nel linguaggio burocratico e amministrativo, la stessa struttura — dire con molte parole ciò che si potrebbe dire con poche — perde però la sua funzione espressiva e diventa spesso un difetto stilistico, sintomo di verbosità o di volontà di attenuare responsabilità.",

  shortDefinition:
    "Espressione di un concetto tramite un giro di parole invece del termine diretto — circonlocuzione, per effetto poetico, cortesia o verbosità.",

  etymology:
    "Dal greco *períphrasis*, composto da *perí* «intorno» e *phrázein* «parlare, esprimere»: letteralmente «parlare intorno» — dire qualcosa girandoci attorno invece di nominarla direttamente.",

  examples: [
    "'Colui che tutto move' è la celebre perifrasi dantesca per indicare Dio, senza mai nominarlo direttamente nel verso.",
    "'L'azienda ha proceduto a una razionalizzazione dell'organico' è una perifrasi burocratica per 'ha licenziato dei dipendenti'.",
    "In poesia, 'l'astro del giorno' per 'il sole' è una perifrasi che eleva stilisticamente un termine altrimenti comune.",
    "Usare 'la Città Eterna' invece di 'Roma' è una perifrasi che evita la ripetizione e aggiunge una sfumatura evocativa.",
  ],

  synonyms: [
    { term: "circonlocuzione", register: "tecnico", note: "Sinonimo pressoché perfetto, forse leggermente più tecnico e meno letterario nell'uso corrente." },
    { term: "giro di parole", register: "colloquiale", note: "Versione informale e trasparente dello stesso concetto." },
  ],

  antonyms: [
    { term: "designazione diretta", register: "comune", note: "L'uso del termine proprio, senza mediazione descrittiva o evocativa." },
  ],

  relatedWords: ["metonimia", "eufemismo", "ridondanza"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/perifrasi/",
    wiktionary: "https://it.wiktionary.org/wiki/perifrasi",
  },

  paroliereNote:
    "La perifrasi ha un doppio volto morale, per così dire: in poesia è quasi sempre una virtù, un modo per arricchire un'immagine e sottrarla alla banalità del nome proprio; nel linguaggio amministrativo e aziendale, invece, la stessa identica tecnica retorica diventa spesso un sintomo di burocratese o, peggio, uno strumento per diluire responsabilità dietro formulazioni vaghe e prolisse. Il confine tra le due funzioni non sta nella struttura linguistica — identica in entrambi i casi — ma nell'intenzione di chi scrive: arricchire il senso, oppure occultarlo.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "perifrasi — significato, circonlocuzione, esempi",
    description:
      "Che cos'è la perifrasi: il giro di parole retorico tra effetto poetico, cortesia eufemistica e verbosità burocratica.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
