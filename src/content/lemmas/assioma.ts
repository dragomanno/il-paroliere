// Il Paroliere — Lemma: assioma
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const assioma: LemmaEntry = {
  lemma: "assioma",
  slug: "assioma",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "comune", "aulico"],
  domains: ["logica", "matematica", "epistemologia", "filosofia"],

  definition:
    "In logica e matematica, proposizione assunta come vera senza dimostrazione, perché considerata evidente di per sé o perché costituisce il punto di partenza indispensabile di un sistema deduttivo: gli assiomi, insieme ai concetti primitivi, formano il fondamento da cui si derivano per via logica tutti i teoremi di una teoria. A differenza del *postulato* — che in origine indicava un principio specifico di una particolare disciplina, come i postulati della geometria euclidea, accettato per la sua utilità pratica più che per un'evidenza assoluta — l'assioma era tradizionalmente inteso come verità comune a più scienze; nella logica matematica contemporanea la distinzione si è in gran parte dissolta, e i due termini vengono spesso usati come sinonimi per indicare le premesse non dimostrate di un sistema formale. Nell'uso corrente, per estensione, un assioma è un principio dato per scontato, indiscutibile all'interno di un certo modo di ragionare — anche fuori da ogni contesto matematico.",

  shortDefinition:
    "Proposizione assunta come vera senza dimostrazione, punto di partenza di un sistema deduttivo; nell'uso comune, principio dato per indiscutibile.",

  etymology:
    "Dal greco *axíōma*, “ciò che è ritenuto degno, dignità, pretesa”, derivato da *axioûn*, “ritenere degno”, a sua volta da *áxios*, “degno, di valore”. Il termine è già usato dai pitagorici per designare i principi delle scienze dimostrative, e Aristotele lo definisce nei *Secondi Analitici* come le “proposizioni immediate che occorre necessariamente conoscere per apprendere qualche cosa”. La distinzione greca classica tra assiomi (comuni a più scienze, evidenti *per sé*) e postulati (particolari a una disciplina, come la geometria) è stata in larga parte superata dalla matematica moderna, che tende a considerare i due termini equivalenti quando si riferiscono alle premesse non dimostrate di un sistema assiomatico.",

  examples: [
    "Gli assiomi di Euclide sulla geometria piana sono rimasti sostanzialmente incontestati per oltre duemila anni, finché le geometrie non euclidee non ne hanno mostrato l'natura di scelta, non di necessità.",
    "Non si può dimostrare un assioma all'interno del sistema che lo assume: si può solo scegliere di adottarne uno diverso, e costruire una teoria differente.",
    "Per lei era un assioma che il lavoro duro paghi sempre, e nessun controesempio riusciva a scalfire quella certezza.",
    "L'assioma della scelta, in teoria degli insiemi, ha conseguenze così controintuitive che generazioni di matematici hanno dibattuto se accettarlo o rifiutarlo.",
  ],

  synonyms: [
    { term: "postulato", register: "tecnico", note: "In matematica moderna quasi sinonimo, sebbene storicamente indicasse un principio specifico di una disciplina, non universale." },
    { term: "principio", register: "comune", note: "Più generico, non implica necessariamente l'indimostrabilità formale propria dell'assioma." },
    { term: "dogma", register: "critico", note: "Uso figurato e spesso polemico per un assioma imposto senza reale giustificazione, specie fuori dalla matematica." },
  ],

  antonyms: [
    { term: "teorema", register: "tecnico", note: "Proposizione derivata per dimostrazione dagli assiomi, non assunta direttamente." },
    { term: "ipotesi", register: "tecnico-comune", note: "Proposizione provvisoria, sottoposta a verifica, non ancora accettata come punto fermo." },
  ],

  relatedWords: ["sillogismo", "inferenza", "paradigma", "tautologia"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/assioma",
  },

  paroliereNote:
    "C'è un salto silenzioso ma enorme quando l'assioma esce dalla matematica ed entra nella conversazione quotidiana: in geometria un assioma è una scelta dichiarata, sostituibile con un'altra per ottenere un sistema diverso ma ugualmente coerente; nel discorso comune, invece, diventa spesso una premessa nascosta, mai messa in discussione perché non viene nemmeno riconosciuta come tale. Il vero esercizio critico non è accettare o rifiutare gli assiomi di qualcun altro, ma imparare a riconoscerli come assiomi — cioè come punti di partenza scelti, non come fatti di natura.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "assioma — significato, differenza da postulato ed esempi",
    description:
      "Che cos'è un assioma in logica e matematica, la differenza storica con il postulato, e il suo uso figurato come principio dato per indiscutibile.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
