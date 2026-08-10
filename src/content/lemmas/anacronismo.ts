// Il Paroliere — Lemma: anacronismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const anacronismo: LemmaEntry = {
  lemma: "anacronismo",
  slug: "anacronismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["formale", "comune"],
  domains: ["storia", "letteratura", "linguistica", "filosofia"],

  definition:
    "Errore o scarto cronologico per cui un oggetto, un'idea, un costume o un " +
    "linguaggio vengono collocati in un'epoca a cui non appartengono — " +
    "tipicamente attribuendo al passato elementi che esistono solo nel " +
    "presente, ma anche, meno comunemente, il contrario. In senso tecnico " +
    "(storiografico, filologico, cinematografico) è un errore da correggere: " +
    "un orologio da polso in un film ambientato nell'antica Roma, un " +
    "personaggio medievale che ragiona con categorie psicologiche moderne. In " +
    "senso figurato, applicato a persone, idee o istituzioni, indica invece " +
    "ciò che è rimasto fuori dal proprio tempo — sopravvissuto a un'epoca che " +
    "lo ha reso obsoleto, spesso con una sfumatura critica ma talvolta anche " +
    "con una punta di rispetto per ciò che resiste al cambiamento.",

  shortDefinition:
    "Errore cronologico per cui un elemento del presente viene collocato nel " +
    "passato; in senso figurato, ciò che è rimasto fuori dal proprio tempo.",

  etymology:
    "Dal greco *anachronismós* (ἀναχρονισμός), composto dal prefisso *anà-* " +
    "(«contro, indietro») e *chrónos* («tempo»). Letteralmente 'andare contro " +
    "il tempo' o 'essere fuori tempo'. Il termine è un conio filologico " +
    "relativamente tardo rispetto alla parola greca classica, entrato in uso " +
    "moderno nelle lingue europee soprattutto a partire dal Seicento, in " +
    "coincidenza con lo sviluppo della critica storica e filologica che per " +
    "prima rese sistematico l'interesse per l'accuratezza cronologica dei testi " +
    "e delle opere d'arte.",

  examples: [
    "Il critico segnalò un anacronismo nel romanzo storico: un personaggio " +
      "dell'Ottocento citava un'espressione entrata nell'uso solo un secolo dopo.",
    "Alcuni chiamano anacronismo la monarchia in una repubblica moderna, altri " +
      "ne difendono la sopravvivenza proprio in nome della continuità storica " +
      "che rappresenta — lo stesso fatto, letto con giudizi opposti.",
    "\"Sei un anacronismo vivente\", gli disse ridendo, guardando la sua " +
      "collezione di dischi in vinile e il rifiuto ostinato di usare lo streaming.",
    "A differenza del → vestigio, che è un resto materiale onestamente " +
      "collocato nel tempo che gli appartiene, l'anacronismo nasce da un " +
      "errore o da una scelta deliberata di mescolare epoche diverse.",
  ],

  synonyms: [
    {
      term: "fuori tempo",
      register: "comune",
      context: "resa colloquiale, meno tecnica, usata soprattutto in senso figurato riferita a persone o idee",
    },
    {
      term: "obsolescenza",
      register: "tecnico",
      context: "più orientato al superamento funzionale di un oggetto o un sistema che allo scarto temporale in sé",
    },
  ],

  antonyms: [
    {
      term: "attualità",
      register: "comune",
      context: "coerenza piena con il proprio tempo storico",
    },
    {
      term: "sincronia",
      register: "tecnico",
      context: "coincidenza temporale corretta tra elementi che devono appartenere alla stessa epoca",
    },
  ],

  relatedWords: [
    "anacronistico",
    "obsoleto",
    "vestigio",
    "sincronia",
    "epoca",
    "filologia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/anacronismo/",
    wiktionary: "https://it.wiktionary.org/wiki/anacronismo",
  },

  paroliereNote:
    "L'anacronismo in senso figurato merita una nota di cautela editoriale " +
    "opposta a quella solitamente riservata ai termini spregiativi: non è " +
    "sempre un giudizio negativo. Chiamare anacronistica un'istituzione, una " +
    "pratica o perfino una persona può voler dire che sono sopravvissute a un " +
    "mondo che le renderebbe superflue — un fatto, non necessariamente un " +
    "difetto. Ci sono anacronismi funzionali (una tradizione cerimoniale " +
    "conservata per il suo valore simbolico, non per utilità pratica) e " +
    "anacronismi patologici (un'idea o una legge che continua a produrre " +
    "danno concreto pur essendo stata concepita per un contesto scomparso). " +
    "La distinzione, quasi sempre implicita nel modo in cui il termine viene " +
    "usato, vale la pena renderla esplicita ogni volta che il lemma compare " +
    "in un contesto valutativo piuttosto che puramente descrittivo.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Anacronismo — significato, origine ed esempi | Il Paroliere",
    description:
      "Che cos'è l'anacronismo: errore cronologico ed espressione figurata, " +
      "etimologia dal greco, differenza da obsolescenza e vestigio, con esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
