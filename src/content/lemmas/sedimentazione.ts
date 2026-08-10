// Il Paroliere — Lemma: sedimentazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sedimentazione: LemmaEntry = {
  lemma: "sedimentazione",
  slug: "sedimentazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["geologia", "chimica", "società", "cultura", "linguistica"],

  definition:
    "Il processo, o il suo risultato osservabile, per cui particelle solide " +
    "sospese in un liquido si depositano sul fondo per effetto della gravità " +
    "— fenomeno centrale in geologia (la formazione delle rocce sedimentarie) " +
    "e in chimica (la separazione di un precipitato da una soluzione). In " +
    "senso figurato, largamente diffuso nell'uso corrente, la sedimentazione " +
    "è il consolidarsi progressivo nel tempo di un'abitudine, di un tratto " +
    "linguistico, di una pratica culturale o di una struttura sociale, fino a " +
    "diventarne parte stabile e spesso data per scontata. Il senso figurato è " +
    "attestato in italiano almeno dalla fine dell'Ottocento e descrive " +
    "specificamente il carattere cumulativo e stratificato del processo: ciò " +
    "che si è sedimentato non nasce da un unico evento, ma dalla sovrapposizione " +
    "di più fasi successive, spesso non più distinguibili l'una dall'altra nel " +
    "risultato finale.",

  shortDefinition:
    "Deposito di particelle sul fondo di un liquido, o — in senso figurato — " +
    "il consolidarsi progressivo e stratificato nel tempo di abitudini, " +
    "lingue o culture.",

  etymology:
    "Dal latino sedimentum, derivato di sedere («posarsi, stare fermo»), con " +
    "il suffisso -azione che indica il processo. Il senso figurato applicato " +
    "a fenomeni culturali e sociali è attestato in italiano almeno dal 1885, " +
    "secondo i dizionari storici, e si sviluppa per analogia diretta col " +
    "processo geologico: come gli strati di roccia sedimentaria raccontano, a " +
    "chi sa leggerli, la storia successiva di depositi diversi, così una " +
    "pratica culturale sedimentata porta ancora in sé, in filigrana, le " +
    "tracce delle fasi storiche che l'hanno prodotta.",

  examples: [
    "La sedimentazione millenaria dei detriti fluviali ha creato la pianura " +
      "su cui sorge oggi la città.",
    "Certi pregiudizi non nascono da un'unica esperienza, ma da una lenta " +
      "sedimentazione di piccoli episodi ripetuti nel tempo.",
    "Lo storico della lingua studiava la sedimentazione dei prestiti arabi " +
      "nel siciliano medievale, strato dopo strato, secolo dopo secolo.",
    "A differenza dell'→ effimero, che si esaurisce senza lasciare " +
      "conseguenze durature, la sedimentazione presuppone per definizione un " +
      "risultato che permane oltre il momento in cui si è formato.",
  ],

  synonyms: [
    {
      term: "deposito",
      register: "tecnico",
      context: "più orientato al risultato materiale che al processo cumulativo nel tempo",
    },
    {
      term: "stratificazione",
      register: "formale",
      context: "enfatizza la sovrapposizione di strati distinti più della loro origine dal depositarsi",
    },
    {
      term: "consolidamento",
      register: "comune",
      context: "in senso figurato, più orientato alla stabilità raggiunta che al processo di accumulo",
    },
  ],

  antonyms: [
    {
      term: "dissoluzione",
      register: "formale",
      context: "il disfarsi di ciò che si era formato per accumulo, l'opposto del processo di deposito",
    },
    {
      term: "erosione",
      register: "tecnico-geologico",
      context: "processo geologico opposto: l'asportazione di materiale invece del suo deposito",
    },
  ],

  relatedWords: [
    "sedimentare",
    "stratificazione",
    "deposito",
    "consolidamento",
    "erosione",
    "cultura",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ricerca/sedimentazione/",
    wiktionary: "https://it.wiktionary.org/wiki/sedimentazione",
  },

  paroliereNote:
    "Rispetto al verbo → sedimentare, che descrive l'atto in corso, la " +
    "sedimentazione come sostantivo si presta meglio a designare il " +
    "risultato osservabile in un dato momento — utile, per esempio, per " +
    "descrivere lo stato attuale di una lingua o di una cultura come esito di " +
    "sedimentazioni successive, senza dover necessariamente narrare il " +
    "processo che le ha prodotte. È un lemma prezioso in ambito storico e " +
    "sociologico proprio per questa capacità di descrivere la stabilità senza " +
    "presentarla come naturale o inevitabile: parlare di 'sedimentazione' " +
    "invece che, per esempio, di 'tradizione', mantiene visibile il fatto che " +
    "ciò che oggi appare solido è comunque il prodotto storico di un " +
    "accumulo di scelte, eventi e circostanze — non un dato originario. In " +
    "questo senso la sedimentazione culturale ha una parentela concettuale " +
    "con la → transitorietà: ogni sedimento è stato, nel momento in cui si è " +
    "depositato, il risultato transitorio di condizioni che poi sono cambiate, " +
    "lasciando dietro di sé solo lo strato che le testimonia.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Sedimentazione — significato geologico e figurato | Il Paroliere",
    description:
      "Che cos'è la sedimentazione: dal deposito geologico al consolidarsi " +
      "di culture e abitudini nel tempo, etimologia, esempi e differenza da sedimentare.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
