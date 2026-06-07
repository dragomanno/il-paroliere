// Il Paroliere — Lemma: ecumenico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ecumenico: LemmaEntry = {
  lemma: "ecumenico",
  slug: "ecumenico",
  partOfSpeech: "aggettivo",

  definition:
    "Nel senso originale e teologico, ecumenico designa ciò che riguarda la totalità " +
    "della Chiesa cristiana, al di là delle divisioni confessionali: un concilio " +
    "ecumenico è quello a cui partecipano — o sono convocati — tutti i vescovi del " +
    "mondo cristiano; il movimento ecumenico è quello che lavora per l'unità tra le " +
    "diverse confessioni cristiane (cattolici, ortodossi, protestanti). L'ecumenismo " +
    "non è sincretismo — non fonde le differenze — ma cerca di costruire dialogo e " +
    "comunione nella diversità. In senso figurato e laico, ecumenico indica qualcosa " +
    "che abbraccia tutti indiscriminatamente, che non fa distinzioni, che cerca la più " +
    "larga inclusività possibile. Un «consenso ecumenico», un «apprezzamento ecumenico», " +
    "una «accoglienza ecumenica» indicano qualcosa che va oltre le divisioni di parte e " +
    "raccoglie consenso trasversale.",

  shortDefinition:
    "Che riguarda la totalità della Chiesa cristiana e il dialogo tra le confessioni; " +
    "in senso figurato, che abbraccia tutti, universale, trasversale alle divisioni.",

  register: ["formale", "religioso"],
  domains: ["religione", "teologia", "politica", "società", "linguistica"],

  etymology:
    "Dal greco oikoumenikos, da oikoumene («la terra abitata»), participio di oikein " +
    "(«abitare»), da oikos («casa»). La oikoumene era, per i Greci, il mondo civile e " +
    "abitato — l'ecumene — contrapposto ai territori selvaggi e disabitati. Lo stesso " +
    "campo etimologico di ecologia, economia, diocesi.",

  examples: [
    "«Il Concilio Vaticano II fu un momento ecumenico decisivo: aprì la Chiesa cattolica al dialogo con le altre confessioni cristiane.»",
    "«Il film ricevette un'accoglienza ecumenica: piacque alla critica intellettuale, al grande pubblico e persino a chi di cinema non si interessa normalmente.»",
    "«Papa Francesco ha fatto dell'apertura ecumenica uno dei pilastri del suo pontificato.»",
  ],

  synonyms: [
    {
      term: "universale",
      register: "comune",
      context: "che vale per tutti",
    },
    {
      term: "trasversale",
      register: "comune",
      context: "che attraversa le divisioni di parte",
    },
    {
      term: "inclusivo",
      register: "comune",
      context: "che non esclude nessuno",
    },
    {
      term: "cattolico",
      register: "etimologico",
      context: "nel senso greco di «per tutti»",
    },
  ],

  antonyms: [
    {
      term: "settario",
      register: "comune",
      context: "che appartiene solo a una setta o fazione",
    },
    {
      term: "esclusivo",
      register: "comune",
      context: "che include solo alcuni",
    },
    {
      term: "partigiano",
      register: "comune",
      context: "di parte, non imparziale",
    },
  ],

  relatedWords: [
    "ecumenismo",
    "concilio",
    "dialogo interreligioso",
    "cattolicesimo",
    "ortodossia",
    "protestantesimo",
    "oikoumene",
    "sincretismo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ecumenico/",
    wiktionary: "https://it.wiktionary.org/wiki/ecumenico",
  },

  paroliereNote:
    "Ecumenico è una parola che ha fatto un percorso interessante: nata per descrivere " +
    "l'unità della Chiesa cristiana, è diventata nel parlato colto un aggettivo secolare " +
    "per indicare qualsiasi forma di consenso trasversale o di inclusività universale. " +
    "Quando si dice che un film ha avuto «successo ecumenico», non si sta parlando di " +
    "religione: si sta usando la forza semantica dell'aggettivo — l'idea di qualcosa che " +
    "abbraccia tutti — in un contesto laico. È un uso metonimico ormai stabilizzato nella " +
    "lingua, degno di nota perché mostra come il lessico religioso continui ad alimentare " +
    "la lingua comune anche in una cultura sempre più secolarizzata.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ecumenico — definizione religiosa e figurata | Il Paroliere",
    description:
      "Ecumenico in teologia e nel linguaggio comune. Dal Concilio ecumenico all'uso " +
      "figurato trasversale. Etimologia greca e nota sull'uso laico.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
