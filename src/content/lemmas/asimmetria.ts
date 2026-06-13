// Il Paroliere — Lemma: asimmetria
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const asimmetria: LemmaEntry = {
  lemma: "asimmetria",
  slug: "asimmetria",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["matematica", "estetica", "biologia", "economia", "design"],

  definition:
    "Assenza di corrispondenza esatta tra le parti di un insieme rispetto a un asse o " +
    "centro. Non è il contrario della bellezza: in molte tradizioni estetiche — il " +
    "wabi-sabi giapponese, il design contemporaneo, la fotografia della regola dei terzi " +
    "— l’asimmetria è preferita alla simmetria perché introduce tensione, movimento e vita. " +
    "In biologia, certe asimmetrie sono funzionali: il cuore spostato a sinistra, i lobi " +
    "cerebrali specializzati.",

  shortDefinition:
    "Assenza di corrispondenza esatta tra le parti; tensione visiva che può essere strumento estetico deliberato.",

  etymology:
    "Dal greco asymmetria, composto da a- privativo e symmetria “simmetria”. Letteralmente: " +
    "la mancanza di misura comune tra le parti.",

  examples: [
    "L’asimmetria del volto umano è biologicamente normale e esteticamente fondamentale: chi sorride con un lato più dell’altro, chi ha un occhio più alto, chi ha un sopracciglio più mobile — queste piccole asimmetrie sono riconoscimento.",
    "In economia, l’asimmetria informativa descrive la situazione in cui una parte ha più informazioni dell’altra in una transazione: il venditore di un’auto usata sa cose che il compratore non sa.",
    "Il design giapponese usa l’asimmetria come principio estetico primario: un vaso con una crepa visibile (kintsugi), una composizione floreale (ikebana) che spezza deliberatamente l’equilibrio per creare tensione.",
    "Un’asimmetria nel gait — il modo di camminare — può essere il primo segno visibile di un problema neurologico o muscolare unilaterale.",
  ],

  synonyms: [
    { term: "squilibrio", register: "comune", note: "Con valenza più spesso negativa; asimmetria è neutro o positivo in contesti estetici." },
    { term: "irregolarità", register: "comune", note: "La deviazione da un pattern — meno preciso di asimmetria." },
  ],

  antonyms: [
    { term: "simmetria", register: "tecnico-comune", note: "La corrispondenza esatta tra le parti — il contrario diretto." },
    { term: "equilibrio", register: "comune", note: "Nei sensi in cui l’asimmetria produce squilibrio percepito." },
  ],

  relatedWords: ["simmetria", "proporzione", "contrasto-estetico", "ritmo", "composizione"],

  paroliereNote:
    "L’asimmetria è il lemma che smonta l’idea che la bellezza sia simmetria. Il wabi-sabi " +
    "giapponese è costruito sull’imperfezione come luogo in cui la vita si manifesta: la " +
    "crepa nel vaso non è un difetto, è la firma del tempo. In Occidente abbiamo impiegato " +
    "più tempo ad arrivarci, ma il design contemporaneo ci sta lavorando — il bilanciamento " +
    "visivo che non rispecchia i lati, la gerarchia che non è centralizzata.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "asimmetria — significato in matematica, estetica, biologia ed economia",
    description: "Asimmetria: dall’assenza di simmetria geometrica al wabi-sabi, dall’asimmetria informativa in economia alla biologia del corpo umano.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
