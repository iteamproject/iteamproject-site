import type { Locale } from "@/lib/routes";

export type AboutContent = {
  label: string;
  title: string;
  paragraphs: string[];
  whyTitle: string;
  advantages: string[];
  page: {
    heroLabel: string;
    heroTitle: string;
    heroText: string;
    roleTitle: string;
    roleText: string;
    operatingTitle: string;
    operatingItems: string[];
    principlesTitle: string;
    principles: {
      title: string;
      text: string;
    }[];
    ctaTitle: string;
    ctaText: string;
  };
};

export const aboutByLocale: Record<Locale, AboutContent> = {
  it: {
    label: "Chi siamo",
    title: "Un partner operativo per aziende che vogliono un IT più strutturato.",
    paragraphs: [
      "iTeamProject nasce per supportare il management nelle decisioni operative sull'IT e per dare ai team tecnici un modello di lavoro più chiaro, tracciabile e governabile. Non solo strategia: processi, responsabilità, indicatori e controllo reale delle attività.",
      "Interveniamo dove spesso si creano inefficienze: gestione fornitori, incident handling, escalation, responsabilità poco definite, assenza di KPI, reporting insufficiente, governance tecnica non formalizzata e scarso presidio dei rischi operativi.",
    ],
    whyTitle: "Perché scegliere iTeamProject",
    advantages: [
      "Approccio manageriale e tecnico nello stesso perimetro",
      "Riduzione del rischio operativo e maggiore controllo sui fornitori",
      "Modello basato su KPI, SLA e responsabilità chiare",
      "Interventi adatti a PMI, gruppi strutturati e contesti multi-sede",
      "Focus concreto su continuità operativa, processi e misurabilità",
      "Visione end-to-end tra business, governance e operation",
    ],
    page: {
      heroLabel: "Chi siamo",
      heroTitle: "Portiamo metodo operativo e controllo nei servizi IT.",
      heroText:
        "iTeamProject affianca aziende, management e team tecnici quando l'IT deve diventare più governabile, misurabile e coerente con le esigenze reali del business.",
      roleTitle: "Il nostro ruolo",
      roleText:
        "Agiamo come partner operativo tra direzione, IT interno e fornitori. Aiutiamo a leggere il contesto, definire priorità, chiarire responsabilità, misurare i servizi e mantenere il controllo sulle attività critiche.",
      operatingTitle: "Dove interveniamo",
      operatingItems: [
        "Governance IT e modello decisionale.",
        "Processi di service management, SLA, KPI ed escalation.",
        "Controllo delivery, progetti, fornitori e dipendenze operative.",
        "Audit tecnici, compliance, logging e tracciabilità.",
        "Reporting direzionale e continuità del servizio.",
      ],
      principlesTitle: "Come lavoriamo",
      principles: [
        {
          title: "Concretezza",
          text: "Partiamo dai problemi reali e costruiamo interventi applicabili, misurabili e sostenibili.",
        },
        {
          title: "Chiarezza",
          text: "Rendiamo leggibili responsabilità, priorità, rischi, vincoli e decisioni.",
        },
        {
          title: "Continuità",
          text: "Lavoriamo per ridurre dipendenze fragili e aumentare stabilità operativa nel tempo.",
        },
      ],
      ctaTitle: "Vuoi capire se il tuo modello IT è abbastanza governabile?",
      ctaText:
        "Possiamo partire da una prima valutazione operativa e individuare aree di miglioramento su governance, processi, fornitori e controllo.",
    },
  },
  en: {
    label: "About",
    title: "An operational partner for companies that want a more structured IT model.",
    paragraphs: [
      "iTeamProject was created to support management in IT operational decisions and to give technical teams a clearer, traceable and governable way of working. Not just strategy: processes, responsibilities, metrics and real activity control.",
      "We intervene where inefficiencies often arise: vendor management, incident handling, escalations, unclear responsibilities, lack of KPIs, weak reporting, undocumented technical governance and limited control over operational risks.",
    ],
    whyTitle: "Why choose iTeamProject",
    advantages: [
      "Managerial and technical approach within the same perimeter",
      "Reduced operational risk and stronger vendor control",
      "A model based on KPIs, SLAs and clear accountability",
      "Suitable for SMEs, structured groups and multi-site organizations",
      "Strong focus on service continuity, processes and measurability",
      "End-to-end view across business, governance and operations",
    ],
    page: {
      heroLabel: "About",
      heroTitle: "We bring operational method and control to IT services.",
      heroText:
        "iTeamProject supports companies, leadership and technical teams when IT needs to become more governable, measurable and aligned with real business needs.",
      roleTitle: "Our role",
      roleText:
        "We act as an operational partner between leadership, internal IT and vendors. We help read the context, define priorities, clarify responsibilities, measure services and keep control over critical activities.",
      operatingTitle: "Where we work",
      operatingItems: [
        "IT governance and decision model.",
        "Service management processes, SLAs, KPIs and escalations.",
        "Delivery control, projects, vendors and operational dependencies.",
        "Technical audits, compliance, logging and traceability.",
        "Executive reporting and service continuity.",
      ],
      principlesTitle: "How we work",
      principles: [
        {
          title: "Pragmatism",
          text: "We start from real issues and build actions that are applicable, measurable and sustainable.",
        },
        {
          title: "Clarity",
          text: "We make responsibilities, priorities, risks, constraints and decisions easier to understand.",
        },
        {
          title: "Continuity",
          text: "We work to reduce fragile dependencies and increase operational stability over time.",
        },
      ],
      ctaTitle: "Do you want to understand whether your IT model is governable enough?",
      ctaText:
        "We can start with an initial operational assessment and identify improvement areas across governance, processes, vendors and control.",
    },
  },
};
