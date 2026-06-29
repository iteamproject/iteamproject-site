import type { Locale } from "@/lib/routes";

export type ServiceIcon =
  | "shield-check"
  | "settings"
  | "network"
  | "briefcase"
  | "clipboard-list"
  | "bar-chart";

export type ServiceItem = {
  icon: ServiceIcon;
  title: string;
  text: string;
};

export const servicesByLocale: Record<Locale, ServiceItem[]> = {
  it: [
    {
      icon: "shield-check",
      title: "IT Governance",
      text: "Definizione di ruoli, priorità, responsabilità e modello di controllo per rendere l'IT più governato, prevedibile e allineato al business.",
    },
    {
      icon: "settings",
      title: "IT Service Management",
      text: "Disegno e ottimizzazione di processi operativi, SLA, KPI, escalation, presa in carico degli incident e continuità del servizio.",
    },
    {
      icon: "network",
      title: "Infrastructure & Technical Coordination",
      text: "Coordinamento tecnico tra networking, sistemi, cybersecurity, cloud e fornitori con presidio strutturato delle dipendenze operative.",
    },
    {
      icon: "briefcase",
      title: "Project & Delivery Control",
      text: "Supporto su progetti IT complessi con monitoraggio tempi, costi, rischi, avanzamento e qualità dei deliverable.",
    },
    {
      icon: "clipboard-list",
      title: "Audit, Compliance & Logging",
      text: "Assessment tecnici, tracciabilità, segregazione accessi, log management, revisioni periodiche e supporto documentale su requisiti di controllo.",
    },
    {
      icon: "bar-chart",
      title: "Reporting & KPI",
      text: "Dashboard, indicatori, metriche e reporting direzionale per trasformare dati tecnici in decisioni operative misurabili.",
    },
  ],
  en: [
    {
      icon: "shield-check",
      title: "IT Governance",
      text: "Definition of roles, priorities, responsibilities and control model to make IT more governed, predictable and aligned with business goals.",
    },
    {
      icon: "settings",
      title: "IT Service Management",
      text: "Design and optimization of operating processes, SLAs, KPIs, escalations, incident ownership and service continuity.",
    },
    {
      icon: "network",
      title: "Infrastructure & Technical Coordination",
      text: "Technical coordination across networking, systems, cybersecurity, cloud and vendors, with structured oversight of operational dependencies.",
    },
    {
      icon: "briefcase",
      title: "Project & Delivery Control",
      text: "Support for complex IT projects with monitoring of time, cost, risks, progress and deliverable quality.",
    },
    {
      icon: "clipboard-list",
      title: "Audit, Compliance & Logging",
      text: "Technical assessments, traceability, access segregation, log management, periodic reviews and documentation support for control requirements.",
    },
    {
      icon: "bar-chart",
      title: "Reporting & KPIs",
      text: "Dashboards, indicators, metrics and executive reporting to turn technical data into measurable operational decisions.",
    },
  ],
};
