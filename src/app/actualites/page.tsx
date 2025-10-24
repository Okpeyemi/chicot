import { Metadata } from "next";
import PrestationsHero from "@/components/prestations/Hero";
import NewsSection from "@/components/actualites/NewsSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Actualités & Publications - Maître Pierre-Yves CHICOT",
  "Dernières actualités, interventions médias, podcasts et publications de Maître Pierre‑Yves CHICOT : analyses juridiques, prises de parole et ressources.",
  "/actualites",
  [
    "actualités juridiques",
    "publications",
    "interventions médias",
    "podcast droit",
    "Maître Pierre-Yves CHICOT",
    "analyses juridiques",
    "France 24",
    "Guadeloupe avocat actualités"
  ]
);

export default function Actualites() {
  return (
    <main>
      <PrestationsHero
        title={"Actualités & Publications"}
        imageSrc="/actualites-hero.png" // ou une image dédiée prestations
        height="lg"
      />
      <NewsSection />
    </main>
  );
}