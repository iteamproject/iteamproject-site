import type { Locale } from "@/lib/routes";

export type MethodStep = {
  step: string;
  title: string;
  text: string;
};

export const methodStepsByLocale: Record<Locale, MethodStep[]> = {
  it: [
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
  en: [
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
};
