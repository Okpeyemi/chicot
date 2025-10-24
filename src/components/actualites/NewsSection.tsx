type NewsItem = {
  title: string;
  description: string;
  videoUrl: string; // Peut être une URL YouTube ou un chemin vers un fichier local (ex: "/video.mp4")
};

const ITEMS: NewsItem[] = [
  {
    title: "Thématique: troubles anormaux du voisinage",
    description:
      "Que dit la loi ?",
    videoUrl: "/video.mp4",
  },
];

// Fonction pour extraire l'ID YouTube de différents formats d'URL
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Fonction pour déterminer si c'est une vidéo locale ou YouTube
function isLocalVideo(url: string): boolean {
  return url.startsWith('/') || url.startsWith('./') || !url.includes('youtube') && !url.includes('youtu.be');
}

export default function NewsSection({ items = ITEMS }: { items?: NewsItem[] }) {
  return (
    <section className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        {items.map((item, idx) => {
          const isLocal = isLocalVideo(item.videoUrl);
          const videoId = !isLocal ? getYouTubeVideoId(item.videoUrl) : null;

          return (
            <article key={idx} className="space-y-6">
              {/* Vidéo (YouTube ou locale) */}
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
                {isLocal ? (
                  // Vidéo locale (MP4, WebM, etc.)
                  <video
                    className="w-full h-auto rounded-xl"
                    controls
                    preload="metadata"
                    playsInline
                    controlsList="nodownload"
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                ) : videoId ? (
                  // Vidéo YouTube
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : null}
              </div>

              {/* Titre de la thématique */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
                {item.description}
              </p>

              {/* Séparateur entre les vidéos */}
              {idx < items.length - 1 && <hr className="mt-8 border-neutral-300" />}
            </article>
          );
        })}
      </div>
    </section>
  );
}
