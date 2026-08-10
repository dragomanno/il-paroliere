// Il Paroliere — Lemma: gaslighting
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const gaslighting: LemmaEntry = {
  lemma: "gaslighting",
  slug: "gaslighting",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "tecnico-psicologico", "anglicismo"],
  domains: ["psicologia", "relazioni", "sociologia"],

  definition:
    "Forma di → manipolazione psicologica sistematica in cui una persona induce " +
    "un'altra a dubitare della propria memoria, percezione o sanità mentale, " +
    "negando fatti accaduti, distorcendo eventi condivisi o etichettando come " +
    "eccessive o irrazionali le reazioni della vittima. A differenza di altre " +
    "forme di manipolazione più orientate a un vantaggio pratico immediato, il " +
    "gaslighting attacca specificamente la fiducia della vittima nella propria " +
    "capacità di giudizio, rendendola progressivamente più dipendente dalla " +
    "versione della realtà offerta dal manipolatore. Il pattern è stato descritto " +
    "per la prima volta in ambito clinico negli anni '60-'70 per indicare " +
    "dinamiche di coppia o familiari, ma il termine è oggi applicato anche a " +
    "contesti lavorativi, politici e mediatici, dove entità organizzate negano " +
    "sistematicamente fatti documentati per erodere la fiducia collettiva nella " +
    "realtà condivisa.",

  shortDefinition:
    "Manipolazione psicologica sistematica che induce la vittima a dubitare " +
    "della propria memoria o percezione, negando o distorcendo fatti condivisi.",

  etymology:
    "Dall'inglese gaslighting, participio presente sostantivato di to gaslight, " +
    "derivato dal titolo del dramma teatrale Gas Light (1938) di Patrick Hamilton " +
    "— reso celebre dal film Gaslight (1944, in italiano Angoscia) — in cui un " +
    "marito manipola la moglie facendole credere di essere pazza, tra l'altro " +
    "abbassando di nascosto l'intensità delle lampade a gas di casa e negando " +
    "poi che il cambiamento sia mai avvenuto. Il termine è entrato nell'uso " +
    "psicologico anglosassone negli anni '70 e in quello italiano corrente solo " +
    "nell'ultimo decennio, senza un vero equivalente nativo.",

  examples: [
    "\"Non ho mai detto una cosa del genere, te la sei inventata\" — la frase " +
      "tipica del gaslighting, pronunciata di fronte a un messaggio scritto che " +
      "diceva esattamente quello.",
    "Il gaslighting sul lavoro può essere sottile: negare riunioni avvenute, " +
      "cambiare gli obiettivi senza comunicarlo e poi rimproverare chi non li ha " +
      "raggiunti.",
    "Dopo mesi di gaslighting, non si fidava più del proprio giudizio nemmeno su " +
      "questioni banali — un effetto che la terapeuta le spiegò essere l'obiettivo, " +
      "non un danno collaterale, della dinamica subita.",
    "Distinguere il gaslighting da un semplice disaccordo di memoria richiede " +
      "osservare la sistematicità: chiunque può ricordare male un episodio, ma " +
      "solo il gaslighting nega ripetutamente e intenzionalmente una realtà " +
      "condivisa e documentabile.",
  ],

  synonyms: [
    {
      term: "manipolazione psicologica",
      register: "tecnico",
      context: "categoria più ampia di cui il gaslighting è una forma specifica, centrata sulla percezione della realtà",
    },
    {
      term: "svalutazione sistematica",
      register: "clinico",
      context: "termine più descrittivo usato talvolta in letteratura clinica per lo stesso fenomeno",
    },
  ],

  antonyms: [
    {
      term: "validazione",
      register: "tecnico-psicologico",
      context: "riconoscere come legittima la percezione o l'esperienza altrui — l'opposto diretto del gaslighting",
    },
    {
      term: "trasparenza",
      register: "comune",
      context: "condividere apertamente i fatti invece di negarli o distorcerli",
    },
  ],

  relatedWords: [
    "manipolazione",
    "gaslighter",
    "svalutazione",
    "vittimizzazione",
    "abuso psicologico",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/gaslighting",
  },

  paroliereNote:
    "L'assenza di un termine italiano nativo altrettanto preciso è essa stessa " +
    "informativa: 'far impazzire qualcuno' o 'far dubitare di sé' colgono " +
    "l'effetto ma non il metodo sistematico e intenzionale che il termine " +
    "inglese cattura con precisione clinica. È utile anche notare un uso " +
    "improprio molto diffuso: nel linguaggio comune 'gaslighting' viene talvolta " +
    "applicato a qualunque disaccordo o minimizzazione, svuotando il termine del " +
    "suo nucleo essenziale — la negazione ripetuta e intenzionale di una realtà " +
    "verificabile, finalizzata a erodere la fiducia della vittima nel proprio " +
    "giudizio. Un singolo 'non ricordo le cose così' non è gaslighting: lo " +
    "diventa quando si trasforma in pattern relazionale stabile.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Gaslighting — significato, origine ed esempi | Il Paroliere",
    description:
      "Che cos'è il gaslighting: definizione psicologica originale, origine dal " +
      "film Angoscia, esempi relazionali e lavorativi, differenza da un semplice disaccordo.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
