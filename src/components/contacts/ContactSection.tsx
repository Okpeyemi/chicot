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
    // eslint-disable-next-line no-console
    console.log("contact form:", data);
    alert("Votre message a bien été pris en compte. Merci !");
    setData({ email: "", phone: "", name: "", subject: "", message: "" });
  };

  const inputCls =
    "w-full rounded-xl bg-neutral-100 px-4 py-3 text-neutral-900 placeholder-neutral-500 outline-none ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-400";

  return (
    <section className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,0.9fr)]">
        {/* Form */}
        <div>
          <h2 className="sr-only">Formulaire de contact</h2>
          <p className="mb-4 text-center text-2xl">Formulaire :</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded-2xl bg-[#EEC96D] px-6 py-3 text-3xl font-semibold text-neutral-900 shadow hover:bg-[#e1bb57] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEC96D]"
              >
                Envoyer
              </button>
              <p className="text-sm text-neutral-600">Nous vous répondrons sous 24h !</p>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-full w-px bg-[#EEC96D] mx-auto" aria-hidden="true" />

        {/* Details */}
        <div>
          <h2 className="text-4xl font-semibold text-neutral-900">Coordonnées</h2>
          <dl className="mt-6 space-y-3 text-neutral-900 text-2xl">
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
