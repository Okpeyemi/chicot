"use client";

import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import ScaleIn from "./animations/ScaleIn";
import Image from "next/image";

export default function Welcome() {
  return (
    <section aria-label="Présentation du cabinet" className="px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl text-center text-neutral-900">
        {/* Image et titres professionnels */}
        <ScaleIn delay={0.1}>
          <div className="flex max-md:flex-col justify-center items-center mb-8 gap-4">
            <div className="relative w-[200px] h-[250px] overflow-hidden shadow-md mb-4 rounded-lg">
              <Image
                src="/maitre-pierre-yves-chicot2.png"
                alt="Portrait de Maître Pierre-Yves CHICOT"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col max-md:items-center items-start">
            <p className="text-red-600 font-semibold text-sm sm:text-base md:text-lg">
              Professeur des facultés de droit,
            </p>
            <p className="text-red-600 font-semibold text-sm sm:text-base md:text-lg">
              Avocat à la Cour,
            </p>
            <p className="text-red-600 font-semibold text-sm sm:text-base md:text-lg">
              Consultant en Politiques Publiques.
            </p>
            </div>
          </div>
        </ScaleIn>

        {/* Texte de bienvenue */}
        <FadeIn delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose px-2 text-justify">
            Bienvenue au Cabinet de <strong>Maître Pierre-Yves CHICOT</strong>, votre partenaire de
            confiance pour toutes vos questions juridiques et besoins en conseil. Fort de 25 ans
            d&apos;expérience, Maître CHICOT, avocat et consultant, met son expertise unique en droit public,
            droit privé et politiques publiques à votre service.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose px-2 text-justify">
            Nous nous engageons à honorer votre confiance avec rigueur, réactivité et une approche
            personnalisée. Que ce soit pour résoudre un litige, négocier une solution amiable ou vous
            accompagner dans une procédure contentieuse, notre cabinet vous garantit un service
            d&apos;excellence adapté à la complexité de votre situation.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-4 sm:mt-5 text-base text-justify sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose px-2">
            Rejoignez-nous pour une collaboration fructueuse !
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-8 sm:mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-300 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-semibold text-neutral-700 shadow hover:from-neutral-300 hover:to-neutral-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
