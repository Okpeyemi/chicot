import { Metadata } from "next";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
    </main>
  );
}
