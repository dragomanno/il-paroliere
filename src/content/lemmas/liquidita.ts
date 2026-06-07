// Il Paroliere — Lemma: liquidità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const liquidita: LemmaEntry = {
  lemma: "liquidità",
  slug: "liquidita",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Nel senso fisico, liquidità indica la proprietà di uno stato della materia intermedio " +
    "tra il solido e il gassoso: una sostanza liquida assume la forma del contenitore che la " +
    "ospita ma mantiene il proprio volume. In economia e finanza, liquidità indica la " +
    "disponibilità di denaro contante o di attività facilmente convertibili in denaro: " +
    "un'azienda con alta liquidità può far fronte ai suoi impegni a breve termine; un mercato " +
    "liquido è quello in cui è facile comprare e vendere senza spostare significativamente i " +
    "prezzi. La dimensione che interessa maggiormente la riflessione culturale è quella " +
    "filosofico-sociologica elaborata da Zygmunt Bauman (1925–2017). Bauman usa la metafora " +
    "del liquido per descrivere la condizione della modernità contemporanea in opposizione " +
    "alla modernità solida del XIX e primo XX secolo. La modernità solida era l'epoca delle " +
    "istituzioni stabili — lo Stato-nazione, la famiglia nucleare, il posto di lavoro fisso, " +
    "i partiti politici strutturati, le ideologie coerenti. La modernità liquida — il nostro " +
    "presente — è l'epoca in cui quelle strutture solide si sono sciolte senza essere " +
    "sostituite da nuove strutture equivalenti. Le identità non sono più fisse ma multiple e " +
    "fluide; le relazioni sono più fragili e contingenti; il lavoro è flessibile fino alla " +
    "precarietà; i legami comunitari si allentano; le ideologie si frammentano. Il risultato " +
    "non è la libertà pura: è l'ansia dell'individuo che deve costruirsi da solo, in tempo " +
    "reale, senza mappe stabili.",

  shortDefinition:
    "In fisica, stato intermedio tra solido e gassoso; in economia, disponibilità di denaro; " +
    "in sociologia (Bauman), metafora della modernità contemporanea come condizione fluida, " +
    "instabile e priva di strutture solide di riferimento.",

  register: [
    "comune (senso fisico)",
    "tecnico-filosofico (senso sociologico)",
    "tecnico-finanziario (senso economico)",
  ],
  domains: ["filosofia", "sociologia", "economia", "linguistica", "fisica"],

  etymology:
    "Dal latino liquidus («fluido, chiaro, trasparente»), da liquere («essere fluido, essere " +
    "chiaro»). Lo stesso campo di liquore, liquame, deliquio.",

  examples: [
    "«Bauman descriveva la modernità liquida come la condizione di chi è costretto a costruire la propria identità ogni giorno, senza le certezze solide che le generazioni precedenti avevano — nel bene e nel male.»",
    "«L'amore liquido di Bauman non è l'amore romantico: è la relazione che si vuole intensa ma non vincolante, connessa ma non dipendente, presente ma facilmente revocabile.»",
    "«La liquidità finanziaria di un'azienda misura la sua capacità di sopravvivere nel breve termine: un'azienda profittevole ma illiquida può fallire.»",
  ],

  synonyms: [
    {
      term: "fluidità",
      register: "comune",
      context: "in senso bauminiano",
    },
    {
      term: "instabilità",
      register: "comune",
      context: "in senso bauminiano",
    },
    {
      term: "disponibilità di cassa",
      register: "finanziario",
      context: "in senso economico",
    },
  ],

  antonyms: [
    {
      term: "solidità",
      register: "comune",
      context: "in senso bauminiano: la modernità delle istituzioni stabili",
    },
    {
      term: "illiquidità",
      register: "finanziario",
      context: "in senso economico",
    },
  ],

  relatedWords: [
    "epistemologia",
    "precursore",
    "Bauman",
    "modernità",
    "postmodernità",
    "identità",
    "flessibilità",
    "precarietà",
    "globalizzazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/liquidita/",
    wiktionary: "https://it.wiktionary.org/wiki/liquidit%C3%A0",
  },

  paroliereNote:
    "Bauman è uno di quei rari pensatori che è riuscito a fare filosofia seria con metafore " +
    "accessibili. Liquido era già una parola che tutti capivano; applicarla alla modernità ha " +
    "permesso a milioni di lettori di riconoscersi in una descrizione senza dover leggere " +
    "Heidegger o Derrida. Ma la metafora non è decorativa: è concettualmente precisa. " +
    "Un liquido non è né rigido né anarchico — prende la forma del contenitore, ma mantiene " +
    "il suo volume e le sue proprietà. La modernità liquida non è caos puro: è un sistema " +
    "fluido con le sue leggi, solo molto più difficile da abitare di uno solido.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Liquidità — Bauman, modernità liquida, sociologia | Il Paroliere",
    description:
      "Liquidità in Bauman: la modernità fluida senza strutture solide. Dal fisico al " +
      "filosofico al finanziario. Definizione con nota su amore liquido e paura liquida.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
