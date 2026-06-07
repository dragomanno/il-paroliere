// Il Paroliere — Lemma: CONSENSO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const consenso: LemmaEntry = {
  lemma: "consenso",
  slug: "consenso",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition:
    "Atto o stato di accordo tra due o più parti su una proposta, un'azione o una condizione. " +
    "In diritto, il consenso è elemento essenziale del contratto e presupposto della validità " +
    "di molti atti giuridici: si parla di consenso informato in ambito medico, quando il paziente " +
    "accetta liberamente un trattamento dopo averne compreso rischi e benefici, e di vizio del " +
    "consenso (errore, dolo, violenza) quando la volontà è alterata da fattori esterni. " +
    "In politica, il consenso democratico designa il grado di accordo che una decisione collettiva " +
    "o un governo riscuote nella popolazione. In psicologia, il consenso è studiato come atto " +
    "volontario che esprime autonomia e rispetto per l'altro.",
  shortDefinition: "Accordo libero tra parti; in diritto, elemento essenziale del contratto e atto medico informato.",
  register: ["formale", "tecnico-giuridico"],
  domains: ["diritto", "politica", "psicologia"],
  etymology:
    "Dal latino *consensus*, derivato di *consentire* (con- 'insieme' + *sentire* 'sentire, pensare'). " +
    "Attestato in italiano sin dal XIV secolo.",
  examples: [
    "Il medico è tenuto a ottenere il consenso informato del paziente prima di qualsiasi intervento chirurgico.",
    "La riforma costituzionale fu approvata con un larghissimo consenso parlamentare che superò ogni aspettativa.",
    "In psicologia sociale, il consenso sociale viene spesso usato come euristica per valutare la correttezza di un comportamento.",
  ],
  synonyms: [
    { term: "accordo", register: "standard", context: "convergenza di volontà tra parti" },
    { term: "assenso", register: "formale", context: "approvazione esplicita, spesso di una parte verso l'altra" },
    { term: "acquiescenza", register: "formale", context: "accettazione passiva, talvolta senza entusiasmo" },
  ],
  antonyms: [
    { term: "dissenso", register: "standard", context: "divergenza di opinione o volontà" },
    { term: "coercizione", register: "formale", context: "imposizione che annulla la libertà di scelta" },
    { term: "rifiuto", register: "standard", context: "diniego esplicito" },
  ],
  relatedWords: ["liberta", "autonomia", "diritto", "coercizione", "democrazia"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/consenso/",
    wiktionary: "https://it.wiktionary.org/wiki/consenso",
  },
  paroliereNote:
    "Attenzione alla distinzione tra *consenso* e *accordo*: il consenso implica sempre un atto di volontà " +
    "individuale, mentre l'accordo può essere il risultato di una negoziazione collettiva. " +
    "In diritto penale, il consenso dell'avente diritto può escludere l'antigiuridicità di un fatto (art. 50 c.p.). " +
    "Nel dibattito politico contemporaneo il termine è usato sia in senso positivo (consenso come legittimazione) " +
    "sia in senso critico (fabbricazione del consenso, nel senso di Chomsky e Herman).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "CONSENSO — definizione e uso | Il Paroliere",
    description: "Consenso: accordo libero tra parti. Accezione giuridica (consenso informato, vizio del consenso), politica e psicologica.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
