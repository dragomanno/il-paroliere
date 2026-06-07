// Il Paroliere — Lemma: Resistenza (movimento storico)
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const resistenzaItaliana: LemmaEntry = {
  lemma: "Resistenza",
  slug: "resistenza-italiana",
  partOfSpeech: "sostantivo femminile proprio",
  gender: "femminile",

  definition:
    "La Resistenza italiana (1943–1945) fu il movimento organizzato di opposizione " +
    "armata e civile all'occupazione nazista e al regime della Repubblica Sociale " +
    "Italiana, sviluppatosi dopo l'armistizio dell'8 settembre 1943. Non fu soltanto " +
    "una guerra partigiana contro il giogo nazi-fascista: fu anche — e forse soprattutto " +
    "— un processo di rifondazione nazionale, la scelta consapevole di una parte del " +
    "paese di ricostruire dall'interno, sotto le bombe e sotto la minaccia, un'identità " +
    "collettiva fondata su valori diversi da quelli del ventennio. Accanto alla " +
    "Resistenza armata, esiste una pagina meno nota ma storicamente centrale: la " +
    "resistenza passiva degli IMI (Internati Militari Italiani), circa 650.000 soldati " +
    "italiani catturati dai tedeschi dopo l'8 settembre, ai quali fu offerta la scelta " +
    "di aderire alla RSI o subire i campi di lavoro forzato in Germania. La grande " +
    "maggioranza — tra il 90% e il 95% — scelse di non aderire, pagando con la " +
    "denutrizione, le malattie e la morte: si stima tra 40.000 e 50.000 caduti. " +
    "La Resistenza non fu un episodio; fu un atto fondativo.",

  shortDefinition:
    "Il movimento organizzato di opposizione armata e civile al nazifascismo in Italia " +
    "tra il 1943 e il 1945; atto fondativo della Repubblica italiana e processo di " +
    "rinnovamento morale e politico del paese.",

  register: ["storico", "formale", "comune"],
  domains: ["storia", "politica", "società", "diritto", "etica"],

  etymology:
    "Vedi → resistenza (voce comune). L'uso con maiuscola per designare il movimento " +
    "storico è attestato già nei documenti del CLN (Comitato di Liberazione Nazionale) " +
    "e si è consolidato nel dopoguerra come nome proprio del periodo.",

  examples: [
    "«Il 25 aprile è la Festa della Liberazione: ricorda la fine della Resistenza armata e l'inizio dell'Italia repubblicana.»",
    "«Mio nonno era stato partigiano sulle montagne della Val d'Ossola; non ne parlava mai, ma teneva una fotografia appesa alla parete.»",
    "«Gli IMI che rifiutarono di aderire alla RSI praticarono una forma di Resistenza passiva che non ha nulla da invidiare alla lotta armata.»",
    "«La Resistenza non fu solo una guerra: fu la prima discussione collettiva sull'Italia che voleva diventare.»",
  ],

  synonyms: [
    {
      term: "Resistenza partigiana",
      register: ["storico"],
      context: "con enfasi sulla componente armata",
    },
    {
      term: "Lotta di Liberazione",
      register: ["storico"],
      context: "denominazione formale del periodo",
    },
    {
      term: "movimento partigiano",
      register: ["comune"],
      context: "riferimento alle formazioni armate",
    },
    {
      term: "antifascismo militante",
      register: ["storico"],
      context: "con enfasi ideologica",
    },
  ],

  antonyms: [
    {
      term: "collaborazionismo",
      register: ["storico"],
      context: "cooperazione con l'occupante",
    },
    {
      term: "fascismo di Salò",
      register: ["storico"],
      context: "la Repubblica Sociale Italiana",
    },
    {
      term: "aderenza alla RSI",
      register: ["storico"],
      context: "scelta di allinearsi con il regime fantoccio",
    },
  ],

  relatedWords: [
    "resistenza",
    "CLN",
    "partigiani",
    "IMI",
    "8 settembre",
    "25 aprile",
    "Liberazione",
    "Repubblica italiana",
    "Costituzione",
    "antifascismo",
    "Fosse Ardeatine",
    "Marzabotto",
    "RSI",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/resistenza/",
    wiktionary: "https://it.wiktionary.org/wiki/resistenza",
  },

  paroliereNote:
    "La Resistenza è una parola che in Italia porta un peso che va oltre il suo " +
    "significato storico: è diventata parte dell'identità repubblicana, punto di " +
    "riferimento simbolico del discorso civile, talvolta battleground della memoria " +
    "pubblica. Non è una parola neutrale, né dovrebbe esserlo. Il Paroliere non prende " +
    "posizioni politiche contingenti, ma riconosce che alcune parole hanno una storia " +
    "morale oltre che lessicale — e questa è una di quelle. Vale la pena ricordare, in " +
    "particolare, la Resistenza Passiva degli IMI: spesso dimenticata perché non si " +
    "racconta facilmente, non produce eroi cinematografici, non ha battaglie. Eppure " +
    "il coraggio di dire «no» davanti a chi ha il potere di fartela pagare cara è, " +
    "nella sua semplicità, forse la forma di resistenza più difficile di tutte.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Resistenza — il movimento, i partigiani, gli IMI | Il Paroliere",
    description:
      "La Resistenza italiana: non solo liberazione dal nazifascismo, ma atto fondativo " +
      "della Repubblica. Con la storia dimenticata degli IMI che dissero no alla RSI.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
