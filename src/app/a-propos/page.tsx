import { Metadata } from "next";
import AproposHero from "@/components/apropos/Hero";
import AboutSection from "@/components/apropos/AboutSection";
import EngagementSection from "@/components/apropos/EngagementSection";
import ConsultationNotice from "@/components/apropos/ConsultationNotice";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "À Propos - Maître Pierre-Yves CHICOT",
  "Découvrez le parcours de Maître Pierre-Yves CHICOT, avocat diplômé de plusieurs universités prestigieuses. 25 ans d'expérience en droit public, privé et politiques publiques.",
  "/a-propos",
  [
    "Pierre-Yves CHICOT avocat",
    "parcours avocat Guadeloupe",
    "expérience juridique",
    "avocat barreau Guadeloupe",
    "consultant expert",
    "professeur droit",
    "zones intervention Antilles"
  ]
);

export default function AProposPage() {
  return (
    <main>
      <AproposHero title={"À Propos de Maître\nPierre-Yves CHICOT"} imageSrc="/a-propos-hero.png" height="lg" />
      <AboutSection />
      <EngagementSection />
      <ConsultationNotice />
    </main>
  );
}