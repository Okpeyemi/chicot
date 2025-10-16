"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Spinner animé */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="relative h-8 w-8"
            >
              <div className="absolute inset-0 rounded-full border-4 border-neutral-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#EEC96D] border-t-transparent"></div>
            </motion.div>

            {/* Texte de chargement */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-base sm:text-lg font-semibold text-neutral-700"
            >
              Chargement...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
