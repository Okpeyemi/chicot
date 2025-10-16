"use client";

import ScaleIn from "../animations/ScaleIn";

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* Avocat card */}
        <ScaleIn delay={0.1}>
          <div className="rounded-2xl sm:rounded-3xl bg-[#F0EDED] ring-neutral-200 p-2 sm:p-3 md:p-4">
          <div className="flex rounded-xl sm:rounded-2xl justify-center bg-[#EEC96D] px-4 py-6 sm:px-5 sm:py-8 md:py-10 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
            Avocat
          </div>

          <ul className="mt-4 sm:mt-6 list-disc space-y-1.5 sm:space-y-2 px-6 sm:px-8 md:px-10 leading-6 sm:leading-7 md:leading-8 text-neutral-900 text-base sm:text-xl md:text-2xl lg:text-3xl">
            <li>Conseils juridiques personnalisés</li>
            <li>
              Représentation en justice (droit pénal, civil, public, droit des étrangers)
            </li>
            <li>Rédaction de contrats et d&apos;actes juridiques</li>
            <li>Négociation et médiation pour des résolutions amiables</li>
            <li>Recherches juridiques et consultations écrites</li>
            <li>Analyse de dossiers et préparation de procédures</li>
            <li>Plaidoyerie devant les tribunaux</li>
            <li>Assistance en garde à vue et visites en maison d&apos;arrêt</li>
          </ul>
        </div>
        </ScaleIn>

        {/* Formateur card */}
        <ScaleIn delay={0.2}>
          <div className="rounded-2xl sm:rounded-3xl bg-[#F0EDED] shadow-sm ring-1 ring-neutral-200 p-2 sm:p-3 md:p-4">
          <div className="flex rounded-xl sm:rounded-2xl justify-center bg-[#EEC96D] px-4 py-6 sm:px-5 sm:py-8 md:py-10 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 text-center">
            Formateur et Séminariste
          </div>

          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 leading-6 sm:leading-7 md:leading-8 text-neutral-900 text-base sm:text-xl md:text-2xl lg:text-3xl">
            <p className="px-3 sm:px-4">
              Nous proposons des formations juridiques et professionnelles sur les thématiques suivantes :
            </p>
            <ul className="list-disc px-6 sm:px-8 md:px-10 space-y-1.5 sm:space-y-2">
              <li>Droit public, droit civil, droit pénal, droit des étrangers</li>
              <li>Politiques publiques et sciences politiques</li>
              <li>Secteur sanitaire et social (évaluations internes)</li>
            </ul>
            <p className="px-3 sm:px-4">
              Nos formations sont conçues avec des méthodes pédagogiques adaptées, des outils modernes (diapositives,
              vidéos, cas pratiques) et une approche interactive pour répondre aux besoins de publics variés (élus,
              professionnels, ESMS).
            </p>
          </div>
        </div>
        </ScaleIn>
      </div>
    </section>
  );
}
