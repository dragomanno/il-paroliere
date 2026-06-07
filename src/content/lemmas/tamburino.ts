// Il Paroliere — Lemma: tamburino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tamburino: LemmaEntry = {
  lemma: "tamburino",
  slug: "tamburino",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Nel contesto del Palio di Siena e delle Contrade, il tamburino è il percussionista che " +
    "suona il tamburo durante le cerimonie, i cortei storici e la sfilata in Piazza del Campo " +
    "prima della corsa. Ma dire semplicemente «suona il tamburo» è riduttivo al punto da essere " +
    "fuorviante. I tamburini senesi eseguono figure ritmiche di altissima complessità tecnica, " +
    "elaborate nel corso di secoli di tradizione orale e trasmesse all'interno delle Contrade di " +
    "generazione in generazione. Queste figure — combinazioni di colpi singoli (battuta semplice), " +
    "doppi (rimbalzata), rulli, sincopature e sequenze complesse — non hanno equivalenti in " +
    "nessun'altra tradizione percussiva italiana o europea. Non sono una performance folkloristica " +
    "generica: sono un sistema codificato di virtuosismo che richiede anni di studio e pratica, " +
    "iniziata tipicamente nell'infanzia all'interno della scuola di percussione della propria " +
    "Contrada. La coppia tamburino + alfiere — tamburino e alfiere lavorano sempre insieme, in " +
    "dialogo ritmico e coreografico — costituisce il cuore visivo e sonoro del corteo storico. " +
    "Il ritmo del tamburino guida e sostiene le figure dell'alfiere: i due si ascoltano, si " +
    "rispondono, costruiscono insieme uno spettacolo che è allo stesso tempo musica, danza e " +
    "arte visiva.",

  shortDefinition:
    "Il percussionista del corteo storico del Palio senese; esecutore di figure ritmiche di " +
    "complessità unica al mondo, trasmesse internamente alle Contrade.",

  register: ["tecnico (lessico paliesco)", "comune nel contesto senese"],
  domains: ["tradizione senese", "Palio", "storia", "musica", "cultura popolare"],

  etymology:
    "Diminutivo di tamburo (dall'arabo ṭanbūr o da radici onomatopeiche affini); tamburino " +
    "indica sia lo strumento sia il suonatore.",

  examples: [
    "I tamburini delle Contrade senesi si sfidano durante i campionati di tamburinazione: non è folklore, è virtuosismo puro.",
    "Quel tamburino della Contrada della Tartuca aveva cominciato a suonare a sei anni: a trenta era già una leggenda.",
    "Il ritmo del tamburino guida ogni passo dell'alfiere: senza quella base ritmica, le figure con la bandiera perdono la loro struttura.",
  ],

  synonyms: [
    {
      term: "percussionista",
      register: "generico",
      context: "insufficiente nel contesto senese specifico",
    },
  ],

  relatedWords: [
    "alfiere",
    "correttore",
    "Palio di Siena",
    "Contrada",
    "corteo storico",
    "tamburo",
    "musica medievale",
    "tradizione orale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/tamburino/",
    wiktionary: "https://it.wiktionary.org/wiki/tamburino",
  },

  paroliereNote:
    "Il tamburino senese è probabilmente la figura meno conosciuta al di fuori di Siena tra " +
    "quelle legate al Palio, eppure è tra le più straordinarie sul piano tecnico. Le figure " +
    "ritmiche eseguite dai tamburini senesi non sono state codificate in un metodo scritto " +
    "universale — vivono nella tradizione orale delle Contrade, trasmesse da maestro ad allievo " +
    "all'interno della comunità. Questo le rende uniche e, in un certo senso, fragili: dipendono " +
    "dalla continuità della comunità che le porta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tamburino — Palio di Siena, figure, tradizione | Il Paroliere",
    description:
      "Il tamburino nel Palio di Siena: non è folklore, è virtuosismo. Le figure ritmiche " +
      "uniche al mondo, la relazione con l'alfiere. Definizione con nota storica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
