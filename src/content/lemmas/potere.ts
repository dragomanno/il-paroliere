// Il Paroliere — Lemma: POTERE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const potere: LemmaEntry = {
  lemma: "potere",
  slug: "potere",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition:
    "Capacità di influenzare il comportamento degli altri o il corso degli eventi, con o senza il loro consenso. " +
    "La teoria politica offre diverse concettualizzazioni: Max Weber definisce il potere (*Macht*) come " +
    "la probabilità di far valere la propria volontà in una relazione sociale, anche contro la resistenza " +
    "altrui; Hannah Arendt distingue il potere (capacità collettiva di agire in concerto) dalla violenza " +
    "(strumento coercitivo che distrugge il potere); Michel Foucault analizza il potere come rete di " +
    "relazioni diffuse che attraversa ogni struttura sociale, non concentrato in un solo vertice. " +
    "In diritto, il potere è attribuito da norme: potere legislativo, esecutivo, giudiziario.",
  shortDefinition: "Capacità di influenzare o determinare il comportamento altrui; analizzato da Weber, Arendt e Foucault in modi distinti.",
  register: ["formale", "filosofico", "tecnico-giuridico"],
  domains: ["filosofia politica", "sociologia", "diritto"],
  etymology:
    "Dal latino *potere* (verbo, 'essere capace, avere facoltà'), nominalizzato in italiano. " +
    "Il sostantivo si attesta in italiano medievale con il significato di 'facoltà, autorità'.",
  examples: [
    "Weber distingue tre forme di legittimazione del potere: il carisma personale, la tradizione e la razionalità legale-burocratica.",
    "Foucault mostra come il potere non sia solo repressione dall'alto ma anche produzione di saperi, norme e soggettività.",
    "La Costituzione italiana distribuisce il potere tra organi diversi per evitare la sua concentrazione in una sola mano.",
  ],
  synonyms: [
    { term: "autorità", register: "formale", context: "potere legittimato e riconosciuto" },
    { term: "dominio", register: "formale", context: "esercizio del potere su persone o territori" },
    { term: "supremazia", register: "formale", context: "posizione di superiorità gerarchica" },
    { term: "controllo", register: "standard", context: "capacità di regolare o limitare l'azione altrui" },
  ],
  antonyms: [
    { term: "impotenza", register: "standard", context: "incapacità di influenzare gli eventi o gli altri" },
    { term: "sudditanza", register: "formale", context: "posizione di chi è soggetto al potere altrui" },
    { term: "resistenza", register: "politico", context: "opposizione attiva all'esercizio del potere" },
  ],
  relatedWords: ["autorita", "norma", "diritto", "violenza", "consenso", "liberalismo", "coalizione", "conflitto", "epidemia", "pandemia", "trasformismo"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/potere/",
    wiktionary: "https://it.wiktionary.org/wiki/potere",
  },
  paroliereNote:
    "La polisemia è vasta: *potere* può essere verbo modale ('posso farlo') o sostantivo ('il potere politico'). " +
    "Come sostantivo, è fondamentale distinguere tra potere *come dominio* (imposto), potere *come risorsa* " +
    "(capacità) e potere *come relazione* (Foucault: non si ha il potere, si esercita in relazione). " +
    "Da non confondere con *autorità* (che implica legittimità) né con *autorevolezza* " +
    "(che è reputazione guadagnata sul campo).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "POTERE — definizione e uso | Il Paroliere",
    description: "Potere: capacità di influenzare il comportamento altrui. Weber, Arendt, Foucault: dominio, risorsa, relazione. Diritto e politica.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
