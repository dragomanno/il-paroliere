// Il Paroliere — Lemma: pensiero laterale
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pensieroLaterale: LemmaEntry = {
  lemma: "pensiero laterale",
  slug: "pensiero-laterale",
  partOfSpeech: "locuzione-nominale",
  gender: "maschile",
  register: ["tecnico", "divulgativo", "aziendale"],
  domains: ["psicologia-cognitiva", "creativita", "metodologia"],

  definition:
    "Modalità di ragionamento, teorizzata dallo psicologo maltese Edward de Bono a partire dal 1967, che affronta un problema osservandolo da angolazioni multiple e non convenzionali, invece di procedere passo dopo passo lungo l'unica sequenza logica più ovvia. De Bono la contrappone esplicitamente al *pensiero verticale* — selettivo, sequenziale, interessato soprattutto alla correttezza formale di ogni passaggio — definendo il pensiero laterale come produttivo, interessato alla ricchezza delle alternative generabili più che alla loro immediata validità. In questo senso il pensiero laterale è, per costruzione, quasi l'opposto metodologico del → rasoio di Occam: mentre quest'ultimo cerca la spiegazione più economica scartando ipotesi non necessarie, il pensiero laterale incoraggia a esplorare deliberatamente percorsi complessi, insoliti o apparentemente irrilevanti, proprio perché è lì che si annidano le soluzioni creative che il ragionamento lineare non riesce a raggiungere.",

  shortDefinition:
    "Modalità di ragionamento creativo, teorizzata da Edward de Bono, che esplora un problema da angolazioni multiple invece che in sequenza logica lineare.",

  etymology:
    "Calco dall'inglese *lateral thinking*, espressione coniata dallo psicologo maltese Edward de Bono nel suo libro del 1967 *The Use of Lateral Thinking*. L'aggettivo *laterale*, dal latino *lateralis*, derivato di *latus*, “fianco, lato”, rende l'idea di un movimento del pensiero che si sposta di lato rispetto al percorso logico atteso, anziché avanzare in linea retta verso la conclusione più ovvia. L'espressione, nata come termine tecnico della psicologia della creatività, è oggi un anglicismo pienamente integrato nel lessico manageriale e divulgativo italiano.",

  examples: [
    "Il problema sembrava irrisolvibile finché non ha applicato un po' di pensiero laterale, chiedendosi non 'come lo risolvo' ma 'perché deve essere risolto in questo modo'.",
    "Nei colloqui di lavoro creativi si usano talvolta indovinelli da pensiero laterale, apparentemente senza logica, per valutare la flessibilità mentale del candidato più che la sua conoscenza tecnica.",
    "De Bono insegnava che il pensiero verticale scava lo stesso buco più a fondo, mentre il pensiero laterale sposta lo scavo in un punto diverso del terreno.",
    "L'azienda ha risolto il calo di vendite con una soluzione di pensiero laterale: invece di abbassare i prezzi, ha cambiato il pubblico a cui si rivolgeva il prodotto.",
  ],

  synonyms: [
    { term: "pensiero divergente", register: "tecnico", note: "Concetto affine della psicologia della creatività, elaborato da J.P. Guilford, che enfatizza la generazione di molteplici soluzioni possibili." },
    { term: "creatività laterale", register: "divulgativo", note: "Variante espressiva, meno tecnica, usata soprattutto in ambito formativo e aziendale." },
  ],

  antonyms: [
    { term: "pensiero verticale", register: "tecnico", note: "Il termine con cui lo stesso de Bono definisce l'opposto: ragionamento sequenziale, selettivo, orientato alla correttezza formale di ogni passo." },
    { term: "occam", register: "tecnico", note: "Il rasoio di Occam cerca la spiegazione più economica; il pensiero laterale esplora deliberatamente ipotesi non economiche, in cerca di soluzioni non ovvie." },
  ],

  relatedWords: ["euristica", "bias-cognitivo", "occam"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/pensiero_laterale",
  },

  paroliereNote:
    "Il pensiero laterale ha avuto la sfortuna, come spesso capita ai concetti utili, di essere svuotato dal marketing aziendale fino a diventare quasi un sinonimo generico di 'pensare fuori dagli schemi' su ogni slide motivazionale. Ma l'intuizione originale di de Bono era più precisa e più radicale: non si tratta solo di essere creativi, ma di riconoscere che il pensiero verticale, per quanto rigoroso, scava sempre nello stesso punto — e a volte il problema non è scavare meglio, ma accorgersi che si sta scavando nel posto sbagliato. Vale la pena restituire al termine la sua serietà metodologica, prima che diventi solo un'etichetta vuota per ogni idea leggermente insolita.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "pensiero laterale — significato, Edward de Bono e uso corrente",
    description:
      "Che cos'è il pensiero laterale secondo Edward de Bono: la differenza dal pensiero verticale e il contrasto metodologico con il rasoio di Occam.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
