import type { Locale } from "@/lib/routes";

export type ProblemItem = {
  title: string;
  text: string;
};

export const problemsByLocale: Record<Locale, ProblemItem[]> = {
  it: [
    {
      title: "Fornitori IT difficili da governare",
      text: "Più fornitori, responsabilità poco chiare, escalation incerte e qualità del servizio non sempre sotto controllo.",
    },
    {
      title: "Incident e richieste gestiti senza processo",
      text: "Urgenze, ticket e problemi operativi affrontati in modo reattivo, senza un flusso strutturato e prevedibile.",
    },
    {
      title: "Nessuna visibilità su KPI e SLA",
      text: "Mancano indicatori, livelli di servizio e reporting utili per capire se l'IT sta realmente performando bene.",
    },
    {
      title: "Governance IT non definita",
      text: "Ruoli, priorità, responsabilità e processi non formalizzati, con conseguente lentezza decisionale e ambiguità operative.",
    },
    {
      title: "Coordinamento tecnico inefficace",
      text: "Attività IT non presidiate in modo centralizzato, con team e fornitori poco allineati tra loro.",
    },
    {
      title: "IT percepito come costo, non come leva",
      text: "L'IT fatica a supportare le decisioni aziendali perché manca una visione leggibile, misurabile e orientata al miglioramento.",
    },
  ],
  en: [
    {
      title: "IT vendors that are hard to govern",
      text: "Multiple providers, unclear accountability, uncertain escalations and service quality that is not fully under control.",
    },
    {
      title: "Incidents and requests handled without process",
      text: "Urgencies, tickets and operational issues managed reactively, without a structured and predictable flow.",
    },
    {
      title: "No visibility on KPIs and SLAs",
      text: "Missing indicators, service levels and reporting make it difficult to understand whether IT is truly performing well.",
    },
    {
      title: "Undefined IT governance",
      text: "Roles, priorities, responsibilities and processes are not formalized, leading to ambiguity and slower decision-making.",
    },
    {
      title: "Ineffective technical coordination",
      text: "IT activities are not centrally orchestrated, with teams and vendors not fully aligned.",
    },
    {
      title: "IT perceived as a cost, not a lever",
      text: "IT struggles to support business decisions because visibility, measurability and governance are still weak.",
    },
  ],
};
