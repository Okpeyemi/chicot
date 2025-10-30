"use client";

import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import ScaleIn from "../animations/ScaleIn";

export default function AboutSection() {
  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:gap-12">
        {/* Text content */}
        <div className="text-foreground text-base sm:text-lg leading-7 sm:leading-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
            <FadeIn direction="left" delay={0.1} className="flex-1">
              <p className="text-justify text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-relaxed md:leading-loose">
              Maître <strong>Pierre-Yves CHICOT</strong> est un avocat et consultant reconnu, diplômé de
              plusieurs universités prestigieuses (Jules Vernes Amiens, Paris–Ouest La Défense, Paris
              Panthéon–Sorbonne, Caen–Basse–Normandie). Avec une double formation en droit public et droit
              privé, il dispose d&apos;une expertise unique pour traiter des dossiers complexes dans des domaines
              variés : droit pénal, civil, public, droit des étrangers, politiques publiques et sciences politiques.
            </p>
            </FadeIn>

            <ScaleIn delay={0.2}>
              <div className="relative w-full md:w-[280px] lg:w-[300px] h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl md:rounded-[24px] shadow-md shrink-0 mx-auto md:mx-0">
              <Image
                src="/maitre-pierre-yves-chicot.png"
                alt="Portrait de Maître Pierre-Yves CHICOT"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            </ScaleIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-relaxed md:leading-loose">
            Fort de 25 ans d&apos;expérience en tant que cadre dirigeant dans les secteurs public et privé, Maître
            CHICOT excelle dans l&apos;analyse, le conseil, la formation et la représentation en justice. Il est également :
          </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ul className="mt-3 sm:mt-4 list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-relaxed md:leading-loose">
            <li>Professeur des universités en facultés de droit</li>
            <li>Avocat au barreau de Guadeloupe, Saint–Martin et Saint–Barthélemy</li>
            <li>Consultant en politiques publiques et formateur</li>
            <li>Déontologue, analyste pour les médias et responsable associatif et écrivain</li>
          </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
