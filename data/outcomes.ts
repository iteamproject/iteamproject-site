import type { Locale } from "@/lib/routes";

export type OutcomeItem = {
  value: string;
  title: string;
  text: string;
};

export const outcomesByLocale: Record<Locale, OutcomeItem[]> = {
  it: [
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
  en: [
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
};
