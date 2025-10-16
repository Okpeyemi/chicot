import Image from "next/image";
import Link from "next/link";

export default function ConsultationNotice() {
  return (
    <section className="px-4 pb-8 pt-4 sm:pb-12 sm:pt-6 md:pb-16">
      <div className="text-center">
        <div className="bg-gradient-to-b from-white to-neutral-100 pt-4 pb-16 sm:pt-6 sm:pb-20 md:pb-24 lg:pb-30 px-4 sm:px-5 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
              <Image src="/attention.png" alt="Attention" fill sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px" className="object-contain" />
            </div>
            <p className="mt-3 sm:mt-4 mx-auto max-w-6xl text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-relaxed md:leading-loose text-red-600 px-2">
              Nous proposons une première consultation à 200 euros, montant intégralement déduit des honoraires si
              vous nous confiez votre dossier. Cette formule vous permet de bénéficier d'une évaluation approfondie sans
              engagement, tout en profitant d'une tarification avantageuse si vous poursuivez avec nous.
            </p>
          </div>
        </div>

        <div className="-mt-6 sm:-mt-8">
          <Link
            href="#prestations"
            className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#EEC96D] px-4 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-neutral-900 shadow hover:bg-[#e1bb57] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
          >
            Découvrez nos Services
          </Link>
        </div>
      </div>
    </section>
  );
}
