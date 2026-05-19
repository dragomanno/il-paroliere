// Il Paroliere — Lemma: querulo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const querulo: LemmaEntry = {
  lemma: "querulo",
  slug: "querulo",
  partOfSpeech: "aggettivo",

  definition:
    "Chi si lamenta in modo continuo e insistente, esternalizzando il disagio attraverso lagnanze ripetute " +
    "che finiscono per stancare chi ascolta. Non è la tristezza o l'insoddisfazione in sé a definirlo, " +
    "ma il gesto di riversarle fuori in forma di protesta petulante. In senso letterario, si applica " +
    "anche a suoni e voci dal tono lamentoso e prolungato.",

  shortDefinition:
    "Incline alla lagnanza continua e petulante; in senso letterario, di suono o voce dal tono lamentoso e insistente.",

  register: ["comune", "letterario"],
  domains: ["comportamento", "psicologia", "letterario"],

  etymology:
    "Dal latino querulus, derivato di queri, 'lamentarsi, protestare'. " +
    "La radice è condivisa con querela e querelare.",

  examples: [
    "Aveva un tono querulo che rendeva ogni richiesta un'accusa implicita.",
    "Il bambino diventava querulo verso sera, quando la stanchezza cedeva alla frustrazione.",
    "Una voce querula e insistente filtrava dalle stanze del piano di sopra.",
    "Non era triste, era querulo — c'è differenza: uno ti commuove, l'altro ti sfianca.",
  ],

  synonyms: [
    {
      term: "lamentoso",
      register: "comune",
      context: "meno letterario, più diretto",
    },
    {
      term: "piagnucoloso",
      register: "colloquiale",
      context: "connotazione infantile o derisoria",
    },
    {
      term: "petulante",
      register: "comune",
      context: "enfatizza l'insistenza più che la lamentela",
    },
  ],

  antonyms: [
    {
      term: "stoico",
      register: "comune",
      context: "chi affronta il disagio senza esteriorizzarlo",
    },
    {
      term: "rassegnato",
      register: "comune",
      context: "chi accetta senza protestare, a differenza del querulo",
    },
  ],

  relatedWords: [
    "querela",
    "querelare",
    "lagnanza",
    "lamento",
    "piagnisteo",
    "protesta",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/querulo/",
    wiktionary: "https://it.wiktionary.org/wiki/querulo",
  },

  paroliereNote:
    "Querulo è una di quelle parole che fanno sentire qualcosa anche nel suono: quella u prolungata, " +
    "quel finale in -ulo, sembrano quasi replicare il tono di chi descrivono. " +
    "Nel parlato quotidiano si preferisce lamentoso o piagnucoloso, ma querulo porta con sé " +
    "una dignità letteraria che rende il fastidio quasi classico.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Querulo — Il Paroliere",
    description:
      "Definizione originale di 'querulo': incline alla lagnanza continua e petulante. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
