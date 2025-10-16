import ContactsHero from "@/components/contacts/Hero";
import ContactSection from "@/components/contacts/ContactSection";

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