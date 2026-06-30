import type { Locale } from "@/lib/routes";
import { routes } from "@/lib/routes";

export type SectorItem = {
  title: string;
  text: string;
  signals: string[];
};

export type SectorPageContent = {
  label: string;
  title: string;
  text: string;
  sectors: SectorItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const sectorsByLocale: Record<Locale, string[]> = {
  it: [
    "PMI e aziende multi-sede",
    "Retail e distribuzione",
    "Servizi professionali",
    "Organizzazioni con fornitori IT esterni",
    "Contesti regolati e con requisiti di tracciabilità",
    "Aziende in fase di strutturazione o crescita",
  ],
  en: [
    "SMEs and multi-site companies",
    "Retail and distribution",
    "Professional services",
    "Organizations with external IT vendors",
    "Regulated environments with traceability requirements",
    "Companies in structuring or growth phases",
  ],
};

export const sectorPageByLocale: Record<Locale, SectorPageContent> = {
  it: {
    label: "Settori",
    title: "Contesti in cui governance e controllo IT fanno davvero la differenza.",
    text:
      "Il modello iTeamProject è utile dove l'IT sostiene operazioni distribuite, fornitori multipli, requisiti di tracciabilità o percorsi di crescita che richiedono più metodo e visibilità.",
    sectors: [
      {
        title: "Retail e reti multi-sede",
        text:
          "Punti vendita, sedi operative, logistica e infrastrutture distribuite richiedono continuità, standardizzazione, monitoraggio e coordinamento tra fornitori.",
        signals: [
          "Sedi con livelli di servizio non omogenei.",
          "Dipendenza da connettività, networking, telefonia e supporto locale.",
          "Necessità di rollout controllati e scalabili.",
        ],
      },
      {
        title: "PMI strutturate e aziende in crescita",
        text:
          "Quando l'organizzazione cresce, l'IT deve passare da gestione reattiva a modello governato, con priorità, processi e responsabilità più esplicite.",
        signals: [
          "Processi IT non più adeguati alla dimensione aziendale.",
          "Dipendenza da poche persone chiave.",
          "Reporting tecnico poco utile alla direzione.",
        ],
      },
      {
        title: "Aziende con fornitori IT multipli",
        text:
          "La presenza di partner diversi su infrastruttura, cloud, sicurezza, applicazioni e supporto richiede un presidio capace di coordinare responsabilità e dipendenze.",
        signals: [
          "Escalation poco chiare tra fornitori.",
          "SLA difficili da misurare e far rispettare.",
          "Rischi operativi distribuiti tra più interlocutori.",
        ],
      },
      {
        title: "Contesti con audit, compliance e logging",
        text:
          "Organizzazioni soggette a controlli o requisiti di tracciabilità hanno bisogno di evidenze tecniche, processi verificabili e responsabilità documentate.",
        signals: [
          "Log, accessi e responsabilità non governati in modo uniforme.",
          "Audit che richiedono evidenze tecniche più ordinate.",
          "Compliance scollegata dall'operatività IT quotidiana.",
        ],
      },
      {
        title: "Trasformazioni IT e progetti complessi",
        text:
          "Migrazioni, consolidamenti, cambi fornitore e progetti multi-team richiedono controllo su tempi, rischi, decisioni e qualità dei deliverable.",
        signals: [
          "Progetti con avanzamento poco leggibile.",
          "Dipendenze tecniche o organizzative non presidiate.",
          "Necessità di coordinamento indipendente e pragmatico.",
        ],
      },
    ],
    ctaTitle: "Vuoi capire dove intervenire prima?",
    ctaText:
      "Possiamo leggere il tuo contesto operativo e individuare le aree dove governance, processi o controllo possono generare più valore.",
    ctaPrimary: "Parliamo del tuo contesto",
    ctaSecondary: "Vedi i servizi",
  },
  en: {
    label: "Sectors",
    title: "Contexts where IT governance and control make a real difference.",
    text:
      "The iTeamProject model is useful where IT supports distributed operations, multiple vendors, traceability requirements or growth paths that require more method and visibility.",
    sectors: [
      {
        title: "Retail and multi-site networks",
        text:
          "Stores, operating sites, logistics and distributed infrastructure require continuity, standardization, monitoring and vendor coordination.",
        signals: [
          "Sites with inconsistent service levels.",
          "Dependency on connectivity, networking, telephony and local support.",
          "Need for controlled and scalable rollouts.",
        ],
      },
      {
        title: "Structured SMEs and growing companies",
        text:
          "As organizations grow, IT must move from reactive management to a governed model, with clearer priorities, processes and responsibilities.",
        signals: [
          "IT processes no longer fit the company size.",
          "Dependency on a few key people.",
          "Technical reporting that is not useful for leadership.",
        ],
      },
      {
        title: "Companies with multiple IT vendors",
        text:
          "Different partners across infrastructure, cloud, security, applications and support require governance that coordinates responsibilities and dependencies.",
        signals: [
          "Unclear escalations between vendors.",
          "SLAs that are difficult to measure and enforce.",
          "Operational risks distributed across multiple parties.",
        ],
      },
      {
        title: "Audit, compliance and logging contexts",
        text:
          "Organizations subject to controls or traceability requirements need technical evidence, verifiable processes and documented accountability.",
        signals: [
          "Logs, access and responsibilities are not governed consistently.",
          "Audits require more organized technical evidence.",
          "Compliance is disconnected from daily IT operations.",
        ],
      },
      {
        title: "IT transformations and complex projects",
        text:
          "Migrations, consolidations, vendor transitions and multi-team projects require control over timelines, risks, decisions and deliverable quality.",
        signals: [
          "Project progress is hard to read.",
          "Technical or organizational dependencies are not managed.",
          "Need for pragmatic and independent coordination.",
        ],
      },
    ],
    ctaTitle: "Do you want to understand where to act first?",
    ctaText:
      "We can read your operating context and identify where governance, processes or control can generate the most value.",
    ctaPrimary: "Discuss your context",
    ctaSecondary: "View services",
  },
};

export const sectorCtaTargets = {
  it: {
    services: routes.servicesIndex.it,
  },
  en: {
    services: routes.servicesIndex.en,
  },
} as const;
