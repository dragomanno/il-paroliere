import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Il Paroliere — Definizioni aperte, lingua viva.",
    template: "%s — Il Paroliere",
  },
  description:
    "Il Paroliere è un dizionario italiano aperto e originale. " +
    "Definizioni curate, esempi d'uso, note editoriali. " +
    "Un progetto Pistakkio®.",
  metadataBase: new URL("https://ilparoliere.online"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Il Paroliere",
  },
  robots: {
    index: false, // Phase 1: no indexing yet
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-[#111111] text-[#f7f3e8] min-h-screen flex flex-col">
        <header className="border-b border-[#2a2a2a] px-4 sm:px-8 py-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <a
              href="/"
              className="font-ui text-lg font-semibold tracking-tight text-[#f7f3e8] hover:text-[#b8dc16] transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Il Paroliere
            </a>
            <span
              className="text-xs text-[#b8b3a7] hidden sm:inline"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Definizioni aperte, lingua viva.
            </span>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-8 py-10">
          <div className="max-w-3xl mx-auto">{children}</div>
        </main>

        <footer className="border-t border-[#2a2a2a] px-4 sm:px-8 py-6 mt-auto">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              className="text-xs text-[#b8b3a7]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Il Paroliere è un progetto open source curato da{" "}
              <a
                href="https://www.pistakkio.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8dc16] transition-colors"
              >
                Pistakkio®
              </a>
              . Definizioni originali — CC BY-SA 4.0. Codice — MIT.
            </p>
            <p
              className="text-xs text-[#b8b3a7]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Le fonti esterne sono collegate, mai copiate.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
