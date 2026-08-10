// Il Paroliere — Lemma: stereotipo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const stereotipo: LemmaEntry = {
  lemma: "stereotipo",
  slug: "stereotipo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "tecnico"],
  domains: ["psicologia sociale", "sociologia", "linguaggio"],

  definition:
    "Rappresentazione mentale semplificata e rigida attribuita indistintamente a tutti i membri di un determinato gruppo sociale, che riduce la varietà reale delle persone a un piccolo insieme di tratti fissi presunti comuni — 'gli italiani sono espansivi', 'gli svizzeri sono precisi'. A differenza del pregiudizio, che ha natura affettiva e valutativa, lo stereotipo è essenzialmente cognitivo: è una scorciatoia di pensiero, uno schema che permette di categorizzare rapidamente persone e situazioni sconosciute, e può essere neutro o persino positivo, non necessariamente negativo od ostile. È proprio lo stereotipo, però, a fornire il nucleo cognitivo su cui si costruisce il pregiudizio, quando a quella rappresentazione si aggiunge una componente emotiva di valutazione negativa verso il gruppo; da lì, tradotto in comportamento concreto, il pregiudizio può sfociare in discriminazione. La psicologia sociale distingue quindi tre piani progressivi e collegati: stereotipo (rappresentazione), pregiudizio (atteggiamento), discriminazione (comportamento).",

  shortDefinition:
    "Rappresentazione mentale semplificata e rigida di un gruppo sociale — piano cognitivo, distinto dal pregiudizio (emotivo) e dalla discriminazione (comportamentale).",

  etymology:
    "Dal greco *stereós* «rigido, solido» e *týpos* «impronta, stampo»: nell'uso tipografico originario indicava una lastra rigida usata per riprodurre in stampa sempre la stessa immagine identica. Il giornalista e sociologo Walter Lippmann trasferì il termine alla psicologia sociale nel 1922, applicandolo alle 'immagini nella nostra testa' — rappresentazioni fisse e semplificate della realtà sociale, riprodotte sempre uguali a se stesse come lo stampo tipografico.",

  examples: [
    "Lo stereotipo secondo cui 'i genovesi sono avari' è una generalizzazione rigida priva di fondamento sistematico, ma resiste nel folklore linguistico italiano.",
    "Non tutti gli stereotipi sono negativi: 'i giapponesi sono precisi' è uno stereotipo, in senso tecnico, anche se lusinghiero per chi ne è oggetto.",
    "La pubblicità si affida spesso a stereotipi di genere consolidati, associando automaticamente prodotti per la casa a figure femminili.",
    "Distinguere lo stereotipo dal pregiudizio aiuta a capire perché una persona possa riconoscere razionalmente uno stereotipo come falso, pur continuando ad agire secondo un pregiudizio radicato.",
  ],

  synonyms: [
    { term: "cliché", register: "colloquiale/francesismo", note: "Sinonimo diffuso nell'uso comune, spesso applicato anche a rappresentazioni culturali o narrative oltre che sociali." },
    { term: "luogo comune", register: "comune", note: "Enfatizza l'aspetto di idea condivisa e ripetuta acriticamente, più che la sua funzione di categorizzazione sociale." },
  ],

  antonyms: [
    { term: "conoscenza individuale", register: "comune", note: "Valutazione di una persona basata sulla sua esperienza specifica, non sull'appartenenza a una categoria generale." },
  ],

  relatedWords: ["pregiudizio", "bias-cognitivo", "euristica"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/stereotipo/",
    wiktionary: "https://it.wiktionary.org/wiki/stereotipo",
  },

  paroliereNote:
    "La metafora tipografica all'origine di questa parola è più precisa di quanto sembri a prima vista: uno stereotipo, come lo stampo da cui prende il nome, produce sempre la stessa immagine identica, indipendentemente da quale sia effettivamente la persona che si trova a incontrare chi lo usa. Il punto delicato è che gli stereotipi non sono un difetto occasionale del pensiero: sono un prodotto ordinario, quasi inevitabile, del modo in cui la mente categorizza il mondo per renderlo gestibile. Il problema comincia non quando categorizziamo — cosa che facciamo sempre — ma quando smettiamo di correggere la categoria di fronte a un'evidenza individuale che la contraddice.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "stereotipo — significato, differenza da pregiudizio ed esempi",
    description:
      "Che cos'è uno stereotipo: la rappresentazione mentale rigida di un gruppo sociale, dall'etimologia tipografica a Walter Lippmann (1922), distinta da pregiudizio e discriminazione.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
