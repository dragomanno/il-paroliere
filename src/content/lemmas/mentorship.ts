// Il Paroliere — Lemma: mentorship
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const mentorship: LemmaEntry = {
  lemma: "mentorship",
  slug: "mentorship",
  partOfSpeech: "sostantivo femminile invariabile",

  definition:
    "L'affiancamento concreto e personale che un mentor offre a un mentee, inteso come " +
    "la relazione vissuta nel tempo, il rapporto umano fatto di incontri, conversazioni, " +
    "scambi di esperienza. Si distingue da mentoring — che indica il processo, la " +
    "metodologia, la pratica — perché mentorship designa l'istituzione stessa della " +
    "relazione, l'essere-in-relazione di mentor e mentee. In italiano, la distinzione " +
    "è sottile ma reale: mentoring è ciò che si fa; mentorship è la condizione in cui " +
    "si è mentre lo si fa.",

  shortDefinition:
    "La relazione concreta di affiancamento tra mentor e mentee; l'istituzione viva " +
    "del rapporto di guida, distinta dal processo (mentoring) di cui è espressione.",

  register: ["tecnico", "professionale"],
  domains: ["formazione", "management", "psicologia", "lavoro"],

  etymology:
    "Dall'inglese mentorship, formazione nominale da mentor + suffisso -ship (che in " +
    "inglese indica uno stato, una condizione, una relazione: friendship, leadership, " +
    "partnership).",

  examples: [
    "«La mentorship con la direttrice creativa era durata tre anni: non era un programma formale, era una relazione vera.»",
    "«Nei programmi aziendali moderni si parla spesso di mentoring come processo, ma il valore autentico sta nella mentorship, nel legame umano che si costruisce nel tempo.»",
    "«Cercava una mentorship, non un corso: voleva qualcuno che la guardasse crescere, non qualcuno che le spiegasse come si fa.»",
  ],

  synonyms: [
    {
      term: "mentoring",
      register: "tecnico",
      context: "come processo, quasi-sinonimo nel parlato comune",
    },
    {
      term: "tutoraggio",
      register: "comune",
      context: "parziale, meno preciso",
    },
    {
      term: "affiancamento professionale",
      register: "professionale",
      context: "con enfasi sull'aspetto pratico",
    },
    {
      term: "guida mentoriale",
      register: "formale",
      context: "con enfasi sul ruolo del mentor",
    },
  ],

  antonyms: [
    {
      term: "autoformazione",
      register: "comune",
      context: "apprendimento senza guida esterna",
    },
    {
      term: "apprendimento isolato",
      register: "comune",
      context: "percorso senza figure di riferimento",
    },
  ],

  relatedWords: [
    "mentoring",
    "mentor",
    "mentee",
    "coaching",
    "sviluppo professionale",
    "crescita",
    "apprendimento",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/mentorship/",
    wiktionary: "https://it.wiktionary.org/wiki/mentorship",
  },

  paroliereNote:
    "Mentorship e mentoring sono quasi sempre trattati come sinonimi assoluti, e nel " +
    "parlato comune lo sono di fatto. La distinzione qui proposta — mentoring come " +
    "processo, mentorship come relazione vissuta — è però utile e documentata nell'uso " +
    "specialistico anglosassone. Entrambi i termini sono senza dubbio parole di moda, " +
    "inserite nel lessico corrente con la forza propulsiva del management contemporaneo " +
    "e del discorso sui «talenti». Ma il bisogno a cui rispondono è genuino: la " +
    "crescita professionale guidata da chi ha già fatto il percorso è tra gli strumenti " +
    "di sviluppo più efficaci che esistano. Il problema non è la parola; è quando la " +
    "parola si svuota e diventa etichetta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Mentorship — definizione, differenza da mentoring | Il Paroliere",
    description:
      "Mentorship o mentoring? La differenza è reale. Cosa significa mentorship, come " +
      "si usa, perché è diverso da mentoring. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
