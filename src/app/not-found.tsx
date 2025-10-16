import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        {/* Logo ou icône */}
        <div className="relative mx-auto h-24 w-20 sm:h-32 sm:w-28 md:h-40 md:w-36 mb-8">
          <Image
            src="/logo-default.png"
            alt="Logo Pierre-Yves CHICOT"
            fill
            className="object-contain opacity-50"
          />
        </div>

        {/* Titre 404 */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#EEC96D]">
            404
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 bg-[#EEC96D] mx-auto rounded-full" />
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
          Page introuvable
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 px-4">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          Veuillez vérifier l'URL ou retourner à la page d'accueil.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#EEC96D] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-neutral-900 shadow hover:bg-[#e1bb57] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Retour à l'accueil
          </Link>

          <Link
            href="/contacts"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-200 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-neutral-700 shadow hover:bg-neutral-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            Nous contacter
          </Link>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm sm:text-base text-neutral-600 mb-4">
            Pages populaires :
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <Link
              href="/prestations"
              className="text-neutral-700 hover:text-[#E0B95C] transition-colors underline"
            >
              Prestations
            </Link>
            <Link
              href="/a-propos"
              className="text-neutral-700 hover:text-[#E0B95C] transition-colors underline"
            >
              À propos
            </Link>
            <Link
              href="/blog"
              className="text-neutral-700 hover:text-[#E0B95C] transition-colors underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
