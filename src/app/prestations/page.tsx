import PrestationsHero from "@/components/prestations/Hero";
import ServicesSection from "@/components/prestations/ServicesSection";
import ConsultantSection from "@/components/prestations/ConsultantSection";
import WhyChooseUsSection from "@/components/prestations/WhyChooseUsSection";

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