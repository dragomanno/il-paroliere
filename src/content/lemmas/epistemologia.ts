// Il Paroliere — Lemma: epistemologia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const epistemologia: LemmaEntry = {
  lemma: "epistemologia",
  slug: "epistemologia",
  partOfSpeech: "sostantivo femminile",

  definition:
    "La branca della filosofia che studia la conoscenza stessa: come è possibile, quali sono " +
    "i suoi fondamenti, i suoi limiti e i suoi criteri di validità. Non si chiede cosa sappiamo, " +
    "ma come sappiamo, perché ci fidiamo di certi metodi di conoscenza e non di altri, e cosa " +
    "significa davvero «sapere qualcosa». Il Novecento è stato il secolo in cui l'epistemologia " +
    "ha raggiunto la sua massima maturità e, al tempo stesso, la sua crisi più profonda. " +
    "Martin Heidegger (1889–1976) sposta l'asse dall'epistemologia alla ontologia: la conoscenza " +
    "non è mai neutrale, è sempre situata in un orizzonte storico e culturale (Dasein, " +
    "«essere-nel-mondo»). Theodor W. Adorno e Max Horkheimer (Scuola di Francoforte): la " +
    "Dialettica dell'Illuminismo (1944) è una critica epistemologica radicale alla ragione " +
    "moderna — la ragione strumentale non è neutrale, serve interessi. Jürgen Habermas (1929–) " +
    "propone un'epistemologia del dialogo: la conoscenza valida è quella che emerge da un " +
    "processo di comunicazione libera, razionale e non distorta. Jacques Derrida (1930–2004) " +
    "usa la decostruzione per mostrare come ogni discorso sia costruito su opposizioni binarie " +
    "instabili. Zygmunt Bauman (1925–2017) sviluppa un'epistemologia della modernità liquida: " +
    "i grandi sistemi di spiegazione — la religione, il marxismo, il liberalismo progressista — " +
    "hanno perso la loro forza vincolante. Sapere, nell'epoca liquida, significa navigare " +
    "nell'incertezza senza mappe stabili.",

  shortDefinition:
    "La branca della filosofia che studia i fondamenti, i limiti e i criteri della conoscenza; " +
    "la domanda non è cosa sappiamo ma come e perché sappiamo.",

  register: ["tecnico (filosofia)", "comune nel parlato accademico e colto"],
  domains: ["filosofia", "scienze umane", "storia del pensiero", "teoria della conoscenza"],

  etymology:
    "Dal greco episteme («conoscenza, sapere») + logos («studio, discorso»): letteralmente " +
    "«discorso sul sapere». Episteme si distingue dalla doxa («opinione»): è la conoscenza " +
    "fondata e giustificata, non la credenza.",

  examples: [
    "«L'epistemologia di Heidegger non separa il soggetto conoscente dal mondo in cui è immerso: non possiamo capire come conosciamo senza capire come siamo-nel-mondo.»",
    "«Adorno sosteneva che la ragione illuminista aveva tradito se stessa: l'epistemologia della modernità aveva prodotto Auschwitz tanto quanto aveva prodotto la penicillina.»",
    "«La domanda epistemologica fondamentale della post-modernità è: se non esistono metanarrativi credibili, su quale fondamento costruiamo la conoscenza e l'etica?»",
  ],

  synonyms: [
    {
      term: "teoria della conoscenza",
      register: "comune",
      context: "denominazione descrittiva equivalente",
    },
    {
      term: "gnoseologia",
      register: "tecnico",
      context: "termine equivalente, più classico",
    },
    {
      term: "filosofia della scienza",
      register: "tecnico",
      context: "parzialmente equivalente",
    },
  ],

  antonyms: [
    {
      term: "dogmatismo",
      register: "tecnico",
      context: "posizione opposta: la conoscenza è certa e non interrogabile",
    },
  ],

  relatedWords: [
    "aporìa",
    "liquidità",
    "olistico",
    "semantica",
    "gnoseologia",
    "ontologia",
    "Heidegger",
    "Adorno",
    "Habermas",
    "Derrida",
    "Bauman",
    "Scuola di Francoforte",
    "metanarrativo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/epistemologia/",
    wiktionary: "https://it.wiktionary.org/wiki/epistemologia",
  },

  paroliereNote:
    "L'epistemologia è la madre di tutte le domande filosofiche perché interroga il presupposto " +
    "di ogni altra domanda: come faccio a sapere ciò che credo di sapere? È una domanda che il " +
    "pensiero ordinario evita perché è destabilizzante — ci siamo abituati ad agire come se il " +
    "nostro modo di conoscere fosse ovvio e naturale. I grandi filosofi del Novecento — da " +
    "Heidegger a Derrida, da Adorno a Bauman — hanno mostrato che non lo è affatto: ogni sistema " +
    "di conoscenza è situato, interessato, parziale. Non è nichilismo: è onestà intellettuale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Epistemologia — Heidegger, Adorno, Bauman, teoria della conoscenza | Il Paroliere",
    description:
      "Cosa significa epistemologia, i grandi protagonisti del Novecento, da Heidegger a " +
      "Bauman. Come conosciamo, perché conosciamo. Definizione filosofica completa.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
