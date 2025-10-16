"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Démarrer le loader
    setLoading(true);

    // Arrêter le loader après un court délai
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner animé */}
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-200"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#EEC96D] border-t-transparent"></div>
        </div>

        {/* Texte de chargement */}
        <p className="text-base sm:text-lg font-semibold text-neutral-700 animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  );
}
