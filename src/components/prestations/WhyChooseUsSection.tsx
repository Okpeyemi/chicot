import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
          Pourquoi nous choisir ?
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-relaxed md:leading-loose text-neutral-800 px-2">
          Notre approche globale combine expertise juridique, compétences pédagogiques et analyse stratégique pour vous
          offrir des solutions sur mesure, que ce soit en contentieux, en formation ou en conseil.
        </p>

        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-neutral-200 px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-neutral-700 shadow hover:bg-neutral-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            Contactez-nous pour en savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
