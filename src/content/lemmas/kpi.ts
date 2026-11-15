// Il Paroliere — Lemma: KPI
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const kpi: LemmaEntry = {
  lemma: "KPI",
  slug: "kpi",
  partOfSpeech: "sigla, sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Indicatore numerico scelto per misurare quanto un'organizzazione, un reparto, un progetto o una persona si stia avvicinando a un obiettivo considerato importante. Può riguardare vendite, costi, qualità, tempi, soddisfazione dei clienti o efficienza dei processi. Un buon KPI è legato a una decisione: se il numero cambia, qualcuno sa che cosa fare.",
  shortDefinition: "Indicatore numerico scelto per misurare quanto un'organizzazione o un progetto si avvicini a un obiettivo importante.",
  register: [
    "tecnico",
    "professionale",
  ],
  domains: [
    "management",
    "economia",
    "marketing",
  ],
  etymology: "Sigla dell'inglese key performance indicator, «indicatore chiave di prestazione», da key «chiave», performance «prestazione, rendimento» e indicator «indicatore». La sigla si diffonde nel management anglosassone nella seconda metà del Novecento, insieme ai sistemi di controllo di gestione. In italiano si legge sia all'italiana, «cappa-pi-i», sia all'inglese, «kei-pi-ài»; il plurale resta invariato: i KPI, non i KPIs.",
  examples: [
    "Il KPI principale del servizio clienti è il tempo medio di risposta, sceso da due giorni a sei ore.",
    "Abbiamo trenta KPI nel cruscotto e nessuno sa dire quali tre contino davvero.",
    "Da quando il KPI è il numero di pratiche chiuse, si chiudono pratiche, anche quelle che andavano lasciate aperte.",
  ],
  synonyms: [
    {
      term: "indicatore chiave di prestazione",
      register: "tecnico",
      context: "scioglimento italiano completo",
    },
    {
      term: "indicatore di performance",
      register: "professionale",
      context: "forma mista frequente nei documenti aziendali",
    },
    {
      term: "metrica",
      register: "tecnico",
      context: "più generico",
      note: "Ogni KPI è una metrica, ma solo poche metriche meritano di diventare KPI.",
    },
  ],
  antonyms: [
    {
      term: "metrica di vanità",
      register: "professionale",
      context: "numero che fa bella figura ma non orienta nessuna decisione; in inglese vanity metric",
    },
  ],
  relatedWords: [
    "roi",
    "rendimento",
    "efficienza",
    "efficacia",
    "milestone",
    "deliverable",
    "engagement",
    "turnover",
    "ranking",
    "seo",
    "ads",
    "cruscotto",
    "legge di Goodhart",
    "fee",
    "referral",
    "standard",
  ],
  sourceLinks: {},
  paroliereNote: "Il KPI è un numero con un'ambizione: dire in sintesi se si sta andando nella direzione giusta. Il problema è noto agli economisti come legge di Goodhart, nella formulazione resa popolare dall'antropologa Marilyn Strathern nel 1997: quando una misura diventa un obiettivo, smette di essere una buona misura. Se si premia il numero di telefonate, le telefonate si accorciano; se si premiano i clic, i titoli diventano esche. Un buon sistema di KPI ne usa pochi e li legge insieme, accanto a ciò che i numeri non dicono. Fra i KPI finanziari il più noto è il → ROI.",
  seo: {
    title: "KPI — significato, pronuncia e legge di Goodhart | Il Paroliere",
    description: "Che cos'è un KPI: indicatore chiave di prestazione per misurare un obiettivo. Pronuncia, plurale invariato, metriche di vanità e legge di Goodhart.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-15",
};
