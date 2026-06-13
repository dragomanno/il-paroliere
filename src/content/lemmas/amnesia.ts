// Il Paroliere — Lemma: amnesia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const amnesia: LemmaEntry = {
  lemma: "amnesia",
  slug: "amnesia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Disturbo della memoria caratterizzato dall'incapacità parziale o totale di ricordare" +
    " eventi, informazioni o periodi di vita che prima erano accessibili, dovuto a cause" +
    " organiche, psicologiche o traumatiche. In neurologia il termine copre forme diverse," +
    " come l'amnesia anterograda, in cui non si fissano nuovi ricordi, e l'amnesia" +
    " retrograda, in cui si perde in tutto o in parte il passato; in psicologia clinica può" +
    " indicare anche assenze selettive legate a traumi, in cui la mente sembra chiudere una" +
    " stanza per proteggere chi la abita. Nell'uso comune, la parola è scivolata talvolta" +
    " in iperbole ironica, quando si finge di non ricordare ciò che è solo scomodo.",

  shortDefinition:
    "Perdita parziale o totale della memoria per certi eventi o periodi, dovuta a cause" +
    " neurologiche, traumatiche o psicologiche.",

  register: ["tecnico", "comune"],
  domains: ["neurologia", "psicologia", "psichiatria", "diritto", "cultura"],

  etymology:
    "Dal greco amnēsía, \"dimenticanza, perdita di memoria\", composto da a- privativo e" +
    " mnḗmē \"memoria, ricordo\", della stessa famiglia di mnēmoneúein \"ricordare\". Entrato" +
    " nelle lingue scientifiche europee attraverso il lessico medico ottocentesco, in" +
    " italiano ha mantenuto il valore tecnico, ma ha guadagnato nel parlato un uso" +
    " iperbolico e metaforico.",

  examples: [
    "Dopo il trauma cranico, il paziente presenta un'amnesia anterograda: ricorda il passato, ma non riesce a fissare i fatti del giorno prima.",
    "L'amnesia legata alle violenze subite non è finzione, ma il modo in cui la mente ha provato a sopravvivere.",
    "In aula, l'amnesia improvvisa di alcuni testimoni ha sollevato più di un sospetto.",
    "Sui crimini del passato il paese ha coltivato una comoda amnesia collettiva, fatta di programmi leggeri e anniversari dimenticati.",
    "Ogni volta che c'è da assumersi responsabilità, molti politici sembrano colpiti da un'amnesia selettiva.",
  ],

  synonyms: [
    {
      term: "perdita-di-memoria",
      register: "comune",
      note: "Più descrittiva e meno tecnica, spesso usata al posto del termine medico.",
    },
    {
      term: "smarrimento-del-ricordo",
      register: "saggistico",
      note: "Enfatizza la dimensione di spaesamento più che la classificazione clinica.",
    },
  ],

  antonyms: [
    {
      term: "ricordo-intatto",
      register: "comune",
      note: "Mette l'accento sulla conservazione piena della memoria.",
    },
    {
      term: "memoria-lucida",
      register: "comune",
      note: "Sottolinea la chiarezza del ricordo, anche in condizioni difficili.",
    },
  ],

  relatedWords: [
    {
      term: "memoria",
      relation: "Funzione colpita dall'amnesia.",
    },
    {
      term: "oblio",
      relation: "Esito di perdita del ricordo, ma non sempre patologico.",
    },
    {
      term: "trauma",
      relation: "Causa frequente di amnesie selettive.",
    },
    {
      term: "dissociazione",
      relation: "Meccanismo psicologico che può manifestarsi anche come vuoto di memoria.",
    },
  ],

  sourceLinks: {},

  paroliereNote:
    "L'amnesia occupa uno spazio particolare tra biologia e racconto: da un lato è un" +
    " fenomeno osservabile, con lesioni, farmaci, crisi; dall'altro è diventata una figura" +
    " narrativa potentissima, dai gialli alle serie tv. Nella vita reale, però, il vuoto di" +
    " memoria è meno spettacolare e più scomodo: apre domande su quanto possiamo fidarci" +
    " dei nostri ricordi, su come si ricostruisce una biografia quando alcuni capitoli" +
    " spariscono, su chi decide se un'amnesia è \"vera\". Il lemma ricorda che non tutto ciò" +
    " che dimentichiamo è sotto il nostro controllo e che il confine tra protezione e" +
    " rimozione è meno netto di quanto sembri.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "amnesia — perdita di memoria e traumi",
    description:
      "Che cos'è l'amnesia tra perdita di memoria neurologica, traumi psicologici e amnesia" +
    " collettiva usata come comoda rimozione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
