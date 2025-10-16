"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Accueil", match: (p: string) => p === "/" },
	{ href: "/prestations", label: "Prestations", match: (p: string) => p.startsWith("/prestations") },
	{ href: "/a-propos", label: "A propos", match: (p: string) => p.startsWith("/a-propos") },
	{ href: "/blog", label: "Blog", match: (p: string) => p.startsWith("/blog") },
	{ href: "/contacts", label: "Contacts", match: (p: string) => p.startsWith("/contacts") },
];

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-10">
				<Link href="/" className="absolute top-5 items-center gap-3 ">
					<div className="relative h-12 w-10 sm:h-40 sm:w-30">
						<Image src="/logo-default.png" alt="Logo Pierre-Yves CHICOT" fill className="object-contain" />
					</div>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center justify-end w-full gap-8">
								{navItems.map((item) => {
									const isActive = item.match(pathname ?? "/");
						return (
							<Link
								key={item.href}
								href={item.href}
								className={
									"text-lg font-semibold transition-colors " +
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
					className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-700"
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
					<nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="rounded-md px-2 py-2 text-base font-semibold text-neutral-900 hover:bg-neutral-100"
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}

