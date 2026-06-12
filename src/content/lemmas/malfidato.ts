// Il Paroliere — Lemma: MALFIDATO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malfidato: LemmaEntry = {
  lemma: "malfidato",
  slug: "malfidato",
  partOfSpeech: "aggettivo",
  gender: "maschile",
  definition:
    "Aggettivo con una doppia direzione: chi non si fida degli altri — per carattere, per esperienza, " +
    "per abitudine al sospetto — ma anche, nell'uso comune, chi non merita fiducia, " +
    "su cui non si può contare. " +
    "Questa ambivalenza tra il sospettoso e l'inaffidabile è il tratto più interessante del lemma: " +
    "dipende da chi parla e da chi viene giudicato.",
  shortDefinition:
    "Chi non si fida, o chi non merita fiducia: l'ambiguità tra diffidenza e inaffidabilità è il suo tratto distintivo.",
  register: ["colloquiale", "popolare"],
  domains: ["comportamento", "fiducia", "carattere"],
  etymology:
    "Composto di mal- (prefisso con valore negativo, dal latino male) e fidato " +
    "(participio di fidare, dal latino fidare, affidarsi). " +
    "La stessa struttura di malfermo, malridotto, maldestro: " +
    "il prefisso inverte o degrada il significato della base.",
  examples: [
    "Era malfidato per natura: anche le buone notizie le controllava due volte.",
    "Non ti affidare a lui per cose importanti — è malfidato, e lo sa pure lui.",
    "C'è una differenza tra essere malfidato e essere prudente: una questione di grado, e di esperienza.",
  ],
  synonyms: [
    { term: "diffidente", register: "comune", context: "chi non si fida facilmente, per carattere o esperienza" },
    { term: "sospettoso", register: "comune", context: "chi nutre sospetti, spesso senza fondamento specifico" },
    { term: "inaffidabile", register: "comune", context: "su cui non si può contare, non degno di fiducia" },
    { term: "sleale", register: "comune-formale", context: "quando l'inaffidabilità diventa tradimento di un patto" },
  ],
  antonyms: [
    { term: "fidato", register: "comune", context: "di cui ci si può fidare pienamente" },
    { term: "affidabile", register: "comune", context: "su cui si può contare in modo stabile" },
  ],
  relatedWords: ["fiducia", "diffidenza", "slealtà", "affidabilità", "sospetto", "fidato"],
  sourceLinks: {},
  paroliereNote:
    "Malfidato è un aggettivo che cambia significato a seconda di dove ti metti. " +
    "Se lo usi per descrivere te stesso, è quasi una virtù — la prudenza di chi ha imparato. " +
    "Se lo usi per descrivere un altro, è quasi un avvertimento. " +
    "Poche parole hanno questa elasticità di prospettiva.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Malfidato — Il Paroliere",
    description:
      "Definizione originale di 'malfidato': chi non si fida o chi non merita fiducia. L'ambiguità semantica tra diffidenza e inaffidabilità come tratto distintivo.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
