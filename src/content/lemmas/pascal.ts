// Il Paroliere — Lemma: pascal
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pascal: LemmaEntry = {
  lemma: "pascal",
  slug: "pascal",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "1. Unità di misura della pressione nel Sistema Internazionale, di simbolo Pa, pari alla pressione esercitata da una forza di un newton su una superficie di un metro quadrato. È un'unità molto piccola: la pressione atmosferica al livello del mare vale circa 101.325 pascal, e per questo in meteorologia si usa il multiplo ettopascal, in altri campi il kilopascal e il megapascal. Il nome fu adottato nel 1971 dalla Conferenza generale dei pesi e delle misure. 2. In informatica, con l'iniziale maiuscola, linguaggio di programmazione creato dallo svizzero Niklaus Wirth intorno al 1970 e molto usato nell'insegnamento.",
  shortDefinition: "Unità SI della pressione, simbolo Pa, pari a un newton per metro quadrato; la pressione al mare è circa 101.325 Pa.",
  register: [
    "tecnico-scientifico",
  ],
  domains: [
    "fisica",
    "metrologia",
    "informatica",
  ],
  etymology: "Dal nome di Blaise Pascal (1623-1662), matematico, fisico e filosofo francese, che nel 1648 fece misurare al cognato Florin Périer l'altezza della colonna di mercurio ai piedi e in cima al Puy de Dôme, mostrando che la pressione dell'aria diminuisce salendo. Anche il linguaggio di programmazione porta il suo nome, in omaggio alla pascalina, una delle prime calcolatrici meccaniche, che Pascal aveva costruito da giovane.",
  examples: [
    "Gli pneumatici dell'auto vanno gonfiati a circa duecentoquaranta kilopascal, cioè 2,4 bar.",
    "Una pressione di un pascal è più o meno quella di un foglio di carta appoggiato su un tavolo.",
    "All'università il primo programma che ho scritto era in Pascal, e stampava una tabella di conversione.",
  ],
  synonyms: [
    {
      term: "Pa",
      register: "tecnico-scientifico",
      context: "simbolo",
    },
    {
      term: "newton per metro quadrato",
      register: "tecnico-scientifico",
      context: "la definizione dell'unità",
    },
  ],
  antonyms: [],
  relatedWords: [
    "ettopascal",
    "millibar",
    "pressione-atmosferica",
    "barometro",
    "kelvin",
    "joule",
    "legge-di-boyle",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/pascal/",
    wiktionary: "https://it.wiktionary.org/wiki/pascal",
  },
  paroliereNote: "Il pascal dimostra che un'unità può essere perfetta in teoria e scomoda nell'uso: è così piccolo che quasi nessuno lo usa da solo. I meteorologi ne prendono cento alla volta, l'→ ettopascal; i gommisti ragionano in kilopascal o in bar; gli ingegneri dei materiali in megapascal. Il nome rende omaggio a uno scienziato che la pressione dell'aria l'aveva dimostrata su un vulcano spento, o meglio facendoci salire il cognato. Si scrive minuscolo e non cambia al plurale: cento pascal.",
  seo: {
    title: "Pascal — significato, unità di pressione e simbolo Pa | Il Paroliere",
    description: "Che cos'è il pascal: l'unità SI della pressione, un newton per metro quadrato. Multipli, ettopascal, Blaise Pascal e il linguaggio di programmazione.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
