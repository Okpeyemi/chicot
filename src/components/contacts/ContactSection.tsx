"use client";

import { useState } from "react";

type FormData = {
  email: string;
  phone: string;
  name: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [data, setData] = useState<FormData>({
    email: "",
    phone: "",
    name: "",
    subject: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: brancher à une action/serverless route. Pour l'instant on log.
    console.log("contact form:", data);
    alert("Votre message a bien été pris en compte. Merci !");
    setData({ email: "", phone: "", name: "", subject: "", message: "" });
  };

  const inputCls =
    "w-full rounded-xl bg-neutral-100 px-4 py-3 text-foreground placeholder-foreground/50 outline-none ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-400";

  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,0.9fr)]">
        {/* Form */}
        <div>
          <h2 className="sr-only">Formulaire de contact</h2>
          <p className="mb-3 sm:mb-4 text-center text-lg sm:text-xl md:text-2xl font-semibold">Formulaire :</p>

          <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                required
                value={data.email}
                onChange={onChange}
                placeholder="Votre mail *"
                className={inputCls}
              />
              <input
                type="tel"
                name="phone"
                required
                value={data.phone}
                onChange={onChange}
                placeholder="Téléphone *"
                className={inputCls}
              />
            </div>

            <input
              type="text"
              name="name"
              required
              value={data.name}
              onChange={onChange}
              placeholder="Nom et prénoms *"
              className={inputCls}
            />

            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={onChange}
              placeholder="Objet de votre demande"
              className={inputCls}
            />

            <textarea
              name="message"
              required
              rows={5}
              value={data.message}
              onChange={onChange}
              placeholder="Message *"
              className={inputCls}
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl sm:rounded-2xl bg-[#EEC96D] px-5 py-2.5 sm:px-6 sm:py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground shadow hover:bg-[#e1bb57] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
              >
                Envoyer
              </button>
              <p className="text-xs sm:text-sm text-foreground/60 text-center sm:text-left">Nous vous répondrons sous 24h !</p>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-full w-px bg-[#EEC96D] mx-auto" aria-hidden="true" />

        {/* Details */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">Coordonnées</h2>
          <dl className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3 text-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <div className="">
              <dt className="font-semibold">Adresse :</dt>
              <dd>Immeuble Gaëlle, 58 Faubourg Victor Hugo, 97110 Pointe-à-Pitre, Guadeloupe</dd>
            </div>
            <div>
              <dt className="font-semibold">Email :</dt>
              <dd>pyc971@yahoo.fr  (pour les services d’avocat)</dd>
            </div>
            <div>
              <dt className="font-semibold">Email :</dt>
              <dd>contact@pierreyveschicot.com  (pour les demandes de consulting et formations)</dd>
            </div>
            <div>
              <dt className="font-semibold">Téléphone :</dt>
              <dd>+590 0690 80 22 64</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
