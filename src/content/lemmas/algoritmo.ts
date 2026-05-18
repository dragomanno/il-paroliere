// Il Paroliere — Lemma: algoritmo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const algoritmo: LemmaEntry = {
  lemma: "algoritmo",
  slug: "algoritmo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Sequenza finita e ordinata di istruzioni che, a partire da un insieme definito " +
    "di dati in ingresso, produce un risultato determinato seguendo regole precise e " +
    "non ambigue. In informatica, gli algoritmi sono il fondamento di ogni programma: " +
    "dalla ricerca su un motore di navigazione alla compressione di un'immagine. " +
    "Nell'uso comune, il termine è entrato nel discorso quotidiano per indicare " +
    "qualsiasi meccanismo opaco che prende decisioni al posto nostro — dai feed dei " +
    "social network alle raccomandazioni delle piattaforme di streaming.",

  shortDefinition:
    "Sequenza ordinata di istruzioni per risolvere un problema in modo determinato.",

  register: ["tecnico", "comune"],
  domains: ["informatica", "matematica", "società", "intelligenza artificiale"],

  etymology:
    "Dal nome del matematico persiano Muhammad ibn Musa al-Khwarizmi (IX sec.), " +
    "latinizzato in Algoritmi. Il suo trattato sull'aritmetica decimale diffuse in " +
    "Europa il sistema posizionale arabo-indiano. La parola indicava originariamente " +
    "quel sistema di calcolo, poi si è generalizzata al concetto di procedura.",

  examples: [
    "L'algoritmo di raccomandazione non sa cosa vogliamo: impara a predire cosa ci " +
    "farà stare più a lungo davanti allo schermo.",
    "Un algoritmo di ordinamento deve essere corretto, efficiente e terminare in un " +
    "tempo ragionevole.",
    "Dire 'l'algoritmo ha deciso' è spesso un modo per nascondere che qualcuno ha " +
    "scelto di delegare quella decisione.",
    "Anche una ricetta di cucina è, in senso stretto, un algoritmo: passi ordinati, " +
    "ingredienti definiti, risultato atteso.",
  ],

  synonyms: [
    {
      term: "procedura",
      register: "tecnico",
      context: "in contesti di programmazione e analisi dei sistemi",
    },
    {
      term: "metodo",
      register: "comune",
      context: "con accezione più generica e meno formale",
    },
    {
      term: "ricetta",
      register: "colloquiale",
      context: "analogia divulgativa per spiegare il concetto a non specialisti",
      note: "uso metaforico, non tecnico",
    },
  ],

  antonyms: [
    {
      term: "euristica",
      register: "tecnico",
      context:
        "approccio che cerca soluzioni approssimate senza garanzia di ottimalità",
    },
    {
      term: "intuizione",
      register: "comune",
      context:
        "processo cognitivo non formalizzabile, opposto alla procedura deterministica",
    },
  ],

  relatedWords: [
    "codice",
    "programma",
    "funzione",
    "complessità computazionale",
    "dati",
    "modello",
    "intelligenza artificiale",
    "automazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/algoritmo/",
    wiktionary: "https://it.wiktionary.org/wiki/algoritmo",
  },

  paroliereNote:
    "Poche parole hanno vissuto una parabola semantica così rapida come 'algoritmo'. " +
    "In pochi decenni è passata da termine specialistico della matematica discreta " +
    "a parola del dibattito pubblico — usata spesso a sproposito, come scudo retorico " +
    "o come causa di ogni male digitale. Questa slittata semantica non è neutra: " +
    "delegare a 'l'algoritmo' una decisione è anche un modo per non doversene " +
    "assumere la responsabilità. Il Paroliere suggerisce di usarla con precisione.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Algoritmo — Il Paroliere",
    description:
      "Definizione originale di 'algoritmo': procedura finita e determinata per " +
      "risolvere un problema. Con etimologia, esempi d'uso, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-18",
  updatedAt: "2026-05-18",
};
