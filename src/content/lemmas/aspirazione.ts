// Il Paroliere — Lemma: aspirazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const aspirazione: LemmaEntry = {
  lemma: "aspirazione",
  slug: "aspirazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale"],
  domains: ["psicologia", "formazione", "lavoro", "filosofia"],

  definition: "Desiderio rivolto a un traguardo futuro e abbastanza stabile da orientare scelte, studio o lavoro. Può indicare anche l'atto tecnico di aspirare aria o liquidi, ma nell'uso personale richiama un progetto di vita o l'immagine di chi si vuole diventare. È più strutturata di → desiderio, meno viscerale della brama.",

  shortDefinition: "Desiderio stabile rivolto a un traguardo futuro, capace di orientare un progetto personale o professionale.",

  etymology: "Dal latino aspiratio, derivato di aspirare: «soffiare verso, respirare verso». Il passaggio all'ambizione personale conserva l'idea di un moto diretto a una meta.",

  examples: [
    "L'aspirazione a insegnare le fece scegliere un tirocinio più impegnativo del previsto.",
    "Non ogni aspirazione deve trasformarsi in carriera: la sua era imparare a dipingere meglio.",
    "Durante il colloquio parlò delle proprie aspirazioni senza confonderle con le promesse dell'azienda.",
  ],

  synonyms: [
    { term: "desiderio", register: "comune", context: "termine più ampio, che può restare momentaneo e non definire un percorso." },
    { term: "ideale", register: "formale", context: "indica una meta di valore generale, non necessariamente un obiettivo biografico concreto." },
    { term: "anelito", register: "letterario", context: "più acceso e impaziente, meno ordinato attorno a un progetto." },
  ],

  antonyms: [
    { term: "rassegnazione", register: "comune", context: "rinuncia a orientarsi verso un cambiamento desiderato." },
    { term: "disincanto", register: "formale", context: "può indebolire la fiducia in una meta, senza essere sempre una rinuncia definitiva." },
  ],

  relatedWords: ["desiderio", "idealismo", "bramare", "agognare", "vagheggiare", "speranza", "attesa", "autodeterminazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/aspirazione",
  },

  paroliereNote: "L'aspirazione non è un desiderio reso più elegante: chiede una linea nel tempo, anche quando resta incompiuta. Può nutrirsi di → speranza, ma contiene già una forma di orientamento e responsabilità verso il futuro.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Aspirazione — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di aspirazione: desiderio orientato al futuro, con esempi e differenze da desiderio, bramare, agognare e vagheggiare.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
