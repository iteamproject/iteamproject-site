import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iteamproject.it"),

  title: "iTeamProject | IT Governance & Service Management",

  description:
    "iTeamProject affianca aziende e organizzazioni nella governance IT, nel coordinamento tecnico-operativo e nel controllo delle performance di servizio.",

  keywords: [
    "IT Governance",
    "IT Service Management",
    "Consulenza IT",
    "KPI IT",
    "SLA",
    "IT Operations",
    "iTeamProject",
  ],

  openGraph: {
    title: "iTeamProject | IT Governance & Service Management",
    description: "Your IT project. No stress, just results.",
    url: "https://www.iteamproject.it",
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
    title: "iTeamProject | IT Governance & Service Management",
    description: "Your IT project. No stress, just results.",
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