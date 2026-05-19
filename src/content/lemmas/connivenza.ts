// Il Paroliere — Lemma: connivenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const connivenza: LemmaEntry = {
  lemma: "connivenza",
  slug: "connivenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Tolleranza consapevole di un'azione illecita o scorretta: non chi compie il " +
    "fatto, ma chi tace, guarda dall'altra parte o lascia fare pur potendo " +
    "intervenire. In diritto penale si avvicina al favoreggiamento per omissione; " +
    "nel linguaggio comune descrive una complicità silenziosa che condivide la " +
    "responsabilità morale dell'atto.",

  shortDefinition:
    "Complicità silenziosa di chi sa, tace e lascia fare — senza sporcarsi le mani, ma non senza colpa.",

  register: ["comune", "tecnico"],
  domains: ["diritto", "società", "etica"],

  etymology:
    "Dal latino connivere, 'chiudere gli occhi, fare finta di non vedere', " +
    "composto di con- e nivere ('ammiccare, chiudere le palpebre'). " +
    "L'immagine originaria è quella di chi abbassa lo sguardo di fronte a ciò " +
    "che non vuole vedere.",

  examples: [
    "La connivenza dei testimoni aveva permesso all'ingiustizia di durare " +
    "più a lungo del necessario.",
    "Non era complice diretto — ma la sua connivenza silenziosa aveva reso " +
    "tutto possibile.",
    "In certi ambienti la connivenza è la norma: nessuno vede, nessuno dice, " +
    "tutti sanno.",
    "Accusarlo di connivenza era giusto: aveva le prove, il potere di agire " +
    "e aveva scelto di non farlo.",
  ],

  synonyms: [
    {
      term: "complicità",
      register: "comune",
      context: "partecipazione attiva o passiva a un atto — più ampio di connivenza",
    },
    {
      term: "acquiescenza",
      register: "formale",
      context: "accettazione passiva senza opposizione — meno connotata negativamente",
    },
    {
      term: "omertà",
      register: "comune",
      context: "silenzio sistematico per codice di gruppo — più forte e collettivo",
    },
  ],

  antonyms: [
    {
      term: "denuncia",
      register: "comune",
      context: "atto di portare alla luce ciò che si sa — opposto diretto della connivenza",
    },
    {
      term: "integrità",
      register: "comune",
      context: "coerenza morale che impedisce di coprire l'illecito",
    },
  ],

  relatedWords: [
    "connivente",
    "complicità",
    "omertà",
    "favoreggiamento",
    "silenzio complice",
    "acquiescenza",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/connivenza/",
    wiktionary: "https://it.wiktionary.org/wiki/connivenza",
  },

  paroliereNote:
    "L'etimologia di connivenza — chiudere gli occhi — è la sua definizione più " +
    "onesta. C'è una forma di viltà attiva nel lasciare fare: non è indifferenza, " +
    "perché il connivente sa. È una scelta, quasi sempre motivata da interesse o " +
    "paura. La lingua italiana ha questa parola perché conosce bene quella " +
    "dinamica — e la storia lo conferma.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Connivenza — Il Paroliere",
    description:
      "Definizione originale di 'connivenza': complicità silenziosa di chi sa e " +
      "tace. Dal latino connivere, chiudere gli occhi. Con esempi, sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
