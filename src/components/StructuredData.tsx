import { siteConfig } from "@/lib/metadata";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo-default.png`,
    "image": siteConfig.ogImage,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Immeuble Gaëlle, 58 Faubourg Victor Hugo",
      "addressLocality": "Pointe-à-Pitre",
      "postalCode": "97110",
      "addressRegion": "Guadeloupe",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.2415",
      "longitude": "-61.5331"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Guadeloupe"
      },
      {
        "@type": "Place",
        "name": "Martinique"
      },
      {
        "@type": "Place",
        "name": "Saint-Martin"
      },
      {
        "@type": "Place",
        "name": "Saint-Barthélemy"
      }
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pierre-Yves CHICOT",
    "jobTitle": "Avocat et Consultant",
    "worksFor": {
      "@type": "LegalService",
      "name": siteConfig.name
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Université Jules Vernes Amiens"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Université Paris-Ouest La Défense"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Université Paris Panthéon-Sorbonne"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Université de Caen-Basse-Normandie"
      }
    ],
    "knowsAbout": [
      "Droit pénal",
      "Droit civil",
      "Droit public",
      "Droit des étrangers",
      "Politiques publiques"
    ],
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pointe-à-Pitre",
      "addressRegion": "Guadeloupe",
      "addressCountry": "FR"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Prestations",
        "item": `${siteConfig.url}/prestations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "À Propos",
        "item": `${siteConfig.url}/a-propos`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteConfig.url}/contacts`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
