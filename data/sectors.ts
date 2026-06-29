import type { Locale } from "@/lib/routes";

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
