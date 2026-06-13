// Il Paroliere — Lemma: vergogna
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vergogna: LemmaEntry = {
  lemma: "vergogna",
  slug: "vergogna",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico", "letterario"],
  domains: ["psicologia", "etica", "antropologia", "sociologia"],

  definition:
    "Emozione dolorosa che emerge quando si percepisce di aver violato un codice — " +
    "morale, sociale, estetico — agli occhi di altri o ai propri occhi. La vergogna è " +
    "globale: riguarda il sé nella sua interezza («sono sbagliato»), non solo un atto " +
    "specifico come il senso di colpa («ho fatto qualcosa di sbagliato»). È " +
    "un’emozione profondamente sociale, che regola i comportamenti nelle comunità, " +
    "ma che in forma eccessiva può diventare paralizzante e corrosiva. Nelle culture " +
    "della vergogna — distinte dalle culture della colpa — la sanzione sociale è il " +
    "meccanismo regolativo primario.",

  shortDefinition:
    "Emozione dolorosa che investe il sé quando si percepisce di aver violato un " +
    "codice morale o sociale; diversa dal senso di colpa perché riguarda chi si è, " +
    "non solo cosa si è fatto.",

  etymology:
    "Dal latino verecundia, attraverso forme volgari e medievali. La radice latina è " +
    "verecundus «che rispetta, che ha pudore», da vereri «avere rispetto, temere». " +
    "La vergogna come timore del giudizio altrui è già nella radice etimologica.",

  examples: [
    "La vergogna e il senso di colpa sembrano simili ma agiscono in modo diverso: il senso di colpa spinge a riparare, la vergogna spinge a nascondersi.",
    "Le «culture della vergogna» — descritte da Ruth Benedict nel Giappone del dopoguerra — regolano il comportamento attraverso la paura della censura pubblica, non della coscienza individuale.",
    "La vergogna usata come strumento di controllo — nelle famiglie, nelle scuole, nelle comunità — produce obbedienza a breve termine e danni a lungo termine.",
    "Provare vergogna davanti a un’ingiustizia di cui si è stati complici è l’inizio di qualcosa: riconoscere di essersi traditi.",
  ],

  synonyms: [
    { term: "rossore", register: "comune", note: "La manifestazione fisica della vergogna, usata per metonimia." },
    { term: "pudore", register: "comune-letterario", note: "Una forma più leggera e preventiva: la vergogna prima di fare, non dopo." },
  ],

  antonyms: [
    { term: "sfacciataggine", register: "comune", note: "L’assenza totale di vergogna, vissuta come impudenza ostentata." },
    { term: "spudoratezza", register: "comune", note: "La mancanza di pudore come tratto stabile, non solo come assenza momentanea." },
  ],

  relatedWords: ["verecondia", "pudicizia", "modestia", "riserbo", "spudoratezza", "sfacciataggine", "impudenza"],
  sourceLinks: {},

  paroliereNote:
    "La vergogna ha una pessima reputazione nel discorso contemporaneo sull’autostima " +
    "— e non sempre a torto. Usata come arma, è distruttiva. Ma dismisserla del tutto " +
    "come emozione «tossica» significa perdere qualcosa: la vergogna, quando è " +
    "proporzionata, dice che ci importa di qualcosa che abbiamo infranto. Il problema " +
    "non è la vergogna in sé, ma la vergogna usata da altri per controllarci, e la " +
    "vergogna interna così radicata da non lasciare spazio a nessuna seconda " +
    "possibilità. La vergogna sana è quella che ci fa riparare, non quella che ci fa sparire.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "vergogna — emozione morale tra psicologia, cultura e controllo sociale",
    description: "Che cos’è la vergogna: differenza dal senso di colpa, culture della vergogna, uso tossico e funzione morale dell’emozione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
