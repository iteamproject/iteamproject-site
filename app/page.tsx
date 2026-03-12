"use client";

import { useMemo, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Menu,
  ShieldCheck,
  Network,
  BarChart3,
  Settings2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Globe,
  ClipboardList,
} from "lucide-react";

type Lang = "it" | "en";

type NavItem = { label: string; href: string };
type Service = {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
};
type Metric = { value: string; label: string };
type Outcome = { value: string; title: string; text: string };
type WorkflowItem = { step: string; title: string; text: string };

type Copy = {
  navItems: NavItem[];
  payoff: string;
  heroTitle: string;
  heroText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  highlights: string[];
  whoLabel: string;
  whoTitle: string;
  whoText1: string;
  whoText2: string;
  whyTitle: string;
  advantages: string[];
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
  footerName: string;
  services: Service[];
  metrics: Metric[];
  outcomes: Outcome[];
  workflow: WorkflowItem[];
  sectors: string[];
};

const copyByLang: Record<Lang, Copy> = {
  it: {
    navItems: [
      { label: "Chi siamo", href: "#chi-siamo" },
      { label: "Servizi", href: "#servizi" },
      { label: "Risultati", href: "#risultati" },
      { label: "Metodo", href: "#metodo" },
      { label: "Ambiti", href: "#settori" },
      { label: "Contatti", href: "#cta" },
    ],
    payoff: "Your IT project. No stress, just results.",
    heroTitle: "Creiamo metodo, controllo e continuità nei servizi IT.",
    heroText:
      "iTeamProject affianca aziende e organizzazioni nella strutturazione della governance IT, nel coordinamento tecnico-operativo e nella misurazione delle performance di servizio. L’obiettivo è semplice: trasformare un IT reattivo in un IT governato, leggibile e affidabile.",
    ctaPrimary: "Richiedi una consulenza",
    ctaSecondary: "Scopri i servizi",
    highlights: [
      "Governance operativa e organizzativa",
      "Processi, KPI, SLA e reporting",
      "Coordinamento fornitori e delivery IT",
      "Audit tecnici, logging e controllo",
    ],
    whoLabel: "Chi siamo",
    whoTitle: "Un partner operativo per aziende che vogliono un IT più strutturato.",
    whoText1:
      "iTeamProject nasce per supportare il management nelle decisioni operative sull’IT e per dare ai team tecnici un modello di lavoro più chiaro, tracciabile e governabile. Non solo strategia: processi, responsabilità, indicatori e controllo reale delle attività.",
    whoText2:
      "Interveniamo dove spesso si creano inefficienze: gestione fornitori, incident handling, escalation, responsabilità poco definite, assenza di KPI, reporting insufficiente, governance tecnica non formalizzata e scarso presidio dei rischi operativi.",
    whyTitle: "Perché scegliere iTeamProject",
    advantages: [
      "Approccio manageriale e tecnico nello stesso perimetro",
      "Riduzione del rischio operativo e maggiore controllo sui fornitori",
      "Modello basato su KPI, SLA e responsabilità chiare",
      "Interventi adatti a PMI, gruppi strutturati e contesti multi-sede",
      "Focus concreto su continuità operativa, processi e misurabilità",
      "Visione end-to-end tra business, governance e operation",
    ],
    servicesLabel: "Servizi",
    servicesTitle: "Servizi pensati per dare struttura e controllo all’IT.",
    servicesText:
      "Lavoriamo su organizzazione, processi, coordinamento tecnico e controllo delle performance per migliorare affidabilità, continuità e capacità decisionale.",
    outcomesLabel: "Risultati attesi",
    outcomesTitle: "Cosa cambia quando l’IT viene governato meglio.",
    outcomesText:
      "L’obiettivo non è aggiungere complessità, ma ridurre attriti operativi, aumentare visibilità e dare alla direzione un modello più chiaro per decidere. I risultati attesi sono concreti, leggibili e progressivi.",
    methodLabel: "Metodo",
    methodTitle: "Un processo in 4 fasi, semplice da leggere e concreto da applicare.",
    methodText:
      "L’intervento non si limita alla diagnosi. Definiamo un framework operativo misurabile, sostenibile e adatto al contesto aziendale reale.",
    sectorsLabel: "Ambiti",
    sectorsTitle: "Dove portiamo più valore.",
    sectorsText:
      "Il modello iTeamProject è particolarmente efficace in contesti dove l’IT deve supportare operazioni quotidiane, sedi multiple, fornitori esterni, requisiti di controllo e crescita organizzativa.",
    contactLabel: "Contatto",
    contactTitle: "Analizziamo il tuo contesto IT e definiamo le priorità operative.",
    contactText:
      "Possiamo impostare una prima valutazione del modello attuale, evidenziare criticità, dipendenze e aree di miglioramento, costruendo un percorso concreto di governance e controllo.",
    emailLabel: "Email",
    officeLabel: "Sede legale",
    focusLabel: "Focus",
    focusText: "Governance IT · Service Management · Compliance · Delivery",
    footerName: "iTeamProject",
    services: [
      {
        icon: ShieldCheck,
        title: "IT Governance",
        text: "Definizione di ruoli, priorità, responsabilità e modello di controllo per rendere l’IT più governato, prevedibile e allineato al business.",
      },
      {
        icon: Settings2,
        title: "IT Service Management",
        text: "Disegno e ottimizzazione di processi operativi, SLA, KPI, escalation, presa in carico degli incident e continuità del servizio.",
      },
      {
        icon: Network,
        title: "Infrastructure & Technical Coordination",
        text: "Coordinamento tecnico tra networking, sistemi, cybersecurity, cloud e fornitori con presidio strutturato delle dipendenze operative.",
      },
      {
        icon: Briefcase,
        title: "Project & Delivery Control",
        text: "Supporto su progetti IT complessi con monitoraggio tempi, costi, rischi, avanzamento e qualità dei deliverable.",
      },
      {
        icon: ClipboardList,
        title: "Audit, Compliance & Logging",
        text: "Assessment tecnici, tracciabilità, segregazione accessi, log management, revisioni periodiche e supporto documentale su requisiti di controllo.",
      },
      {
        icon: BarChart3,
        title: "Reporting & KPI",
        text: "Dashboard, indicatori, metriche e reporting direzionale per trasformare dati tecnici in decisioni operative misurabili.",
      },
    ],
    metrics: [
      { value: "360°", label: "visione completa dei servizi IT" },
      { value: "6", label: "aree principali di intervento" },
      { value: "KPI", label: "controllo basato su misurazione" },
      { value: "1", label: "referente unico di coordinamento" },
    ],
    outcomes: [
      {
        value: "Più controllo",
        title: "Governance leggibile",
        text: "Ruoli, priorità, responsabilità e flussi decisionali più chiari per ridurre ambiguità operative e dipendenze non presidiate.",
      },
      {
        value: "Meno inefficienze",
        title: "Processi più ordinati",
        text: "Escalation, gestione incident, interazioni con fornitori e attività ricorrenti impostate con criteri misurabili e ripetibili.",
      },
      {
        value: "Più affidabilità",
        title: "Continuità del servizio",
        text: "Maggiore presidio delle criticità, dei punti di rischio e delle attività a maggiore impatto sul business quotidiano.",
      },
      {
        value: "Decisioni migliori",
        title: "KPI e reporting utili",
        text: "Dati tecnici trasformati in indicatori comprensibili per il management, con una base concreta per pianificare e correggere.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Assessment iniziale",
        text: "Analisi del contesto attuale, dei servizi, dei fornitori, delle criticità operative e dei punti di rischio.",
      },
      {
        step: "02",
        title: "Mappatura e priorità",
        text: "Definizione di perimetro, responsabilità, dipendenze, priorità di intervento e livelli di servizio attesi.",
      },
      {
        step: "03",
        title: "Implementazione del modello",
        text: "Introduzione di processi, controlli, KPI, regole operative e governance documentata.",
      },
      {
        step: "04",
        title: "Monitoraggio continuo",
        text: "Reporting, revisione periodica, piano di miglioramento e supporto alla direzione per il controllo nel tempo.",
      },
    ],
    sectors: [
      "PMI e aziende multi-sede",
      "Retail e distribuzione",
      "Servizi professionali",
      "Organizzazioni con fornitori IT esterni",
      "Contesti regolati e con requisiti di tracciabilità",
      "Aziende in fase di strutturazione o crescita",
    ],
  },
  en: {
    navItems: [
      { label: "About", href: "#chi-siamo" },
      { label: "Services", href: "#servizi" },
      { label: "Outcomes", href: "#risultati" },
      { label: "Method", href: "#metodo" },
      { label: "Sectors", href: "#settori" },
      { label: "Contact", href: "#cta" },
    ],
    payoff: "Your IT project. No stress, just results.",
    heroTitle: "We bring structure, control and continuity to IT services.",
    heroText:
      "iTeamProject supports companies and organizations in structuring IT governance, coordinating technical operations and measuring service performance. The goal is simple: turning reactive IT into governed, readable and reliable IT.",
    ctaPrimary: "Request a consultation",
    ctaSecondary: "Explore services",
    highlights: [
      "Operational and organizational governance",
      "Processes, KPIs, SLAs and reporting",
      "Vendor coordination and IT delivery",
      "Technical audits, logging and control",
    ],
    whoLabel: "About",
    whoTitle: "An operational partner for companies that want a more structured IT model.",
    whoText1:
      "iTeamProject was created to support management in IT operational decisions and to give technical teams a clearer, traceable and governable way of working. Not just strategy: processes, responsibilities, metrics and real activity control.",
    whoText2:
      "We intervene where inefficiencies often arise: vendor management, incident handling, escalations, unclear responsibilities, lack of KPIs, weak reporting, undocumented technical governance and limited control over operational risks.",
    whyTitle: "Why choose iTeamProject",
    advantages: [
      "Managerial and technical approach within the same perimeter",
      "Reduced operational risk and stronger vendor control",
      "A model based on KPIs, SLAs and clear accountability",
      "Suitable for SMEs, structured groups and multi-site organizations",
      "Strong focus on service continuity, processes and measurability",
      "End-to-end view across business, governance and operations",
    ],
    servicesLabel: "Services",
    servicesTitle: "Services designed to bring structure and control to IT.",
    servicesText:
      "We work on organization, processes, technical coordination and performance control to improve reliability, continuity and decision-making capability.",
    outcomesLabel: "Expected outcomes",
    outcomesTitle: "What changes when IT is governed better.",
    outcomesText:
      "The goal is not to add complexity, but to reduce operational friction, increase visibility and give leadership a clearer model for decision-making. Expected outcomes are concrete, readable and progressive.",
    methodLabel: "Method",
    methodTitle: "A 4-step process, simple to understand and practical to apply.",
    methodText:
      "The engagement does not stop at diagnosis. We define an operational framework that is measurable, sustainable and suitable for the real business context.",
    sectorsLabel: "Sectors",
    sectorsTitle: "Where we deliver the most value.",
    sectorsText:
      "The iTeamProject model is particularly effective where IT must support daily operations, multiple locations, external vendors, control requirements and organizational growth.",
    contactLabel: "Contact",
    contactTitle: "Let’s review your IT context and define operational priorities.",
    contactText:
      "We can set up an initial assessment of the current operating model, highlight critical issues, dependencies and improvement areas, and build a concrete governance and control path.",
    emailLabel: "Email",
    officeLabel: "Registered office",
    focusLabel: "Focus",
    focusText: "IT Governance · Service Management · Compliance · Delivery",
    footerName: "iTeamProject",
    services: [
      {
        icon: ShieldCheck,
        title: "IT Governance",
        text: "Definition of roles, priorities, responsibilities and control model to make IT more governed, predictable and aligned with business goals.",
      },
      {
        icon: Settings2,
        title: "IT Service Management",
        text: "Design and optimization of operating processes, SLAs, KPIs, escalations, incident ownership and service continuity.",
      },
      {
        icon: Network,
        title: "Infrastructure & Technical Coordination",
        text: "Technical coordination across networking, systems, cybersecurity, cloud and vendors, with structured oversight of operational dependencies.",
      },
      {
        icon: Briefcase,
        title: "Project & Delivery Control",
        text: "Support for complex IT projects with monitoring of time, cost, risks, progress and deliverable quality.",
      },
      {
        icon: ClipboardList,
        title: "Audit, Compliance & Logging",
        text: "Technical assessments, traceability, access segregation, log management, periodic reviews and documentation support for control requirements.",
      },
      {
        icon: BarChart3,
        title: "Reporting & KPIs",
        text: "Dashboards, indicators, metrics and executive reporting to turn technical data into measurable operational decisions.",
      },
    ],
    metrics: [
      { value: "360°", label: "complete view of IT services" },
      { value: "6", label: "core service areas" },
      { value: "KPIs", label: "measurement-driven control" },
      { value: "1", label: "single coordination point" },
    ],
    outcomes: [
      {
        value: "More control",
        title: "Readable governance",
        text: "Clearer roles, priorities, accountability and decision flows to reduce operational ambiguity and unmanaged dependencies.",
      },
      {
        value: "Less inefficiency",
        title: "More orderly processes",
        text: "Escalations, incident handling, vendor interactions and recurring activities set up with measurable and repeatable criteria.",
      },
      {
        value: "More reliability",
        title: "Service continuity",
        text: "Stronger oversight over critical issues, risk points and activities with the greatest impact on day-to-day business.",
      },
      {
        value: "Better decisions",
        title: "Useful KPIs and reporting",
        text: "Technical data translated into indicators that management can understand and use to plan and correct course.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Initial assessment",
        text: "Analysis of the current context, services, vendors, operational issues and risk points.",
      },
      {
        step: "02",
        title: "Mapping and priorities",
        text: "Definition of scope, responsibilities, dependencies, intervention priorities and expected service levels.",
      },
      {
        step: "03",
        title: "Model implementation",
        text: "Introduction of processes, controls, KPIs, operating rules and documented governance.",
      },
      {
        step: "04",
        title: "Continuous monitoring",
        text: "Reporting, periodic review, improvement plan and support to leadership for ongoing control.",
      },
    ],
    sectors: [
      "SMEs and multi-site companies",
      "Retail and distribution",
      "Professional services",
      "Organizations with external IT vendors",
      "Regulated environments with traceability requirements",
      "Companies in structuring or growth phases",
    ],
  },
};

