// Il Paroliere — Lemma: rimozione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rimozione: LemmaEntry = {
  lemma: "rimozione",
  slug: "rimozione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico"],
  domains: ["psicologia", "psicoanalisi", "diritto", "cultura"],

  definition:
    "Nel linguaggio psicoanalitico, operazione mentale per cui desideri, ricordi o rappresentazioni giudicati inaccettabili vengono tenuti fuori dalla coscienza, pur continuando a esercitare effetti indiretti su emozioni e comportamenti. In senso più ampio, la rimozione indica il gesto, individuale o collettivo, di allontanare dalla vista e dal discorso qualcosa di scomodo — un fatto, una colpa, una ferita — come se, non nominandolo più, smettesse di esistere. Nel diritto, il termine conserva un uso tecnico diverso, legato alla rimozione di ostacoli, cariche o beni, ma nel parlato contemporaneo prevale spesso il colore psicologico e simbolico.",

  shortDefinition:
    "Operazione con cui la mente tiene lontani dalla coscienza contenuti dolorosi o inaccettabili, e per estensione gesto di togliere dalla vista ciò che non si vuole affrontare.",

  etymology:
    "Dal latino remotio, -onis, “allontanamento, spostamento”, derivato di removēre “rimuovere, portare via”, da re- “indietro, via” e movēre “muovere”. Il passaggio al significato psichico avviene con la tradizione psicoanalitica novecentesca, che interpreta l'allontanamento non più solo come fisico, ma come spostamento dal campo della coscienza.",

  examples: [
    "Nella sua storia familiare c'è una rimozione quasi totale della violenza subita dalla nonna.",
    "La rimozione del ricordo non significa che il corpo dimentichi, però lascia che il disagio riemerga in altre forme.",
    "Molte città praticano una rimozione urbanistica del passato industriale, sostituendolo con vetrine e turismo dolce.",
    "In analisi, la rimozione non è un difetto di memoria, ma un modo in cui la psiche prova a proteggersi.",
    "La rimozione degli ostacoli burocratici è rimasta più nei programmi elettorali che nelle pratiche concrete.",
  ],

  synonyms: [
    {
      term: "dimenticanza difensiva",
      register: "saggistico",
      note: "Evidenzia la funzione di protezione, distinta dalla svista.",
    },
    {
      term: "rimozione psichica",
      register: "tecnico",
      note: "Specifica l'uso psicoanalitico rispetto a quello giuridico o materiale.",
    },
  ],

  antonyms: [
    {
      term: "elaborazione",
      register: "psicologico",
      note: "Processo di affrontare e integrare un contenuto doloroso, invece di allontanarlo.",
    },
    {
      term: "riconoscimento",
      register: "comune",
      note: "Atto di portare alla coscienza e nominare ciò che era stato tenuto fuori campo.",
    },
  ],

  relatedWords: ["oblio", "memoria", "trauma", "inconscio"],

  sourceLinks: {},

  paroliereNote:
    "La rimozione permette di sopravvivere a ciò che, se restasse in piena luce, schiaccerebbe; ma, se dura troppo, rende la vita un salotto ordinato dietro cui si accumulano stanze chiuse. Nel discorso pubblico, parliamo di rimozione quando una società evita di guardare certi capitoli della propria storia, preferendo racconti più rassicuranti. Il lemma invita a non demonizzare la rimozione come pura “negazione”, ma a riconoscerla come fase, da accompagnare prima o poi con gesti di ritorno alla coscienza, personali o collettivi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "rimozione — ciò che la mente allontana",
    description:
      "Che cos'è la rimozione tra psicoanalisi, memoria e spazio pubblico, dall'allontanare contenuti dolorosi al rischio di stanze chiuse nella storia collettiva.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
