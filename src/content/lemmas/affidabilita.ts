// Il Paroliere — Lemma: AFFIDABILITÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const affidabilita: LemmaEntry = {
  lemma: "affidabilità",
  slug: "affidabilita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Qualità di una persona, di un'istituzione o di un contenuto che ispira fiducia " +
    "perché dimostra costanza nel comportamento, verificabilità delle informazioni fornite " +
    "e trasparenza nei propri processi e fonti. " +
    "L'affidabilità non è una dichiarazione di intenti, ma il risultato osservabile di condotte " +
    "replicabili nel tempo: chi è affidabile si comporta in modo prevedibile e onesto anche " +
    "quando non è sotto osservazione. " +
    "In etica, il concetto si intreccia con integrità e responsabilità; " +
    "in comunicazione, con coerenza del messaggio e chiarezza delle fonti. " +
    "Nel framework E-E-A-T di Google, Trustworthiness (affidabilità) è il quarto elemento " +
    "della gerarchia operativa approvata — Experience > Authoritativeness > Expertise > Trustworthiness — " +
    "ma paradossalmente è dichiarato da Google stesso come «il più importante» dei quattro: " +
    "riguarda la sicurezza delle transazioni (siti e-commerce con pagamenti sicuri), " +
    "l'accuratezza delle informazioni (in particolare nei settori YMYL: salute, finanza, legge), " +
    "la trasparenza sull'autore e sulle fonti, e l'assenza di intenzioni ingannevoli. " +
    "Un sito può essere competente e autorevole, ma se non è affidabile — " +
    "se nasconde chi lo gestisce, usa dark pattern o pubblica informazioni non verificabili — " +
    "il suo valore per l'utente si azzera.",
  shortDefinition:
    "Qualità di ciò che ispira fiducia perché costante, verificabile e trasparente. In E-E-A-T: Trustworthiness, il più importante.",
  register: ["standard", "formale", "tecnico-SEO"],
  domains: ["etica", "comunicazione", "SEO"],
  etymology:
    "Derivato di affidabile, a sua volta da affidare (composto di a- + fidare, dal latino fidare, " +
    "«aver fiducia», da fides, «fede, fiducia»). " +
    "Il suffisso -ità forma sostantivi astratti da aggettivi. " +
    "La stessa radice latina fides è all'origine di fidato, fido, fiducia, fedele, fideistico.",
  examples: [
    "L'affidabilità di un sito medico si misura dalla chiarezza sulla qualifica degli autori, " +
      "dalla datazione degli articoli e dalla citazione delle fonti primarie.",
    "Nella gerarchia E-E-A-T, l'affidabilità è il quarto elemento ma il più critico: " +
      "senza di essa, esperienza, competenza e autorevolezza non bastano a tutelare l'utente.",
    "Il brand ha costruito la propria affidabilità in vent'anni di coerenza: " +
      "stesso tono, stesse politiche di reso, stessa risposta tempestiva ai reclami.",
  ],
  synonyms: [
    { term: "credibilità", register: "standard", context: "enfasi sulla percezione esterna" },
    { term: "fiducia", register: "standard", context: "risultato dell'affidabilità percepita" },
    { term: "serietà", register: "standard", context: "accezione comportamentale e professionale" },
    { term: "attendibilità", register: "formale", context: "uso giornalistico e accademico" },
  ],
  antonyms: [
    { term: "inaffidabilità", register: "standard", context: "assenza della qualità descritta" },
    { term: "dubbio", register: "standard", context: "stato di incertezza sulla fonte" },
    { term: "disonestà", register: "standard", context: "violazione deliberata della fiducia" },
  ],
  relatedWords: ["e-e-a-t", "autorevolezza", "expertise", "esperienza", "fiducia", "trasparenza"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/affidabilit%C3%A0",
    treccani: "https://www.treccani.it/vocabolario/affidabilita",
  },
  paroliereNote:
    "Nel contesto SEO e delle Quality Rater Guidelines, Trustworthiness è definito da Google " +
    "come il pilastro fondante di E-E-A-T: una pagina può avere esperienza, competenza e autorevolezza, " +
    "ma se tradisce la fiducia dell'utente — con informazioni false, dark pattern, dati personali " +
    "gestiti in modo opaco — il suo punteggio di qualità crolla a prescindere dagli altri fattori. " +
    "Nella gerarchia operativa approvata da Pistakkio (Experience > Authoritativeness > Expertise > " +
    "Trustworthiness), l'affidabilità chiude la catena come verifica finale: " +
    "è il collaudo che certifica se tutto il percorso ha prodotto qualcosa di cui l'utente " +
    "può fidarsi davvero. Vedere la scheda hub → e-e-a-t.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "AFFIDABILITÀ — definizione | Il Paroliere",
    description:
      "Affidabilità: qualità di ciò che ispira fiducia perché costante e trasparente. " +
      "In E-E-A-T è Trustworthiness, il più importante dei quattro criteri Google.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
