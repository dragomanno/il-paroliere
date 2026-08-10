// Il Paroliere — Lemma: latenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const latenza: LemmaEntry = {
  lemma: "latenza",
  slug: "latenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "medicina", "informatica", "linguistica"],

  definition:
    "Condizione di ciò che esiste già, in forma completa o embrionale, ma non " +
    "si è ancora manifestato in modo osservabile — una presenza nascosta in " +
    "attesa delle condizioni che la rendano visibile o attiva. Il termine ha " +
    "due impieghi tecnici principali, uniti dalla stessa struttura concettuale " +
    "di fondo. In medicina e psicologia, la latenza è l'intervallo tra una " +
    "causa e la comparsa dei suoi effetti: un'infezione latente è presente " +
    "nell'organismo ma non produce ancora sintomi; un tratto psicologico " +
    "latente esiste nella persona ma non si è ancora espresso in comportamenti " +
    "osservabili. In informatica e nelle telecomunicazioni, la latenza è " +
    "invece il tempo di ritardo tra l'invio di un comando o di un dato e la " +
    "ricezione della risposta — una misura tecnica precisa, spesso in " +
    "millisecondi, che nulla ha a che vedere con l'attesa psicologica se non " +
    "per l'analogia strutturale: qualcosa è già partito, ma il suo effetto " +
    "non è ancora arrivato.",

  shortDefinition:
    "Condizione di ciò che esiste ma non si è ancora manifestato: in " +
    "psicologia e medicina l'intervallo prima dei sintomi, in informatica il " +
    "ritardo tra comando e risposta.",

  etymology:
    "Derivato di latente, dal latino latens, latentis, participio presente di " +
    "latere («stare nascosto, essere celato»). La stessa radice, tramite il " +
    "composto in-, dà anche 'invisibile' in senso figurato di ciò che sta " +
    "sotto la superficie. L'estensione all'ambito informatico — il tempo di " +
    "latenza di una rete o di un dispositivo — è un calco novecentesco " +
    "dall'inglese latency, che a sua volta riprende il significato tecnico " +
    "già presente nella fisiologia sperimentale ottocentesca, dove 'tempo di " +
    "latenza' indicava lo spazio tra uno stimolo e la reazione corrispondente: " +
    "il salto verso l'elettronica digitale ne è una traslazione diretta più " +
    "che un'invenzione terminologica nuova.",

  examples: [
    "Il virus può restare in fase di latenza per anni nell'organismo, senza " +
      "produrre alcun sintomo, prima che qualcosa ne inneschi la riattivazione.",
    "Aveva sempre avuto una latente insofferenza per le regole troppo rigide, " +
      "ma solo in quel nuovo lavoro trovò le condizioni per esprimerla apertamente.",
    "La latenza della connessione era troppo alta per giocare online in modo " +
      "competitivo: ogni comando arrivava al server con un ritardo percepibile.",
    "A differenza dell'→ oblio, in cui il ricordo sembra scomparso del tutto, " +
      "la latenza implica che qualcosa resti intatto sotto la superficie, " +
      "pronto a riemergere non appena le condizioni lo permettano.",
  ],

  synonyms: [
    {
      term: "incubazione",
      register: "tecnico-medico",
      context: "specifico per il periodo tra il contagio e la comparsa dei sintomi di una malattia infettiva",
    },
    {
      term: "sopore",
      register: "letterario",
      context: "stato di quiete apparente che precede un risveglio o una riattivazione, con connotazione più fisica",
    },
    {
      term: "ritardo",
      register: "tecnico-informatico",
      context: "termine generico usato talvolta come sinonimo di latenza in ambito di rete, meno preciso tecnicamente",
    },
  ],

  antonyms: [
    {
      term: "manifestazione",
      register: "comune",
      context: "l'emergere in forma osservabile di ciò che prima era nascosto",
    },
    {
      term: "immediatezza",
      register: "tecnico",
      context: "in informatica, assenza di ritardo percepibile tra comando e risposta",
    },
  ],

  relatedWords: [
    "latente",
    "incubazione",
    "sedimentazione",
    "ritardo",
    "oblio",
    "risveglio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/latenza/",
    wiktionary: "https://it.wiktionary.org/wiki/latenza",
  },

  paroliereNote:
    "È un lemma che vale la pena trattare distinguendo con cura latente da " +
    "sopito, perché la sovrapposizione è comune ma imprecisa. Ciò che è " +
    "sopito è stato attivo e si è temporaneamente placato — un conflitto " +
    "sopito, una passione sopita — con l'implicazione che possa essere già " +
    "avvenuto un risveglio precedente. Ciò che è latente, invece, può non " +
    "essersi mai manifestato: la latenza descrive una potenzialità presente " +
    "sin dall'inizio, non un'attività temporaneamente sospesa. Un talento " +
    "latente non si è mai espresso; una rivalità sopita, invece, è stata " +
    "espressa ed è tornata silenziosa. La coesistenza dei due significati " +
    "tecnici del lemma — clinico-psicologico e informatico — è essa stessa " +
    "un piccolo caso di studio su come una singola struttura concettuale " +
    "(qualcosa è già presente, il suo effetto no) migri da un dominio " +
    "all'altro della conoscenza senza perdere coerenza interna.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Latenza — significato psicologico, medico e informatico | Il Paroliere",
    description:
      "Che cos'è la latenza: dal latino latere, doppio uso in medicina/" +
      "psicologia e in informatica, differenza da 'sopito', con esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
