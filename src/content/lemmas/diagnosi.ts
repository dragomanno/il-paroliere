// Il Paroliere — Lemma: diagnosi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const diagnosi: LemmaEntry = {
  lemma: "diagnosi",
  slug: "diagnosi",
  partOfSpeech: "sostantivo femminile invariabile",
  gender: "femminile",
  definition: "1. In medicina e in psicologia, il riconoscimento di una malattia o di una condizione a partire dalla storia del paziente, dall'esame clinico e dagli accertamenti; indica sia il ragionamento che porta al risultato sia il risultato stesso, il nome dato al problema. 2. Per estensione, analisi che individua le cause di un guasto, di una crisi o di un problema complesso.",
  shortDefinition: "Riconoscimento di una malattia o condizione da storia, visita ed esami; per estensione, analisi delle cause di un problema.",
  register: [
    "comune",
    "tecnico-scientifico",
  ],
  domains: [
    "medicina",
    "psicologia",
    "tecnica",
    "economia",
  ],
  etymology: "Dal greco diágnōsis, «discernimento, capacità di distinguere», derivato di diagignṓskein, «riconoscere distinguendo», composto di diá, «attraverso», e gignṓskein, «conoscere». Il prefisso suggerisce un conoscere che passa attraverso gli indizi e separa ciò che si somiglia.",
  examples: [
    "La diagnosi è arrivata dopo tre visite e due esami, ma almeno adesso il problema ha un nome.",
    "Prima di proporre una cura il medico ha voluto escludere le altre ipotesi con una diagnosi differenziale.",
    "Il meccanico ha attaccato il computer alla centralina e in dieci minuti ha fatto la diagnosi del guasto.",
    "Sulla diagnosi della crisi gli economisti erano d'accordo; sulla cura, molto meno.",
  ],
  synonyms: [
    {
      term: "inquadramento",
      register: "tecnico-scientifico",
      context: "la collocazione di un caso in una categoria clinica, spesso prima della diagnosi definitiva",
    },
    {
      term: "identificazione",
      register: "comune",
      context: "più generico, senza il ragionamento clinico",
    },
    {
      term: "analisi",
      register: "comune",
      context: "solo nel senso esteso",
    },
  ],
  antonyms: [
    {
      term: "misdiagnosi",
      register: "tecnico",
      context: "diagnosi sbagliata; calco dall'inglese, ancora poco stabile",
      note: "In italiano si dice più spesso «errore diagnostico».",
    },
  ],
  relatedWords: [
    "anamnesi",
    "prognosi",
    "sintomo",
    "sindrome",
    "semiotica",
    "semiotica pragmatica",
    "patologia",
    "terapia",
    "depressione clinica",
    "burnout clinico",
    "ortoressia",
    "psicoterapia",
    "autodiagnosi",
    "diagnostica",
    "esame obiettivo",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/diagnosi/",
    wiktionary: "https://it.wiktionary.org/wiki/diagnosi",
  },
  paroliereNote: "La diagnosi si costruisce in un ordine preciso: prima la storia raccontata dal paziente, cioè l'→ [anamnesi](https://ilparoliere.online/parola/anamnesi), poi l'esame, poi gli accertamenti, infine un nome. Dopo vengono la → [prognosi](https://ilparoliere.online/parola/prognosi), che prevede il decorso, e la → [terapia](https://ilparoliere.online/parola/terapia), che prova a cambiarlo. In Italia la diagnosi di una malattia è un atto medico; la legge 56 del 1989 riconosce agli psicologi la diagnosi in ambito psicologico. Per questo l'autodiagnosi da motore di ricerca resta un'ipotesi, non una diagnosi: può aiutare a fare domande migliori, non a darsi risposte. Nel senso esteso la parola è entrata nell'officina e nell'economia con naturalezza e conserva il suo nucleo greco, distinguere una causa dalle altre che le somigliano. Le voci → [depressione clinica](https://ilparoliere.online/parola/depressione-clinica) e → [burnout clinico](https://ilparoliere.online/parola/burnout-clinico) mostrano quanto conti il confine fra un'etichetta d'uso comune e una diagnosi vera.",
  seo: {
    title: "Diagnosi — significato, etimologia ed esempi | Il Paroliere",
    description: "Che cos'è una diagnosi: il riconoscimento di una malattia da storia, visita ed esami. Diagnosi differenziale, senso esteso, autodiagnosi ed etimologia greca.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
