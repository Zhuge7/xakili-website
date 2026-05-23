import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces-var",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Xakili - Studio SaaS francophone",
  description:
    "Studio franco-canadien qui conçoit et opère des SaaS verticaux pour les marchés sous-équipés d'Afrique de l'Ouest francophone. Pharveo est notre premier produit.",
  metadataBase: new URL("https://xakili.com"),
  openGraph: {
    title: "Xakili - Studio SaaS francophone",
    description:
      "Les outils que les grands éditeurs ne construiront jamais. Studio franco-canadien, Sudbury ↔ Dakar.",
    url: "https://xakili.com",
    siteName: "Xakili",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xakili - Studio SaaS francophone",
    description:
      "Studio franco-canadien qui conçoit des SaaS verticaux pour l'Afrique de l'Ouest francophone.",
  },
  keywords: [
    "SaaS", "Afrique de l'Ouest", "francophone", "studio produit",
    "Pharveo", "CRM pharmaceutique", "Sénégal", "Canada", "Sudbury", "Dakar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
