import type { Metadata } from "next";
import { serviceDetails, type ServiceSlug } from "@/data/services";
import { site } from "@/data/site";
import { routes, type Locale } from "./routes";

const defaultOgImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: site.name,
};

const localeMap: Record<Locale, string> = {
  it: "it_IT",
  en: "en_US",
};

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  languages?: Record<Locale, string>;
  type?: "website" | "article";
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  languages,
  type = "website",
  keywords,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languages
        ? {
            it: absoluteUrl(languages.it),
            en: absoluteUrl(languages.en),
            "x-default": absoluteUrl(languages.it),
          }
        : undefined,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: localeMap[locale],
      type,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export const rootMetadata = createPageMetadata({
  title: "iTeamProject SNC | Consulenza IT, IT Governance e Service Management a Firenze",
  description:
    "iTeamProject SNC offre consulenza IT a Firenze per aziende: IT Governance, Service Management, coordinamento tecnico-operativo, KPI, SLA, audit, compliance e controllo delle performance di servizio.",
  path: routes.home.it,
  locale: "it",
  languages: routes.home,
  keywords: [
    "iTeamProject SNC",
    "Consulenza IT Firenze",
    "IT Governance Firenze",
    "IT Service Management Firenze",
    "Servizi IT aziende Firenze",
    "KPI IT",
    "SLA",
    "IT Operations",
    "Audit IT",
    "Compliance IT",
  ],
});

export const homeMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "iTeamProject SNC | Consulenza IT, IT Governance e Service Management a Firenze",
    description:
      "iTeamProject SNC offre consulenza IT a Firenze per aziende: IT Governance, Service Management, coordinamento tecnico-operativo, KPI, SLA, audit, compliance e controllo delle performance di servizio.",
    path: routes.home.it,
    locale: "it",
    languages: routes.home,
    keywords: rootMetadata.keywords as string[],
  }),
  en: createPageMetadata({
    title: "iTeamProject SNC | IT Consulting, IT Governance and Service Management",
    description:
      "iTeamProject supports companies with IT governance, service management, technical coordination, KPIs, SLAs, audit, compliance and delivery control.",
    path: routes.home.en,
    locale: "en",
    languages: routes.home,
  }),
};

export const aboutMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "Chi siamo | iTeamProject",
    description:
      "iTeamProject affianca aziende e management nella governance IT, nel service management e nel controllo operativo dei servizi IT.",
    path: routes.about.it,
    locale: "it",
    languages: routes.about,
    keywords: [
      "iTeamProject",
      "chi siamo",
      "consulenza IT Firenze",
      "governance IT",
      "service management",
    ],
  }),
  en: createPageMetadata({
    title: "About | iTeamProject",
    description:
      "iTeamProject supports companies and leadership with IT governance, service management and operational control of IT services.",
    path: routes.about.en,
    locale: "en",
    languages: routes.about,
    keywords: [
      "iTeamProject",
      "about",
      "IT consulting",
      "IT governance",
      "service management",
    ],
  }),
};

export const caseHistoryIndexMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "Case History | iTeamProject",
    description:
      "Progetti reali di governance IT, coordinamento tecnico e trasformazione infrastrutturale curati da iTeamProject.",
    path: routes.caseHistoryIndex.it,
    locale: "it",
    languages: routes.caseHistoryIndex,
  }),
  en: createPageMetadata({
    title: "Case Studies | iTeamProject",
    description:
      "Real projects where iTeamProject delivered IT governance, technical coordination and infrastructure transformation outcomes.",
    path: routes.caseHistoryIndex.en,
    locale: "en",
    languages: routes.caseHistoryIndex,
  }),
};

export const serviceIndexMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "Servizi IT | Governance, Service Management e Delivery Control",
    description:
      "Servizi di consulenza IT per governance, service management, project delivery control, audit, compliance e logging.",
    path: routes.servicesIndex.it,
    locale: "it",
    languages: routes.servicesIndex,
  }),
  en: createPageMetadata({
    title: "IT Services | Governance, Service Management and Delivery Control",
    description:
      "IT consulting services for governance, service management, project delivery control, audit, compliance and logging.",
    path: routes.servicesIndex.en,
    locale: "en",
    languages: routes.servicesIndex,
  }),
};

export const sectorIndexMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "Settori e contesti IT | iTeamProject",
    description:
      "Contesti in cui iTeamProject porta valore: retail multi-sede, PMI strutturate, fornitori IT multipli, audit, compliance e trasformazioni IT.",
    path: routes.sectorsIndex.it,
    locale: "it",
    languages: routes.sectorsIndex,
    keywords: [
      "settori IT",
      "retail multi-sede",
      "PMI strutturate",
      "governance fornitori IT",
      "audit compliance logging",
    ],
  }),
  en: createPageMetadata({
    title: "Sectors and IT contexts | iTeamProject",
    description:
      "Contexts where iTeamProject delivers value: multi-site retail, structured SMEs, multiple IT vendors, audit, compliance and IT transformations.",
    path: routes.sectorsIndex.en,
    locale: "en",
    languages: routes.sectorsIndex,
    keywords: [
      "IT sectors",
      "multi-site retail",
      "structured SMEs",
      "IT vendor governance",
      "audit compliance logging",
    ],
  }),
};

