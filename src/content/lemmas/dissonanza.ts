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
    "contemporaneamente credenze o comportamenti contraddittori. In senso estetico " +
    "generale, è la tensione che impedisce l’accordo semplice.",

  shortDefinition:
    "Tensione tra elementi che non si accordano facilmente; in musica, l’intervallo che richiede risoluzione.",

  etymology:
    "Dal latino dissonantia, da dissonare “suonare discordante”, composto da dis- " +
    "“separazione, opposizione” e sonare “suonare”. Il contrario di consonanza.",

  examples: [
    "La dissonanza nel jazz non è un errore da correggere: è un territorio da esplorare. Miles Davis costruiva interi assoli sulla tensione irrisolta, sull’accordo che non arrivava dove ci si aspettava.",
    "La dissonanza cognitiva di chi fuma sapendo che fa male non si risolve smettendo di fumare: spesso si risolve convincendosi che 'a me non capità' — un aggiustamento della credenza, non del comportamento.",
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

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "dissonanza — significato in musica, psicologia ed estetica",
    description: "Dissonanza: dalla tensione musicale alla dissonanza cognitiva. Come l’accordo mancato diventa il motore della narrazione e del pensiero.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
