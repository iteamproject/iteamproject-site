import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Case History Fashion Retail | SD-WAN Enterprise e riduzione costi IT",
  description:
    "Come una primaria azienda italiana del Fashion Retail con oltre 100 punti vendita ha ridotto i costi IT fino al 40% grazie a una nuova architettura SD-WAN Enterprise.",
  keywords: [
    "case history sdwan",
    "sd-wan retail",
    "retail networking",
    "networking multi-sede",
    "it governance retail",
    "fashion retail it",
    "riduzione costi IT",
    "infrastruttura IT retail",
  ],
  openGraph: {
    title:
      "Case History Fashion Retail | SD-WAN Enterprise e riduzione costi IT",
    description:
      "Riduzione dei costi, resilienza e governance centralizzata per oltre 100 punti vendita.",
    url: "https://iteamproject.it/case-history/fashion-retail-sdwan",
    siteName: "iTeamProject",
    locale: "it_IT",
    type: "article",
  },
  alternates: {
    canonical: "https://iteamproject.it/case-history/fashion-retail-sdwan",
  },
};

export default function CaseHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}