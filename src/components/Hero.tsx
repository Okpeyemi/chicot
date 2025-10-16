import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section aria-label="Section d'introduction" className="relative w-full">
			{/* Background image */}
			<div className="relative h-[60vh] min-h-[320px] w-full sm:h-[80vh] lg:h-screen">
				<Image
					src="/acceuil-hero.png"
					alt="Façade d'un tribunal avec la statue de la justice"
					fill
					priority
					className="object-cover"
				/>

				{/* Overlay content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center px-4">
					<div className="bg-white/65 backdrop-blur-sm shadow-md rounded-md px-6 py-5 sm:px-8 sm:py-6 max-w-7xl">
						<h1 className="text-center text-neutral-900 text-xl leading-relaxed sm:text-3xl md:text-5xl">
							<span className="font-semibold">Pierre-Yves CHICOT</span>
							<span className="font-normal"> : Expertise en Droit et Excellence au service de vos besoins</span>
						</h1>
					</div>

					<div className="mt-30">
						<Link
							href="#contact"
							className="inline-block rounded-md bg-[#EEC96D] px-6 py-3 text-lg md:text-2xl font-medium text-neutral-900 shadow hover:bg-[#EEC96D]/[0.8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]/[0.9]"
						>
							Demander un devis gratuit
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

