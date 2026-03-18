import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iteamproject.it"),

  title: "iTeamProject SNC | Consulenza IT, IT Governance e Service Management a Firenze",

  description:
    "iTeamProject SNC offre consulenza IT a Firenze per aziende: IT Governance, Service Management, coordinamento tecnico-operativo, KPI, SLA, audit, compliance e controllo delle performance di servizio.",

  keywords: [
    "iTeamProject SNC",
    "Consulenza IT Firenze",
    "IT Governance Firenze",
    "IT Service Management Firenze",
    "Servizi IT aziende Firenze",
    "KPI IT",
    "SLA",
    "IT Operations",
    "Audit IT",
    "Compliance IT",
  ],

  alternates: {
    canonical: "https://iteamproject.it/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "iTeamProject SNC | Consulenza IT, IT Governance e Service Management a Firenze",
    description:
      "Consulenza IT per aziende a Firenze: governance IT, service management, KPI, SLA, audit, compliance e coordinamento tecnico-operativo.",
    url: "https://iteamproject.it/",
    siteName: "iTeamProject",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iTeamProject",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "iTeamProject SNC | Consulenza IT, IT Governance e Service Management a Firenze",
    description:
      "Consulenza IT per aziende a Firenze: governance IT, service management, KPI, SLA, audit, compliance e coordinamento tecnico-operativo.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}