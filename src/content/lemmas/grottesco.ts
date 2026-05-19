// Il Paroliere — Lemma: grottesco
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const grottesco: LemmaEntry = {
  lemma: "grottesco",
  slug: "grottesco",
  partOfSpeech: "aggettivo",

  definition:
    "Si dice di ciò che mescola elementi incongrui — il comico e il perturbante, il deforme e il " +
    "familiare — fino a produrre un effetto di straniamento che non è né puro riso né pura inquietudine. " +
    "In arte e letteratura designa uno stile che distorce il reale per rivelarne l'assurdità; nel parlato " +
    "comune descrive situazioni o comportamenti talmente fuori misura da sembrare irreali.",

  shortDefinition:
    "Che unisce il comico e il perturbante fino a rendere la realtà irriconoscibile — in arte come stile, nella vita come eccesso.",

  register: ["comune", "estetico"],
  domains: ["arte", "letteratura", "comportamento"],

  etymology:
    "Dall'italiano grotta: le decorazioni «alla grottesca» erano quelle trovate nelle grotte romane " +
    "scavate nel Rinascimento — affreschi di figure ibride, animali e piante intrecciate in modo " +
    "bizzarro. Da stile decorativo antico, il termine si è allargato a qualsiasi mescolanza incongrua.",

  examples: [
    "La scena aveva qualcosa di grottesco: seria nei toni, assurda nei contenuti.",
    "Il grottesco di Gogol' non fa ridere del tutto e non spaventa del tutto — e questo è il punto.",
    "Una situazione grottesca: tutto rispettava le regole, eppure il risultato era assurdo.",
    "Nell'arte di Bosch il grottesco non è ornamento: è il modo in cui il mondo viene visto.",
  ],

  synonyms: [
    {
      term: "bizzarro",
      register: "comune",
      context: "strano e fuori norma, senza la componente perturbante del grottesco",
    },
    {
      term: "surreale",
      register: "comune",
      context: "che sfida la logica del reale, con sfumatura onirica",
    },
    {
      term: "assurdo",
      register: "comune",
      context: "privo di senso logico, senza la mescolanza comico-inquietante",
    },
  ],

  antonyms: [
    {
      term: "armonioso",
      register: "comune",
      context: "elementi congruenti e ben proporzionati",
    },
    {
      term: "veristico",
      register: "tecnico",
      context: "che riproduce il reale senza deformarlo",
    },
  ],

  relatedWords: [
    "grottescamente",
    "grotteria",
    "straniamento",
    "surreale",
    "bizzarro",
    "deforme",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/grottesco/",
    wiktionary: "https://it.wiktionary.org/wiki/grottesco",
  },

  paroliereNote:
    "L'etimologia di grottesco è una delle più sorprendenti: nasce da grotta, da affreschi rinascimentali " +
    "scoperti sottoterra — figure ibride, corpi che si intrecciano con piante e animali. " +
    "Da decorazione antica a categoria estetica universale, il termine ha percorso sei secoli " +
    "senza perdere quella qualità di mescolanza incongrua che lo definisce. " +
    "Kafka, Gogol', Bosch: tutti grotteschi, tutti incomparabili tra loro.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Grottesco — Il Paroliere",
    description:
      "Definizione originale di 'grottesco': mescolanza di comico e perturbante che rende la realtà irriconoscibile. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
