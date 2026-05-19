import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonti — Il Paroliere",
  description:
    "Politica sulle fonti di Il Paroliere: cosa viene collegato, cosa non viene " +
    "copiato, come vengono usate Wiktionary e le risorse aperte.",
};

// Fonti collegate nelle singole schede lemma (URL permanenti per voce)
const fontiNelleSchede: { name: string; url: string; policy: string }[] = [
  {
    name: "Treccani",
    url: "https://www.treccani.it",
    policy: "Collegato nelle schede lemma dove disponibile. URL permanente per voce. Nessun testo riprodotto.",
  },
  {
    name: "Wiktionary (italiano)",
    url: "https://it.wiktionary.org",
    policy: "Collegato in tutte le schede lemma. Licenza CC BY-SA 4.0. Nessun testo riprodotto.",
  },
];

// Dizionari di riferimento editoriale (non collegati per singola voce)
const fontiRiferimento: { name: string; url: string; policy: string }[] = [
  {
    name: "De Mauro",
    url: "https://dizionario.internazionale.it",
    policy: "Fonte di riferimento editoriale. Non collegato per singola voce.",
  },
  {
    name: "Sabatini-Coletti",
    url: "https://dizionari.corriere.it",
    policy: "Fonte di riferimento editoriale. Non collegato per singola voce.",
  },
  {
    name: "Devoto-Oli",
    url: "https://www.mondadori.it",
    policy: "Fonte di riferimento editoriale. Non collegato per singola voce.",
  },
];

export default function FontiPage() {
  return (
    <article className="space-y-12">
      {/* Breadcrumb */}
      <nav
        className="text-sm text-[#b8b3a7]" 
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
          className="text-[1.0625rem] sm:text-[1.1875rem] text-[#b8b3a7] leading-relaxed"
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
          className="space-y-4 text-[1.0625rem] sm:text-[1.1875rem] text-[#f7f3e8] leading-relaxed"
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
            className="text-[1.0625rem] sm:text-[1.1875rem] text-[#b8b3a7] leading-relaxed"
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

      {/* Fonti collegate nelle schede lemma */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Fonti collegate nelle schede
        </h2>
        <p
          className="text-[1.0625rem] sm:text-[1.1875rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          In ogni scheda lemma, dove disponibile, trovi un collegamento diretto
          alla voce corrispondente su questi dizionari.{" "}
          <strong className="text-[#f7f3e8]">Nessun testo è riprodotto.</strong>
        </p>
        <div className="space-y-3">
          {fontiNelleSchede.map((f) => (
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
                  className="text-[1.0625rem] font-semibold text-[#f7f3e8] hover:text-[#b8dc16] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {f.name}
                </a>
              </div>
              <p
                className="text-[0.9375rem] text-[#b8b3a7] leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {f.policy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Dizionari di riferimento editoriale */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Riferimenti editoriali
        </h2>
        <p
          className="text-[1.0625rem] sm:text-[1.1875rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          I seguenti dizionari sono punti di riferimento nella redazione
          delle voci di Il Paroliere. Non sono collegati per singola voce
          (gli URL per lemma non sono stabili), ma costituiscono parte del
          canone lessicografico italiano di cui il progetto si avvale.
        </p>
        <div className="space-y-3">
          {fontiRiferimento.map((f) => (
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
                  className="text-[1.0625rem] font-semibold text-[#f7f3e8] hover:text-[#b8dc16] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {f.name}
                </a>
              </div>
              <p
                className="text-[0.9375rem] text-[#b8b3a7] leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {f.policy}
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
          className="text-[1.0625rem] sm:text-[1.1875rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Se ritieni che una voce di Il Paroliere violi inavvertitamente diritti
          di terzi,{" "}
          <a
            href="/contribuisci"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            invia una segnalazione
          </a>
          {" "}tramite il modulo di contatto. Ogni segnalazione verrà valutata e gestita prontamente.
        </p>
      </section>
    </article>
  );
}
