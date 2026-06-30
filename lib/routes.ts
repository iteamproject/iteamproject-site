export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];

export const routes = {
  root: "/",
  home: {
    it: "/it",
    en: "/en",
  },
  about: {
    it: "/it/chi-siamo",
    en: "/en/about",
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
  servicesIndex: {
    it: "/it/servizi",
    en: "/en/services",
  },
  sectorsIndex: {
    it: "/it/settori",
    en: "/en/sectors",
  },
  contact: {
    it: "/it/contatti",
    en: "/en/contact",
  },
  services: {
    itGovernance: {
      it: "/it/servizi/it-governance",
      en: "/en/services/it-governance",
    },
    itServiceManagement: {
      it: "/it/servizi/it-service-management",
      en: "/en/services/it-service-management",
    },
    projectDeliveryControl: {
      it: "/it/servizi/project-delivery-control",
      en: "/en/services/project-delivery-control",
    },
    auditComplianceLogging: {
      it: "/it/servizi/audit-compliance-logging",
      en: "/en/services/audit-compliance-logging",
    },
  },
  caseHistories: {
    fashionRetailSdwan: {
      it: "/it/case-history/fashion-retail-sdwan",
      en: "/en/case-history/fashion-retail-sdwan",
    },
    itGovernanceServiceManagement: {
      it: "/it/case-history/it-governance-service-management",
      en: "/en/case-history/it-governance-service-management",
    },
  },
} as const;
