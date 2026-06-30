import type { Locale } from "@/lib/routes";

export type HomeNavItem = {
  label: string;
  href: string;
};

export type HomeCopy = {
  navItems: HomeNavItem[];
  payoff: string;
  heroTitle: string;
  heroText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  servicesLabel: string;
  servicesTitle: string;
  servicesText: string;
  outcomesLabel: string;
  outcomesTitle: string;
  outcomesText: string;
  methodLabel: string;
  methodTitle: string;
  methodText: string;
  sectorsLabel: string;
  sectorsTitle: string;
  sectorsText: string;
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  emailLabel: string;
  officeLabel: string;
  focusLabel: string;
  focusText: string;
  problemsLabel: string;
  problemsTitle: string;
  problemsText: string;
  problemsBridge: string;
  problemsCta: string;
  caseHistoryLabel: string;
  caseHistoryTitle: string;
  caseHistoryText: string;
  caseHistoryCta: string;
};

export type HeroMetric = {
  value: string;
  label: string;
};

export const homeCopyByLocale: Record<Locale, HomeCopy> = {
  it: {
    navItems: [
      { label: "Chi siamo", href: "#chi-siamo" },
      { label: "Servizi", href: "#servizi" },
      { label: "Cosa risolviamo", href: "#problems" },
      { label: "Risultati", href: "#risultati" },
      { label: "Case History", href: "/case-history" },
      { label: "Metodo", href: "#metodo" },
      { label: "Ambiti", href: "#settori" },
      { label: "Contatti", href: "#cta" },
    ],
    payoff: "Your IT project. No stress, just results.",
    heroTitle: "Creiamo metodo, controllo e continuità nei servizi IT.",
    heroText:
      "iTeamProject affianca aziende e organizzazioni nella strutturazione della governance IT, nel coordinamento tecnico-operativo e nella misurazione delle performance di servizio. L'obiettivo è semplice: trasformare un IT reattivo in un IT governato, leggibile e affidabile.",
    ctaPrimary: "Parliamo del tuo contesto",
    ctaSecondary: "Scopri i servizi",
    servicesLabel: "Servizi",
    servicesTitle: "Servizi pensati per dare struttura e controllo all'IT.",
    servicesText:
      "Lavoriamo su organizzazione, processi, coordinamento tecnico e controllo delle performance per migliorare affidabilità, continuità e capacità decisionale.",
    outcomesLabel: "Risultati attesi",
    outcomesTitle: "Cosa cambia quando l'IT viene governato meglio.",
    outcomesText:
      "L'obiettivo non è aggiungere complessità, ma ridurre attriti operativi, aumentare visibilità e dare alla direzione un modello più chiaro per decidere. I risultati attesi sono concreti, leggibili e progressivi.",
    problemsLabel: "Cosa risolviamo",
    problemsTitle: "Problemi concreti che aiutiamo a rimettere sotto controllo.",
    problemsText:
      "Interveniamo dove l'IT genera attriti operativi, poca visibilità o dipendenze difficili da governare. L'obiettivo è trasformare criticità ricorrenti in un modello più chiaro, misurabile e sostenibile.",
    problemsBridge:
      "Se ti riconosci in uno di questi punti, conviene partire da una lettura operativa del contesto: responsabilità, fornitori, rischi, priorità e metriche.",
    problemsCta: "Parliamo del tuo contesto IT",
    caseHistoryLabel: "Case History",
    caseHistoryTitle: "Progetti reali, problemi concreti, risultati misurabili",
    caseHistoryText:
      "Dalla trasformazione infrastrutturale multi-sede alla governance IT multi-fornitore: casi concreti in cui metodo, coordinamento e controllo hanno prodotto risultati leggibili.",
    caseHistoryCta: "Leggi il caso",
    methodLabel: "Metodo",
    methodTitle: "Un processo in 4 fasi, semplice da leggere e concreto da applicare.",
    methodText:
      "L'intervento non si limita alla diagnosi. Definiamo un framework operativo misurabile, sostenibile e adatto al contesto aziendale reale.",
    sectorsLabel: "Ambiti",
    sectorsTitle: "Dove portiamo più valore.",
    sectorsText:
      "Il modello iTeamProject è particolarmente efficace in contesti dove l'IT deve supportare operazioni quotidiane, sedi multiple, fornitori esterni, requisiti di controllo e crescita organizzativa.",
    contactLabel: "Contatto",
    contactTitle: "Prima valutazione operativa senza impegno",
    contactText:
      "Possiamo impostare una prima valutazione del modello attuale, evidenziare criticità, dipendenze e aree di miglioramento, costruendo un percorso concreto di governance e controllo.",
    emailLabel: "Email",
    officeLabel: "Sede legale",
    focusLabel: "Focus",
    focusText: "Governance IT · Service Management · Compliance · Delivery",
  },
  en: {
    navItems: [
      { label: "About", href: "#chi-siamo" },
      { label: "Services", href: "#servizi" },
      { label: "What we solve", href: "#problems" },
      { label: "Outcomes", href: "#risultati" },
      { label: "Case Studies", href: "/case-history" },
      { label: "Method", href: "#metodo" },
      { label: "Sectors", href: "#settori" },
      { label: "Contact", href: "#cta" },
    ],
    payoff: "Your IT project. No stress, just results.",
    heroTitle: "We bring structure, control and continuity to IT services.",
    heroText:
      "iTeamProject supports companies and organizations in structuring IT governance, coordinating technical operations and measuring service performance. The goal is simple: turning reactive IT into governed, readable and reliable IT.",
    ctaPrimary: "Discuss your context",
    ctaSecondary: "Explore services",
    servicesLabel: "Services",
    servicesTitle: "Services designed to bring structure and control to IT.",
    servicesText:
      "We work on organization, processes, technical coordination and performance control to improve reliability, continuity and decision-making capability.",
    outcomesLabel: "Expected outcomes",
    outcomesTitle: "What changes when IT is governed better.",
    outcomesText:
      "The goal is not to add complexity, but to reduce operational friction, increase visibility and give leadership a clearer model for decision-making. Expected outcomes are concrete, readable and progressive.",
    problemsLabel: "What we solve",
    problemsTitle: "Operational issues we help bring back under control.",
    problemsText:
      "We intervene where IT creates friction, poor visibility or difficult-to-manage dependencies. The goal is to turn recurring issues into a clearer, measurable and sustainable operating model.",
    problemsBridge:
      "If you recognize one of these issues, it is worth starting from an operational reading of the context: responsibilities, vendors, risks, priorities and metrics.",
    problemsCta: "Let's discuss your IT context",
    caseHistoryLabel: "Case Study",
    caseHistoryTitle: "Real projects, concrete issues, measurable outcomes",
    caseHistoryText:
      "From multi-site infrastructure transformation to multi-vendor IT governance: concrete cases where method, coordination and control delivered readable outcomes.",
    caseHistoryCta: "Read the case",
    methodLabel: "Method",
    methodTitle: "A 4-step process, simple to understand and practical to apply.",
    methodText:
      "The engagement does not stop at diagnosis. We define an operational framework that is measurable, sustainable and suitable for the real business context.",
    sectorsLabel: "Sectors",
    sectorsTitle: "Where we deliver the most value.",
    sectorsText:
      "The iTeamProject model is particularly effective where IT must support daily operations, multiple locations, external vendors, control requirements and organizational growth.",
    contactLabel: "Contact",
    contactTitle: "Initial operational assessment with no obligation",
    contactText:
      "We can set up an initial assessment of the current operating model, highlight critical issues, dependencies and improvement areas, and build a concrete governance and control path.",
    emailLabel: "Email",
    officeLabel: "Registered office",
    focusLabel: "Focus",
    focusText: "IT Governance · Service Management · Compliance · Delivery",
  },
};

export const heroHighlightsByLocale: Record<Locale, string[]> = {
  it: [
    "Governance operativa e organizzativa",
    "Processi, KPI, SLA e reporting",
    "Coordinamento fornitori e delivery IT",
    "Audit tecnici, logging e controllo",
  ],
  en: [
    "Operational and organizational governance",
    "Processes, KPIs, SLAs and reporting",
    "Vendor coordination and IT delivery",
    "Technical audits, logging and control",
  ],
};

export const heroMetricsByLocale: Record<Locale, HeroMetric[]> = {
  it: [
    { value: "360°", label: "visione completa dei servizi IT" },
    { value: "6", label: "aree principali di intervento" },
    { value: "KPI", label: "controllo basato su misurazione" },
    { value: "1", label: "referente unico di coordinamento" },
  ],
  en: [
    { value: "360°", label: "complete view of IT services" },
    { value: "6", label: "core service areas" },
    { value: "KPIs", label: "measurement-driven control" },
    { value: "1", label: "single coordination point" },
  ],
};
