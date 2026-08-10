// Il Paroliere — Lemma: vestigio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vestigio: LemmaEntry = {
  lemma: "vestigio",
  slug: "vestigio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["letterario", "formale"],
  domains: ["storia", "linguistica", "letteratura", "archeologia"],

  definition:
    "Traccia materiale o immateriale che sopravvive di qualcosa ormai " +
    "scomparso — un edificio, una civiltà, un'abitudine, un sentimento — e " +
    "che permette di risalire, per indizio, a ciò che l'ha generata. In senso " +
    "concreto e più antico, il vestigio è l'orma lasciata dal piede sul " +
    "terreno; da qui il significato si è esteso a qualunque resto fisico " +
    "(vestigia di un tempio romano, vestigia di un'antica civiltà) e poi, " +
    "per ulteriore estensione figurata, a ciò che rimane di un'esperienza " +
    "interiore o di un processo non più in atto — un vestigio di orgoglio, " +
    "un vestigio di affetto. A differenza della semplice 'traccia', termine " +
    "più neutro e generico, il vestigio porta con sé una connotazione di " +
    "distanza temporale e spesso di malinconia: presuppone che ciò a cui " +
    "rimanda sia ormai irrimediabilmente passato.",

  shortDefinition:
    "Traccia materiale o immateriale che sopravvive di qualcosa ormai " +
    "scomparso, permettendo di risalire per indizio a ciò che l'ha generata.",

  etymology:
    "Dal latino *vestigium*, di origine etimologica incerta e non del tutto " +
    "chiarita dai filologi: alcuni lo collegano a un'ipotetica particella " +
    "intensiva *ve-* unita a una radice affine al greco *steíchō* («camminare, " +
    "avanzare»), altri lo considerano privo di parentele sicure al di fuori " +
    "del latino stesso. Certa è invece la parentela con il verbo latino " +
    "*vestigare* («seguire le tracce, investigare»), da cui deriva direttamente " +
    "l'italiano 'investigare' — un legame che rivela come, già in latino, " +
    "l'idea di 'traccia' fosse strettamente connessa a quella di ricerca e " +
    "ricostruzione a partire da indizi.",

  examples: [
    "Tra le vestigia della villa romana si potevano ancora distinguere i " +
      "resti del mosaico, sepolti sotto secoli di terra e vegetazione.",
    "Nel suo modo di parlare restava un vestigio del dialetto d'infanzia, " +
      "un'inflessione che riaffiorava solo quando era stanco o emozionato.",
    "Della loro amicizia era rimasto solo un vestigio: si scambiavano gli " +
      "auguri a Natale, senza più nulla della complicità di un tempo.",
    "Gli storici distinguono con cura il → vestigio, resto autentico di " +
      "un'epoca passata, dall'→ anacronismo, che invece mescola " +
      "impropriamente elementi di epoche diverse.",
  ],

  synonyms: [
    {
      term: "traccia",
      register: "comune",
      context: "termine più neutro e generico, senza la connotazione di distanza temporale del vestigio",
    },
    {
      term: "reperto",
      register: "tecnico-archeologico",
      context: "specifico per oggetti materiali ritrovati e catalogati, più preciso e meno letterario",
    },
    {
      term: "residuo",
      register: "formale",
      context: "enfatizza ciò che avanza dopo un processo di consumo o dissoluzione, meno legato al valore storico",
    },
  ],

  antonyms: [
    {
      term: "integrità",
      register: "formale",
      context: "condizione di ciò che è rimasto completo, senza che ne restino solo tracce parziali",
    },
    {
      term: "oblio totale",
      register: "letterario",
      context: "scomparsa completa, senza che sopravviva alcun indizio recuperabile",
    },
  ],

  relatedWords: [
    "traccia",
    "reperto",
    "rovina",
    "investigare",
    "anacronismo",
    "sedimentazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/vestigio/",
    wiktionary: "https://it.wiktionary.org/wiki/vestigio",
  },

  paroliereNote:
    "Il legame etimologico tra vestigium e vestigare — e quindi tra " +
    "'vestigio' e 'investigare' — è uno di quei casi in cui la storia della " +
    "lingua racconta implicitamente una teoria della conoscenza: per i " +
    "latini, indagare significava letteralmente seguire tracce, ricostruire " +
    "un percorso a partire da ciò che ne è rimasto visibile. È un'immagine " +
    "utile anche fuori dal contesto archeologico o linguistico: ogni volta " +
    "che si interpreta un vestigio — un modo di dire arcaico, una cicatrice, " +
    "un'abitudine che non si sa più spiegare — si sta facendo lo stesso " +
    "lavoro dell'investigatore etimologico, ricostruendo per indizio " +
    "un'origine che l'oggetto stesso non dichiara più apertamente. Il " +
    "→ vestigio si distingue anche dalla → nostalgia perché non richiede " +
    "necessariamente un vissuto diretto di chi lo osserva: si può riconoscere " +
    "il vestigio di una civiltà mai conosciuta, mentre la nostalgia presuppone " +
    "sempre un rapporto personale con ciò che si rimpiange.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Vestigio — significato, etimologia e uso letterario | Il Paroliere",
    description:
      "Che cos'è il vestigio: traccia di ciò che è scomparso, etimologia " +
      "latina incerta, legame con 'investigare', differenza da traccia e reperto.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
