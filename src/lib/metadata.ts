import { Metadata } from "next";

export const siteConfig = {
  name: "Cabinet Pierre-Yves CHICOT",
  title: "Pierre-Yves CHICOT - Avocat et Consultant en Guadeloupe",
  description: "Cabinet d'avocat et de conseil juridique en Guadeloupe. Expertise en droit public, droit privé, droit pénal et politiques publiques. 25 ans d'expérience.",
  url: "https://pierreyveschicot.com",
  ogImage: "https://pierreyveschicot.com/og-image.jpg",
  author: "Pierre-Yves CHICOT",
  keywords: [
    "avocat Guadeloupe",
    "cabinet avocat Pointe-à-Pitre",
    "droit pénal Guadeloupe",
    "droit civil Guadeloupe",
    "droit public Guadeloupe",
    "consultant juridique",
    "Pierre-Yves CHICOT",
    "avocat Saint-Martin",
    "avocat Saint-Barthélemy",
    "politiques publiques",
    "formation juridique",
    "conseil juridique Antilles",
    "droit des étrangers",
    "représentation justice Guadeloupe"
  ],
  contact: {
    email: "pyc971@yahoo.fr",
    phone: "+590 0690 80 22 64",
    address: "Immeuble Gaëlle, 58 Faubourg Victor Hugo, 97110 Pointe-à-Pitre, Guadeloupe"
  },
  social: {
    instagram: "#",
    facebook: "#",
    whatsapp: "#"
  }
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@pierreyveschicot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  const url = `${siteConfig.url}${path}`;
  
  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
