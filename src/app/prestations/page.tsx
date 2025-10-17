import { Metadata } from "next";
import PrestationsHero from "@/components/prestations/Hero";
import ServicesSection from "@/components/prestations/ServicesSection";
import ConsultantSection from "@/components/prestations/ConsultantSection";
import WhyChooseUsSection from "@/components/prestations/WhyChooseUsSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Prestations - Services Juridiques et Formations",
  "Services d'avocat, consultant en politiques publiques et formateur. Expertise en droit pénal, civil, public et formations juridiques.",
  "/prestations",
  [
    "services avocat Guadeloupe",
    "consultant politiques publiques",
    "formation juridique",
    "droit pénal",
    "droit civil",
    "droit public",
    "formateur droit",
    "conseil juridique professionnel"
  ]
);

export default function Prestations() {
  return (
    <main>
      <PrestationsHero
        title={"À Propos de Maître\nPierre-Yves CHICOT"}
        imageSrc="/prestations-hero.png" // ou une image dédiée prestations
        height="lg"
      />
      <ServicesSection />
      <ConsultantSection />
      <WhyChooseUsSection />
    </main>
  );
}