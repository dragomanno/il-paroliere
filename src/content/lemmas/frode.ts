// Il Paroliere — Lemma: FRODE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const frode: LemmaEntry = {
  lemma: "frode",
  slug: "frode",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Inganno deliberato e sistematico ai danni di una o più persone, " +
    "posto in essere allo scopo di procurare a sé o ad altri un vantaggio ingiusto — " +
    "tipicamente economico — o di causare un danno ingiusto alla vittima. " +
    "L'elemento costitutivo che distingue la frode da altre forme di illecito è il dolo specifico: " +
    "la volontà cosciente e intenzionale di ingannare, non la mera negligenza o imprudenza. " +
    "Nel diritto penale italiano le fattispecie più rilevanti sono: " +
    "la truffa (art. 640 c.p.), che richiede artifici o raggiri idonei a indurre in errore; " +
    "la frode fiscale (artt. 2-10 D.Lgs. 74/2000), che consiste nella dichiarazione fraudolenta " +
    "mediante uso di fatture false o altri espedienti; " +
    "la frode informatica (art. 640-ter c.p.), che si realizza alterando sistemi informatici " +
    "per procurarsi un profitto; " +
    "la frode in commercio (art. 515 c.p.), che punisce la consegna di beni diversi per qualità " +
    "o quantità da quelli pattuiti. " +
    "In ambito civilistico, la frode rileva come causa di annullamento del contratto " +
    "per dolo (art. 1439 c.c.) quando i raggiri sono stati determinanti del consenso.",
  shortDefinition:
    "Inganno deliberato con dolo specifico per ottenere un vantaggio illecito. Include frode fiscale, informatica e in commercio.",
  register: ["tecnico-giuridico", "standard"],
  domains: ["diritto penale", "economia"],
  etymology:
    "Dal latino fraus, fraudis («inganno, raggiro, danno»). " +
    "Stessa radice di fraudolento e defraudare. " +
    "In latino classico fraus indicava sia l'azione ingannevole sia il danno che ne derivava, " +
    "con una sovrapposizione semantica che si ritrova nell'uso italiano moderno.",
  examples: [
    "L'imprenditore è stato rinviato a giudizio per frode fiscale aggravata: " +
      "aveva utilizzato fatture false per operazioni inesistenti, abbattendo artificialmente " +
      "il reddito imponibile per oltre cinque anni.",
    "La frode informatica perpetrata attraverso finte email bancarie ha sottratto " +
      "ottantamila euro a una decina di correntisti prima che il sistema di allerta intervenisse.",
    "Il giudice ha annullato il contratto per dolo determinante: " +
      "la frode del venditore — che aveva nascosto i vizi strutturali dell'immobile — " +
      "era stata decisiva nella formazione del consenso dell'acquirente.",
  ],
  synonyms: [
    { term: "truffa", register: "standard", context: "fattispecie penale specifica (art. 640 c.p.)" },
    { term: "raggiro", register: "standard", context: "condotta ingannevole concreta" },
    { term: "inganno", register: "standard", context: "termine più generico" },
    { term: "dolo", register: "tecnico-giuridico", context: "elemento soggettivo dell'illecito" },
  ],
  antonyms: [
    { term: "lealtà", register: "standard", context: "correttezza nei rapporti interpersonali" },
    { term: "trasparenza", register: "standard", context: "assenza di occultamento" },
    { term: "buona fede", register: "tecnico-giuridico", context: "principio contrattuale opposto al dolo" },
  ],
  relatedWords: ["evasione", "contratto", "diritto", "norma", "reato", "illecito"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/frode",
    wiktionary: "https://it.wiktionary.org/wiki/frode",
  },
  paroliereNote:
    "La voce distingue il dolo specifico (volontà di ingannare, elemento soggettivo della frode) " +
    "dalla colpa (violazione non intenzionale di una regola di condotta). " +
    "Questa distinzione è fondamentale: lo stesso danno patrimoniale assume rilevanza penale " +
    "diversa a seconda che sia causato con dolo (frode, truffa) o per colpa (responsabilità civile). " +
    "In ambito fiscale, la frode si distingue dall'elusione fiscale: " +
    "la prima viola la legge, la seconda sfrutta le sue lacune.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "FRODE — definizione | Il Paroliere",
    description:
      "Definizione giuridica di frode: inganno doloso per ottenere vantaggi illeciti. " +
      "Frode fiscale, informatica, in commercio. Dolo specifico.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
