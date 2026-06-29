import type { Locale } from "@/lib/routes";

export type AboutContent = {
  label: string;
  title: string;
  paragraphs: string[];
  whyTitle: string;
  advantages: string[];
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
  },
};
