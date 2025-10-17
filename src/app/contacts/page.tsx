import { Metadata } from "next";
import ContactsHero from "@/components/contacts/Hero";
import ContactSection from "@/components/contacts/ContactSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Contact et Rendez-vous - Cabinet Avocat Guadeloupe",
  "Prendre rendez-vous avec le Cabinet Pierre-Yves CHICOT à Pointe-à-Pitre. Contact rapide, consultation juridique, devis gratuit.",
  "/contacts",
  [
    "contact avocat Guadeloupe",
    "rendez-vous avocat",
    "consultation juridique",
    "devis gratuit avocat",
    "cabinet Pointe-à-Pitre",
    "coordonnées avocat",
    "prendre rendez-vous"
  ]
);

export default function Contacts() {
  return (
    <main>
      <ContactsHero
        title={"Contactez-nous !"}
        imageSrc="/contacts-hero.png" // ou une image dédiée contacts
        height="lg"
      />
      <ContactSection />
    </main>
  );
}