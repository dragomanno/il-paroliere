// Il Paroliere — Lemma: connessione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const connessione: LemmaEntry = {
  lemma: "connessione",
  slug: "connessione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico", "psicologico", "digitale"],
  domains: ["psicologia", "sociologia", "comunicazione", "informatica", "internet"],

  definition:
    "1. In senso umano, sottile linea di congiungimento per cui due persone si sentono in sintonia, comprese o vicine; non è soltanto amorosa, ma può nascere dall’amicizia o da un’affinità di carattere e d’indole. 2. In ambito tecnico e di rete, collegamento che permette a dispositivi, servizi o persone di scambiare dati — per esempio una connessione wi-fi o internet. Può aprire una → relazione o rinsaldare un → legame.",

  shortDefinition:
    "Sintonia tra persone oppure collegamento tecnico che consente a dispositivi e reti di comunicare.",

  etymology:
    "Dal latino connexio, derivato di connectere «legare insieme». Il nucleo etimologico del legare spiega perché la parola si adatti tanto alle reti tecnologiche quanto alla vicinanza umana.",

  examples: [
    "Condividevano un umorismo asciutto e un modo simile di osservare il mondo: tra loro c’era connessione, prima ancora che confidenza.",
    "La connessione con il nuovo collega nacque dall’ascolto reciproco, non da una somiglianza di esperienze.",
    "La connessione wi-fi cadeva di continuo e la riunione online procedeva a scatti.",
    "Senza una connessione internet stabile, il sistema non riusciva a sincronizzare i dati.",
  ],

  synonyms: [
    { term: "collegamento", register: "comune/tecnico", context: "Più funzionale e neutro; è il termine preferibile per infrastrutture, trasporti o dispositivi." },
    { term: "sintonia", register: "comune", context: "Indica accordo emotivo o mentale; può riguardare amicizia, affinità di indole o amore, senza implicare un rapporto durevole." },
    { term: "contatto", register: "comune", context: "Può essere breve o puramente pratico; non porta con sé l’idea di corrispondenza profonda." },
  ],

  antonyms: [
    { term: "disconnessione", register: "comune/tecnico", context: "Interruzione di un collegamento tecnico o, figuratamente, di una presenza reciproca." },
    { term: "isolamento", register: "comune", context: "Separazione persistente dai contatti e dalle reti di scambio." },
  ],

  relatedWords: ["comunità", "community", "isolamento", "relazione", "legame", "sintonia", "appartenenza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/connessione",
  },

  paroliereNote:
    "Una connessione non garantisce da sola profondità: si può essere sempre raggiungibili e restare poco in relazione. Nel linguaggio di rete indica una condizione tecnica, misurabile; tra persone nomina invece una corrispondenza sottile, che può essere amicale quanto amorosa. Non confondere la disponibilità di un canale con la presenza dell’altro.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Connessione — definizione, sinonimi, uso | Il Paroliere",
    description: "Connessione: sintonia tra persone e collegamento wi-fi o internet. Definizione, sinonimi, contrari ed esempi d’uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
