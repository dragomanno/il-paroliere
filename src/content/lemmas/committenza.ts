// Il Paroliere — Lemma: committenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const committenza: LemmaEntry = {
  lemma: "committenza",
  slug: "committenza",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Il soggetto — individuo, istituzione, azienda o ente pubblico — che commissiona " +
    "un'opera, un servizio o una prestazione professionale, definendone i requisiti, " +
    "finanziandola e assumendosi la responsabilità della sua destinazione finale. In " +
    "senso più astratto, committenza indica anche il sistema di relazioni economiche, " +
    "culturali e di potere che storicamente ha sostenuto la produzione artistica, " +
    "architettonica o intellettuale: la committenza medicea nel Rinascimento fiorentino, " +
    "la committenza ecclesiastica nel Medioevo, la committenza pubblica nell'architettura " +
    "contemporanea. La qualità della committenza — la sua capacità di definire obiettivi " +
    "chiari, di sostenere il rischio creativo, di dialogare con chi esegue senza " +
    "soffocarne l'autonomia — è uno dei fattori determinanti per la qualità del risultato " +
    "finale. Una committenza debole, indecisa o puramente burocratica produce spesso " +
    "opere mediocri indipendentemente dal talento di chi le realizza.",

  shortDefinition:
    "Chi commissiona un'opera o un servizio, e il sistema di relazioni che " +
    "storicamente ha sostenuto la produzione artistica e intellettuale.",

  register: ["formale", "tecnico"],
  domains: ["arte", "architettura", "economia", "diritto", "società"],

  etymology:
    "Da committere («affidare, commissionare»), composto latino di com- + mittere " +
    "(«mandare, affidare»). Il suffisso -enza forma il sostantivo astratto che indica " +
    "sia l'azione sia il soggetto che la esercita.",

  examples: [
    "«La committenza pubblica italiana ha finanziato negli anni Cinquanta e Sessanta alcune delle architetture più significative del dopoguerra.»",
    "«Il progettista si trovò in conflitto con la committenza: il cliente voleva ridurre i costi, l'architetto non voleva compromettere l'integrità strutturale.»",
    "«La committenza medicea trasformò Firenze in un laboratorio dell'arte rinascimentale: senza quella capacità di investimento culturale, Botticelli e Michelangelo sarebbero stati diversi.»",
  ],

  synonyms: [
    {
      term: "committente",
      register: "formale",
      context: "il soggetto specifico",
    },
    {
      term: "cliente",
      register: "comune",
      context: "uso generico",
    },
    {
      term: "mandante",
      register: "giuridico",
      context: "contesto contrattuale",
    },
    {
      term: "appaltante",
      register: "tecnico",
      context: "contesto di appalto",
    },
  ],

  antonyms: [
    {
      term: "esecutore",
      register: "comune",
      context: "chi realizza l'opera",
    },
    {
      term: "appaltatore",
      register: "tecnico",
      context: "chi riceve l'appalto",
    },
    {
      term: "fornitore",
      register: "comune",
      context: "chi eroga il servizio",
    },
  ],

  relatedWords: [
    "commissione",
    "appalto",
    "contratto",
    "mecenatismo",
    "patronato",
    "progettista",
    "artista",
    "architetto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/committenza/",
    wiktionary: "https://it.wiktionary.org/wiki/committenza",
  },

  paroliereNote:
    "Committenza è una parola che nel mondo dell'arte e dell'architettura porta un " +
    "peso storico preciso: ricorda che nessuna grande opera nasce nel vuoto, ma sempre " +
    "in un sistema di relazioni tra chi ha un'idea, chi ha le risorse e chi ha il talento " +
    "per realizzarla. La committenza non è solo il «cliente»: è la forza culturale e " +
    "economica che rende possibile la creazione. Quando quella forza è illuminata — come " +
    "nel caso dei Medici, della Chiesa romana al suo apice, o di certi enti pubblici negli " +
    "anni del boom economico italiano — produce capolavori. Quando è miope o timorosa, " +
    "produce mediocrità sicura.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Committenza — definizione, arte, architettura | Il Paroliere",
    description:
      "Cosa significa committenza, dal Rinascimento all'appalto moderno. Chi è il " +
      "committente e perché la qualità della committenza determina la qualità dell'opera.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
