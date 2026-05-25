// Il Paroliere — Lemma: Ads
import type { LemmaEntry } from "@/lib/types";
export const ads: LemmaEntry = {
  lemma: "Ads",
  slug: "ads",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Abbreviazione di advertisements, usata prevalentemente nella locuzione Google Ads per indicare la piattaforma di pubblicità online di Google. Per estensione, nel lessico del marketing digitale il termine designa qualsiasi sistema di inserzioni a pagamento su piattaforme digitali — motori di ricerca, social network, display advertising — in contrapposizione al traffico organico.",
  shortDefinition:
    "Abbreviazione di advertisements: le inserzioni a pagamento su piattaforme digitali come Google o i social network.",
  register: ["tecnico", "comune"],
  domains: ["marketing digitale", "web", "pubblicità"],
  etymology:
    "Plurale e abbreviazione dell'inglese advertisement (avviso, inserzione pubblicitaria); in italiano si è lessicalizzato come termine tecnico del settore digitale.",
  examples: [],
  synonyms: [{ term: "inserzioni a pagamento", register: "comune", note: "traduzione letterale, usata in contesti formali" }],
  antonyms: [{ term: "SEO", register: "tecnico", context: "traffico organico, opposto al pagamento" }],
  relatedWords: ["SEO", "SEM", "Google Ads", "campagna", "CPC"],
  sourceLinks: { wiktionary: "https://en.wiktionary.org/wiki/ad" },
  paroliereNote:
    "Ads e SEO convivono nel marketing digitale come due filosofie di acquisizione del traffico: una compra visibilità, l'altra la costruisce. La scelta tra le due — o la loro combinazione — è spesso la domanda più importante di una strategia digitale.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Ads — Il Paroliere",
    description: "Definizione originale di 'Ads': le inserzioni a pagamento nel marketing digitale, in contrapposizione alla SEO organica.",
  },
  createdAt: "2026-05-25",
  updatedAt: "2026-05-25",
};
