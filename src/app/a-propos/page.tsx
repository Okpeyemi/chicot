import AproposHero from "@/components/apropos/Hero";
import AboutSection from "@/components/apropos/AboutSection";
import EngagementSection from "@/components/apropos/EngagementSection";
import ConsultationNotice from "@/components/apropos/ConsultationNotice";

export default function AProposPage() {
  return (
    <main>
      <AproposHero title={"À Propos de Maître\nPierre-Yves CHICOT"} imageSrc="/a-propos-hero.png" height="md" />
      <AboutSection />
      <EngagementSection />
      <ConsultationNotice />
    </main>
  );
}