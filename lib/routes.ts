export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];

export const routes = {
  root: "/",
  home: {
    it: "/it",
    en: "/en",
  },
  privacy: {
    it: "/it/privacy-policy",
    en: "/en/privacy-policy",
  },
  cookies: {
    it: "/it/cookie-policy",
    en: "/en/cookie-policy",
  },
  caseHistoryIndex: {
    it: "/it/case-history",
    en: "/en/case-history",
  },
  caseHistories: {
    fashionRetailSdwan: {
      it: "/it/case-history/fashion-retail-sdwan",
      en: "/en/case-history/fashion-retail-sdwan",
    },
  },
} as const;
