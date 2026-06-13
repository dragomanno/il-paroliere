// Il Paroliere — Lemma: cinismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cinismo: LemmaEntry = {
  lemma: "cinismo",
  slug: "cinismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["filosofico", "comune", "saggistico"],
  domains: ["filosofia", "etica", "psicologia sociale", "retorica politica"],

  definition:
    "In filosofia, il Cinismo (con la maiuscola) indica la scuola fondata da Antistene " +
    "e resa celebre da Diogene di Sinope nell'Atene del IV secolo a.C., caratterizzata " +
    "dal rifiuto delle convenzioni sociali, dal disprezzo del lusso e dall'autosufficienza " +
    "come virtù suprema. Nel linguaggio comune, il cinismo (con la minuscola) ha assunto " +
    "un significato quasi opposto: non il rifiuto autentico delle convenzioni per vivere " +
    "secondo natura, ma la postura di chi dichiara di non credere in nessun valore per " +
    "non rischiare di essere deluso o di sembrare ingenuo. Il cinico contemporaneo non " +
    "è un filosofo: è qualcuno che ha smesso di stupirsi perché ha deciso che non vale " +
    "la pena farlo.",

  shortDefinition:
    "In filosofia, scuola che esalta l'autosufficienza e il rifiuto delle convenzioni; " +
    "nel linguaggio comune, atteggiamento di chi non crede in nessun valore come " +
    "difesa contro la delusione.",

  etymology:
    "Dal greco kynikós \u00absimile a un cane\u00bb, da kýōn \u00abcane\u00bb — con riferimento " +
    "all'abitudine dei cinici di vivere in modo elementare come i cani, senza riguardo " +
    "per le convenienze sociali. Alcuni collegano anche al ginnasio di Cinosarge " +
    "(Kynosarges) dove Antistene insegnava. Il salto semantico dal Cinico filosofico " +
    "al \u00abcinico\u00bb nel senso moderno avviene gradualmente tra Illuminismo e Ottocento.",

  examples: [
    "Diogene era il cinico che viveva in una botte e si faceva luce in pieno giorno con una lanterna cercando \u201cun uomo onesto\u201d: non era un nichilista, era un provocatore con una tesi.",
    "Nel linguaggio politico, \u201cè un cinico\u201d significa quasi sempre: \u201cfa finta di non credere in niente per non doversi mai impegnare davvero in nulla\u201d.",
    "Il cinismo di massa — quella sensazione diffusa che \u201ctanto cambia poco\u201d — è uno dei combustibili dell'astensionismo elettorale e dell'indifferenza civile.",
    "C'è una differenza importante tra cinismo e disincanto: il disincantato ha perso le illusioni ma mantiene la capacità di vedere le cose per quello che sono; il cinico usa la perdita delle illusioni come alibi per non guardare affatto.",
  ],

  synonyms: [
    {
      term: "disincanto",
      register: "comune-saggistico",
      note: "Parzialmente sovrapposto, ma il disincanto non implica la postura difensiva tipica del cinismo contemporaneo.",
    },
    {
      term: "nichilismo pratico",
      register: "filosofico",
      note: "Il cinismo come nichilismo applicato alla vita quotidiana, senza base teorica sistematica.",
    },
  ],

  antonyms: [
    {
      term: "idealismo",
      register: "filosofico-comune",
      note: "La posizione opposta: credere nei valori e agire in funzione di essi.",
    },
    {
      term: "ingenuità",
      register: "comune",
      note: "Il polo opposto nella percezione popolare: chi ci crede troppo vs chi non ci crede per niente.",
    },
  ],

  relatedWords: ["fatalismo", "indifferenza-civile", "astensionismo", "dialettica", "diffidenza", "modernita-liquida"],

  sourceLinks: {},

  paroliereNote:
    "Il cinismo è la forma più elegante di codardia intellettuale. Non richiede coraggio " +
    "di sostenere niente, perché non sostiene niente. Non rischia di sbagliare, perché " +
    "non si espone. E nel frattempo si spaccia per realismo, per maturità, per esperienza " +
    "del mondo. Il Diogene originale era il contrario: un uomo che credeva talmente nel " +
    "valore dell'autosufficienza da vivere coerentemente con quella credenza, fino " +
    "all'eccesso. Il cinico contemporaneo non ha credenze — ha solo l'aria di chi le ha " +
    "avute e le ha perse. Il che è molto meno interessante.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "cinismo — da Diogene alla postura contemporanea che rifiuta ogni valore",
    description:
      "Che cos'è il cinismo: la scuola filosofica di Antistene e Diogene, il salto " +
      "semantico all'uso moderno e la differenza tra cinismo e disincanto.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
