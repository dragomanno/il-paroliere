// Il Paroliere — Lemma: Greenwich
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const greenwich: LemmaEntry = {
  lemma: "Greenwich",
  slug: "greenwich",
  partOfSpeech: "nome proprio (toponimo)",
  gender: "invariabile",
  definition: "1. Quartiere di Londra sulla riva sud del Tamigi, sede del Royal Observatory fondato nel 1675 da Carlo II per migliorare la navigazione e risolvere il problema della longitudine in mare. 2. In geografia e in astronomia, per antonomasia, il meridiano che passa per l'osservatorio, scelto nel 1884 dalla conferenza internazionale di Washington come meridiano fondamentale, da cui si contano le longitudini verso est e verso ovest. 3. Nelle espressioni ora di Greenwich e tempo medio di Greenwich, in inglese GMT, il tempo solare medio di quel meridiano, base storica dei fusi orari, oggi sostituito negli usi scientifici e civili dal tempo coordinato universale, UTC.",
  shortDefinition: "Quartiere di Londra con l'osservatorio da cui passa il meridiano zero, scelto nel 1884 come riferimento delle longitudini.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "geografia",
    "astronomia",
    "cartografia",
  ],
  etymology: "Dall'inglese antico Grēnewīc, composto di grēne «verde» e wīc «approdo, insediamento»: il porto, o il villaggio, verde. In inglese si pronuncia grènic, senza la w; in Italia si sente spesso grìnuic, lettura alla lettera.",
  examples: [
    "Nel cortile dell'osservatorio di Greenwich i turisti si fotografano con un piede per emisfero.",
    "Firenze si trova a circa 11 gradi a est di Greenwich.",
    "Il messaggio radio indicava l'orario in tempo di Greenwich, un'ora indietro rispetto all'Italia d'inverno.",
  ],
  synonyms: [
    {
      term: "meridiano fondamentale",
      register: "tecnico-scientifico",
      context: "il riferimento delle longitudini, indipendentemente dal luogo",
    },
    {
      term: "meridiano zero",
      register: "comune",
      context: "formula divulgativa",
    },
  ],
  antonyms: [],
  relatedWords: [
    "meridiano",
    "longitudine",
    "fuso-orario",
    "coordinate-geografiche",
    "gps",
    "equatore",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/greenwich/",
  },
  paroliereNote: "Greenwich è un toponimo diventato quasi un termine tecnico. La scelta del 1884 premiò una consuetudine più che un principio: circa due terzi delle navi del mondo usavano già carte riferite a quel meridiano. C'è poi una sorpresa per chi visita l'osservatorio: la linea d'ottone nel cortile segna il meridiano storico, ma quello usato oggi dai satelliti e dal → GPS passa circa cento metri più a est. Non si è spostata la linea, è cambiato il modo di misurare la Terra. Vedi → meridiano e → fuso orario.",
  seo: {
    title: "Greenwich — significato, meridiano zero e ora GMT | Il Paroliere",
    description: "Che cos'è Greenwich: il quartiere di Londra da cui passa il meridiano zero, scelto nel 1884. Ora di Greenwich, GMT e UTC, pronuncia ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
