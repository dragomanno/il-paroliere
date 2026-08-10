// Il Paroliere — Lemma: dissonanza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dissonanza: LemmaEntry = {
  lemma: "dissonanza",
  slug: "dissonanza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["musica", "psicologia", "estetica", "linguistica"],

  definition:
    "In musica, l’intervallo o l’accordo che produce una tensione percepibile, che " +
    "richiede risoluzione verso una consonanza. Non è necessariamente spiacevole: è il " +
    "motore della narrazione musicale, la forza che spinge il suono in avanti. In " +
    "psicologia, la dissonanza cognitiva è il disagio prodotto dal tenere " +
    "contemporaneamente credenze, convinzioni o comportamenti tra loro contraddittori. " +
    "Il concetto fu formulato dallo psicologo statunitense Leon Festinger nel 1957, a " +
    "partire dallo studio di un gruppo che credeva in una profezia di fine del mondo: " +
    "quando la data prevista passò senza che nulla accadesse, i membri non abbandonarono " +
    "la fede, ma la riadattarono per renderla coerente con i fatti, evitando così il " +
    "disagio insostenibile di ammettere l'errore. Festinger ne trasse la teoria secondo " +
    "cui, quando un comportamento e una credenza confliggono, la mente tende a ridurre " +
    "il disagio non necessariamente cambiando il comportamento, ma più spesso aggiustando " +
    "la credenza, minimizzando la contraddizione o cercando informazioni che la attenuino. " +
    "Nell'uso corrente, l'espressione 'dissonanza cognitiva' è entrata nel linguaggio comune " +
    "per descrivere, spesso in tono critico, l'incoerenza tra ciò che una persona dichiara " +
    "di credere e ciò che effettivamente fa, o tra opinioni sostenute in momenti diversi " +
    "senza che il conflitto venga mai apertamente riconosciuto. In senso estetico " +
    "generale, la dissonanza è la tensione che impedisce l’accordo semplice.",

  shortDefinition:
    "Tensione tra elementi che non si accordano facilmente; in musica, l’intervallo che richiede risoluzione.",

  etymology:
    "Dal latino dissonantia, da dissonare “suonare discordante”, composto da dis- " +
    "“separazione, opposizione” e sonare “suonare”. Il contrario di consonanza.",

  examples: [
    "La dissonanza nel jazz non è un errore da correggere: è un territorio da esplorare. Miles Davis costruiva interi assoli sulla tensione irrisolta, sull’accordo che non arrivava dove ci si aspettava.",
    "La dissonanza cognitiva di chi fuma sapendo che fa male non si risolve smettendo di fumare: spesso si risolve convincendosi che 'a me non capità' — un aggiustamento della credenza, non del comportamento, esattamente come descriveva Festinger.",
    "Gli si faceva notare la dissonanza cognitiva tra il suo elogio pubblico della sobrietà e le sue abitudini private, ma lui trovava sempre una spiegazione che rendeva le due cose, ai suoi occhi, perfettamente coerenti.",
    "Certe architetture contemporanee usano la dissonanza formale deliberatamente: l’angolo che non si aspettavi, la facciata che nega il contesto, la materialità che stona. Non è sempre arbitrario.",
    "La dissonanza tra le aspettative di un testo e il suo tono produce uno straniamento utile: il lettore deve fermarsi, rileggere, aggiustare la propria mappa del testo.",
  ],

  synonyms: [
    { term: "stonatura", register: "comune", note: "Il sinonimo quotidiano e spesso negativo; dissonanza è neutro, stonatura implica errore." },
    { term: "tensione", register: "comune-tecnico", note: "Più astratto: la forza che separa ciò che cerca di risolversi." },
  ],

  antonyms: [
    { term: "consonanza", register: "tecnico-musicale", note: "L’accordo che non richiede risoluzione, stabile e percepibilmente 'giusto'." },
    { term: "armonia", register: "tecnico-comune", note: "L’accordo tra le parti come stato di equilibrio e completezza." },
  ],

  relatedWords: ["armonia", "ritmo", "contrasto-estetico", "asimmetria"],

  paroliereNote:
    "La dissonanza è il motore segreto di tanta grande arte: non è il problema da risolvere, " +
    "è la tensione che rende possibile la risoluzione. Un’opera senza dissonanza non ha " +
    "tragitto — arriva dove stava già. La dissonanza pone una domanda; la consonanza è " +
    "la risposta. Togliere la dissonanza significa togliere la domanda, e quindi annullare " +
    "il senso del percorso.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "dissonanza — significato in musica, psicologia ed estetica",
    description: "Dissonanza: dalla tensione musicale alla dissonanza cognitiva. Come l’accordo mancato diventa il motore della narrazione e del pensiero.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-08-10",
};
