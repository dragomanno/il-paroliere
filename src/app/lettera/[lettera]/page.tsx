import type { Metadata } from "next";
import Link from "next/link";
import { getAllLemmasFromDB } from "@/lib/db";
import { notFound } from "next/navigation";
import type { LemmaEntry } from "@/lib/types";

const LETTERE_IT = "abcdefghilmnopqrstuvz".split("");
const LETTERE_EXTRA = "jkwxy".split("");
export const revalidate = 3600;

const TUTTE_LETTERE = [...LETTERE_IT, ...LETTERE_EXTRA];

export async function generateStaticParams() {
  return TUTTE_LETTERE.map((lettera) => ({ lettera }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lettera: string }>;
}): Promise<Metadata> {
  const { lettera } = await params;
  const upper = lettera.toUpperCase();

  if (!process.env.DATABASE_URL) {
    return { title: `Parole con la ${upper} — Il Paroliere` };
  }

  const allLemmas = await getAllLemmasFromDB();
  const count = allLemmas.filter((e) =>
    e.lemma.toLowerCase().startsWith(lettera)
  ).length;

  return {
    title: `Parole con la ${upper} — Il Paroliere`,
    description:
      count > 0
        ? `${count} ${count === 1 ? "voce" : "voci"} con la lettera ${upper} nel dizionario Il Paroliere. Definizioni originali, esempi autentici, note editoriali.`
        : `Nessuna voce con la lettera ${upper} ancora — Il Paroliere è in crescita progressiva.`,
  };
}

export default async function LetteraPage({
  params,
}: {
  params: Promise<{ lettera: string }>;
}) {
  const { lettera } = await params;

  if (!TUTTE_LETTERE.includes(lettera.toLowerCase())) {
    notFound();
  }

  const lower = lettera.toLowerCase();
  const upper = lower.toUpperCase();

  // Graceful fallback for deploy previews without DATABASE_URL
  const allLemmas: LemmaEntry[] = process.env.DATABASE_URL
    ? await getAllLemmasFromDB()
    : [];

  const lemmiLettera = allLemmas
    .filter((e) => e.lemma.toLowerCase().startsWith(lower))
    .sort((a, b) => a.lemma.localeCompare(b.lemma, "it"));

  const hasLemmi = lemmiLettera.length > 0;
  const lemmiPerLettera = new Set(
    allLemmas.map((e) => e.lemma.toLowerCase()[0])
  );

  return (
    <article className="space-y-12 pt-6 sm:pt-8">
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
        <span className="text-[#f7f3e8]">Lettera {upper}</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-baseline gap-4">
          <h1
            className="text-6xl sm:text-7xl font-bold tracking-tight text-[#b8dc16]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {upper}
          </h1>
          {hasLemmi && (
            <span
              className="text-sm text-[#b8b3a7]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {lemmiLettera.length}{" "}
              {lemmiLettera.length === 1 ? "voce" : "voci"}
            </span>
          )}
        </div>
        <p
          className="text-lg text-[#b8b3a7] leading-relaxed max-w-xl"
          style={{ fontFamily: "Lora, serif" }}
        >
          {hasLemmi
            ? `Voci del dizionario che iniziano con la lettera ${upper}.`
            : `Nessuna voce con la lettera ${upper} ancora. Il Paroliere cresce per cura, non per quantità.`}
        </p>
      </header>

      <AlphaNav current={lower} lemmiPerLettera={lemmiPerLettera} />

      <hr className="border-[#2a2a2a]" />

      {hasLemmi ? (
        <section className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-1">
            {lemmiLettera.map((entry) => (
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
      ) : (
        <section className="py-12 text-center space-y-4">
          <p
            className="text-[#b8b3a7] text-base"
            style={{ fontFamily: "Lora, serif" }}
          >
            Questa sezione sarà popolata nelle prossime espansioni del dizionario.
          </p>
          <Link
            href="/contribuisci"
            className="inline-block text-sm text-[#b8dc16] hover:underline underline-offset-2 transition-colors"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Vuoi proporre un lemma? →
          </Link>
        </section>
      )}
    </article>
  );
}

function AlphaNav({
  current,
  lemmiPerLettera,
}: {
  current: string;
  lemmiPerLettera: Set<string>;
}) {
  const TUTTE = "abcdefghilmnopqrstuvwxyz".split("");

  return (
    <nav aria-label="Navigazione alfabetica" className="flex flex-wrap gap-2">
      {TUTTE.map((l) => {
        const hasContent = lemmiPerLettera.has(l);
        const isCurrent = l === current;

        if (!hasContent) {
          return (
            <span
              key={l}
              className="w-10 h-10 flex items-center justify-center rounded text-sm font-semibold
                         text-[#3a3a3a] cursor-default select-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-hidden="true"
            >
              {l.toUpperCase()}
            </span>
          );
        }

        return (
          <Link
            key={l}
            href={`/lettera/${l}`}
            className={`w-10 h-10 flex items-center justify-center rounded text-sm font-semibold
                        transition-colors duration-150
                        ${
                          isCurrent
                            ? "bg-[#b8dc16] text-[#0d0d0d]"
                            : "bg-[#181818] border border-[#2a2a2a] text-[#b8b3a7] hover:border-[#b8dc16] hover:text-[#b8dc16]"
                        }`}
            style={{ fontFamily: "Poppins, sans-serif" }}
            aria-current={isCurrent ? "page" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
