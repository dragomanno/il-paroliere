// Il Paroliere — Lemma: ontologia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ontologia: LemmaEntry = {
  lemma: "ontologia",
  slug: "ontologia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition: "In filosofia, la riflessione sull'essere in quanto tale e sulle categorie fondamentali di ciò che esiste. In informatica, un modello formale di un campo di conoscenza: elenca i tipi di entità, le loro proprietà e le relazioni ammesse, in modo che persone e programmi usino gli stessi concetti con lo stesso significato.",
  shortDefinition: "Studio filosofico dell'essere; in informatica, modello formale dei concetti di un campo e delle loro relazioni.",
  register: [
    "tecnico",
    "colto",
  ],
  domains: [
    "filosofia",
    "informatica",
    "intelligenza artificiale",
  ],
  etymology: "Dal latino moderno ontologia, formato sul greco ón, óntos «ente, ciò che è», participio di eînai «essere», e -logía «discorso, studio». Il termine compare all'inizio del Seicento nella filosofia scolastica tedesca e si afferma nel Settecento con Christian Wolff; l'informatica lo adotta all'inizio degli anni Novanta, con la definizione di Tom Gruber del 1993.",
  examples: [
    "Per Heidegger l'ontologia tradizionale aveva dimenticato la domanda sul senso dell'essere.",
    "L'ontologia del museo stabilisce che ogni opera ha un autore, una datazione e un luogo di conservazione, e che l'autore può essere una persona o una bottega.",
    "Prima di unire i due database serve un'ontologia comune: per uno «cliente» è chi ha comprato, per l'altro anche chi ha solo chiesto un preventivo.",
  ],
  synonyms: [
    {
      term: "metafisica",
      register: "filosofico",
      context: "solo nel senso filosofico",
      note: "Non coincide: per la tradizione l'ontologia ne è la parte generale, la metafisica abbraccia anche Dio, anima e mondo.",
    },
    {
      term: "tassonomia",
      register: "tecnico",
      context: "informatica",
      note: "Solo gerarchia di categorie; l'ontologia aggiunge relazioni e vincoli.",
    },
    {
      term: "schema concettuale",
      register: "tecnico",
      context: "informatica",
      note: "Più debole: descrive strutture senza necessariamente regole logiche.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "metafisica",
    "filosofia",
    "epistemologia",
    "semantica",
    "web-semantico",
    "knowledge-graph",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ontologia/",
    wiktionary: "https://it.wiktionary.org/wiki/ontologia",
  },
  paroliereNote: "Raro caso di parola filosofica che l'informatica ha preso in prestito senza tradirla del tutto: in entrambi i sensi l'ontologia risponde alla domanda «che cosa esiste, e come si distingue?», solo che il filosofo la rivolge al mondo e l'ingegnere a un campo delimitato. La definizione di Gruber, «an explicit specification of a conceptualization», è diventata un classico. Nel marketing circola anche un uso enfatico, «l'ontologia del brand», dove spesso basterebbe identità. In un → knowledge graph l'ontologia è lo schema; il grafo è l'insieme dei fatti che lo popolano.",
  seo: {
    title: "Ontologia — significato in filosofia e informatica | Il Paroliere",
    description: "Che cos'è l'ontologia: lo studio dell'essere e, in informatica, il modello formale dei concetti di un campo. Etimologia, differenze, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