export default function ITeamProjectWebsiteV2() {
  const [lang, setLang] = useState<Lang>("it");
  const [activeSection, setActiveSection] = useState<string>("#chi-siamo");
  const t = useMemo(() => copyByLang[lang], [lang]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [lang]);

  return (
    <div
      className="min-h-screen bg-white pt-20 text-slate-900 scroll-smooth"
      style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-950 bg-emerald-50/95 backdrop-blur supports-[backdrop-filter]:bg-emerald-50/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl font-bold text-white shadow-sm">
              iT
            </div>
            <div className="text-sm font-medium text-slate-500">
              <div>
                <span className="font-semibold text-emerald-700">iTeamProject</span> · {t.payoff}
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${activeSection === item.href ? "text-emerald-700" : "text-slate-600 hover:text-emerald-700"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-xl border border-emerald-200 bg-white/80 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setLang("it")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "it" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                IT
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "en" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              aria-label="Apri menu navigazione"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white/70 p-2 text-slate-600 shadow-sm lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-100">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
          <div className="absolute left-1/3 top-1/3 h-56 w-56 rounded-full bg-emerald-50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>

              <div className="mt-6 h-1 w-24 rounded-full bg-emerald-500" />

              <p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-slate-600">{t.heroText}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-2xl bg-slate-950 px-6 py-6 text-sm text-white transition-all duration-200 hover:bg-slate-900 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]">
                  <a href="#cta">
                    {t.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-emerald-200 px-6 py-6 text-sm text-slate-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
                >
                  <a href="#servizi">{t.ctaSecondary}</a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.metrics.map((item) => (
                <Card
                  key={item.label}
                  className="rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-semibold text-emerald-700">{item.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t.whoLabel}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-4xl">{t.whoTitle}</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">{t.whoText1}</p>
            <p className="mt-4 text-base font-normal leading-8 text-slate-600">{t.whoText2}</p>
          </div>

          <Card className="rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold text-slate-950">{t.whyTitle}</h3>
              <div className="mt-6 grid gap-4">
                {t.advantages.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/40"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="servizi" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t.servicesLabel}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-4xl">{t.servicesTitle}</h2>
            <p className="mt-4 text-base font-normal leading-8 text-slate-600">{t.servicesText}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-emerald-200 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
                      <Icon className="h-6 w-6 text-emerald-700" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="risultati" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t.outcomesLabel}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-4xl">{t.outcomesTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{t.outcomesText}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.outcomes.map((item) => (
              <Card
                key={item.title}
                className="rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-emerald-200 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">{item.value}</div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t.methodLabel}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-4xl">{t.methodTitle}</h2>
          <p className="mt-4 text-base font-normal leading-8 text-slate-600">{t.methodText}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {t.workflow.map((item) => (
            <Card
              key={item.step}
              className="rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="text-sm font-semibold tracking-[0.2em] text-slate-400">{item.step}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="settori" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t.sectorsLabel}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-4xl">{t.sectorsTitle}</h2>
              <p className="mt-4 text-base font-normal leading-8 text-slate-600">{t.sectorsText}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.sectors.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/40 hover:text-emerald-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">{t.contactLabel}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{t.contactText}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="space-y-5 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="text-slate-400">{t.emailLabel}</div>
                    <div className="mt-1 font-medium">info@iteamproject.it</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="text-slate-400">{t.officeLabel}</div>
                    <div className="mt-1 font-medium">Via Cassia, 4 – 50124 Firenze (FI)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="text-slate-400">{t.focusLabel}</div>
                    <div className="mt-1 font-medium">{t.focusText}</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  <div>P. IVA 07518790485</div>
                  <div>Codice Univoco M5UXCR1</div>
                  <div>PEC: iteamproject@pec.it</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-slate-950 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:px-8">
          <div>
            <span className="font-semibold text-slate-700">{t.footerName}</span> · {t.payoff}
          </div>
          <div>iTeamProject S.n.c. | Via Cassia, 4 – 50124 Firenze (FI) | P. IVA 07518790485 | Codice Univoco M5UXCR1</div>
          <div>info@iteamproject.it | iteamproject@pec.it</div>
        </div>
      </footer>
    </div>
  );
}
