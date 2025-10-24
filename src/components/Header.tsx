"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Accueil", match: (p: string) => p === "/" },
	{ href: "/prestations", label: "Prestations", match: (p: string) => p.startsWith("/prestations") },
	{ href: "/a-propos", label: "A propos", match: (p: string) => p.startsWith("/a-propos") },
	{ href: "/actualites", label: "Actualités", match: (p: string) => p.startsWith("/actualites") },
	{ href: "/contacts", label: "Contacts", match: (p: string) => p.startsWith("/contacts") },
];

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="md:sticky md:top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
			<div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-8 sm:py-6 md:py-8">
				<Link href="/" className="absolute md:top-6 left-4 md:left-0 xl:left-30 2xl:left-90 items-center gap-3 shrink-0">
					<div className="relative h-24 w-22 md:h-32 md:w-30">
						<Image src="/logo-default.png" alt="Logo Pierre-Yves CHICOT" fill className="object-contain" />
					</div>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center justify-end flex-1 gap-6 lg:gap-8">
								{navItems.map((item) => {
									const isActive = item.match(pathname ?? "/");
						return (
							<Link
								key={item.href}
								href={item.href}
								className={
									"text-base lg:text-lg font-semibold transition-colors whitespace-nowrap " +
									(isActive ? "text-[#E0B95C]" : "text-neutral-900 hover:text-[#E0B95C]")
								}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				{/* Mobile button */}
				<button
					onClick={() => setOpen((v) => !v)}
					className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors"
					aria-expanded={open}
					aria-controls="mobile-nav"
					aria-label="Ouvrir le menu"
				>
					<span className="sr-only">Menu</span>
					<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</button>
			</div>

			{/* Mobile nav */}
			{open && (
				<div id="mobile-nav" className="md:hidden border-t border-neutral-200 bg-white">
					<nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
						{navItems.map((item) => {
							const isActive = item.match(pathname ?? "/");
							return (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
									className={
										"rounded-md px-3 py-2.5 text-base font-semibold transition-colors " +
										(isActive ? "bg-[#EEC96D]/20 text-[#E0B95C]" : "text-neutral-900 hover:bg-neutral-100")
									}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>
				</div>
			)}
		</header>
	);
}

