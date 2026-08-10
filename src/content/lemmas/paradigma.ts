// Il Paroliere — Lemma: paradigma
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const paradigma: LemmaEntry = {
  lemma: "paradigma",
  slug: "paradigma",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "divulgativo", "comune"],
  domains: ["filosofia-della-scienza", "epistemologia", "linguistica", "cultura-digitale"],

  definition:
    "Nell'accezione originaria della filosofia della scienza, insieme di conquiste teoriche, metodi e risultati esemplari, universalmente riconosciuti da una comunità scientifica in un dato periodo, che fornisce un modello condiviso di problemi rilevanti e di soluzioni accettabili. In questo senso preciso, un paradigma non è una semplice teoria, ma l'intero *quadro di riferimento* — spesso implicito — dentro cui una comunità fa ricerca “normale”, finché anomalie sempre più difficili da ignorare non aprono la strada a una *rivoluzione scientifica* e a un nuovo paradigma incommensurabile col precedente. Nell'uso corrente, il termine si è progressivamente allargato fino a indicare, in modo più vago, qualunque modello di riferimento dominante — culturale, aziendale, tecnologico — spesso con l'implicazione che stia per essere superato: si parla così di → paradigma economico, paradigma educativo, cambio di paradigma nel lavoro digitale, spesso senza il rigore storico-epistemologico dell'originale.",

  shortDefinition:
    "Modello teorico e metodologico condiviso da una comunità scientifica in un dato periodo; nell'uso corrente, quadro di riferimento dominante in un ambito qualsiasi.",

  etymology:
    "Dal greco *parádeigma*, “modello, esempio”, derivato da *paradeíknymi*, “mostrare accanto, esibire come esempio”. Il termine entra nel lessico filosofico-scientifico contemporaneo soprattutto grazie a Thomas Kuhn, che nel 1962, in *La struttura delle rivoluzioni scientifiche*, lo eleva a concetto cardine per descrivere la dinamica del progresso scientifico; nel poscritto del 1969 lo stesso Kuhn, riconoscendo l'ambiguità che il termine aveva già assunto, lo scompone in due nozioni più precise: *matrice disciplinare* (l'insieme di credenze, valori e tecniche condivise) ed *esemplari* (le soluzioni concrete di problemi che la comunità impara a riprodurre).",

  examples: [
    "Per Kuhn, la rivoluzione copernicana non fu semplicemente una teoria migliore: fu un cambio di paradigma, perché ridefinì quali domande avesse senso porre.",
    "In azienda si sente spesso dire che il lavoro da remoto ha imposto un nuovo paradigma organizzativo, ma raramente chi lo dice intende davvero un paradigma nel senso kuhniano.",
    "Lo studente confondeva paradigma con semplice teoria: gli ho spiegato che un paradigma include anche gli strumenti, il linguaggio e persino i criteri con cui si giudica cosa conti come problema.",
    "Il paradigma dominante in economia per decenni ha dato per scontate premesse che oggi vengono messe in discussione da scuole eterodosse.",
  ],

  synonyms: [
    { term: "modello teorico", register: "tecnico", note: "Più neutro, non implica il carattere condiviso e comunitario proprio del paradigma kuhniano." },
    { term: "quadro di riferimento", register: "divulgativo", note: "Traduzione italiana spesso usata per rendere il senso allargato e non tecnico del termine." },
    { term: "matrice disciplinare", register: "tecnico", note: "Formulazione più precisa proposta dallo stesso Kuhn nel 1969 per correggere l'ambiguità del termine originario." },
  ],

  antonyms: [
    { term: "anomalia", register: "tecnico", note: "Nel lessico kuhniano, il fatto osservativo che il paradigma vigente non riesce a spiegare, e che può innescarne la crisi." },
    { term: "eccezione", register: "comune", note: "Nell'uso corrente, ciò che sfugge al modello dominante senza necessariamente scalzarlo." },
  ],

  relatedWords: ["rivoluzione-scientifica", "epistemologia", "assioma", "inferenza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/paradigma",
  },

  paroliereNote:
    "Paradigma è una di quelle parole che hanno pagato il prezzo del proprio successo: nate per fare un lavoro concettuale molto preciso — descrivere come cambia la scienza — sono state prese in prestito da chiunque avesse bisogno di dare peso filosofico a un'osservazione generica. Dire “cambio di paradigma” per una nuova app o un nuovo modo di lavorare è quasi sempre un abuso: nella maggior parte dei casi si tratta di un aggiustamento, non della sostituzione di un intero modo di vedere il mondo che rende incommensurabile ciò che viene prima da ciò che viene dopo. Vale la pena riservare la parola grande alle occasioni grandi, e usare “modello” o “approccio” per tutto il resto.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "paradigma — significato, origine kuhniana e uso corrente",
    description:
      "Che cos'è un paradigma tra filosofia della scienza e Thomas Kuhn, e perché l'uso comune del termine spesso ne tradisce il rigore originario.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
