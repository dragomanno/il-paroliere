// Il Paroliere — Lemma: acconto fiscale
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const accontoFiscale: LemmaEntry = {
  lemma: "acconto fiscale",
  slug: "acconto-fiscale",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  definition: "Versamento anticipato di un'imposta relativa all'anno in corso, calcolato di norma sull'imposta dovuta per l'anno precedente. Per l'IRPEF è pari al 100% dell'imposta dichiarata e si paga in due rate, il 40% entro il 30 giugno e il 60% entro il 30 novembre, oppure in due rate uguali per chi applica gli ISA o il regime forfettario. Chi prevede un'imposta minore può versare di meno, ma rischia sanzioni se la previsione si rivela sbagliata.",
  shortDefinition: "Pagamento anticipato di un'imposta per l'anno in corso, calcolato di solito su quanto dovuto l'anno prima.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
  ],
  etymology: "Acconto deriva dalla locuzione «a conto», cioè in conto di una somma da pagare per intero più avanti. Fiscale viene da fisco, dal latino fiscus, il cesto di vimini in cui si custodiva il denaro e poi la cassa dell'imperatore.",
  examples: [
    "A novembre è arrivata la seconda rata dell'acconto fiscale, più pesante della prima.",
    "Avendo chiuso l'attività a marzo, ho versato un acconto fiscale ridotto con il metodo previsionale.",
    "Chi apre la partita IVA spesso si sorprende al secondo anno, quando al saldo si somma il primo acconto fiscale.",
  ],
  synonyms: [
    {
      term: "anticipo d'imposta",
      register: "comune",
      context: "formula descrittiva",
    },
  ],
  antonyms: [
    {
      term: "saldo fiscale",
      register: "tecnico-fiscale",
      context: "versamento che chiude il conto dell'anno, al netto degli acconti",
    },
  ],
  relatedWords: [
    "saldo-fiscale",
    "irpef",
    "f24",
    "dichiarazione-dei-redditi",
    "ritenuta-dacconto",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/acconto/",
    wiktionary: "https://it.wiktionary.org/wiki/acconto",
  },
  paroliereNote: "L'acconto fiscale è il punto in cui il calendario del fisco si separa da quello di chi paga: si versano imposte su un reddito non ancora guadagnato, sulla base di quello dell'anno prima. Per un dipendente il meccanismo resta quasi invisibile, perché passa dalla busta paga; per un autonomo, invece, giugno e novembre sono due mesi da segnare in agenda.",
  seo: {
    title: "Acconto fiscale — significato, rate e scadenze | Il Paroliere",
    description: "Che cos'è l'acconto fiscale: il pagamento anticipato dell'imposta dell'anno in corso. Acconto IRPEF al 100%, rate del 30 giugno e del 30 novembre.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
