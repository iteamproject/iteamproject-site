import { routes, type Locale } from "@/lib/routes";

export const navigationByLocale: Record<Locale, { label: string; href: string }[]> = {
  it: [
    { label: "Home", href: routes.home.it },
    { label: "Case History", href: routes.caseHistoryIndex.it },
    { label: "Privacy Policy", href: routes.privacy.it },
    { label: "Cookie Policy", href: routes.cookies.it },
  ],
  en: [
    { label: "Home", href: routes.home.en },
    { label: "Case Studies", href: routes.caseHistoryIndex.en },
    { label: "Privacy Policy", href: routes.privacy.en },
    { label: "Cookie Policy", href: routes.cookies.en },
  ],
};
