// Il Paroliere — Lemma: semantica
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const semantica: LemmaEntry = {
  lemma: "semantica",
  slug: "semantica",
  partOfSpeech: "sostantivo femminile; anche aggettivo (semantico/a)",
  gender: "femminile",

  definition:
    "La branca della linguistica che studia il significato delle parole, delle " +
    "frasi e dei testi: come il senso si costruisce, come si trasforma nel tempo " +
    "(semantica diacronica), come varia tra contesti e parlanti (semantica " +
    "pragmatica), come le parole si relazionano tra loro in reti di significato " +
    "(relazioni semantiche: sinonimia, antonimia, iponimia, iperonimia). Più in " +
    "generale, semantica indica tutto ciò che riguarda il significato in " +
    "contrapposizione alla forma: la semantica di un termine è il suo contenuto " +
    "concettuale, non la sua struttura fonologica o grammaticale. In informatica " +
    "e nel web, il concetto di web semantico (o Semantic Web) designa " +
    "un'architettura di dati strutturati in cui le informazioni sono leggibili " +
    "non solo dagli esseri umani ma anche dalle macchine, attraverso ontologie e " +
    "standard come RDF e OWL. Nel marketing digitale, la SEO semantica indica un " +
    "approccio all'ottimizzazione per i motori di ricerca basato non sul singolo " +
    "termine chiave, ma sulla copertura di un campo semantico: raggruppamenti " +
    "tematici (topic cluster), relazioni concettuali tra pagine, sinonimi e " +
    "varianti, intenzione di ricerca (search intent). I motori di ricerca moderni " +
    "(Google con BERT e sistemi basati su modelli linguistici) comprendono il " +
    "significato, non contano le parole: un contenuto semanticamente ricco ma " +
    "genuinamente utile supera sempre uno costruito artificialmente.",

  shortDefinition:
    "Branca della linguistica che studia il significato delle parole e dei testi; per estensione, tutto ciò che riguarda il contenuto concettuale di un'espressione.",

  register: ["tecnico", "comune"],
  domains: ["linguistica", "logica", "filosofia del linguaggio", "informatica", "SEO", "marketing digitale"],

  etymology:
    "Dal greco sēmantikós («che significa, relativo al significato»), derivato di " +
    "sēmaínein («significare, indicare»), da sêma («segno, segnale»). Il termine " +
    "entra nelle lingue europee nel XIX secolo attraverso il francese sémantique, " +
    "coniato dal linguista Michel Bréal nel 1883.",

  examples: [
    'La semantica studia non solo le parole ma le relazioni tra i significati: perché "cane" e "cagna" non sono intercambiabili in tutti i contesti?',
    "Il web semantico non è una tecnologia ma un'architettura: i dati non si leggono solo, si comprendono.",
    "In SEO, la semantica è diventata fondamentale: Google non cerca parole chiave, cerca risposte coerenti a domande reali.",
    "La semantica di quella frase era ambigua: letteralmente diceva una cosa, ma tutti capivano il contrario.",
  ],

  synonyms: [
    {
      term: "semasiologia",
      register: "tecnico-scientifico",
      context: "studio del significato dal segno al concetto",
    },
  ],

  antonyms: [
    {
      term: "sintassi",
      register: "tecnico",
      context: "studia la forma e la struttura, non il significato",
    },
    {
      term: "fonologia",
      register: "tecnico",
      context: "studia i suoni, non i significati",
    },
  ],

  relatedWords: [
    "sinonimia",
    "antonimia",
    "iponimia",
    "iperonimia",
    "pragmatica",
    "semiotica",
    "web semantico",
    "SEO semantica",
    "search intent",
    "topic cluster",
    "ontologia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/semantica/",
    wiktionary: "https://it.wiktionary.org/wiki/semantica",
  },

  paroliereNote:
    "Semantica è uno di quei termini tecnici che ha fatto il salto dal mondo " +
    "accademico al gergo professionale del marketing digitale — e nel tragitto ha " +
    "perso un po' di precisione. Nel senso originale, la semantica è la disciplina " +
    "che studia il significato: una delle più complesse e affascinanti della " +
    "linguistica, perché il significato non è mai fisso, mai neutro, mai " +
    "individuale. Nel senso SEO corrente, \"semantica\" rischia di diventare " +
    "sinonimo di \"parole correlate\" — una riduzione che impoverisce il termine. " +
    "Vale la pena ricordare che la semantica è interessante proprio perché il " +
    "significato è sfuggente: cambia con il contesto, con il tempo, con chi parla " +
    "e con chi ascolta. Il Paroliere è, in fondo, un progetto semantico.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Semantica — linguistica, web semantico, SEO | Il Paroliere",
    description:
      "Cosa studia la semantica, cos'è il web semantico, come funziona la SEO semantica. Definizione originale con esempi dalla linguistica al marketing digitale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
