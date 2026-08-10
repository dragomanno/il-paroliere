// Il Paroliere — Lemma: falsa dicotomia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const falsaDicotomia: LemmaEntry = {
  lemma: "falsa dicotomia",
  slug: "falsa-dicotomia",
  partOfSpeech: "locuzione-nominale",
  gender: "femminile",
  register: ["tecnico", "divulgativo", "comune"],
  domains: ["logica-informale", "retorica", "psicologia-cognitiva"],

  definition:
    "Fallacia logica informale — detta anche falso dilemma o, colloquialmente, pensiero in bianco e nero — che consiste nel presentare due sole opzioni alternative come se fossero le uniche possibili di fronte a un problema, quando in realtà esistono altre soluzioni intermedie, o elementi dell'una si possono combinare con quelli dell'altra. A differenza di una fallacia logica formale, che riguarda un errore nella struttura stessa del ragionamento, la falsa dicotomia è un errore di contenuto: la forma \"o A o B\" può essere logicamente ineccepibile, ma diventa fuorviante quando A e B non esauriscono davvero il ventaglio delle possibilità. È una tecnica retorica frequente in politica e nella pubblicità, dove costringere l'interlocutore a scegliere tra due sole opzioni — spesso entrambe estreme — semplifica artificialmente questioni che richiederebbero maggiori sfumature.",

  shortDefinition:
    "Fallacia che presenta solo due opzioni come le uniche possibili, ignorando alternative intermedie o combinazioni reali.",

  etymology:
    "Locuzione composta da *falsa*, dal latino *falsus*, participio di *fallere*, “ingannare”, e *dicotomia*, dal greco *dichotomía*, “divisione in due parti”, da *dícha*, “in due” e *tomḗ*, “taglio”. La denominazione tecnica si è consolidata nel Novecento nel lessico della logica informale, insieme al sinonimo *falso dilemma*, per descrivere un tipo specifico di argomentazione ingannevole già praticata, senza nome tecnico, nella retorica classica.",

  examples: [
    "\"O sei con noi o sei contro di noi\" è una falsa dicotomia classica: ignora ogni posizione di dissenso parziale, neutralità o critica costruttiva.",
    "Il venditore le ha proposto una falsa dicotomia: comprare subito o perdere l'occasione per sempre, senza menzionare che il prodotto sarebbe tornato disponibile il mese dopo.",
    "Nel dibattito pubblico capita spesso di dover scegliere tra due estremi presentati come unica alternativa possibile, quando la posizione più ragionevole si trova altrove, nel mezzo o fuori da quell'asse.",
    "Presentare la scelta come 'crescita economica o tutela ambientale' è spesso una falsa dicotomia che nasconde soluzioni capaci di conciliare entrambi gli obiettivi.",
  ],

  synonyms: [
    { term: "falso dilemma", register: "tecnico", note: "Denominazione equivalente, forse la più diffusa nella manualistica di logica informale." },
    { term: "aut-aut ingannevole", register: "divulgativo", note: "Resa colloquiale che richiama la struttura logica dell'alternativa forzata." },
    { term: "pensiero in bianco e nero", register: "comune", note: "Formula molto informale, spesso usata anche in ambito psicologico per descrivere uno stile cognitivo rigido." },
  ],

  antonyms: [
    { term: "pensiero sfumato", register: "comune", note: "Approccio che riconosce gradazioni intermedie e non riduce un problema a due sole opzioni." },
    { term: "pensiero-laterale", register: "tecnico", note: "Modalità di ragionamento che esplora deliberatamente alternative multiple, opposta alla riduzione binaria della falsa dicotomia." },
  ],

  relatedWords: ["sillogismo", "bias-cognitivo", "pensiero-laterale"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dicotomia",
  },

  paroliereNote:
    "La falsa dicotomia è forse la fallacia più comoda del discorso pubblico, perché lusinga chi ascolta con l'illusione di una scelta semplice: due sole opzioni sono facili da valutare, facili da schierare, facili da vendere. Il problema non è mai la forma \"o questo o quello\" in sé — a volte le alternative sono davvero solo due — ma la pigrizia, o la malafede, di chi non verifica se esista un terzo, un quarto, un ventesimo scenario prima di costringere l'interlocutore dentro una gabbia binaria. Diffidare della falsa dicotomia significa, semplicemente, chiedersi sempre: 'e se non fosse né l'uno né l'altro?'",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "falsa dicotomia — significato, falso dilemma ed esempi",
    description:
      "Che cos'è una falsa dicotomia (o falso dilemma): la fallacia logica informale che riduce un problema a due sole opzioni, con esempi pratici.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
