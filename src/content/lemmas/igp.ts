// Il Paroliere — Lemma: IGP
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const igp: LemmaEntry = {
  lemma: "IGP",
  slug: "igp",
  partOfSpeech: "sigla, sostantivo femminile invariabile",
  gender: "femminile",
  definition: "Sigla di Indicazione Geografica Protetta, la tutela europea per i nomi di prodotti agricoli, alimentari e vini legati a un luogo in modo meno stretto della DOP. Per gli alimenti basta che la qualità, la reputazione o un'altra caratteristica del prodotto sia attribuibile all'origine e che almeno una fase della produzione si svolga nella zona; per il vino, che almeno l'85% delle uve venga da lì.",
  shortDefinition: "Indicazione Geografica Protetta: tutela europea per prodotti legati a una zona dove avviene almeno una fase della produzione.",
  register: [
    "tecnico-giuridico",
    "comune",
  ],
  domains: [
    "diritto agroalimentare",
    "gastronomia",
    "enologia",
  ],
  etymology: "Sigla di Indicazione Geografica Protetta, categoria europea nata insieme alla DOP con il regolamento (CEE) n. 2081/92; corrisponde all'inglese PGI. Indicazione viene dal latino indicatio, da indicare «mostrare», legato a index «indice, dito che indica». Nel vino italiano la stessa categoria porta tradizionalmente il nome di IGT.",
  examples: [
    "Speck Alto Adige, Lardo di Colonnata, Finocchiona: tre IGP, tre modi diversi di legare un salume a un luogo.",
    "Per l'IGP basta che una fase avvenga nella zona: spesso è la lavorazione, non la materia prima.",
    "Sullo scaffale la bresaola IGP costava il doppio di quella senza sigla, e la commessa non sapeva spiegare perché.",
    "Nel vino, sotto la DOP c'è l'IGP, che in Italia si chiama ancora quasi sempre IGT.",
  ],
  synonyms: [
    {
      term: "indicazione geografica protetta",
      register: "tecnico-giuridico",
      context: "forma estesa",
    },
    {
      term: "IGT",
      register: "tecnico-giuridico",
      context: "nel vino italiano, la menzione tradizionale che corrisponde all'IGP",
    },
    {
      term: "PGI",
      register: "tecnico",
      context: "equivalente inglese, usato nei documenti europei",
    },
  ],
  antonyms: [
    {
      term: "prodotto generico",
      register: "comune",
      context: "senza un legame protetto con un'origine",
    },
  ],
  relatedWords: [
    "denominazione-dorigine",
    "dop",
    "igt",
    "doc",
    "docg",
    "disciplinare",
    "finocchiona",
    "insaccato",
    "olio-doliva",
    "vino",
    "terroir",
    "varietale",
    "frode",
    "consorzio di tutela",
    "indicazione geografica",
    "STG",
    "Aceto Balsamico di Modena",
    "Lardo di Colonnata",
    "extravergine",
    "cantuccio",
    "lardo",
    "olio-nuovo",
    "panforte",
    "ricciarello",
    "burrata",
    "cipolla-di-tropea",
    "limoncello",
    "peperone-crusco",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/IGP",
  },
  paroliereNote: "Il punto da ricordare è uno solo: nella → DOP tutto avviene nella zona, nell'IGP basta che ci avvenga almeno una tappa, e il legame può poggiare anche sulla reputazione. Per questo l'IGP non è una DOP di serie B, ma una tutela diversa, pensata per prodotti in cui conta il saper fare di un luogo più della provenienza di ogni ingrediente: in molti disciplinari la materia prima può arrivare da fuori. Nel vino il criterio è numerico, almeno l'85% delle uve dalla zona, e in Italia la sigla convive con la menzione tradizionale → IGT, che ne è l'equivalente nazionale. La G sta per «geografica»: l'IGP protegge un nome di luogo, non una ricetta, che è invece il campo delle STG, le specialità tradizionali garantite. Le regole, come sempre, stanno nel → disciplinare.",
  seo: {
    title: "IGP — significato e differenza con DOP e IGT | Il Paroliere",
    description: "Che cosa vuol dire IGP: Indicazione Geografica Protetta. Quando basta una fase di produzione nella zona, la regola dell'85% nel vino e la differenza con la DOP.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-15",
};
