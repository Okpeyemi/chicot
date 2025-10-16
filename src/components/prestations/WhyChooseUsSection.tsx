import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold text-neutral-900">
          Pourquoi nous choisir ?
        </h2>
        <p className="mt-4 text-3xl leading-8 text-neutral-800">
          Notre approche globale combine expertise juridique, compétences pédagogiques et analyse stratégique pour vous
          offrir des solutions sur mesure, que ce soit en contentieux, en formation ou en conseil.
        </p>

        <div className="mt-20">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-200 px-6 py-3 text-2xl font-semibold text-neutral-700 shadow hover:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            Contactez-nous pour en savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
