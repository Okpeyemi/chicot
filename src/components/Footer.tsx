import Image from "next/image";
import Link from "next/link";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11.25 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13.5 9.5V7.75c0-.74.6-1.25 1.5-1.25h1V3.5h-2c-2.76 0-4.5 1.64-4.5 4.25V9.5H7v3h2.5v8h3.5v-8H16l.5-3h-3z"
      />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M17.47 14.3c-.27-.13-1.6-.8-1.85-.89-.25-.09-.43-.13-.62.13-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.35-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.49.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.46-.07-.13-.62-1.5-.85-2.05-.22-.53-.44-.46-.62-.46-.16 0-.33-.02-.51-.02-.18 0-.46.07-.71.33-.25.27-.97.95-.97 2.31 0 1.36.99 2.68 1.14 2.87.16.18 1.95 2.98 4.72 4.16.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.29.22-.64.22-1.18.16-1.29-.06-.11-.24-.18-.51-.31ZM12.03 2C6.99 2 2.89 6.1 2.89 11.14c0 1.61.41 3.14 1.14 4.48L2 22l6.53-1.96a9.04 9.04 0 0 0 3.5.7c5.04 0 9.14-4.1 9.14-9.14C21.17 6.1 17.07 2 12.03 2Zm0 16.37c-1.43 0-2.77-.42-3.89-1.13l-.28-.18-3.87 1.17 1.17-3.77-.2-.31a7.4 7.4 0 0 1-1.13-3.99 7.48 7.48 0 0 1 7.52-7.52 7.48 7.48 0 0 1 7.52 7.52 7.48 7.48 0 0 1-7.52 7.52Z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-10 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex max-md:flex-col md:gap-12 items-start justify-between">
          {/* Left card */}
          <div className="rounded-md bg-[#EEC96D] p-8 shadow-sm md:p-10">
            <div className="flex items-center">
              <div className="relative h-[162px] w-[116px]">
                <Image src="/logo-dark.png" alt="Logo Pierre-Yves CHICOT" fill className="object-contain" />
              </div>
            </div>

            <div className="mt-8 text-neutral-900">
              <p className="text-xl font-semibold">Coordonnées :</p>
              <dl className="mt-4 space-y-2 text-lg">
                <div className="flex gap-2">
                  <dt className="font-medium">Email :</dt>
                  <dd className="flex-1 font-semibold">pyc971@yahoo.fr (pour les services d’avocat)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium">Téléphone :</dt>
                  <dd className="flex-1 font-semibold">+590 0690 80 22 64</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium">Adresse :</dt>
                  <dd className="flex-1 font-semibold">Immeuble Gaëlle, 58 Faubourg Victor Hugo, 97110 Pointe-à-Pitre, Guadeloupe</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right social + heading */}
          <div className="relative flex flex-col">
            <div className="absolute h-1 w-full bg-[#EEC96D]" />
            <div className=" mt-20">
              <p className="text-xl">Réseaux Sociaux :</p>
              <div className="mt-6 flex items-center gap-5">
                <Link aria-label="Instagram" href="#" className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
                <Link aria-label="Facebook" href="#" className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link aria-label="WhatsApp" href="#" className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <WhatsappIcon className="h-6 w-6" />
                </Link>
              </div>

              <h2 className="mt-10 text-3xl font-semibold">Contactez-nous !</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <p className="flex items-center justify-center gap-2 py-6 text-sm text-neutral-700">
            <span aria-hidden>©</span>
            <span>{year}</span>
            <span className="select-none">—</span>
            <span>Tous droits réservés.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
