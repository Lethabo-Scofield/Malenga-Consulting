import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  /** Path beginning with "/". */
  path: string;
};

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path }: PageMeta): Metadata {
  const url = path;
  const full = title.includes(site.name) ? title : `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: site.name,
      title: full,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo.png`,
  image: `${site.url}/brand/logo.png`,
  description: site.description,
  slogan: site.motto,
  email: site.contact.email,
  telephone: site.contact.telephone.href,
  areaServed: { "@type": "Country", name: "South Africa" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.locality,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.contact.telephone.href,
      email: site.contact.email,
      areaServed: "ZA",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.contact.mobile.href,
      areaServed: "ZA",
      availableLanguage: "English",
    },
  ],
};

/** Safe JSON-LD serialisation for use inside a script tag. */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
