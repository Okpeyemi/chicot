"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section aria-label="Section d'introduction" className="relative w-full">
			{/* Background image */}
			<div className="relative h-[70vh] min-h-[400px] w-full sm:h-[80vh] lg:h-screen">
				<Image
					src="/acceuil-hero.png"
					alt="Façade d'un tribunal avec la statue de la justice"
					fill
					priority
					className="object-cover"
				/>

				{/* Overlay content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="bg-white/65 backdrop-blur-sm shadow-md rounded-md px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 max-w-7xl w-full"
					>
						<h1 className="text-center text-neutral-900 text-lg leading-relaxed sm:text-2xl md:text-4xl lg:text-5xl">
							<span className="font-semibold">Pierre-Yves CHICOT</span>
							<span className="font-normal"> : Expertise en Droit et Excellence au service de vos besoins</span>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="absolute left-1/2 -translate-x-1/2 -bottom-8"
					>
						<Link
							href="#contact"
							className="block rounded-md bg-[#EEC96D] px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-900 shadow hover:bg-[#e1bb57] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
						>
							Demander un devis gratuit
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
