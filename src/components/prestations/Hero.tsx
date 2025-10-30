import Image from "next/image";
import type { ReactNode } from "react";

type PrestationsHeroProps = {
  title: string | ReactNode;
  imageSrc?: string;
  height?: "sm" | "md" | "lg";
};

export default function PrestationsHero({
  title,
  imageSrc = "/acceuil-hero.png",
  height = "md",
}: PrestationsHeroProps) {
  const heightClasses =
    height === "lg"
      ? "h-[60vh] sm:h-[75vh] lg:h-[90vh]"
      : height === "sm"
      ? "h-[40vh] sm:h-[50vh] lg:h-[60vh]"
      : "h-[50vh] sm:h-[60vh] lg:h-[70vh]"; // md

  const normalizedTitle =
    typeof title === "string"
      ? title.split("\n").map((line, i) => (
          <span key={i} className={i > 0 ? "block" : undefined}>
            {line}
          </span>
        ))
      : title;

  return (
    <section aria-label="En-tête de la page Prestations" className="relative w-full">
      <div className={`relative ${heightClasses} min-h-[280px] w-full`}>
        <Image
          src={imageSrc}
          alt="Image de fond de la section Prestations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white/70 backdrop-blur-sm shadow-md rounded-md px-6 py-5 sm:px-8 sm:py-6 w-3xl">
            <h1 className="text-center text-foreground text-2xl sm:text-3xl md:text-4xl font-semibold">
              {normalizedTitle}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
