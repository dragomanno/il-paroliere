// Il Paroliere — Lemma: cookie consent
import type { LemmaEntry } from "@/lib/types";
export const cookieConsent: LemmaEntry = {
  lemma: "cookie consent",
  slug: "cookie-consent",
  partOfSpeech: "locuzione nominale",
  gender: "maschile",
  definition:
    "Meccanismo con cui un sito web richiede all'utente il consenso esplicito all'installazione di cookie non essenziali, prima che questi vengano attivati. Si manifesta generalmente come un banner o una finestra modale alla prima visita; il consenso deve essere libero, specifico e revocabile.",
  shortDefinition:
    "Richiesta di consenso che un sito mostra all'utente prima di attivare cookie non strettamente necessari.",
  register: ["tecnico", "comune"],
  domains: ["diritto", "web", "UX"],
  etymology:
    "Locuzione inglese composta da cookie (v.) e consent (consenso); diffusa in italiano in seguito all'obbligo introdotto dalla Direttiva ePrivacy e confermato dal GDPR.",
  examples: [],
  synonyms: [],
  antonyms: [],
  relatedWords: ["cookie", "cookie policy", "GDPR", "cookieless"],
  sourceLinks: { treccani: "https://www.garanteprivacy.it/cookie" },
  paroliereNote:
    "Il cookie consent ha rivoluzionato l'esperienza web europea: ogni sito ora accoglie l'utente con un banner prima ancora di mostrare i propri contenuti. Il GDPR richiede che il rifiuto sia altrettanto semplice dell'accettazione — ma i dark pattern abbondano, e il consenso «ottenuto» non è sempre consenso dato.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Cookie consent — Il Paroliere",
    description: "Definizione originale di 'cookie consent': il meccanismo di consenso ai cookie richiesto dalla normativa europea.",
  },
  createdAt: "2026-05-25",
  updatedAt: "2026-05-25",
};
