// Il Paroliere — Lemma: PROPRIETÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const proprieta: LemmaEntry = {
  lemma: "proprietà",
  slug: "proprieta",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Diritto reale che attribuisce al titolare il godimento e la disponibilità esclusiva di una cosa, " +
    "entro i limiti e con gli obblighi stabiliti dall'ordinamento. " +
    "L'art. 832 del codice civile italiano definisce il proprietario come colui che ha diritto di godere " +
    "e disporre delle cose in modo pieno ed esclusivo. L'art. 42 della Costituzione italiana precisa che " +
    "la proprietà è pubblica o privata, e che quella privata è riconosciuta e garantita dalla legge, " +
    "ma può essere limitata per ragioni sociali o espropriata per pubblica utilità con indennizzo. " +
    "In filosofia politica, la proprietà è al centro di dibattiti fondamentali: Locke la fonda sul lavoro " +
    "(chi lavora la terra ne acquista il diritto); Marx la critica come fonte di alienazione e sfruttamento; " +
    "Proudhon afferma provocatoriamente che 'la proprietà è un furto'.",
  shortDefinition: "Diritto reale di godimento esclusivo di una cosa; in Italia, art. 42 Cost. e art. 832 c.c.; dibattito filosofico da Locke a Marx.",
  register: ["tecnico-giuridico", "formale"],
  domains: ["diritto", "filosofia", "economia"],
  etymology:
    "Dal latino *proprietas*, derivato di *proprius* ('che appartiene a sé, particolare, esclusivo'). " +
    "In italiano medievale già nel senso di 'qualità peculiare' e 'diritto esclusivo su una cosa'.",
  examples: [
    "Il notaio redasse l'atto di compravendita con cui la proprietà dell'immobile veniva trasferita al nuovo acquirente.",
    "L'art. 42 della Costituzione italiana garantisce la proprietà privata ma prevede che possa essere espropriata per pubblica utilità.",
    "Nella tradizione lockiana, la proprietà nasce dal lavoro: è legittima perché chi la crea vi ha mescolato la propria fatica.",
  ],
  synonyms: [
    { term: "possesso", register: "tecnico-giuridico", context: "detenzione materiale di una cosa, che può coincidere o meno con la proprietà" },
    { term: "dominio", register: "tecnico-giuridico", context: "signoria piena su una cosa, sinonimo dotto di proprietà" },
    { term: "titolarità", register: "tecnico-giuridico", context: "condizione di chi è titolare di un diritto su un bene" },
  ],
  antonyms: [
    { term: "espropriazione", register: "tecnico-giuridico", context: "trasferimento coattivo della proprietà per pubblica utilità" },
    { term: "comproprietà", register: "tecnico-giuridico", context: "proprietà condivisa tra più soggetti" },
  ],
  relatedWords: ["diritto", "norma", "contratto", "cessione", "liberismo"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/proprieta/",
    wiktionary: "https://it.wiktionary.org/wiki/propriet%C3%A0",
  },
  paroliereNote:
    "Attenzione alla polisemia: *proprietà* indica sia il diritto giuridico (proprietà immobiliare) " +
    "sia una qualità intrinseca di una cosa o un concetto (proprietà del linguaggio, proprietà chimica). " +
    "In questa scheda si tratta solo dell'accezione giuridica ed economico-filosofica. " +
    "La distinzione tra *possesso* e *proprietà* è tecnica ma rilevante: il possessore detiene " +
    "materialmente la cosa; il proprietario ne è il titolare giuridico — i due ruoli possono separarsi " +
    "(es. locatario che possiede l'appartamento ma non ne è proprietario).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "PROPRIETÀ — definizione e uso | Il Paroliere",
    description: "Proprietà: diritto reale di godimento esclusivo (art. 832 c.c., art. 42 Cost.). Locke, Marx, Proudhon; distinzione da possesso.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
