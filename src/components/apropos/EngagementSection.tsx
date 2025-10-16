function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}

const ZONES = [
  "Guadeloupe",
  "Martinique",
  "Guyane",
  "Saint-Martin",
  "Saint-Barthélemy",
  "Canada",
  "La Réunion",
  "Nouvelle-Calédonie",
  "Mayotte",
  "Bruxelles",
];

export default function EngagementSection() {
  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl text-center">
        {/* Chip */}
        <div className="inline-block rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-[#EEC96D] px-6 py-2 sm:px-8 sm:py-2 md:px-10 font-bold text-neutral-900">
          Notre Engagement
        </div>

        <p className="mx-auto mt-4 sm:mt-6 max-w-6xl text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-relaxed md:leading-loose text-neutral-900 px-2">
          Le cabinet s'engage à mener chaque mission avec rigueur, réactivité et une écoute active. Nous sommes fiers de
          défendre vos intérêts avec professionnalisme et de promouvoir des solutions constructives, que ce soit par la
          négociation, la médiation ou la défense en justice.
        </p>

        <h2 className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">Zones d'intervention</h2>

        <ul className="mx-auto mt-6 sm:mt-8 grid max-w-6xl grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-6 sm:grid-cols-3 md:grid-cols-4">
          {ZONES.map((z) => (
            <li key={z} className="flex flex-col items-center justify-start gap-2 sm:gap-3">
              <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#EEC96D] text-white">
                <PinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-neutral-900 text-center">{z}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
