// Il Paroliere — Lemma: glossolalia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const glossolalia: LemmaEntry = {
  lemma: "glossolalia",
  slug: "glossolalia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "letterario", "figurato"],
  domains: ["linguistica", "religione", "psicologia"],

  definition:
    "In senso proprio, fenomeno verbale che consiste nel produrre sequenze di suoni con struttura fonetica simile a un linguaggio, ma privi di un sistema grammaticale riconoscibile e di un significato condiviso e decodificabile da chi ascolta. Nel contesto religioso — dove il termine è attestato fin dal Nuovo Testamento, nell'episodio della Pentecoste — la glossolalia è vissuta da molte tradizioni cristiane pentecostali e carismatiche come 'dono delle lingue', un'esperienza spirituale di parlare in una lingua sconosciuta a chi parla. In psichiatria, la stessa produzione verbale incomprensibile può comparire come sintomo in alcuni disturbi mentali. Per estensione figurata, glossolalia indica oggi, nel linguaggio critico e giornalistico, qualunque discorso che ha la forma esteriore del linguaggio complesso e competente ma è di fatto vuoto di contenuto reale — un flusso verbale che suona autorevole senza dire nulla di verificabile.",

  shortDefinition:
    "Discorso dalla forma linguistica ma privo di grammatica e significato condiviso — dono spirituale in ambito religioso, sintomo in psichiatria, e per estensione discorso vuoto ma dall'apparenza colta.",

  etymology:
    "Dal greco *glôssa* «lingua» e *laléō* «parlare»: letteralmente «parlare in lingue» — l'espressione compare già nel testo greco degli Atti degli Apostoli per descrivere il fenomeno della Pentecoste.",

  examples: [
    "Nei culti pentecostali, la glossolalia durante la preghiera collettiva è considerata un segno tangibile della presenza dello Spirito Santo.",
    "Alcuni studi neurolinguistici hanno analizzato la glossolalia religiosa registrando l'attività cerebrale durante l'episodio, senza trovarvi una struttura linguistica reale.",
    "Certi discorsi aziendali, pieni di anglicismi e formule vuote come 'sinergie disruptive', sono stati definiti ironicamente una forma di glossolalia manageriale.",
    "In alcuni quadri psichiatrici, la glossolalia compare come sintomo di disorganizzazione del pensiero, distinta però dall'uso religioso volontario e consapevole.",
  ],

  synonyms: [
    { term: "xenoglossia", register: "tecnico", note: "Termine tecnicamente distinto: indica il parlare (presunto) in una lingua reale ma sconosciuta a chi parla, non in suoni privi di struttura grammaticale." },
  ],

  antonyms: [
    { term: "discorso articolato", register: "comune", note: "Comunicazione verbale dotata di struttura grammaticale riconoscibile e significato condiviso e decodificabile." },
  ],

  relatedWords: ["burocratese", "tautologia", "ridondanza"],

  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/glossolalia/",
    wiktionary: "https://it.wikipedia.org/wiki/Glossolalia",
  },

  paroliereNote:
    "Il tragitto semantico della glossolalia — da fenomeno religioso specifico a metafora critica di uso comune — è un ottimo esempio di come un termine tecnico possa arricchirsi di un secondo significato mantenendo intatto il primo. Chiamare 'glossolalia' un discorso aziendale o accademico pieno di paroloni e privo di contenuto verificabile non è un uso improprio: è un prestito concettuale preciso, che coglie esattamente il tratto comune tra i due fenomeni — la forma linguistica sofisticata che non veicola alcun significato reale decodificabile da chi ascolta.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "glossolalia — significato religioso, psichiatrico e figurato",
    description:
      "Che cos'è la glossolalia: dal dono delle lingue nel cristianesimo pentecostale al sintomo psichiatrico, fino all'uso figurato per il discorso vuoto.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
