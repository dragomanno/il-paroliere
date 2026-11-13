// Il Paroliere — Lemma: dipendenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dipendenza: LemmaEntry = {
  lemma: "dipendenza",
  slug: "dipendenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico", "clinico"],
  domains: ["psicologia", "salute", "relazioni", "sociologia"],

  definition:
    "Condizione in cui il proprio equilibrio o la capacità di agire dipendono in modo rilevante da una persona, da una sostanza, da un comportamento o da una struttura esterna. Nelle relazioni affettive diventa problematica quando paura della perdita e bisogno di conferma riducono autonomia, confini e scelta. In ambito clinico può indicare una forma di assuefazione o uso compulsivo, da distinguere e valutare con strumenti specifici.",

  shortDefinition:
    "Bisogno che limita l’autonomia; nelle relazioni affettive può trasformare la vicinanza in una necessità dolorosa.",

  etymology:
    "Dal latino dependentia, da dependere «pendere da». L’immagine di qualcosa che resta appeso a un sostegno chiarisce il passaggio dal semplice rapporto di necessità alla perdita di autonomia.",

  examples: [
    "La dipendenza affettiva le faceva leggere ogni silenzio come la prova di essere stata abbandonata.",
    "Chiedere aiuto non è dipendenza: lo diventa quando non si riesce più a decidere o a stare bene senza l’approvazione dell’altro.",
    "Il medico ha spiegato che la dipendenza da alcol richiede una valutazione clinica e un percorso di cura adeguato.",
  ],

  synonyms: [
    { term: "assuefazione", register: "clinico", context: "Riguarda soprattutto l’adattamento a una sostanza o a uno stimolo; non equivale alla dipendenza relazionale." },
    { term: "subordinazione", register: "formale", context: "Evidenzia una posizione gerarchica o di potere, più che il bisogno emotivo." },
    { term: "attaccamento insicuro", register: "psicologico", context: "Concetto teorico che descrive alcuni modelli relazionali; non va usato come diagnosi automatica." },
  ],

  antonyms: [
    { term: "autonomia", register: "psicologico", context: "Capacità di scegliere e regolarsi senza rinunciare alla possibilità di ricevere aiuto." },
    { term: "indipendenza", register: "comune", context: "Libertà da un bisogno o da un controllo esterno; non implica isolamento emotivo." },
  ],

  relatedWords: ["relazione", "legame", "connessione", "desiderio", "aspirazione", "speranza", "attesa", "frustrazione", "rassegnazione", "accettazione", "autonomia", "solitudine"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dipendenza",
  },

  paroliereNote:
    "Nel parlare di dipendenza affettiva è utile evitare due scorciatoie: romanticizzare la fusione e trasformare ogni bisogno in una patologia. Una → relazione può ospitare desiderio, → speranza e attesa; diventa dipendenza quando la → frustrazione non può essere tollerata senza sacrificare la propria autonomia. L’→ accettazione, a differenza della rassegnazione, può essere l’inizio di un confine più sano.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Dipendenza — definizione, sinonimi, uso | Il Paroliere",
    description: "Dipendenza: significato relazionale e clinico. Come distinguere bisogno, legame e perdita di autonomia, con sinonimi ed esempi d’uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
