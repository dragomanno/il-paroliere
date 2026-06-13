// Il Paroliere — Lemma: opportunismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const opportunismo: LemmaEntry = {
  lemma: "opportunismo",
  slug: "opportunismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "saggistico", "politico"],
  domains: ["etica", "politica", "psicologia sociale", "economia"],

  definition:
    "Atteggiamento di chi orienta le proprie scelte e posizioni non in base a principi " +
    "stabili ma in base a ciò che è vantaggioso nel momento, adattandosi alle " +
    "circostanze con flessibilità che rasenta — o attraversa — la mancanza di " +
    "coerenza. L’opportunismo non è necessariamente sinonimo di disonestà: in " +
    "economia e biologia evolutiva indica la capacità adattiva di sfruttare le risorse " +
    "disponibili. In etica e politica, invece, indica la subordinazione dei valori " +
    "all’interesse contingente.",

  shortDefinition:
    "Orientamento a scegliere in base al vantaggio immediato piuttosto che a principi " +
    "stabili; in etica e politica, subordinazione dei valori all’interesse contingente.",

  etymology:
    "Da «opportuno» (dal latino opportunus «che giunge al momento giusto», da ob " +
    "«verso» e portus «porto»), con il suffisso -ismo che indica sistema o disposizione. " +
    "L’opportunista è chi si orienta sempre verso il «porto» più conveniente del momento.",

  examples: [
    "In politica, l’opportunismo si manifesta quando un parlamentare vota sempre con la maggioranza, qualunque essa sia: il suo bussola è il potere, non il programma.",
    "C’è un opportunismo di sopravvivenza — fare ciò che serve per non essere distrutto dal sistema — che è diverso dall’opportunismo come stile di vita.",
    "In biologia, i microrganismi «opportunisti» sfruttano le debolezze del sistema immunitario: il termine tecnico è neutro, ma la metafora applicata alle persone non lo è mai.",
    "La differenza tra pragmatismo e opportunismo è sottile ma importante: il pragmatico adatta i mezzi ai fini, l’opportunista adatta anche i fini alle circostanze.",
  ],

  synonyms: [
    { term: "trasformismo", register: "politico-storico", note: "In politica italiana, la pratica di cambiare schieramento in base alla convenienza; storicamente legato a Depretis." },
    { term: "voltagabbana", register: "colloquiale", note: "Chi cambia posizione troppo frequentemente per essere creduto; enfasi sul cambiamento, non sull’interesse." },
  ],

  antonyms: [
    { term: "coerenza", register: "comune", note: "La fedeltà nel tempo alle proprie posizioni e ai propri valori." },
    { term: "principio", register: "etico", note: "Il criterio stabile di scelta che l’opportunismo non ha o non segue." },
  ],

  relatedWords: ["ipocrisia", "malafede", "doppiezza", "cinismo", "adulazione"],
  sourceLinks: {},

  paroliereNote:
    "L’opportunismo ha il problema di assomigliare alla saggezza: entrambi si adattano " +
    "alle circostanze. La differenza è che la saggezza sa cosa mantiene fermo mentre " +
    "si adatta, l’opportunismo no — o finge di non saperlo. In una cultura che celebra " +
    "la «flessibilità» come virtù assoluta, distinguere flessibilità da opportunismo " +
    "richiede una domanda scomoda: flessibile rispetto a cosa? Chi ha principi chiari " +
    "sa quando essere flessibili è adattamento e quando è resa.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "opportunismo — adattarsi alle circostanze tra pragmatismo e mancanza di principi",
    description: "Che cos’è l’opportunismo: definizione etica e politica, differenza da pragmatismo, e il problema di distinguere flessibilità da assenza di principi.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
