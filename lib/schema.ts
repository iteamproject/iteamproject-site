import { caseHistories, type CaseHistorySlug } from "@/data/caseHistories";
import { serviceDetails, type ServiceSlug } from "@/data/services";
import { site } from "@/data/site";
import { routes, type Locale } from "./routes";

type JsonLd = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  path: string;
};

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

const organizationId = `${site.url}/#organization`;
const professionalServiceId = `${site.url}/#professionalservice`;

const caseHistoryDates: Record<
  CaseHistorySlug,
  { datePublished: string; dateModified: string }
> = {
  "fashion-retail-sdwan": {
    datePublished: "2026-06-29",
    dateModified: "2026-06-30",
  },
  "it-governance-service-management": {
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
  },
};

export function organizationSchema(): JsonLd {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/android-chrome-512x512.png"),
    email: site.email,
    vatID: site.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Cassia, 4",
      postalCode: "50124",
      addressLocality: "Firenze",
      addressRegion: "FI",
      addressCountry: "IT",
    },
  };
}

export function professionalServiceSchema(locale: Locale): JsonLd {
  const description = {
    it: "Consulenza IT per governance, service management, coordinamento tecnico, audit, compliance e controllo delle performance di servizio.",
    en: "IT consulting for governance, service management, technical coordination, audit, compliance and service performance control.",
  };

  return {
    "@type": "ProfessionalService",
    "@id": professionalServiceId,
    name: site.name,
    url: site.url,
    description: description[locale],
    email: site.email,
    parentOrganization: {
      "@id": organizationId,
    },
    areaServed: {
      "@type": "Country",
      name: locale === "it" ? "Italia" : "Italy",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Cassia, 4",
      postalCode: "50124",
      addressLocality: "Firenze",
      addressRegion: "FI",
      addressCountry: "IT",
    },
    knowsAbout:
      locale === "it"
        ? [
            "IT Governance",
            "IT Service Management",
            "Project & Delivery Control",
            "Audit IT",
            "Compliance IT",
            "Logging",
          ]
        : [
            "IT Governance",
            "IT Service Management",
            "Project & Delivery Control",
            "IT Audit",
            "IT Compliance",
            "Logging",
          ],
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(slug: CaseHistorySlug, locale: Locale): JsonLd {
  const caseHistory = caseHistories[slug][locale];
  const path = caseHistory.path[locale];
  const dates = caseHistoryDates[slug];

  return {
    "@type": "Article",
    headline: caseHistory.detail.title,
    description: caseHistory.detail.intro,
    image: absoluteUrl("/og-image.jpg"),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    datePublished: dates.datePublished,
    dateModified: dates.dateModified,
    inLanguage: locale,
    author: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
  };
}

export function homeStructuredData(locale: Locale): JsonLd[] {
  return [
    organizationSchema(),
    professionalServiceSchema(locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
    ]),
  ];
}

export function aboutStructuredData(locale: Locale): JsonLd[] {
  return [
    organizationSchema(),
    professionalServiceSchema(locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Chi siamo" : "About",
        path: routes.about[locale],
      },
    ]),
  ];
}

export function caseHistoryIndexStructuredData(locale: Locale): JsonLd[] {
  return [
    organizationSchema(),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Case History" : "Case Studies",
        path: routes.caseHistoryIndex[locale],
      },
    ]),
  ];
}

export function serviceIndexStructuredData(locale: Locale): JsonLd[] {
  return [
    organizationSchema(),
    professionalServiceSchema(locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Servizi" : "Services",
        path: routes.servicesIndex[locale],
      },
    ]),
  ];
}

export function sectorIndexStructuredData(locale: Locale): JsonLd[] {
  return [
    organizationSchema(),
    professionalServiceSchema(locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Settori" : "Sectors",
        path: routes.sectorsIndex[locale],
      },
    ]),
  ];
}

export function contactStructuredData(locale: Locale): JsonLd[] {
  return [
    organizationSchema(),
    professionalServiceSchema(locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Contatti" : "Contact",
        path: routes.contact[locale],
      },
    ]),
  ];
}

export function serviceStructuredData(slug: ServiceSlug, locale: Locale): JsonLd[] {
  const service = serviceDetails[slug][locale];

  return [
    organizationSchema(),
    professionalServiceSchema(locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Servizi" : "Services",
        path: routes.servicesIndex[locale],
      },
      {
        name: service.title,
        path: service.path[locale],
      },
    ]),
  ];
}

export function caseHistoryStructuredData(
  slug: CaseHistorySlug,
  locale: Locale
): JsonLd[] {
  const caseHistory = caseHistories[slug][locale];

  return [
    organizationSchema(),
    articleSchema(slug, locale),
    breadcrumbSchema([
      {
        name: locale === "it" ? "Home" : "Home",
        path: routes.home[locale],
      },
      {
        name: locale === "it" ? "Case History" : "Case Studies",
        path: routes.caseHistoryIndex[locale],
      },
      {
        name: caseHistory.listing.title,
        path: caseHistory.path[locale],
      },
    ]),
  ];
}
