// Il Paroliere — Lemma: uvaggio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const uvaggio: LemmaEntry = {
  lemma: "uvaggio",
  slug: "uvaggio",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "La miscela di uve di vitigni diversi che vengono raccolte, diraspate e pigiate insieme " +
    "— o comunque unite prima o durante la fermentazione — per ottenere un vino con " +
    "caratteristiche organolettiche che nessun vitigno singolo potrebbe dare da solo. " +
    "L'uvaggio è dunque un'operazione che avviene a monte della fermentazione, nel vigneto o " +
    "al momento della raccolta/conferimento in cantina, e si distingue nettamente dal vinaggio, " +
    "che è invece la pratica di mescolare vini già prodotti separatamente a valle della " +
    "fermentazione. Questa distinzione non è solo tecnica: è anche legale. I disciplinari delle " +
    "denominazioni di origine (DOC, DOCG) specificano spesso quali vitigni possono o devono " +
    "essere presenti nell'uvaggio, e in quale percentuale. Il Chianti Classico DOCG, per " +
    "esempio, prevede un minimo del 80% di Sangiovese nell'uvaggio, con possibilità di " +
    "aggiungere altri vitigni locali approvati fino al 20%; il Barolo DOCG è invece monvitigno " +
    "obbligatorio (100% Nebbiolo), e quindi non ammette uvaggio di vitigni diversi. Nella " +
    "viticoltura tradizionale toscana, l'uvaggio era la norma storica: i vigneti misti (vigne " +
    "promiscue) contenevano più varietà piantate insieme, vendemmiavano insieme e fermentavano " +
    "insieme. Il passaggio alla viticoltura moderna, con la separazione per vitigno, ha reso " +
    "l'uvaggio una scelta consapevole anziché una pratica automatica.",

  shortDefinition:
    "La miscela di uve di vitigni diversi assemblata prima o durante la fermentazione; " +
    "si distingue dal vinaggio, che avviene invece dopo la produzione dei vini.",

  register: ["tecnico-enologico", "raro nel parlato comune"],
  domains: ["enologia", "viticoltura", "agronomia", "legislazione alimentare"],

  etymology:
    "Da uva (latino uva) + suffisso -aggio di matrice francese che indica un processo tecnico. " +
    "Stesso meccanismo di vinaggio, filtraggio, imbottigliaggio.",

  examples: [
    "Il Chianti Classico tradizionale nasce da un uvaggio a base Sangiovese con percentuali variabili di Canaiolo e, storicamente, Malvasia: quest'ultima è stata poi rimossa dai disciplinari moderni.",
    "La differenza tra uvaggio e vinaggio non è sottile: nel primo si mescolano le uve prima di fare il vino, nel secondo si mescolano i vini già fatti. Il risultato finale può sembrare simile, ma i processi fermentativi e i profili aromatici sono diversi.",
    "Nell'uvaggio del Bordeaux rosso classico, Cabernet Sauvignon, Merlot e Cabernet Franc vengono uniti prima della fermentazione: è una delle pratiche più antiche dell'enologia europea.",
  ],

  synonyms: [
    {
      term: "miscela di uve",
      register: "descrittivo",
      context: "denominazione descrittiva non tecnica",
    },
    {
      term: "blend di vitigni",
      register: "tecnico",
      context: "anglicismo di uso internazionale",
    },
    {
      term: "assemblaggio pre-fermentativo",
      register: "tecnico",
      context: "denominazione tecnica descrittiva",
    },
  ],

  antonyms: [
    {
      term: "monovitigno",
      register: "tecnico",
      context: "vino da un solo vitigno",
    },
    {
      term: "vino varietale",
      register: "tecnico",
      context: "prodotto da un solo vitigno senza blend",
    },
  ],

  relatedWords: [
    "vinaggio",
    "vitigno",
    "vino",
    "vendemmia",
    "fermentazione",
    "disciplinare",
    "DOC",
    "DOCG",
    "Sangiovese",
    "Nebbiolo",
    "Bordeaux",
    "vigne promiscue",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/uvaggio/",
    wiktionary: "https://it.wiktionary.org/wiki/uvaggio",
  },

  paroliereNote:
    "Uvaggio e vinaggio sono spesso confusi — persino da appassionati di vino — perché " +
    "entrambi descrivono una pratica di «mescolare». La distinzione temporale è però " +
    "fondamentale per capire cosa succede davvero nel bicchiere: nell'uvaggio, i vitigni " +
    "fermentano insieme, le loro componenti chimiche interagiscono durante il processo, i " +
    "tannini si fondono, le acidità si compensano mentre il vino si forma. Nel vinaggio, si " +
    "mescolano prodotti già formati, con caratteri già definiti. È la differenza tra cucinare " +
    "con ingredienti mescolati fin dall'inizio o impiattare piatti diversi sullo stesso piatto. " +
    "Entrambi danno risultati interessanti; sono cose diverse.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Uvaggio — definizione, differenza da vinaggio, enologia | Il Paroliere",
    description:
      "Cos'è l'uvaggio, come si distingue dal vinaggio, il ruolo nell'enologia italiana " +
      "e internazionale. Chianti, Bordeaux, monovitigno. Definizione tecnica originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
