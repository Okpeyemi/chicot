import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:gap-12">
        {/* Text content */}
        <div className="text-neutral-900 text-lg sm:text-xl leading-8 sm:leading-9">
          <div className="flex justify-between gap-8">
            <p className="flex-1 text-justify text-3xl">
            Maître <strong>Pierre-Yves CHICOT</strong> est un avocat et consultant reconnu, diplômé de
            plusieurs universités prestigieuses (Jules Vernes Amiens, Paris–Ouest La Défense, Paris
            Panthéon–Sorbonne, Caen–Basse–Normandie). Avec une double formation en droit public et droit
            privé, il dispose d’une expertise unique pour traiter des dossiers complexes dans des domaines
            variés : droit pénal, civil, public, droit des étrangers, politiques publiques et sciences politiques.
          </p>

          <div className="relative w-[300px] overflow-hidden rounded-[24px] shadow-md">
            <Image
              src="/maitre-pierre-yves-chicot.png"
              alt="Portrait de Maître Pierre-Yves CHICOT"
              fill
              className="object-cover"
              priority
            />
          </div>
          </div>

          <p className="mt-6 text-3xl">
            Fort de 25 ans d’expérience en tant que cadre dirigeant dans les secteurs public et privé, Maître
            CHICOT excelle dans l’analyse, le conseil, la formation et la représentation en justice. Il est également :
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-2 text-3xl">
            <li>Professeur des universités en facultés de droit</li>
            <li>Avocat au barreau de Guadeloupe, Saint–Martin et Saint–Barthélemy</li>
            <li>Consultant en politiques publiques et formateur</li>
            <li>Déontologue, analyste pour les médias et responsable associatif et écrivain</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
