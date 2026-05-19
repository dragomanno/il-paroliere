import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

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
    index: true,
    follow: true,
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
        {/* Header */}
        <header className="border-b border-[#2a2a2a] px-5 sm:px-8 lg:px-12 py-4 sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-ui text-lg font-semibold tracking-tight text-[#f7f3e8] hover:text-[#b8dc16] transition-colors shrink-0"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Il Paroliere
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden sm:flex items-center gap-6 text-sm text-[#b8b3a7]"
              aria-label="Navigazione principale"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Link href="/progetto" className="hover:text-[#f7f3e8] transition-colors">
                Progetto
              </Link>
              <Link href="/fonti" className="hover:text-[#f7f3e8] transition-colors">
                Fonti
              </Link>
              <Link href="/contribuisci" className="hover:text-[#f7f3e8] transition-colors">
                Contribuisci
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <MobileNav />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] px-5 sm:px-8 lg:px-12 py-10 mt-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Nav istituzionale */}
            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#b8b3a7]"
              aria-label="Navigazione istituzionale"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Link href="/progetto" className="hover:text-[#b8dc16] transition-colors">
                Il progetto
              </Link>
              <Link href="/fonti" className="hover:text-[#b8dc16] transition-colors">
                Fonti
              </Link>
              <Link href="/licenza" className="hover:text-[#b8dc16] transition-colors">
                Licenza
              </Link>
              <Link href="/contribuisci" className="hover:text-[#b8dc16] transition-colors">
                Contribuisci
              </Link>
              <Link href="/privacy" className="hover:text-[#b8dc16] transition-colors">
                Privacy
              </Link>
            </nav>

            {/* Colophon */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-[#b8b3a7]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p>
                Il Paroliere è un progetto open source curato da{" "}
                <a
                  href="https://www.pistakkio.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b8dc16] transition-colors"
                >
                  Pistakkio®
                </a>
                . Contenuto —{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b8dc16] transition-colors"
                >
                  CC BY-SA 4.0
                </a>
                . Codice — MIT.
              </p>
              <p className="text-[#b8b3a7]/60">
                Le fonti esterne sono collegate, mai copiate.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
