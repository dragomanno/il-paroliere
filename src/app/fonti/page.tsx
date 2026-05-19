import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonti — Il Paroliere",
  description:
    "Politica sulle fonti di Il Paroliere: cosa viene collegato, cosa non viene " +
    "copiato, come vengono usate Wiktionary e le risorse aperte.",
};

type SourceEntry = {
  name: string;
  url: string;
  license: string;
  usage: string;
  note: string;
};

const fontiAperte: SourceEntry[] = [
  {
    name: "Wiktionary (italiano)",
    url: "https://it.wiktionary.org",
    license: "CC BY-SA 4.0",
    usage: "Collegato come fonte esterna; usato come riferimento per etimologie e forme.",
    note:
      "Il contenuto di Wiktionary è liberamente riutilizzabile con attribuzione. " +
      "Il Paroliere non copia testo da Wiktionary, ma può citarlo come fonte " +
      "e collegare le singole voci.",
  },
];

const fontiProprietarie: { name: string; url: string; policy: string }[] = [
  {
    name: "Treccani",
    url: "https://www.treccani.it",
    policy: "Collegato come riferimento esterno. Nessun testo riprodotto.",
  },
  {
    name: "De Mauro",
    url: "https://dizionario.internazionale.it",
    policy: "Collegato come riferimento esterno. Nessun testo riprodotto.",
  },
  {
    name: "Sabatini-Coletti",
    url: "https://dizionari.corriere.it",
    policy: "Collegato come riferimento esterno. Nessun testo riprodotto.",
  },
  {
    name: "Devoto-Oli",
    url: "https://www.mondadori.it",
    policy: "Collegato come riferimento esterno. Nessun testo riprodotto.",
  },
];

export default function FontiPage() {
  return (
    <article className="space-y-12">
      {/* Breadcrumb */}
      <nav
        className="text-xs text-[#b8b3a7]"
        aria-label="Navigazione"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Link href="/" className="hover:text-[#b8dc16] transition-colors">
          Il Paroliere
        </Link>
        <span className="mx-2 opacity-40">›</span>
        <span className="text-[#f7f3e8]">Fonti</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f7f3e8]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Fonti
        </h1>
        <p
          className="text-lg text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Come Il Paroliere si relaziona con le fonti esterne: cosa viene
          collegato, cosa non viene mai copiato, e perché.
        </p>
      </header>

      <hr className="border-[#2a2a2a]" />

      {/* Principio */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Il principio
        </h2>
        <div
          className="space-y-4 text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il Paroliere non è un aggregatore di definizioni altrui. Ogni voce è
            scritta da zero, con contenuto originale. Le fonti esterne vengono
            citate e collegate come riferimento: permettono al lettore di approfondire
            su dizionari autorevoli senza che Il Paroliere ne riproduca il testo.
          </p>
          <p>
            Questa scelta non è solo legale — è editoriale. Copiare definizioni
            altrui significherebbe costruire un dizionario di seconda mano. Il
            Paroliere vuole dire qualcosa di suo sulla lingua italiana.
          </p>
        </div>

        {/* Disclaimer box */}
        <div className="bg-[#181818] border border-[#2a2a2a] rounded-lg p-5">
          <p
            className="text-sm text-[#b8b3a7] leading-relaxed"
            style={{ fontFamily: "Lora, serif" }}
          >
            <strong className="text-[#f7f3e8]">Dichiarazione di originalità.</strong>{" "}
            Tutte le definizioni, gli esempi, le note etimologiche e le Note del
            Paroliere presenti su questo sito sono contenuto originale, scritto
            appositamente per Il Paroliere. Nessun testo è stato copiato, parafrasato
            o estratto da dizionari proprietari. I link a fonti esterne sono
            forniti a scopo informativo.
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Fonti proprietarie */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Dizionari autorevoli (link only)
        </h2>
        <p
          className="text-sm text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Le seguenti fonti sono collegate nelle schede lemma come riferimento
          per il lettore. <strong className="text-[#f7f3e8]">Nessun testo
          è riprodotto.</strong>
        </p>
        <div className="space-y-3">
          {fontiProprietarie.map((f) => (
            <div
              key={f.name}
              className="flex flex-col sm:flex-row sm:items-start gap-2 p-4
                         bg-[#181818] border border-[#2a2a2a] rounded-lg"
            >
              <div className="sm:w-44 shrink-0">
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#f7f3e8] hover:text-[#b8dc16] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {f.name}
                </a>
              </div>
              <p
                className="text-xs text-[#b8b3a7] leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {f.policy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Fonti aperte */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Risorse aperte
        </h2>
        <p
          className="text-sm text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Le seguenti risorse sono disponibili con licenze aperte e possono
          essere citate con attribuzione.
        </p>
        <div className="space-y-4">
          {fontiAperte.map((f) => (
            <div
              key={f.name}
              className="p-5 bg-[#181818] border border-[#2a2a2a] rounded-lg space-y-2"
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#f7f3e8] hover:text-[#b8dc16] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {f.name}
                </a>
                <span
                  className="text-xs px-2 py-0.5 bg-[#1a1a0a] text-[#b8dc16] border border-[#2a2a2a] rounded"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {f.license}
                </span>
              </div>
              <p
                className="text-xs text-[#b8b3a7] leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {f.usage}
              </p>
              <p
                className="text-xs text-[#b8b3a7]/70 leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {f.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Segnalazioni */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Segnalazioni
        </h2>
        <p
          className="text-sm text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Se ritieni che una voce di Il Paroliere violi inavvertitamente diritti
          di terzi, apri una segnalazione sul{" "}
          <a
            href="https://github.com/dragomanno/il-paroliere/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            repository GitHub
          </a>
          . Ogni segnalazione verrà valutata e gestita prontamente.
        </p>
      </section>
    </article>
  );
}
