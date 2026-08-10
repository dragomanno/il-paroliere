// Il Paroliere — Lemma: nostalgia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const nostalgia: LemmaEntry = {
  lemma: "nostalgia",
  slug: "nostalgia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "letterario"],
  domains: ["psicologia", "filosofia", "letteratura", "linguistica"],

  definition:
    "Sentimento di dolorosa mancanza rivolto a un luogo, un tempo o una " +
    "condizione passata percepiti come irrecuperabili, spesso accompagnato " +
    "dall'idealizzazione di ciò che si rimpiange. Non coincide semplicemente " +
    "con il ricordo: la nostalgia aggiunge al ricordo una componente affettiva " +
    "di struggimento, la consapevolezza che quel tempo o quel luogo non sono " +
    "più raggiungibili se non con l'immaginazione. Può rivolgersi a un luogo " +
    "fisico (la propria terra d'origine, la nostalgia in senso originario), a " +
    "un periodo storico mai vissuto direttamente (la nostalgia per un'epoca " +
    "idealizzata), o alla propria infanzia — in questo caso rivolta non a un " +
    "luogo ma a una condizione interiore irripetibile.",

  shortDefinition:
    "Dolorosa mancanza per un luogo, un tempo o una condizione passata, " +
    "percepiti come irrecuperabili e spesso idealizzati.",

  etymology:
    "Coniato in latino moderno nel 1688 dal medico svizzero Johannes Hofer " +
    "nella sua dissertazione universitaria a Basilea, componendo il greco " +
    "*nóstos* («ritorno, viaggio di ritorno», la stessa radice del *nóstos* di " +
    "Ulisse nell'Odissea) e *álgos* («dolore, sofferenza»). Hofer intendeva " +
    "descrivere clinicamente il 'mal di casa' patologico osservato nei " +
    "mercenari svizzeri lontani dalla loro terra — una vera e propria diagnosi " +
    "medica, non ancora la nozione più ampia e sfumata che il termine ha oggi. " +
    "Solo nell'Ottocento il significato si allarga dal rimpianto per un luogo " +
    "al rimpianto per un tempo, uso oggi predominante.",

  examples: [
    "La nostalgia per l'infanzia non è mai nostalgia per fatti precisi, ma " +
      "per una qualità di attenzione al mondo che da adulti si fatica a ritrovare.",
    "Tornò nella città dove era cresciuto aspettandosi la nostalgia, e provò " +
      "invece un vago disagio: il luogo reale non coincideva più con quello " +
      "custodito nella memoria.",
    "C'è una nostalgia più insidiosa di quella per un luogo: la nostalgia per " +
      "un futuro che si era immaginato e che poi, semplicemente, non è arrivato.",
    "A differenza della → reminiscenza, che è un atto cognitivo neutro di " +
      "recupero del ricordo, la nostalgia porta sempre con sé un giudizio " +
      "affettivo — la sensazione che quel passato fosse, in qualche misura, migliore.",
  ],

  synonyms: [
    {
      term: "rimpianto",
      register: "comune",
      context: "più centrato sul dispiacere per una scelta o un'occasione perduta che sul semplice trascorrere del tempo",
    },
    {
      term: "malinconia",
      register: "letterario",
      context: "stato d'animo più generale e diffuso, non necessariamente rivolto a un oggetto specifico del passato",
    },
    {
      term: "struggimento",
      register: "letterario",
      context: "intensità emotiva più marcata, quasi fisica, della nostalgia",
    },
  ],

  antonyms: [
    {
      term: "spensieratezza",
      register: "comune",
      context: "vivere il presente senza il peso comparativo di un passato rimpianto",
    },
  ],

  relatedWords: [
    "nostalgico",
    "reminiscenza",
    "malinconia",
    "rimpianto",
    "nóstos",
    "memoria",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/nostalgia/",
    wiktionary: "https://it.wiktionary.org/wiki/nostalgia",
  },

  paroliereNote:
    "Vale la pena ricordare che la nostalgia nasce come diagnosi medica, non " +
    "come categoria letteraria: Johannes Hofer la descriveva con gli stessi " +
    "strumenti clinici con cui si sarebbe descritta una febbre, sintomi " +
    "compresi (inappetenza, insonnia, palpitazioni). Che un'emozione così " +
    "universale sia stata per secoli trattata come patologia curabile — si " +
    "prescrivevano perfino sanguisughe — dice qualcosa sul modo in cui ogni " +
    "epoca medicalizza o normalizza le proprie sofferenze affettive a seconda " +
    "degli strumenti concettuali disponibili. Oggi la nostalgia ha perso quasi " +
    "del tutto la connotazione patologica ed è anzi studiata dalla psicologia " +
    "contemporanea anche come risorsa: rievocare ricordi positivi, pure " +
    "malinconici, aiuta a costruire senso di continuità e identità personale " +
    "nei momenti di transizione. Resta comunque un lemma da maneggiare con " +
    "cura editoriale: la nostalgia idealizza per definizione, e la sua " +
    "→ sedimentazione nella memoria collettiva è spesso il meccanismo dietro " +
    "il mito del 'si stava meglio quando si stava peggio'.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Nostalgia — origine greca, storia clinica e significato | Il Paroliere",
    description:
      "Che cos'è la nostalgia: etimologia da nóstos e álgos, origine come " +
      "diagnosi medica del 1688, differenza da rimpianto e malinconia, con esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
