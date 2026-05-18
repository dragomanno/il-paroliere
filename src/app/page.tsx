import type { Metadata } from "next";
import Link from "next/link";
import { allLemmas } from "@/content/lemmas";

export const metadata: Metadata = {
  title: "Il Paroliere — Definizioni aperte, lingua viva.",
  description:
    "Il Paroliere è un dizionario italiano aperto e originale: definizioni " +
    "curate, esempi d'uso autentici, note editoriali. Un progetto Pistakkio®.",
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="pt-8 pb-4 space-y-6">
        <div className="space-y-3">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f7f3e8] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Il Paroliere
          </h1>
          <p
            className="text-xl sm:text-2xl font-medium text-[#b8dc16]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Definizioni aperte, lingua viva.
          </p>
        </div>

        <p className="text-base sm:text-lg text-[#b8b3a7] leading-relaxed max-w-xl font-lora" style={{ fontFamily: "Lora, serif" }}>
          Un dizionario italiano aperto e originale. Ogni voce è scritta da zero,
          senza copiare da fonti proprietarie. Definizioni precise, esempi autentici,
          note editoriali che spiegano l'uso reale delle parole.
        </p>

        {/* Search slot — placeholder for Phase 3 Fuse.js */}
        <div className="relative max-w-lg">
          <label htmlFor="search-input" className="sr-only">
            Cerca una parola
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b8b3a7] pointer-events-none select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              id="search-input"
              type="search"
              placeholder="Cerca una parola… (ricerca in arrivo)"
              disabled
              className="w-full pl-11 pr-4 py-3 bg-[#181818] border border-[#2a2a2a] rounded-lg
                         text-[#f7f3e8] placeholder-[#b8b3a7] text-sm
                         focus:outline-none focus:border-[#b8dc16]
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-label="Ricerca interna — in costruzione"
            />
          </div>
          <p
            className="mt-2 text-xs text-[#b8b3a7]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Il motore di ricerca sarà attivo nella Fase 3. Per ora, sfoglia le voci.
          </p>
        </div>
      </section>

      {/* Seed lemmas */}
      <section className="space-y-6">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Voci disponibili
        </h2>

        <div className="grid gap-4 sm:grid-cols-1">
          {allLemmas.map((entry) => (
            <Link
              key={entry.slug}
              href={`/parola/${entry.slug}`}
              className="group block p-5 bg-[#181818] border border-[#2a2a2a] rounded-lg
                         hover:border-[#b8dc16] transition-colors duration-150"
            >
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span
                  className="text-xl font-semibold text-[#f7f3e8] group-hover:text-[#b8dc16] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {entry.lemma}
                </span>
                <span
                  className="text-xs text-[#b8b3a7]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {entry.partOfSpeech}
                  {entry.gender ? ` · ${entry.gender}` : ""}
                </span>
              </div>
              <p
                className="text-sm text-[#b8b3a7] leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {entry.shortDefinition}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.domains.slice(0, 3).map((d) => (
                  <span key={d} className="tag-domain">
                    {d}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-t border-[#2a2a2a] pt-10 space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Il progetto
        </h2>
        <div
          className="space-y-4 text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il Paroliere nasce dall'idea che la lingua italiana meriti un dizionario
            digitale aperto, editorialmente curato e legalmente pulito. Le voci sono
            scritte da zero: nessuna definizione è copiata da fonti proprietarie.
          </p>
          <p>
            I dizionari autorevoli — Treccani, De Mauro, Sabatini-Coletti — sono
            sorgenti da consultare e da collegare, non da riprodurre. Il Paroliere
            li cita e li rimanda, costruendo attorno a loro uno strato di commento
            originale.
          </p>
        </div>
        <p
          className="text-xs text-[#b8b3a7] pt-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Contenuto editoriale —{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b8dc16] transition-colors underline underline-offset-2"
          >
            CC BY-SA 4.0
          </a>
          . Codice —{" "}
          <a
            href="https://github.com/dragomanno/il-paroliere/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b8dc16] transition-colors underline underline-offset-2"
          >
            MIT
          </a>
          .
        </p>
      </section>
    </div>
  );
}
