import type { Locale } from "@/lib/routes";

export type ContactContent = {
  label: string;
  title: string;
  text: string;
  emailLabel: string;
  pecLabel: string;
  officeLabel: string;
  fiscalLabel: string;
  focusLabel: string;
  focusText: string;
  requestTitle: string;
  requestItems: string[];
  ctaLabel: string;
  relatedTitle: string;
};

export const contactByLocale: Record<Locale, ContactContent> = {
  it: {
    label: "Contatti",
    title: "Parliamo del tuo contesto IT.",
    text:
      "Per una prima valutazione operativa puoi scrivere direttamente a iTeamProject. È sufficiente descrivere il contesto, le criticità principali e l'obiettivo che vuoi raggiungere.",
    emailLabel: "Email",
    pecLabel: "PEC",
    officeLabel: "Sede legale",
    fiscalLabel: "Dati fiscali",
    focusLabel: "Focus consulenziale",
    focusText: "IT Governance · Service Management · Compliance · Delivery",
    requestTitle: "Cosa indicare nella prima richiesta",
    requestItems: [
      "Dimensione e tipo di organizzazione.",
      "Numero di sedi, fornitori o servizi IT coinvolti.",
      "Criticità operative, rischi o obiettivi prioritari.",
      "Eventuali vincoli di audit, compliance o continuità.",
    ],
    ctaLabel: "Scrivi a iTeamProject",
    relatedTitle: "Prima di contattarci puoi anche consultare",
  },
  en: {
    label: "Contact",
    title: "Let's discuss your IT context.",
    text:
      "For an initial operational assessment, you can write directly to iTeamProject. A short description of your context, key issues and target outcome is enough to start.",
    emailLabel: "Email",
    pecLabel: "Certified email",
    officeLabel: "Registered office",
    fiscalLabel: "Company details",
    focusLabel: "Consulting focus",
    focusText: "IT Governance · Service Management · Compliance · Delivery",
    requestTitle: "What to include in the first request",
    requestItems: [
      "Organization size and type.",
      "Number of sites, vendors or IT services involved.",
      "Operational issues, risks or priority goals.",
      "Any audit, compliance or continuity requirements.",
    ],
    ctaLabel: "Email iTeamProject",
    relatedTitle: "Before contacting us, you can also review",
  },
};
