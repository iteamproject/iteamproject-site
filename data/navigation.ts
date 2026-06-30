import { routes, type Locale } from "@/lib/routes";

export const navigationByLocale: Record<Locale, { label: string; href: string }[]> = {
  it: [
    { label: "Home", href: routes.home.it },
    { label: "Chi siamo", href: routes.about.it },
    { label: "Servizi", href: routes.servicesIndex.it },
    { label: "Settori", href: routes.sectorsIndex.it },
    { label: "Case History", href: routes.caseHistoryIndex.it },
    { label: "Contatti", href: routes.contact.it },
  ],
  en: [
    { label: "Home", href: routes.home.en },
    { label: "About", href: routes.about.en },
    { label: "Services", href: routes.servicesIndex.en },
    { label: "Sectors", href: routes.sectorsIndex.en },
    { label: "Case Studies", href: routes.caseHistoryIndex.en },
    { label: "Contact", href: routes.contact.en },
  ],
};
