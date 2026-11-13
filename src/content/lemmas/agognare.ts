// Il Paroliere — Lemma: agognare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const agognare: LemmaEntry = {
  lemma: "agognare",
  slug: "agognare",
  partOfSpeech: "verbo transitivo/intransitivo",
  register: ["letterario", "elevato"],
  domains: ["letteratura", "psicologia", "relazioni"],

  definition: "Desiderare con ostinazione ciò che resta lontano o difficile da raggiungere, avvertendone la mancanza come pena. Si usa transitivamente con l'oggetto desiderato e in costruzioni come «agognare a»; il tono tende al letterario. A differenza di bramare, mette al centro la distanza sofferta; diversamente da vagheggiare, non si compiace soltanto dell'immagine.",

  shortDefinition: "Desiderare intensamente e con pena qualcosa di lontano o difficile da raggiungere.",

  etymology: "Dal latino tardo agoniare, collegato al greco agonía, «lotta, ansia». L'etimo conserva l'idea di una tensione che costa fatica e inquietudine.",

  examples: [
    "Agognava il giorno in cui avrebbe rivisto il mare, dopo un inverno passato lontano dalla costa.",
    "Per mesi hanno agognato a una risposta, senza sapere se la domanda fosse arrivata davvero.",
    "Agognava un riconoscimento che, una volta ottenuto, gli parve meno luminoso dell'attesa.",
  ],

  synonyms: [
    { term: "desiderare", register: "comune", context: "è più neutro e non presuppone né una lunga distanza né sofferenza." },
    { term: "bramare", register: "letterario", context: "è più viscerale e possessivo; agognare insiste sull'assenza che fa male." },
    { term: "vagheggiare", register: "letterario", context: "contempla una possibilità gradevole, mentre agognare vive la lontananza come privazione." },
    { term: "aspirare", register: "comune", context: "orienta un percorso verso il futuro; agognare può restare fermo nell'attesa della meta." },
  ],

  antonyms: [
    { term: "rassegnarsi", register: "comune", context: "smettere di attendere o perseguire ciò che appare irraggiungibile." },
    { term: "dimenticare", register: "comune", context: "lasciare cadere dal pensiero un oggetto che aveva occupato il desiderio." },
  ],

  relatedWords: ["desiderio", "aspirazione", "bramare", "vagheggiare", "speranza", "attesa", "frustrazione", "anelare"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/agognare",
  },

  paroliereNote: "Agognare lascia affiorare la ferita della lontananza: la meta non è solo desiderata, è sentita come sottratta. Ha bisogno di un contesto che regga quella gravità — un'assenza, una prova, una lunga → attesa — e nel parlato quotidiano può suonare deliberatamente letterario.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Agognare — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di agognare: desiderare con pena una meta lontana. Esempi e differenze da bramare, desiderare, aspirare e vagheggiare.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
