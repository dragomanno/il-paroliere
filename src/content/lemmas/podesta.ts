// Il Paroliere — Lemma: podestà
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const podesta: LemmaEntry = {
  lemma: "podestà",
  slug: "podesta",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",

  definition:
    "Il termine podestà ha due vite storiche distinte, separate da sei secoli. Nel Medioevo " +
    "italiano (XII-XIV secolo), il podestà era il magistrato forestiero — scelto cioè fuori " +
    "dalla città per garantirne l'imparzialità — incaricato di governare un comune, " +
    "amministrare la giustizia e guidare l'esercito in tempo di guerra. Era una figura chiave " +
    "nell'ordinamento comunale italiano: la sua estraneità al tessuto locale era una garanzia " +
    "contro i conflitti di interesse tra le fazioni cittadine. Nel fascismo italiano (1926-1945), " +
    "il termine fu deliberatamente recuperato dal lessico medievale per designare la figura del " +
    "capo del governo comunale nominato dall'alto, senza elezione democratica. Con la legge del " +
    "4 febbraio 1926, il sindaco elettivo fu abolito e sostituito con il podestà, nominato con " +
    "decreto reale su proposta del Ministro dell'Interno. Il podestà fascista non era eletto dai " +
    "cittadini: era un funzionario del regime, spesso un militare o un gerarca locale, che " +
    "concentrava in sé tutte le funzioni prima spettanti al consiglio comunale. La scelta del " +
    "nome medievale non fu casuale: il fascismo era ossessionato dalla grandezza del passato " +
    "italiano e scelse sistematicamente termini storici — fascio (dai fasci littori romani), " +
    "duce (dux latino), podestà (dal diritto medievale) — per legittimare con la patina della " +
    "tradizione una struttura di potere nuova e antidemocratica.",

  shortDefinition:
    "Nel Medioevo, magistrato forestiero a capo del comune; nel fascismo (1926-1945), capo del " +
    "comune nominato dal regime in sostituzione del sindaco elettivo.",

  register: ["storico", "istituzionale"],
  domains: ["storia italiana", "diritto pubblico", "fascismo", "storia medievale"],

  etymology:
    "Dal latino medievale potestas («potere, autorità»), derivato di posse («potere»). " +
    "Il termine indica chi detiene il potere esecutivo.",

  examples: [
    "«Il podestà medievale di Firenze era scelto fuori dalla città per evitare che si alleasse con una delle fazioni in conflitto.»",
    "«Con la legge del 1926, Mussolini abolì i sindaci eletti e li sostituì con i podestà: fine del governo locale democratico in Italia.»",
    "«Il podestà fascista di Siena era responsabile non solo dell'amministrazione comunale ma anche dell'organizzazione del Palio, che il regime usò come strumento di propaganda nazionalista.»",
  ],

  synonyms: [
    {
      term: "sindaco",
      register: ["comune"],
      context: "nel senso funzionale moderno equivalente",
    },
    {
      term: "magistrato comunale",
      register: ["storico"],
      context: "in senso medievale",
    },
    {
      term: "commissario prefettizio",
      register: ["moderno"],
      context: "termine moderno per figure nominate dall'alto",
    },
  ],

  relatedWords: [
    "corporazioni",
    "fascismo",
    "Mussolini",
    "Medioevo",
    "comune medievale",
    "sindaco",
    "democrazia locale",
    "storia italiana",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/podesta/",
    wiktionary: "https://it.wiktionary.org/wiki/podest%C3%A0",
  },

  paroliereNote:
    "Il recupero del termine podestà da parte del fascismo è un caso da manuale di come il " +
    "potere usi il linguaggio storico per legittimarsi. Chiamare «podestà» il capo del comune " +
    "nominato dal regime evocava secoli di storia italiana, dava una patina di tradizione a " +
    "un'istituzione antidemocratica, e nascondeva la rottura con il governo locale elettivo " +
    "sotto la continuità del nome. È un meccanismo di cui vale la pena essere consapevoli, " +
    "perché si ripete: ogni regime che vuole legittimità cerca le sue radici nella storia.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Podestà — Medioevo e fascismo: due storie, una parola | Il Paroliere",
    description:
      "Podestà nel Medioevo e nel fascismo: come Mussolini usò un termine medievale per " +
      "abolire il sindaco elettivo. Storia, differenze, note critiche.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
