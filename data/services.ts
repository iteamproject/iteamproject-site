import type { Locale } from "@/lib/routes";
import { routes } from "@/lib/routes";

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
  href?: string;
};

export type ServiceSlug =
  | "it-governance"
  | "it-service-management"
  | "project-delivery-control"
  | "audit-compliance-logging";

export type ServiceDetail = ServiceItem & {
  slug: ServiceSlug;
  path: Record<Locale, string>;
  label: string;
  intro: string;
  outcomesTitle: string;
  outcomes: string[];
  activitiesTitle: string;
  activities: string[];
  fitTitle: string;
  fit: string[];
  ctaTitle: string;
  ctaText: string;
};

export const servicesByLocale: Record<Locale, ServiceItem[]> = {
  it: [
    {
      icon: "shield-check",
      title: "IT Governance",
      text: "Definizione di ruoli, priorità, responsabilità e modello di controllo per rendere l'IT più governato, prevedibile e allineato al business.",
      href: routes.services.itGovernance.it,
    },
    {
      icon: "settings",
      title: "IT Service Management",
      text: "Disegno e ottimizzazione di processi operativi, SLA, KPI, escalation, presa in carico degli incident e continuità del servizio.",
      href: routes.services.itServiceManagement.it,
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
      href: routes.services.projectDeliveryControl.it,
    },
    {
      icon: "clipboard-list",
      title: "Audit, Compliance & Logging",
      text: "Assessment tecnici, tracciabilità, segregazione accessi, log management, revisioni periodiche e supporto documentale su requisiti di controllo.",
      href: routes.services.auditComplianceLogging.it,
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
      href: routes.services.itGovernance.en,
    },
    {
      icon: "settings",
      title: "IT Service Management",
      text: "Design and optimization of operating processes, SLAs, KPIs, escalations, incident ownership and service continuity.",
      href: routes.services.itServiceManagement.en,
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
      href: routes.services.projectDeliveryControl.en,
    },
    {
      icon: "clipboard-list",
      title: "Audit, Compliance & Logging",
      text: "Technical assessments, traceability, access segregation, log management, periodic reviews and documentation support for control requirements.",
      href: routes.services.auditComplianceLogging.en,
    },
    {
      icon: "bar-chart",
      title: "Reporting & KPIs",
      text: "Dashboards, indicators, metrics and executive reporting to turn technical data into measurable operational decisions.",
    },
  ],
};

