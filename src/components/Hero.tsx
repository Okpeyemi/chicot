"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
	{
		src: "/acceuil-hero.jpg",
		alt: "Façade d'un tribunal avec la statue de la justice",
	},
	{
		src: "/acceuil-hero2.jpg",
		alt: "Cabinet d'avocat Pierre-Yves CHICOT",
	},
];

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
		}, 5000); // Change d'image toutes les 5 secondes

		return () => clearInterval(interval);
	}, []);

	return (
		<section aria-label="Section d'introduction" className="relative w-full mb-16 sm:mb-20">
			{/* Background carousel */}
			<div className="relative h-[70vh] min-h-[400px] w-full sm:h-[80vh] lg:h-screen overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1, ease: "easeInOut" }}
						className="absolute inset-0"
					>
						<Image
							src={heroImages[currentIndex].src}
							alt={heroImages[currentIndex].alt}
							fill
							priority={currentIndex === 0}
							className="object-cover"
						/>
					</motion.div>
				</AnimatePresence>

				{/* Carousel indicators */}
				<div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-2 z-10">
					{heroImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full transition-all ${
								index === currentIndex
									? "bg-white w-8"
									: "bg-white/50 hover:bg-white/75"
							}`}
							aria-label={`Aller à l'image ${index + 1}`}
						/>
					))}
				</div>

				{/* Overlay content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="bg-white/65 backdrop-blur-[] shadow-md rounded-md px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 max-w-7xl w-full"
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
						className="absolute left-1/2 -translate-x-1/2 bottom-10"
					>
						<Link
							href="#contact"
							className="block rounded-2xl bg-[#EEC96D] w-fit text-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-900 shadow hover:bg-[#e1bb57] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
						>
							Demander un devis gratuit
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
