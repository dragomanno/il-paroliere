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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <header className="w-full border-b border-[#2a2a2a] px-5 sm:px-8 lg:px-12 py-4 sticky top-0 z-40 bg-[#111111]">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-label="Il Paroliere — homepage"
            >
              {/* Logo icon — pennino Sheaffer Inlaid 45° — Il Paroliere */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="18" cy="18" r="18" fill="#1a1a1a" />
                <g transform="rotate(45, 18, 18)">
                  {/* Corpo pennino — Sheaffer Inlaid B */}
                  <path
                    d="M10.5 7.5 L25.5 7.5 C26.5 7.5 27.5 8.5 27.5 9.5 C27.5 12 26.5 16 24 20 C22 23.5 20.2 25.5 18 27.2 C15.8 25.5 14 23.5 12 20 C9.5 16 8.5 12 8.5 9.5 C8.5 8.5 9.5 7.5 10.5 7.5 Z"
                    fill="#1f1f1f"
                    stroke="#b8dc16"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  {/* Punta lime */}
                  <path
                    d="M13.5 22 C15 25 16.5 26.5 18 27.2 C19.5 26.5 21 25 22.5 22 Z"
                    fill="#b8dc16"
                  />
                  {/* Fessura centrale */}
                  <line x1="18" y1="10.5" x2="18" y2="26.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Righina testa pennino */}
                  <line x1="11.5" y1="8.5" x2="24.5" y2="8.5" stroke="#b8dc16" strokeWidth="0.6" strokeLinecap="round" opacity="0.6" />
                </g>
              </svg>
              <span className="text-xl font-bold tracking-tight text-[#f7f3e8] group-hover:text-[#b8dc16] transition-colors">
                Il Paroliere
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden sm:flex items-center gap-6 text-[1rem] text-[#b8b3a7]"
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
