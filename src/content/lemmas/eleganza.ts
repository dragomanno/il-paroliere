// Il Paroliere — Lemma: eleganza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const eleganza: LemmaEntry = {
  lemma: "eleganza",
  slug: "eleganza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale"],
  domains: ["estetica", "moda", "matematica", "letteratura", "comportamento"],

  definition:
    "Qualità di chi o ciò che è raffinato, ben proporzionato e privo di eccessi — non " +
    "per ostentazione ma per misura. L’eleganza non è il lusso: è la qualità di ciò che " +
    "fa esattamente quello che deve fare, nel modo più efficiente e armonioso possibile. " +
    "In matematica, una dimostrazione elegante è quella che risolve un problema complesso " +
    "con il minimo di passaggi necessari. In moda, è la cura della forma senza la sua " +
    "esibizione.",

  shortDefinition:
    "Qualità di chi è raffinato e ben proporzionato senza eccessi; in matematica, la soluzione più efficiente possibile.",

  etymology:
    "Dal latino elegantia, da elegans “scelto, raffinato, di buon gusto”, participio di " +
    "elegere “scegliere, raccogliere”, da e- “fuori” e legere “raccogliere, scegliere”. " +
    "L’elegante è letteralmente chi ha saputo scegliere bene.",

  examples: [
    "L’eleganza matematica di una dimostrazione non è decorativa: è epistemica. Una prova elegante rivela perché qualcosa è vero, non solo che è vero.",
    "Coco Chanel definì l’eleganza come il rifiuto: togliere un accessorio prima di uscire, non aggiungerne uno. L’eleganza come sottrazione, non accumulo.",
    "C’è un’eleganza nel saper tacere al momento giusto che non ha equivalenti nella parola: è la scelta di non occupare lo spazio che si potrebbe occupare.",
    "Il codice elegante in informatica fa una cosa sola, la fa bene, è leggibile da chiunque conosca il linguaggio e non richiede commenti per essere capito. È raro quanto l’eleganza in qualsiasi altro campo.",
  ],

  synonyms: [
    { term: "raffinatezza", register: "comune", note: "Simile ma enfatizza la cura e la sottigliezza; eleganza include l’idea di misura e proporzione." },
    { term: "distinzione", register: "formale", note: "La qualità di essere riconoscibilmente diverso in modo superiore; eleganza è più formale." },
  ],

  antonyms: [
    { term: "volgarità", register: "comune", note: "L’eccesso, il difetto di misura, l’ostentazione senza gusto." },
    { term: "goffaggine", register: "comune", note: "Non solo fisica: l’incapacità di misurare la forma all’occasione." },
  ],

  relatedWords: ["grazia", "proporzione", "composizione", "leggerezza"],

  paroliereNote:
    "L’eleganza è la parola che la moda ha sequestrato ma che appartiene alla matematica, " +
    "alla fisica, alla biologia tanto quanto all’abbigliamento. Una soluzione elegante è " +
    "quella che non potrebbe essere più semplice — il che richiede più lavoro di qualunque " +
    "soluzione complicata. Come la grazia, l’eleganza si ottiene togliendo, non aggiungendo.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "eleganza — significato in estetica, matematica, moda e comportamento",
    description: "Eleganza: dal buon gusto nell’abbigliamento alla dimostrazione matematica minima. La qualità di chi ha saputo scegliere — e togliere.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
