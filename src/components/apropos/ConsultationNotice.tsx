import Image from "next/image";
import Link from "next/link";

export default function ConsultationNotice() {
  return (
    <section className="px-4 pb-12 pt-6 sm:pb-16">
      <div className="text-center">
        <div className="bg-gradient-to-b from-white to-neutral-100 pt-6 pb-30 px-5">
          <div className="flex flex-col items-center">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image src="/attention.png" alt="Attention" fill sizes="48px" className="object-contain" />
            </div>
            <p className="mt-3 mx-auto max-w-6xl text-sm sm:text-base md:text-3xl leading-relaxed text-red-600">
              Nous proposons une première consultation à 200 euros, montant intégralement déduit des honoraires si
              vous nous confiez votre dossier. Cette formule vous permet de bénéficier d’une évaluation approfondie sans
              engagement, tout en profitant d’une tarification avantageuse si vous poursuivez avec nous.
            </p>
          </div>
        </div>

        <div className="-mt-8">
          <Link
            href="#prestations"
            className="inline-flex items-center justify-center rounded-2xl bg-[#EEC96D] px-6 py-3 text-3xl font-semibold text-neutral-900 shadow hover:bg-[#e1bb57] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
          >
            Découvrez nos Services
          </Link>
        </div>
      </div>
    </section>
  );
}
