"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
	{ href: "/", label: "Accueil", match: (p: string) => p === "/" },
	{ href: "/prestations", label: "Prestations", match: (p: string) => p.startsWith("/prestations") },
	{ href: "/a-propos", label: "A propos", match: (p: string) => p.startsWith("/a-propos") },
	{ href: "/actualites", label: "Actualités", match: (p: string) => p.startsWith("/actualites") },
	{ href: "/contacts", label: "Contacts", match: (p: string) => p.startsWith("/contacts") },
];

export default function MobileTopNav() {
	const pathname = usePathname();

	return (
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className="md:hidden sticky top-0 z-50 w-full bg-[#E0B95C] border-b border-[#D4A84E] shadow-sm"
		>
			<nav className="flex items-center gap-2 px-4 py-2.5 overflow-x-auto scrollbar-hide">
				{navItems.map((item, index) => {
					const isActive = item.match(pathname ?? "/");
					return (
						<motion.div
							key={item.href}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
								ease: [0.22, 1, 0.36, 1]
							}}
						>
							<Link
								href={item.href}
								className={
									"inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all " +
									(isActive
										? "bg-white text-[#E0B95C] shadow-md"
										: "bg-transparent text-white hover:bg-white/20")
								}
							>
								{item.label}
							</Link>
						</motion.div>
					);
				})}
			</nav>
		</motion.div>
	);
}
