// Il Paroliere — Lemma: sprint
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sprint: LemmaEntry = {
  lemma: "sprint",
  slug: "sprint",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Nello sport, accelerazione massima su un tratto breve, in particolare nella fase finale di una corsa; anche la gara di velocità stessa. In senso figurato, sforzo intenso e concentrato in poco tempo. Nei metodi di sviluppo Agile, e in particolare in Scrum, indica un ciclo di lavoro di durata fissa, al massimo un mese, al termine del quale il gruppo consegna un risultato utilizzabile.",
  shortDefinition: "Accelerazione massima su un tratto breve; nei metodi Agile, ciclo di lavoro di durata fissa con un risultato concreto.",
  register: [
    "comune",
    "tecnico",
  ],
  domains: [
    "sport",
    "informatica",
    "management",
  ],
  etymology: "Dall'inglese sprint, dal verbo to sprint «scattare, correre a tutta velocità», di origine scandinava, affine all'antico nordico spretta «balzare». Il sostantivo sportivo è attestato a metà Ottocento. Il senso di ciclo di lavoro nasce con Scrum, il metodo presentato da Jeff Sutherland e Ken Schwaber nel 1995; il nome stesso di Scrum, la mischia del rugby, viene da un articolo di Hirotaka Takeuchi e Ikujiro Nonaka del 1986.",
  examples: [
    "Allo sprint finale il ciclista è uscito dalla scia e ha vinto per mezza ruota.",
    "Ultimo sprint prima delle ferie: chiudiamo i preventivi entro venerdì.",
    "Lo sprint dura due settimane: il lunedì si decide cosa fare, il venerdì successivo si mostra quello che funziona.",
  ],
  synonyms: [
    {
      term: "volata",
      register: "comune",
      context: "nel ciclismo e nell'atletica, la fase finale",
    },
    {
      term: "scatto",
      register: "comune",
      context: "l'accelerazione improvvisa",
    },
    {
      term: "iterazione",
      register: "tecnico",
      context: "nello sviluppo software, termine più generico",
      note: "Ogni sprint è un'iterazione, non ogni iterazione è uno sprint.",
    },
  ],
  antonyms: [
    {
      term: "fondo",
      register: "tecnico",
      context: "nello sport, la gara di resistenza su lunga distanza",
    },
  ],
  relatedWords: [
    "agile",
    "kanban",
    "deadline",
    "deliverable",
    "milestone",
    "burnout",
    "prioritizzazione",
    "Scrum",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sprint/",
    wiktionary: "https://it.wiktionary.org/wiki/sprint",
  },
  paroliereNote: "Lo sprint dello sviluppo software ha preso dallo sport il nome, non il ritmo. Nella corsa lo sprint è uno sforzo al limite, che non si può ripetere senza recupero; in Scrum, invece, gli sprint si susseguono uno dopo l'altro, e il metodo chiede un ritmo sostenibile, che il gruppo possa mantenere a lungo. Quando un'organizzazione dimentica questa differenza e tratta ogni ciclo come una volata, il calendario degli sprint diventa una fabbrica di → burnout. Nel parlato aziendale c'è anche il senso comune di sforzo finale, vicino alla → deadline: «l'ultimo sprint prima della consegna».",
  seo: {
    title: "Sprint — significato nello sport e nei metodi Agile | Il Paroliere",
    description: "Che cos'è uno sprint: accelerazione massima su un tratto breve e, in Scrum, ciclo di lavoro di durata fissa. Etimologia, origine e ritmo sostenibile.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