export const serviceDetails: Record<ServiceSlug, Record<Locale, ServiceDetail>> = {
  "it-governance": {
    it: {
      slug: "it-governance",
      path: routes.services.itGovernance,
      icon: "shield-check",
      label: "Servizi",
      title: "IT Governance",
      text: "Un modello di governo IT chiaro rende responsabilità, priorità, fornitori e decisioni più leggibili.",
      intro:
        "Aiutiamo direzione e team IT a definire un modello operativo governabile: ruoli, responsabilità, priorità, regole decisionali, KPI e meccanismi di controllo. L'obiettivo è ridurre ambiguità e dipendenze implicite, rendendo l'IT più prevedibile e allineato al business.",
      outcomesTitle: "Risultati attesi",
      outcomes: [
        "Responsabilità e perimetri decisionali più chiari.",
        "Priorità IT collegate agli obiettivi aziendali.",
        "Maggiore controllo su fornitori, rischi e dipendenze operative.",
        "Reporting direzionale più leggibile e utile.",
      ],
      activitiesTitle: "Attività principali",
      activities: [
        "Assessment del modello di governance esistente.",
        "Mappatura ruoli, processi, fornitori e flussi decisionali.",
        "Definizione di KPI, SLA, meeting cadence e reporting.",
        "Supporto alla messa a terra del modello operativo.",
      ],
      fitTitle: "Quando è utile",
      fit: [
        "IT percepito come reattivo o poco misurabile.",
        "Dipendenze da fornitori difficili da governare.",
        "Crescita organizzativa non supportata da processi IT adeguati.",
      ],
      ctaTitle: "Vuoi rendere più governabile il tuo IT?",
      ctaText:
        "Possiamo partire da una prima valutazione del modello attuale e individuare aree di controllo, priorità e rischi operativi.",
    },
    en: {
      slug: "it-governance",
      path: routes.services.itGovernance,
      icon: "shield-check",
      label: "Services",
      title: "IT Governance",
      text: "A clear IT governance model makes responsibilities, priorities, vendors and decisions easier to control.",
      intro:
        "We help leadership and IT teams define a governable operating model: roles, responsibilities, priorities, decision rules, KPIs and control mechanisms. The goal is to reduce ambiguity and implicit dependencies, making IT more predictable and aligned with business goals.",
      outcomesTitle: "Expected outcomes",
      outcomes: [
        "Clearer responsibilities and decision boundaries.",
        "IT priorities connected to business objectives.",
        "Better control over vendors, risks and operational dependencies.",
        "More readable and useful executive reporting.",
      ],
      activitiesTitle: "Core activities",
      activities: [
        "Assessment of the current governance model.",
        "Mapping of roles, processes, vendors and decision flows.",
        "Definition of KPIs, SLAs, meeting cadence and reporting.",
        "Support for implementing the operating model.",
      ],
      fitTitle: "When it helps",
      fit: [
        "IT is perceived as reactive or hard to measure.",
        "Vendor dependencies are difficult to govern.",
        "Organizational growth is not supported by adequate IT processes.",
      ],
      ctaTitle: "Do you want to make IT more governable?",
      ctaText:
        "We can start with an initial assessment of your current model and identify control areas, priorities and operational risks.",
    },
  },
  "it-service-management": {
    it: {
      slug: "it-service-management",
      path: routes.services.itServiceManagement,
      icon: "settings",
      label: "Servizi",
      title: "IT Service Management",
      text: "Processi, SLA, KPI ed escalation strutturati per aumentare continuità, qualità e controllo dei servizi IT.",
      intro:
        "Disegniamo e ottimizziamo processi di gestione servizio pragmatici, sostenibili e misurabili. Lavoriamo su incident, request, escalation, presa in carico, SLA, KPI e continuità operativa, senza introdurre burocrazia inutile.",
      outcomesTitle: "Risultati attesi",
      outcomes: [
        "Processi operativi più chiari e ripetibili.",
        "Riduzione dei tempi di presa in carico e gestione escalation.",
        "SLA e KPI realmente utilizzabili per governare il servizio.",
        "Maggiore continuità e minore dipendenza dalle singole persone.",
      ],
      activitiesTitle: "Attività principali",
      activities: [
        "Assessment dei processi di supporto e delivery.",
        "Disegno di flussi incident, request, change ed escalation.",
        "Definizione di SLA, KPI e modalità di reporting.",
        "Allineamento operativo tra team interni e fornitori.",
      ],
      fitTitle: "Quando è utile",
      fit: [
        "Ticket, richieste o incident non hanno una gestione uniforme.",
        "Gli SLA esistono ma non guidano davvero il servizio.",
        "Le escalation dipendono da relazioni informali.",
      ],
      ctaTitle: "Vuoi rendere più affidabili i servizi IT?",
      ctaText:
        "Possiamo analizzare i processi attuali e definire un modello più chiaro per SLA, KPI, escalation e continuità.",
    },
    en: {
      slug: "it-service-management",
      path: routes.services.itServiceManagement,
      icon: "settings",
      label: "Services",
      title: "IT Service Management",
      text: "Structured processes, SLAs, KPIs and escalations to improve continuity, quality and control of IT services.",
      intro:
        "We design and optimize pragmatic, sustainable and measurable service management processes. We work on incidents, requests, escalations, ownership, SLAs, KPIs and operational continuity without adding unnecessary bureaucracy.",
      outcomesTitle: "Expected outcomes",
      outcomes: [
        "Clearer and repeatable operating processes.",
        "Reduced ownership and escalation handling times.",
        "SLAs and KPIs that can actually govern service quality.",
        "Greater continuity and less dependency on individual people.",
      ],
      activitiesTitle: "Core activities",
      activities: [
        "Assessment of support and delivery processes.",
        "Design of incident, request, change and escalation flows.",
        "Definition of SLAs, KPIs and reporting model.",
        "Operational alignment between internal teams and vendors.",
      ],
      fitTitle: "When it helps",
      fit: [
        "Tickets, requests or incidents are handled inconsistently.",
        "SLAs exist but do not really drive the service.",
        "Escalations depend on informal relationships.",
      ],
      ctaTitle: "Do you want more reliable IT services?",
      ctaText:
        "We can assess your current processes and define a clearer model for SLAs, KPIs, escalations and continuity.",
    },
  },
  "project-delivery-control": {
    it: {
      slug: "project-delivery-control",
      path: routes.services.projectDeliveryControl,
      icon: "briefcase",
      label: "Servizi",
      title: "Project & Delivery Control",
      text: "Controllo operativo di progetti IT complessi: tempi, costi, rischi, avanzamento e qualità dei deliverable.",
      intro:
        "Supportiamo progetti IT complessi introducendo metodo, tracciabilità e controllo operativo. Il focus è mantenere allineati obiettivi, tempi, costi, rischi, fornitori e deliverable, rendendo lo stato del progetto chiaro per decisioni rapide.",
      outcomesTitle: "Risultati attesi",
      outcomes: [
        "Maggiore visibilità su avanzamento, criticità e responsabilità.",
        "Rischi e blocchi gestiti prima che diventino emergenze.",
        "Allineamento più solido tra business, IT e fornitori.",
        "Decisioni di delivery basate su dati e priorità esplicite.",
      ],
      activitiesTitle: "Attività principali",
      activities: [
        "Setup del modello di controllo progetto.",
        "Monitoraggio avanzamento, rischi, issue e dipendenze.",
        "Coordinamento operativo tra team e fornitori.",
        "Reporting direzionale e supporto alle decisioni.",
      ],
      fitTitle: "Quando è utile",
      fit: [
        "Progetti multi-fornitore o multi-sede.",
        "Delivery con rischi, ritardi o responsabilità poco chiare.",
        "Necessità di presidio esterno pragmatico e indipendente.",
      ],
      ctaTitle: "Vuoi più controllo sui progetti IT?",
      ctaText:
        "Possiamo aiutarti a leggere lo stato reale del delivery e impostare un modello operativo più controllabile.",
    },
    en: {
      slug: "project-delivery-control",
      path: routes.services.projectDeliveryControl,
      icon: "briefcase",
      label: "Services",
      title: "Project & Delivery Control",
      text: "Operational control for complex IT projects: time, cost, risks, progress and deliverable quality.",
      intro:
        "We support complex IT projects by introducing method, traceability and operational control. The focus is keeping objectives, timelines, costs, risks, vendors and deliverables aligned, making project status clear enough for fast decisions.",
      outcomesTitle: "Expected outcomes",
      outcomes: [
        "Greater visibility on progress, issues and responsibilities.",
        "Risks and blockers managed before they become emergencies.",
        "Stronger alignment between business, IT and vendors.",
        "Delivery decisions based on data and explicit priorities.",
      ],
      activitiesTitle: "Core activities",
      activities: [
        "Setup of the project control model.",
        "Monitoring of progress, risks, issues and dependencies.",
        "Operational coordination across teams and vendors.",
        "Executive reporting and decision support.",
      ],
      fitTitle: "When it helps",
      fit: [
        "Multi-vendor or multi-site projects.",
        "Delivery with risks, delays or unclear responsibilities.",
        "Need for pragmatic and independent delivery oversight.",
      ],
      ctaTitle: "Do you want more control over IT projects?",
      ctaText:
        "We can help you understand the real state of delivery and set up a more controllable operating model.",
    },
  },
  "audit-compliance-logging": {
    it: {
      slug: "audit-compliance-logging",
      path: routes.services.auditComplianceLogging,
      icon: "clipboard-list",
      label: "Servizi",
      title: "Audit, Compliance & Logging",
      text: "Assessment, tracciabilità, log management e controlli periodici per rendere l'IT più verificabile.",
      intro:
        "Aiutiamo a rendere i sistemi e i processi IT più verificabili attraverso assessment tecnici, log management, segregazione accessi, evidenze documentali e controlli periodici. Il risultato è un modello più leggibile per audit, compliance e gestione del rischio.",
      outcomesTitle: "Risultati attesi",
      outcomes: [
        "Maggiore tracciabilità di sistemi, accessi e attività critiche.",
        "Evidenze più ordinate per audit e controlli interni.",
        "Riduzione delle aree non presidiate o difficili da verificare.",
        "Migliore continuità tra requisiti tecnici e requisiti di compliance.",
      ],
      activitiesTitle: "Attività principali",
      activities: [
        "Assessment tecnico e documentale.",
        "Revisione logging, accessi, ruoli e segregazione.",
        "Definizione di controlli periodici e tracciabilità.",
        "Supporto alla preparazione di evidenze per audit e verifiche.",
      ],
      fitTitle: "Quando è utile",
      fit: [
        "Audit o controlli richiedono evidenze tecniche più solide.",
        "Log, accessi e responsabilità non sono gestiti in modo uniforme.",
        "La compliance richiede un collegamento più chiaro con l'operatività IT.",
      ],
      ctaTitle: "Vuoi rendere più verificabile il tuo IT?",
      ctaText:
        "Possiamo partire da un assessment mirato su logging, accessi, controlli e documentazione operativa.",
    },
    en: {
      slug: "audit-compliance-logging",
      path: routes.services.auditComplianceLogging,
      icon: "clipboard-list",
      label: "Services",
      title: "Audit, Compliance & Logging",
      text: "Assessments, traceability, log management and periodic controls to make IT easier to verify.",
      intro:
        "We help make IT systems and processes more verifiable through technical assessments, log management, access segregation, documented evidence and periodic controls. The result is a clearer model for audit, compliance and risk management.",
      outcomesTitle: "Expected outcomes",
      outcomes: [
        "Greater traceability of systems, access and critical activities.",
        "More organized evidence for audits and internal controls.",
        "Reduction of areas that are unmanaged or hard to verify.",
        "Better continuity between technical requirements and compliance requirements.",
      ],
      activitiesTitle: "Core activities",
      activities: [
        "Technical and documentation assessment.",
        "Review of logging, access, roles and segregation.",
        "Definition of periodic controls and traceability.",
        "Support in preparing evidence for audits and reviews.",
      ],
      fitTitle: "When it helps",
      fit: [
        "Audits or controls require stronger technical evidence.",
        "Logs, access and responsibilities are not managed consistently.",
        "Compliance requires a clearer connection with IT operations.",
      ],
      ctaTitle: "Do you want to make IT more verifiable?",
      ctaText:
        "We can start with a focused assessment on logging, access, controls and operational documentation.",
    },
  },
};

export const serviceSlugs = Object.keys(serviceDetails) as ServiceSlug[];

export function serviceList(locale: Locale) {
  return serviceSlugs.map((slug) => serviceDetails[slug][locale]);
}
