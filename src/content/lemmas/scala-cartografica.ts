// Il Paroliere — Lemma: scala cartografica
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const scalaCartografica: LemmaEntry = {
  lemma: "scala cartografica",
  slug: "scala-cartografica",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Rapporto fisso tra una distanza misurata sulla carta e la distanza corrispondente sul terreno. Si scrive come frazione, ed è la scala numerica, oppure si disegna come un segmento graduato, ed è la scala grafica: alla scala 1:25.000 un centimetro sulla carta corrisponde a 250 metri reali. Si dice a grande scala la carta che rappresenta un'area piccola con molti dettagli, come una pianta di città, e a piccola scala quella che rappresenta un'area vasta con pochi dettagli, come un planisfero.",
  shortDefinition: "Rapporto tra le distanze sulla carta e quelle sul terreno: alla scala 1:25.000 un centimetro vale 250 metri.",
  register: [
    "tecnico-scientifico",
  ],
  domains: [
    "cartografia",
    "topografia",
  ],
  etymology: "Scala viene dal latino scalae «gradini» e, nel senso di misura graduata, è passata alle carte con il segmento diviso in tacche che vi si disegnava; cartografico deriva da → cartografia, composto di carta e -grafia.",
  examples: [
    "Con una carta in scala 1:50.000, due centimetri di sentiero sono un chilometro di cammino.",
    "Per il piano regolatore servono carte a grande scala, dove compaiono anche i singoli edifici.",
    "Se ingrandisci la mappa sul telefono, la scala grafica in basso si aggiorna da sola.",
  ],
  synonyms: [
    {
      term: "scala",
      register: "comune",
      context: "forma abbreviata, la più usata quando il contesto è chiaro",
    },
    {
      term: "rapporto di scala",
      register: "tecnico-scientifico",
      context: "nel linguaggio tecnico e del disegno",
    },
  ],
  antonyms: [],
  relatedWords: [
    "cartografia",
    "topografia",
    "equidistanza",
    "isoipsa",
    "igm",
    "quota",
    "isobata",
    "geodesia",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/scala/",
    wiktionary: "https://it.wiktionary.org/wiki/scala",
  },
  paroliereNote: "La scala è il punto in cui la lingua comune e quella dei cartografi si contraddicono. Nel parlato «su grande scala» significa in grande, su un'area vasta; in cartografia una carta a grande scala mostra invece un territorio piccolo, perché la frazione 1:1.000 è più grande di 1:1.000.000. La regola pratica è semplice: più piccolo il numero sotto la linea, più grande la scala e più fitti i dettagli. Sulle carte topografiche la scala decide anche l'→ equidistanza tra le curve di livello (→ isoipsa).",
  seo: {
    title: "Scala cartografica — che cos'è, grande e piccola scala | Il Paroliere",
    description: "Che cos'è la scala cartografica: il rapporto tra distanze sulla carta e sul terreno. Scala numerica e grafica, grande e piccola scala, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
