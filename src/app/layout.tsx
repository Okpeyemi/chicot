import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pierre-Yves CHICOT - Avocat et Consultant en Guadeloupe",
  description: "Cabinet d'avocat et de conseil juridique en Guadeloupe. Expertise en droit public, droit privé, droit pénal et politiques publiques. 25 ans d'expérience.",
  keywords: ["avocat", "Guadeloupe", "droit", "conseil juridique", "Pierre-Yves CHICOT", "consultant", "politiques publiques"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} antialiased`}>
        <PageLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
