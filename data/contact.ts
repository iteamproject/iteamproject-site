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
  mailSubject: string;
  mailBody: string;
  nextStepsTitle: string;
  nextSteps: {
    title: string;
    text: string;
  }[];
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
    mailSubject: "Richiesta prima valutazione operativa IT",
    mailBody:
      "Buongiorno iTeamProject,%0D%0A%0D%0Avorrei richiedere una prima valutazione operativa sul nostro contesto IT.%0D%0A%0D%0AContesto aziendale:%0D%0AProblema principale:%0D%0ASedi / fornitori / servizi coinvolti:%0D%0AObiettivo o priorità:%0D%0A%0D%0AGrazie.",
    nextStepsTitle: "Cosa succede dopo il primo contatto",
    nextSteps: [
      {
        title: "Lettura del contesto",
        text: "Raccogliamo le informazioni essenziali su organizzazione, servizi, fornitori, criticità e priorità.",
      },
      {
        title: "Prima valutazione operativa",
        text: "Individuiamo le aree su cui intervenire: governance, service management, delivery, audit o controllo tecnico.",
      },
      {
        title: "Percorso concreto",
        text: "Proponiamo un perimetro di lavoro chiaro, con attività progressive e verificabili.",
      },
    ],
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
    mailSubject: "Request for initial IT operational assessment",
    mailBody:
      "Hello iTeamProject,%0D%0A%0D%0AI would like to request an initial operational assessment of our IT context.%0D%0A%0D%0ACompany context:%0D%0AMain issue:%0D%0ASites / vendors / services involved:%0D%0AGoal or priority:%0D%0A%0D%0AThank you.",
    nextStepsTitle: "What happens after the first contact",
    nextSteps: [
      {
        title: "Context review",
        text: "We collect the essential information about organization, services, vendors, issues and priorities.",
      },
      {
        title: "Initial operational assessment",
        text: "We identify where to intervene: governance, service management, delivery, audit or technical control.",
      },
      {
        title: "Concrete path",
        text: "We propose a clear scope of work, with progressive and verifiable activities.",
      },
    ],
    relatedTitle: "Before contacting us, you can also review",
  },
};
