import type { Metadata } from "next";
import Link from "next/link";
import { allLemmas } from "@/content/lemmas";
import SearchBar from "@/components/SearchBar";

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

        <p
          className="text-base sm:text-lg text-[#b8b3a7] leading-relaxed max-w-xl"
          style={{ fontFamily: "Lora, serif" }}
        >
          Un dizionario italiano aperto e originale. Ogni voce è scritta da zero,
          senza copiare da fonti proprietarie. Definizioni precise, esempi autentici,
          note editoriali che spiegano l'uso reale delle parole.
        </p>

        {/* Live search */}
        <SearchBar
          placeholder="Cerca una parola… (es. resilienza, cura, algoritmo)"
          className="max-w-lg"
        />
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
        <div
          className="flex flex-wrap gap-4 pt-2 text-sm"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <Link
            href="/progetto"
            className="text-[#b8dc16] hover:underline underline-offset-2 transition-colors"
          >
            Scopri il progetto →
          </Link>
          <Link
            href="/contribuisci"
            className="text-[#b8b3a7] hover:text-[#f7f3e8] transition-colors"
          >
            Come contribuire
          </Link>
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
          <Link
            href="/licenza"
            className="hover:text-[#b8dc16] transition-colors underline underline-offset-2"
          >
            MIT
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
