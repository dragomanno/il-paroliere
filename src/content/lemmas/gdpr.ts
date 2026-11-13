import type { LemmaEntry } from "@/lib/types";
export const gdpr: LemmaEntry = {
  lemma: "GDPR",
  slug: "gdpr",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Acronimo di General Data Protection Regulation (Regolamento generale sulla protezione dei dati), il regolamento dell'Unione Europea 2016/679 entrato in vigore il 25 maggio 2018 che disciplina il trattamento dei dati personali di persone fisiche all'interno dello Spazio economico europeo. Ha sostituito la precedente Direttiva 95/46/CE ed è diventato il riferimento normativo globale per la protezione della privacy digitale.",
  shortDefinition:
    "Acronimo del Regolamento UE 2016/679 sulla protezione dei dati personali, in vigore dal 25 maggio 2018.",
  register: ["tecnico", "burocratico"],
  domains: ["diritto", "privacy", "web"],
  etymology:
    "Sigla dell'inglese General Data Protection Regulation; in italiano spesso accompagnata dalla traduzione ufficiale RGPD (Regolamento generale sulla protezione dei dati).",
  examples: [
    "Con il GDPR anche il piccolo studio professionale ha dovuto nominare chi tratta i dati dei clienti.",
    "Il garante ha sanzionato l'azienda per una violazione del GDPR legata alle email di marketing.",
    "Dal 2018 il GDPR ha cambiato il modo in cui i siti chiedono e conservano i dati degli utenti.",
  ],
  synonyms: [{ term: "RGPD", register: "tecnico", note: "sigla italiana ufficiale, meno usata nella pratica" }],
  antonyms: [],
  relatedWords: ["privacy policy", "cookie consent", "cookie policy", "cookie"],
  sourceLinks: { treccani: "https://www.garanteprivacy.it/regolamentoue" },
  paroliereNote:
    "Il GDPR è entrato in vigore il 25 maggio 2018 e ha trasformato il web europeo: ogni sito ha dovuto fare i conti con cookie banner, privacy policy, gestione dei dati. Ha anche dato ai cittadini europei diritti reali — cancellazione, portabilità, accesso — che prima erano solo promesse.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "GDPR — Il Paroliere",
    description: "Definizione originale di 'GDPR': il regolamento europeo sulla protezione dei dati che ha cambiato il web.",
  },
  createdAt: "2026-05-25",
  updatedAt: "2026-11-13",
};