export const contactMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "Contatti | iTeamProject",
    description:
      "Contatta iTeamProject per una prima valutazione su governance IT, service management, audit, compliance e controllo delivery.",
    path: routes.contact.it,
    locale: "it",
    languages: routes.contact,
    keywords: [
      "contatti iTeamProject",
      "consulenza IT Firenze",
      "governance IT",
      "service management",
      "audit compliance IT",
    ],
  }),
  en: createPageMetadata({
    title: "Contact | iTeamProject",
    description:
      "Contact iTeamProject for an initial assessment on IT governance, service management, audit, compliance and delivery control.",
    path: routes.contact.en,
    locale: "en",
    languages: routes.contact,
    keywords: [
      "iTeamProject contact",
      "IT consulting",
      "IT governance",
      "service management",
      "IT audit compliance",
    ],
  }),
};

export function serviceMetadata(slug: ServiceSlug, locale: Locale): Metadata {
  const service = serviceDetails[slug][locale];

  return createPageMetadata({
    title: `${service.title} | iTeamProject`,
    description: service.text,
    path: service.path[locale],
    locale,
    languages: service.path,
    keywords:
      locale === "it"
        ? ["consulenza IT", service.title, "IT Governance", "IT Service Management"]
        : ["IT consulting", service.title, "IT Governance", "IT Service Management"],
  });
}

export const fashionRetailSdwanMetadata: Record<Locale, Metadata> = {
  it: createPageMetadata({
    title: "Case History Fashion Retail | SD-WAN Enterprise e riduzione costi IT",
    description:
      "Come una primaria azienda italiana del Fashion Retail con oltre 100 punti vendita ha ridotto i costi IT fino al 40% grazie a una nuova architettura SD-WAN Enterprise.",
    path: routes.caseHistories.fashionRetailSdwan.it,
    locale: "it",
    languages: routes.caseHistories.fashionRetailSdwan,
    type: "article",
    keywords: [
      "case history sdwan",
      "sd-wan retail",
      "retail networking",
      "networking multi-sede",
      "it governance retail",
      "fashion retail it",
      "riduzione costi IT",
      "infrastruttura IT retail",
    ],
  }),
  en: createPageMetadata({
    title: "Fashion Retail Case Study | Enterprise SD-WAN and IT Cost Reduction",
    description:
      "How a major Italian Fashion Retail company with over 100 stores reduced IT costs through a new Enterprise SD-WAN architecture.",
    path: routes.caseHistories.fashionRetailSdwan.en,
    locale: "en",
    languages: routes.caseHistories.fashionRetailSdwan,
    type: "article",
  }),
};

export const policyMetadata = {
  privacy: {
    it: createPageMetadata({
      title: "Privacy Policy | iTeamProject",
      description:
        "Privacy Policy di iTeamProject SNC relativa al trattamento dei dati personali e all'utilizzo del sito web.",
      path: routes.privacy.it,
      locale: "it",
      languages: routes.privacy,
    }),
    en: createPageMetadata({
      title: "Privacy Policy | iTeamProject",
      description:
        "iTeamProject privacy policy regarding personal data processing and website usage.",
      path: routes.privacy.en,
      locale: "en",
      languages: routes.privacy,
    }),
  },
  cookies: {
    it: createPageMetadata({
      title: "Cookie Policy | iTeamProject",
      description:
        "Cookie Policy di iTeamProject relativa all'utilizzo di cookie tecnici e strumenti analytics sul sito web.",
      path: routes.cookies.it,
      locale: "it",
      languages: routes.cookies,
    }),
    en: createPageMetadata({
      title: "Cookie Policy | iTeamProject",
      description:
        "iTeamProject cookie policy regarding technical cookies and analytics tools used on the website.",
      path: routes.cookies.en,
      locale: "en",
      languages: routes.cookies,
    }),
  },
} as const;

export const legacyMetadata = {
  privacy: createPageMetadata({
    title: "Privacy Policy | iTeamProject",
    description:
      "Privacy Policy di iTeamProject SNC relativa al trattamento dei dati personali e all'utilizzo del sito web.",
    path: "/privacy-policy",
    locale: "it",
  }),
  cookies: createPageMetadata({
    title: "Cookie Policy | iTeamProject",
    description:
      "Cookie Policy di iTeamProject relativa all'utilizzo di cookie tecnici e strumenti analytics sul sito web.",
    path: "/cookie-policy",
    locale: "it",
  }),
  fashionRetailSdwan: createPageMetadata({
    title: "Case History Fashion Retail | SD-WAN Enterprise e riduzione costi IT",
    description:
      "Come una primaria azienda italiana del Fashion Retail con oltre 100 punti vendita ha ridotto i costi IT fino al 40% grazie a una nuova architettura SD-WAN Enterprise.",
    path: "/case-history/fashion-retail-sdwan",
    locale: "it",
    type: "article",
  }),
} as const;
