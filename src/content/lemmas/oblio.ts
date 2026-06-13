// Il Paroliere — Lemma: oblio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const oblio: LemmaEntry = {
  lemma: "oblio",
  slug: "oblio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "letterario", "filosofico"],
  domains: ["psicologia", "filosofia", "diritto", "letteratura", "cultura"],

  definition:
    "Stato di cancellazione o attenuazione del ricordo, in cui persone, fatti o parole smettono di essere presenti alla coscienza, per semplice sbiadire del tempo o per un allontanamento voluto. In psicologia indica sia il normale processo per cui la mente lascia andare informazioni non più rilevanti, sia forme più radicali di rimozione o perdita della memoria; in filosofia e nella cultura civile, l'oblio può essere un pericolo — quando nasconde colpe e traumi — oppure una tregua, quando permette di continuare a vivere dopo ciò che sarebbe insopportabile ricordare ogni giorno.",

  shortDefinition:
    "Perdita o spegnimento del ricordo, tra sbiadire naturale del tempo, rimozione e scelta di non ricordare più.",

  etymology:
    "Dal latino oblivium (più spesso oblivio, -onis), “dimenticanza, perdita di memoria”, formato probabilmente sul tema del verbo oblivisci “dimenticare”, con prefisso ob- che suggerisce allontanamento o cancellazione. In italiano l'uso letterario ha rafforzato il valore metaforico di caduta nel vuoto del ricordo, fino alle espressioni “cadere nell'oblio”, “condannare all'oblio”.",

  examples: [
    "Dopo la condanna, sperava che il suo nome scivolasse lentamente nell'oblio, lontano dai titoli dei giornali.",
    "Ci sono ferite che chiedono giustizia più che oblio, perché tacerle significa ripeterle.",
    "Con gli anni, molti dettagli sono finiti nell'oblio, ma la sensazione di quella mattina è rimasta nitida.",
    "Alcune dittature usano l'oblio programmato: cancellano documenti, riscrivono libri di testo, tolgono nomi dalle fotografie ufficiali.",
    "Nella sua terapia, l'oblio non era solo mancanza, ma un modo della mente per proteggerlo da ricordi ingestibili.",
  ],

  synonyms: [
    {
      term: "dimenticanza",
      register: "comune",
      note: "Più neutra, può indicare anche una semplice svista.",
    },
    {
      term: "smemoratezza",
      register: "comune",
      note: "Riguarda spesso la persona più che il singolo ricordo.",
    },
    {
      term: "oblio voluto",
      register: "saggistico",
      note: "Indica una scelta di non ricordare, individuale o collettiva.",
    },
  ],

  antonyms: [
    {
      term: "memoria",
      register: "comune",
      note: "Presenza e capacità di richiamo dei ricordi.",
    },
    {
      term: "ricordo vivo",
      register: "comune",
      note: "Mette l'accento sull'intensità e attualità del ricordo.",
    },
  ],

  relatedWords: ["memoria", "rimozione", "amnistia", "trauma"],

  sourceLinks: {},

  paroliereNote:
    "L'oblio non è solo una mancanza: è uno strumento che la mente e le società usano per sopravvivere al troppo. Una parte dei ricordi deve poter scolorire per fare spazio al nuovo, ma quando l'oblio riguarda violenze, ingiustizie o intere fette di storia, diventa sospetto. Le retoriche della “pacificazione” spesso lo evocano senza nominarlo, spingendo a dimenticare prima ancora di aver capito. Il lemma invita a distinguere tra l'oblio che protegge e quello che cancella troppo, e a chiedersi chi decide che cosa merita di essere dimenticato.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "oblio — tra dimenticanza e rimozione",
    description:
      "Che cosa significa oblio tra dimenticanza naturale, rimozione psicologica e scelta collettiva di non ricordare più.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
