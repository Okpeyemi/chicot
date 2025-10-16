export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 -mt-24 sm:-mt-32 md:-mt-40 px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Avocat card */}
        <div className="rounded-3xl bg-[#F0EDED] ring-neutral-200 p-2 sm:p-4">
          <div className="flex rounded-2xl justify-center bg-[#EEC96D] px-5 py-10 text-4xl font-bold text-neutral-900">
            Avocat
          </div>

          <ul className="mt-6 list-disc space-y-2 px-10 leading-8 text-neutral-900 text-3xl">
            <li>Conseils juridiques personnalisés</li>
            <li>
              Représentation en justice (droit pénal, civil, public, droit des étrangers)
            </li>
            <li>Rédaction de contrats et d’actes juridiques</li>
            <li>Négociation et médiation pour des résolutions amiables</li>
            <li>Recherches juridiques et consultations écrites</li>
            <li>Analyse de dossiers et préparation de procédures</li>
            <li>Plaidoyerie devant les tribunaux</li>
            <li>Assistance en garde à vue et visites en maison d’arrêt</li>
          </ul>
        </div>

        {/* Formateur card */}
        <div className="rounded-3xl bg-[#F0EDED] shadow-sm ring-1 ring-neutral-200 p-2 sm:p-4">
          <div className="flex rounded-2xl justify-center bg-[#EEC96D] px-5 py-10 text-4xl font-bold text-neutral-900">
            Formateur et Séminariste
          </div>

          <div className="mt-6 space-y-3 leading-8 text-neutral-900 text-3xl">
            <p className="px-4">
              Nous proposons des formations juridiques et professionnelles sur les thématiques suivantes :
            </p>
            <ul className="list-disc px-10 space-y-2">
              <li>Droit public, droit civil, droit pénal, droit des étrangers</li>
              <li>Politiques publiques et sciences politiques</li>
              <li>Secteur sanitaire et social (évaluations internes)</li>
            </ul>
            <p className="px-4">
              Nos formations sont conçues avec des méthodes pédagogiques adaptées, des outils modernes (diapositives,
              vidéos, cas pratiques) et une approche interactive pour répondre aux besoins de publics variés (élus,
              professionnels, ESMS).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
