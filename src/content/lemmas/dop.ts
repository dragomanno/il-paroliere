// Il Paroliere — Lemma: DOP
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dop: LemmaEntry = {
  lemma: "DOP",
  slug: "dop",
  partOfSpeech: "sigla, sostantivo femminile invariabile",
  gender: "femminile",
  definition: "Sigla di Denominazione di Origine Protetta, il livello più stretto di tutela europea per i nomi geografici di prodotti agricoli, alimentari e vini. Per gli alimenti richiede che le qualità del prodotto dipendano essenzialmente dall'ambiente di una zona, con i suoi fattori naturali e umani, e che ogni fase della produzione si svolga lì; per il vino, che le uve vengano tutte dalla zona.",
  shortDefinition: "Denominazione di Origine Protetta: tutela europea per prodotti legati a una zona, dove si svolge tutta la produzione.",
  register: [
    "tecnico-giuridico",
    "comune",
  ],
  domains: [
    "diritto agroalimentare",
    "gastronomia",
    "enologia",
  ],
  etymology: "Sigla formata dalle iniziali di Denominazione di Origine Protetta, nome italiano della categoria europea creata dal regolamento (CEE) n. 2081/92 del 14 luglio 1992; corrisponde al francese AOP e all'inglese PDO. Le prime DOP italiane furono registrate nel 1996: fra queste Parmigiano Reggiano, Grana Padano, Gorgonzola, Prosciutto di Parma e Mozzarella di Bufala Campana.",
  examples: [
    "Il Parmigiano Reggiano è una DOP: latte, caseificazione e stagionatura stanno tutti dentro la zona d'origine.",
    "Nel menu c'era scritto «pecorino DOP» senza dire quale, che è un po' come scrivere «vino DOC».",
    "L'Aceto Balsamico Tradizionale di Modena è DOP, quello «di Modena» senza aggettivo è IGP: due prodotti diversi.",
    "L'olio della cooperativa è buono, ma non è DOP: una parte delle olive arriva da fuori zona.",
  ],
  synonyms: [
    {
      term: "denominazione di origine protetta",
      register: "tecnico-giuridico",
      context: "forma estesa",
    },
    {
      term: "AOP",
      register: "tecnico",
      context: "equivalente francese",
    },
    {
      term: "PDO",
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
    {
      term: "imitazione",
      register: "comune",
      context: "prodotto che richiama il nome tutelato senza averne diritto",
    },
  ],
  relatedWords: [
    "denominazione-dorigine",
    "igp",
    "doc",
    "docg",
    "igt",
    "disciplinare",
    "terroir",
    "olio-doliva",
    "vino",
    "pistacchio",
    "insaccato",
    "salatura",
    "frode",
    "consorzio di tutela",
    "STG",
    "Parmigiano Reggiano",
    "Prosciutto di Parma",
    "Aceto Balsamico Tradizionale di Modena",
    "cultivar",
    "extravergine",
    "neccio",
    "olio-nuovo",
    "pane-sciocco",
    "pecorino",
    "soppressata",
    "bergamotto",
    "caciocavallo",
    "capocollo",
    "colatura-di-alici",
    "mozzarella",
    "pane-di-altamura",
    "provola",
    "ricotta",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/DOP",
  },
  paroliereNote: "La DOP è la sigla più severa del sistema europeo, ma non è un bollino di bontà: certifica un legame, non un gusto. Il criterio decisivo, per gli alimenti, è che tutta la filiera stia nella zona e che le qualità del prodotto si spieghino con quel luogo; nell'→ IGP basta che lì avvenga almeno una fase. La differenza si vede bene a Modena, dove i due aceti balsamici hanno due sigle diverse. Nel vino la DOP europea comprende le due sigle storiche italiane, → DOC e → DOCG, che restano in etichetta come menzioni tradizionali: un Brunello di Montalcino è insieme DOCG e DOP. Le regole stanno nel → disciplinare; i nomi registrati non possono diventare generici, e la legge ne vieta anche l'evocazione con formule come «tipo», «metodo» o «alla maniera di». Dal 2024 la materia è riordinata dal [regolamento (UE) 2024/1143](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R1143).",
  seo: {
    title: "DOP — significato e differenza con IGP, DOC e DOCG | Il Paroliere",
    description: "Che cosa vuol dire DOP: Denominazione di Origine Protetta, tutela europea per prodotti legati a una zona. Regole, storia dal 1992 e differenza con l'IGP.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-15",
};
