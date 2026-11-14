// Il Paroliere — Lemma: kanban
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const kanban: LemmaEntry = {
  lemma: "kanban",
  slug: "kanban",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Metodo di organizzazione del lavoro che rende visibile il flusso delle attività su una lavagna divisa in colonne, per esempio da fare, in corso e fatto, e limita il numero di compiti aperti nello stesso momento. Nato nelle fabbriche Toyota come sistema di cartellini per richiamare i pezzi solo quando servono, oggi è molto usato nello sviluppo software e nella gestione dei progetti.",
  shortDefinition: "Metodo che visualizza il flusso di lavoro su una lavagna a colonne e limita i compiti aperti nello stesso momento.",
  register: [
    "tecnico",
    "professionale",
  ],
  domains: [
    "management",
    "produzione industriale",
    "informatica",
  ],
  etymology: "Dal giapponese kanban 看板, composto di kan «guardare» e ban «tavola, pannello»: letteralmente «cartello, insegna». Alla Toyota, dagli anni Cinquanta, Taiichi Ohno lo usò per indicare i cartellini che accompagnano i contenitori di pezzi e segnalano quando rifornirli; l'ispirazione, raccontava, gli venne dai supermercati americani, dove gli scaffali si riempiono man mano che si svuotano. Il metodo per il lavoro d'ufficio e il software è stato formalizzato da David Anderson nel 2010.",
  examples: [
    "Sulla parete della redazione c'è una lavagna kanban: ogni articolo è un foglietto che passa da bozza a revisione a pubblicato.",
    "Il kanban ha mostrato subito il problema: dieci attività in corso e nessuna finita.",
    "In officina i kanban viaggiano con le cassette dei pezzi: quando una cassetta si svuota, il cartellino torna al fornitore.",
  ],
  synonyms: [
    {
      term: "lavagna kanban",
      register: "professionale",
      context: "lo strumento visivo, fisico o digitale",
    },
    {
      term: "sistema a cartellini",
      register: "tecnico",
      context: "la versione industriale originale",
    },
    {
      term: "produzione a trazione",
      register: "tecnico",
      context: "il principio di fondo: produrre solo su richiesta; in inglese pull",
    },
  ],
  antonyms: [
    {
      term: "produzione a spinta",
      register: "tecnico",
      context: "produrre secondo previsioni, accumulando scorte; in inglese push",
    },
  ],
  relatedWords: [
    "lean",
    "agile",
    "sprint",
    "prioritizzazione",
    "efficienza",
    "deadline",
    "manifattura",
    "kaizen",
    "just in time",
  ],
  sourceLinks: {},
  paroliereNote: "Del kanban si ricorda soprattutto la lavagna con i foglietti colorati, ma il cuore del metodo è un'altra cosa: il limite ai lavori in corso. Iniziare molte attività insieme dà l'impressione di essere produttivi; in realtà rallenta tutto, perché ogni compito aspetta che gli altri liberino tempo e attenzione. Il kanban rende visibile questa coda e costringe a finire prima di cominciare. È anche un bell'esempio di parola giapponese entrata nell'italiano attraverso l'inglese aziendale, come kaizen: in origine indicava, molto semplicemente, un'insegna da guardare. Il metodo viene dalla famiglia del → lean.",
  seo: {
    title: "Kanban — significato, origine giapponese e metodo | Il Paroliere",
    description: "Che cos'è il kanban: metodo che visualizza il flusso di lavoro su una lavagna e limita i compiti aperti. Origine giapponese, Toyota e uso nel software.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
