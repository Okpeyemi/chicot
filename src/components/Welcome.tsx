import Link from "next/link";

export default function Welcome() {
  return (
    <section aria-label="Présentation du cabinet" className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl text-center text-neutral-900">
        <p className="text-lg sm:text-xl md:text-2xl leading-8 sm:leading-9 md:leading-10">
          Bienvenue au Cabinet de <strong>Maître Pierre-Yves CHICOT</strong>, votre partenaire de
          confiance pour toutes vos questions juridiques et besoins en conseil. Fort de 25 ans
          d’expérience, Maître CHICOT, avocat et consultant, met son expertise unique en droit public,
          droit privé et politiques publiques à votre service.
        </p>
        <p className="mt-5 text-lg sm:text-xl md:text-2xl leading-8 sm:leading-9 md:leading-10">
          Nous nous engageons à honorer votre confiance avec rigueur, réactivité et une approche
          personnalisée. Que ce soit pour résoudre un litige, négocier une solution amiable ou vous
          accompagner dans une procédure contentieuse, notre cabinet vous garantit un service
          d’excellence adapté à la complexité de votre situation.
        </p>
        <p className="mt-5 text-lg sm:text-xl md:text-2xl leading-8 sm:leading-9 md:leading-10">
          Rejoignez-nous pour une collaboration fructueuse !
        </p>

        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-300 px-8 py-4 text-base sm:text-lg font-semibold text-neutral-700 shadow md:px-10 md:py-5 hover:from-neutral-300 hover:to-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
