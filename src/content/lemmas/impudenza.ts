// Il Paroliere — Lemma: impudenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const impudenza: LemmaEntry = {
  lemma: "impudenza",
  slug: "impudenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale"],
  domains: ["etica", "comportamento sociale", "psicologia"],

  definition:
    "Mancanza di pudore o di ritegno nel comportamento, nella parola o " +
    "nell’atteggiamento — non come tratto caratteriale stabile ma come atto o serie " +
    "di atti che violano deliberatamente le aspettative di decoro condivise. " +
    "L’impudente sa che ciò che fa o dice viola una norma e procede comunque, senza " +
    "imbarazzo né riserve. Ha una sfumatura di aggressività assente nel termine " +
    "correlato «sfacciataggine», che è più spesso descrittiva di un tratto di personalità.",

  shortDefinition:
    "Mancanza deliberata di ritegno e pudore, con violazione consapevole delle norme " +
    "di decoro senza imbarazzo né riserve.",

  etymology:
    "Dal latino impudentia, da impudens «senza pudore», composto da in- privativo e " +
    "pudens, participio di pudere «avere vergogna». L’impudente è letteralmente " +
    "«chi non si vergogna» di ciò che gli altri si vergognerebbero.",

  examples: [
    "Rispondere con impudenza a una critica legittima non è sicurezza: è il segnale che la critica ha colpito nel segno.",
    "L’impudenza politica si manifesta quando un rappresentante mente sapendo di mentire davanti a chi sa che mente: è la sfida aperta alla norma della buona fede pubblica.",
    "C’è una differenza tra l’impudenza come scelta tattica — usarla per spiazzare l’avversario — e l’impudenza come tratto: la prima si può controllare, la seconda no.",
    "I bambini sono impudenti senza saperlo: non hanno ancora interiorizzato le norme che l’impudenza viola. Negli adulti, la stessa mancanza di ritegno ha un peso morale diverso.",
  ],

  synonyms: [
    { term: "sfacciataggine", register: "comune", note: "Più descrittivo di un tratto stabile; l’impudenza è più l’atto, la sfacciataggine è più la disposizione." },
    { term: "sfrontatezza", register: "comune-formale", note: "Sottolinea l’aspetto aggressivo del superare deliberatamente i limiti del decoro." },
  ],

  antonyms: [
    { term: "pudore", register: "comune-letterario", note: "L’emozione che l’impudenza non prova — o non lascia agire." },
    { term: "ritegno", register: "comune", note: "Il freno comportamentale che l’impudente non applica." },
  ],

  relatedWords: ["sfacciataggine", "spudoratezza", "vergogna", "verecondia", "arroganza"],
  sourceLinks: {},

  paroliereNote:
    "L’impudenza è interessante perché non è necessariamente negativa in tutti i " +
    "contesti. C’è un’impudenza intellettuale — quella di chi fa le domande che " +
    "nessuno osa fare — che è una forma di coraggio. C’è un’impudenza artistica che " +
    "sposta i confini di ciò che si può mostrare. Il problema è l’impudenza senza " +
    "sostanza: quella che viola le norme non per aprire uno spazio nuovo, ma " +
    "semplicemente per non pagare il costo del rispetto.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "impudenza — la violazione deliberata del decoro tra vizio e coraggio",
    description: "Che cos’è l’impudenza: definizione etica, differenza da sfacciataggine e sfrontatezza, e quando la mancanza di ritegno può essere una virtù.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
