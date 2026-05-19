import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLemma, getAllSlugs } from "@/content/lemmas";
import type { LemmaEntry } from "@/lib/types";

type Props = {
  params: Promise<{ lemma: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ lemma: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lemma: slug } = await params;
  const entry = getLemma(slug);
  if (!entry) return { title: "Voce non trovata" };

  return {
    title: entry.seo.title,
    description: entry.seo.description,
    robots: entry.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: entry.seo.title,
      description: entry.seo.description,
      type: "article",
      locale: "it_IT",
    },
  };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="section-label">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-[#2a2a2a]" />;
}

function SourceLinks({ links }: { links: LemmaEntry["sourceLinks"] }) {
  const entries: { label: string; url: string }[] = [];
  if (links.treccani) entries.push({ label: "Treccani", url: links.treccani });
  if (links.wiktionary) entries.push({ label: "Wiktionary", url: links.wiktionary });
  if (entries.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {entries.map(({ label, url }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="source-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          {label}
        </a>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default async function LemmaPage({ params }: Props) {
  const { lemma: slug } = await params;
  const entry = getLemma(slug);
  if (!entry) notFound();

  const {
    lemma,
    partOfSpeech,
    gender,
    definition,
    shortDefinition,
    register,
    domains,
    etymology,
    examples,
    synonyms,
    antonyms,
    relatedWords,
    sourceLinks,
    paroliereNote,
    updatedAt,
    createdAt,
  } = entry;

  return (
    <article className="space-y-10">
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
        <span className="text-[#f7f3e8]">{lemma}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-baseline gap-3">
          <h1
            className="text-[2.5rem] sm:text-[3.25rem] font-bold tracking-tight text-[#f7f3e8] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {lemma}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag-pos">{partOfSpeech}</span>
            {gender && <span className="tag-pos">{gender}</span>}
          </div>
        </div>

        {/* Short definition as subtitle */}
        <p
          className="text-[1.1875rem] sm:text-[1.3125rem] text-[#b8b3a7] leading-relaxed font-medium"
          style={{ fontFamily: "Lora, serif", fontStyle: "italic" }}
        >
          {shortDefinition}
        </p>

        {/* Register + domain tags */}
        <div className="flex flex-wrap gap-2">
          {register.map((r) => (
            <span key={r} className="tag-register">
              {r}
            </span>
          ))}
          {domains.map((d) => (
            <span key={d} className="tag-domain">
              {d}
            </span>
          ))}
        </div>
      </header>

      <Divider />

      {/* Definition */}
      <section>
        <SectionHeading>Definizione</SectionHeading>
        <p
          className="text-[1.0625rem] sm:text-[1.125rem] text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          {definition}
        </p>
      </section>

      {/* Etymology */}
      {etymology && (
        <>
          <Divider />
          <section>
            <SectionHeading>Etimologia</SectionHeading>
            <p
              className="text-[1rem] sm:text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
              style={{ fontFamily: "Lora, serif" }}
            >
              {etymology}
            </p>
          </section>
        </>
      )}

      {/* Examples */}
      {examples.length > 0 && (
        <>
          <Divider />
          <section>
            <SectionHeading>Esempi d'uso</SectionHeading>
            <ul className="space-y-4">
              {examples.map((ex, i) => (
                <li
                  key={i}
                  className="pl-4 border-l-2 border-[#b8dc16] text-[#f7f3e8] text-[1rem] sm:text-[1.0625rem] leading-relaxed"
                  style={{ fontFamily: "Lora, serif", fontStyle: "italic" }}
                >
                  «{ex}»
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {/* Synonyms */}
      {synonyms && synonyms.length > 0 && (
        <>
          <Divider />
          <section>
            <SectionHeading>Sinonimi</SectionHeading>
            <div className="space-y-4">
              {synonyms.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span
                      className="font-semibold text-[1rem] sm:text-[1.0625rem] text-[#f7f3e8]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {s.term}
                    </span>
                    {s.register && (
                      <span className="tag-register">{s.register}</span>
                    )}
                  </div>
                  {s.context && (
                    <p
                      className="text-[0.9375rem] text-[#b8b3a7] leading-relaxed"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      {s.context}
                    </p>
                  )}
                  {s.note && (
                    <p
                      className="text-[0.9375rem] text-[#b8b3a7] leading-relaxed"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      ↳ {s.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Antonyms */}
      {antonyms && antonyms.length > 0 && (
        <>
          <Divider />
          <section>
            <SectionHeading>Contrari</SectionHeading>
            <div className="space-y-4">
              {antonyms.map((a, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span
                      className="font-semibold text-[1rem] sm:text-[1.0625rem] text-[#f7f3e8]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {a.term}
                    </span>
                    {a.register && (
                      <span className="tag-register">{a.register}</span>
                    )}
                  </div>
                  {a.context && (
                    <p
                      className="text-[0.9375rem] text-[#b8b3a7] leading-relaxed"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      {a.context}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Related words — hidden until lemma links are active */}

      {/* Nota del Paroliere */}
      <Divider />
      <section className="bg-[#181818] border border-[#2a2a2a] rounded-lg p-5 sm:p-7 space-y-3">
        <SectionHeading>Nota del Paroliere</SectionHeading>
        <p
          className="text-[1rem] sm:text-[1.0625rem] text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          {paroliereNote}
        </p>
      </section>

      {/* Source links */}
      <Divider />
      <section>
        <SectionHeading>Fonti esterne</SectionHeading>
        <p
          className="text-[0.9375rem] text-[#b8b3a7] mb-4 leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Il Paroliere fornisce definizioni originali. Le fonti esterne sono
          collegate per consultazione, non copiate.
        </p>
        <SourceLinks links={sourceLinks} />
      </section>

      {/* Meta footer */}
      <div
        className="pt-4 flex flex-wrap gap-4 text-sm text-[#b8b3a7]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {createdAt && <span>Voce creata: {createdAt}</span>}
        {updatedAt && <span>Ultimo aggiornamento: {updatedAt}</span>}
        <span className="ml-auto">
          <Link href="/" className="hover:text-[#b8dc16] transition-colors">
            ← Tutte le voci
          </Link>
        </span>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: lemma,
            description: shortDefinition,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Il Paroliere",
              url: "https://ilparoliere.online",
            },
            url: `https://ilparoliere.online/parola/${slug}`,
          }),
        }}
      />
    </article>
  );
}
