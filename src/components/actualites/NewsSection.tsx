import Image from "next/image";

type NewsItem = {
  title: string;
  excerpt: string;
  imageSrc?: string;
  publishedAt: string;
  source?: string;
};

const ITEMS: NewsItem[] = [
  {
    title: "Emission 1 - Thème",
    excerpt:
      "Consultant reconnu, diplômé de plusieurs universités prestigieuses (Jules Vernes Amiens, Paris–Ouest La Défense, Paris Panthéon–Sorbonne, Caen–Basse–Normandie). Avec une double formation en droit public et droit privé, …",
    imageSrc: "/actualite.png",
    publishedAt: "22 octobre 2025 à 15h32",
    source: "France 24",
  },
  {
    title: "PODCAST 2 - Thème",
    excerpt:
      "Consultant reconnu, diplômé de plusieurs universités prestigieuses (Jules Vernes Amiens, Paris–Ouest La Défense, Paris Panthéon–Sorbonne, Caen–Basse–Normandie). Avec une double formation en droit public et droit privé, …",
    imageSrc: "/actualite.png",
    publishedAt: "22 octobre 2025 à 15h32",
    source: "France 24",
  },
];

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.9" />
      <path d="M10 8l6 4-6 4V8z" fill="#000" />
    </svg>
  );
}

export default function NewsSection({ items = ITEMS }: { items?: NewsItem[] }) {
  return (
    <section className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-14">
        {items.map((item, idx) => (
          <div key={idx}>
            <article className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_420px] md:gap-10">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl leading-9 text-neutral-900">{item.excerpt}</p>
              </div>

              <figure>
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl shadow sm:h-[260px] md:h-[240px]">
                  <Image
                    src={item.imageSrc || "/actualite.png"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayIcon className="h-16 w-16 drop-shadow" />
                  </div>
                </div>
                <figcaption className="mt-3 text-center md:text-left text-sm text-neutral-700">
                  Publiée le {item.publishedAt}
                  {item.source ? ` - ${item.source}` : ""}
                </figcaption>
              </figure>
            </article>

            {idx < items.length - 1 && <hr className="mt-6 border-neutral-300" />}
          </div>
        ))}
      </div>
    </section>
  );
}
