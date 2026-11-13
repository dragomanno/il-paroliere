// Il Paroliere — Lemma: privacy policy
import type { LemmaEntry } from "@/lib/types";
export const privacyPolicy: LemmaEntry = {
  lemma: "privacy policy",
  slug: "privacy-policy",
  partOfSpeech: "locuzione nominale",
  gender: "femminile",
  definition:
    "Dichiarazione formale con cui un'organizzazione informa gli utenti su quali dati personali raccoglie, come li tratta, con chi li condivide e per quanto tempo li conserva. In ambito europeo, la sua redazione è regolata dal Regolamento GDPR (2016/679).",
  shortDefinition:
    "Documento che dichiara come un'organizzazione raccoglie, tratta e conserva i dati personali degli utenti.",
  register: ["tecnico", "burocratico"],
  domains: ["diritto", "web", "privacy"],
  etymology:
    "Locuzione inglese (letteralmente: politica sulla riservatezza); entrata nel lessico giuridico e digitale italiano come prestito integrale, senza traduzione standardizzata.",
  examples: [
    "La privacy policy deve dire in modo chiaro per quanto tempo vengono conservati i dati.",
    "Prima di iscriversi alla newsletter ha letto la privacy policy, per curiosità e per prudenza.",
    "Una privacy policy copiata da un altro sito spesso descrive trattamenti che non si fanno affatto.",
  ],
  synonyms: [],
  antonyms: [],
  relatedWords: ["cookie policy", "GDPR", "cookie"],
  sourceLinks: { wiktionary: "https://en.wiktionary.org/wiki/privacy_policy" },
  paroliereNote:
    "A differenza della cookie policy, che riguarda un tipo specifico di tracciamento, la privacy policy abbraccia tutti i dati personali: nome, email, indirizzo, comportamento di navigazione, dati di pagamento. È il documento più ampio e anche il più spesso ignorato — o scritto in un italiano così complesso da risultare incomprensibile.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Privacy policy — Il Paroliere",
    description: "Definizione originale di 'privacy policy': il documento sulla raccolta e il trattamento dei dati personali.",
  },
  createdAt: "2026-05-25",
  updatedAt: "2026-11-13",
};
