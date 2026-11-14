// Il Paroliere — Lemma: lean
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lean: LemmaEntry = {
  lemma: "lean",
  slug: "lean",
  partOfSpeech: "aggettivo invariabile e sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Detto di un modello di produzione o di gestione che punta a eliminare ogni spreco, cioè ogni attività che consuma risorse senza creare valore per il cliente: scorte inutili, attese, spostamenti, errori, sovrapproduzione. Nato dall'esperienza della Toyota, il principio si è esteso dalla fabbrica agli uffici, alla sanità, al software e alle startup. Come sostantivo indica l'approccio stesso.",
  shortDefinition: "Modello di produzione e gestione che elimina gli sprechi, cioè tutto ciò che consuma risorse senza creare valore.",
  register: [
    "tecnico",
    "professionale",
  ],
  domains: [
    "management",
    "produzione industriale",
    "economia",
  ],
  etymology: "Dall'inglese lean «magro, snello, asciutto», parola di origine germanica antica. In senso organizzativo l'aggettivo si deve a John Krafcik, che nel 1988 parlò di lean production per descrivere il sistema produttivo della Toyota, contrapposto alla produzione di massa. Lo resero celebre James Womack, Daniel Jones e Daniel Roos con il libro The Machine That Changed the World del 1990. Nel 2011 Eric Ries ha esteso l'idea alle startup con The Lean Startup.",
  examples: [
    "Con il metodo lean il magazzino si è dimezzato: i pezzi arrivano quando servono, non tre mesi prima.",
    "L'ospedale ha applicato il lean al pronto soccorso e ha ridotto le attese eliminando passaggi che nessuno sapeva più giustificare.",
    "Una startup lean lancia presto una versione minima del prodotto e la corregge in base a come la usano i clienti.",
  ],
  synonyms: [
    {
      term: "snello",
      register: "comune",
      context: "resa italiana, frequente in produzione snella",
      note: "Funziona bene; perde solo il richiamo al marchio metodologico.",
    },
    {
      term: "produzione snella",
      register: "tecnico",
      context: "il nome italiano del modello industriale",
    },
    {
      term: "Toyota Production System",
      register: "tecnico",
      context: "il sistema originale da cui il modello deriva",
    },
  ],
  antonyms: [
    {
      term: "produzione di massa",
      register: "tecnico",
      context: "il modello fordista, con grandi lotti e grandi scorte",
    },
  ],
  relatedWords: [
    "kanban",
    "agile",
    "efficienza",
    "efficacia",
    "startup",
    "kpi",
    "scalabilita",
    "manifattura",
    "prioritizzazione",
    "kaizen",
    "spreco",
  ],
  sourceLinks: {},
  paroliereNote: "Lean significa magro, e la traduzione snello rende bene l'idea: togliere peso, non muscoli. Il rischio è proprio confondere le due cose. Nato come metodo per far scorrere meglio il lavoro, eliminando le attese e gli errori, il lean è stato spesso usato come sinonimo elegante di tagli al personale; in quel caso si toglie il muscolo e si chiama snellezza. L'idea originale è più interessante: chi lavora in linea è la persona che vede meglio gli sprechi, e il miglioramento continuo parte da lì. Lo strumento più noto della famiglia è il → kanban.",
  seo: {
    title: "Lean — significato, origine e produzione snella | Il Paroliere",
    description: "Che cosa significa lean: modello di produzione e gestione che elimina gli sprechi. Origine Toyota, Krafcik 1988, produzione snella e lean startup.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
