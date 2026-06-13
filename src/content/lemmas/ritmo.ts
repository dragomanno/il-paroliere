// Il Paroliere — Lemma: ritmo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ritmo: LemmaEntry = {
  lemma: "ritmo",
  slug: "ritmo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["musica", "poetica", "danza", "biologia", "estetica"],

  definition:
    "Successione regolare o percepibilmente ordinata di elementi nel tempo — suoni, " +
    "movimenti, parole, impulsi biologici. Il ritmo non richiede uniformità ma percezione " +
    "di un pattern: anche le irregolarità ritmiche (sincopi, pause, accelerazioni) sono " +
    "ritmo nella misura in cui producono un’attesa e la soddisfano o la delicono. In " +
    "biologia, il ritmo governa i cicli del corpo: battito cardiaco, respiro, sonno.",

  shortDefinition:
    "Successione percepibilmente ordinata di elementi nel tempo; il pattern che crea attesa e risoluzione.",

  etymology:
    "Dal greco rhythmos “flusso, misura, regolarità”, da rhein “scorrere”. La stessa " +
    "radice di “rima” (attraverso il latino rythmus) e di “diarrea” (scorrimento eccessivo).",

  examples: [
    "Il ritmo di una prosa non si misura solo con le sillabe: è la relazione tra lunghezza dei periodi, posizione degli accenti, distribuzione delle pause — tutto ciò che fa muovere il testo.",
    "Il ritmo circadiano non è un’abitudine: è un orologio biologico endogeno che persiste anche nell’assenza di luce esterna, regolando temperatura, ormoni e veglia.",
    "In jazz, il ritmo non è la gabbia che limita l’improvvisazione: è il suolo su cui l’improvvisatore cammina, e la tensione nasce dal gioco tra il piano e il passo.",
    "Certi montatori cinematografici hanno un senso del ritmo talmente preciso da potersi sentire fisicamente: il taglio arriva esattamente quando il corpo se lo aspettava — o un battito prima, per sorpresa.",
  ],

  synonyms: [
    { term: "cadenza", register: "musicale-letterario", note: "Il ritmo nella sua scansione periodica; in musica, anche la formula conclusiva di una frase." },
    { term: "pulsazione", register: "tecnico", note: "Il battito regolare di base da cui il ritmo si sviluppa." },
  ],

  antonyms: [
    { term: "aritmia", register: "tecnico", note: "L’assenza o l’irregolarità patologica del ritmo — in medicina, nel cuore; in estetica, nella struttura." },
    { term: "caos", register: "comune", note: "L’assenza di qualunque pattern percepibile." },
  ],

  relatedWords: ["composizione", "armonia", "respiro", "dissonanza", "simmetria"],

  paroliereNote:
    "Il ritmo è universale in un senso non metaforico: ogni sistema biologico che funziona " +
    "ha ritmo, ogni sistema fisico che oscilla ha ritmo. La musica, la poesia, la danza " +
    "non inventano il ritmo — lo estraggono da ciò che il corpo già conosce e lo portano " +
    "alla coscienza. Per questo il ritmo si sente prima di essere capito.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "ritmo — significato in musica, poetica, biologia ed estetica",
    description: "Ritmo: dalla scansione musicale al battito cardiaco, dalla prosa alla danza. Il pattern che crea attesa, ordine e senso.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
