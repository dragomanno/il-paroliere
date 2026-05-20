import type { Metadata } from "next";
import Link from "next/link";
import { getAllLemmasFromDB } from "@/lib/db";
import SearchBar from "@/components/SearchBar";
import type { LemmaEntry } from "@/lib/types";

export const metadata: Metadata = {
  title: "Il Paroliere — Definizioni aperte, lingua viva.",
  description:
    "Il Paroliere è un dizionario italiano aperto e originale: definizioni " +
    "curate, esempi d'uso autentici, note editoriali. Un progetto Pistakkio®.",
};

export default async function HomePage() {
  // Graceful fallback for deploy previews without DATABASE_URL
  const allLemmas: LemmaEntry[] = process.env.DATABASE_URL
    ? await getAllLemmasFromDB()
    : [];

  const lemmiPerLettera = new Set(
    allLemmas.map((e) => e.lemma.toLowerCase()[0])
  );
  const TUTTE = "abcdefghilmnopqrstuvwxyz".split("");

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero */}
      <section className="pt-6 pb-2 space-y-6">
        <div className="space-y-3">
          <h1
            className="text-[2.25rem] sm:text-[3rem] font-bold tracking-tight text-[#f7f3e8] leading-tight"
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
          className="text-[1.0625rem] sm:text-[1.1875rem] text-[#b8b3a7] leading-relaxed max-w-xl"
          style={{ fontFamily: "Lora, serif" }}
        >
          Un dizionario italiano aperto e originale. Ogni voce è scritta da zero,
          senza copiare da fonti proprietarie. Definizioni precise, esempi autentici,
          note editoriali che spiegano l'uso reale delle parole.
        </p>

        <SearchBar
          lemmas={allLemmas}
          placeholder="Cerca una parola… (es. resilienza, cura, algoritmo)"
          className="max-w-lg"
        />
      </section>

      {/* Presentazione del progetto */}
      <section className="space-y-5 max-w-2xl">
        <h2
          className="text-[1.625rem] sm:text-[2rem] font-bold tracking-tight text-[#f7f3e8]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Un dizionario che non copia
        </h2>
        <div
          className="space-y-4 text-[#b8b3a7] leading-relaxed text-[1.0625rem] sm:text-[1.125rem]"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            La lingua italiana ha dizionari autorevoli — Treccani, De Mauro,
            Sabatini-Coletti — costruiti nel corso di decenni con rigore filologico.
            Il Paroliere non compete con loro. Li considera punti di riferimento
            imprescindibili, e li linka ogni volta che è utile.
          </p>
          <p>
            Ciò che fa Il Paroliere è diverso: scrive ogni definizione da zero,
            con una voce editoriale contemporanea che non parafrasare il passato ma
            lo rilegge. Una parola come <em>resilienza</em> o <em>algoritmo</em> non
            ha oggi lo stesso peso che aveva vent'anni fa. Le definizioni cambiano
            perché la lingua cambia, e i dizionari chiusi non tengono il passo.
          </p>
          <p>
            Ogni voce del Paroliere include la definizione principale, una versione
            compatta per l'anteprima, sinonimi contestualizzati con le loro sfumature,
            un'etimologia verificata, e una nota editoriale — il posto dove si dice
            qualcosa che i dizionari tradizionali non dicono: perché quella parola
            esiste, come è cambiata, cosa rivela della cultura che la usa.
          </p>
          <p>
            Il contenuto è pubblicato sotto licenza{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              CC BY-SA 4.0
            </a>
            : chiunque può usarlo, condividerlo e migliorarlo, a patto di
            attribuire la fonte e mantenere la stessa licenza aperta. Il codice
            è MIT. Nessun cookie, nessun tracker, nessun paywall.
          </p>
          <p>
            Il Paroliere è un progetto artigianale: cresce per cura progressiva,
            non per automazione. Ogni lemma viene letto, riletto e validato prima
            di entrare nel dizionario. La qualità non è negoziabile, la quantità
            è una conseguenza — non un obiettivo.
          </p>
        </div>
        <div
          className="flex flex-wrap gap-4 pt-1 text-[0.9375rem]"
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
      </section>

      {/* Navigazione alfabetica */}
      <section className="space-y-5">
        <h2 className="section-label">Sfoglia per lettera</h2>
        <nav
          aria-label="Navigazione alfabetica"
          className="flex flex-wrap gap-2"
        >
          {TUTTE.map((l) => {
            const hasContent = lemmiPerLettera.has(l);
            return hasContent ? (
              <Link
                key={l}
                href={`/lettera/${l}`}
                className="w-11 h-11 flex items-center justify-center rounded text-[0.9375rem] font-semibold
                           bg-[#181818] border border-[#2a2a2a] text-[#b8b3a7]
                           hover:border-[#b8dc16] hover:text-[#b8dc16] transition-colors duration-150"
                style={{ fontFamily: "Poppins, sans-serif" }}
                title={`Lemmi con la lettera ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </Link>
            ) : (
              <span
                key={l}
                className="w-11 h-11 flex items-center justify-center rounded text-[0.9375rem] font-semibold
                           text-[#2a2a2a] cursor-default select-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
                aria-hidden="true"
              >
                {l.toUpperCase()}
              </span>
            );
          })}
        </nav>
        <p
          className="text-sm text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {allLemmas.length} voci disponibili · le lettere in grigio saranno
          popolate nelle prossime espansioni
        </p>
      </section>

      {/* Colophon minimo */}
      <section className="border-t border-[#2a2a2a] pt-8">
        <p
          className="text-sm text-[#b8b3a7]"
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
