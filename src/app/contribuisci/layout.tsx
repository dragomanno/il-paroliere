import type { Metadata } from "next";

// page.tsx is a client component and cannot export metadata.
export const metadata: Metadata = {
  alternates: { canonical: "/contribuisci" },
};

export default function ContribuisciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
